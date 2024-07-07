import { redirect } from "next/navigation";
import { UserDataSession } from "../lib/session";

export default async function ProtectedPage() {
  // user who have session data can access this page
  const session = await UserDataSession.getSession();
  if (!session) {
    redirect("/");
  }
  return (
    <div>
      <p>{JSON.stringify(session ?? "")}</p>
    </div>
  );
}
