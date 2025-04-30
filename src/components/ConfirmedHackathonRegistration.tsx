import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle, AlertCircle, Lock } from 'lucide-react';

const ConfirmedHackathonRegistration: React.FC = () => {
  const location = useLocation();
  const { participantName, participantEmail } = location.state || { participantName: 'Affiliate', participantEmail: '' };

  const [jvzooId, setJvzooId] = useState('');
  const [isStrategiesUnlocked, setIsStrategiesUnlocked] = useState(false);
  const [isSubmittingJvzooId, setIsSubmittingJvzooId] = useState(false);
  const [jvzooSubmitError, setJvzooSubmitError] = useState<string | null>(null);

  const handleUnlockStrategies = async () => {
    if (jvzooId.trim().length < 6) {
      setJvzooSubmitError('Please enter a valid JVZoo Affiliate ID (at least 6 characters).');
      return;
    }
    
    setIsSubmittingJvzooId(true);
    setJvzooSubmitError(null);

    try {
      const response = await fetch('https://callflujent.app.n8n.cloud/webhook/e2649dd1-1c27-40fb-83ae-da6568e99046', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: participantName,
          email: participantEmail,
          jvzooId: jvzooId,
          source: 'XBesh Affiliate Confirmation Page'
        }),
      });

      if (!response.ok) {
        let errorBody = 'Unknown error';
        try {
          errorBody = await response.text();
        } catch {}
        console.error('Webhook response error (JVZoo ID):', response.status, response.statusText, errorBody);
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      console.log('JVZoo ID submitted successfully:', jvzooId);
      setIsStrategiesUnlocked(true);

    } catch (error) {
      console.error('JVZoo ID submission error:', error);
      setJvzooSubmitError('There was an error submitting your JVZoo ID. Please try again or contact support.');
    } finally {
      setIsSubmittingJvzooId(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 bg-dark text-light">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-gray-950 to-dark"></div>
        <div className="absolute inset-0 bg-noise opacity-15"></div>
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary-700/15 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent-700/15 to-transparent blur-3xl"></div>
      </div>

      <div className="container relative z-10 text-center">
        <div className="max-w-2xl mx-auto p-8 md:p-12 bg-gray-950/70 backdrop-blur-lg rounded-3xl border border-gray-700/60 shadow-2xl shadow-primary-900/30">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-success-500 to-accent-500 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-success-500/30 ring-4 ring-success-500/20">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
            Welcome, {participantName}!
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
            Your registration is confirmed. To unlock exclusive <span className="font-semibold text-primary-300">VIP Affiliate Strategies & Resources</span> to help you win the <span className="font-semibold text-success-400">$500 Sprint</span>, please enter your JVZoo Affiliate ID below.
          </p>

          {!isStrategiesUnlocked ? (
            <div className="mt-8 space-y-4 max-w-sm mx-auto">
              <div className="space-y-2 text-left">
                <label htmlFor="jvzooId" className="text-sm font-medium text-gray-300 flex items-center">
                  <Lock className="w-4 h-4 mr-2 text-gray-500"/> JVZoo Affiliate ID
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                  <div className="relative">
                    <input
                      type="text"
                      id="jvzooId"
                      value={jvzooId}
                      onChange={(e) => setJvzooId(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800/90 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 shadow-inner text-center font-mono tracking-wider"
                      placeholder="Enter your JVZoo ID"
                    />
                  </div>
                </div>
              </div>
              {jvzooSubmitError && (
                 <div className="flex items-start p-3 bg-red-900/30 border border-red-700/50 rounded-xl text-left">
                   <AlertCircle className="h-5 w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                   <p className="text-sm text-red-300">{jvzooSubmitError}</p>
                 </div>
              )}
              <button
                onClick={handleUnlockStrategies}
                disabled={isSubmittingJvzooId}
                className="relative w-full px-8 py-3 bg-gradient-to-r from-accent-600 to-primary-500 text-white rounded-full hover:from-accent-500 hover:to-primary-400 transition-all duration-300 font-semibold hover:shadow-neon-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark focus:ring-accent-400 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmittingJvzooId ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Verifying...
                  </span>
                ) : (
                  <>
                    <span className="absolute left-0 top-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></span>
                    <span className="relative">Unlock VIP Strategies</span>
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="mt-10 p-6 bg-gradient-to-br from-primary-800/40 to-accent-800/30 rounded-2xl border border-primary-500/40 shadow-xl">
              <h2 className="text-2xl font-semibold text-primary-300 mb-4">VIP Strategies Unlocked!</h2>
              <p className="text-gray-200 mb-4">
                Awesome, {participantName}! We've verified your ID. Get ready to dominate the competition.
              </p>
              <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700/50">
                <p className="text-xl font-semibold text-accent-300 animate-pulse">
                  Exclusive Content Loading...
                </p>
                <div className="mt-4 h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-500 to-accent-500 animate-pulse-slow" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-12 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmedHackathonRegistration; 