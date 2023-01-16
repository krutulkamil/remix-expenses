import { PrismaClient } from "@prisma/client";

/**
 * @type PrismaClient
 */
let prisma: PrismaClient;
const globalForPrisma = global as unknown as { prisma: PrismaClient };

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
    prisma.$connect();
} else {
    if (!globalForPrisma.prisma) {
        globalForPrisma.prisma = new PrismaClient();
        globalForPrisma.prisma.$connect();
    }
    prisma = globalForPrisma.prisma;
}

export { prisma };