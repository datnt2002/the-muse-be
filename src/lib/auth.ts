import 'tsconfig-paths/register';

import { PrismaPg } from '@prisma/adapter-pg';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaClient } from 'generated/prisma/client';
import configuration from 'src/config/configuration';

const connectionString = configuration().database;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
  //TODO: Add email verification later

  //TODO: Add social providers later
  socialProviders: {},

  //TODO: Update redis to handle secondary storage
});
