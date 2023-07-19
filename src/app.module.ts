import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StreamingController } from './controllers/streaming.controller';
import { StreamingService } from './services/streaming.service';
import { VideoCall, VideoCallSchema } from './models/video-call.model';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User, UserSchema } from './models/user.model';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://video:video@cluster0.5htughl.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      { name: VideoCall.name, schema: VideoCallSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [StreamingController, UsersController],
  providers: [StreamingService, UsersService],
})
export class AppModule {}
