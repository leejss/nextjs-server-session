import { PrismaClient } from "@prisma/client";

const prismaClient = () => new PrismaClient();

declare const globalThis: {
  prismaGlobal: PrismaClient;
} & typeof global;

const db = globalThis.prismaGlobal || prismaClient();

export default db;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = db;
