import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'messages';
  }
  @Post()
  createMessage() {
    return 'create message';
  }
  @Get('/:id')
  getMessage() {
    return 'single message';
  }
}
