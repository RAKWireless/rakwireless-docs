---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK13600. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak13600/RAK13600.png
tags:
  - quickstart
  - wisblock
  - RAK13600
prev: ../Overview/
next: ../Datasheet/
---

# RAK13600 Quick Start Guide



## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK13600 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK13600 Wisblock Interface Extension Board with Coil Antenna](https://store.rakwireless.com/products/rak13600-wisblock-nfc-reader?utm_source=RAK13600&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

- Download and install the [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

The RAK13600 module is designed as wireless module that allows you to scan NFC and RFID tags and devices. It includes an antenna coil that transmits and receives RF signals from the object being scanned. Without the antenna coil shown in **Figure 1**, you will not be able to scan NFC/RFID devices. The antenna coil has adhesive transfer tape on it. You can remove the 3M patch film so you stick the antenna coil on the ideal location in your enclosure. The enclosure must be plastic and not metal, since metal enclosures introduce attenuation on RF signals.


<rk-img
  src="/assets/images/wisblock/rak13600/quickstart/nfc_coil.png"
  width="35%"
  caption="NFC Coil Antenna"
/>

The RAK13600 module can be mounted on the IO slot of any WisBlock Base board, as shown in **Figure 2**. Also, always secure the connection of the WisBlock module by using compatible screws. For more information about RAK13600, refer to the [Datasheet](../Datasheet/).

<rk-img
  src="/assets/images/wisblock/rak13600/quickstart/rak13600-assembly.png"
  width="95%"
  caption="RAK13600 on WisBlock Base with WisBlock Core"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 3**, the location for the IO slot is properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with three M1.2 x 3&nbsp;mm screws compatible with the module.

<rk-img
  src="/assets/images/wisblock/rak13600/quickstart/mounting.png"
  width="60%"
  caption="RAK13600 connection to WisBlock Base Board"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak13600/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak13600/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 6**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak13600/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK13600 uses I2C and IO pins. It can cause possible conflict, especially on some IO modules.
:::

After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

:::warning ⚠️ WARNING

- Battery can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Make sure the battery wires match the polarity on the RAK WisBlock Base Board. Not all batteries have the same wiring.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
:::

### Software Configuration and Example

The RAK13600 is based on the popular NFC/RFID chip PN532. You need to install the RAK13600-PN532 library to use the module. By default, the module communicates via I2C to the WisBlock Core module. The following guide shows how to test your RAK13600 module using a standard RFID card, as shown in **Figure 7**.

<rk-img
  src="/assets/images/wisblock/rak13600/quickstart/module_coil_card.png"
  width="50%"
  caption="RAK13600 with Coil and RFID Card"
/>

1. Open the Arduino IDE and select the WisBlock Core you use, as shown in **Figure 8** to **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak13600/quickstart/selectboard4631.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak13600/quickstart/selectboard11200.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak13600/quickstart/selectboard11300.png"
  width="100%"
  caption="Selecting RAK11300 as WisBlock Core"
/>

2. Copy the example code below and paste it on the Arduino IDE:

```c
/**
   @file readMifareClassic.ino
   @author rakwireless.com
   @brief  This example will wait for any ISO14443A card or tag, and depending on the size of the UID will attempt to read from it.
   @version 0.1
   @date 2021-10-14
   @copyright Copyright (c) 2021
**/

#include <Wire.h>
#include <SPI.h>
#include <RAK13600-PN532.h> // Click here to get the library: http://librarymanager/All#RAK13600-PN532

// If using the breakout or shield with I2C, define just the pins connected
#define PN532_IRQ   (WB_IO6)
#define PN532_RESET (WB_IO5)  // Not connected by default on the NFC Shield

// Or use this line for a breakout or shield with an I2C connection:
NFC_PN532 nfc(PN532_IRQ, PN532_RESET);

void setup(void) {
  Serial.begin(115200);
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);
  delay(300);
  while (!Serial) delay(10); // for Leonardo/Micro/Zero

  Serial.println("Hello!");

  nfc.begin();

  uint32_t versiondata = nfc.getFirmwareVersion();
  if (! versiondata) {
    Serial.print("Didn't find PN53x board");
    while (1); // halt
  }
  // Got ok data, print it out!
  Serial.print("Found chip PN5"); Serial.println((versiondata>>24) & 0xFF, HEX);
  Serial.print("Firmware ver. "); Serial.print((versiondata>>16) & 0xFF, DEC);
  Serial.print('.'); Serial.println((versiondata>>8) & 0xFF, DEC);

  // configure board to read RFID tags
  nfc.SAMConfig();

  Serial.println("Waiting for an ISO14443A Card ...");
}

void loop(void) {
  uint8_t success;
  uint8_t uid[] = { 0, 0, 0, 0, 0, 0, 0 };  // Buffer to store the returned UID
  uint8_t uidLength;                        // Length of the UID (4 or 7 bytes depending on ISO14443A card type)

  // Wait for an ISO14443A type cards (Mifare, etc.).  When one is found
  // 'uid' will be populated with the UID, and uidLength will indicate
  // if the uid is 4 bytes (Mifare Classic) or 7 bytes (Mifare Ultralight)
  success = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A, uid, &uidLength);

  if (success) {
    // Display some basic information about the card
    Serial.println("Found an ISO14443A card");
    Serial.print("  UID Length: ");Serial.print(uidLength, DEC);Serial.println(" bytes");
    Serial.print("  UID Value: ");
    nfc.PrintHex(uid, uidLength);

    if (uidLength == 4)
    {
      // We probably have a Mifare Classic card ...
      uint32_t cardid = uid[0];
      cardid <<= 8;
      cardid |= uid[1];
      cardid <<= 8;
      cardid |= uid[2];
      cardid <<= 8;
      cardid |= uid[3];
      Serial.print("Seems to be a Mifare Classic card #");
      Serial.println(cardid);
    }
    Serial.println("");
  }
  delay(2000);
}
```

3. Install the RAK13600-PN532 library by clicking the link highlighted by red box, as shown in **Figure 11**.

<rk-img
  src="/assets/images/wisblock/rak13600/quickstart/example_code.png"
  width="100%"
  caption="Getting the RAK13600-PN532 Library"
/>

4. You will be directed to the **Library Manager** then you have to click install.

<rk-img
  src="/assets/images/wisblock/rak13600/quickstart/library_install.png"
  width="100%"
  caption="Installing RAK13600-PN532 Library"
/>

5. Next, you need to install an additional library from Adafruit. You need to type on the library search box `adafruit busio` then install it by clicking install. After the successful installation of the two libraries, you can now close the **Library Manager** window.

<rk-img
  src="/assets/images/wisblock/rak13600/quickstart/library_adafruitbusio.png"
  width="100%"
  caption="Installing Adafruit BusIO Library"
/>

6. Select the right Serial Port and upload the code, as shown in **Figure 14** and **Figure 15**.

<rk-img
  src="/assets/images/wisblock/rak13600/quickstart/select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak13600/quickstart/done_upload.png"
  width="100%"
  caption="Uploading the sample code"
/>

If you experience any error in compiling the demo sketch, check the updated code for the [RAK13600 readMifareClassic example](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/IO/RAK13600_PN530_NFC/readMifareClassic/readMifareClassic.ino). Other example codes for RAK13600 are also available on the [RAK13600 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/IO/RAK13600_PN530_NFC).

:::tip 📝 NOTE:
If you are using RAK11200 as the WisBlock Core, it requires the BOOT0 pin to be configured properly before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

7. When you have successfully uploaded the example code, open the serial monitor by clicking the magnifying glass icon on the upper right of the Arduino IDE then place the RFID card on top of the antenna coil. You should see the details of the card, as shown in **Figure 16**.

<rk-img
  src="/assets/images/wisblock/rak13600/quickstart/serial_output.png"
  width="100%"
  caption="RFID Card Information Read by the RAK13600"
/>