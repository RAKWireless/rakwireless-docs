---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK1921. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
tags:
  - quickstart
  - wisblock
  - RAK1921
prev: ../Overview/ 
next: ../Datasheet/ 
---

<!--
## Introduction

This guide introduces the WisBlock Sensor RAK1921 board and how to use it.
-->

## Prerequisite

### What Do You Need?

Before going through each and every step on using RAK1921 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware 

- [RAK1921 WisBlock OLED Display](https://store.rakwireless.com/products/rak1921-oled-display-panel)
- [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base/)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#battery-connector)
- [Solar charger (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#solar-panel-connector)

#### Software 

##### Arduino

- You need to download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

##### PlatformIO

- Install [PlatformIO BSP on RAK4630](/Knowledge-Hub/Learn/Board-Support-Package-Installation-in-PlatformIO/)
- Install [PlatformIO BSP on RAK11200](/Product-Categories/WisBlock/RAK11200/Quickstart/#install-platformio)

## Product Configuration

### Hardware Setup

The RAK1921 module is compatible with WisBlock Base Boards. The WisBlock Base Board has a dedicated I2C port with a 2.54&nbsp;mm header (J12) and RAK1921 is assembled, as shown in Figure 1.

**Also, RAK1921 is not compatible with the WisDuo Evaluation Boards (different pinout on the same header J12)**.

<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/exa-rak1921-rak1906-assy-2.png"
  width="50%"
  caption="RAK5005-O and RAK1921"
/>



<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/rak1921_pin_definition.png"
  width="50%"
  caption="RAK1921 Pin Definition"
/>

If you will connect other modules to the remaining WisBlock Base slots, refer to the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.

Now, you can connect the battery (optional) and USB cable to start programming your WisBlock Core.

### Initial Test of the RAK1921 WisBlock Module on Arduino

If you already installed the [RAKwireless Arduino BSP](/Product-Categories/WisBlock/RAK11200/Quickstart/#arduino-ide-bsp-installation), the WisBlock Core and example code should now be available on the Arduino IDE.

1. First, you need to select the WisBlock Core you have.

<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/rak4631_arduino.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>
<br>

<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/rak11200_arduino.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. The [Basic Sample Code for RAK1921](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK1921_OLED_SSD1306) will work on all WisBlock Core. You can open the the example codes depending on your WisBlock Core, as shown in Figures 5 and 6. 

<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/rak4631-rak1921.png"
  width="100%"
  caption="Opening RAK1921 example for RAK4631 WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/rak11200-rak1921.png"
  width="100%"
  caption="Opening RAK1921 example for RAK11200 WisBlock Core"
/>

3. Before compiling the project, it is necessary to install the libraries. Just click on the links highlighted in red in Figure 7 to install each library.

<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/rak1921-library.png"
  width="100%"
  caption="Install RAK1921 Example libraries"
/>

4. Click on **Install** button to install **U8g2 Library**.

<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/u8g2-arduino.png"
  width="80%"
  caption="Install U8g2 Library"
/>

5. Click on **Install** button to install **Adafruit BME680 Library**.

<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/bme680-arduino.png"
  width="80%"
  caption="Install Adafruit BME680 Library"
/>

6. After successful installation of the library, you can now select the right port and upload the code as shown in Figure 10 and 11.

<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/rak4631-config.png"
  width="100%"
  caption="Configuring RAK1921 example for RAK4631 WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/rak11200-config.png"
  width="100%"
  caption="Configuring RAK1921 example for RAK11200 WisBlock Core"
/>

#### Testing an Alternative OLED Library for RAK11200

1. In Arduino IDE, select **WisCore RAK11200 Board** on Tools -> Boards Manager -> RAKwireless ESP32 modules.

2. Install **ThingPulse library** on RAK11200. Open Arduino IDE then go to Sketch -> Include Library -> Manage Library. In the Library Manager text area, search for **esp32 oled**, then click the **Install** button.

<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/thingpulse-library.png"
  width="80%"
  caption="Install ThingPulse Library on Arduino"
/>

3. After successful installation of the library, open **ThingPulse SimpleDemo example**.

<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/thingpulse-example.png"
  width="100%"
  caption="ThingPulse Example on Arduino"
/>

<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/thingpulse-demo.png"
  width="100%"
  caption="ThingPulse SimpleDemo on Arduino"
/>

You can check the other [SSD1306 examples](https://github.com/ThingPulse/esp8266-oled-ssd1306/tree/master/examples) in the ThingPulse repository.

### Initial Test of the RAK1921 WisBlock Module on PlatformIO

You can import your ThingPulse arduino project to PlatformIO. To perform this test, you need to install [PlatformIO RAK11200 BSP](/Product-Categories/WisBlock/RAK11200/Quickstart/#installation-of-bsp-in-platformio).

1. Open PlatformIO -> PIO Home and select Import Arduino Project, as shown in Figure 15.

<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/pio-import.png"
  width="100%"
  caption="Import Arduino project"
/>

2. Configure **Import Arduino Project** parameters:
  
  - On boards list, select **WisCore RAK11200 Board (RAKwireless)** (Label 1).
  - Check **Use libraries installed by Arduino IDE** (Label 2).
  - Choose the directory of your ThingPulse Arduino project to be imported (Label 3).
  - To finish import, click on **Import** button (Label 4).

<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/pio-import2.png"
  width="60%"
  caption="Configure Import parameters"
/>

3. Open the imported project and check the **platformio.ini** file. The parameter **libs_extra_dir** is your Arduino library directory.
<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/pio-ini.png"
  width="100%"
  caption="Configuration file platformio.ini"
/>

4. Build and flash your imported project. In case of upload error, check if your RAK11200 board is listed in PIO Home -> Devices.

<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/pio-devices.png"
  width="100%"
  caption="PIO Home Devices"
/>


<!-- add RAK11200 device listed image here
<rk-img
  src="/assets/images/wisblock/rak1921/quickstart/pio-dev-list.png"
  width="80%"
  caption="PIO Home Devices List"
/>
-->
