// components/AboutSection.tsx
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-[10rem] items-center relative">
          {/* Left Column - Title */}
          <div className="space-y-6 ">
            <h1 className=" absolute top-8 text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-gray-900 ">
              Discover Mess Mania
            </h1>
          </div>

          {/* Right Column - Content */}
          <Card className="bg-white/50 backdrop-blur-sm border-none shadow-none">
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-gray-900 text-lg leading-relaxed">
                  Mess Mania is dedicated to delivering the taste of home-cooked meals right to your doorstep. Founded in 2023, we emerged from a passion for cooking and a commitment to making healthy eating accessible.
                
                  Our mission is to provide convenient, nutritious, and delicious meals tailored for busy professionals and families. We prioritize quality by using fresh, locally sourced ingredients, and we strive for customer satisfaction with every meal.
                
                
                  Our team, including culinary expert Aisha Khan and nutritionist Raj Patel, works tirelessly to create a diverse menu that caters to various dietary preferences.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default About;