import { MessageDto } from './messageDto';
import { Injectable } from '@nestjs/common';
import { Message } from './message';

@Injectable()
export class MessagesService {
  private messages: Message[] = [
    { id: 1, text: 'macaco' },
    { id: 2, text: 'ugagua' },
  ];

  findAll() {
    return this.messages;
  }

  async findById(id: number) {
    const message = this.messages.find((message) => id === message.id);

    if (!message) throw Error('message not exists');

    return message;
  }

  create(messageDto: MessageDto) {
    const id = this.messages.length + 1;

    const message: Message = {
      id,
      ...messageDto,
    };

    this.messages.push(message);

    return message;
  }

  update(id: number, body: Message) {
    const messageIndex = this.messages.findIndex(
      (message) => message.id === id,
    );

    this.messages[messageIndex] = body;

    return body;
  }

  removeById(id: number) {
    const messageIndex = this.messages.findIndex(
      (message) => message.id === id,
    );

    delete this.messages[messageIndex];

    return true;
  }
}
