'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { useState } from 'react';
import SubscriptionCheckout from './SubscriptionCheckout';

const SubscriptionPlans = () => {
  // Add state for handling checkout modal
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string; features: string[]; popular: boolean } | null>(null);

  const plans = [
    {
      name: "Basic Plan",
      price: "₹1999/month",
      features: [
        "2 meals per day",
        "Free delivery",
        "Basic menu selection",
        "Weekend delivery available",
        "Cancel anytime"
      ],
      popular: false
    },
    {
      name: "Premium Plan",
      price: "₹2999/month",
      features: [
        "3 meals per day",
        "Free priority delivery",
        "Premium menu selection",
        "Weekend delivery included",
        "Customizable meal plans",
        "24/7 customer support"
      ],
      popular: true
    },
    {
      name: "Family Plan",
      price: "₹5999/month",
      features: [
        "4 meals per day",
        "Free priority delivery",
        "Full menu access",
        "Family-size portions",
        "Customizable meal plans",
        "Dedicated support",
        "Special occasion perks"
      ],
      popular: false
    }
  ];

  // Handle opening the checkout modal
  const handleSubscribe = (plan: { name: string; price: string; features: string[]; popular: boolean }) => {
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="py-16 px-4 md:py-24 mt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Meal Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect meal plan that fits your lifestyle. Enjoy fresh, delicious meals
            delivered right to your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'border-2 border-orange-500' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl text-center">{plan.name}</CardTitle>
                <div className="text-center mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleSubscribe(plan)}
                  className={`w-full mt-6 py-2 px-4 rounded-lg font-medium transition-colors
                    ${plan.popular
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50'
                    }`}
                >
                  Subscribe Now
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Add the SubscriptionCheckout component */}
      <SubscriptionCheckout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
};

export default SubscriptionPlans;