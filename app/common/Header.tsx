// components/Header.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center ">
            <span className="font-dancing text-5xl font-bold">Mess Mania</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/menu" 
              className="text-gray-900 hover:text-[#FF6F30] transition-colors"
            >
              Menu
            </Link>
            <Link 
              href="/subscription-plans" 
              className="text-gray-900 hover:text-[#FF6F30] transition-colors"
            >
              Subscription Plans
            </Link>
            <Link 
              href="/testimonials" 
              className="text-gray-900 hover:text-[#FF6F30] transition-colors"
            >
              Testimonials
            </Link>
            <Link 
              href="/contact-us" 
              className="text-gray-900 hover:text-[#FF6F30] transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="py-6 px-6 font-light border-[#FF5722] text-[#FF5722] hover:bg-[#FF6F30] rounded-none hover:text-white"
            >
              Order Now
            </Button>
            <Link href={"/menu"}>
            <Button 
              className="py-6 px-6 font-light bg-[#FF6F30] text-white hover:bg-[#FF8C59] rounded-none"
            >
              View Menu
            </Button>
            </Link>     
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <Button 
            variant="ghost"
            className="md:hidden"
            size="icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;