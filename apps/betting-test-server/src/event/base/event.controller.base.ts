/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EventService } from "../event.service";
import { EventCreateInput } from "./EventCreateInput";
import { Event } from "./Event";
import { EventFindManyArgs } from "./EventFindManyArgs";
import { EventWhereUniqueInput } from "./EventWhereUniqueInput";
import { EventUpdateInput } from "./EventUpdateInput";
import { BetFindManyArgs } from "../../bet/base/BetFindManyArgs";
import { Bet } from "../../bet/base/Bet";
import { BetWhereUniqueInput } from "../../bet/base/BetWhereUniqueInput";

export class EventControllerBase {
  constructor(protected readonly service: EventService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Event })
  async createEvent(@common.Body() data: EventCreateInput): Promise<Event> {
    return await this.service.createEvent({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        date: true,
        sport: true,
        name: true,
        team1: true,
        team2: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Event] })
  @ApiNestedQuery(EventFindManyArgs)
  async events(@common.Req() request: Request): Promise<Event[]> {
    const args = plainToClass(EventFindManyArgs, request.query);
    return this.service.events({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        date: true,
        sport: true,
        name: true,
        team1: true,
        team2: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Event })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async event(
    @common.Param() params: EventWhereUniqueInput
  ): Promise<Event | null> {
    const result = await this.service.event({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        date: true,
        sport: true,
        name: true,
        team1: true,
        team2: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Event })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEvent(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() data: EventUpdateInput
  ): Promise<Event | null> {
    try {
      return await this.service.updateEvent({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          date: true,
          sport: true,
          name: true,
          team1: true,
          team2: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Event })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEvent(
    @common.Param() params: EventWhereUniqueInput
  ): Promise<Event | null> {
    try {
      return await this.service.deleteEvent({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          date: true,
          sport: true,
          name: true,
          team1: true,
          team2: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/bets")
  @ApiNestedQuery(BetFindManyArgs)
  async findBets(
    @common.Req() request: Request,
    @common.Param() params: EventWhereUniqueInput
  ): Promise<Bet[]> {
    const query = plainToClass(BetFindManyArgs, request.query);
    const results = await this.service.findBets(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        amount: true,
        odds: true,
        status: true,

        user: {
          select: {
            id: true,
          },
        },

        event: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/bets")
  async connectBets(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: BetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bets: {
        connect: body,
      },
    };
    await this.service.updateEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bets")
  async updateBets(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: BetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bets: {
        set: body,
      },
    };
    await this.service.updateEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bets")
  async disconnectBets(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: BetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bets: {
        disconnect: body,
      },
    };
    await this.service.updateEvent({
      where: params,
      data,
      select: { id: true },
    });
  }
}
