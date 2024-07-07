import prisma from "./prisma";

export const selectUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return user;
};
