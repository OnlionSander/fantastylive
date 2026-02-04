
import React, { useState, useMemo } from 'react';

const Calculator: React.FC = () => {
  const [sellers, setSellers] = useState(50);
  const [products, setProducts] = useState(12);
  const PROFIT_PER_UNIT = 4.5;

  const totalProfit = useMemo(() => {
    return (sellers * products * PROFIT_PER_UNIT).toLocaleString('nl-BE');
  }, [sellers, products]);

  const kitCount = useMemo(() => {
    return Math.floor((sellers * products * PROFIT_PER_UNIT) / 180);
  }, [sellers, products]);

  return (
    <section className="px-6 lg:px-40 py-20 bg-white dark:bg-background-dark/50">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 font-display">Interactive Profit Calculator</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">See exactly how much your organization can earn with a few simple sliders. We make fundraising transparent.</p>
        </div>

        <div className="p-8 md:p-12 rounded-xl shadow-2xl bg-background-light dark:bg-background-dark border border-primary/5 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            {/* Sellers Slider */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <label className="text-xl font-bold font-display">Number of Sellers</label>
                <span className="bg-primary text-white px-4 py-1.5 rounded-full font-bold text-lg">{sellers}</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="250" 
                value={sellers}
                onChange={(e) => setSellers(Number(e.target.value))}
                className="w-full h-3 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            {/* Products Slider */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <label className="text-xl font-bold font-display">Products per Seller</label>
                <span className="bg-primary text-white px-4 py-1.5 rounded-full font-bold text-lg">{products}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={products}
                onChange={(e) => setProducts(Number(e.target.value))}
                className="w-full h-3 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="p-5 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">info</span>
              <p className="text-sm italic opacity-70">Based on our standard Belgian Chocolate Mix box profit of €4.50 per unit. Higher tiers available for specialized products.</p>
            </div>
          </div>

          <div className="bg-primary rounded-3xl p-10 text-white text-center flex flex-col justify-center items-center gap-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <p className="text-xl font-medium opacity-90 uppercase tracking-widest font-display">Your Total Profit</p>
            <p className="text-6xl md:text-8xl font-black font-display tracking-tight">€{totalProfit}</p>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <p className="text-sm md:text-base font-bold">Enough for {kitCount} new team kits!</p>
            </div>
            <button className="mt-6 w-full bg-white text-primary py-5 rounded-full font-black text-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
