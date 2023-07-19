import { MongooseModule } from '@nestjs/mongoose';

export const databaseProviders = [
  MongooseModule.forRoot(
    'mongodb+srv://video:video@cluster0.5htughl.mongodb.net/?retryWrites=true&w=majority',
  ),
];
