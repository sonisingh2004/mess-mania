import { Leaf, Truck, UtensilsCrossed } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Truck className="w-12 h-12 text-green-600" />,
      title: "Convenient Delivery",
      description: "Our tiffin delivery service brings meals right to your doorstep, saving you time and effort. Enjoy the convenience of fresh meals without the hassle of cooking."
    },
    {
      icon: <UtensilsCrossed className="w-12 h-12 text-green-600" />,
      title: "Diverse Menu",
      description: "Choose from a wide range of meal options that cater to various dietary needs. Our menu is designed to satisfy every palate, ensuring a delightful dining experience."
    },
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: "Fresh Ingredients",
      description: "We prioritize quality by sourcing ingredients locally. Each meal is prepared with care, ensuring freshness and flavor in every bite."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Our Tiffin Benefits
          </h2>
          <p className="text-lg text-gray-900 max-w-3xl mx-auto">
            Enjoy the ease of having home-cooked meals delivered directly to you,
            tailored to your dietary preferences.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-900">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;