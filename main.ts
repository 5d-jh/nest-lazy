import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { GlobalModule } from "./global/global.module";
import { LazyModule } from "./lazy/lazy.module";
import { LazyService } from "./lazy/lazy.service";

@Module({
  imports: [GlobalModule, LazyModule],
})
class MainModule {}

async function main() {
  const app = await NestFactory.create(MainModule);
  const service = app.get(LazyService);
  const messageService = await service.get();
  console.log(messageService.getMessage());
}

main();
