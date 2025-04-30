import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';
import { UploadCloud, Link as LinkIcon, Github, Info, Send, User, AtSign, Hash } from 'lucide-react';

const SubmitProject: React.FC = () => {
  const navigate = useNavigate();
  // Deadline: May 6th, 2025, 23:59 EST (which is May 7th, 04:59 UTC)
  const deadline = new Date('2025-05-07T04:59:00Z'); 

  const [projectName, setProjectName] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState(''); // For verification
  const [affiliateName, setAffiliateName] = useState(''); // Added state
  const [affiliateId, setAffiliateId] = useState(''); // Added state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // --- Validation --- (Added affiliateName and affiliateId)
    if (!projectName || !projectUrl || !description || !email || !affiliateName || !affiliateId) {
      setErrorMessage('Please fill in all required fields.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    // Add more specific validation if needed (e.g., URL format, ID format)
    
    try {
      // TODO: Replace console.log with actual submission logic (e.g., API call)
      console.log('Submitting project:', {
        projectName,
        projectUrl,
        githubUrl,
        description,
        email,
        affiliateName, // Added
        affiliateId, // Added
        submissionTime: new Date().toISOString(),
      });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      // Optionally navigate away or show success inline
      // navigate('/submission-successful'); 

    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage('An unexpected error occurred. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 bg-dark text-light">
      {/* Consistent Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-gray-950 to-dark"></div>
        <div className="absolute inset-0 bg-noise opacity-15"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary-700/15 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-accent-700/15 to-transparent blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto p-8 md:p-12 bg-gray-950/80 backdrop-blur-xl rounded-3xl border border-gray-700/60 shadow-2xl shadow-primary-900/40">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30 ring-4 ring-primary-500/20">
              <UploadCloud className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 glow-text">Hackathon Project Submission</h1>
            <p className="text-base md:text-lg text-gray-300 mb-6">
              Submit your amazing XBesh-powered project here to compete for the $500 prize!
            </p>
            {/* Deadline Countdown */}
            <div className="inline-block p-3 bg-gray-800/60 rounded-xl border border-gray-700/50">
              <p className="text-xs text-primary-300 mb-1 font-medium">Submission Deadline:</p>
              <CountdownTimer targetDate={deadline} />
            </div>
          </div>

          {/* Submission Form */}
          {submitStatus === 'success' ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-success-500 to-accent-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-success-500/30">
                <Send className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-success-400 mb-4">Submission Received!</h2>
              <p className="text-gray-300">Thank you for submitting your project. We'll review it and be in touch. Good luck!</p>
              {/* Maybe add a button to go back home? */}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Name */}
              <div className="space-y-2">
                <label htmlFor="projectName" className="flex items-center text-sm font-medium text-gray-300">Project Name <span className="text-pink-500 ml-1">*</span></label>
                <input type="text" id="projectName" value={projectName} onChange={(e) => setProjectName(e.target.value)} className="w-full px-4 py-3 bg-gray-800/90 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 shadow-inner" placeholder="e.g., AI Marketing Assistant" required />
              </div>

              {/* Project URL */}
              <div className="space-y-2">
                <label htmlFor="projectUrl" className="flex items-center text-sm font-medium text-gray-300"><LinkIcon className="w-4 h-4 mr-2 text-gray-500"/> Live Project URL <span className="text-pink-500 ml-1">*</span></label>
                <input type="url" id="projectUrl" value={projectUrl} onChange={(e) => setProjectUrl(e.target.value)} className="w-full px-4 py-3 bg-gray-800/90 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 shadow-inner" placeholder="https://your-live-project.com" required />
              </div>

              {/* GitHub URL */}
              <div className="space-y-2">
                <label htmlFor="githubUrl" className="flex items-center text-sm font-medium text-gray-300"><Github className="w-4 h-4 mr-2 text-gray-500"/> GitHub Repository URL <span className="text-xs text-gray-500 ml-2">(Optional)</span></label>
                <input type="url" id="githubUrl" value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} className="w-full px-4 py-3 bg-gray-800/90 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 shadow-inner" placeholder="https://github.com/your-repo" />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label htmlFor="description" className="flex items-center text-sm font-medium text-gray-300">Brief Description <span className="text-pink-500 ml-1">*</span></label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="w-full px-4 py-3 bg-gray-800/90 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 shadow-inner" placeholder="Describe your project, key features, and how you utilized XBesh AI..." required></textarea>
              </div>

              {/* Verification Section */}
              <div className="pt-6 border-t border-gray-700/50 space-y-6">
                <p className="text-sm text-center text-gray-400">Please provide your registration details for verification:</p>
                {/* Registered Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-300"><AtSign className="w-4 h-4 mr-2 text-gray-500"/> Registered Email <span className="text-pink-500 ml-1">*</span></label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 bg-gray-800/90 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 shadow-inner" placeholder="Enter the email you registered with" required />
                </div>
                {/* Affiliate Partner Name */}
                <div className="space-y-2">
                  <label htmlFor="affiliateName" className="flex items-center text-sm font-medium text-gray-300"><User className="w-4 h-4 mr-2 text-gray-500"/> Affiliate Partner Name <span className="text-pink-500 ml-1">*</span></label>
                  <input type="text" id="affiliateName" value={affiliateName} onChange={(e) => setAffiliateName(e.target.value)} className="w-full px-4 py-3 bg-gray-800/90 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 shadow-inner" placeholder="The name you registered with" required />
                </div>
                {/* Affiliate ID */}
                <div className="space-y-2">
                  <label htmlFor="affiliateId" className="flex items-center text-sm font-medium text-gray-300"><Hash className="w-4 h-4 mr-2 text-gray-500"/> Affiliate ID <span className="text-pink-500 ml-1">*</span> <span className="text-xs text-gray-500 ml-auto">(e.g., JVZoo ID if applicable)</span></label>
                  <input type="text" id="affiliateId" value={affiliateId} onChange={(e) => setAffiliateId(e.target.value)} className="w-full px-4 py-3 bg-gray-800/90 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 shadow-inner" placeholder="Enter your primary Affiliate ID" required />
                </div>
              </div>

              {/* Error Message */}
              {submitStatus === 'error' && (
                 <div className="flex items-start p-3 bg-red-900/30 border border-red-700/50 rounded-xl text-left">
                   <Info className="h-5 w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                   <p className="text-sm text-red-300">{errorMessage}</p>
                 </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full py-4 px-6 rounded-xl overflow-hidden group bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {/* Button effects */} 
                  <div className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-70 transition duration-500 blur-md bg-gradient-to-r from-primary-600 to-purple-600"></div>
                  <div className="absolute inset-0.5 rounded-[10px] opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-primary-500 to-purple-500"></div>
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div className="absolute -inset-[100%] z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 motion-safe:animate-[shimmer_2s_infinite] translate-x-[-100%]"></div>
                  </div>
                  
                  {/* Button content */} 
                  <div className="relative flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Submitting...
                      </span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit My Project
                      </>
                    )}
                  </div>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubmitProject; 