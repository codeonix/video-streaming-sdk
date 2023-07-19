import { Controller, Get, Render } from '@nestjs/common';
import { StreamingService } from '../services/streaming.service';

@Controller()
export class StreamingController {
  constructor(private readonly streamingService: StreamingService) {}

  @Get('/video-call')
  @Render('video-call')
  async joinVideoCall() {
    const roomId = await this.streamingService.generateRoomId();
    return { roomId };
  }
}
