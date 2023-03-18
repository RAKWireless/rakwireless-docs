---
rak_img: /assets/images/wisblock/rak13003/RAK13003.png
rak_desc: Contains instructions and tutorials for installing and deploying your RAK13003. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
tags:
  - quickstart
  - wisblock
  - RAK13003
prev: ../Overview/
next: ../Datasheet/
---

# RAK13003 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using RAK13003 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK13003 IO Expansion Module](https://store.rakwireless.com/products/io-expansion-module-rak13003?utm_source=RAK13003&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base/)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- Light-emitting diode or LEDs
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

##### Arduino

- Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

The RAK13003 is an IO expansion module that can be mounted to the IO slot of the WisBlock Baseboard. It offers 16 bidirectional I/O ports by using MCP23017 IC from Microchip. The configuration of this module is via the I2C interface, and it supports both standard and fast I2C modes.

| Row/Column | Column 1 | Column 2 | Column 3 | Column 4 |
| ---------- | -------- | -------- | -------- | -------- |
| **Row 1**  | PA0      | PA1      | PB6      | PB7      |
| **Row 2**  | PA2      | PA3      | PB4      | PB5      |
| **Row 3**  | PA4      | PA5      | PB2      | PB3      |
| **Row 4**  | PA6      | PA7      | PB0      | PB1      |
| **Row 5**  | GND      | VCC      | GND      | VCC      |

For more information about RAK13003, refer to the [Datasheet](../Datasheet/).

<rk-img
  src="/assets/images/wisblock/rak13003/quickstart/rak13003_connection.png"
  width="60%"
  caption="RAK13003 Connection to WisBlock Base module"
/>


#### Assembling and Disassembling of WisBlock Modules

##### Assembling Procedure

The RAK13003 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 2**. Also, always secure the connection of the WisBlock module by using the compatible screws.

<rk-img
  src="/assets/images/wisblock/rak13003/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK13003 mounting connection to WisBlock Base module"
/>


##### Disassembling Procedure

The procedure in disassembling any type of WisBlock modules is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak13003/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak13003/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak13003/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
:::



### Software Configuration and Example

