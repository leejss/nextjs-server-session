import { UserDataSession } from "@/app/lib/session";

export async function POST(req: Request) {
  const token = await UserDataSession.sign({
    id: 1,
    email: "example@example.com",
  });
  UserDataSession.save(token);
  return new Response("success", {
    status: 200,
  });
}
