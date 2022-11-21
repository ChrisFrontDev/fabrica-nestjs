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

  findById(id: number) {
    return this.messages.find((message) => id === message.id);
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
