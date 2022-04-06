import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
// import { AuthService } from './auth/auth.service';
// import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    BooksModule,
    ConfigModule.forRoot({}),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PWD}@cluster0.kxjfs.mongodb.net/CRUD?retryWrites=true&w=majority`,
    ),
    UsersModule,
    // AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // AuthService
  ],
})
export class AppModule {}
