import { Module } from '@nestjs/common';
import { SampleCommuticationsController } from './sample-commutications.controller';
import { SampleCommuticationsService } from './sample-commutications.service';

@Module({
  imports: [],
  controllers: [SampleCommuticationsController],
  providers: [SampleCommuticationsService],
})
export class SampleCommuticationsModule {}
