import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { validate } from 'env.validation';
import configuration from './config/configuration';
import { auth } from './lib/auth';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

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
    UserModule,
  ],
})
export class AppModule {}
