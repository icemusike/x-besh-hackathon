import React from 'react';
import { Mail, Video, Image, Download, Code, Terminal, Braces } from 'lucide-react';

const Resources: React.FC = () => {
  const resources = [
    {
      icon: <Mail className="h-8 w-8 text-accent-400" />,
      title: "Email swipes",
      description: "3-part prelaunch + 2 launch day sequences",
      code: "const emailSwipes = await loadResource('email_templates');"
    },
    {
      icon: <Video className="h-8 w-8 text-accent-400" />,
      title: "Demo & review video",
      description: "MP4 + captions",
      code: "const demoVideo = await loadResource('product_demo.mp4');"
    },
    {
      icon: <Image className="h-8 w-8 text-accent-400" />,
      title: "Banners in 7 sizes",
      description: "GIF + static",
      code: "const banners = await loadResource('promotional_banners');"
    },
    {
      icon: <Download className="h-8 w-8 text-accent-400" />,
      title: "Your unique JVZoo link",
      description: "Auto-pops on approval",
      code: "const affiliateLink = generateJvzooLink(affiliateId);"
    }
  ];

  return (
    <section id="resources" className="section bg-dark relative overflow-hidden">
      {/* Code-inspired background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-600/5 rounded-lg border border-primary-400/10 -rotate-12 backdrop-blur-sm hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-600/5 rounded-lg border border-accent-400/10 rotate-12 backdrop-blur-sm hidden lg:block"></div>
      
      {/* Floating code elements */}
      <div className="absolute top-40 left-5 hidden lg:flex items-center">
        <Terminal className="h-5 w-5 text-primary-400/40 mr-2" />
        <div className="font-mono text-xs text-primary-400/40">
          <span className="text-accent-300/40">async function</span> <span className="text-primary-400/40">getPromoAssets</span>() {'{'}...{'}'}
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="section-title">
          <h2 className="gradient-text">Grab your swipe files & creatives</h2>
          <p className="mt-4 max-w-2xl mx-auto text-light/80">
            Everything you need to promote XBesh AGI effectively and maximize your chances of winning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="glass-card-hover p-6 flex flex-col items-center text-center relative border-white/10 hover:border-primary-400/30 hover:shadow-neon-primary transition-all duration-500"
            >
              <div className="icon-circle-md mb-4 bg-gradient-to-br from-dark-100/50 to-dark-200/50">
                {resource.icon}
              </div>
              <h4 className="text-lg font-bold mb-2">{resource.title}</h4>
              <p className="text-light/70 text-sm mb-4">{resource.description}</p>
              
              {/* Code snippet */}
              <div className="mt-auto pt-4 border-t border-white/10 w-full">
                <div className="font-mono text-xs text-accent-400/70">
                  <code>{resource.code}</code>
                </div>
              </div>
              
              {/* Floating decoration */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent-500/20 rounded-lg border border-accent-400/20 flex items-center justify-center rotate-12 animate-float hidden md:flex" style={{ animationDelay: `${index * 0.3}s` }}>
                <Braces className="h-3 w-3 text-accent-400" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="btn-primary rounded-full px-8 py-4 relative overflow-hidden group">
            <span className="relative z-10">Download Media Pack</span>
            <span className="absolute top-0 right-full w-full h-full bg-white/20 transform transition-transform duration-1000 ease-out group-hover:right-0"></span>
          </a>
        </div>
        
        {/* Floating code element */}
        <div className="absolute bottom-10 right-10 hidden lg:flex items-center">
          <Code className="h-5 w-5 text-accent-400/40 mr-2" />
          <div className="font-mono text-xs text-accent-400/40">
            <span className="text-accent-300/40">export default</span> <span className="text-primary-400/40">PromoResources</span>;
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
