import { Controller, Get } from "@nestjs/common";
import { HealthService } from "./health.service";

@Controller()
export class AppController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  getRoot() {
    return {
      message: "Hospital API is running",
      docs: "Add modules for patients, appointments, doctors..."
    };
  }

  @Get("health")
  getHealth() {
    return this.healthService.getHealthStatus();
  }
}
