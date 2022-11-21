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

  findById(id: number) {
    return this.messages.find((message) => id === message.id);
  }

  create(message: Message) {
    return this.messages.push(message);
  }
}
