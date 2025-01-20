// components/MealOptionsSection.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const mealOptions = [
  {
    title: "Diverse Meal Selection",
    image: "/assets/menu/food1.jpg",
    description: "Our menu features a wide array of dishes, catering to various dietary preferences. Enjoy the taste of home with our carefully prepared meals.",
    alt: "Vegetarian meal box with various vegetables and quinoa"
  },
  {
    title: "Fresh Vegetarian Delights",
    image: "/assets/menu/food2.jpg",
    description: "Savor the freshness of our vegetarian meals, made with locally sourced ingredients. Perfect for those who prefer plant-based options.",
    alt: "Vegan meal box with colorful vegetables and tofu"
  },
  {
    title: "Authentic Indian Flavors",
    image: "/assets/menu/food3.jpg",
    description: "Experience the rich and diverse flavors of India with our traditional thali meals. Each dish is prepared with love and care, ensuring a delightful culinary journey.",
    alt: "Gluten-free meal box with proteins and vegetables"
  }
];

const Menu = () => {
  return (
    <section className="py-16 md:py-24 mt-16 ">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-24 grid lg:grid-cols-2 gap-[35rem] items-center relative ">
          <div className="space-y-6 ">
            <h2 className="absolute top-0 text-[45px] font-bold tracking-tight mb-6">
            Explore Our Delicious Meal Options
          </h2>
          </div>
          <div className="w-[550px]">
            <p className="text-lg text-gray-900">
            Discover a wide range of meals crafted to suit every taste and dietary need. From hearty classics to light, nutritious options, our menu is designed to bring the comfort of home-cooked meals to your doorstep. Enjoy the convenience of easy online ordering and flexible delivery schedules, ensuring a satisfying dining experience every time.
          </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mealOptions.map((option, index) => (
            <Card key={index} className="overflow-hidden rounded-sm border-none shadow-none">
              <div className="relative h-72 w-full">
                <Image
                  src={option.image}
                  alt={option.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className=" p-0 pt-4">
                <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                <p className="text-gray-900 ">
                  {option.description}
                </p>
              </CardContent>
              <CardFooter className="p-0 pt-10">
                <Link href={'/delivery-service'}>
                <Button 
                  variant="outline"
                  className="px-6 py-6 font-light rounded-none border-[#FF5722] text-[#FF5722] hover:bg-[#FF6F30] hover:text-white"
                >
                  Learn More
                </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;