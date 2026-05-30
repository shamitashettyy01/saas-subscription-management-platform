"use client";

export default function Admin() {

  const manageUser = () => {
    alert("User Managed Successfully");
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Admin Panel
      </h1>

      <div className="border p-5 mt-5 rounded">

        <p>User: Shamitha</p>
        <p>Role: Admin</p>

        <button
          onClick={manageUser}
          className="bg-red-500 text-white px-4 py-2 mt-4"
        >
          Manage Users
        </button>

      </div>
    </div>
  );
}