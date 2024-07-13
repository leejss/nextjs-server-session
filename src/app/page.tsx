import AuthForm from "@/components/AuthForm";
import Link from "next/link";

export default async function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <AuthForm type="login" />
      <Link href="/register">Register</Link>
    </div>
  );
}
