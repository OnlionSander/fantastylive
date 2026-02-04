
import React from 'react';

const Features: React.FC = () => {
  const list = [
    { icon: 'bolt', label: 'Fast Service' },
    { icon: 'chat', label: 'Personal Advice' },
    { icon: 'stars', label: 'Premium Brands' },
    { icon: 'verified_user', label: 'Zero Risk' },
  ];

  return (
    <section className="px-6 lg:px-40 py-24 bg-primary/5">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-black mb-10 font-display leading-tight">
            Why hundreds of Belgian clubs choose <span className="text-primary">Fantasty</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {list.map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 group">
                <div className="size-12 bg-white dark:bg-background-dark flex items-center justify-center rounded-2xl shadow-md group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary font-bold">{item.icon}</span>
                </div>
                <p className="font-black text-xl font-display">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition-all"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
              <img 
                className="w-full h-auto" 
                alt="Assorted premium Belgian chocolates and sweets in gift box" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiT3FGrM9FaG-E4dBu6sST-EGMLjyJ_WMFV_w35Pserj7GJJNw_aHKsahsNy7D3qxoz0bB1Wb8JHwUm39lhTaBacurMd-zkNZEjMv7YzHAFqH8dRJ5ROOoyuKurN29BV-BbpTLey4cDETd9IBAf5iWm7yE3szcTbHzXxbrwqExx_1BEDtX0YtaTbAho3MhJdTDyclX5zEh77Qtq4nshlFMbcN0xSXsnEgZkC46mnSkBkaKJ0cdMkkoemjA_I1G1NIH9wqBOX0lzWU"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
