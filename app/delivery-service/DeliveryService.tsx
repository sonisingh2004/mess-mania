'use client';

import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const SketchUnderline = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className="relative inline-block">
      {children}
      <motion.svg
        className="absolute -bottom-4 left-1/2 w-[100%] -translate-x-1/2"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M9.3,133.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"
          fill="none"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: {
              duration: 2.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 3,
            },
            opacity: {
              duration: 0.5,
              ease: 'easeIn',
            },
          }}
        />
      </motion.svg>
    </span>
  );
};

const DeliveryService = () => {
  const { scrollY } = useScroll();

  // Transform values for scale effect only
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Scalable Background Image */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-top bg-no-repeat bg-cover brightness-75"
          style={{
            backgroundImage: `url('assets/delivery-service/delivery-service.jpg')`,
            scale,
            transformOrigin: 'bottom center'
          }}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-2 max-w-4xl tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Enjoy <SketchUnderline>Home-Cooked</SketchUnderline> Meals Daily
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto mt-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover the joy of nutritious meals delivered to your doorstep. Our
          diverse menu caters to all dietary preferences, ensuring satisfaction
          with every bite. Experience the convenience of Mess Mania today!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href={'/menu'}>
            <Button
              variant="outline"
              size="lg"
              className="rounded-none px-6 py-6 bg-white text-black hover:bg-gray-100 min-w-[150px]"
            >
              View Menu
            </Button>
          </Link>

          <Button
            variant="outline"
            size="lg"
            className="rounded-none px-6 py-6 border-white text-white hover:bg-white hover:text-black min-w-[150px]"
          >
            Subscribe Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliveryService;