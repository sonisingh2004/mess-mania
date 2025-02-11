// components/MealOptionsSection.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const mealOptions = [
  {
    title: "Vegetarian Delights",
    image: "/assets/home/vegetable.jpg",
    description: "Our vegetarian meals are crafted with fresh, locally sourced ingredients, offering a nutritious and satisfying dining experience. Perfect for those who prefer plant-based options.",
    alt: "Vegetarian meal box with various vegetables and quinoa"
  },
  {
    title: "Vegan Variety",
    image: "/assets/home/vegan.jpg",
    description: "Explore our vegan menu, featuring a delightful assortment of plant-based dishes that are both nutritious and delicious. Ideal for those following a vegan lifestyle.",
    alt: "Vegan meal box with colorful vegetables and tofu"
  },
  {
    title: "Gluten-Free Goodness",
    image: "/assets/home/gluten-free.jpg",
    description: "Our gluten-free meals are carefully prepared to ensure they meet dietary needs without compromising on taste. Enjoy a safe and delicious dining experience.",
    alt: "Gluten-free meal box with proteins and vegetables"
  }
];

const MealOptionsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 grid lg:grid-cols-2 gap-[35rem] items-center relative ">
          <div className="space-y-6 ">
            <h2 className="absolute top-0 text-[3rem] font-semibold tracking-tight mb-6">
            Explore Our Diverse Meal Options
          </h2>
          </div>
          <div className="w-[600px]">
            <p className="text-lg text-gray-700">
            Discover a wide range of delicious meals tailored to suit various dietary preferences. 
            Whether you&apos;re looking for vegetarian, vegan, or gluten-free options, our menu has 
            something for everyone. Enjoy the convenience of home-cooked meals delivered right to 
            your doorstep, ensuring freshness and quality in every bite.
          </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mealOptions.map((option, index) => (
            <Card key={index} className="overflow-hidden rounded-sm border-none shadow-none">
              <div className="relative h-64 w-full">
                <Image
                  src={option.image}
                  alt={option.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-0 pt-4">
                <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                <p className="text-gray-900">
                  {option.description}
                </p>
              </CardContent>
              <CardFooter className="p-0 pt-10">
                <Link href={"/menu"}>
                <Button 
                  variant="outline"
                  className="px-6 py-6 font-light rounded-none border-[#FF5722] text-[#FF5722] hover:bg-[#FF6F30] hover:text-white"
                >
                  Learn More
                </Button></Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MealOptionsSection;