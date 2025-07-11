import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-gray-300">
            Made with <Heart size={16} className="text-red-500" /> by Megha Shyam
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © 2024 Megha Shyam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;