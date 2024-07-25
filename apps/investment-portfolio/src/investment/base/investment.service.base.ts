/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Investment as PrismaInvestment,
  Investor as PrismaInvestor,
} from "@prisma/client";

export class InvestmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.InvestmentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.investment.count(args);
  }

  async investments(
    args: Prisma.InvestmentFindManyArgs
  ): Promise<PrismaInvestment[]> {
    return this.prisma.investment.findMany(args);
  }
  async investment(
    args: Prisma.InvestmentFindUniqueArgs
  ): Promise<PrismaInvestment | null> {
    return this.prisma.investment.findUnique(args);
  }
  async createInvestment(
    args: Prisma.InvestmentCreateArgs
  ): Promise<PrismaInvestment> {
    return this.prisma.investment.create(args);
  }
  async updateInvestment(
    args: Prisma.InvestmentUpdateArgs
  ): Promise<PrismaInvestment> {
    return this.prisma.investment.update(args);
  }
  async deleteInvestment(
    args: Prisma.InvestmentDeleteArgs
  ): Promise<PrismaInvestment> {
    return this.prisma.investment.delete(args);
  }

  async getInvestor(parentId: string): Promise<PrismaInvestor | null> {
    return this.prisma.investment
      .findUnique({
        where: { id: parentId },
      })
      .investor();
  }
}
