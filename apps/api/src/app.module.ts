import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { HealthService } from "./health.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [HealthService]
})
export class AppModule {}
