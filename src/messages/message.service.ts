import { MessageRepository } from './message.repository';
import { NotFoundException } from '@nestjs/common';
export class MessageService {
  messageRepo: MessageRepository;
  constructor() {
    // create it's dependancy on it's own and don't do that
    const repo = new MessageRepository();
    this.messageRepo = repo;
  }
  findAll() {
    return this.messageRepo.findAll();
  }
  async findOne(id: string) {
    const message = await this.messageRepo.findOne(id);
    if (!message) throw new NotFoundException('message not found with that id');
    return message;
  }
  create(content: string) {
    return this.messageRepo.create(content);
  }
}
