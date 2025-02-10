'use client';
import { CreditCard } from "lucide-react";
import { useState } from "react";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([
    {
      id: 'PAY001',
      date: '2024-01-20',
      amount: 350,
      method: 'Credit Card',
      status: 'Completed'
    },
    {
      id: 'PAY001',
      date: '2024-01-20',
      amount: 350,
      method: 'Credit Card',
      status: 'pending'
    },
  ]);

  return (
    <div className="p-6 bg-gray-100 md:w-[80vw]">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <CreditCard className="mr-2" /> Payment History
      </h1>
      <div className="bg-white shadow-md rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left">Payment ID</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Method</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{payment.id}</td>
                <td className="p-4">{payment.date}</td>
                <td className="p-4">₹{payment.amount}</td>
                <td className="p-4">{payment.method}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded ${payment.status === 'Completed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                    }`}>
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PaymentHistory;