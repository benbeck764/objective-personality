import { PrismaClient, OPSTypedPerson, OPSTypedPersonLink } from '@prisma/client';

const prisma = new PrismaClient();

export { prisma, OPSTypedPerson, OPSTypedPersonLink };
