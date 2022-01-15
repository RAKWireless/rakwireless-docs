---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK16001. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak16001/overview/RAK16001_home.png
tags:
  - quickstart
  - wisblock
  - RAK16001
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK16001 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK16001 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK16001 ADC Module](https://store.rakwireless.com/)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable)

#### Software

- Download and install [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [Github repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

The RAK16001 is an Analog-to-Digital (ADC) module, which uses an ADS7830 from Texas Instruments that can measure 8-independent voltages or 4-independent differential voltages. The ADS7830 is an 8-bit ADC module that features a serial I2C interface and an 8-channel multiplexer with one sample-and-hold amplifier circuit.

For more information about RAK16001, refer to the [Datasheet](../Datasheet/).

<rk-img
  src="/assets/images/wisblock/rak16001/quickstart/rak16001-assembly.png"
  width="50%"
  caption="RAK16001 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

The RAK16001 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 2**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak16001/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK16001 mounting connection to WisBlock Base module"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak16001/quickstart/removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak16001/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak16001/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK16001 uses I2C communication lines, and it can cause possible conflict, especially on some IO modules. 
:::


After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

#### Initial Test of the RAK16001 WisBlock Module

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. You need to select first the WisBlock Core you have, as shown in **Figure 6** to **Figure 8**

<rk-img
  src="/assets/images/wisblock/rak16001/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak16001/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak16001/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE. 

```c
/**
   @file ADS7830.ino
   @author rakwireless.com
   @brief This code is designed to config ADS7830 ADC device and handle the data
   @version 1.0
   @date 2021-08-23
   @copyright Copyright (c) 2021
*/

#include <Wire.h>
#include "ADS7830.h" //http://librarymanager/All#ADS7830 By：RAKWireless
ADS7830 ads;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  time_t timeout = millis();
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);
  delay(300);
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

  // The address can be changed making the option of connecting multiple devices
  ads.getAddr_ADS7830(ADS7830_DEFAULT_ADDRESS);   // 0x48, 1001 000 (ADDR = GND)
  // ads.getAddr_ADS7830(ADS7830_VDD_ADDRESS);    // 0x49, 1001 001 (ADDR = VDD)
  // ads.getAddr_ADS7830(ADS7830_SDA_ADDRESS);    // 0x4A, 1001 010 (ADDR = SDA)
  // ads.getAddr_ADS7830(ADS7830_SCL_ADDRESS);    // 0x4B, 1001 011 (ADDR = SCL)

  // The Device operating and Power-Down mode
  // can be changed via the following functions

  //ads.setSDMode(SDMODE_DIFF);         // Differential Inputs
  ads.setSDMode(SDMODE_SINGLE);        // Single-Ended Inputs

  ads.setPDMode(PDIROFF_ADON);        // Internal Reference OFF and A/D Converter ON
  // ads.setPDMode(PDADCONV);         // Power Down Between A/D Converter Conversions
  // ads.setPDMode(PDIRON_ADOFF);     // Internal Reference ON and A/D Converter OFF
  //ads.setPDMode(PDIRON_ADON);      // Internal Reference ON and A/D Converter ON

  ads.begin();
}

void loop() {
  // put your main code here, to run repeatedly:
  byte error;
  int8_t ADS7830_Address;

  // ADS7830 Address
  ADS7830_Address = ads.ads7830_Address;

  // The i2c_scanner uses the return value of
  // the Write.endTransmission to see if
  // a device did acknowledge to the address.
  ads.AdsBeginTransmission(ADS7830_Address);
  error = ads.AdsEndTransmission();
  if (error == 0)
  {
    float result[8] = {0};
    Serial.println("Getting SingleEnded Readings");

    for (uint8_t channelcount = 0; channelcount < 8; channelcount++)
    {
      result[channelcount] = ads.Get_SingleEnded_Data(channelcount);
      Serial.printf("Analog input voltage values between Channel %d: %0.2f\r\n", channelcount, result[channelcount]);
    }
    Serial.println(" ");
    Serial.println("        ***************************        ");
    Serial.println(" ");
  }
  else
  {
    Serial.println("ADS7830 Disconnected!");
    Serial.println(" ");
    Serial.println("        ************        ");
    Serial.println(" ");
  }

  delay(1000);
}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the following: 

- [RAK16001 Single-Ended Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK16001_ADC_ADS7830/RAK16001_SingleEnded) 
- [RAK16001 Differential Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK16001_ADC_ADS7830/RAK16001_Differential)

And these sample codes in Github will work on all WisBlock Core.
:::

3. Once the example code is open, install the [RAK ADS7830](https://github.com/RAKWireless/RAK-ADS7830-Library) library by clicking the yellow highlighted link, as shown in **Figure 9** and **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak16001/quickstart/rak16001-lib.png"
  width="100%"
  caption="Accessing the library used for RAK16001 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak16001/quickstart/rak16001-libinstall.png"
  width="70%"
  caption="Installing the compatible library for RAK16001 Module"
/>

4. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 11** and **Figure 12**.

::: tip 📝 NOTE
If you're using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak16001/quickstart/rak4631-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak16001/quickstart/rak4631-upload.png"
  width="100%"
  caption="Uploading the RAK16001 example code"
/>

5. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the modules' reading logs. If you see the logs, as shown in **Figure 13**, then your RAK16001 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak16001/quickstart/rak16001-logs.png"
  width="80%"
  caption="RAK16001 ADC Module data logs"
/>