import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class SampleCommuticationsService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handlerUserCreated - COMMUNICATIONS', data);
    // TODO: Email the user...
  }
}
