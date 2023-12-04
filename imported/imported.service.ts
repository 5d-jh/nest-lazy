import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class ImportedService {
  constructor(@Inject("GLOBAL") private readonly message: string) {}

  getMessage() {
    return this.message;
  }
}
