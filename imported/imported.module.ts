import { Module } from "@nestjs/common";
import { ImportedService } from "./imported.service";

@Module({
  providers: [ImportedService],
  exports: [ImportedService],
})
export class ImportedModule {}
