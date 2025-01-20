import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Busy Professional",
      comment: "Mess Mania has transformed my lunch breaks! The meals are always fresh and flavorful.",
      rating: 5,
      image: "/api/placeholder/48/48"
    },
    {
      id: 2,
      name: "Michael Smith",
      role: "Family Man",
      comment: "Our family loves the variety! It's like having a home-cooked meal every day without the hassle.",
      rating: 5,
      image: "/api/placeholder/48/48"
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Health Enthusiast",
      comment: "I appreciate the healthy options available. Mess Mania makes it easy to eat well!",
      rating: 5,
      image: "/api/placeholder/48/48"
    },
    {
      id: 4,
      name: "David Brown",
      role: "Student",
      comment: "As a student, I don't have time to cook. Mess Mania is a lifesaver with their tasty meals!",
      rating: 5,
      image: "/api/placeholder/48/48"
    },
    {
      id: 5,
      name: "Laura Wilson",
      role: "Working Mom",
      comment: "The convenience of delivery and the quality of food is unmatched. Highly recommend!",
      rating: 5,
      image: "/api/placeholder/48/48"
    },
    {
      id: 6,
      name: "James Taylor",
      role: "Corporate Executive",
      comment: "I love the flexibility of the subscription plans. The meals are always a delight!",
      rating: 5,
      image: "/api/placeholder/48/48"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, index) => (
      <Star 
        key={index} 
        className="w-4 h-4 fill-yellow-400 text-yellow-400" 
      />
    ));
  };

  return (
    <section className="w-full py-12 bg-white text-black mt-16">
      <div className="max-w-7xl container mx-auto px-4 md:px-6 py-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-tighter mb-4">
            What Our Customers Say
          </h2>
          <p className="text-black md:text-md">
            Discover how our meals have transformed busy lives with convenience and taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white text-black rounded-none border-black">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="mb-6 text-gray-700">
                  {testimonial.comment}
                </p>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-900">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;