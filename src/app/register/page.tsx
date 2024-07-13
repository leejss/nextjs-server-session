import AuthForm from "@/components/AuthForm";

export default async function RegisterPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Register User</h1>
      <AuthForm type="register" />
    </div>
  );
}
