import { Injectable, Logger } from "@nestjs/common";
import Redis from "ioredis";
import { Pool } from "pg";

type ServiceState = "up" | "down";

@Injectable()
export class HealthService {
  private readonly logger = new Logger(HealthService.name);
  private readonly pool: Pool;
  private readonly redis: Redis;

  constructor() {
    const databaseUrl =
      process.env.DATABASE_URL ??
      "postgresql://hospital_user:hospital_password@localhost:5432/hospital_db";
    const redisUrl = process.env.REDIS_URL ?? "redis://localhost:6379";

    this.pool = new Pool({ connectionString: databaseUrl });
    this.redis = new Redis(redisUrl, {
      maxRetriesPerRequest: 1,
      enableOfflineQueue: false
    });
  }

  private async checkDatabase(): Promise<ServiceState> {
    try {
      await this.pool.query("SELECT 1");
      return "up";
    } catch (error) {
      this.logger.error("PostgreSQL check failed", error);
      return "down";
    }
  }

  private async checkRedis(): Promise<ServiceState> {
    try {
      await this.redis.ping();
      return "up";
    } catch (error) {
      this.logger.error("Redis check failed", error);
      return "down";
    }
  }

  async getHealthStatus() {
    const [database, redis] = await Promise.all([
      this.checkDatabase(),
      this.checkRedis()
    ]);

    return {
      service: "hospital-api",
      status: database === "up" && redis === "up" ? "ok" : "degraded",
      database,
      redis,
      timestamp: new Date().toISOString()
    };
  }
}
