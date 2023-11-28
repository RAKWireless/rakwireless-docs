---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK15003. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak15003/RAK15003.png
tags:
  - quickstart
  - wisblock
  - RAK15003
prev: ../Overview/
next: ../Datasheet/
---

# RAK15003 Quick Start Guide


## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK15003 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK15003 WisBlock FRAM module](https://store.rakwireless.com/products/wisblock-32kbyte-fram-nvram-module-rak15003?utm_source=RAK15003&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo Battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar Charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

- Download and install [Arduino IDE.](https://www.arduino.cc/en/Main/Software)
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP.](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index)

## Product Configuration

### Hardware Setup

WisBlock can integrate this module which makes it easy for you to save big data on frequently accessed applications. To name a few of those applications are conversion tables, lookup tables or images, and even sound files. In addition, compared to the commonly used EEPROM modules, the RAK15003 FRAM memory module has superior write/erase cycles. This means that it mitigates the concern for rapid memory degradation.

For more information about RAK15003, refer to the [Datasheet](../Datasheet/).

RAK15003 module can be connected to any slot of WisBlock Base to communicate with the WisBlock Core. It will work on **SLOT A, C, D, E or F**. Also, always secure the connection of the WisBlock module by using compatible screws.

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 1**, the location for sensor slots are properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak15003/quickstart/wisblock-sensor-silkscreen.png"
  width="70%"
  caption="Sensor connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same.

1. To begin disassembling, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak15003/quickstart/removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. After removing the screws, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak15003/quickstart/detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Detach the module from the baseboard by applying force to the module at the position of the connector. As shown in **Figure 4**.

<rk-img
  src="/assets/images/wisblock/rak15003/quickstart/detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
- If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/). This tool finds possible pin conflicts.
- RAK15003 uses I2C communication lines with WP, which can cause possible conflict especially on some IO modules.
:::

After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

#### Initial Test of the RAK15003 WisBlock Module

