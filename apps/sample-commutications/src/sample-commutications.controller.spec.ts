import { Test, TestingModule } from '@nestjs/testing';
import { SampleCommuticationsController } from './sample-commutications.controller';
import { SampleCommuticationsService } from './sample-commutications.service';

describe('SampleCommuticationsController', () => {
  let sampleCommuticationsController: SampleCommuticationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SampleCommuticationsController],
      providers: [SampleCommuticationsService],
    }).compile();

    sampleCommuticationsController = app.get<SampleCommuticationsController>(SampleCommuticationsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sampleCommuticationsController.getHello()).toBe('Hello World!');
    });
  });
});
