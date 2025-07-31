/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://vakiltech.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: 'public',
  exclude: [
    '/api/*',
    '/admin/*',
    '/_next/*',
    '/404',
    '/500',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/*',
          '/admin/*',
          '/_next/*',
        ],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_BASE_URL || 'https://vakiltech.com'}/sitemap.xml`,
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority and changefreq for different page types
    let priority = config.priority;
    let changefreq = config.changefreq;

    // Homepage gets highest priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    
    // Service pages get high priority
    else if (['/consultation', '/document-drafting', '/corporate-retainer', '/legal-notice'].includes(path)) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    
    // Legal pages get medium priority
    else if (['/terms-of-service', '/privacy-policy', '/terms-and-conditions', '/terms-of-use'].includes(path)) {
      priority = 0.5;
      changefreq = 'monthly';
    }
    
    // Other pages get standard priority
    else if (['/about', '/contact', '/pricing'].includes(path)) {
      priority = 0.7;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
}; 