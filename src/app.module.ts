import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { validate } from 'env.validation';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { auth } from './lib/auth';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
      load: [configuration],
      validate: validate,
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule.forRoot({ auth }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
