import { User } from "@prisma/client";
import { Result } from "../helper";

export const login = async (email: string, password: string) => {
  const url = "/api/login";
  try {
    const json = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }).then((res) => res.json() as Promise<User>);
    return Result.success(json);
  } catch (error) {
    return Result.fail(error as Error);
  }
};
export const register = async (email: string, password: string) => {
  const url = "/api/register";
  try {
    const json = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }).then((res) => res.json() as Promise<User>);

    return Result.success(json);
  } catch (error) {
    return Result.fail(error as Error);
  }
};
