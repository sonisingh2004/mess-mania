import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const mainLinks = [
    { name: 'Menu', href: '/menu' },
    { name: 'Subscription Plans', href: '/plans' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const secondaryLinks = [
    { name: 'Testimonials', href: '/testimonials' }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://facebook.com/messmania',
      label: 'Facebook'
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/messmania',
      label: 'Instagram'
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/messmania',
      label: 'Twitter'
    }
  ];

  return (
    <footer className="w-full border-t bg-[#F3F4F6]  bottom-0">
      <div className="max-w-7xl container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
          {/* Main Navigation */}
          <nav className="flex items-center space-x-6">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-900 hover:text-[#FD6F30] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-gray-900 hover:text-[#FD6F30] transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-around items-center mt-6 pt-6 border-t border-black text-sm text-gray-900">
          <div>
            © {new Date().getFullYear()} Mess Mania. All rights reserved.
          </div>
          
          <nav className="flex items-center space-x-6 mt-4 md:mt-0">
            {secondaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[#FD6F30] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;