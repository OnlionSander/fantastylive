
import React from 'react';

const Products: React.FC = () => {
  const products = [
    {
      title: "Sports Edition",
      desc: "Tailored with your team colors and club crest. Perfect for soccer, tennis, and scouts.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWrOjowofLrcpjiXE1g-rpZ9q74ZIZoTWdbTp9IUilfToFxtZDeeMdy6Ji-y4NJhUk3JIoN_Iolk6x-brNO3eAsFkwYgA8KGFMw3HSFNxUGiaZUErxvt1v-iwmAKDzWkBoZtqWyFPkIl9o-SQMvB5OHLYnjlsNaX4TizCItlkS1YcEPhJ_sy8U4Yv_XqKNOd6i8ByZLixFQB-uCp3xYuRfh342Yjj6FMpAyxIJY1KjVeQSzJ-WzlXtajcbjJl1_gwrcrJrD9aS83E",
      tag: null
    },
    {
      title: "Corporate Gifting",
      desc: "Impress clients with premium customized Belgian chocolate. Elegance in every bite.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpLn9cIXb1hAKMRC_thqg6k7qhV-Suu0HPZZUbgOvTeKtlskcqhCsSx2TgbWClJQUlLDVIDBYzqpygO386uZJVQqkzAFGc1GGtf054Y5b4Je4bH7GC6BF7GnRoqGALWanAdqPNsEnohbC-qAg5Zr4E_sgGgaSNcyo30TwQjzyKOOOCSNpLb22EbXjJs0Wg8Tvoc4pv2Obcaifz0fTAnc8CirmGBpL8G0-7jFvG3ICv_wBcgRImfnTVfiYjTt36jtTJ9Ywp1xFnnu4",
      tag: "Most Popular"
    },
    {
      title: "Seasonal Specials",
      desc: "Easter, Saint Nicholas, or End-of-Year themes. Special limited edition artisan collections.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAvoHNu-n6eHAEp6RHiJCCGjg0fNVrurd8Q2327ud1LBmCgsZvWsP-OHMU2XMzSltotv0ZeEjdxuAf4F37z5J1LbNCqPb6JZ8t0btTHiQ7kdgAkHjfTSumveAeKWQUg5iYRtO-JDcqYBcDNBPws6NBdR4-6Q7tri2jH21uA-rXnEgflxR92tv3o1QWhomkHwPQvZcJB41-T1JGOY3Pv6I6XgziX5Hx2mfSJ9rhnEFEgyDL28nBhm8CwcCj5Vdy2YveudELiw95SYQ",
      tag: null
    }
  ];

  return (
    <section className="px-6 lg:px-40 py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Your Brand, Our Sweets</h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">Every box is a masterpiece. We handle the design, sleeves, logos, and heartfelt messages.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {products.map((p, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-background-dark p-6 shadow-2xl transition-all duration-300 ${p.tag ? 'md:scale-110 border-2 border-primary' : 'hover:-translate-y-2'}`}
            >
              <div 
                className="aspect-square rounded-2xl bg-cover bg-center mb-8 shadow-inner transform group-hover:scale-105 transition-transform duration-500" 
                style={{ backgroundImage: `url("${p.img}")` }}
              ></div>
              <h4 className="text-2xl font-black mb-4 font-display">{p.title}</h4>
              <p className="text-base opacity-70 leading-relaxed">{p.desc}</p>
              {p.tag && (
                <div className="absolute top-8 right-8 bg-primary text-white text-[12px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg">
                  {p.tag}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
