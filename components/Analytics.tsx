'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface AnalyticsProps {
  trackingId?: string;
  plausibleDomain?: string;
}

export default function Analytics({ 
  trackingId = 'G-XXXXXXXXXX', // Replace with actual GA4 tracking ID
  plausibleDomain = 'staugustines-academy.vercel.app' 
}: AnalyticsProps) {
  useEffect(() => {
    // Check if user has consented to analytics
    const hasConsent = localStorage.getItem('analytics-consent') === 'true';
    
    if (hasConsent) {
      // Initialize analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          analytics_storage: 'granted'
        });
      }
    }
  }, []);

  // Function to enable analytics after consent
  const enableAnalytics = () => {
    if (typeof window !== 'undefined') {
      // Enable Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          analytics_storage: 'granted'
        });
      }
      
      // Enable Plausible (it respects DNT by default)
      if ((window as any).plausible) {
        (window as any).plausible('Enable');
      }
    }
  };

  // Listen for consent changes
  useEffect(() => {
    const handleConsentChange = (event: CustomEvent) => {
      if (event.detail.analytics) {
        enableAnalytics();
      }
    };

    window.addEventListener('consent-changed' as any, handleConsentChange);
    return () => window.removeEventListener('consent-changed' as any, handleConsentChange);
  }, []);

  return (
    <>
      {/* Plausible Analytics (Privacy-focused, GDPR compliant) */}
      <Script
        defer
        data-domain={plausibleDomain}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />

      {/* Google Analytics 4 (Optional, requires consent) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // Default consent state
          gtag('consent', 'default', {
            analytics_storage: 'denied'
          });
          
          gtag('js', new Date());
          gtag('config', '${trackingId}', {
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
    </>
  );
}
