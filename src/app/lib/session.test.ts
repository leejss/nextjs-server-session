import { describe, expect, it } from "vitest";
import { UserDataSession } from "./session";
import { z } from "zod";

describe("session management test", () => {
  it("create session", async () => {
    const userData = {
      id: 1,
      email: "example",
    };
    const jwt = await UserDataSession.sign(userData);
    console.log("jwt", jwt);
    expect(typeof jwt).toBe("string");
  });

  it("decrypt session", async () => {
    const userData = {
      id: 1,
      email: "example",
    };
    const jwt = await UserDataSession.sign(userData);
    const payload = await UserDataSession.verify(jwt);
    const payloadSchema = z.object({
      id: z.number(),
      email: z.string(),
      iat: z.number(),
      exp: z.number(),
    });
    const result = payloadSchema.safeParse(payload);
    expect(result.success).toBe(true);
  });
});
