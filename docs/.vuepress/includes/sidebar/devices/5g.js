module.exports = {
    '/Product-Categories/5G/All-in-One-5G/': [{
        title: 'Product Overview',
        path: '/Product-Categories/5G/All-in-One-5G/Overview/',
        collapsable: false,
        nested: true,
        download: true,
        sidebarDepth: 4
      },
      {
        title: 'Quick Start Guide',
        path: '/Product-Categories/5G/All-in-One-5G/Quickstart/',
        collapsable: false,
        nested: true,
        download: true,
        sidebarDepth: 4
      },
      {
        title: 'User Manual',
        path: '/Product-Categories/5G/All-in-One-5G/User-Manual/',
        collapsable: true,
        nested: false,
        download: false,
        sidebarDepth: 4,
        children : [
          {
            title: '5G LTE Radio Configuration',
            path: '/Product-Categories/5G/All-in-One-5G/User-Manual/LTE-Radio-Configuration/',
            collapsable: false,
            nested: true,
            download: true,
            sidebarDepth: 4,  
          },
          {
            title: '5G NR Radio Configuration',
            path: '/Product-Categories/5G/All-in-One-5G/User-Manual/NR-Radio-Configuration/',
            collapsable: false,
            nested: true,
            download: true,
            sidebarDepth: 4,  
          }
        ]
      },
      {
        title: 'Installation Guide',
        path: '/Product-Categories/5G/All-in-One-5G/Installation-Guide/',
        collapsable: false,
        nested: true,
        download: true,
        sidebarDepth: 4
      },
      {
        title: 'Datasheet',
        path: '/Product-Categories/5G/All-in-One-5G/Datasheet/',
        collapsable: false,
        nested: true,
        download: true,
        sidebarDepth: 4
      },
      {
        title: 'Test Report',
        path: '/Product-Categories/5G/All-in-One-5G/Test-Report/',
        collapsable: false,
        nested: true,
        download: true,
        sidebarDepth: 4
      }
    ]
  }