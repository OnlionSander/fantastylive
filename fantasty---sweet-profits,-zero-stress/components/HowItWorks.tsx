
import React from 'react';

const steps = [
  {
    num: "1",
    title: "Choose Theme",
    desc: "Pick a theme for your campaign: Easter, Christmas, or custom branding for your club.",
    icon: "palette",
    borderColor: "border-accent",
    bgColor: "bg-accent/10",
    iconColor: "text-accent"
  },
  {
    num: "2",
    title: "Pick Sweets",
    desc: "Select from our premium range of Belgian chocolates, gummies, and luxury biscuits.",
    icon: "inventory_2",
    borderColor: "border-primary",
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    num: "3",
    title: "Earn & Smile",
    desc: "Collect your high-margin profits and celebrate with your team or organization!",
    icon: "mood",
    borderColor: "border-green-500",
    bgColor: "bg-green-500/10",
    iconColor: "text-green-500"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="px-6 lg:px-40 py-24">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 font-display">
          How it Works <span className="text-primary italic">— easy as pie</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`bg-white dark:bg-background-dark p-10 rounded-2xl shadow-xl border-b-8 ${step.borderColor} text-center group hover:-translate-y-3 transition-all duration-300`}
            >
              <div className={`size-24 ${step.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-8 ${step.iconColor} rotate-3 group-hover:rotate-0 transition-transform`}>
                <span className="material-symbols-outlined !text-5xl font-bold">{step.icon}</span>
              </div>
              <h3 className="text-2xl font-black mb-4 font-display">{step.num}. {step.title}</h3>
              <p className="opacity-70 leading-relaxed text-lg">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
