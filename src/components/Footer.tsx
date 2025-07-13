import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-gray-200/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
            <span>Made with</span>
            <span>💻</span>
            <span>and</span>
            <Heart size={18} className="text-red-500 animate-pulse" />
            <span>by</span>
            <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
              Megha Shyam
            </span>
          </div>
          <p className="text-gray-500 text-sm mb-2">
            © 2025 Megha Shyam. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs">
            Aspiring AI Engineer | Turning data into real-world impact.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;