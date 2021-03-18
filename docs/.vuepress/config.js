module.exports = {
  title: 'RAKwireless Documentation Center',
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon1.ico`
    }]
  ],
  themeConfig: {
    logo: '/assets/rakwireless/rak-blue-dark.svg',
    repo: 'RAKWireless/rakwireless-docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    smoothScroll: true,
    selectText: 'Languages',
    label: 'English',
    editLinkText: 'Edit this page in GitHub',
    lastUpdated: 'Last Updated',
    sidebar: require('./includes/sidebar.js'),
    nav: require('./includes/nav.js'),
    sidebarDepth: 4,
    displayAllHeaders: false,
    activeHeaderLinks: false // handled by quasar theme
  },
  plugins: {
    'sitemap': {
      hostname: 'https://docs.rakwireless.com/',
      exclude: ['/404.html']
    },
    'redirect': {
      locales: true,
    },
    'robots': {
      host: "https://docs.rakwireless.com/",
      sitemap: "/sitemap.xml",
      policies: [{
        userAgent: '*',
        // disallow: [],
        allow: []
      }]
    },
    'vuepress-plugin-code-copy': {
      selector: 'div[class*="language-"] pre',
      align: 'top',
      color: '#ffffff',
      backgroundTransition: true,
      backgroundColor: '#ffffff',
      successText: 'Copied!'
    },
  },
  markdown: {
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'), 'docs')
    }
  },
  host: 'localhost',
  extraWatchFiles: [
    '.vuepress/**/*.js'
    // '.vuepress/**/*.vue',
  ]
}