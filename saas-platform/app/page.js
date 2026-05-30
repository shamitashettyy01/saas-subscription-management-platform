import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold">
        SaaS Subscription Platform
      </h1>

      <div className="mt-10 flex gap-5">

        <Link href="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </Link>

        <Link href="/pricing">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Pricing
          </button>
        </Link>

        <Link href="/dashboard">
          <button className="bg-purple-500 text-white px-4 py-2 rounded">
            Dashboard
          </button>
        </Link>

        <Link href="/admin">
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Admin
          </button>
        </Link>

      </div>
    </div>
  );
}