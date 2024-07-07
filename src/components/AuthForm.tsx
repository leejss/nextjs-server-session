"use client";
import { useState } from "react";

interface AuthFormProps {
  type: "login" | "register";
}

export default function AuthForm({ type }: AuthFormProps) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  return (
    <div>
      <div>
        <div>
          <label id="email" htmlFor="">
            Email
          </label>
          <input id="email" type="text" value={values.email} />
        </div>
        <div>
          <label id="password" htmlFor="">
            Password
          </label>
          <input id="password" type="text" value={values.password} />
        </div>
        {type === "register" && (
          <div>
            <label id="passwordConfirm" htmlFor="">
              Confirm Password
            </label>
            <input
              id="passwordConfirm"
              type="text"
              value={values.passwordConfirm}
            />
          </div>
        )}
        <button
          onClick={async () => {
            const res = await fetch("/api/login", {
              method: "POST",
            }).then((res) => res.json());
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
