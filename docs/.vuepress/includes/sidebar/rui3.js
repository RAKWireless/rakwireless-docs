module.exports = {
    '/RUI3/': [
      {
        title: 'RUI3  (RAK Unified Interface 3)',
        collapsable: false,
        sidebarDepth: 4,
        children: [
          ['/RUI3/', 'Getting Started'],
          ['/RUI3/Supported-IDE/','RUI3 Supported IDE' ],    
        ]
      },
      {
        title: 'RUI API',
        collapsable: false,
        sidebarDepth: 4,
        children: [
          ['/RUI3/Arduino-API/', 'Arduino API '],
          ['/RUI3/System/', 'System '],
          ['/RUI3/LoRaWAN/' , 'LoRaWAN '],
          ['/RUI3/BLE/', 'BLE '],
          ['/RUI3/Binary-Mode/', 'Binary Mode']
        ]
      },
      {
        title: 'RUI3 Serial Operating Modes',
        collapsable: false,
        sidebarDepth: 4,
        children: [
          ['/RUI3/Serial-Operating-Modes/', 'Getting Started'],
          ['/RUI3/Serial-Operating-Modes/AT-Command-Manual/', 'AT Command Manual'],
          ['/RUI3/Serial-Operating-Modes/Binary-Command-Manual/', 'Binary Command Manual'],
          ['/RUI3/Serial-Operating-Modes/Custom-Mode/', 'Custom Mode'],
        ]
      },
    ],
  }