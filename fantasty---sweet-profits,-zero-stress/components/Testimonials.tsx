
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Youth Club X",
      raised: "€2,450 Raised",
      text: "The process was so simple! We sold out in just 4 days. The kids loved the personalized boxes.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6euWpHgzi_6ZSaaUO1ZuG1FkxrNFsgVF6dJRDjN8weIXNr9eb9-l_gk4iVQhKO46VjS2yPuirZLxsIj48oeTufiakdM-pCvuzNO2IJA74eju3tIBq67SSXE51oQcOeJEbbE9So8cLB5SseyUCkVczXI1NJeMUuwSmatjLbtV5Zki7HbdIek_faNdZvU4IKQIyDe3mqeKrUDNj3B0s0g_CNDiNW3ljtaLWVEaH2g55cSGuhneE-aEFcSH8m50CJ4HyfTfXKuIAAFA"
    },
    {
      name: "St. Mary's School",
      raised: "€5,800 Raised",
      text: "Best fundraising partner we've ever had. Premium quality that practically sells itself.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsMNrq0TVvch3NyBjWC6omr01Oygsi4ZpRC3lUZfI0q_k5spEk7oid-1nZiI_DvjFe3XbezAKfn5Tw38R4rA0L0zV6uADJp5M3C74fsR02hyX3zR-0osiqzyhRD8YVhbeH7Tbbwhq2A949nxCf2XPDLDCb_LOc4aSrnGPu5bRNRBk9ygNq-5COi3G_pkZbkG8UKXe6e-wNFlLJK6vHZSnIIVRuXBYvlaPtnB2-QHlZ5907SQa0P4QMrfgUYg5Y2fAPpJhSX6jZYro"
    },
    {
      name: "FC Goal-getters",
      raised: "€1,920 Raised",
      text: "The personal advice on quantity was spot on. Zero leftover stock, just profit.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaP4xwUcQXsWs75YyAPeBv1cdw8yn2Axpf4X1IcE1t1T9F5vOVIDKMieMJMdGRDKZOP61BPCj1dvif5K0fteK99_e_I0UijiX539XNZu4dMzuNmKXpEO7vAt0mFRPx64BrXsgD3-WZZmK_rmh2ng1D9dU4YIZ2AwTYqmaBHCU4X1e5QYpiFruyP4VyXELWn1OzxLxudeIYDLOW_jVPLDKRRgTo1X9eacgVkR5DzOps3DuTmPtyvgzAG4ZzkgZVFNSUyqeoyjBfprQ"
    }
  ];

  return (
    <section className="px-6 lg:px-40 py-32 bg-background-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
      <div className="max-w-[1200px] mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-20 font-display">Sweet Success Stories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors shadow-2xl">
              <div className="flex items-center gap-5 mb-8">
                <div 
                  className="size-16 rounded-2xl bg-cover bg-center ring-2 ring-primary/30" 
                  style={{ backgroundImage: `url("${r.img}")` }}
                ></div>
                <div>
                  <p className="font-black text-lg font-display">{r.name}</p>
                  <p className="text-primary font-black">{r.raised}</p>
                </div>
              </div>
              <p className="text-lg opacity-80 italic leading-relaxed font-body">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
