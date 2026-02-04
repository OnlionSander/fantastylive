
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="px-6 lg:px-40 py-12 md:py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative overflow-hidden rounded-xl md:rounded-3xl shadow-2xl">
          <div 
            className="flex min-h-[600px] flex-col gap-8 bg-cover bg-center items-center justify-center p-8 text-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(242, 13, 128, 0.4), rgba(34, 16, 25, 0.8)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAB1sNEAkEAMkkaEZixLUHe5gtFnyM2mrU-YAtRi3x1N6t8hf8R6uCdWcWgovEtdtjL-SUuOHFfk6rFY-1wz24lcEr9PY9RhqzYDkWhWBzcVnuOgv9ZDaz_b8Wm420-juKgQCO5miMT-gB5GvBII7EMPBez-cUnco6FSmMtLmZwjjMz0dhHWCm-LB7oZlUC6fFkgt8IMhIjZJyUmYCK6iL2T9f_NydhwfoWuJ-WpyAoQcuFCjbra2YQkvgejg29_oyfNlo0nZTPMf0")`
            }}
          >
            <div className="max-w-3xl flex flex-col gap-6 animate-fade-in">
              <h1 className="text-white text-5xl md:text-7xl font-black leading-none tracking-tight font-display">
                Sweet Profits, <span className="text-accent italic">Zero Stress.</span>
              </h1>
              <p className="text-white/90 text-lg md:text-2xl font-medium leading-relaxed font-body">
                The ultimate Belgian fundraising and sweet gift platform. Raise funds effortlessly with premium artisan sweets and personalized candy boxes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a 
                href="#pricing"
                className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-accent text-white text-lg font-black shadow-lg shadow-accent/30 hover:bg-accent/90 transition-all hover:-translate-y-1"
              >
                Calculate Your Profit
              </a>
              <button className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-white text-primary text-lg font-black shadow-lg hover:bg-gray-50 transition-all hover:-translate-y-1">
                View Our Treats
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
