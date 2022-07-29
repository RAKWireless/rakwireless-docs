---
rak_desc: Contains instructions and tutorials on installing and deploying your RAK13009. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak13009/overview/RAK13009_home.png
tags:
  - quickstart
  - wisblock
  - RAK13009
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK13009 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK13009 WisBlock QWIIC, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK13009 WisBlock QWIIC](https://store.rakwireless.com/products/rak13009-wisblock-qwiic-interface)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- QWIIC-based 16x2 LCD
- [RAK19008 WisBlock IO Extension Cable(optional)](https://store.rakwireless.com/products/wisblock-io-extension-cable-rak19008)
- [Li-Ion/LiPo battery (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#battery-connector)
- [Solar charger (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#solar-panel-connector)

#### Software

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

The RAK13009 is a QWIIC module, which is part of the RAKWireless WisBlock Interface series. This module has two connectors: one for the WisBlock sensor and then for the standard QWIIC interface. For more information about RAK13009, refer to the [Datasheet](../Datasheet/).

The RAK13009 WisBlock QWIIC can be mounted on any Sensor slot of the WisBlock Base board, as shown in **Figure 1**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak13009/quickstart/connection.png"
  width="60%"
  caption="RAK13009 Connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for sensor slots is properly marked by silkscreen. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with three pieces of M1.2 x 3&nbsp;mm screws.

<rk-img
  src="/assets/images/wisblock/rak13009/quickstart/mounting.png"
  width="50%"
  caption="RAK13009 assembly to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak13009/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak13009/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the base board.

<rk-img
  src="/assets/images/wisblock/rak13009/quickstart/detach_module.png"
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

<rk-img
  src="/assets/images/wisblock/rak13009/quickstart/final_connection_notext.png"
  width="60%"
  caption="RAK13009 and 16x2 LCD using QWIIC interface"
/>

In this example, you will be able to see the I2C address of the device you connected using the QWIIC interface.

1. You need to select first the WisBlock Core you have, as shown in **Figure 7** to **Figure 9**.

<rk-img
  src="/assets/images/wisblock/rak13009/quickstart/selectboard4631.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak13009/quickstart/selectboard11200.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak13009/quickstart/selectboard11300.png"
  width="100%"
  caption="Selecting RAK11300 as WisBlock Core"
/>

2. On the Arduino IDE, go to **Sketch > Include Library > Manage Libraries**. The Library Manager should open, then install the [LiquidCrystal I2C](https://github.com/johnrickman/LiquidCrystal_I2C) library, as shown in **Figure 10**.


<rk-img
  src="/assets/images/wisblock/rak13009/quickstart/i2c/i2c_library.png"
  width="70%"
  caption="Installing the LiquidCrystal I2C library"
/>

3. After successful installation of the library, you can now copy the following sample code into your Arduino IDE:

```c
#include LiquidCrystal_I2C.h

#include Wire.h

//initialize the liquid crystal library
//the first parameter is the I2C address
//the second parameter is how many rows are on your screen
//the third parameter is how many columns are on your screen
LiquidCrystal_I2C lcd(0x27, 16, 2); //change the 0x27 based on the result from the I2C scanner code.

void setup() {
  lcd.init();   //initialize lcd screen
  lcd.backlight(); // turn on the backlight
}
void loop() {
  
  start_display(); // star
  delay(1000); //wait for a second
  lcd.clear(); // clear the LCD content
  delay(1000); //wait for a second
  
}

void start_display(){
  
  lcd.setCursor(0,0); // tell the screen to write on the top row
  lcd.print("QWIIC");  // tell the screen to write "QWIIC" on the top row
  lcd.setCursor(0,1); // tell the screen to write on the bottom row
  lcd.print("EXAMPLE");  // tell the screen to write "EXAMPLE" on the bottom row
  
}
```

4. Select the right Serial Port and upload the code, as shown in **Figure 11** and **Figure 12**.

<rk-img
  src="/assets/images/wisblock/rak13009/quickstart/i2c/select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak13009/quickstart/i2c/upload.png"
  width="100%"
  caption="Uploading the sample code"
/>

:::tip 📝 NOTE:
RAK11200 requires the BOOT0 pin to be configured properly before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

5. When you have successfully uploaded the sample code, you should see this on your LCD QWIIC display:

<rk-img
  src="/assets/images/wisblock/rak13009/quickstart/lcd_output.png"
  width="50%"
  caption="QWIIC EXAMPLE displayed on 16x2 LCD"
/>

6. If you are not seeing the same output, check the device's I2C address by using this code:

```c
/*
 * Scan the I2C Address of your LCD using
 * this example code. Make sure your SDA and SCL
 * line is connected properly.
 *
 * Follow the connection of LCD with I2C Backpack to RAK13002.
 */
#include <Wire.h> //include Wire.h library

void setup()
{
  Wire.begin(); // Wire communication begin
  Serial.begin(9600); // The baudrate of Serial monitor is set in 9600
  while (!Serial); // Waiting for Serial Monitor
  Serial.println("\nI2C Scanner");
}

void loop()
{
  byte error, address; //variable for error and I2C address
  int nDevices;

  Serial.println("Scanning...");

  nDevices = 0;
  for (address = 1; address < 127; address++ )
  {
    // The i2c_scanner uses the return value of
    // the Wire.endTransmission to see if
    // a device did acknowledge to the address.
    Wire.beginTransmission(address);
    error = Wire.endTransmission();

    if (error == 0)
    {
      Serial.print("I2C device found at address 0x");
      if (address < 16)
        Serial.print("0");
      Serial.print(address, HEX);
      Serial.println("  !");
      nDevices++;
    }
    else if (error == 4)
    {
      Serial.print("Unknown error at address 0x");
      if (address < 16)
        Serial.print("0");
      Serial.println(address, HEX);
    }
  }
  if (nDevices == 0)
    Serial.println("No I2C devices found\n");
  else
    Serial.println("done\n");

  delay(5000); // wait 5 seconds for the next I2C scan
}
```

7. Your device's I2C address should be displayed on the Serial Monitor, as shown in **Figure 14**.

<rk-img
  src="/assets/images/wisblock/rak13009/quickstart/i2c/serial_scan.png"
  width="60%"
  caption="I2C address of your 16x2 LCD"
/>


