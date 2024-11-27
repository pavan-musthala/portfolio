import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 bg-gradient-to-br from-gray-900 to-black border-t border-gray-800/20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Pavan Sai Musthala
        </p>
      </div>
    </footer>
  );
}