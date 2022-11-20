import { MessagesService } from './messages.service';
import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }
}
