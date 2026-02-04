
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 lg:px-40 py-16 border-t border-primary/10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4 text-primary">
            <div className="size-8">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-black font-display">Fantasty</h2>
          </div>
          
          <p className="text-base opacity-60 font-medium">
            © 2024 Fantasty Fundraising BV. Made with chocolate in Belgium.
          </p>
          
          <div className="flex gap-10">
            <a className="font-bold opacity-60 hover:opacity-100 hover:text-primary transition-all" href="#">Instagram</a>
            <a className="font-bold opacity-60 hover:opacity-100 hover:text-primary transition-all" href="#">LinkedIn</a>
            <a className="font-bold opacity-60 hover:opacity-100 hover:text-primary transition-all" href="#">Contact</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/5 text-center opacity-40 text-sm">
          Registered in Flanders. Artisan License No. BE84.22.10
        </div>
      </div>
    </footer>
  );
};

export default Footer;
