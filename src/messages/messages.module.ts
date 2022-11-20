import { MessagesController } from './messages.controller';
import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
