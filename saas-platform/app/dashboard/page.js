import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      {/* Navigation Menu */}

      <div className="flex gap-4 mt-5">

        <Link href="/dashboard">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Dashboard
          </button>
        </Link>

        <Link href="/pricing">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Pricing
          </button>
        </Link>

        <Link href="/billing">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">
            Billing
          </button>
        </Link>

        <Link href="/admin">
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Admin
          </button>
        </Link>

      </div>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-2 gap-5 mt-10">

        <div className="border p-5 rounded">
          <h2 className="font-bold text-xl">
            Total Users
          </h2>
          <p className="text-2xl mt-2">120</p>
        </div>

        <div className="border p-5 rounded">
          <h2 className="font-bold text-xl">
            Revenue
          </h2>
          <p className="text-2xl mt-2">₹50,000</p>
        </div>

      </div>

      <button className="bg-black text-white px-4 py-2 mt-8 rounded">
        Logout
      </button>

    </div>
  );
}