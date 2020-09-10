module.exports = {
    '/knowledge-hub/Learn/Resources/user-manual/': [
      {
        title: "← Back to User Manuals",
            nested: true,
            collapsable: false,
            path: '/knowledge-hub/Learn/Resources/user-manual/',
            children: [

            ]
      },
      {
        title: 'Web Management Platform',
        path: '',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            {
                title: "Getting Started",
                nested: false,
                collapsable: false,
                path: '/knowledge-hub/Learn/Resources/user-manual/web-management-platform/',
                children: [
                  'web-management-platform/status-page',
                  'web-management-platform/network',
                  'web-management-platform/channel-plan',
                  'web-management-platform/lora-network',
                  'web-management-platform/services',
                  'web-management-platform/system'
                  ]
            },
        ]
     },
     {
      title: 'Spectrum Settings Guide',
      path: '',
      collapsable: false,
      sidebarDepth: 2,
      children: [
          {
              title: "Getting Started",
              nested: false,
              collapsable: false,
              path: '/knowledge-hub/Learn/Resources/user-manual/spectrum-settings-guide/',
              children: [
                'spectrum-settings-guide/eu868-spectrum-settings-guide',
                'spectrum-settings-guide/kr920-spectrum-settings-guide'
                ]
          },
      ]
    },
    {
      title: 'Gateway Firmware Burning',
      path: '',
      collapsable: false,
      sidebarDepth: 2,
      children: [
          {
              title: "Getting Started",
              nested: false,
              collapsable: false,
              path: '/knowledge-hub/Learn/Resources/user-manual/gateway-firmware-burning/',
              children: [
                'gateway-firmware-burning/firmwares',
                'gateway-firmware-burning/firmware-burning'
                ]
          },
      ]
    },
    {
      title: 'Node Firmware Upgrading',
      path: '',
      collapsable: false,
      sidebarDepth: 2,
      children: [
          {
              title: "Getting Started",
              nested: false,
              collapsable: false,
              path: '/knowledge-hub/Learn/Resources/user-manual/node-firmware-upgrading/',
              children: [ 
                'node-firmware-upgrading/firmware-upgrading'
                ]
          },
      ]
    }
  ]
}