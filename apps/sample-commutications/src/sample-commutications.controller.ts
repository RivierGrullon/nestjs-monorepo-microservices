import { Controller, Get } from '@nestjs/common';
import { SampleCommuticationsService } from './sample-commutications.service';
import { EventPattern } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Controller()
export class SampleCommuticationsController {
  constructor(private readonly sampleCommuticationsService: SampleCommuticationsService) {}

  @Get()
  getHello(): string {
    return this.sampleCommuticationsService.getHello();
  }

  @EventPattern('user_created')
  handleUserCreated(data: CreateUserEvent) {
    this.sampleCommuticationsService.handleUserCreated(data);
  }
}
