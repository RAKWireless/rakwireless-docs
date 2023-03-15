---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK4630 Module. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisduo/rak4630-module/overview/RAK4630-Module.png
prev: ../Overview/
next: ../AT-Command-Manual/
tags:
  - RAK4630
  - quickstart
---

# RAK4630 Module Quick Start Guide

This guide covers the following topics:

- [RAK4630 as a Stand-Alone Device Using RUI3](/Product-Categories/WisDuo/RAK4630-Module/Quickstart/#rak4630-as-a-stand-alone-device-using-rui3)
- [RAK4630 as a LoRa/LoRaWAN Modem via AT Command](/Product-Categories/WisDuo/RAK4630-Module/Quickstart/#rak4630-as-a-lora-lorawan-modem-via-at-command)

## Prerequisites

### What Do You Need?

Before going through the steps in the installation guide of the RAK4630 WisDuo LPWAN Module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK4630 WisDuo LPWAN Module](https://store.rakwireless.com/products/rak4630-wisduo-lpwan-module?utm_source=RAK4630Module&utm_medium=Document&utm_campaign=BuyFromStore)
- Computer
- USB to UART TTL adapter

#### Software

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
:::warning ⚠️ WARNING
_**If you are using Windows 10**_.
Do _**NOT**_ install the Arduino IDE from the Microsoft App Store. Please install the original Arduino IDE from the Arduino official website! The Arduino app from the Microsoft App Store has problems using third-party Board Support Packages.
:::
- Add [RAK4630 as a supported board in Arduino IDE](/Product-Categories/wisduo/rak4630-module/Quickstart/#-board-support-package-in-arduino-ide) by updating Board Manager URLs in **Preferences** settings of Arduino IDE with this JSON URL `https://raw.githubusercontent.com/RAKWireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless.com_rui_index.json`. After that, you can then add **RAKwireless RUI nRF Boards** via Arduino board manager.
- [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools)

## Product Configuration

### Rak4630 as a Stand-Alone Device Using RUI3

#### Hardware Setup

The RAK4630 requires a few hardware connections before you can make it work. The bare minimum requirement is to have the power section properly configured, reset button, antenna, and USB connection.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/rak4630_minimum.png"
  width="65%"
  caption="RAK4630 minimum schematic"
/>

Ensure that the antennas are properly connected to have a good LoRa and BLE signal. Also, note that you can damage the RF section of the chip if you power the module without an antenna connected to the IPEX connectors.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/wisblock_antenna.png"
  width="30%"
  caption="LoRa antenna"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ble-antenna.png"
  width="40%"
  caption="BLE antenna"
/>

RAK4630 has a label on its sticker on where to connect the antennas, as shown in **Figure 4**.


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_antenna_label.png"
  width="30%"
  caption="RAK4630 antenna label"
/>


:::tip 📝 NOTE
Detailed information about the RAK4630 BLE and LoRa antenna can be found on the [antenna datasheet](https://downloads.rakwireless.com/LoRa/WisBlock/Accessories/).
:::

:::warning ⚠️ WARNING
When using the LoRa or Bluetooth Low Energy transceivers, make sure that an antenna is always connected. Using these transceivers without an antenna can damage the module.
:::

#### Software Setup

The default firmware of RAK4630 is based on RUI3, which allows you to develop your custom firmware to connect sensors and other peripherals to it. To develop your custom firmware using Arduino IDE, you need first to add **RAKwireless RUI nRF Boards** in the Arduino board manager, which will be discussed in this guide. You can then use RUI3 APIs for your intended application. You can upload the custom firmware via USB or DFU OTA. The AT commands of RAK4630 are still available even if you compile custom firmware via RUI3. You can send AT commands via a USB connection, UART1, or wirelessly via a BLE connection.

##### RAK4630 RUI3 Board Support Package in Arduino IDE

If you don't have an Arduino IDE yet, you can download it from the [Arduino official website](https://www.arduino.cc/en/Main/Software) and follow the installation procedure on the [miscellaneous section](/Product-Categories/wisduo/rak4630-module/Quickstart/#arduino-installation) of this document.

::: tip 📝 NOTE
**For Windows 10 and up users**:
If your Arduino IDE is installed from the Microsoft App Store, you need to reinstall your Arduino IDE by getting it from the Arduino official website. The Arduino app from the Microsoft App Store has problems using third-party Board Support Packages.
:::

Once the Arduino IDE has been installed successfully, you can now configure the IDE to add the RAK4630 to its board selection by following these steps.

1. Open Arduino IDE and go to **File** > **Preferences**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/preferences.png"
  width="90%"
  caption="Arduino preferences"
/>

2. To add the RAK4630 to your Arduino Boards list, edit the **Additional Board Manager URLs**. Click the icon, as shown in **Figure 6**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/additional-boards.png"
  width="70%"
  caption="Modifying Additional Board Manager URLs"
/>

3. Copy the URL `https://raw.githubusercontent.com/RAKWireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless.com_rui_index.json` and paste it on the field, as shown in **Figure 7**. If other URLs are already there, just add them on the next line. After adding the URL, click **OK**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/preferences-url.png"
  width="90%"
  caption="Add additional board manager URLs"
/>

4. Restart the Arduino IDE.
5. Open the **Boards Manager** from **Tools** Menu.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/boards-manager.png"
  width="90%"
  caption="Opening Arduino boards manager"
/>

6. Write `RAK` in the search bar, as shown in **Figure 9**. This will show the available RAKwireless module boards that you can add to your Arduino Board list. Select and install the latest version of the  **RAKwireless RUI nRF Boards**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/installing-rak.png"
  width="70%"
  caption="Installing RAKwireless RUI nRF boards"
/>

7. Once the BSP is installed, select  **Tools** > **Boards Manager** > **RAKWireless RUI nRF Modules** > **WisBlock Core RAK4631 Board**. The RAK4631 board uses the RAK4630 WisDuo module.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/rui-nrf.png"
  width="90%"
  caption="Selecting RAK4630 Module"
/>

##### Compile an Example with Arduino LED Breathing

1. After completing the steps on adding your RAK4630 to the Arduino IDE, you can now try to run a simple program to test your setup. You need to add two LEDs to the bare minimum schematic of the RAK4630 module, as shown in **Figure 11**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/rak4630_LED_breathing.png"
  width="70%"
  caption="RAK4630 with two LEDs"
/>

2. Connect the RAK4630 via USB and check RAK4630 COM Port using Windows **Device Manager**. Double-click the reset button if the module is not detected.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/rui-port.png"
  width="70%"
  caption="Device manager ports (COM & LPT)"
/>

3. Choose RAK4631 on board selection select via **Tools** > **Boards Manager** > **RAKWireless RUI nRF Modules** > **WisBlock Core RAK4631 Board**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/rui-nrf.png"
  width="90%"
  caption="Selecting RAK4630 Module"
/>

4. Open the **Tools** Menu and select a COM port. **COM4** is currently used.
<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/select-port.png"
  width="90%"
  caption="Select COM port"
/>

5. You can see the serial monitor icon and click it to connect the COM port.
<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/serial-mon.png"
  width="90%"
  caption="Open Arduino serial monitor"
/>

6. If the connection is successful, you can send AT Commands to RAK4630. For example: To check the RUI version, type `AT+VER=?` on the text area, then click on the **Send** button, as shown in **Figure 16**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/arduino-console.png"
  width="90%"
  caption="Arduino serial monitor COM4"
/>

7. Open **Arduino_Led_Breathing** example code.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/led-example.png"
  width="90%"
  caption="Led Breathing example"
/>

8. Click on the **Verify** icon to check if you have successfully compiled the example code.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/verify-code.png"
  width="90%"
  caption="Verify the example code"
/>

9. Click the **Upload** icon to send the compiled firmware to your RAK4630.

:::tip 📝 NOTE:
- RAK4630 should automatically go to BOOT mode when the firmware is uploaded via Arduino IDE.
- If BOOT mode is not initiated, pull to ground the RESET pin twice (or double click the reset button if available) to force BOOT mode.
:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/upload-code.png"
  width="90%"
  caption="Upload the example code"
/>

10. If the upload is successful, you will see the **Device programmed** message.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/dev-prog.png"
  width="90%"
  caption="Device programmed successfully"
/>

11. After the Device Programmed is completed, you will see that LEDs are blinking.

##### RAK4630 IO Pins and Peripherals

This section discusses how to use and access the pinouts of RAK4630 using RUI3 APIs. It shows basic code in using digital IO, analog input, UART, and I2C.

###### How to Use Digital IO

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/rak4630-digital.png"
  width="75%"
  caption="Available digital I/O pins in RAK4630"
/>

You can use any of the pins, as shown in **Figure 22**, as Digital Pin by replacing the dot `.` to underscore `_`. See the example code below.

```c
/*
 RAK4631 Digital I/O Example

 You can use any of the following as Digital I/O:

 P0_03
 P0_04
 P0_05
 P0_09
 P0_10
 P0_13
 P0_14
 P0_17
 P0_19
 P0_21
 P0_24
 P0_25
 P0_26
 P0_28
 P0_29
 P0_30
 P0_31
 P1_01
 P1_02
 P1_03
 P1_04
*/

void setup()
{
  pinMode(P0_04, OUTPUT); //Change the P0_04 to any digital pin you want. Also, you can set this to INPUT or OUTPUT
}

void loop()
{
  digitalWrite(P0_04,HIGH); //Change the P0_04 to any digital pin you want. Also, you can set this to HIGH or LOW state.
  delay(1000); // delay for 1 second
  digitalWrite(P0_04,LOW); //Change the P0_04 to any digital pin you want. Also, you can set this to HIGH or LOW state.
  delay(1000); // delay for 1 second
}
```

###### How to Use Analog Input

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/rak4630-analog.png"
  width="55%"
  caption="Available Analog Input pins in RAK4630"
/>

You can use any of the pins, as shown in **Figure 23**, as Analog Input Pin by replacing the dot `.` to underscore `_`. See the example code below.

```c
#define analogPin P0_05  // or you can use P0_31

int val = 0;  // variable to store the value read

void setup()
{
  Serial.begin(115200);
}

void loop()
{
  val = analogRead(analogPin);  // read the input pin
  Serial.println(val);          // debug value
}
```

###### How to Use Serial Interfaces

- <b> UART </b>

There are two UART peripherals available on RAK4630. There are also different [Serial Operating Modes](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/#rui3-serial-operating-modes) possible in RUI3, namely Binary Mode, AT Mode, and Custom Mode.


| **Serial Port**           | **Serial Instance Assignment** | **Default Mode**  |
| ------------------------- | ------------------------------ | ----------------- |
| UART1 (pin 19, 20)        | Serial0                        | AT Command        |
| UART2 (pin 15, 16)        | Serial1                        | Custom Mode       |


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/rak4630-uart.png"
  width="60%"
  caption="Available UART pins in RAK4630"
/>

Example Code

```c
void setup()
{
  Serial0.begin(115200); //use Serial0 for UART1 and Serial1 for UART2 //you can designate separate baudrate for each.
}

void loop()
{
  Serial0.println("RAK4630 TEST!");
  delay(1000); // delay for 1 second
}
```
<br>

- <b> I2C </b>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/rak4630-i2c.png"
  width="55%"
  caption="Available I2C pins in RAK4630"
/>

Make sure you have an I2C device connected to specified I2C pins to run the example code below.

```c
#include <Wire.h>

void setup()
{
  Wire.begin();

  Serial.begin(115200);
  while (!Serial);
  Serial.println("\nI2C Scanner");
}

void loop()
{
  byte error, address;
  int nDevices;

  Serial.println("Scanning...");

  nDevices = 0;
  for(address = 1; address < 127; address++ )
  {
    // The i2c_scanner uses the return value of
    // the Write.endTransmisstion to see if
    // a device did acknowledge to the address.
    Wire.beginTransmission(address);
    error = Wire.endTransmission();

    if (error == 0)
    {
      Serial.print("I2C device found at address 0x");
      if (address<16)
        Serial.print("0");
      Serial.print(address,HEX);
      Serial.println("  !");

      nDevices++;
    }
    else if (error==4)
    {
      Serial.print("Unknown error at address 0x");
      if (address<16)
        Serial.print("0");
      Serial.println(address,HEX);
    }
  }
  if (nDevices == 0)
    Serial.println("No I2C devices found\n");
  else
    Serial.println("done\n");

  delay(5000);           // wait 5 seconds for next scan
}
```

<br>

- <b> SPI </b>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/rak4630-spi.png"
  width="60%"
  caption="Available SPI pins in RAK4630"
/>

##### LoRaWAN Example

This example illustrates how to program RAK4630 as a stand-alone LoRaWAN end-device via RUI3 Arduino APIs. To use RAK4630 as a LoRaWAN end-device, it needs to be within reach of a working **LoRaWAN gateway** registered to a **LoRaWAN network server (LNS)** or with a built-in network server.

Moreover, this guide will use the internal network server of the [WisGate Edge RAK7268](https://store.rakwireless.com/products/wisgate-edge-lite-2-rak7268-rak7268c) LoRawan gateway. RAK offers various models of WisGate LoRaWAN gateways that you can buy from the [RAK store](https://store.rakwireless.com/collections/wisgate). This guide is focused on the configuration of RAK4630 as a LoRaWAN end-device.

As a LoRaWAN refresher, these are three main things you need to have a working LoRaWAN application:

- LoRaWAN Gateway (this guide uses RAK7268 WisGate Edge gateway)
- LoRaWAN Network Server (this guide uses RAK7268 WisGate Edge built-in LoRaWAN network server)
- LoRaWAN End-Device (RAK4630 in this guide)

:::tip 📝 NOTE:
If you are new to LoRaWAN, here are a few good references about LoRaWAN and gateways:

- [LoRaWAN 101](https://news.rakwireless.com/lorawan-r-101-all-you-need-to-know/)
- [What is a LoRaWAN Gateway](https://news.rakwireless.com/what-is-a-lorawan-gateway/)
- [How do LoRaWAN Gateways work?](https://news.rakwireless.com/how-do-lorawan-gateways-work/)
- [Things to Consider When Picking A LoRaWAN Gateway](https://news.rakwireless.com/things-to-consider-when-picking-a-lorawan-gateway/)

LoRaWAN gateway models like WisGate Edge have built-in network servers. It is also common that the LoRaWAN network server is external or in the cloud. The popular LoRaWAN network server in the cloud that you can use for free (but offers enterprise service, too) is TTN.
:::

###### Adding the RAK4630 as an End-Device to the LoRaWAN Network Server

1. You need to have a functional RAK7268 to proceed with the next steps. For a complete guide, refer to [RAK7268 WisGate Edge Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7268/Quickstart/#prerequisites). Other WisGate Edge configurations can be found in the detailed documentation of the [WisGate OS](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS/Overview/).

This section will show you how to add a LoRaWAN application to the built-in network server of RAK7268 and how to add a device to it. You need to have [access to the RAK7268 console portal](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7268/Quickstart/#access-the-gateway) to perform the necessary configurations. The IP address you need to use to access the portal will depend on your type of connection to RAK7268. For example, if your RAK7268 is configured as Access Point, you can connect to it via `http://192.168.230.1/`.

:::tip 📝 NOTE:
This initial guide uses the LoRaWAN built-in network server of RAK7268, but you can use another LoRaWAN network server, as well, like TTN, Chirpstack, Helium, AWS, etc. Those have different user interfaces, but the parameters to be configured should be the same as long as it follows the LoRaWAN specification standard.

You can find the [TTN guide](/Product-Categories/WisDuo/rak4630-module/quickstart/#connecting-to-the-things-network-ttn) and [Chirpstack guide](/Product-Categories/WisDuo/rak4630-module/quickstart/#connecting-with-chirpstack) on the Quick Start Guide section of this document as well but on the section of RAK4630 as LoRa/LoRaWAN Modem.
:::

2. Once you have a working RAK7268, you need to ensure that you use the built-in LoRaWAN network server (LNS). You can do this by configuring the gateway to network server mode. Click **LoRa Network** then select **Network Settings**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/lora_network_setting.png"
  width="90%"
  caption="RAK7268 LoRa network settings"
/>

3. Select the **mode** dropdown list **Network Server** and take note of the **Region**. The **Region** should be the same as the RAK4630 code that you will compile in the later section of this guide. The region of the LoRaWAN gateway and LNS used in this guide is US915.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/mode_network_server.png"
  width="90%"
  caption="RAK7268 network server mode"
/>

4. After configuring the gateway to use a built-in LoRaWAN network server (LNS), you need to add an application to the network server and register a device. Click **Application**, which will show all the LoRaWAN applications you have if there are any.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/add_application.png"
  width="90%"
  caption="Accessing Application Console in the network server"
/>

5. You need to put a meaningful name for your application. For this illustration, the **RAK4630** is used, and then, you should select **Unified Application Key**. You can click **Add** and **Save & Apply** to proceed with the configuration of the application.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/add_application_name.png"
  width="90%"
  caption="Adding Application to the LoRaWAN network server"
/>

6. Another important parameter in a LoRaWAN application is the **Application Key**, which is used in **OTAA** activation. You can manually add one, but it is advisable to let the network server generate it by clicking the generate icon button. You can also add a description to your application. After having the **Application Key**, you can now click **Save & Apply**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/add_application_key.png"
  width="90%"
  caption="Configure Application Key"
/>

7. The new application will now be added to the application list of your network server. To register your RAK4630 WisDuo module as a device in that application, click edit to access the application console.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/accessing_the_application.png"
  width="90%"
  caption="Access the LoRaWAN Application Console"
/>

8. To register your RAK4630 WisDuo module, add its device EUI (DEVEUI) on the application console. This must be unique, and it is highly encouraged that you use the **DEVEUI** printed on the sticker of your RAK4630 module. Then click the **Add** button to proceed with the next configurations.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/add_device.png"
  width="90%"
  caption="Adding device to the application"
/>

9. The next step is to configure the other important parameters related to LoRaWAN. You need to put a name on your device and in this case, it is **RAK4630**. Three parameters in this list must be the same as your RAK4630 code: **Class**, **Join Mode**, and **Application Key**.

In the Arduino code example in the latter part of this guide, Class A and Join Mode OTAA are the default. With that, you will only need to modify the code of the application key. Lastly, the **LoRaWAN MAC Version** must be **1.0.3**. After setting up all these parameters, click **Save & Apply**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/device_configuration.png"
  width="90%"
  caption="Configuration of the RAK4630 as OTAA device"
/>

10. The device will now be shown as a device in your application. The next step is to prepare the RAK4630 WisDuo module so that it can match all the parameters in the network server.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/device_registered.png"
  width="90%"
  caption="RAK4630 registered on the network server"
/>

###### Uploading LoRaWAN Example to RAK4630

After a successful registration of the RAK4630 device to the LoRaWAN Network Server, you can now proceed with running the LoRaWAN OTAA demo application example.

1. Open the example code under **RAK WisBlock RUI examples**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/lorawan_example.png"
  width="90%"
  caption="OTAA LoRaWAN application example"
/>

2. In the example code, you need to modify the device EUI (DEVEUI) and application key (APPKEY).

- The **device EUI (DEVEUI)** should match the device EUI registered in your network server. This is the same DEVEUI in the RAK4630 sticker if this is the one you used in the previous section [device registration in the network server](/Product-Categories/WisDuo/RAK4630-Module/Quickstart/#adding-the-rak4630-as-an-end-device-to-the-lorawan-network-server). DEVEUI is **MSB**.

```c
  // OTAA Device EUI MSB
  uint8_t node_device_eui[8] = {0xAC, 0x1F, 0x09, 0xFF, 0xFE, 0x03, 0xEF, 0xAB};
```

- Another important parameter to change is the **application key (APPKEY)**. This parameter should also be the same as the APPKEY in the network server you configured in the previous section [adding RAK4630 in the network server](/Product-Categories/WisDuo/RAK4630-Module/Quickstart/#adding-the-rak4630-as-an-end-device-to-the-lorawan-network-server) section. APPKEY is MSB.

```c
// OTAA Application Key MSB
  uint8_t node_app_key[16] = {0xD9, 0xB8, 0x70, 0x18, 0x3E, 0xF1, 0x00, 0x1D, 0x1B, 0x4F, 0x2B, 0x4C, 0xBF, 0x60, 0xCA, 0x83};
```

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/lorawan_otaa_parameter.png"
  width="90%"
  caption="Updating DEVEUI and APPKEY"
/>

3. This guide uses US915 regional band, so you need to update the band in the code as well. In addition to that, you also need to set up the channel mask (channels 8 to 15 are the most commonly used channels in the US915 band).

```c
  if(!(ret = api.lorawan.band.set(5)))
  {
       Serial.printf("LoRaWan OTAA - set band is incorrect! \r\n");
       return;
  }

  uint16_t maskBuff = 0x0002;
  api.lorawan.mask.set(&maskBuff);
```

:::tip 📝 NOTE:
RAK4630 supports the following regions:

* RAK_REGION_EU433 = 0
* RAK_REGION_CN470 = 1
* RAK_REGION_RU864 = 2
* RAK_REGION_IN865 = 3
* RAK_REGION_EU868 = 4
* RAK_REGION_US915 = 5
* RAK_REGION_AU915 = 6
* RAK_REGION_KR920 = 7
* RAK_REGION_AS923 = 8
:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/lorawan_band_mask.png"
  width="90%"
  caption="Updating to US915 and setting up channel mask"
/>

4. The last step is to upload the code by clicking the **Upload** icon. Take note that you should select the right board and port, as shown in the previous example [LED Blinking](/Product-Categories/WisDuo/RAK4630-Module/Quickstart/#compile-an-example-with-arduino-led-breathing).

:::tip 📝 NOTE:
RAK4630 should automatically go to BOOT mode when the firmware is uploaded via Arduino IDE.
If BOOT mode is not initiated, pull to ground the RESET pin twice (or double-click the reset button if available) to force BOOT mode.
:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/lorawan_upload.png"
  width="80%"
  caption="Uploading the code"
/>

5. You should now be able to see the terminal logs in the Serial Monitor of Arduino IDE. Sometimes COM port will be disconnected so you won't be able to see the terminal output immediately. You can reconnect the module or try to push the reset button to see the terminal output.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/lorawan_logs.png"
  width="65%"
  caption="Output logs"
/>

6. You can also check on the LoRaWAN network server logs of RAK7268 if your device has been successfully joined with the `join request` and `join accept` logs.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/lorawan_gateway_log.png"
  width="90%"
  caption="WisGate LoRa packet logger"
/>



### RAK4630 as a Lora/Lorawan Modem via AT Command

This section covers the guide on how to use RAK4630 as a LoRa/LoRaWAN modem via AT command.

- [AT Command via UART1](/Product-Categories/WisDuo/RAK4630-Module/Quickstart/#at-command-via-uart1)
- [AT Command via BLE](/Product-Categories/WisDuo/RAK4630-Module/Quickstart/#at-command-over-ble)

#### AT Command via UART1

RAK4630 module can be configured using AT commands via the UART1 interface. You need a USB to UART TTL adapter to connect the RAK4630 to your computer's USB port and a serial terminal tool. It is highly recommended to use the [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools) so you can easily send AT commands and view the replies from the console output. You can configure the RAK4630 in two ways:

- [LoRaWAN End-Device](/Product-Categories/WisDuo/rak4630-module/quickstart/#configuring-rak4630-as-lorawan-end-device) - RAK4630 as LoRaWAN IoT device.
- [LoRa P2P](/Product-Categories/WisDuo/rak4630-module/quickstart/#lora-p2p-mode) - Point-to-point communication between two RAK4630 modules.

##### Connect to the RAK4630

1. Connect the RAK4630 to the serial port of a general-purpose computer (USB port) using a USB to UART TTL adapter like [RAKDAP1](https://store.rakwireless.com/collections/accessories/products/daplink-tool), as shown in **Figure 41**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/rak4630_rakdap1.png"
  width="85%"
  caption="RAK4630 module connection"
/>

:::tip 📝 NOTE:
You can also send AT commands via direct USB connection to the module, as shown in [hardware setup](/Product-Categories/WisDuo/rak4630-module/quickstart/#hardware-setup).
:::

2. Any serial communication tool can be used, but it is recommended to use the [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools).
3. Configure the serial communication tool by selecting the proper port detected by the computer and configure the link as follows:

 * Baud Rate: **115200&nbsp;baud**
 * Data Bits: **8&nbsp;bits**
 * Stop Bits: **1&nbsp;stop&nbsp;bit**
 * Parity: **NONE**

##### Configuring RAK4630 as LoRaWAN End-device

To enable the RAK4630 module as a LoRaWAN end-device, a device must be registered first in the LoRaWAN network server. This guide will cover both TTN and Chirpstack LoRaWAN network servers and the associated AT commands for the RAK4630.

This guide covers the following topics:

- [TheThingsNetwork Guide](/Product-Categories/WisDuo/rak4630-module/quickstart/#connecting-to-the-things-network-ttn) - How to login, register new accounts, and create new applications on TTN.
- [RAK4630 TTN OTAA Guide](/Product-Categories/WisDuo/rak4630-module/quickstart/#ttn-otaa-device-registration) - How to add OTAA device on TTN and what AT commands to use on RAK4630 OTAA activation.
- [RAK4630 TTN ABP Guide](/Product-Categories/WisDuo/rak4630-module/quickstart/#ttn-abp-device-registration) - How to add ABP device on TTN and what AT commands to use on RAK4630 ABP activation.
- [Chirpstack Guide](/Product-Categories/WisDuo/rak4630-module/quickstart/#connecting-with-chirpstack) - How to create new applications on Chirpstack.
- [RAK4630 Chirpstack OTAA Guide](/Product-Categories/WisDuo/rak4630-module/quickstart/#chirpstack-otaa-device-registration) - How to add OTAA device to Chirpstack and what AT commands to use on RAK4630 OTAA activation.
- [RAK4630 Chirpstack ABP Guide](/Product-Categories/WisDuo/rak4630-module/quickstart/#chirpstack-abp-device-registration) - How to add ABP device on Chirpstack and what AT commands to use on RAK4630 ABP activation.

###### Connecting to The Things Network (TTN)

In this section, it shows how to connect the RAK4630 module to the TTN platform.
:::tip 📝 NOTE:
You need to have a working gateway that is connected to TTN, or you have to be within the coverage of a TTN community network.
:::

<rk-img
  src="/assets/images/wisduo/rak3172-evaluation-board/quickstart/4.ttn-context.png"
  width="100%"
  caption="The Things Stack"
/>

As shown in **Figure 42**, The Things Stack (TTN V3) is an open-source LoRaWAN Network Server suitable for global, geo-distributed public and private deployments, as well as for small local networks. The architecture follows the LoRaWAN Network Reference Model for standards compliance and interoperability. This project is actively maintained by [The Things Industries](https://www.thethingsindustries.com/).

LoRaWAN is a protocol for low-power wide-area networks. It allows for large-scale Internet of Things deployments where low-powered devices efficiently communicate with Internet-connected applications over long-range wireless connections.

The RAK4630 WisDuo module can be part of this ecosystem as a device, and the objective of this section is to demonstrate how simple it is to send data to The Things Stack using the LoRaWAN protocol. To achieve this, the RAK4630 WisDuo module must be located inside the coverage of a LoRaWAN gateway connected to The Things Stack server.

###### Registration to TTN and Creating LoRaWAN Applications

1. The first step is to go to [The Things Network](https://www.thethingsnetwork.org/) and sign up for an account, shown in **Figure 43**. Then select a cluster as shown in **Figure 45**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_1.png"
  width="100%"
  caption="Signing up an account in TTN"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_2.png"
  width="100%"
  caption="Signing up an account in TTN"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_3.png"
  width="100%"
  caption="Selecting Cluster in TTN"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_4.png"
  width="100%"
  caption="Signing up through the Things ID"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_5.png"
  width="100%"
  caption="Creation of an account through the Things ID"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_6.png"
  width="100%"
  caption="Creation of an account through the Things ID"
/>

 You can use the same login credentials on the TTN V2 if you have one. If you have no account yet, you need to create one.

2. Now that you are logged in to the platform, the next step is to create an application. Click **Create an application**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_7.png"
  width="100%"
  caption="The Things Stack Platform"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_8.png"
  width="100%"
  caption="Creating TTN application for your LoRaWAN devices"
/>

3. To have an application registered, input first the specific details and necessary information about your application then click **Create application**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_9.png"
  width="100%"
  caption="Details of the TTN application"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_10.png"
  width="80%"
  caption="Details of the TTN application"
/>

4. If you have no error on the previous step, you should now be on the application console page. The next step is to add end-devices to your TTN application.

LoRaWAN specifications enforce that each end-device has to be personalized and activated. There are two options in registering devices depending on the activation mode selected. Activation can be done either via Over-The-Air-Activation (OTAA) or Activation-By-Personalization (ABP).

##### TTN OTAA Device Registration

1. Go to your application console to register a device. To start adding an OTAA end-device, click **+ Register end device**, as shown in **Figure 54**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_11.png"
  width="100%"
  caption="Register end device"
/>

2. To register the board, click the **Enter end device specifics manually**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_12.png"
  width="100%"
  caption="Enter end device specifics manually"
/>

3. Next step is to set up **Frequency plan**, compatible **LoRaWAN version**, and **Regional Parameters version** supported. Then provide the **JoinEUI** credentials by entering zeroes into it.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_13.png"
  width="80%"
  caption="Setting up for your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_14.png"
  width="80%"
  caption="Setting up for your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_15.png"
  width="90%"
  caption="Setting up for your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_16.png"
  width="90%"
  caption="Setting up for your device"
/>

4. Then click **Show advanced activation, LoRaWAN class and cluster settings**. Configure the activation mode by selecting **Over the air activation (OTAA)** and Additional LoRaWAN class capabilities to **class A only**. Then click **Confirm**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_17.png"
  width="90%"
  caption="Setting up for your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_18.png"
  width="90%"
  caption="Setting up for your device"
/>

5. Once done, provide the DevEUI credentials of your device into the **DevEUI** portion. This will automatically generate the specific End
device ID of your board. Then click **Generate** under **AppKey** under the Provisioning information section. Then click **Register end device**.

:::tip 📝 NOTE:

- The **AppEUI**, **DevEUI**, and **AppKey** are hidden in this section as these are unique from a specific device. The **DevEUI** credential is unique to every RAK4630 device. Also, you should generate your own **AppEUI** and **AppKey** credentials for your specific device and application.

- The **AppEUI** is the same as **JoinEUI**.

:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_19.png"
  width="80%"
  caption="Setting up for your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_20.png"
  width="80%"
  caption="Setting up for your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_21.png"
  width="90%"
  caption="Register end device"
/>

6. You should now be able to see the device on the TTN console after you fully register your device, as shown in **Figure 64**.

:::tip 📝 NOTE:

- The **AppEUI**, **DevEUI**, and **AppKey** are the parameters that you will need to activate your LoRaWAN end-device via OTAA. The **AppKey** is hidden by default for security reasons, but you can easily show it by clicking the show button. You can also copy the parameters quickly using the copy button.

- The three OTAA parameters on the TTN device console are MSB by default.

- These parameters are always accessible on the device console page, as shown in **Figure 36**.
:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/RAK4630_New_22.png"
  width="100%"
  caption="OTAA device successfully registered to TTN"
/>

##### OTAA Configuration for TTN

The RAK4630 module can be configured using WisToolBox to do the OTAA configuration. **WisToolBox** is a software tool that supports **RAK4630** module. It automatically detects the RAK4630 module once connected to the PC. Below are the options in WisToolBox that the OTAA configuration can be done.

- [OTAA Configuration for TTN via WisToolBox UI](#otaa-configuration-for-ttn-via-wistoolbox-ui)
- [OTAA Configuration for TTN via WisToolBox Console](#otaa-configuration-for-ttn-via-wistoolbox-console)

##### OTAA Configuration for TTN via WisToolBox UI

The **RAK4630** should have the correct OTAA credentials to connect to TTN. This can be done using **WisToolBox UI**. Below are the steps on setting up your **RAK4630** using **WisToolBox**.

1. Connect your **RAK4630** with your chosen WisBlock base board to the PC via USB cable and open the **WisToolBox** application.
2. Click the **CONNECT DEVICE** button to launch the WisToolBox Dashboard.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_1.png"
  width="90%"
  caption="CONNECT DEVICE"
/>

3. Then select your target port where your **RAK4630** is connected. Once recognized, click **CONNECT**, as shown in **Figure 68**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_2.png"
  width="90%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_3.png"
  width="90%"
  caption="Setting up your device"
/>

4. Once done, **RAK4630** will appear in the dashboard then select it.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_4.png"
  width="90%"
  caption="Device seen from WisToolBox dashboard"
/>

5. Then click **PARAMETERS** to do the configuration in your RAK4630.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_5.png"
  width="90%"
  caption="Setting up your device"
/>

6. Click **Global settings** to set the network mode into **LoRaWAN** and join mode to **OTAA**. Make sure that the active region is using **EU868** for this configuration. If you wish to work on other regional bands, you can choose among active regions based on your location.

- LoRa network mode: **LoRaWAN**
- LoRaWAN join mode: **OTAA**
- LoRaWAN region: **EU868**

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_6.png"
  width="90%"
  caption="Global settings"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_7A.png"
  width="90%"
  caption="Global settings"
/>

7. Then click **LoRaWAN keys, ID, EUI** to configure the **Application EUI (AppEUI)**, **Application key (AppKey)** and **Device EUI (DevEUI)**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_7B.png"
  width="90%"
  caption="LoRaWAN keys, ID, EUI"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_8B.png"
  width="90%"
  caption="Setting up your device"
/>

8. Then go back to the console where your RAK4630 end-device is created previously. Then copy all the credentials from there. Those will be the ones to be used also in the WisToolBox dashboard. Once encoded into the dashboard, click **APPLY COMMAND** to update your device as shown in **Figure 81**.

:::tip 📝 NOTE:

- The **AppEUI**, **DevEUI**, and **AppKey** are hidden in this section as these are unique from a specific device.

:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_9.png"
  width="100%"
  caption="Your created OTAA device from your console"
/>

- **For Application EUI (AppEUI)**

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_9A.png"
  width="100%"
  caption="Copying the AppEUI credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_10A.png"
  width="90%"
  caption="Copying the AppEUI credential from TTN to WisToolBox"
/>

- **For Application key (AppKey)**

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_9B.png"
  width="100%"
  caption="Copying the AppKey credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_10B.png"
  width="90%"
  caption="Copying the AppKey credential from TTN to WisToolBox"
/>

- **For Device EUI (DevEUI)**

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_9C.png"
  width="100%"
  caption="Copying the DevEUI credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_10C.png"
  width="90%"
  caption="Copying the DevEUI credential from TTN to WisToolBox"
/>

- **WisToolBox Dashboard**

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_10.png"
  width="90%"
  caption="Used credentials from your console in WisToolBox dashboard"
/>

9. Once done, you will see the summary of commands that is applied to your device. Then click **CLOSE**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_11.png"
  width="90%"
  caption="Summary of commands"
/>

10. Now you will see it returns to the dashboard with updated credentials of your device.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_12.png"
  width="90%"
  caption="Successfully configured OTAA device via WisToolBox dashboard"
/>

11. After your device's credentials update, it can now join the network. To do this, you need to go to **Data on LoRa network** under **PARAMETERS**. Then click the **JOIN NETWORK** under **LoRaWAN join settings**. After a few seconds, it will notify you that your OTAA device already joined the TTN server. You can also to your TTN console if your device has successfully joined the TTN.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_13.png"
  width="90%"
  caption="Joining mode of your OTAA device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/Wis_RAK4630_New_15.png"
  width="90%"
  caption="OTAA device successfully joined the TTN server"
/>

##### OTAA Configuration for TTN via WisToolBox Console

Here's another way of OTAA configuration using **WisToolBox Console**. Below are the steps on setting up your **RAK4630** using **WisToolBox Console**.

1. Connect your **RAK4630** with your chosen WisBlock base board to the PC via USB cable and open the **WisToolBox** application.
2. Click the **CONNECT DEVICE** button to launch the WisToolBox Dashboard.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_1.png"
  width="90%"
  caption="CONNECT DEVICE"
/>

3. Then select your target port where your **RAK4630** is connected. Once recognized, click **CONNECT** as shown in **Figure 89**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_2.png"
  width="90%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_3.png"
  width="90%"
  caption="Setting up your device"
/>

4. Once done, **RAK4630** will appear in the dashboard then select it.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_4.png"
  width="90%"
  caption="Device seen from WisToolBox dashboard"
/>

5. Then click **ADVANCED**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_5.png"
  width="90%"
  caption="Setting up your device"
/>

6. Once done, click **OPEN CONSOLE** to do the configuration.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_6.png"
  width="90%"
  caption="OPEN CONSOLE"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_7.png"
  width="90%"
  caption="Opening the Console terminal of WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_8.png"
  width="90%"
  caption="Opening the Console terminal of WisToolBox"
/>

7. To start the configuration, type **ATE** so you can echo the commands you input during your configuration. Then press **Enter**.

It is recommended to start by testing the console and verify that the current configuration is working by sending these two AT commands:

```
AT
```

```
ATE
```

`ATE` is useful for tracking the commands and troubleshooting.

You will receive `OK` when you input the two commands. After setting `ATE`, you can now see all the commands you input together with the replies.

:::tip 📝 NOTE:

If there is no `OK` or any reply, check if the device is powered correctly. If you are getting power from a USB port, ensure that you have a good USB cable.

:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_9A.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_9B.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_9C.png"
  width="90%"
  caption="Setting up your Console"
/>

8. Then configure the LoRaWAN join mode to **OTAA**. You can check what parameter you will input by typing **AT+NJM?** and then **Enter** into the console terminal. For **OTAA**, you should input **AT+NJM=1** and then press **Enter** as shown in **Figure 97**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_10.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_11.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_12.png"
  width="90%"
  caption="Setting up your Console"
/>

9. Once done, set up your LoRaWAN region to EU868. You can check what parameter you will input by typing **AT+BAND?** and then **Enter** into the console terminal. For **EU868**, you should input **AT+BAND=4** then press **Enter**. If you wish to work on other regional bands, you may check the list of band parameter options below.

Set the frequency/region to EU868.

```
AT+BAND=4
```

:::tip 📝 NOTE:

Depending on the Regional Band you selected, you might need to configure the sub-band of your RAK4630 to match the gateway and LoRaWAN network server. This is especially important for Regional Bands like US915, AU915, and CN470.

To configure the masking of channels for the sub-bands, you can use the `AT+MASK` command that can be found on the [AT Command Manual](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK4630-Module/AT-Command-Manual/#at-mask).

To illustrate, you can use sub-band 2 by sending the command `AT+MASK=0002`.
:::

<b>List of band parameter options</b>

| Code | Regional Band |
| ---- | ------------- |
| 0    | EU433         |
| 1    | CN470         |
| 2    | RU864         |
| 3    | IN865         |
| 4    | EU868         |
| 5    | US915         |
| 6    | AU915         |
| 7    | KR920         |
| 8    | AS923-1       |
| 9    | AS923-2       |
| 10   | AS923-3       |
| 11   | AS923-4       |


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_13.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_14.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_15.png"
  width="90%"
  caption="Setting up your Console"
/>

10. Then next to this will be updating the OTAA credentials of your device. First to this will be the **Application EUI (AppEUI)**. Go back to your console where your RAK4630 End device was created to copy the AppEUI credential then paste it to the WisToolBox Console then press **Enter**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_W.png"
  width="90%"
  caption="Your created OTAA device from your TTN console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_16.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_17.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_18.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_X.png"
  width="90%"
  caption="Copying the AppEUI credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_19.png"
  width="90%"
  caption="Setting up your Console"
/>

11. Once done, do the same procedure to **Application key (AppKey)** and **Device EUI (DevEUI)**.

- **For Application key (AppKey)**

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_20.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_21.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_22.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_Y.png"
  width="90%"
  caption="Copying the AppKey credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_23.png"
  width="90%"
  caption="Setting up your Console"
/>

- **For Device EUI (DevEUI)**

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_24.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_25.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_Z.png"
  width="90%"
  caption="Copying the DevEUI credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_26.png"
  width="90%"
  caption="Setting up your Console"
/>

12. Once done, click **Dashboard** to check the updated credentials of your OTAA device. Click **PARAMETERS** to open the **Global Settings** and **LoRaWAN keys, ID, EUI** and check whether these portions are updated.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_27.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_28.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_29.png"
  width="90%"
  caption="PARAMETERS"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_30A.png"
  width="90%"
  caption="Global settings and LoRaWAN keys, ID, EUI"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_30B.png"
  width="90%"
  caption="Global settings and LoRaWAN keys, ID, EUI details"
/>

13. Now you have a configured OTAA device using WisToolBox Console. You can now join the network using the WisToolBox console.

14. To do this, you need to go again to the WisToolBox console and type **AT+JOIN**. Then edit it to **AT+JOIN=1** then press **Enter** to join the network.

:::tip 📝 NOTE:
`AT+JOIN` command parameters are optional. You can configure the settings for auto-join, reattempt interval, and the number of join attempts if your application needs it. If not configured, it will use the default parameter values.

`AT+JOIN` and `AT+JOIN=1` also share the common functionality of trying to join the network.
:::

Join command format: **`AT+JOIN=w:x:y:z`**

| Parameter | Description                                                  |
| --------- | ------------------------------------------------------------ |
| w         | Join command - 1: joining, 0: stop joining.                  |
| x         | Auto-join config - 1: auto-join on power-up, 0: no auto-join |
| y         | Reattempt interval in seconds (7-255) - 8 is the default.    |
| z         | Number of join attempts (0-255) - 0 is the default.              |

After 5 or 6 seconds, if the request is successfully received by a LoRa gateway, you should see a `+EVT:JOINED` status reply.

:::tip 📝 NOTE:

If the OTAA device failed to join, you need to check if your device is within reach of a working LoRaWAN gateway that is configured to connect to TTN. It is also important to check that all your OTAA parameters (DEVEUI, APPEUI, and APPKEY) are correct using the `AT+DEVEUI=?`, `AT+APPEUI=?`, and `AT+APPKEY=?` commands. Lastly, ensure that the antenna of your device is properly connected.

After checking all the things above, try to join again.
:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_34.png"
  width="90%"
  caption="Joining mode using WisToolBox Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_35.png"
  width="90%"
  caption="Joining mode using WisToolBox Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_36.png"
  width="90%"
  caption="Joining mode using WisToolBox Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_37.png"
  width="90%"
  caption="Joining mode using WisToolBox Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_38.png"
  width="90%"
  caption="OTAA device successfully joined the network"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_39A.png"
  width="90%"
  caption="OTAA device successfully joined the network"
/>

1.  With the end-device properly joined to the TTN, you can now try to send some payload after a successful join. Send command format: **`AT+SEND=<port>:<payload>`**

```
AT+SEND=2:12345678
```

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_40.png"
  width="90%"
  caption="OTAA device sending payload to the network"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_41.png"
  width="90%"
  caption="OTAA device sending payload to the network"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_42.png"
  width="90%"
  caption="OTAA device sending payload to the network"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_43.png"
  width="90%"
  caption="OTAA device sending payload to the network"
/>

16. You can see the data sent by the RAK4630 module on the TTN device console *Live data* section. Also, the *Last seen* info should be a few seconds or minutes ago.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ConWis_RAK4630_New_44.png"
  width="90%"
  caption="OTAA Test Sample Data Sent Viewed in TTN"
/>

###### TTN ABP Device Registration

1. To register an ABP device, go to your application console and select the application to which you want your device to be added. Then click **+ Register end device**, as shown in **Figure 134**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABP_RAK4630_New_1.png"
  width="100%"
  caption="Adding ABP Device"
/>

2. To register the board, click the **Enter end device specifics manually**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABP_RAK4630_New_2.png"
  width="100%"
  caption="Enter end device specifics manually"
/>

3. Next step is to set up **Frequency plan**, compatible **LoRaWAN version**, and **Regional Parameters version** supported.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABP_RAK4630_New_3.png"
  width="80%"
  caption="Setting up for your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABP_RAK4630_New_4.png"
  width="80%"
  caption="Setting up for your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABP_RAK4630_New_5.png"
  width="90%"
  caption="Setting up for your device"
/>

4. Then click **Show advanced activation, LoRaWAN class and cluster settings**. Configure the activation mode by selecting **Activation by personalization (ABP)** and Additional LoRaWAN class capabilities to **class A only**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABP_RAK4630_New_6.png"
  width="90%"
  caption="Setting up for your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABP_RAK4630_New_7.png"
  width="90%"
  caption="Setting up for your device"
/>

5. Once done, provide the DevEUI credentials of your device into the **DevEUI** portion. This will automatically generate the specific End
device ID of your board. Then click **Generate** under **Device address**, **AppSKey**, and **NwkSKey** under the Provisioning information section. Then click **Register end device**.

:::tip 📝 NOTE:

- The **DevEUI**, **Device address**, **AppSKey**, and **NwkSKey** are hidden in this section as these are unique from a specific device. The **DevEUI** credential is unique to every RAK4630 device. Also, you should generate your own **Device address**, **AppSKey**, and **NwkSKey** credentials for your specific device and application.

:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABP_RAK4630_New_8.png"
  width="90%"
  caption="Setting up for your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABP_RAK4630_New_9.png"
  width="100%"
  caption="Setting up for your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABP_RAK4630_New_10.png"
  width="100%"
  caption="Setting up for your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABP_RAK4630_New_11.png"
  width="100%"
  caption="Setting up for your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABP_RAK4630_New_12.png"
  width="100%"
  caption="Setting up for your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABP_RAK4630_New_13.png"
  width="100%"
  caption="Register end device"
/>

6. You should now be able to see the device on the TTN console after you fully register your device, as shown in **Figure 147**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABP_RAK4630_New_14.png"
  width="100%"
  caption="ABP device successfully registered to TTN"
/>

##### ABP Configuration for TTN

The RAK4630 module can be configured using WisToolBox to do the ABP configuration. **WisToolBox** is a software tool that supports **RAK4630** module. It automatically detects the RAK4630 module once connected to the PC. Below are the options in WisToolBox that the ABP configuration can be done.

- [ABP Configuration for TTN via WisToolBox UI](#abp-configuration-for-ttn-via-wistoolbox-ui)
- [ABP Configuration for TTN via WisToolBox Console](#abp-configuration-for-ttn-via-wistoolbox-console)

##### ABP Configuration for TTN via WisToolBox UI

The **RAK4630** should have the correct ABP credentials to connect to TTN. This can be done using **WisToolBox**. Below are the steps on setting up your **RAK4630** using **WisToolBox**.

1. Connect your **RAK4630** with your chosen WisBlock base board to the PC via USB cable and open the **WisToolBox** application.
2. Click the **CONNECT DEVICE** button to launch the WisToolBox Dashboard.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_1.png"
  width="90%"
  caption="CONNECT DEVICE"
/>

3. Then select your target port where your **RAK4630** is connected. Once recognized, click **CONNECT** as shown in **Figure 150**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_2.png"
  width="90%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_3.png"
  width="90%"
  caption="Setting up your device"
/>

4. Once done, **RAK4630** will appear in the dashboard then select it.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_4.png"
  width="90%"
  caption="Device seen from WisToolBox dashboard"
/>

5. Then click **PARAMETERS** to do the configuration in your RAK4630.

:::tip 📝 NOTE:

- The **AppSKey**, **Device address**, and **NwkSKey** are hidden in this section as these are unique from a specific device.

:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_5.png"
  width="90%"
  caption="Setting up your device"
/>

 6. Click **Global settings** to set the network mode into **LoRaWAN** and join mode to **ABP**. Make sure that the active region is using **EU868** for this configuration. If you wish to work on other regional bands, you can choose among active regions based on your location.

- LoRa network mode: **LoRaWAN**
- LoRaWAN join mode: **ABP**
- LoRaWAN region: **EU868**

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_6.png"
  width="90%"
  caption="Global settings"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_7A.png"
  width="90%"
  caption="Global settings"
/>

7. Then click **LoRaWAN keys, ID, EUI** to configure the **Application session key (AppSKey)**, **Device address** and **Network session key (NwkSKey)**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_7B.png"
  width="90%"
  caption="LoRaWAN keys, ID, EUI"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_8A.png"
  width="90%"
  caption="Setting up your device"
/>

8. Then go back to the console where your RAK4630 End device is created previously. Then copy all the credentials from there. Those will be the ones to be used also in the WisToolBox dashboard. Once encoded into the dashboard, click **APPLY COMMANDS** to update your device, as shown in **Figure 157**.

:::tip 📝 NOTE:

- The **AppSKey**, **Device address**, and **NwkSKey** are hidden in this section as these are unique from a specific device.

:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_9.png"
  width="100%"
  caption="Your created ABP device from your console"
/>

- **For Application session key (AppSKey)**

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_9A.png"
  width="90%"
  caption="Copying the AppSKey credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_10A.png"
  width="90%"
  caption="Copying the AppSKey credential from TTN to WisToolBox"
/>

- **For Device address**

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_9B.png"
  width="90%"
  caption="Copying the Device address credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_10B.png"
  width="90%"
  caption="Copying the Device address credential from TTN to WisToolBox"
/>

- **For Network session key (NwkSKey)**

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_9C.png"
  width="90%"
  caption="Copying the NwkSKey credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_10C.png"
  width="90%"
  caption="Copying the NwkSKey credential from TTN to WisToolBox"
/>

- **WisToolBox Dashboard**

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_10.png"
  width="90%"
  caption="Used credentials from your console in WisToolBox dashboard"
/>

9. Once done, you will see the summary of commands that is applied to your device. Then click **CLOSE**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_11.png"
  width="90%"
  caption="Summary of commands"
/>

10. Now you will see it returns to the dashboard with updated credentials of your device.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPWis_RAK4630_New_12.png"
  width="90%"
  caption="Successfully configured ABP device via WisToolBox dashboard"
/>

##### ABP Configuration for TTN via WisToolBox Console

Here's another way of ABP configuration using **WisToolBox Console**. Below are the steps on setting up your **RAK4630** using **WisToolBox Console**.

1. Connect your **RAK4630** with your chosen WisBlock base board to the PC via USB cable and open the **WisToolBox** application.
2. Click the **CONNECT DEVICE** button to launch the WisToolBox Dashboard.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_1.png"
  width="90%"
  caption="CONNECT DEVICE"
/>

3. Then select your target port where your **RAK4630** is connected. Once recognized, click **CONNECT** as shown in **Figure 168**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_2.png"
  width="90%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_3.png"
  width="90%"
  caption="Setting up your device"
/>

4. Once done, **RAK4630** will appear in the dashboard then select it.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_4.png"
  width="90%"
  caption="Device seen from WisToolBox dashboard"
/>

5. Then click **ADVANCED**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_5.png"
  width="90%"
  caption="Setting up your device"
/>

6. Once done, click **OPEN CONSOLE** to do the configuration.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_6.png"
  width="90%"
  caption="OPEN CONSOLE"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_7.png"
  width="90%"
  caption="Opening the Console terminal of WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_8.png"
  width="90%"
  caption="Opening the Console terminal of WisToolBox"
/>

7. To start the configuration, type **ATE** so you can echo the commands you input during your configuration. Then press **Enter**.

It is recommended to start by testing the console and verify that the current configuration is working by sending these two AT commands:

```
AT
```

```
ATE
```

`ATE` is useful for tracking the commands and troubleshooting.

You will receive `OK` when you input the two commands. After setting `ATE`, you can now see all the commands you input together with the replies.

:::tip 📝 NOTE:

If there is no `OK` or any reply, check if the device is powered correctly. If you are getting power from a USB port, ensure that you have a good USB cable.

:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_9A.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_9B.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_9C.png"
  width="90%"
  caption="Setting up your Console"
/>

8. Then configure the LoRaWAN join mode to **ABP**. You can check what parameter you will input by typing **AT+NJM?** and then **Enter** into the console terminal. For **ABP**, you should input **AT+NJM=0** and then press **Enter** as shown in **Figure 181**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_10.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_11.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_12.png"
  width="90%"
  caption="Setting up your Console"
/>

9. Once done, set up your LoRaWAN region to EU868. You can check what parameter you will input by typing **AT+BAND?** and then **Enter** into the console terminal. For **EU868**, you should input **AT+BAND=4** then press **Enter**. If you wish to work on other regional bands, you may check the <b>List of band parameter options</b> below.

Set the frequency/region to EU868.

```
AT+BAND=4
```

:::tip 📝 NOTE:

Depending on the Regional Band you selected, you might need to configure the sub-band of your RAK4630 to match the gateway and LoRaWAN network server. This is especially important for Regional Bands like US915, AU915, and CN470.

To configure the masking of channels for the sub-bands, you can use the `AT+MASK` command that can be found on the [AT Command Manual](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK4630-Module/AT-Command-Manual/#at-mask).

To illustrate, you can use sub-band 2 by sending the command `AT+MASK=0002`.
:::

**<b>List of band parameter options</b>**

| Code | Regional Band |
| ---- | ------------- |
| 0    | EU433         |
| 1    | CN470         |
| 2    | RU864         |
| 3    | IN865         |
| 4    | EU868         |
| 5    | US915         |
| 6    | AU915         |
| 7    | KR920         |
| 8    | AS923-1       |
| 9    | AS923-2       |
| 10   | AS923-3       |
| 11   | AS923-4       |

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_13.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_14.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_15.png"
  width="90%"
  caption="Setting up your Console"
/>

10. Then next to this will be updating the ABP credentials of your device. First to this will be the **Application session key (AppSKey)**. Go back to your console where your RAK4630 End device was created to copy the AppSKey credential then paste it to the WisToolBox Console then press **Enter**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_W.png"
  width="90%"
  caption="Your created ABP device from your TTN console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_16.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_17.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_18.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_X.png"
  width="90%"
  caption="Copying the AppSKey credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_19.png"
  width="90%"
  caption="Setting up your Console"
/>

11. Once done, do the same procedure to **Device address** and **Network session key (NwkSKey)**.

- **For Device address**

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_20.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_21.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_22.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_Y.png"
  width="90%"
  caption="Copying the Device address credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_23.png"
  width="90%"
  caption="Setting up your Console"
/>

- **For Network session key (NwkSKey)**

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_24.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_25.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_26.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_Z.png"
  width="90%"
  caption="Copying the NwkSKey credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_27.png"
  width="90%"
  caption="Setting up your Console"
/>

12. Once done, click **Dashboard** to check the updated credentials of your ABP device. Click **PARAMETERS** to open the **Global Settings** and **LoRaWAN keys, ID, EUI** and check whether these portions are updated.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_28.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_29.png"
  width="90%"
  caption="Setting up your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_30.png"
  width="90%"
  caption="PARAMETERS"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_31.png"
  width="90%"
  caption="Global settings and LoRaWAN keys, ID, EUI"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_31B.png"
  width="90%"
  caption="Global settings and LoRaWAN keys, ID, EUI details"
/>

13. Now you have a configured ABP device using WisToolBox Console. **ABP-configured devices** are directly tied to the network once done with the above procedures so joining procedure is not needed.

14. Now you can try sending the payload to TTN. Open again the terminal console of WisToolBox to send some payload using it. Send command format: **`AT+SEND=<port>:<payload>`**

```
AT+SEND=2:12345678
```

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_35.png"
  width="90%"
  caption="ABP device sending payload to the network"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_36.png"
  width="90%"
  caption="ABP device sending payload to the network"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_37.png"
  width="90%"
  caption="ABP device sending payload to the network"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_38.png"
  width="90%"
  caption="ABP device sending payload to the network"
/>

15. You can see the data sent by the RAK4630 module on the TTN device console *Live data* section. Also, the *Last seen* info should be a few seconds or minutes ago.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ABPConWis_RAK4630_New_39.png"
  width="90%"
  caption="ABP Test Sample Data Sent Viewed in TTN"
/>

###### Connecting with ChirpStack

This section shows how to connect the RAK4630 module to the ChirpStack platform.


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/23.chirpstack-platform.png"
  width="60%"
  caption="RAK4630 Module in the context of the ChirpStack platform"
/>

The ChirpStack, previously known as the LoRaServer project, provides open-source components for building LoRaWAN networks. Like in the case of TTN, the RAK4630 module is located in the periphery and will transmit the data to the backend servers through a LoRaWAN gateway. Learn more about [ChirpStack](https://www.chirpstack.io/).

:::tip 📝 NOTE:

In this guide, it is assumed that you are using a RAK Gateway and its built-in ChirpStack. Also, the gateway with the ChirpStack must be configured successfully. For further information, check the RAK documents for more details.

:::

* In summary, these are the requirements:

  1. In a ChirpStack online gateway, the frequency band of the nodes should be consistent with the frequency band of the gateway in use.
      * [Connect the Gateway with Chirpstack](/Product-Categories/WisGate/RAK7243/Quickstart/#connect-the-gateway-with-chirpstack)
  2.  RAK Serial Port Tool provided by RAK
  3.  RAK4630 module

:::tip 📝 NOTE:
The frequency band used in the demonstration is EU868. Use a high-frequency version of RAK4630. The product number should be **RAK4630 (H)**.
:::

###### Create a New Application

1. Log in to the ChirpStack server using your account and password.
2. Go to the Application section, as shown in **Figure 211**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/24.chirpstack.png"
  width="100%"
  caption="Application section"
/>

3. By default, you should create a new application, although you can reuse existing ones. For this setup, create a new Application by clicking on the **CREATE** button and filling in the required parameters, as shown in **Figure 212** and **Figure 213**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/25.new-application.png"
  width="100%"
  caption="Creating a new application"
/>+ CREATE


* For this setup, create an Application named **rak_node_test**.

ChirpStack LoraServer supports multiple system configurations, with only one by default.

* **Service profile**: Field is to select the system profile.
* **Payload codec**: It is the parsing method for selecting load data such as parsing LPP format data.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/26.filling-parameters.png"
  width="100%"
  caption="Filling in the parameters of an application"
/>

<b>Register a New Device</b>

1. Choose the **Application** created in the previous step, then select the **DEVICES** tab, as shown in **Figure 214** and **Figure 215**.

2. Once done, click “**+ CREATE**”.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/27.application-available.png"
  width="100%"
  caption="List of applications created"
/>


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/28.application-page.png"
  width="100%"
  caption="Device tab of an application"
/>

3. Once inside the DEVICE tab, create a new device (LoRaWAN node) by clicking on the “**+ CREATE**” button.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/29.adding-node.png"
  width="100%"
  caption="Add a new device"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/30.new-device-registration.png"
  width="100%"
  caption="Chirpstack adding node into the RAK4630 Module"
/>

6. Once the node is created, fill in the necessary data. You can generate a Device EUI automatically by clicking the following icon, or you can write a correct Device EUI in the edit box.

Fill in the parameters requested:

* **Device name and Device description**: These are descriptive texts about your device.
* **Device EUI**: This interface allows you to generate a Device EUI automatically by clicking the generate icon. You can also add a specific Device EUI directly in the form.
* **Device Profile**:
  * If you want to join in OTAA mode, select **DeviceProfile_OTAA**.
  * If you want to join in ABP mode, select **DeviceProfile_ABP**.

:::tip 📝 NOTE:
Device profiles **DeviceProfile_OTAA** and **DeviceProfile_ABP** are only available if you are using the built-in Chirpstack LoRaWAN Server of RAK Gateways.

If you have your own Chirpstack installation, you can set up the device profile with `LoRaWAN MAC version 1.0.3` and `LoRaWAN Regional Parameters revision B` to make it compatible with RAK4630.
:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/31.adding-parameters.png"
  width="100%"
  caption="Generate a new Device EUI "
/>


###### Chirpstack OTAA Device Registration

1. If you have selected **DeviceProfile_OTAA**, as shown in **Figure 219**after the device is created, an Application Key must be also created for this device.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/32.otaa.png"
  width="100%"
  caption="Chirpstack OTAA activation"
/>

2. A previously created Application Key can be entered here, or a new one can be generated automatically by clicking the icon highlighted in red in **Figure 220**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/33.otaa-set-device-keys.png"
  width="100%"
  caption="Chirpstack OTAA Set Application Keys"
/>

3. Once the Application Key is added to the form, the process can be finalized by clicking on the **SET DEVICE-KEYS** button.

* As shown in **Figure 221**, a new device should be listed in the DEVICES tab. The most important parameters, such as the Device EUI, are shown in the summary.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/34.set-device-eui.png"
  width="100%"
  caption="Chirpstack OTAA list of the device in the Device Tab"
/>

4. To end the process, it is a good practice to review that the Application Key is properly associated with this device. The Application Key can be verified in the **KEYS(OTAA)** tab, as shown in **Figure 222**.


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/35.application-key.png"
  width="100%"
  caption="Application key associated with the new device"
/>

:::tip 📝 NOTE:

Standard OTAA mode requires the **Device EUI**, **Application Key**, and **Application EUI**, but in ChirpStack’s implementation, only the Device EUI and the Application Key are mandatory. The Application EUI is not required and not recorded in the Application tab. Nevertheless, you can reuse the Device EUI as the Application EUI during the configuration on the side of the node.

:::

###### OTAA Configuration for Chirpstack

The RAK4630 module supports a series of AT commands to configure its internal parameters and control the functionalities of the module.

1. To set up the RAK4630 module to join the Chirpstack using OTAA, start by connecting the RAK4630 module to the Computer (see [Figure 37](/Product-Categories/WisDuo/RAK4630-Module/Quickstart/#connect-to-the-rak4630)) and open the RAK Serial Port Tool. Select the right COM port and set the baud rate to 115200.

It is recommended to start by testing the serial communication and verify that the current configuration is working by sending these two AT commands:

```
AT
```

```
ATE
```

`ATE` will echo the commands you input to the module, which is useful for tracking the commands and troubleshooting.

You will receive `OK` when you input the two commands. After setting `ATE`, you can now see all the commands you input together with the replies. Try again `AT` and you should see it on the terminal followed by `OK`, as shown in **Figure 224**.

:::tip 📝 NOTE:

If you haven't received an `OK` or any reply, you need to check if the wiring of your UART lines is correct and if the baud is correctly configured to 1115200. Also, you can check if the device is powered correctly. If you are getting power from a USB port, ensure that you have a good USB cable.
:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/atstart.png"
  width="90%"
  caption="at+version command response"
/>

2. The next step is to configure the OTAA LoRaWAN parameters in RAK4630:

- LoRa work mode: **LoRaWAN**
- LoRaWAN join mode: **OTAA**
- LoRaWAN class: **Class A**
- LoRaWAN region: **EU868**

Set the work mode to LoRaWAN. You might need to reconnect on the Serial Terminal Software Tool if you lost connection after using the `AT+NWM=1` command.

```
AT+NWM=1
```

Set the LoRaWAN activation to OTAA.

```
AT+NJM=1
```

Set the LoRaWAN class to Class A.

```
AT+CLASS=A
```

Set the frequency/region to EU868.

```
AT+BAND=4
```

:::tip 📝 NOTE:

Depending on the Regional Band you selected, you might need to configure the sub-band of your RAK4630 to match the gateway and LoRaWAN network server. This is especially important for Regional Bands like US915, AU915, and CN470.

To configure the masking of channels for the sub-bands, you can use the `AT+MASK` command that can be found on the [AT Command Manual](https://docs.rakwireless.com/Product-Categories/WisDuo/rak4630-module/AT-Command-Manual/#at-mask).

To illustrate, you can use sub-band 2 by sending the command `AT+MASK=0002`.
:::

**<b>List of band parameter options</b>**

| Code | Regional Band |
| ---- | ------------- |
| 0    | EU433         |
| 1    | CN470         |
| 2    | RU864         |
| 3    | IN865         |
| 4    | EU868         |
| 5    | US915         |
| 6    | AU915         |
| 7    | KR920         |
| 8    | AS923         |


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/otaaconfig.png"
  width="90%"
  caption="Configuring LoRa parameters"
/>

3. After the configuration of the LoRaWAN parameters, the next step is to set up the DevEUI and AppKey. You need the use the values from the Chirpstack device console.

:::tip 📝 NOTE:
The Application EUI parameter is not required in the ChirpStack platform; therefore, it is possible to use the same id as the Device EUI.
:::

- Device EUI: **5E9D1E0857CF25F1**
- Application EUI: **5E9D1E0857CF25F1**
- Application Key: **F921D50CD7D02EE3C5E6142154F274B2**

Set the Device EUI.

```
AT+DEVEUI=5E9D1E0857CF25F1
```

Set the Application EUI.

```
AT+APPEUI=5E9D1E0857CF25F1
```

Set the Application Key.

```
AT+APPKEY=F921D50CD7D02EE3C5E6142154F274B2
```

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/chirp_otaa_eui.png"
  width="90%"
  caption="Configuring LoRa Parameters"
/>

4. After the EUI and key configuration, the device can now join the network and send some payload.

```
AT+JOIN=1:0:10:8
```

Join command format: **`AT+JOIN=w:x:y:z`**

| Parameter | Description                                                  |
| --------- | ------------------------------------------------------------ |
| w         | Join command - 1: joining, 0: stop joining.                  |
| x         | Auto-join config - 1: auto-join on power-up, 0: no auto-join |
| y         | Reattempt interval in seconds (7-255) - 8 is the default.    |
| z         | Number of join attempts (0-255) - 0 is default.              |

After 5 or 6 seconds, if the request is successfully received by a LoRa gateway, you should see the JOINED status reply.

:::tip 📝 NOTE:

If the OTAA device failed to join, you need to check if your device is within reach of a working LoRaWAN gateway that is configured to connect to Chirpstack. It is also important to check that all your OTAA parameters (DEVEUI and APPKEY) are correct, using the `AT+DEVEUI=?` and `AT+APPKEY=?` commands. Lastly, ensure that the antenna of your device is properly connected.

After checking all the things above, try to join again.
:::

5. With the end-device properly activated, you can now try to send some payload after a successful join.

```
AT+SEND=2:12345678
```

Send command format: **`AT+SEND=<port>:<payload>`**

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/chirp_otaa_send.png"
  width="90%"
  caption="OTAA test sample data sent via RAK Serial Port Tool"
/>

On the ChirpStack platform, you should see the join and uplink messages in the LORAWAN FRAMES tab, as shown in **Figure 227**. By convention, messages sent from nodes to gateways are considered as **Uplinks** while messages sent by gateways to nodes are considered as **Downlinks**.


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/41.message-received.png"
  width="100%"
  caption="Chirpstack data received preview"
/>

###### Chirpstack ABP Device Registration

1. During the registration of a new device, if you select **DeviceProfile_ABP**, as shown in **Figure 228**, then the ChirpStack platform will assume that this device will join the LoRaWAN network using the ABP mode.


:::tip 📝 NOTE:

Check **Disable counting frame verification**. During the test, when the module is restarted, the frame counting number will be also be restarted from zero. This would cause a synchronization problem with the ChirpStack server treating it as a replay attack. For the testing purpose, it is safe to disable this feature, but remember to activate it in a production environment.

:::


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/42.configuring-device-abp.png"
  width="100%"
  caption="ChirpStack console, configuring a device"
/>

2. After selecting the ABP mode, the following parameters appear in the Activation tab:

Then, you can see that there are some parameters for ABP in the **ACTIVATION** item:

  * **Device Address**
  * **Network Session Key**
  * **Application Session Key**

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/43.abp-activation-parameters.png"
  width="100%"
  caption="Chirpstack ABP activation parameters needed"
/>

3. The parameters can be generated as random numbers by the platform or can be set with user values. Once these parameters are filled in properly, the process is completed by clicking on the **ACTIVATE DEVICE** button.


###### ABP Configuration for Chirpstack

1. To set up the RAK4630 module to join the Chirpstack using ABP, start by connecting the RAK4630 module to the Computer (see [Figure 37](/Product-Categories/WisDuo/RAK4630-Module/Quickstart/#connect-to-the-rak4630)) and open the RAK Serial Port Tool. Select the right COM port and set the baud rate to 115200.

It is recommended to start by testing the serial communication and verify that the current configuration is working by sending these two AT commands:

```
AT
```

```
ATE
```

`ATE` will echo the commands you input to the module, which is useful for tracking the commands and troubleshooting.

You will receive `OK` when you input the two commands. After setting `ATE`, you can now see all the commands you input together with the replies. Try again `AT` and you should see it on the terminal followed by `OK`, as shown in **Figure 230**.

:::tip 📝 NOTE:

If haven't received an `OK` or any reply, you need to check if the wiring of your UART lines is correct and if the baud is correctly configured to 115200. Also, you can check if the device is powered correctly. If you are getting power from a USB port, ensure that you have a good USB cable.
:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/atstart.png"
  width="90%"
  caption="at+version command response"
/>

2. The next step is to configure the ABP LoRaWAN parameters in RAK4630:

- LoRa work mode: **LoRaWAN**
- LoRaWAN join mode: **ABP**
- LoRaWAN class: **Class A**
- LoRaWAN region: **EU868**

Set the work mode to LoRaWAN. You might need to reconnect on the Serial Terminal Software Tool if you lost connection after using the **AT+NWM=1** command.

```
AT+NWM=1
```

Set the LoRaWAN activation to ABP.

```
AT+NJM=0
```

Set the LoRaWAN class to Class A.

```
AT+CLASS=A
```

Set the frequency/region to EU868.

```
AT+BAND=4
```

:::tip 📝 NOTE:

Depending on the Regional Band you selected, you might need to configure the sub-band of your RAK4630 to match the gateway and LoRaWAN network server. This is especially important on Regional Bands like US915, AU915, and CN470.

To configure the masking of channels for the sub-bands, you can use the `AT+MASK` command that can be found on the [AT Commands Manual](https://docs.rakwireless.com/Product-Categories/WisDuo/rak4630-module/AT-Command-Manual/#at-mask).

To illustrate, you can use sub-band 2 by sending the command `AT+MASK=0002`.
:::

**<b>List of band parameter options</b>**

| Code | Regional Band |
| ---- | ------------- |
| 0    | EU433         |
| 1    | CN470         |
| 2    | RU864         |
| 3    | IN865         |
| 4    | EU868         |
| 5    | US915         |
| 6    | AU915         |
| 7    | KR920         |
| 8    | AS923         |


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/abpconfig.png"
  width="90%"
  caption="Configuring LoRa parameters"
/>

3. After the configuration of the LoRaWAN parameters, the next step is to set up the device address and session keys. You need the use the values from the Chirpstack device console.

- Device Address: **26011AF9**
- Application Session Key: **4D42EC5CAF97F03D833CDAf5003F69E1**
- Network Session Key: **C280CB8D1DF688BC18601A97025C5488**

Set the Device Address.

```
AT+DEVADDR=26011AF9
```

Set the Application Session Key.

```
AT+APPSKEY=4D42EC5CAF97F03D833CDAf5003F69E1
```

Set the Network Session Key.

```
AT+NWKSKEY=C280CB8D1DF688BC18601A97025C5488
```

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/chirp_abp_key.png"
  width="90%"
  caption="Configuring LoRa parameters"
/>

After the EUI and keys configuration, the device can now join the network and send some payload.

```
AT+JOIN=1:0:10:8
```

Join command format: **`AT+JOIN=w:x:y:z`**

| Parameter | Description                                                  |
| --------- | ------------------------------------------------------------ |
| w         | Join command - 1: joining, 0: stop joining.                  |
| x         | Auto-join config - 1: auto-join on power-up, 0: no auto-join |
| y         | Reattempt interval in seconds (7-255) - 8 is the default.    |
| z         | Number of join attempts (0-255) - 0 is default.              |

4. After 5 or 6 seconds, if the request is successfully received by a LoRa gateway, then you should see the JOINED status reply.

5. You can now try to send some payload after a successful join.

```
AT+SEND=2:12341234
```
Send command format: **`AT+SEND=<port>:<payload>`**

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/chirp_abp_send.png"
  width="90%"
  caption="ABP test sample data sent via RAK Serial Port Tool"
/>


##### LoRa P2P Mode

This section shows how to set up and connect two RAK4630 units to work in the LoRa P2P mode. The configuration of the RAK4630 units is done by connecting the two modules to a general-purpose computer using a USB-UART converter. The setup of each RAK4630 can be done separately, but testing the LoRa P2P mode will require having both units connected simultaneously. This could be done by having one computer with two USB ports or two computers with one USB port each.

It is recommended to start by testing the serial communication and verify the current configuration is working by sending these two AT commands:

```
AT
```

```
ATE
```

`ATE` will echo the commands you input to the module, which is useful for tracking the commands and troubleshooting.

You will receive `OK` when you input the two commands. After setting `ATE`, you can now see all the commands you input together with the replies.

Try again `AT` and you should see it on the terminal followed by `OK`.


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/p2p_at.png"
  width="60%"
  caption="AT command response"
/>

1. To set up the RAK4630 to work in LoRa P2P mode, you need to input the work mode command on both RAK4630 modules. You might need to disconnect and reconnect the module as it changes its mode of operation if you are sending commands via USB.

```
AT+NWM=0
```

2. For this P2P setup, the LoRa parameters are the following:

- Link frequency: **868000000&nbsp;Hz**
- Spreading factor: **7**
- Bandwidth: **125&nbsp;kHz**
- Coding Rate: 0 = **4/5**
- Preamble Length: **10**
- Power: **14&nbsp;dBm**

```
AT+P2P=868000000:7:125:0:10:14
```

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/p2p_setup.png"
  width="50%"
  caption="P2P Setup"
/>


:::tip 📝 NOTE:

Refer to the [P2P Mode](/Product-Categories/WisDuo/rak4630-module/AT-Command-Manual/) section of the AT command documentation to learn more about the definition of the parameters used.

:::

3. To set one module as a receiver (RX), you need to set the value of the P2P to receive a command to 65535.

```
AT+PRECV=65535
```

With one module configured as RX, the other device will be the TX. You can now try to send a P2P payload.

```
AT+PSEND=11223344
```

:::tip 📝 NOTE:

- If the `AT+PRECV` value is set to 65534, the device will continuously listen to P2P LoRa TX packets without any timeout. This is the same as setting the device in RX mode.
- If the `AT+PRECV` value is set to 65535, the device will listen to P2P TX without a timeout. But it will stop listening once a P2P LoRa packet is received to save power.
- If the `AT+PRECV` value is 0, the device will stop listening to P2P TX data. The device is in TX mode.

:::


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/p2p_send.png"
  width="90%"
  caption="P2P Sending and Receiving LoRa packets"
/>

#### AT Command over BLE

This section shows how to use AT Commands over BLE using a Serial Bluetooth Terminal.

All available commands can be found in the [AT Command Manual](/Product-Categories/wisduo/rak4630-module/AT-Command-Manual/#general-commands) section of this document.

1. Download and install the Serial Bluetooth Terminal to connect the device.
2. Make sure the Bluetooth on your mobile is turned on.
3. Select **Category** then **Devices**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/available-serial-bluetooth.png"
  width="70%"
  caption="Available Serial Bluetooth Terminal"
/>

4. Select the **Bluetooth LE** icon and click the **SCAN** icon to scan the device.
5. Look for a BLE Device named **RAK.XXXXXX** in the scanner list of the app and connect to this device.

::: tip 📝 NOTE
By default, the BLE signal of the RAK4630 has turned off automatically if no connection is established after 30 seconds. Connect to the BLE signal of the RAK4630 immediately after pressing the reset button.
:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/scanning-devices.png"
  width="70%"
  caption="Scanning devices"
/>

6. Make sure the connection is successful with **RAK.XXXXXX**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/connect-device.png"
  width="40%"
  caption="Connect with the device"
/>

7. Send an AT Command and check remote console is received or not.

```
at+ver=?
```

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/default-ble-id.png"
  width="70%"
  caption="RAK4630 default Bluetooth ID after resetting"
/>

8. The remote device will receive the same AT Commands.

```
at+ver=?
AT+VER=3.2.0-p2_22q1_final.87

OK

at+class=?
AT+CLASS=A

OK
```


## Miscellaneous

### Arduino Installation

Go to [Arduino official website](https://www.arduino.cc/en/Main/Software) and download the Arduino IDE. You can see the multiple versions available for Windows, Linux, and Mac OS X. Choose the correct version of Arduino IDE and download it.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/1.download-arduino.png"
  width="80%"
  caption="Arduino IDE latest version"
/>

#### For Windows

::: tip 📝 NOTE
**For Windows 10 users**:
Do **NOT** install the Arduino IDE from the Microsoft App store. Install the original Arduino IDE from the Arduino official website instead, since the Arduino app from the Microsoft App Store has problems using third-party Board Support Packages.
:::

1. Install the Arduino IDE, which you just downloaded, on your Windows PC.

2. Click **I Agree** then **Next** to proceed.

<rk-img
  src="/assets/images/wisduo/rak4630-module/miscellaneous/2.agreement-license.png"
  width="45%"
  caption="Arduino setup license agreement"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/miscellaneous/3.installation-options.png"
  width="45%"
  caption="Arduino setup installation options"
/>

3. Click **Install**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/miscellaneous/4.installation-folder.png"
  width="45%"
  caption="Installing Arduino IDE"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/miscellaneous/5.installing.png"
  width="45%"
  caption="Ongoing installation"
/>

After 100% progress, the Arduino IDE has been installed successfully.

<rk-img
  src="/assets/images/wisduo/rak4630-module/miscellaneous/6.installation-success.png"
  width="45%"
  caption="Successful installation"
/>

#### For Linux

First, you need the check the compatibility with your system and choose between the 32-bit, 64-bit, and ARM versions of the Arduino IDE for Linux.

##### Installing via a tarball

After downloading the correct Arduino version, open a terminal, then run `ls` to check the installation file on the download folder.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ls-arduino.png"
  width="90%"
  caption="Check the download folder"
/>

A tarball is a type of compressed folder, like a `.zip` file, commonly used to distribute software in Linux. To extract the files from the tarball, change the directory to where the downloaded tarball is, then run:

`tar xvf arduino-version.xz`

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/tar-linux.png"
  width="90%"
  caption="Tarball extract command"
/>

When the tar command finishes, run `ls` again. A folder named  **arduino-version** will be created.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ls-tarball.png"
  width="90%"
  caption="Arduino install folder created"
/>

Change the current directory and go to the newly created folder directory. There will be a file named `install.sh` in the folder. Execute `sudo ./install.sh` to install the Arduino IDE.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/sudo-install.png"
  width="90%"
  caption="Arduino install script running"
/>

The `sudo` command temporarily elevates privileges allowing the installer to complete sensitive tasks without logging in as the root user.

#### For Mac OS X

In Mac OS X, the same as Linux, there is no installation process. It is just a process of decompression, then you can open Arduino IDE successfully.


### Arduino IDE Parts Guide

**Figure 251** shows the five (5) parts of Arduino IDE.

<rk-img
  src="/assets/images/wisduo/rak4630-module/miscellaneous/7.arduino-ide.png"
  width="75%"
  caption="Arduino IDE"
/>

1. **IDE Option Menu**

You can configure some general parameters such as the serial port, the board information, the libraries, the edit parameters, and so on.

2. **Operating Buttons**

The operating buttons have five operations:

  - **Verify/Compile** the source code.
  - **Upload** the compiled code into WisBlock.
  - **Open** a **New** Arduino IDE window or existing application.
  - **Save** the current application.

<rk-img
  src="/assets/images/wisduo/rak4630-module/miscellaneous/8.operating-buttons.png"
  width="30%"
  caption="Operating buttons"
/>

3. **Code Area**
You can edit the source code, which will be compiled and uploaded into WisBlock later in this area.
4. **State Area**
5. **Output Message Area**
You can see the output message in this area, whether it's a failure or success information.