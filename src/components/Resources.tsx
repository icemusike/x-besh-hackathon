import React from 'react';
import { BookOpen, FileCode, FileText, Video, Github, Database } from 'lucide-react';

const Resources: React.FC = () => {
  const resources = [
    {
      icon: <BookOpen className="h-8 w-8 text-accent" />,
      title: "Documentation",
      description: "Comprehensive guides to help you understand the XBesh platform and API.",
      link: "#",
      linkText: "View Documentation"
    },
    {
      icon: <FileCode className="h-8 w-8 text-accent" />,
      title: "Starter Templates",
      description: "Ready-to-use code templates to jumpstart your project development.",
      link: "#",
      linkText: "Download Templates"
    },
    {
      icon: <Github className="h-8 w-8 text-accent" />,
      title: "Sample Projects",
      description: "Example implementations to inspire your hackathon submission.",
      link: "#",
      linkText: "Explore on GitHub"
    },
    {
      icon: <Video className="h-8 w-8 text-accent" />,
      title: "Tutorial Videos",
      description: "Step-by-step video guides on using XBesh's affiliate features.",
      link: "#",
      linkText: "Watch Tutorials"
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: "API Reference",
      description: "Detailed API documentation with endpoints, parameters, and examples.",
      link: "#",
      linkText: "Browse API Docs"
    },
    {
      icon: <FileText className="h-8 w-8 text-accent" />,
      title: "Submission Guidelines",
      description: "Requirements and best practices for your hackathon submission.",
      link: "#",
      linkText: "Read Guidelines"
    }
  ];

  return (
    <section id="resources" className="section bg-dark">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text">Resources</h2>
          <p className="mt-4 max-w-2xl mx-auto text-light/80">
            We've prepared everything you need to succeed in the hackathon. Access these resources to build your best project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="glass-card p-6 transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-light/70 mb-4">{resource.description}</p>
                  <a 
                    href={resource.link} 
                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                  >
                    {resource.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-card p-8 text-center">
          <h3 className="text-xl font-bold mb-3">Need Additional Help?</h3>
          <p className="text-light/80 max-w-2xl mx-auto mb-6">
            Join our Discord community to connect with other participants and get support from the XBesh team.
          </p>
          <a href="#" className="btn-outline">
            Join Discord Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resources;
