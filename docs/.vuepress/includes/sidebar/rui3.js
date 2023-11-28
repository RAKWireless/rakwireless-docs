module.exports = {
  '/RUI3/': [
    {
      title: 'RUI3  (RAK Unified Interface 3)',
      collapsable: false,
      nested: true,
      sidebarDepth: 4,
      children: [
        {
          title: 'Getting Started',
          path: '/RUI3/',
          nested: true,
          download: true
        },
        {
          title: 'RUI3 Supported IDE',
          path: '/RUI3/Supported-IDE/',
          nested: true,
          download: true
        }
      ]
    },
    {
      title: 'RUI3 API',
      collapsable: false,
      nested: true,
      sidebarDepth: 4,
      children: [
        {
          title: 'Arduino API',
          path: '/RUI3/Arduino-API/',
          nested: true,
          download: true
        },
        {
          title: 'System',
          path: '/RUI3/System/',
          nested: true,
          download: true
        },
        {
          title: 'LoRaWAN',
          path: '/RUI3/LoRaWAN/',
          nested: true,
          download: true
        },
        {
          title: 'BLE',
          path: '/RUI3/BLE/',
          nested: true,
          download: true
        },
        {
          title: 'One Wire Serial',
          path: '/RUI3/One-Wire-Serial/',
          nested: true,
          download: true
        }
        /*
        {
          title: 'Binary Mode',
          path: '/RUI3/Binary-Mode/',
          nested: true,
          download: true
        }
        */
      ]
    },
    {
      title: 'RUI3 Serial Operating Modes',
      collapsable: false,
      nested: true,
      sidebarDepth: 4,
      children: [
        {
          title: 'Getting Started',
          path: '/RUI3/Serial-Operating-Modes/',
          nested: true,
          download: true
        },
        {
          title: 'AT Command Manual',
          path: '/RUI3/Serial-Operating-Modes/AT-Command-Manual/',
          nested: true,
          download: true
        },
        {
          title: 'AT Command Manual (Cellular)',
          path: '/RUI3/Serial-Operating-Modes/AT-Command-Manual-Cellular/',
          nested: true,
          download: true
        },
        /*
        {
          title: 'Binary Command Manual',
          path: '/RUI3/Serial-Operating-Modes/Binary-Command-Manual/',
          nested: true,
          download: true
        },
        */
        {
          title: 'Custom Mode',
          path: '/RUI3/Serial-Operating-Modes/Custom-Mode/',
          nested: true,
          download: true
        },
      ],
    },
    {
      title: 'RUI3 BLE Examples',
      collapsable: false,
      nested: true,
      sidebarDepth: 4,
      children: [
        {
          title: 'BLE Introduction',
          path: '/RUI3/RUI3-BLE-Examples/',
          nested: true,
          download: true
        },
        {
          title: 'BLE Beacon',
          path: '/RUI3/RUI3-BLE-Examples/BLE_Beacon/',
          nested: true,
          download: true
        },
        {
          title: 'BLE Beacon Custom Payload',
          path: '/RUI3/RUI3-BLE-Examples/BLE_Beacon_Custom_Payload/',
          nested: true,
          download: true
        },
        {
          title: 'BLE Configuration',
          path: '/RUI3/RUI3-BLE-Examples/BLE_Configuration/',
          nested: true,
          download: true
        },
        {
          title: 'BLE UART',
          path: '/RUI3/RUI3-BLE-Examples/BLE_Uart/',
          nested: true,
          download: true
        },
        {
          title: 'BLE UART',
          path: '/RUI3/RUI3-BLE-Examples/BLE_Uart/',
          nested: true,
          download: true
        },
        {
          title: 'BLE Custom Service',
          path: '/RUI3/RUI3-BLE-Examples/BLE_Custom_Service/',
          nested: true,
          download: true
        },
      ],
    },
    {
      title: 'RUI3 Appendix',
      collapsable: false,
      sidebarDepth: 4,
      nested: true,
      download: true,
      children: [
        {
          title: 'LoRaWAN Regional Parameters',
          path: '/RUI3/Appendix/',
          nested: true,
          download: true
        }
      ]
    },
  ],
}