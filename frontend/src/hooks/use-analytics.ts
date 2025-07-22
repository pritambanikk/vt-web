import { useCallback } from 'react';
import { trackPageView, trackEvent, ANALYTICS_DEBUG, validateAnalyticsSetup } from '../services/analytics-service';

export function useAnalytics() {
  const logPageView = useCallback((url: string) => {
    trackPageView(url);
  }, []);

  const logEvent = useCallback((event: string, params?: Record<string, any>) => {
    trackEvent(event, params);
  }, []);

  // Utility for testing analytics in development
  const testEvent = useCallback(() => {
    if (ANALYTICS_DEBUG) {
      logEvent('test_event', { test: true, timestamp: Date.now() });
    }
  }, [logEvent]);

  return { logPageView, logEvent, testEvent, debug: ANALYTICS_DEBUG, validateAnalyticsSetup };
} 