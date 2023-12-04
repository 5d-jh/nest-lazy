import { Injectable } from "@nestjs/common";
import { LazyModuleLoader } from "@nestjs/core";
import { ImportedModule } from "../imported/imported.module";
import { ImportedService } from "../imported/imported.service";

@Injectable()
export class LazyService {
  constructor(private readonly lazyModuleLoader: LazyModuleLoader) {}

  async get() {
    const ref = await this.lazyModuleLoader.load(() => ImportedModule);
    return ref.get(ImportedService);
  }
}
