import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import PostsController from './posts/posts.controller';
import PostsService from './posts/posts.service';

@Module({
  imports: [PostsModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
      POSTGRES_HOST: Joi.string().required(),
      POSTGRES_PORT: Joi.number().required(),
      POSTGRES_USER: Joi.string().required(),
      POSTGRES_PASSWORD: Joi.string().required(),
      POSTGRES_DB: Joi.string().required(),
      PORT: Joi.number(),
    })
  })],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
