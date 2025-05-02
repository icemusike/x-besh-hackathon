import React from 'react';
import Slider, { Settings } from 'react-slick';
import { Star } from 'lucide-react'; // Using Star for testimonial rating/icon

interface Affiliate {
  name: string;
  imageUrl: string;
  testimonial: string;
}

const AffiliateShowcase: React.FC = () => {
  const affiliates: Affiliate[] = [
    // { name: 'Abhi Dwivedi', imageUrl: '/Abhi Dwivedi.jpg', testimonial: 'XBesh is a game-changer for rapid SaaS deployment!' },
    { name: 'Ali G', imageUrl: '/Ali G.jpg', testimonial: 'Incredible potential here. The speed is unmatched.' },
    { name: 'Cindy Donavan', imageUrl: '/cindy_donavan.jpg', testimonial: 'Excited to promote XBesh to my audience!' },
    { name: 'Firas Alameh', imageUrl: '/Firas Alameh.jpg', testimonial: 'My audience is going to love this. Easy promotion!' },
    // { name: 'Luke Maguire', imageUrl: '/Luke Maguire.jpg', testimonial: 'Finally, AI software building made simple.' },
    { name: 'Mark Thompson', imageUrl: '/Mark Thompson.jpg', testimonial: 'This pre-launch is heating up! Huge opportunity.' },
    { name: 'Mike From Maine', imageUrl: '/Mike From Maine.jpg', testimonial: 'Jump on this hackathon – $500 is just the start.' },
    // { name: 'Neil Napier', imageUrl: '/Neil Napier.jpg', testimonial: 'XBesh delivers on the promise of AI-driven app creation.' },
    { name: 'Ryan Phillips', imageUrl: '/Ryan Phillips.jpg', testimonial: 'Highly recommend getting involved early.' },
    { name: 'Steve Hasse', imageUrl: '/Steve Hasse.jpg', testimonial: 'The Golden-Key strategy is pure genius for affiliates.' },
    { name: 'Stoica Bogdan', imageUrl: '/Stoica Bogdan.jpg', testimonial: "Don't miss this launch – it's going to be massive." },
    { name: 'Tim Verdouw', imageUrl: '/Tim Verdouw.jpg', testimonial: 'Excited to see the results from this hackathon!' },
    { name: 'Todd Gross', imageUrl: '/Todd Gross.jpg', testimonial: 'XBesh is the future of no-code SaaS building.' },
    { name: 'You?', imageUrl: 'placeholder', testimonial: 'Your success story could be next! Join the Hackathon!' },
  ];

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    appendDots: (dots: any) => (
      <div style={{ bottom: "-45px" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="slick-dot w-2.5 h-2.5 rounded-full bg-gray-600/50 hover:bg-primary transition-colors duration-300"></div>
    )
  };

  return (
    <section className="py-20 bg-gradient-to-b from-dark via-gray-950 to-dark relative overflow-hidden">
       {/* Enhanced background elements */}
      <div className="absolute -top-20 left-0 w-1/2 h-full bg-gradient-radial from-primary-800/15 to-transparent opacity-70 blur-3xl transform -rotate-12"></div>
      <div className="absolute -bottom-20 right-0 w-1/2 h-full bg-gradient-radial from-accent-800/15 to-transparent opacity-70 blur-3xl transform rotate-12"></div>
      
      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glow-text">
          Backed by Top Affiliate Partners
        </h2>
        
        {/* Carousel container with gradient fades */}
        <div className="relative showcase-carousel-container">
          {/* Left Fade */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-24 z-10 bg-gradient-to-r from-dark via-dark/80 to-transparent pointer-events-none"></div>
          
          <Slider {...settings}>
            {affiliates.map((affiliate) => (
              <div key={affiliate.name} className="px-3 py-2">
                <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 h-full flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-primary hover:border-primary-500/70">
                  {affiliate.imageUrl === 'placeholder' ? (
                    // Placeholder SVG
                    <div className="w-28 h-28 rounded-full mb-5 border-4 border-dashed border-gray-700/70 shadow-lg ring-1 ring-primary-500/30 bg-gray-800/50 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600/80 opacity-70">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      </svg>
                    </div>
                  ) : (
                    // Regular Image
                    <img 
                      src={affiliate.imageUrl} 
                      alt={affiliate.name} 
                      className="w-28 h-28 rounded-full object-cover mb-5 border-4 border-gray-800/70 shadow-lg ring-1 ring-primary-500/30"
                      loading="lazy"
                    />
                  )}
                  <h4 className="text-lg font-semibold mb-2 text-white tracking-wide">{affiliate.name}</h4>
                  <div className="flex justify-center mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-sm text-gray-300/90 italic leading-relaxed">"{affiliate.testimonial}"</p>
                </div>
              </div>
            ))}
          </Slider>

          {/* Right Fade */}
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-24 z-10 bg-gradient-to-l from-dark via-dark/80 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateShowcase; 