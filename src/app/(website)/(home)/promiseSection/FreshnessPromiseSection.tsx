import { Card, CardContent } from '@/components/ui/card';
import { Leaf } from 'lucide-react';
import Image from 'next/image';

const FreshnessPromiseSection = () => {
  const features = [
    {
      text: "Locally sourced, fresh ingredients",
      id: 1
    },
    {
      text: "Carefully crafted recipes",
      id: 2
    },
    {
      text: "Commitment to quality and taste",
      id: 3
    }
  ];

  return (
    <section className=" py-12 bg-white">
      <div className=" max-w-7xl container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative ">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-[621px]">
                  <Image 
                    src="/assets/home/fresh.jpg" 
                    alt="Fresh ingredients on a wooden cutting board"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-5xl font-semibold leading-tight tracking-tighter mb-2">
                Our Promise of Freshness and Quality in Every Meal
              </h2>
              <p className="text-gray-900 md:text-lg">
                At Mess Mania, we are dedicated to delivering nutritious and delicious meals made from the freshest, locally sourced ingredients. Our commitment to quality ensures that every meal is prepared with care, providing you with a home-cooked experience.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature) => (
                <div 
                  key={feature.id} 
                  className="flex items-center space-x-3 "
                >
                  <div className="flex-shrink-0">
                    <Leaf className="h-5 w-5 text-[#4CAF50] variant-filled" />
                  </div>
                  <p className="text-gray-900">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreshnessPromiseSection;