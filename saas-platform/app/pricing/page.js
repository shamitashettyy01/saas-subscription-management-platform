"use client";

export default function Pricing() {

  const upgradePlan = (plan) => {
    alert(`You selected ${plan} Plan`);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Subscription Plans</h1>

      <div className="border p-5 mt-5 rounded">
        <h2 className="text-2xl font-bold">Basic Plan</h2>
        <p className="mt-2">₹499 / month</p>

        <button
          onClick={() => upgradePlan("Basic")}
          className="bg-blue-500 text-white px-4 py-2 mt-4"
        >
          Choose Plan
        </button>
      </div>

      <div className="border p-5 mt-5 rounded">
        <h2 className="text-2xl font-bold">Premium Plan</h2>
        <p className="mt-2">₹999 / month</p>

        <button
          onClick={() => upgradePlan("Premium")}
          className="bg-green-500 text-white px-4 py-2 mt-4"
        >
          Upgrade Now
        </button>
      </div>
    </div>
  );
}