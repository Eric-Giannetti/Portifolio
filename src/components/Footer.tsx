import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-white">
              Eric.dev
            </a>
          </div>
          <div className="text-sm">
            &copy; {currentYear} Eric Giannetti. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}