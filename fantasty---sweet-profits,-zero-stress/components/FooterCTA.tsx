
import React from 'react';

const FooterCTA: React.FC = () => {
  return (
    <section className="px-6 lg:px-40 py-32 text-center">
      <div className="max-w-[1100px] mx-auto bg-primary rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 size-60 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 size-80 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight font-display tracking-tight">
            Start Your Sweet Success Today
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto font-body font-medium">
            Join 500+ Belgian organizations raising funds the delicious way. No upfront costs, no risk, just sweet rewards.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-primary px-12 py-6 rounded-full text-2xl font-black shadow-2xl hover:bg-gray-100 hover:scale-105 transition-all font-display">
              Start My Campaign
            </button>
            <button className="bg-transparent border-4 border-white text-white px-12 py-6 rounded-full text-2xl font-black hover:bg-white/10 hover:scale-105 transition-all font-display">
              Request a Sample
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
