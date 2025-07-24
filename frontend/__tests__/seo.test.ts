import { generateServiceMetadata, generateLegalMetadata, generatePageMetadata, defaultMetadata } from '../src/lib/seo';

describe('SEO Implementation Tests', () => {
  describe('Default Metadata', () => {
    it('should have required metadata fields', () => {
      expect(defaultMetadata.title).toBeDefined();
      expect(defaultMetadata.description).toBeDefined();
      expect(defaultMetadata.openGraph).toBeDefined();
      expect(defaultMetadata.twitter).toBeDefined();
    });

    it('should have correct title structure', () => {
      const title = defaultMetadata.title as { default: string; template: string };
      expect(title.default).toContain('Vakil Tech');
      expect(title.template).toContain('%s | Vakil Tech');
    });
  });

  describe('Service Metadata Generation', () => {
    it('should generate metadata for consultation service', () => {
      const metadata = generateServiceMetadata('consultation');
      expect(metadata.title).toContain('Legal Consultation');
      expect(metadata.description).toContain('expert legal consultation');
      expect(metadata.openGraph?.url).toContain('/consultation');
    });

    it('should generate metadata for document drafting service', () => {
      const metadata = generateServiceMetadata('document-drafting');
      expect(metadata.title).toContain('Document Drafting');
      expect(metadata.description).toContain('document drafting');
      expect(metadata.openGraph?.url).toContain('/document-drafting');
    });

    it('should generate metadata for corporate retainer service', () => {
      const metadata = generateServiceMetadata('corporate-retainer');
      expect(metadata.title).toContain('Corporate Legal Retainer');
      expect(metadata.description).toContain('corporate legal');
      expect(metadata.openGraph?.url).toContain('/corporate-retainer');
    });

    it('should generate metadata for legal notice service', () => {
      const metadata = generateServiceMetadata('legal-notice');
      expect(metadata.title).toContain('Legal Notice');
      expect(metadata.description).toContain('legal notice');
      expect(metadata.openGraph?.url).toContain('/legal-notice');
    });
  });

  describe('Legal Metadata Generation', () => {
    it('should generate metadata for terms of service', () => {
      const metadata = generateLegalMetadata('terms-of-service');
      expect(metadata.title).toContain('Terms of Service');
      expect(metadata.openGraph?.url).toContain('/terms-of-service');
    });

    it('should generate metadata for privacy policy', () => {
      const metadata = generateLegalMetadata('privacy-policy');
      expect(metadata.title).toContain('Privacy Policy');
      expect(metadata.openGraph?.url).toContain('/privacy-policy');
    });
  });

  describe('Page Metadata Generation', () => {
    it('should generate metadata for about page', () => {
      const metadata = generatePageMetadata('about');
      expect(metadata.title).toContain('About Us');
      expect(metadata.openGraph?.url).toContain('/about');
    });

    it('should generate metadata for contact page', () => {
      const metadata = generatePageMetadata('contact');
      expect(metadata.title).toContain('Contact Us');
      expect(metadata.openGraph?.url).toContain('/contact');
    });

    it('should generate metadata for pricing page', () => {
      const metadata = generatePageMetadata('pricing');
      expect(metadata.title).toContain('Pricing');
      expect(metadata.openGraph?.url).toContain('/pricing');
    });
  });

  describe('Metadata Structure', () => {
    it('should include Open Graph tags', () => {
      const metadata = generateServiceMetadata('consultation');
      expect(metadata.openGraph).toBeDefined();
      expect(metadata.openGraph?.title).toBeDefined();
      expect(metadata.openGraph?.description).toBeDefined();
    });

    it('should include Twitter Card tags', () => {
      const metadata = generateServiceMetadata('consultation');
      expect(metadata.twitter).toBeDefined();
      expect(metadata.twitter?.title).toBeDefined();
      expect(metadata.twitter?.description).toBeDefined();
    });

    it('should include canonical URLs', () => {
      const metadata = generateServiceMetadata('consultation');
      expect(metadata.alternates?.canonical).toBe('/consultation');
    });
  });
}); 