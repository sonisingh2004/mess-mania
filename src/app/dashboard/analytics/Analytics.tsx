import { PieChart } from 'lucide-react';



const AnalyticsDashboard = () => {
  const orderMetrics = [
    {
      totalOrders: 60,
      monthlyRevenue: 17500,
      averageOrderValue: 350
    },
  ];
  const userMetrics = [
    {
      totalUsers: 100,
      newUsersThisMonth: 15,
      retentionRate: 75
    },
  ];

  return (
    <div className="p-6 bg-gray-100 md:w-[80vw]">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <PieChart className="mr-2" /> Analytics Dashboard
      </h1>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Order Metrics</h2>
          <div className="space-y-2">
            <div>Total Orders:{orderMetrics[0].totalOrders}</div>
            <div>Monthly Revenue:₹{orderMetrics[0].monthlyRevenue}</div>
            <div>Average Order Value:₹{orderMetrics[0].averageOrderValue}</div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">User Metrics</h2>
          <div className="space-y-2">
            <div>Total Users:{userMetrics[0].totalUsers}</div>
            <div>New Users this Month:{userMetrics[0].newUsersThisMonth}</div>
            <div>Retention Rate:{userMetrics[0].retentionRate}%</div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default AnalyticsDashboard;