1. Install the [RAKwireless Arduino BSP's for WisBlock](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) by using the `https://raw.githubusercontent.com/RAKwireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless_index.json` board installation package. The WisBlock Core should now be available on the Arduino IDE.

2. After that, you need to select the WisBlock Core you have, as shown in **Figure 5** to **Figure 7**.

<rk-img
  src="/assets/images/wisblock/rak15003/quickstart/rak4631-board.png"
  width="90%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak15003/quickstart/rak11200-board.png"
  width="90%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak15003/quickstart/rak11310-board.png"
  width="90%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

3. Next, copy the following sample code into your Arduino IDE.

```c
/**
   @file RAK1500x_FRAM_Read_Write_MB85RC.ino
   @author rakwireless.com
   @brief Test RAK1500x FRAM read and write functions.
					Suitable for RAK15003, RAK15003, RAK15005.
   @version 0.1
   @date 2021-4-13
   @copyright Copyright (c) 2022
**/
#include "RAK1500x_MB85RC.h"  // Click here to get the library: http://librarymanager/All#RAK1500x_MB85RC

#define DEV_ADDR    MB85RC_DEV_ADDRESS

/*
 * @note If installed in SlotB.
 *       Since IO2 is the power supply enable pin level is high.
 *       Only read operation can be performed on this slot.
 */
#define WP_PING   WB_IO1 // SlotA installation.
//#define WP_PING   WB_IO3 // SlotC installation.
//#define WP_PING   WB_IO5 // SlotD installation.

RAK_MB85RC MB85RC;

void setup()
{
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);

  pinMode(WP_PING, OUTPUT);
  digitalWrite(WP_PING, LOW);

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

	Wire.begin();
  while(MB85RC.begin(Wire , DEV_ADDR) == false)
  {
		Serial.println("MB85RC is not connected.");
    while(1)
    {
      delay(1000);
    }
  }

  switch (MB85RC.getDeviceType())
  {
    case MB85RC256:
      Serial.print("RAK15003(MB85RC256) ");
      break;
    case MB85RC512:
      Serial.print("RAK15003(MB85RC512) ");
      break;
    case MB85RC1:
      Serial.print("RAK15005(MB85RC1M) ");
      break;
    default:
      break;
  }
  Serial.println("initialized successfully.");
}

void loop()
{
  char writeDate[20]="Hello RAK1500X.";
  char readDate[20] = {0};
  Serial.println("Simple reading and writing test.");
  MB85RC.write(0x0000, (uint8_t*)writeDate , strlen(writeDate));
  MB85RC.read( 0x0000, (uint8_t*)readDate  , strlen(writeDate));
  Serial.println(readDate);

  Serial.println("Comparing whether the read and write content is consistent.");
  readWriteTest();

  Serial.println("Read the contents of the entire chip.");
  readEntireChip();

  Serial.println();
  Serial.println("Do nothing here, just love you!");
  while(1)
  {
    delay(100);
  }
}

/*
 * @brief Comparing whether the read and write content is consistent.
 *        Can be used to test the probability of FRAM read and write errors.
 */
void readWriteTest()
{
  char writeBuf[16] = ">>Test RAK1500X";
  char readBuf[16] = {0};
  uint32_t successCount = 0;
  uint32_t failCount = 0;
  uint32_t productSize = MB85RC.getDeviceCapacity();
  float progress = 0;
  time_t interval = millis();

  for(uint32_t i = 0; i < productSize; i+=sizeof(writeBuf))
  {
    MB85RC.write(i, (uint8_t*)writeBuf , sizeof(writeBuf));
    MB85RC.read( i, (uint8_t*)readBuf  , sizeof(readBuf));
    if(memcmp(writeBuf , readBuf , sizeof(readBuf)) == 0)
    {
      successCount++;
    }
    else
    {
      failCount++;
    }
    if((millis() - interval) > 1000)
    {
      interval = millis();
      Serial.printf("Test progress: %5.2f%% , successCount: %ld , failCount:%ld \n",progress,successCount,failCount);
    }
    progress = (float)(i+sizeof(writeBuf)) * 100 / productSize;
    memset(readBuf , '0' , sizeof(readBuf));
    delay(1);
  }
  Serial.printf("Test progress: %5.2f%% , successCount: %ld , failCount:%ld \n",progress,successCount,failCount);
}

/*
 * @brief Read the contents of the entire chip.
 */
void readEntireChip()
{
  char readBuf[32] = {0};
  uint32_t productSize = MB85RC.getDeviceCapacity();
  Serial.println();
  for(uint32_t i = 0; i < productSize; i+=sizeof(readBuf))
  {
    MB85RC.read( i, (uint8_t*)readBuf  , sizeof(readBuf));
    Serial.print("0x");
    Serial.print(i,HEX);
    Serial.print("\t");
    for(uint32_t j = 0; j < sizeof(readBuf); j++)
    {
      Serial.print("0x");
      Serial.print(readBuf[j],HEX);
      Serial.print(' ');
    }
    Serial.println();
  }
}
```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module. You can find it on the [RAK15003 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/sensors/RAK15003_04_05_FRAM_Read_Write_MB85RC/RAK150003_04_05_FRAM_Read_Write_MB85RC.ino). The sample code on GitHub will work on all WisBlock Core.
:::

4. Once the example code is open, install the [RAK1500x_MB85RC library](https://github.com/RAKWireless/RAK1500x-MB85RC). Click the highlighted link, as shown in **Figure 8** and **Figure 9**.

<rk-img
  src="/assets/images/wisblock/rak15003/quickstart/rak15003-lib.png"
  width="90%"
  caption="Accessing the library used for RAK15003 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak15003/quickstart/rak15003-libinstall.png"
  width="50%"
  caption="Installing the compatible library for RAK15003 Module"
/>

5. After a successful library installation, select the right serial port and upload the code, as shown in **Figure 10** and **Figure 11**.

::: tip 📝 NOTE
If you're using the RAK11200 as your WisBlock Core, configure the **Boot0** pin properly before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak15003/quickstart/rak4631-selectport.png"
  width="90%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak15003/quickstart/rak4631-upload.png"
  width="90%"
  caption="Uploading the RAK15003 example code"
/>

6. When you have successfully uploaded the example sketch, you'll see that the WisBlock Core will perform a Write-Read test on the FRAM. Then, it reads out all its contents.

<rk-img
  src="/assets/images/wisblock/rak15003/quickstart/rak15003-logs.png"
  width="100%"
  caption="Uploading the RAK15003 example code"
/>

