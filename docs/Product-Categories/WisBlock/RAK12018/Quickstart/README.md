---
rak_desc: Contains instructions and tutorials on installing and deploying your RAK12018. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak12018/overview/RAK12018_home.png
tags:
  - quickstart
  - wisblock
  - RAK12018
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK12018 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12018 WisBlock Code Scanner Module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12018 WisBlock Code Scanner Module](https://store.rakwireless.com/products/rak12018-wisblock-code-scanner)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#battery-connector)
- [Solar charger (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#solar-panel-connector)

#### Software

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards to your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

The RAK12018 is a code scanner module that is compatible with various 1D and 2D codes like the common barcodes and QR codes. This module includes the optical sensor LV3296 scanner from RAKINDA. The LV3296 has UART output and communicates the scanned code readings to the WisBlock Core. For more information about RAK12018, refer to the [Datasheet](../Datasheet/).

This scanner module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 1**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak12018/quickstart/rak12018_block.png"
  width="50%"
  caption="RAK12018 connection to WisBlock Base"
/>

<rk-img
  src="/assets/images/wisblock/rak12018/quickstart/LV3296.png"
  width="40%"
  caption="LV3296 optical scanner attached to RAK12018"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 3**, the location for the IO slot is properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with three pieces of M1.2 x 3&nbsp;mm screws.

<rk-img
  src="/assets/images/wisblock/rak12018/quickstart/mounting.png"
  width="50%"
  caption="RAK12018 assembly to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock module is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak12018/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12018/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 6**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak12018/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. 
:::  

After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

:::warning ⚠️ WARNING

- Batteries can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- Make sure the battery wires match the polarity on the RAK5005-O board. Not all batteries have the same wiring.

:::

### Software Configuration and Example

In this example, you will be scanning a generic QR code and the reading will be displayed on the Arduino serial monitor.


1. You need to select first the WisBlock Core you have, as shown in **Figure 7** to **Figure 9**.

<rk-img
  src="/assets/images/wisblock/rak12018/quickstart/selectboard4631.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak12018/quickstart/selectboard11200.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak12018/quickstart/selectboard11300.png"
  width="100%"
  caption="Selecting RAK11300 as WisBlock Core"
/>


2. Copy the example code below and paste it into the Arduino IDE:

```c
/**
   @file RAK12018_CodeReader_LV3296.ino
   @author rakwireless.com
   @brief Get 1D or 2D code
   @version 0.1
   @date 2021-8-28
   @copyright Copyright (c) 2020
**/
#include <Wire.h>

void setup()
{
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);

  time_t serial_timeout = millis();
  Serial.begin(115200);
  while (!Serial)
  {
    if ((millis() - serial_timeout) < 5000)
    {
       delay(100);
    }
    else
    {
       break;
    }
  }
  Serial.println("RAK12018 Barcodes Scanner!");
  Serial1.begin(9600);
}

void loop()
{
  int timeout = 1000;
  String rsp = "";
  while (timeout--)
  {
    if (Serial1.available() > 0)
    {
      rsp += char(Serial1.read());
    }
    delay(1);
  }
  if (rsp.length() > 0)
  {
    Serial.println(rsp);
  }
  rsp = "";
}
```

If you experience any error in compiling the example sketch, check the updated code for the RAK12018 WisBlock Code Scanner Module that can be found on the [RAK12018 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/IO/RAK12018_CodeReader_LV3296/RAK12018_CodeReader_LV3296.ino).


3. Select the right serial port and upload the code, as shown in **Figure 10** and **Figure 11**.

<rk-img
  src="/assets/images/wisblock/rak12018/quickstart/select_port.png"
  width="100%"
  caption="Selecting the correct serial port"
/>

<rk-img
  src="/assets/images/wisblock/rak12018/quickstart/upload.png"
  width="100%"
  caption="Uploading the sample code"
/>

:::tip 📝 NOTE:
If you are using RAK11200 WisBlock Core, it requires the BOOT0 pin to be configured properly before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

4. When you have successfully uploaded the sample code, open up your Arduino serial monitor and try to scan any barcode or QR code. Align the front of the sensor to the QR code and press the button, as shown in **Figure 12**.

<rk-img
  src="/assets/images/wisblock/rak12018/quickstart/test_setup.png"
  width="50%"
  caption="Scanning QR code by pressing scan button"
/>

5. If you try to scan the QR code in **Figure 13**, you should have `Hello WisBlock` as the output in the serial monitor shown in **Figure 14**.

<rk-img
  src="/assets/images/wisblock/rak12018/quickstart/qr.png"
  width="35%"
  caption="QR code for test"
/>

<rk-img
  src="/assets/images/wisblock/rak12018/quickstart/terminal.png"
  width="90%"
  caption="Serial monitor showing the code read by the sensor"
/>
