import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table';

const PaymentHistory = () => {
  const payments = [
    {
      id: 'PAY001',
      date: '2024-01-20',
      amount: 350,
      method: 'Credit Card',
      status: 'Completed'
    },
    {
      id: 'PAY002',
      date: '2024-01-20',
      amount: 350,
      method: 'Credit Card',
      status: 'Completed'
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Payment History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="w-full border-collapse">
          <TableHead>
            <TableRow>
              <TableCell className="p-3 border-b font-medium text-left">Payment ID</TableCell>
              <TableCell className="p-3 border-b font-medium text-left">Date</TableCell>
              <TableCell className="p-3 border-b font-medium text-right">Amount</TableCell>
              <TableCell className="p-3 border-b font-medium text-left">Method</TableCell>
              <TableCell className="p-3 border-b font-medium text-left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="p-3 border-b">{payment.id}</TableCell>
                <TableCell className="p-3 border-b">{payment.date}</TableCell>
                <TableCell className="p-3 border-b text-right">₹{payment.amount}</TableCell>
                <TableCell className="p-3 border-b">{payment.method}</TableCell>
                <TableCell className="p-3 border-b">
                  <Badge
                    // variant={payment.status === 'Completed' ? 'green' : 'gray'}
                    className="font-medium"
                  >
                    {payment.status}
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

export default PaymentHistory;