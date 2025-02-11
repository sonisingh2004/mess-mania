'use client';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import React from 'react';

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-16 px-4 mt-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <div>
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-gray-700">
            We&apos;d love to hear from you. Please feel free to reach out with any questions or concerns.
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-600" />
              <span>Email: contact@messmania.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-600" />
              <span>Phone: +1 (555) 123-4567</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-green-600 mt-1" />
              <span>Address: 123 Foodie Lane, San Francisco, CA 94103, United States</span>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm text-green-600" htmlFor="name">
                Name
              </label>
              <Input
                id="name"
                placeholder="Enter your name"
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-green-600" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-green-600" htmlFor="message">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Type your message"
                className="mt-1 min-h-[150px]"
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <label 
                htmlFor="terms" 
                className="text-sm text-gray-600"
              >
                I accept the Terms
              </label>
            </div>

            <Button 
              type="submit"
              className="rounded-none bg-[#FF6F30] text-white hover:bg-[#FF8C59] px-6 py-6"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;