In the following example, you will be using the [RAK13003 WisBlock IO Expansion Module](https://store.rakwireless.com/products/io-expansion-module-rak13003) to power LEDs.

#### Initial Test of the RAK13003 WisBlock Module

1. Install the [RAKwireless Arduino BSP's for WisBlock](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) by using the `package_rakwireless_index.json` board installation package, the WisBlock Core should now be available on the Arduino IDE.

2. Shown in **Figure 6** is the illustration on how to use the RAK13003 IO Expansion Module to power ON LEDs using digitalWrite function.

<rk-img
  src="/assets/images/wisblock/rak13003/quickstart/led_connection4631.png"
  width="50%"
  caption="RAK13003 as Output to LEDs"
/>

3. You need to select first the WisBlock Core you have, as shown in Figure 7 to Figure 9.

<rk-img
  src="/assets/images/wisblock/rak13003/quickstart/board4631.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak13003/quickstart/board11200.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak13003/quickstart/rak11300_board.png"
  width="100%"
  caption="Selecting RAK11300 as WisBlock Core"
/>

4. Next, copy the following sample code into your Arduino IDE.

```c
/**
   @file RAK13003_GPIO_Expander_IO_MCP32.ino
   @author rakwireless.com
   @brief Use IIC to expand 16 GPIO.
          Configure PA input PB output, or PA output PB input.Serial port print GPIO status.
   @version 0.2
   @date 2022-5-11
   @copyright Copyright (c) 2022
**/
#include <Wire.h>
#include "Adafruit_MCP23X17.h"  //http://librarymanager/All#Adafruit_MCP23017

#define PAIN_PBOUT //PB is set as output here and PA as input.
//#define PAOUT_PBIN

Adafruit_MCP23X17 mcp;

void setup()
{
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, 1);

  // Reset device
  pinMode(WB_IO4, OUTPUT);
  digitalWrite(WB_IO4, 1);
  delay(10);
  digitalWrite(WB_IO4, 0);
  delay(10);
  digitalWrite(WB_IO4, 1);
  delay(10);

  // Initialize Serial for debug output
  time_t timeout = millis();
  Serial.begin(115200);
  while (!Serial)
  {
    if ((millis() - timeout) < 5000)
    {
      delay(100);
    }
    else
    {
      break;
    }
  }

  Serial.println("MCP23017 GPIO Input Output Test.");

  mcp.begin_I2C(); // use default address 0.

#ifdef PAIN_PBOUT
  for(int i=0 ;i < 8 ;i++)
  {
    mcp.pinMode(i, INPUT);  // PA input.
  }
  for(int j=8 ;j < 16 ;j++)
  {
    mcp.pinMode(j, OUTPUT); // PB output.
  }
  mcp.digitalWrite(8, LOW); // The output state of the PB port can be changed to high or low level.
  mcp.digitalWrite(9, HIGH); //PIN PB1
  mcp.digitalWrite(10, LOW); //PIN PB2
  mcp.digitalWrite(11, LOW); //PIN PB3

  mcp.digitalWrite(12, LOW); //PIN PB4
  mcp.digitalWrite(13, LOW); //PIN PB5
  mcp.digitalWrite(14, LOW); //PIN PB6
  mcp.digitalWrite(15, HIGH);//PIN PB7

  Serial.println();
  for(int i=0; i < 8; i++ )
  {
    if(mcp.digitalRead(i) == 1)
      Serial.printf("GPIO A %d Read High\r\n",i);
    else
      Serial.printf("GPIO A %d Read Low\r\n",i);
  }
#endif

#ifdef PAOUT_PBIN
  for(int i=0 ;i < 8 ;i++)
  {
    mcp.pinMode(i, OUTPUT); // PA output.
  }
  for(int j=8 ;j < 16 ;j++)
  {
    mcp.pinMode(j, INPUT);  // PB input.
  }
  mcp.digitalWrite(0, LOW); // The output state of the PA port can be changed to high or low level.
  mcp.digitalWrite(1, HIGH); // PA1
  mcp.digitalWrite(2, LOW);  // PA2
  mcp.digitalWrite(3, HIGH);  // PA3

  mcp.digitalWrite(4, LOW);  // PA4
  mcp.digitalWrite(5, HIGH);  // PA5
  mcp.digitalWrite(6, LOW);  // PA6
  mcp.digitalWrite(7, HIGH);  //PA7
  Serial.println();
  for(int i=8; i < 16; i++ )
  {
    if(mcp.digitalRead(i) == 1)
      Serial.printf("GPIO B %d Read High\r\n",i-8);
    else
      Serial.printf("GPIO B %d Read Low\r\n",i-8);
  }
#endif
}
void loop()
{
  mcp.digitalWrite(8, HIGH); //PIN PB0
  delay(1000);
  mcp.digitalWrite(8, LOW); //PIN PB0
  delay(1000);
}
```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the all WisBlock Core Module that can be found on the [RAK13003 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/IO/RAK13003_GPIO_Expander_IO_MCP32/). Other examples like interrupt and pooling can be found in the github repository as well.
:::

5. Install the required library, as shown in **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak13003/quickstart/adding_library.png"
  width="80%"
  caption="Installing the Library"
/>

::: tip 📝 NOTE
The library version required must be at least **ver 2.1.0** to compile the example code successfully.
:::

6. Select the correct port and upload your code, as shown in **Figure 11** and **Figure 12**.

::: tip 📝 NOTE
If you're using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak13003/quickstart/selecting_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak13003/quickstart/upload.png"
  width="100%"
  caption="Uploading code"
/>

7. When you have successfully uploaded the example sketch, you can see that the LEDs are powered ON and PB0 will have LED blinking output. You can also switch PB as INPUT and PA as OUTPUT by changing this line of code shown in **Figure 13**.

<rk-img
  src="/assets/images/wisblock/rak13003/quickstart/PinSwitch.png"
  width="80%"
  caption="Switching between PA and PB"
/>
::: tip 📝 NOTE
You can use **`mcp.digitalWrite(pin_no,state)`** and **`mcp.digitalRead(pin_no)`** to send or read states.
:::
