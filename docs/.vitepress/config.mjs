import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SendStock AI',
  description: 'Optimize and distribute your media to stock agencies with AI',
  lang: 'en-US',

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'SendStock AI',

    nav: [
      { text: 'Docs', link: '/getting-started/introduction' },
      { text: 'Website', link: 'https://www.sendstockai.com' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Quick Start', link: '/getting-started/quick-start' },
          { text: 'Installation', link: '/getting-started/installation' }
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'AI Title & Keywords', link: '/features/ai-generation' },
          { text: 'Portfolio Sync', link: '/features/portfolio-sync' },
          { text: 'Bulk Upload', link: '/features/bulk-upload' },
          { text: 'Similarity Search', link: '/features/similarity-search' },
          { text: 'Export CSV', link: '/features/export-csv' }
        ]
      },
      {
        text: 'Platforms',
        items: [
          { text: 'Adobe Stock', link: '/platforms/adobe-stock' },
          { text: 'Shutterstock', link: '/platforms/shutterstock' },
          { text: 'Freepik', link: '/platforms/freepik' }
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
      message: 'SendStock AI — Stock Media Optimizer',
      copyright: 'Copyright © 2024-present SendStock AI'
    }
  }
})
