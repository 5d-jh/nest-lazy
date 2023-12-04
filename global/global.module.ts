import { Global, Module } from "@nestjs/common";

@Global()
@Module({
  providers: [
    {
      provide: "GLOBAL",
      useValue: "hi",
    },
  ],
})
export class GlobalModule {}
