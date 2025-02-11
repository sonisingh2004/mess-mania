'use client';
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

interface Order {
  id: string;
  date: string;
  items: string[];
  total: number;
  status: 'Delivered' | 'Pending';
}

const OrderManagement = () => {
  const [orders] = useState<Order[]>([
    {
      id: 'ORD001',
      date: '2024-01-20',
      items: ['Vegetarian Thali', 'Butter Chicken'],
      total: 350,
      status: 'Delivered'
    },
    {
      id: 'ORD002',
      date: '2024-01-20',
      items: ['Vegetarian Thali', 'Butter Chicken'],
      total: 350,
      status: 'Delivered'
    }
  ]);

  return (
    <div className="p-6 bg-gray-100 md:w-[80vw]">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <ShoppingCart className="mr-2" /> Order Management
      </h1>
      <div className="bg-white shadow-md rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Items</th>
              <th className="p-4 text-left">Total</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.date}</td>
                <td className="p-4">{order.items.join(', ')}</td>
                <td className="p-4">₹{order.total}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded ${order.status === 'Delivered'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {order.status}
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

export default OrderManagement;