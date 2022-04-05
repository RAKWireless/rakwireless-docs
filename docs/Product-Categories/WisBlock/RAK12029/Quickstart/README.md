---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK12029. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak12029/overview/RAK12029_home.png
tags:
  - quickstart
  - wisblock
  - RAK12029
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK12029 Quick Start Guide
## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12029 WisBlock Inductive Sensor Module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12029 WisBlock Inductive Sensor Module](https://store.rakwireless.com/products/rak12029-wisblock-inductive-sensor)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable) (required)
- [Solar charger](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable) (optional)

#### Software

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards to your Arduino project, install the RAKwireless Arduino BSP. Follow the steps in the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

RAK12029 module is part of the WisBlock Sensor category and extends the WisBlock system with an inductive sensor module. The RAK12029 connects to the WisBlock Base Board through the IO slot. **Figure 1** shows the assembly of a [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core) highlighted in green and the RAK12029 module highlighted in red.

Also, always secure the connection of the WisBlock module by using compatible screws. For more information about RAK12029, refer to the [Datasheet](../Datasheet/).

<rk-img
  src="/assets/images/wisblock/rak12029/quickstart/rak12029_assembly.png"
  width="100%"
  caption="RAK12029 connection to WisBlock Base Board"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for the IO slot is properly marked by silkscreen. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak12029/quickstart/rak12029_mounting.png"
  width="70%"
  caption="RAK12029 connection to WisBlock Base Board"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock module is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak12029/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12029/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak12029/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK12029 uses I2C and IO pins that can cause possible conflict with other modules. 
:::

After all this setup, you can now connect the battery(optional) and USB cable to start programming your WisBlock Core.

:::warning ⚠️ WARNING

- Battery can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Make sure the battery wires match the polarity on the RAK WisBlock Base Board. Not all batteries have the same wiring.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
:::

### Software Configuration and Example

RAK12029 is a metal detection sensor module based on the LDC1614 from Texas Instruments. The LDC1614 is an inductance-to-digital converter (LDC) that measures the oscillation frequency of four LC resonators. It outputs a digital value, that is, proportional to frequency, with 28 bits of measurement resolution. With this digital value, you can detect the presence of metallic objects.

#### Initial Test of the RAK12029 WisBlock Inductive Sensor Module

If you have already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. You need to select first the WisBlock Core you have, as shown in **Figure 6** to **Figure 8**.

<rk-img
  src="/assets/images/wisblock/rak12029/quickstart/rak4631_board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak12029/quickstart/rak11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak12029/quickstart/rak11300_board.png"
  width="100%"
  caption="Selecting RAK11300 as WisBlock Core"
/>

2. Copy the example code below:

```c
/**
   @file Single_channel_detection.ino
   @author rakwireless.com
   @brief  Metallic object detected
   @version 1.0
   @date 2021-11-17
   @copyright Copyright (c) 2021
**/
#include "RAK12029_LDC1614.h"  // Click to install library: http://librarymanager/All#RAK12029_LDC1614

#define INDUCTANCE   13.000
#define CAPATANCE    100.0
#define GETCHANNEL   LDC1614_CHANNEL_0 //LDC1614_CHANNEL_(0~3)
RAK12029_LDC1614_Inductive ldc;

void setup()
{
  pinMode(LED_BLUE, OUTPUT);
  digitalWrite(LED_BLUE, LOW);

  //Sensor power switch
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);
  delay(300);

  //control chip switch
  pinMode(WB_IO5, OUTPUT);
  digitalWrite(WB_IO5, LOW);
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
  Serial.println("RAK12029 TEST");
  delay(1000);
  ldc.LDC1614_init();
  /*single channel use case configuration.*/
  if (ldc.LDC1614_single_channel_config(GETCHANNEL, INDUCTANCE, CAPATANCE))
  {
    Serial.println("can't detect sensor!");
    while (1) delay(100);
  }
}

void loop()
{
  u16 value = 0;
  ldc.IIC_read_16bit(LDC1614_READ_DEVICE_ID, &value);
  if (value == 0x3055)
  {
    u32 ChannelData = 0;
    /*Get channel 0 result and parse it.*/
    delay(100);
    if (ldc.LDC1614_get_channel_result(GETCHANNEL, &ChannelData) == 0)
    {
      /*sensor result value.you can make a lot of application according to its changes.*/
      if (0 != ChannelData)
      {
        Serial.printf("The result channel%d is:%d\r\n", 4 - GETCHANNEL, ChannelData);
        digitalWrite(LED_BLUE, HIGH);
      }
      delay(1000);
      digitalWrite(LED_BLUE, LOW);
    }
  }
  else
  {
    Serial.println("The IIC communication fails,please reset the sensor!");
    delay(500);
  }
}

```
:::tip 📝 NOTE:
RAK12029 has other example codes and can be found on the [RAK12029-LDC1614 Inductive Sensor Module Code Repository](https://github.com/RAKWireless/RAK12029-LDC1614/tree/main/examples).
:::

3. Install the [RAKwireless Inductive Sensor Module Library](https://github.com/RAKWireless/RAK12029-LDC1614)library by clicking the red-highlighted link then click install, as shown in **Figure 9** and **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak12029/quickstart/rak12029_4631_library.png"
  width="100%"
  caption="Getting the library of RAK12029"
/>

<rk-img
  src="/assets/images/wisblock/rak12029/quickstart/rak12029_4631_install.png"
  width="100%"
  caption="Installing the library of RAK12029"
/>

4. Then select the right serial port and upload the code, as shown in **Figure 11** and **Figure 12**.

<rk-img
  src="/assets/images/wisblock/rak12029/quickstart/select_port_rak4631.png"
  width="100%"
  caption="Selecting the correct serial port"
/>

<rk-img
  src="/assets/images/wisblock/rak12029/quickstart/upload_rak4631.png"
  width="100%"
  caption="Uploading the sample code"
/>

:::tip 📝 NOTE:
RAK11200 requires the BOOT0 pin to be configured properly before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

5. When you have successfully uploaded the sample code, place any metal or coin in the sensor, as shown in **Figure 13**. Then, you can open up your serial monitor to get the sensor readings, as shown in **Figure 14**.

<rk-img
  src="/assets/images/wisblock/rak12029/quickstart/rak12029_sensor_testing.png"
  width="40%"
  caption="Testing the RAK12029 Inductive Sensor Module"
/>

<rk-img
  src="/assets/images/wisblock/rak12029/quickstart/rak12029_4631_serial_logs.png"
  width="100%"
  caption="RAK12029 Inductive Sensor Module readings in the serial monitor"
/>
