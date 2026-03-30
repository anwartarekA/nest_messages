import { MessageRepository } from './message.repository';
import { NotFoundException, Injectable } from '@nestjs/common';
@Injectable()
export class MessageService {
  // use inversion of control (dependency injection)
  constructor(public repo: MessageRepository) {
    // create it's dependancy on it's own and don't do that
    // const repo = new MessageRepository();
    // this.messageRepo = repo;
  }
  async findAll() {
    const messages = await this.repo.findAll();
    return { length: Object.keys(messages).length, ...messages };
  }
  async findOne(id: string) {
    const message = await this.repo.findOne(id);
    if (!message) throw new NotFoundException('message not found with that id');
    return message;
  }
  create(content: string) {
    return this.repo.create(content);
  }
}
