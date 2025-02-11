// components/OrderingSection.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const orderingSteps = [
  {
    title: "Online Ordering",
    content: `Easily select your meals from our diverse menu and place your order in just a few clicks.`
  },
  {
    title: "Flexible Subscriptions",
    content: `Choose a subscription plan that fits your schedule, with options for daily or weekly deliveries.`
  }
];

const OrderSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-start mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Ordering Made Easy
          </h2>
          <div className="w-[850px]">
            <p className="text-lg text-black">
              Discover how our simple online ordering system and flexible subscription plans work to bring
              you delicious meals effortlessly.
            </p>
          </div>
        </div>
        {/* Accordion */}
        <Accordion type="single" collapsible className="mb-12">
          {orderingSteps.map((step, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-semibold hover:text-[#FF5722]">
                {step.title}
              </AccordionTrigger>
              <AccordionContent className="text-black">
                {step.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Section */}
        <div className="text-start space-y-6 mt-16">
          <h3 className="text-3xl font-bold">
            Get Started Today
          </h3>
          <p className="text-lg text-gray-700">
            Join us for a hassle-free meal delivery experience.
          </p>
          <Link href="/orderNow">
            <Button
              size="lg"
              className=" font-normal rounded-none px-6 py-6 bg-[#FF6F30] text-white hover:bg-[#FF8C59] "
            >
              Order Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;