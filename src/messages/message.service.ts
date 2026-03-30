import { MessageRepository } from './message.repository';
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
  findOne(id) {
    return this.messageRepo.findOne(id);
  }
  create(content) {
    return this.messageRepo.create(content);
  }
}
