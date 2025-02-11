// pages/index.js
import AnimatedText from '@/app/(website)/animations/AnimatedText';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20 gap-[13rem]">
          {/* Left Content Section */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="text-black font-montserrat">Discover </span>
              <span className="text-[#FF5722]">
                <AnimatedText text="Delicious" className={''} />
              </span>
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-black">
              Home-Cooked Meals
            </h2>
            <p className="text-xl text-black max-w-2xl font-montserrat pt-[45px]">
              Enjoy the convenience of our tiffin delivery service, bringing
              nutritious meals right to your doorstep. Perfect for busy
              professionals and families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href={'/menu'}>
                <Button
                  className="bg-[#FF6F30] text-white hover:bg-[#FF8C59] rounded-none font-light text-md px-6 py-6"
                  size="lg"
                >
                  View Menu
                </Button>
              </Link>
              <a href="tel:+918986815104">
                <Button
                  variant="outline"
                  className=" border-[#FF5722] text-[#FF5722] hover:bg-[#FF6F30] rounded-none hover:text-white text-md font-light px-6 py-6"
                  size="lg"
                >
                  Call Now
                </Button>
              </a>

            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative aspect-square">
                <Image
                  src="/assets/home/tenweb_media_ZC9TTsM7.jpg"
                  alt="Delicious tiffin meal with curry, vegetables, and bread"
                  fill
                  className="object-cover rounded-sm shadow-xl"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#FBE9E7] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-[#FFCCBC] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#FBE9E7] rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#FFCCBC] rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
      </main>
    </div>
  );
}
