// Analytics Service for Google Analytics 4
import { GA_MEASUREMENT_ID } from '../lib/analytics-config';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const ANALYTICS_DEBUG = process.env.NODE_ENV !== 'production';

export function trackPageView(url: string) {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;
  try {
    window.gtag?.('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
    if (ANALYTICS_DEBUG) {
      // eslint-disable-next-line no-console
      console.log('[Analytics] Page view tracked:', url);
    }
  } catch (err) {
    if (ANALYTICS_DEBUG) {
      // eslint-disable-next-line no-console
      console.error('[Analytics] Failed to track page view:', err);
    }
  }
}

export function trackEvent(event: string, params: Record<string, any> = {}) {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;
  try {
    window.gtag?.('event', event, params);
    if (ANALYTICS_DEBUG) {
      // eslint-disable-next-line no-console
      console.log('[Analytics] Event tracked:', event, params);
    }
  } catch (err) {
    if (ANALYTICS_DEBUG) {
      // eslint-disable-next-line no-console
      console.error('[Analytics] Failed to track event:', event, err);
    }
  }
}

export function validateAnalyticsSetup() {
  if (typeof window === 'undefined') return;
  if (!window.gtag) {
    if (ANALYTICS_DEBUG) {
      // eslint-disable-next-line no-console
      console.warn('[Analytics] gtag is not available. Analytics may not be working.');
    }
    return false;
  }
  return true;
} 