import {
  Controller,
  Post,
  Body,
  Get,
  Res,
  Req,
  Session,
  Render,
  Query,
} from '@nestjs/common';
import { UserDto } from '../dtos/user.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/register')
  @Render('register')
  registerForm(@Query('message') message: string) {
    return { message };
  }

  @Post('/register')
  async register(@Body() userDto: UserDto, @Res() response) {
    const registeredUser = await this.usersService.register(userDto);
    response.redirect('/users/register?message=success');
  }

  @Post('/login')
  async login(@Body() userDto: UserDto, @Session() session, @Res() response) {
    const user = await this.usersService.login(userDto.email, userDto.password);
    if (user) {
      session.user = user; // Store user details in the session
      return response.json({ message: 'User logged in successfully', user });
    }
    return response.status(401).json({ message: 'Invalid credentials' });
  }

  @Get()
  redirectToRegistration(@Req() request, @Res() response) {
    if (!request.session || !request.session.user) {
      return response.redirect('/users/register');
    }
    return response.redirect('/users/login');
  }
}
