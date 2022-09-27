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
        title: 'RUI3 API',
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
          ['/RUI3/Serial-Operating-Modes/AT-Command-Manual-Cellular/', 'AT Command Manual (Cellular)'],
          ['/RUI3/Serial-Operating-Modes/Binary-Command-Manual/', 'Binary Command Manual'],
          ['/RUI3/Serial-Operating-Modes/Custom-Mode/', 'Custom Mode'],
        ]
      },
      {
          title: 'RUI3 BLE Examples',
          collapsable: false,
          sidebarDepth: 4,
          children: [
            ['/RUI3/RUI3-BLE-Examples/', 'BLE Introduction'],
            ['/RUI3/RUI3-BLE-Examples/BLE_Beacon/', 'BLE Beacon'],
            ['/RUI3/RUI3-BLE-Examples/BLE_Beacon_Custom_Payload/', 'BLE Beacon Custom Payload'],
            ['/RUI3/RUI3-BLE-Examples/BLE_Configuration/', 'BLE Configuration'],
            ['/RUI3/RUI3-BLE-Examples/BLE_Uart/', 'BLE UART'],
            ['/RUI3/RUI3-BLE-Examples/BLE_Scanner/', 'BLE Scanner'],
            ['/RUI3/RUI3-BLE-Examples/BLE_Custom_Service/', 'BLE Custom Service'],		  
          ]
      },
      {
        title: 'RUI3 Appendix',
        collapsable: false,
        sidebarDepth: 4,
        children: [
          ['/RUI3/Appendix/','LoRaWAN Regional Parameters' ]  
        ]
      },
    ],
  }