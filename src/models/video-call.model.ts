import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VideoCallDocument = VideoCall & Document;

@Schema()
export class VideoCall {
  @Prop()
  roomId: string;

  @Prop()
  createdAt: Date;
}

export const VideoCallSchema = SchemaFactory.createForClass(VideoCall);
