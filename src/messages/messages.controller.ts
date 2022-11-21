import { MessagesService } from './messages.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Message } from './message';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.messagesService.findById(Number(params.id));
  }

  @Post()
  create(@Body() body: Message) {
    console.log(body);
    return this.messagesService.create(body);
  }
  @Put(':id')
  update(@Param() params, @Body() body: Message) {
    console.log(body);
    return this.messagesService.update(Number(params.id), body);
  }

  @Delete(':id')
  removeById(@Param() params) {
    return this.messagesService.removeById(Number(params.id));
  }
}
