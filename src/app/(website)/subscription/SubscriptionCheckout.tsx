'use client';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Check } from 'lucide-react';
import React, { useState } from 'react';

interface SubscriptionCheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: { name: string } | null;
}

const SubscriptionCheckout: React.FC<SubscriptionCheckoutProps> = ({ isOpen, onClose, selectedPlan }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    deliveryInstructions: '',
    mealPreferences: '',
    paymentMethod: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="font-medium mb-4">Personal Details</h3>
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full p-2 border rounded"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
            >
              Next <ArrowRight className="inline ml-2 h-4 w-4" />
            </button>
          </form>
        );

      case 2:
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="font-medium mb-4">Delivery Details</h3>
            <div className="space-y-3">
              <textarea
                name="address"
                placeholder="Delivery Address"
                required
                className="w-full p-2 border rounded"
                value={formData.address}
                onChange={handleInputChange}
              />
              <textarea
                name="deliveryInstructions"
                placeholder="Delivery Instructions (Optional)"
                className="w-full p-2 border rounded"
                value={formData.deliveryInstructions}
                onChange={handleInputChange}
              />
              <textarea
                name="mealPreferences"
                placeholder="Dietary Preferences/Restrictions (Optional)"
                className="w-full p-2 border rounded"
                value={formData.mealPreferences}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
            >
              Next <ArrowRight className="inline ml-2 h-4 w-4" />
            </button>
          </form>
        );

      case 3:
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="font-medium mb-4">Payment Details</h3>
            <div className="space-y-3">
              <div className="border rounded p-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleInputChange}
                  />
                  <span>UPI Payment</span>
                </label>
              </div>
              <div className="border rounded p-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                  />
                  <span>Credit/Debit Card</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
            >
              Complete Subscription
            </button>
          </form>
        );

      case 4:
        return (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Subscription Confirmed!</h3>
            <p className="text-gray-600 mb-4">
              Thank you for subscribing to {selectedPlan?.name}. You&apos;ll receive a confirmation email shortly.
            </p>
            <button
              onClick={onClose}
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
            >
              Done
            </button>
          </div>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            {step < 4 ? `Subscribe to ${selectedPlan?.name}` : 'Subscription Complete'}
          </DialogTitle>
        </DialogHeader>

        {step < 4 && (
          <div className="flex justify-between mb-6">
            {[1, 2, 3].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`flex items-center ${stepNumber < 3 ? 'flex-1' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center
                  ${step >= stepNumber ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`flex-1 h-1 mx-2
                    ${step > stepNumber ? 'bg-orange-500' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        )}

        {renderStep()}
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionCheckout;