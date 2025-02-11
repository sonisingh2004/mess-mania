'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useState } from 'react';

const PhoneOrder = () => {
  const [orderData, setOrderData] = useState({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    items: '',
    totalAmount: '',
    paymentMode: ''
  });

  const handleChange = (field: string, value: string) => {
    setOrderData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle order submission
    console.log('Order submitted:', orderData);
  };

  return (
    <div className="p-6 bg-gray-100 md:w-[80vw]">
      <Card>
        <CardHeader>
          <CardTitle>Add Phone Order</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Customer Details */}
            <div className="space-y-4">
              <h3 className="font-medium">Customer Details</h3>
              <Input
                placeholder="Customer Name"
                value={orderData.customerName}
                onChange={(e) => handleChange('customerName', e.target.value)}
              />
              <Input
                placeholder="Phone Number"
                value={orderData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
              <Input
                placeholder="Email (Optional)"
                value={orderData.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>

            {/* Address */}
            <div className="space-y-4">
              <h3 className="font-medium">Delivery Address</h3>
              <Input
                placeholder="Full Address"
                value={orderData.address}
                onChange={(e) => handleChange('address', e.target.value)}
              />
            </div>

            {/* Order Details */}
            <div className="space-y-4">
              <h3 className="font-medium">Order Details</h3>
              <Input
                placeholder="Items Ordered"
                value={orderData.items}
                onChange={(e) => handleChange('items', e.target.value)}
              />
              <Input
                placeholder="Total Amount"
                type="number"
                value={orderData.totalAmount}
                onChange={(e) => handleChange('totalAmount', e.target.value)}
              />
            </div>

            {/* Payment Mode */}
            <div className="space-y-2">
              <h3 className="font-medium">Payment Mode</h3>
              <Select
                value={orderData.paymentMode}
                onValueChange={(value) => handleChange('paymentMode', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Payment Mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">Cash on Delivery</SelectItem>
                  <SelectItem value="upi">UPI</SelectItem>
                  <SelectItem value="card">Card on Delivery</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full">
              Add Order
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhoneOrder;