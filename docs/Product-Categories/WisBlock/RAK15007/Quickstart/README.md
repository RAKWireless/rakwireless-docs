---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK15007. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak15007/RAK15007.png
tags:
  - quickstart
  - wisblock
  - RAK15007
prev: ../Overview/
next: ../Datasheet/
---

# RAK15007 Quick Start Guide


## Prerequisite

### What Do You Need?

Before going through each and every step of using the RAK15007 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK15007 WisBlock FRAM module](https://store.rakwireless.com/products/wisblock-1mbyte-fram-nvram-module-rak15007?utm_source=RAK15007&utm_medium=Document&utm_campaign=BuyFromStore)
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

In addition, compared to the commonly used EEPROM modules, the RAK15007 FRAM memory module has superior write/erase cycles. Having superior write/erase cycles removes the concern of quick memory deterioration.

For more information about RAK15007, refer to the [Datasheet](../Datasheet/).

RAK15007 module can be connected to any slot of WisBlock Base to communicate with the WisBlock Core. It will work on **SLOT A, C, D, E, or F**. Furthermore, always secure the connection of the WisBlock module by using compatible screws.

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 1**, the location for sensor slots is properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak15007/quickstart/wisblock-sensor-silkscreen.png"
  width="60%"
  caption="Sensor connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock module is the same.

1. Begin disassembling by removing the screws.

<rk-img
  src="/assets/images/wisblock/rak15007/quickstart/removing-screws.png"
  width="60%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak15007/quickstart/detaching-silkscreen.png"
  width="60%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector to detach the module from the baseboard, as shown in **Figure 4**.

<rk-img
  src="/assets/images/wisblock/rak15007/quickstart/detaching-module.png"
  width="60%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK15007 uses SPI communication lines with WP, and it can cause possible conflict especially on some IO modules.
:::

After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

#### Initial Test of the RAK15007 WisBlock Module

1. Install the [RAKwireless Arduino BSP's for WisBlock](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) by using the [`package_rakwireless_index.json`](https://raw.githubusercontent.com/RAKwireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless_index.json) board installation package. The WisBlock Core should now be available on the Arduino IDE.

2. Select first the WisBlock Core you have, as shown in **Figures 5-7**.

<rk-img
  src="/assets/images/wisblock/rak15007/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak15007/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak15007/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

3. After selecting the WisBlock Core, copy the sample code below into your Arduino IDE.

```c
/**
   @file RAK15007_FRAM_Read_Write_CY15B108QN.ino
   @author rakwireless.com
   @brief FRAM_8M Read And Write Test
   @version 0.1
   @date 2022-06-15
   @copyright Copyright (c) 2022
**/
#include "RAK15007_CY15B108QN.h"  //http://librarymanager/All#RAK15007_CY15B108QN

//#define FRAM_WP_PIN WB_IO1   //SlotA installation, please do not use it on SLOTB
//#define FRAM_WP_PIN WB_IO3 //SlotC installation.
#define FRAM_WP_PIN WB_IO5 //SlotD installation.

#define FRAM_8M_SIZE  0x100000
uint8_t fram_cy15b108_CS = SS;
RAK_FRAM_CY15B108QN fram_cy15b108 = RAK_FRAM_CY15B108QN(fram_cy15b108_CS);

/*
   @brief Comparing whether the read and write content is consistent.
          Can be used to test the probability of FRAM read and write errors.
*/
void readWriteTest(void)
{
  char wBuf[32] = "<<<RAK15007 FRAM_8M Test!!!!>>>";
  char rBuf[32] = {0};
  uint32_t successCount = 0;
  uint32_t failCount = 0;

  float progress = 0;
  time_t interval = millis();

  for (uint32_t addr = 0; addr < FRAM_8M_SIZE; addr += sizeof(wBuf) / sizeof(char))
  {
    fram_cy15b108.writeEnable(true);
    fram_cy15b108.write(addr, (uint8_t*)wBuf , sizeof(wBuf) / sizeof(char));
    fram_cy15b108.read( addr, (uint8_t*)rBuf  , sizeof(rBuf) / sizeof(char));
    fram_cy15b108.writeEnable(false);

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
    progress = (float)(addr + sizeof(wBuf) / sizeof(char)) * 100 / FRAM_8M_SIZE;
    memset(rBuf , '0' , sizeof(rBuf) / sizeof(char));
    delay(1);
  }
  Serial.printf("Test progress: %5.2f%% , successCount: %ld , failCount:%ld \n", progress, successCount, failCount);
}

/*
   @brief Read the contents of the entire chip.
*/
void readEntireChip(void)
{
  char readBuf[32] = {0};
  Serial.println();

  for (uint32_t addr = 0; addr < FRAM_8M_SIZE; addr += sizeof(readBuf))
  {
    fram_cy15b108.read( addr, (uint8_t*)readBuf  , sizeof(readBuf));
    Serial.print("0x");
    Serial.print(addr, HEX);
    Serial.print("\t");
    for (uint32_t bufCount = 0; bufCount < sizeof(readBuf); bufCount++)
    {
      Serial.print("0x");
      Serial.print(readBuf[bufCount], HEX);
      Serial.print(' ');
    }
    Serial.println();
  }
}


/*
  Writing protect block for WRITE command is configured by the value of BP0 and BP1 in the status register
  data={
        0x00 None
        0x04 C0000h to FFFFFh (upper 1/4)
        0x08 80000h to FFFFFh (upper 1/2)
        0x0C 00000h to FFFFFh (all)
  }
*/
void writeBlockProtect(uint8_t data)
{
  fram_cy15b108.writeEnable(true);
  fram_cy15b108.setStatusRegister(data);
  fram_cy15b108.writeEnable(false);
}

/*
   @brief Comparing whether the read and write special sector content is consistent.
          Can be used to test the probability of FRAM read and write errors.
*/
void specialSectorWriteAndReadTest(void)
{
  char specialSector_wBuf[32] = "<Special Sector Write And Read>";
  char specialSector_rBuf[32] = {0};
  uint32_t successCount = 0;
  uint32_t failCount = 0;

  float progress = 0;

  for (uint32_t addr = 0; addr < 0xFF; addr += sizeof(specialSector_wBuf) / sizeof(char))
  {
    fram_cy15b108.writeEnable(true);
    fram_cy15b108.specialSectorWrite(addr, (uint8_t*)specialSector_wBuf , sizeof(specialSector_wBuf) / sizeof(char));
    fram_cy15b108.specialSectorRead( addr, (uint8_t*)specialSector_rBuf , sizeof(specialSector_rBuf) / sizeof(char));
    fram_cy15b108.writeEnable(false);

    if (memcmp(specialSector_wBuf , specialSector_rBuf , sizeof(specialSector_rBuf)) == 0)
    {
      successCount++;
    }
    else
    {
      failCount++;
    }
    Serial.printf("Special Sector Write And Read Test Progress: %5.2f%% , successCount: %ld , failCount:%ld \n", progress, successCount, failCount);
    progress = (float)(addr + sizeof(specialSector_wBuf) / sizeof(char)) * 100 / 0xff;
    memset(specialSector_rBuf , '0' , sizeof(specialSector_rBuf) / sizeof(char));
    delay(100);
  }
}

/**
   The CY15X108QN supports a FAST READ opcode (0Bh) that is provided for opcode compatibility with serial flash devices
*/
void fastReadOperationTest(void)
{
  char readBuf[32] = {0};
  Serial.println();

  for (uint32_t addr = 0; addr < FRAM_8M_SIZE; addr += sizeof(readBuf))
  {
    fram_cy15b108.fastReadOperation( addr, (uint8_t*)readBuf  , sizeof(readBuf));
    Serial.print("0x");
    Serial.print(addr, HEX);
    Serial.print("\t");
    for (uint32_t bufCount = 0; bufCount < sizeof(readBuf); bufCount++)
    {
      Serial.print("0x");
      Serial.print(readBuf[bufCount], HEX);
      Serial.print(' ');
    }
    Serial.println();
  }
}


void setup(void) {
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH); // Enable power supply.
  delay(300);
  pinMode(FRAM_WP_PIN, OUTPUT);
  digitalWrite(FRAM_WP_PIN, HIGH);
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
  Serial.println("RAK15007 FRAM_CY15B108QN TEST");
  if (fram_cy15b108.begin()) {
    Serial.println("Found FRAM_CY15B108QN");
  } else {
    Serial.println("FRAM_CY15B108QN is not connected, Please check your connections\r\n");
    while (1)
    {
      delay(500);
    }
  }
  writeBlockProtect(0x00);
  delay(1000);

  uint32_t fram_size = fram_cy15b108.getFramSize();
  if (fram_size != 0)
  {
    Serial.print("FRAM_CY15B108QN address size is ");
    Serial.print(fram_size);
    Serial.println(" bytes");
    Serial.println("The capacity of the FRAM is");
    Serial.print(fram_size); Serial.println(" bytes");
    Serial.print(fram_size / 1024); Serial.println(" kilobytes");
    Serial.print((fram_size * 8) / 1024); Serial.println(" kilobits");
    if (fram_size >= ((1024 * 1024) / 8)) {
      Serial.print((fram_size * 8) / (1024 * 1024));
      Serial.println(" megabits");
    }
  }
  else
  {
    Serial.println("Unable to identify the device,Please check your connections");
    while (1)
    {
      delay(100);
    }
  }
  Serial.println();
  fram_cy15b108.writeEnable(true);
  fram_cy15b108.writeByte(0x00, 0x01);
  uint8_t wByte = fram_cy15b108.readByte(0x00);
  if (wByte == 0x01)
  {
    Serial.println("write byte successful ");
  }
  fram_cy15b108.writeEnable(false);
}


void loop(void) {

  uint8_t serialNumberBuf[8] = {0x00};
  fram_cy15b108.getSerialNumber(serialNumberBuf, sizeof(serialNumberBuf) / sizeof(uint8_t));
  Serial.print("serialNumberBuf=0x");
  for (uint8_t serialCount = 0; serialCount < 8; serialCount++)
  {
    Serial.printf("%02x", serialNumberBuf[serialCount]);  // The factory default value for the 8-byte Serial Number is ‘0000000000000000h’.
  }
  Serial.println();
  delay(1000);

  char wData[25] = "RAK15007 FRAM_8M TEST";
  char rDate[25] = {0};
  Serial.println("reading and writing test");
  fram_cy15b108.writeEnable(true);
  fram_cy15b108.write(0x0000, (uint8_t*)wData , sizeof(wData) / sizeof(char));
  delay(1);
  fram_cy15b108.read( 0x0000, (uint8_t*)rDate , sizeof(rDate) / sizeof(char));
  Serial.println(rDate);
  fram_cy15b108.writeEnable(false);
  delay(1);

  char wDataAgain[30] = "RAK15007 FRAM_8M TEST Again";
  char rDataAgain[30] = {0};
  fram_cy15b108.writeEnable(true);
  fram_cy15b108.write(0x0000, (uint8_t*)wDataAgain , sizeof(wDataAgain) / sizeof(char));
  fram_cy15b108.read( 0x0000, (uint8_t*)rDataAgain , sizeof(rDataAgain) / sizeof(char));
  Serial.println(rDataAgain);
  fram_cy15b108.writeEnable(false);
  Serial.println();

  Serial.println("Comparing whether the read and write special sector content is consistent.");
  specialSectorWriteAndReadTest();
  Serial.println();

  Serial.println("Comparing whether the read and write content is consistent.");
  readWriteTest();
  Serial.println();

  delay(2000);
  Serial.println("FAST Read the contents of the entire chip.");
  fastReadOperationTest();
  Serial.println();

  delay(2000);
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
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found in the [RAK15007 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/sensors/RAK15007/RAK15007_FRAM_Read_Write_CY15B108QN/RAK15007_FRAM_Read_Write_CY15B108QN.ino). This sample code in GitHub is compatible with all WisBlock Core.
:::

4. Once the example code is open, install the [RAK15007_CY15B108QN](https://github.com/RAKWireless/RAK15007-CY15B108QN) by clicking the highlighted link, as shown in **Figure 8** and **Figure 9**.

<rk-img
  src="/assets/images/wisblock/rak15007/quickstart/rak15007-lib.png"
  width="100%"
  caption="Accessing the library used for RAK15007 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak15007/quickstart/rak15007-libinstall.png"
  width="50%"
  caption="Installing the compatible library for RAK15007 Module"
/>

5. After the successful library installation, you can now select the right serial port and upload the code, as shown in **Figure 10** and **Figure 11**.

::: tip 📝 NOTE
If you're using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide.](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock)
:::

<rk-img
  src="/assets/images/wisblock/rak15007/quickstart/rak4631-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak15007/quickstart/rak4631-upload.png"
  width="80%"
  caption="Uploading the RAK15007 example code"
/>

6. When you have successfully uploaded the example sketch, you'll see that the WisBlock Core will perform a Write-Read test on the FRAM and then read out all the contents.

<rk-img
  src="/assets/images/wisblock/rak15007/quickstart/rak15007-logs.png"
  width="100%"
  caption="Uploading the RAK15007 example code"
/>

