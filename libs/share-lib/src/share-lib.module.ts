import { Module } from '@nestjs/common';
import { ShareLibService } from './share-lib.service';

@Module({
  providers: [ShareLibService],
  exports: [ShareLibService],
})
export class ShareLibModule {}
