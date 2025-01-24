import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';



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
    <Card className=" w-[90vw] md:w-[80vw]">
      <CardHeader>
        <CardTitle>Analytics Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Order Metrics</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Orders:</span>
                <span>{orderMetrics[0].totalOrders}</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly Revenue:</span>
                <span>₹{orderMetrics[0].monthlyRevenue}</span>
              </div>
              <div className="flex justify-between">
                <span>Average Order Value:</span>
                <span>₹{orderMetrics[0].averageOrderValue}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">User Metrics</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Users:</span>
                <span>{userMetrics[0].totalUsers}</span>
              </div>
              <div className="flex justify-between">
                <span>New Users this Month:</span>
                <span>{userMetrics[0].newUsersThisMonth}</span>
              </div>
              <div className="flex justify-between">
                <span>Retention Rate:</span>
                <span>{userMetrics[0].retentionRate}%</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsDashboard;