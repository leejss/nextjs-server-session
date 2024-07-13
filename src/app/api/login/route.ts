import { Result } from "@/app/lib/helper";
import { selectUserByEmail } from "@/app/lib/queries";
import { userSchema } from "@/app/lib/schema";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = userSchema.parse(body);
  const result = await selectUserByEmail(email);

  if (Result.isFail(result)) {
    return new Response(JSON.stringify(result.error), { status: 400 });
  }

  if (result.value.password !== password) {
    return new Response("Invalid password", { status: 400 });
  }

  return new Response(JSON.stringify(result.value), { status: 200 });
}
