import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExchangeModuleBase } from "./base/exchange.module.base";
import { ExchangeService } from "./exchange.service";
import { ExchangeController } from "./exchange.controller";
import { ExchangeResolver } from "./exchange.resolver";

@Module({
  imports: [ExchangeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExchangeController],
  providers: [ExchangeService, ExchangeResolver],
  exports: [ExchangeService],
})
export class ExchangeModule {}
