import { Injectable } from '@nestjs/common';
import { findIndex } from 'rxjs';
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

  create(message: Message) {
    return this.messages.push(message);
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
