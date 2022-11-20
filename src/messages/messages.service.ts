import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  private messages = [
    { id: 1, text: 'macaco' },
    { id: 2, text: 'ugagua' },
  ];

  findAll() {
    return this.messages;
  }
}
