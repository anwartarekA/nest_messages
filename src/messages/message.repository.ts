import { readFile, writeFile } from 'fs/promises';
export class MessageRepository {
  // list all messages
  async findAll() {
    const contents = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }
  // find by id
  async findOne(id: string) {
    const contents = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];
  }
}
