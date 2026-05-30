export default function Billing() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Billing & Invoices
      </h1>

      <div className="border p-5 mt-5 rounded">
        <p>Invoice ID: INV001</p>
        <p>Amount Paid: ₹999</p>
        <p>Status: Paid</p>
      </div>

      <div className="border p-5 mt-5 rounded">
        <p>Invoice ID: INV002</p>
        <p>Amount Paid: ₹499</p>
        <p>Status: Pending</p>
      </div>
    </div>
  );
}