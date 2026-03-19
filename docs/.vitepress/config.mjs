import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SendStock AI',
  description: 'Optimize and distribute your media to stock agencies with AI',
  lang: 'en-US',

sitemap: {
    hostname: 'https://docs.sendstockai.com'
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'SendStock AI Docs' }],
    ['meta', { property: 'og:image', content: 'https://docs.sendstockai.com/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@sendstockai' }],
    ['link', { rel: 'canonical', href: 'https://docs.sendstockai.com' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'SendStock AI',

    nav: [
      { text: 'Web App', link: '/getting-started/web-app' },
      { text: 'Desktop', link: '/getting-started/desktop-app' },
      { text: 'Website', link: 'https://www.sendstockai.com' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Web App', link: '/getting-started/web-app' },
          { text: 'Desktop App', link: '/getting-started/desktop-app' }
        ]
      },
      {
        text: 'Web App',
        items: [
          { text: 'AI Generation', link: '/web-app/ai-generation' },
          { text: 'Export CSV', link: '/web-app/export-csv' }
        ]
      },
      {
        text: 'Desktop App',
        items: [
          { text: 'Installation', link: '/desktop/installation' },
          { text: 'AI Generation', link: '/desktop/ai-generation' },
          { text: 'Portfolio Sync', link: '/desktop/portfolio-sync' },
          { text: 'Bulk Upload', link: '/desktop/bulk-upload' },
          { text: 'Similarity Search', link: '/desktop/similarity-search' },
          { text: 'Upscale', link: '/desktop/upscale' },
          { text: 'Background Removal', link: '/desktop/background-removal' },
          { text: 'Export CSV', link: '/desktop/export-csv' }
        ]
      },
      {
        text: 'Account',
        items: [
          { text: 'Plans & Credits', link: '/account/plans' },
          { text: 'FAQ', link: '/account/faq' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mikealkeal/sendstock-docs' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'SendStock AI — Stock Media Optimizer'
    }
  }
})
