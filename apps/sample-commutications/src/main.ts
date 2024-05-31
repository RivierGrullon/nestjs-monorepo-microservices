import { NestFactory } from '@nestjs/core';
import { SampleCommuticationsModule } from './sample-commutications.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SampleCommuticationsModule,
    {
      transport: Transport.TCP,
    },
  );
  app.listen();
}
bootstrap();
