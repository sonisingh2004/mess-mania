import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FAQSection = () => {
  const faqs = [
    {
      id: "meals",
      question: "What meals do you offer?",
      answer: "We offer a wide variety of meals including traditional Indian, Continental, and healthy options. Our menu rotates weekly to ensure variety and freshness. All meals are prepared fresh daily using locally sourced ingredients."
    },
    {
      id: "order",
      question: "How do I place an order?",
      answer: "You can easily place an order through our website by selecting your meals and choosing a subscription plan that suits you."
    },
    {
      id: "schedule",
      question: "What is your delivery schedule?",
      answer: "We offer flexible delivery schedules to accommodate your needs, whether you prefer daily or weekly deliveries."
    }
  ];

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* FAQ Header */}
        <div className="mb-10">
          <h2 className="text-5xl font-bold tracking-tighter mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-[700px]">
            <p className="text-gray-900 text-lg">
            Find answers to your questions about our tiffin delivery service, meal options, and
            subscription plans.
          </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="mb-10">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Need Help Section */}
        <div className=" pt-8">
          <h3 className="text-2xl font-bold mb-4">Need More Help?</h3>
          <p className="text-gray-600 mb-6">
            Contact us for any additional questions or support regarding our services.
          </p>
          <Link href={'/contact-us'}>
          <Button 
            className="bg-[#FF6F30] text-white hover:bg-[#FF8C59] rounded-none px-6 py-6 font-normal"
          >
            Get in Touch
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;