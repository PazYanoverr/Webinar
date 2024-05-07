import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExchangeService } from "./exchange.service";
import { ExchangeControllerBase } from "./base/exchange.controller.base";

@swagger.ApiTags("exchanges")
@common.Controller("exchanges")
export class ExchangeController extends ExchangeControllerBase {
  constructor(
    protected readonly service: ExchangeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
