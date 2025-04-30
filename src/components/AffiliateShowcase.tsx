import React from 'react';
import Slider from 'react-slick';
import { Star } from 'lucide-react'; // Using Star for testimonial rating/icon

const AffiliateShowcase: React.FC = () => {
  const affiliates = [
    { name: 'Abhi Dwivedi', imageUrl: '/Abhi Dwivedi.jpg', testimonial: 'XBesh is a game-changer for rapid SaaS deployment!' },
    { name: 'Ali G', imageUrl: '/Ali G.jpg', testimonial: 'Incredible potential here. The speed is unmatched.' },
    { name: 'Firas Alameh', imageUrl: '/Firas Alameh.jpg', testimonial: 'My audience is going to love this. Easy promotion!' },
    { name: 'Luke Maguire', imageUrl: '/Luke Maguire.jpg', testimonial: 'Finally, AI software building made simple.' },
    { name: 'Mark Thompson', imageUrl: '/Mark Thompson.jpg', testimonial: 'This pre-launch is heating up! Huge opportunity.' },
    { name: 'Mike From Maine', imageUrl: '/Mike From Maine.jpg', testimonial: 'Jump on this hackathon – $500 is just the start.' },
    { name: 'Neil Napier', imageUrl: '/Neil Napier.jpg', testimonial: 'XBesh delivers on the promise of AI-driven app creation.' },
    { name: 'Ryan Phillips', imageUrl: '/Ryan Phillips.jpg', testimonial: 'Highly recommend getting involved early.' },
    { name: 'Steve Hasse', imageUrl: '/Steve Hasse.jpg', testimonial: 'The Golden-Key strategy is pure genius for affiliates.' },
    { name: 'Stoica Bogdan', imageUrl: '/Stoica Bogdan.jpg', testimonial: "Don't miss this launch – it's going to be massive." },
    { name: 'Tim Verdouw', imageUrl: '/Tim Verdouw.jpg', testimonial: 'Excited to see the results from this hackathon!' },
    { name: 'Todd Gross', imageUrl: '/Todd Gross.jpg', testimonial: 'XBesh is the future of no-code SaaS building.' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    arrows: false, // Hide default arrows, can add custom ones if needed
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 on medium screens
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 on small screens
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 on extra small screens
        }
      }
    ],
    // Custom dots styling (optional)
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: "-40px" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-2 h-2 rounded-full bg-gray-700 hover:bg-primary transition-colors duration-300"></div>
    )
  };

  return (
    <section className="py-16 bg-gradient-to-b from-dark to-gray-950/80 relative overflow-hidden">
       {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary-900/10 to-transparent opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-900/10 to-transparent opacity-50 blur-3xl"></div>
      
      <div className="container relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
          Join Top Affiliate Partners!
        </h2>
        <Slider {...settings}>
          {affiliates.map((affiliate) => (
            <div key={affiliate.name} className="px-3">
              <div className="glass-card p-6 rounded-xl border border-gray-700/50 h-full flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-neon-primary-sm">
                <img 
                  src={affiliate.imageUrl} 
                  alt={affiliate.name} 
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-700/80 shadow-lg"
                  loading="lazy"
                />
                <h4 className="text-lg font-semibold mb-2 text-white">{affiliate.name}</h4>
                <div className="flex justify-center mb-3 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm text-gray-300 italic leading-relaxed">"{affiliate.testimonial}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AffiliateShowcase; 