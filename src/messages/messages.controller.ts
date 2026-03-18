import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'messages';
  }
  @Post()
  createMessage(@Body() body: any) {
    return body;
  }
  @Get('/:id')
  getMessage() {
    return 'single message';
  }
}
