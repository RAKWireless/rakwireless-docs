---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK15006. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak15006/RAK15006.png
tags:
  - quickstart
  - wisblock
  - RAK15006
prev: ../Overview/
next: ../Datasheet/
---

# RAK15006 Quick Start Guide


## Prerequisite

### What Do You Need?

Before going through each and every step of using the RAK15006 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK15006 WisBlock FRAM module](https://store.rakwireless.com/products/wisblock-512kbyte-fram-nvram-module-rak15006?utm_source=RAK15006&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

- Download and install [Arduino IDE.](https://www.arduino.cc/en/Main/Software)
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP.](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index)

## Product Configuration

### Hardware Setup

WisBlock can integrate this module, making it simple to save large amounts of data on applications that need to be accessed frequently. Examples of applications include conversion tables, lookup tables, images, and even sound files.

In addition, compared to the commonly used EEPROM modules, the RAK15006 FRAM memory module has superior write/erase cycles. Having superior write/erase cycles removes the concern of quick memory deterioration.

For more information about RAK15006, refer to the [Datasheet](../Datasheet/).

The RAK15006 module can be connected to any slot of the WisBlock Base to communicate with the WisBlock Core. It will work on **SLOT A, C, D, E, or F**. Furthermore, always secure the connection of the WisBlock module by using compatible screws.

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 1**, the location for sensor slots is properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws, depending on the module.

<rk-img
  src="/assets/images/wisblock/rak15006/quickstart/wisblock-sensor-silkscreen.png"
  width="60%"
  caption="Sensor connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock module is the same.

1. Begin disassembling by removing the screws.

<rk-img
  src="/assets/images/wisblock/rak15006/quickstart/removing-screws.png"
  width="60%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak15006/quickstart/detaching-silkscreen.png"
  width="60%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector to detach the module from the baseboard, as shown in **Figure 4**.

<rk-img
  src="/assets/images/wisblock/rak15006/quickstart/detaching-module.png"
  width="60%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK15006 uses SPI communication lines with WP, which can cause possible conflict, especially on some IO modules.
:::

After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

#### Initial Test of the RAK15006 WisBlock Module

1. Install the [RAKwireless Arduino BSP's for WisBlock](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) by using the [`package_rakwireless_index.json`](https://raw.githubusercontent.com/RAKwireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless_index.json) board installation package. The WisBlock Core should now be available on the Arduino IDE.

2. Select first the WisBlock Core you have, as shown in **Figures 5-7**.

<rk-img
  src="/assets/images/wisblock/rak15006/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak15006/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak15006/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

3. After selecting the WisBlock Core, copy the sample code below into your Arduino IDE.

```c
/**
   @file RAK15006_FRAM_Read_Write_MB85RS4MT.ino
   @author rakwireless.com
   @brief FRAM_4M Read And Write Test
   @version 0.1
   @date 2022-06-06
   @copyright Copyright (c) 2022
**/

#include <SPI.h>
#include "Adafruit_FRAM_SPI.h" //http://librarymanager/All#Adafruit_FRAM_SPI version:2.4.1        http://librarymanager/All#Adafruit_BusIO  version:1.11.6

#define FRAM_WP_PIN WB_IO1   //SlotA installation, please do not use it on SLOTB
//#define FRAM_WP_PIN WB_IO3 //SlotC installation.
//#define FRAM_WP_PIN WB_IO5 //SlotD installation.

#define FRAM_4M_SIZE  0x80000

/* Example code for the Adafruit SPI FRAM breakout */
uint8_t FRAM_CS = SS;

Adafruit_FRAM_SPI fram = Adafruit_FRAM_SPI(FRAM_CS, &SPI, 10000000); // use hardware SPI

uint8_t FRAM_SCK = SCK;
uint8_t FRAM_MISO = MISO;
uint8_t FRAM_MOSI = MOSI;
//Or use software SPI, any pins!
//Adafruit_FRAM_SPI fram = Adafruit_FRAM_SPI(FRAM_SCK, FRAM_MISO, FRAM_MOSI, FRAM_CS);


/*
  Writing protect block for WRITE command is configured by the value of BP0 and BP1 in the status register
  data={
        0x00 None
        0x04 60000H to 7FFFFH (upper 1/4)
        0x08 40000H to 7FFFFH (upper 1/2)
        0x0C 00000H to 7FFFFH (all)
  }
*/
void writeBlockProtect(uint8_t data)
{
  fram.writeEnable(true);
  fram.setStatusRegister(data);
  fram.writeEnable(false);
}

/*
   @brief Comparing whether the read and write content is consistent.
          Can be used to test the probability of FRAM read and write errors.
*/
void readWriteTest(void)
{
  char wBuf[32] = "<<<RAK15006 FRAM_4M Test!!!!>>>";
  char rBuf[32] = {0};
  uint32_t successCount = 0;
  uint32_t failCount = 0;

  float progress = 0;
  time_t interval = millis();

  fram.writeEnable(true);
  for (uint32_t i = 0; i < FRAM_4M_SIZE; i += sizeof(wBuf) / sizeof(char))
  {
    fram.write(i, (uint8_t*)wBuf , sizeof(wBuf) / sizeof(char));
    fram.read( i, (uint8_t*)rBuf  , sizeof(rBuf) / sizeof(char));

    if (memcmp(wBuf , rBuf , sizeof(rBuf)) == 0)
    {
      successCount++;
    }
    else
    {
      failCount++;
    }
    if ((millis() - interval) > 100)
    {
      interval = millis();
      Serial.printf("Test progress: %5.2f%% , successCount: %ld , failCount:%ld \n", progress, successCount, failCount);
    }
    progress = (float)(i + sizeof(wBuf) / sizeof(char)) * 100 / FRAM_4M_SIZE;
    memset(rBuf , '0' , sizeof(rBuf) / sizeof(char));
    delay(1);
  }
  fram.writeEnable(false);
  Serial.printf("Test progress: %5.2f%% , successCount: %ld , failCount:%ld \n", progress, successCount, failCount);
}

/*
   @brief Read the contents of the entire chip.
*/
void readEntireChip(void)
{
  char readBuf[32] = {0};
  Serial.println();
  fram.writeEnable(true);
  for (uint32_t i = 0; i < FRAM_4M_SIZE; i += sizeof(readBuf))
  {
    fram.read( i, (uint8_t*)readBuf  , sizeof(readBuf));
    Serial.print("0x");
    Serial.print(i, HEX);
    Serial.print("\t");
    for (uint32_t j = 0; j < sizeof(readBuf); j++)
    {
      Serial.print("0x");
      Serial.print(readBuf[j], HEX);
      Serial.print(' ');
    }
    Serial.println();
  }
  fram.writeEnable(false);
}


void setup(void) {
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH); // Enable power supply.
  delay(300);
  Serial.begin(115200);

  time_t serial_timeout = millis();
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
  Serial.println("RAK15006 FRAM_4M Read And Write Test ");
  if (fram.begin()) {
    Serial.println("Found SPI FRAM");
  } else {
    Serial.println("No SPI FRAM found ... check your connections\r\n");
    while (1)
    {
      delay(500);
    }
  }
  writeBlockProtect(0x00);
}

void loop(void) {

  char wData[25] = "RAK15006 FRAM_4M TEST";
  char rDate[25] = {0};
  Serial.println("reading and writing test");
  fram.writeEnable(true);
  fram.write(0x0000, (uint8_t*)wData , sizeof(wData) / sizeof(char));
  delay(1);
  fram.read( 0x0000, (uint8_t*)rDate , sizeof(rDate) / sizeof(char));
  Serial.println(rDate);

  delay(10);
  char wDataAgain[30] = "RAK15006 FRAM_4M TEST Again";
  char rDataAgain[30] = {0};
  fram.write(0x0000, (uint8_t*)wDataAgain , sizeof(wDataAgain) / sizeof(char));
  fram.read( 0x0000, (uint8_t*)rDataAgain , sizeof(rDataAgain) / sizeof(char));
  Serial.println(rDataAgain);
  fram.writeEnable(false);
  Serial.println();

  Serial.println("Comparing whether the read and write content is consistent.");
  readWriteTest();
  Serial.println();

  Serial.println("Read the contents of the entire chip.");
  readEntireChip();
  Serial.println("Read complete,if you want to test again,please reset the module");
  while (1)
  {
    delay(500);
  }
}
```

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found in the [RAK15006 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/sensors/RAK15006/RAK15006_FRAM_Read_Write_MB85RS4MT/RAK15006_FRAM_Read_Write_MB85RS4MT.ino). This sample code in GitHub is compatible with all WisBlock Core.
:::

4. Once the example code is open, install the [Adafruit_FRAM_SPI library](https://github.com/adafruit/Adafruit_FRAM_SPI) by clicking the highlighted link, as shown in **Figure 8** and **Figure 9**.

<rk-img
  src="/assets/images/wisblock/rak15006/quickstart/rak15006-lib.png"
  width="100%"
  caption="Accessing the library used for RAK15006 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak15006/quickstart/rak15006-libinstall.png"
  width="50%"
  caption="Installing the compatible library for RAK15006 Module"
/>

5. After the successful library installation, you can now select the right serial port and upload the code, as shown in **Figure 10** and **Figure 11**.

::: tip 📝 NOTE
If you're using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide.](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock)
:::

<rk-img
  src="/assets/images/wisblock/rak15006/quickstart/rak4631-selectport.png"
  width="90%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak15006/quickstart/rak4631-upload.png"
  width="90%"
  caption="Uploading the RAK15006 example code"
/>

6. When you have successfully uploaded the example sketch, you'll see that the WisBlock Core will perform a Write-Read test on the FRAM and then read out all the contents.

<rk-img
  src="/assets/images/wisblock/rak15006/quickstart/rak15006-logs.png"
  width="90%"
  caption="Uploading the RAK15006 example code"
/>
