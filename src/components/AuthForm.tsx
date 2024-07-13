"use client";
import { Result } from "@/app/lib/helper";
import { Auth } from "@/app/lib/services";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface AuthFormProps {
  type: "login" | "register";
}

export default function AuthForm({ type }: AuthFormProps) {
  const router = useRouter();
  const [values, setValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (type === "login") {
      const result = await Auth.login(values.email, values.password);
      if (Result.isFail(result)) {
        // Handle error
        console.error(result.error);
        return;
      }
    }

    if (type === "register") {
      // check if password and passwordConfirm match

      if (values.password !== values.passwordConfirm) {
        // Handle error
        console.error("Passwords do not match");
        return;
      }

      const result = await Auth.register(values.email, values.password);
      if (Result.isFail(result)) {
        // Handle error
        console.error(result.error);
        return;
      }
      router.replace("/");
    }
  };

  return (
    <div className="rounded-md border-2  p-4">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label id="email" htmlFor="">
            Email
          </label>
          <input
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded text-black"
            name="email"
            type="text"
            value={values.email}
          />
        </div>
        <div className="flex flex-col">
          <label id="password" htmlFor="">
            Password
          </label>
          <input
            onChange={handleChange}
            className="border text-black border-gray-300 px-3 py-2 rounded"
            name="password"
            type="text"
            value={values.password}
          />
        </div>
        {type === "register" && (
          <div className="flex flex-col">
            <label id="passwordConfirm" htmlFor="">
              Confirm Password
            </label>
            <input
              onChange={handleChange}
              className="border text-black border-gray-300 px-3 py-2 rounded"
              name="passwordConfirm"
              type="text"
              value={values.passwordConfirm}
            />
          </div>
        )}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          {
            {
              login: "Login",
              register: "Register",
            }[type]
          }
        </button>
      </div>
    </div>
  );
}
