import { MessageDto } from './messageDto';
import { MessagesService } from './messages.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
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
    return this.messagesService.findById(Number(params.id)).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  create(@Body() messageDto: MessageDto) {
    return this.messagesService.create(messageDto);
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
