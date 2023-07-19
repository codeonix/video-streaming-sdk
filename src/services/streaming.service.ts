import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VideoCall, VideoCallDocument } from '../models/video-call.model';

@Injectable()
export class StreamingService {
  constructor(
    @InjectModel(VideoCall.name)
    private videoCallModel: Model<VideoCallDocument>,
  ) {}

  async generateRoomId(): Promise<string> {
    // Logic to generate a unique room ID for the video call
    // You can use a library like UUID to generate the ID
    const roomId = 'room123';

    // Save the video call details to the database
    const videoCall = new this.videoCallModel({
      roomId,
      createdAt: new Date(),
    });
    await videoCall.save();

    return roomId;
  }
}
