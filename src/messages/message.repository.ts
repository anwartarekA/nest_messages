import { readFile, writeFile } from 'fs/promises';
export class MessageRepository {
  // list all messages
  async findAll() {
    const contents = await readFile('message.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }
  // find by id
  async findOne(id: string) {
    const contents = await readFile('message.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }
  // create message
  async create(content: string) {
    const contents = await readFile('message.json', 'utf8');
    const messages = JSON.parse(contents);
    // create random id
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content };
    await writeFile('message.json', JSON.stringify(messages));
  }
}
