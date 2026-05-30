"use client";

import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard");
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Login Page
      </h1>

      <input
        type="email"
        placeholder="Enter Email"
        className="border p-2 block mt-4"
      />

      <input
        type="password"
        placeholder="Enter Password"
        className="border p-2 block mt-4"
      />

      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 mt-4"
      >
        Login
      </button>
    </div>
  );
}