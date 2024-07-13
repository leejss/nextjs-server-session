import { Prisma } from "@prisma/client";
import db from "./prisma";
import { Result } from "./helper";

export const insertUser = async (newUser: Prisma.UserCreateInput) => {
  try {
    const result = await db.user.create({
      data: newUser,
    });
    return Result.success(result);
  } catch (error) {
    return Result.fail(error as Error);
  }
};
export const selectUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    return Result.success(user);
  } catch (error) {
    return Result.fail(error as Error);
  }
};
