'use client';

import { useState, useEffect } from 'react';
import Button from './ui/Button';
import { Card, CardContent } from './ui/Card';
import { Cookie, X, Settings, Shield } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay showing banner to avoid layout shift
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
        
        // Dispatch consent event for analytics
        window.dispatchEvent(new CustomEvent('consent-changed', {
          detail: savedPreferences
        }));
      } catch (error) {
        console.error('Error parsing cookie consent:', error);
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    localStorage.setItem('analytics-consent', prefs.analytics.toString());
    
    // Dispatch event for analytics components
    window.dispatchEvent(new CustomEvent('consent-changed', {
      detail: prefs
    }));
    
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(necessaryOnly);
    savePreferences(necessaryOnly);
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    setPreferences(prev => ({ ...prev, [type]: value }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-start space-x-3 flex-grow">
              <Cookie className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary-800 mb-1">
                  We use cookies to enhance your experience
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We use cookies to analyze website traffic and optimize your experience. 
                  By accepting our use of cookies, your data will be aggregated with all other user data.
                  <button
                    onClick={() => setShowSettings(true)}
                    className="text-gold-600 hover:text-gold-700 underline ml-1"
                  >
                    Learn more
                  </button>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <Button
                variant="ghost"
                size="sm"
                onClick={acceptNecessary}
                className="text-slate-600 hover:text-slate-800"
              >
                Necessary Only
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
                className="border-slate-300"
              >
                <Settings className="h-4 w-4 mr-2" />
                Customize
              </Button>
              <Button
                size="sm"
                onClick={acceptAll}
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-bold text-primary-800">
                  Cookie Preferences
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                  aria-label="Close settings"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-gold-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-2">
                      Your Privacy Matters
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      We respect your privacy and are committed to protecting your personal data. 
                      You can customize your cookie preferences below. Note that blocking some types 
                      of cookies may impact your experience on our website.
                    </p>
                  </div>
                </div>

                {/* Cookie Categories */}
                <div className="space-y-4">
                  {/* Necessary Cookies */}
                  <div className="border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-primary-800">
                        Necessary Cookies
                      </h4>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        Always Active
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      These cookies are essential for the website to function properly. 
                      They enable basic functionality like page navigation and access to secure areas.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-primary-800">
                        Analytics Cookies
                      </h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-600"></div>
                      </label>
                    </div>
                    <p className="text-sm text-slate-600">
                      These cookies help us understand how visitors interact with our website 
                      by collecting and reporting information anonymously.
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-primary-800">
                        Marketing Cookies
                      </h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-600"></div>
                      </label>
                    </div>
                    <p className="text-sm text-slate-600">
                      These cookies are used to deliver personalized advertisements and track 
                      the effectiveness of our marketing campaigns.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
                  <Button
                    variant="outline"
                    onClick={acceptNecessary}
                    className="flex-1"
                  >
                    Accept Necessary Only
                  </Button>
                  <Button
                    onClick={saveCustomPreferences}
                    className="flex-1"
                  >
                    Save Preferences
                  </Button>
                  <Button
                    onClick={acceptAll}
                    className="flex-1"
                  >
                    Accept All
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
