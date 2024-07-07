import { PrismaClient } from "@prisma/client";

const prismaClient = () => new PrismaClient();

declare const globalThis: {
  prismaGlobal: PrismaClient;
} & typeof global;

const prisma = globalThis.prismaGlobal || prismaClient();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
