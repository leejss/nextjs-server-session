import { Result } from "@/app/lib/helper";
import { insertUser } from "@/app/lib/queries";
import { userSchema } from "@/app/lib/schema";

// Edge of computation
export async function POST(request: Request) {
  const body = await request.json();
  const input = userSchema.parse(body);
  const result = await insertUser(input);

  if (Result.isSuccess(result)) {
    return new Response(JSON.stringify(result.value));
  }

  return new Response(JSON.stringify(result.error), { status: 400 });
}
