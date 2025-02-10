'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ChevronRight, Clock, MapPin, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

const OrderFlow = () => {
  const [step, setStep] = useState(1);
  const [cart, setCart] = useState<any[]>([]);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    phone: '',
    address: '',
    landmark: ''
  });

  const meals = [
    {
      id: 1,
      name: 'North Indian Thali',
      price: 150,
      description: 'Dal, Roti, Rice, 2 Sabzi, Raita, Salad',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      name: 'South Indian Thali',
      price: 130,
      description: 'Sambar, Rasam, Rice, 3 Varieties',
      image: '/api/placeholder/400/300'
    }
  ];

  const addToCart = (meal: any) => {
    setCart([...cart, meal]);
  };

  const removeFromCart = (mealId: any) => {
    setCart(cart.filter(item => item.id !== mealId));
  };

  const handleInputChange = (field: string, value: string) => {
    setOrderDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitOrder = (paymentMethod: string) => {
    const orderData = {
      items: cart,
      customerDetails: orderDetails,
      paymentMethod,
      totalAmount: cart.reduce((sum, item) => sum + item.price, 0)
    };
    console.log('Submitting order:', orderData);
    // Add your order submission logic here
  };

  const renderMealCard = (meal: { id: any; name: any; price: any; description: any; image: any; }) => (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <img
        src={meal.image}
        alt={meal.name}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg">{meal.name}</h3>
            <p className="text-gray-600 text-sm">{meal.description}</p>
          </div>
          <span className="font-bold">₹{meal.price}</span>
        </div>
        {cart.some(item => item.id === meal.id) ? (
          <Button
            className="w-full mt-2 bg-red-500 hover:bg-red-600"
            onClick={() => removeFromCart(meal.id)}
          >
            Remove
          </Button>
        ) : (
          <Button
            className="w-full mt-2 bg-orange-500 hover:bg-orange-600"
            onClick={() => addToCart(meal)}
          >
            Add to Cart
          </Button>
        )}
      </CardContent>
    </Card>
  );

  const renderOrderSteps = () => (
    <div className="flex justify-between mb-8 px-4">
      {[
        { icon: ShoppingBag, label: 'Select Meals' },
        { icon: MapPin, label: 'Delivery Info' },
        { icon: Clock, label: 'Schedule' }
      ].map((s, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className={`rounded-full p-3 ${step > i ? 'bg-orange-500' : 'bg-gray-200'
            }`}>
            <s.icon className={`w-6 h-6 ${step > i ? 'text-white' : 'text-gray-500'
              }`} />
          </div>
          <span className="text-sm mt-2">{s.label}</span>
        </div>
      ))}
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {meals.map(meal => renderMealCard(meal))}
            </div>
            {cart.length > 0 && (
              <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  onClick={() => setStep(2)}
                >
                  Proceed with {cart.length} items (₹{cart.reduce((sum, item) => sum + item.price, 0)})
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold mb-6">Delivery Details</h2>
              <Input
                className="border-gray-300"
                placeholder="Full Name"
                value={orderDetails.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
              <Input
                className="border-gray-300"
                placeholder="Phone Number"
                value={orderDetails.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
              <Input
                className="border-gray-300"
                placeholder="Complete Address"
                value={orderDetails.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
              />
              <Input
                className="border-gray-300"
                placeholder="Landmark (Optional)"
                value={orderDetails.landmark}
                onChange={(e) => handleInputChange('landmark', e.target.value)}
              />
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600"
                onClick={() => setStep(3)}
                disabled={!orderDetails.name || !orderDetails.phone || !orderDetails.address}
              >
                Schedule Delivery
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold mb-6">Schedule & Payment</h2>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-between"
                  onClick={() => {/* Add time selection logic */ }}
                >
                  Select Delivery Time
                  <Clock className="w-4 h-4" />
                </Button>
                <div className="pt-4 border-t">
                  <h3 className="font-bold mb-3">Payment Method</h3>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                      onClick={() => handleSubmitOrder('online')}
                    >
                      Pay Online
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                      onClick={() => handleSubmitOrder('cod')}
                    >
                      Cash on Delivery
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="py-16 md:py-24 mt-16 px-5 ">
      {renderOrderSteps()}
      {renderStep()}
    </div>
  );
};

export default OrderFlow;