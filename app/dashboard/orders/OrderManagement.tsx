
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table';

const OrderManagement = () => {
  const orders = [
    {
      id: 'ORD001',
      date: '2024-01-20',
      items: 'Vegetarian Thali, Butter Chicken',
      total: 350,
      status: 'Delivered'
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Order Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="w-full border-collapse">
          <TableHead>
            <TableRow>
              <TableCell className="p-3 border-b font-medium text-left">Order ID</TableCell>
              <TableCell className="p-3 border-b font-medium text-left">Date</TableCell>
              <TableCell className="p-3 border-b font-medium text-left">Items</TableCell>
              <TableCell className="p-3 border-b font-medium text-right">Total</TableCell>
              <TableCell className="p-3 border-b font-medium text-left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="p-3 border-b">{order.id}</TableCell>
                <TableCell className="p-3 border-b">{order.date}</TableCell>
                <TableCell className="p-3 border-b">{order.items}</TableCell>
                <TableCell className="p-3 border-b text-right">₹{order.total}</TableCell>
                <TableCell className="p-3 border-b">
                  <Badge
                    // variant={order.status === 'Delivered' ? 'green' : 'gray'}
                    className="font-medium"
                  >
                    {order.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OrderManagement;