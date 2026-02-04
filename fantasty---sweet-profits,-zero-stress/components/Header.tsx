
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-40 py-4">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 text-primary">
          <div className="size-8">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-black leading-tight tracking-tighter font-display">Fantasty</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-9">
          <a className="text-sm font-bold hover:text-primary transition-colors" href="#how-it-works">How it Works</a>
          <a className="text-sm font-bold hover:text-primary transition-colors" href="#products">Products</a>
          <a className="text-sm font-bold hover:text-primary transition-colors" href="#pricing">Calculator</a>
          <a className="text-sm font-bold hover:text-primary transition-colors" href="#reviews">Reviews</a>
        </nav>

        <div className="flex gap-4">
          <button className="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-full h-11 px-5 bg-primary text-white text-sm font-bold transition-all hover:scale-105 hover:bg-primary-dark">
            Start Now
          </button>
          <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-full h-11 px-5 bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-all">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
