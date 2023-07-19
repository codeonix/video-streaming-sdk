import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async register(userDto: User): Promise<User> {
    const newUser = new this.userModel(userDto);
    return newUser.save();
  }

  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  async login(email: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email }).exec();
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async findById(userId: string): Promise<User> {
    return this.userModel.findById(userId).exec();
  }

  async findAllOnlineUsers(): Promise<User[]> {
    const onlineUsers = await this.userModel.find({ isOnline: true }).exec();
    return onlineUsers;
  }
}
