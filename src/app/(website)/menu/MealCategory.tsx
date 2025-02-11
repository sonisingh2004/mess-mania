

const Menu = () => {
  const categories = [
    {
      title: "Vegetarian",
      description: "Savor our delightful vegetarian meals, crafted with fresh, local ingredients."
    },
    {
      title: "Vegan",
      description: "Indulge in our plant-based vegan meals, full of flavor and nutrition."
    }
  ];
  return (
    <section className=" py-5  ">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-24 grid lg:grid-cols-2 gap-[35rem] items-center relative ">
          <div className="space-y-6 ">
            <h2 className="absolute top-0 text-[45px] font-bold tracking-tight mb-6">
            Explore Our Meal 
          </h2>
          <h2 className=" absolute top-8 text-[45px] font-bold tracking-tight mb-6">Categories</h2>
          </div>
          <div className="w-[550px]">
            <p className="text-lg text-gray-900">
          Discover a variety of meal options tailored to your dietary needs. Whether you’re looking for vegetarian, vegan, or gluten-free meals, Mess Mania has something delicious for everyone. Enjoy the convenience of home-cooked meals delivered to your doorstep.
          </p>
          <div className="grid md:grid-cols-2 mt-8">
          {categories.map((category) => (
            <div key={category.title}>
                <h2 className="text-3xl font-bold mb-3">{category.title}</h2>
                <p className="text-gray-900">
                  {category.description}
                </p>
            </div>
          ))}
        </div>
      </div>
          </div>
        </div>

        </section>
  );
};

export default Menu;