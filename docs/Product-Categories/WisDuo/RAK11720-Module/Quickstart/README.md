---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK11720 Module. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisduo/rak11720-module/RAK11720-Module.png
prev: ../Overview/
next: ../AT-Command-Manual/
tags:
  - RAK11720
  - quickstart
---

# RAK11720 Module Quick Start Guide

This guide covers the following topics:

- [RAK11720 as a Stand-Alone Device Using RUI3](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#rak11720-as-a-stand-alone-device-using-rui3)
- [RAK11720 as a LoRa/LoRaWAN Modem via AT Command](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#rak11720-as-a-lora-lorawan-modem-via-at-command)

## Prerequisites

### What Do You Need?

Before going through the steps of installing the RAK11720 WisDuo LPWAN Module, make sure to prepare the necessary items listed below.

#### Hardware

- [RAK11720 WisDuo LPWAN+BLE Module](https://store.rakwireless.com/products/rak11720-ambiq-apollo3-module-for-lorawan?utm_source=RAK11720&utm_medium=Document&utm_campaign=BuyFromStore)
- Computer
- USB to UART TTL adapter

#### Software

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).

:::warning ⚠️ WARNING
_**If you are using Windows 10**_.
Do _**NOT**_ install the Arduino IDE from the Microsoft App Store. Install the original Arduino IDE from the Arduino official website. The Arduino app from the Microsoft App Store has problems using third-party Board Support Packages.
:::

- Add [RAK11720 as a supported board in Arduino IDE](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#-board-support-package-in-arduino-ide) by updating Board Manager URLs in **Preferences** settings of Arduino IDE with this JSON URL `https://raw.githubusercontent.com/RAKWireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless.com_rui_index.json`. After that, you can then add **RAKwireless RUI Apollo3 Boards** via Arduino board manager.
- [RAK Serial Port Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)

## Product Configuration

### RAK11720 as a Stand-Alone Device Using RUI3

This section of the guide covers the following:

1. [Hardware Setup and Access to IO pins of RAK11720](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#hardware-setup)
2. [LoRaWAN OTAA and ABP Example with Arduino IDE](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#lorawan-example)

#### Hardware Setup

The RAK11720 requires a few hardware connections before you can make it work. The bare minimum requirement is to have the power section properly configured, the reset pull-up resistor, the antenna, the SWD pins, the BOOT pin (used for recovery), the UART connection used for AT commands and FW updates, and (optional) a USB-UART chip for USB connection.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/rak11720_minimum.png"
  width="100%"
  caption="RAK11720 Minimum Schematic"
/>

Ensure the antennas are properly connected to have a good LoRa and BLE signal. Also, note that you can damage the RF section of the chip if you power the module without an antenna connected to the IPEX MHF4 connectors.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ipex-mhf4-lora.png"
  width="30%"
  caption="LoRa Antenna"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ipex-mhf4-ble.png"
  width="40%"
  caption="BLE Antenna"
/>

RAK11720 has a label on its sticker indicating where to connect the antennas, as shown in **Figure 4**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_antenna_label.png"
  width="30%"
  caption="RAK11720 Antenna Label"
/>

:::tip 📝 NOTE
- Detailed information about the RAK11720 BLE and LoRa IPEX MHF4 antenna can be found on the [863-870 MHz antenna datasheet](https://downloads.rakwireless.com/LoRa/WisBlock/Accessories/RAK_PCB_Antenna_for_LoRa_863-870_MHz_(RAKARB04)_Datasheet.pdf) or the [902-928 MHz antenna datasheet](https://downloads.rakwireless.com/LoRa/WisBlock/Accessories/RAK_PCB_Antenna_for_LoRa_902-928_MHz_(RAKARB03)_Datasheet.pdf).

- If the RAK11720 is not an IPEX MHF4 variant, the connection to the antenna is done via the RF pins. RAKwireless offers [RF Antenna Design Service](https://store.rakwireless.com/products/antenna-rf-design-service-including-pcb-design-tuning-matching-and-rf-test) for custom PCB designs.
:::

:::warning ⚠️ WARNING
- **Standard IPEX connector will not work on RAK11720!** The IPEX antenna connector of RAK11720 is a different variant called [IPEX MHF4](https://www.i-pex.com/product/mhf-4). This is specially designed for low-profile circuit boards with limited spaces.

- When using the LoRa or Bluetooth Low Energy transceivers, make sure that an antenna is always connected. Using these transceivers without an antenna can damage the module.
:::

#### Software Setup

The default firmware of the RAK11720 is based on RUI3, which allows you to develop your own custom firmware to connect sensors and other peripherals to it. To develop your custom firmware using the Arduino IDE, you need to first add **RAKwireless RUI Apollo3 Boards** to the Arduino board manager, which will be discussed in this guide. You can then use [RUI3 APIs](https://docs.rakwireless.com/RUI3/#writing-rui3-custom-firmware) for your intended application. You can send AT commands and upload custom firmware via UART or wirelessly via BLE. The AT commands in RAK11720 are still available even if you compile custom firmware via RUI3, and you also have the option to disable them.

##### RAK11720 RUI3 Board Support Package in Arduino IDE

If you don't have an Arduino IDE yet, you can download it from the [Arduino official website](https://www.arduino.cc/en/Main/Software).

::: tip 📝 NOTE
**For Windows 10 and up users**:
If your Arduino IDE is installed from the Microsoft App Store, you need to reinstall your Arduino IDE by getting it from the Arduino official website. The Arduino app from the Microsoft App Store has problems using third-party Board Support Packages.
:::

Once the Arduino IDE has been successfully installed, you can now configure the IDE to add the RAK11720 to its board selection by following these steps.

1. Open Arduino IDE and go to **File** > **Preferences**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/preferences.png"
  width="90%"
  caption="Arduino Preferences"
/>

2. To add the RAK11720 to your Arduino Boards list, edit the **Additional Board Manager URLs**. Click the icon, as shown in **Figure 6**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/additional-boards.png"
  width="70%"
  caption="Modifying Additional Board Manager URLs"
/>

3. Copy the URL `https://raw.githubusercontent.com/RAKWireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless.com_rui_index.json` and paste it on the field, as shown in **Figure 7**. If other URLs are already there, just add them on the next line. After adding the URL, click **OK**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/preferences-url.png"
  width="90%"
  caption="Add Additional Board Manager URLs"
/>

4. Restart the Arduino IDE.
5. Open the **Boards Manager** from **Tools** Menu.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/boards-manager.png"
  width="90%"
  caption="Opening Arduino Boards Manager"
/>

6. Write `RAK` in the search bar, as shown in **Figure 9**. It will show you the available RAKwireless module boards you can add to your Arduino board list. Select and install the latest version of the  **RAKwireless RUI Apollo3 Boards**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/installing-rak.png"
  width="70%"
  caption="Installing RAKwireless RUI Apollo3 Boards"
/>

7. Once the BSP is installed, select  **Tools** > **Boards Manager** > **RAKWireless RUI APOLLO3 Modules** > **WisBlock Core RAK11720 Board**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/rui-nrf.png"
  width="90%"
  caption="Selecting RAK11720 Module"
/>

##### Compile an Example with Arduino LED Breathing

1. After completing the steps for adding your RAK11720 to the Arduino IDE, you can now try to run a simple program to test your setup. You need to add two LEDs to the bare minimum schematic of the RAK11720 module, as shown in **Figure 11**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/rak11720_LED_breathing.png"
  width="100%"
  caption="RAK11720 with Two LEDs"
/>

2. Connect the RAK11720 via USB and check the RAK11720 COM port using Windows **Device Manager**. Double-check the USB cable and USB port if the module is not detected.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/rui-port.png"
  width="70%"
  caption="Device Manager Ports (COM & LPT)"
/>

3. Choose RAK11720 on the board selection. Navigate to **Tools** > **Boards Manager** > **RAKWireless RUI APOLLO3 Modules** > **WisBlock Core RAK11720 Board**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/rui-nrf.png"
  width="90%"
  caption="Selecting RAK11720 Module"
/>

4. Open the **Tools** Menu and select a COM port. **COM12** is currently used.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/select-port.png"
  width="90%"
  caption="Select COM Port"
/>

5. You can see the serial monitor icon and click it to connect to the COM port.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/serial-mon.png"
  width="90%"
  caption="Open Arduino Serial Monitor"
/>

6. If the connection is successful, you can send the AT commands to RAK11720. For example, to check the RUI version, type `AT+VER=?` on the text area, then click on the **Send** button, as shown in **Figure 16**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/arduino-console.png"
  width="90%"
  caption="Arduino Serial Monitor COM4"
/>

7. Open **Arduino_Led_Breathing** example code.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/led-example.png"
  width="90%"
  caption="LED Breathing Example"
/>

8. Click the **Verify** icon to check if you can successfully compile the example code.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/verify-code.png"
  width="90%"
  caption="Verify the Example Code"
/>

9. If the compilation is successful, click the **Upload** icon to send the compiled firmware to your RAK11720.

:::tip 📝 NOTE:
- RAK11720 should automatically go into BOOT mode when the firmware is uploaded via the Arduino IDE.
- You can also manually force BOOT mode by sending the `AT+BOOT` command. On BOOT mode, standard AT commands will not work anymore unless you send `AT+RUN`, which will escape BOOT mode.
:::

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/upload-code.png"
  width="90%"
  caption="Upload the Example Code"
/>

10. If the upload is successful, you will see the **Device programmed** message.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/dev-prog.png"
  width="90%"
  caption="Device Programmed Successfully"
/>

11. After the **Device Programmed** is completed, you will see that the LEDs are blinking.

##### RAK11720 IO Pins and Peripherals

This section discusses how to use and access the pinouts of the RAK11720 using RUI3 APIs. It shows basic code for using digital IO, analog input, UART, and I2C.

###### How to Use Digital IO

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/rak11720-pins-io.png"
  width="55%"
  caption="Available Digital I/O Pins in RAK11720"
/>

You can use any of the pins, as shown in **Figure 21**. Other pins with a specific purpose like UARTs and I2C can still be used, but with limitations. These dedicated pins were removed from this illustration of digital IO pins.

```c
/*
 RAK11720 Digital I/O Example

 You can use any of the following as Digital I/O:

P44
P45
P1
P5
P6
P7
P38
P4
P37
P31
P12
P36
P32
*/

void setup()
{
  pinMode(P44, OUTPUT); //Change the P44 to any digital pin you want. Also, you can set this to INPUT or OUTPUT
}

void loop()
{
  digitalWrite(P44,HIGH); //Change the P44 to any digital pin you want. Also, you can set this to HIGH or LOW state.
  delay(1000); // delay for 1 second
  digitalWrite(P44,LOW); //Change the P44 to any digital pin you want. Also, you can set this to HIGH or LOW state.
  delay(1000); // delay for 1 second
}
```

###### How to Use Analog Input

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/rak11720-analog.png"
  width="55%"
  caption="Available Analog Input Pins in RAK11720"
/>

You can use any of the pins, as shown in **Figure 22**, as Analog Input Pin. See the example code below.

```c
/*
RAK11720 Analog Input Pins

PIN_A0 P13
PIN_A1 P33
PIN_A3 P5
PIN_A4 P31
PIN_A5 P32
PIN_A6 P36
PIN_A7 P7

You can use either format: PIN_A0 or P13
*/

#define analogPin PIN_A0  // or you can use PIN_A0

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

There are two UART peripherals available on the RAK11720. There are also different [Serial Operating Modes](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/#rui3-serial-operating-modes) possible in RUI3, namely Binary Mode, AT Mode, and Custom Mode.

| **Serial Port**                             | **Serial Instance Assignment** | **Default Mode**  |
| ------------------------------------------- | ------------------------------ | ----------------- |
| UART0 (Pin 5 - GP39/RX0)/(Pin 4 - GP40/TX0) | Serial                         | AT Command        |
| UART1 (Pin 1 - GP43/RX1)/(Pin 2 - GP42/TX1) | Serial1                        | Custom Mode       |
| BLE Serial                                  | Serial6                        | Custom Mode       |

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/rak11720-uart.png"
  width="30%"
  caption="Available UART Pins in RAK11720"
/>

Example Code

```c
void setup()
{
  Serial.begin(115200);                   // By default Serial is used for FW update and AT command.
  Serial1.begin(9600,RAK_AT_MODE);        // By default AT is disabled. With RAK_AT_MODE, AT command is activated. Baud rate can be configured to other values as well.
  Serial6.begin(115200, RAK_CUSTOM_MODE); // BLE UART is accessible via Serial6.
}

void loop()
{
  Serial1.println("RAK11720 TEST!");
  delay(1000); // delay for 1 second
}
```
<br>

- <b> I2C </b>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/rak11720-i2c.png"
  width="30%"
  caption="Available I2C Pins in RAK11720"
/>

Make sure you have an I2C device connected to the specified I2C pins to run the example code below.

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
  src="/assets/images/wisduo/rak11720-module/quickstart/rak11720-spi.png"
  width="50%"
  caption="Available SPI Pins in RAK11720"
/>

### LoRaWAN Example

This example illustrates how to program the RAK11720 as a stand-alone LoRaWAN end-device via RUI3 Arduino APIs. To use RAK11720 as a LoRaWAN end-device, it needs to be within reach of a working **LoRaWAN gateway** registered to a **LoRaWAN network server (LNS)** or with a built-in network server.

:::tip 📝 NOTE:
If you are new to LoRaWAN, here are a few good references about LoRaWAN and gateways:

- [LoRaWAN 101](https://news.rakwireless.com/lorawan-r-101-all-you-need-to-know/)
- [What is a LoRaWAN Gateway](https://news.rakwireless.com/what-is-a-lorawan-gateway/)
- [How do LoRaWAN Gateways work?](https://news.rakwireless.com/how-do-lorawan-gateways-work/)
- [Things to Consider When Picking A LoRaWAN Gateway](https://news.rakwireless.com/things-to-consider-when-picking-a-lorawan-gateway/)

:::

To enable the RAK11720 module as a LoRaWAN end-device, a device must first be registered with the LoRaWAN network server. This guide covers both TTN and ChirpStack LoRaWAN network servers and the associated Arduino codes and AT commands for the RAK11720.

- [TheThingsNetwork Guide](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#connecting-to-the-things-network-ttn) - How to login, register new accounts, and create new applications on TTN.
- [RAK11720 TTN OTAA Guide](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#ttn-otaa-device-registration) - How to add OTAA device on TTN and what AT commands to use on RAK11720 OTAA activation.
- [RAK11720 TTN ABP Guide](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#ttn-abp-device-registration) - How to add ABP device on TTN and what AT commands to use on RAK11720 ABP activation.
- [ChirpStack Guide](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#connecting-with-ChirpStack) - How to create new applications on ChirpStack.
- [RAK11720 ChirpStack OTAA Guide](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#ChirpStack-otaa-device-registration) - How to add OTAA device to ChirpStack and what AT commands to use on RAK11720 OTAA activation.
- [RAK11720 ChirpStack ABP Guide](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#ChirpStack-abp-device-registration) - How to add ABP device on ChirpStack and what AT commands to use on RAK11720 ABP activation.

#### Connecting to The Things Network (TTN)

In this section, it shows how to connect the RAK11720 module to the TTN platform.

:::tip 📝 NOTE:
You need to have a working gateway that is connected to TTN, or you have to be within the coverage of a TTN community network.
:::

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/4.ttn-context.png"
  width="100%"
  caption="The Things Stack"
/>

As shown in **Figure 26**, The Things Stack (TTN V3) is an open-source LoRaWAN network server suitable for global, geo-distributed public and private deployments as well as for small local networks. The architecture follows the LoRaWAN Network Reference Model for standards compliance and interoperability. This project is actively maintained by [The Things Industries](https://www.thethingsindustries.com/).

LoRaWAN is a protocol for low-power wide-area networks. It allows large-scale Internet of Things deployments where low-powered devices efficiently communicate with internet-connected applications over long-range wireless connections.

The RAK11720 WisDuo module can be part of this ecosystem as a device, and the objective of this section is to demonstrate how simple it is to send data to The Things Stack using the LoRaWAN protocol. To achieve this, the RAK11720 WisDuo module must be located inside the coverage of a LoRaWAN gateway connected to The Things Stack server.

1. The first step is to go to [The Things Network](https://www.thethingsnetwork.org/) and sign up for an account, as shown in **Figure 27**. Then select a cluster as shown in **Figure 29**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_1.png"
  width="100%"
  caption="Signing up an Account in TTN"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_2.png"
  width="100%"
  caption="Signing up an Account in TTN"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_3.png"
  width="100%"
  caption="Selecting Cluster in TTN"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_4.png"
  width="100%"
  caption="Signing up Through the Things ID"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_5.png"
  width="100%"
  caption="Creation of an Account Through the Things ID"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_6.png"
  width="100%"
  caption="Creation of an Account Through the Things ID"
/>

 You can use the same login credentials on the TTN V2 if you have one. If you have no account yet, you need to create one.

2. Now that you are logged in to the platform, the next step is to create an application. Click **Create an application**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_7.png"
  width="100%"
  caption="The Things Stack Platform"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_8.png"
  width="100%"
  caption="Creating TTN Application for Your Lorawan Devices"
/>

3. To have an application registered, input first the specific details and necessary information about your application, then click **Create application**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_9.png"
  width="100%"
  caption="Details of the TTN Application"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_10.png"
  width="80%"
  caption="Details of the TTN Application"
/>

4. If you had no errors in the previous step, you should now be on the application console page. The next step is to add end-devices to your TTN application.

LoRaWAN specifications enforce that each end-device has to be personalized and activated. There are two options for registering devices, depending on the activation mode selected. Activation can be done either via Over-The-Air-Activation (OTAA) or Activation-By-Personalization (ABP).

##### TTN OTAA Device Registration

1. Go to your application console to register a device. To start adding an OTAA end-device, click **+ Register end device**, as shown in **Figure 37**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_11.png"
  width="100%"
  caption="Register end device"
/>

2. To register the board, click **Enter end device specifics manually**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_12.png"
  width="100%"
  caption="Enter end device specifics manually"
/>

3. The next step is to configure the **Frequency plan**, compatible **LoRaWAN version**, and supported **Regional Parameters version**. Then provide the **JoinEUI** credentials by entering zeros into them.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_13.png"
  width="80%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_14.png"
  width="80%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_15.png"
  width="90%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_16.png"
  width="90%"
  caption="Setting up your device"
/>

4. Click **Show advanced activation, LoRaWAN class and cluster settings** and configure the following and then click **Confirm**.

  - Activation mode: **Over the air activation (OTAA)**
  - Additional LoRaWAN class capabilities: **None (class A only)**

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_17.png"
  width="90%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_18.png"
  width="90%"
  caption="Setting up your device"
/>

5. Once done, provide the DevEUI credentials of your device into the **DevEUI** portion. This will automatically generate the specific end-device ID of your board. Click **Generate** under **AppKey** in the Provisioning Information section, then click **Register end device**.

:::tip 📝 NOTE:

- The **AppEUI**, **DevEUI**, and **AppKey** are hidden in this section as these are unique to a specific device. The **DevEUI** credential is unique to every RAK11720 device. Also, you should generate your own **AppEUI** and **AppKey** credentials for your specific device and application.

- The **AppEUI** is the same as **JoinEUI**.
:::

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_19.png"
  width="80%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_20.png"
  width="80%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_21.png"
  width="90%"
  caption="Register end device"
/>

6. You should now be able to see the device on the TTN console after you fully register your device, as shown in **Figure 48**.

:::tip 📝 NOTE:

- The **AppEUI**, **DevEUI**, and **AppKey** are the parameters you will need to activate your LoRaWAN end-device via OTAA. The **AppKey** is hidden by default for security reasons, but you can easily show it by clicking the **show** button. You can also copy the parameters quickly using the copy button.
- The three OTAA parameters on the TTN device console are MSB by default.
- These parameters are always accessible on the device console page, as shown in **Figure 48**.
:::

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/RAK11720_New_22.png"
  width="100%"
  caption="OTAA Device Successfully Registered to TTN"
/>

##### Uploading OTAA LoRaWAN Example to RAK11720

After a successful registration of the RAK11720 device to the LoRaWAN Network Server, you can now proceed with running the LoRaWAN OTAA demo application example.

:::tip 📝 NOTE:

If you use RAK3172 as a LoRaWAN modem using AT commands instead of a stand-alone device, there is a dedicated section for the [OTAA AT Commands guide](/Product-Categories/WisDuo/rak11720-module/quickstart/#otaa-configuration-for-ttn-via-wistoolbox-console) in the later portion of this document.

:::

1. Open the example code under **RAK WisBlock RUI examples**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/lorawan_example.png"
  width="90%"
  caption="OTAA LoRaWAN Application Example"
/>

2. In the example code, you need to modify the device EUI (DEVEUI) and application key (APPKEY).

- The **device EUI (DEVEUI)** should match the device EUI registered in your network server. This is the same DEVEUI in the RAK11720 sticker if this is the one you used in the previous section [device registration in the network server](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#ttn-otaa-device-registration). DEVEUI is **MSB**.

```c
  // OTAA Device EUI MSB
  uint8_t node_device_eui[8] = {0xAC, 0x1F, 0x09, 0xFF, 0xFE, 0x03, 0xEF, 0xAB};
```

- Another important parameter to change is the **application key (APPKEY)**. This parameter should also be the same as the APPKEY in the network server you configured in the previous section [adding RAK11720 to the network server](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#ttn-otaa-device-registration) section. APPKEY is an MSB.

```c
// OTAA Application Key MSB
  uint8_t node_app_key[16] = {0xD9, 0xB8, 0x70, 0x18, 0x3E, 0xF1, 0x00, 0x1D, 0x1B, 0x4F, 0x2B, 0x4C, 0xBF, 0x60, 0xCA, 0x83};
```

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/lorawan_otaa_parameter.png"
  width="90%"
  caption="Updating DEVEUI and APPKEY"
/>

3. This guide uses the EU868 regional band. There is no need to change the band in the example code. If the region you are in is different, you need to update the band in the code as well.

:::tip 📝 NOTE:
RAK11720 supports the following regions:

* RAK_REGION_EU433 = 0
* RAK_REGION_CN470 = 1
* RAK_REGION_RU864 = 2
* RAK_REGION_IN865 = 3
* RAK_REGION_EU868 = 4
* RAK_REGION_US915 = 5
* RAK_REGION_AU915 = 6
* RAK_REGION_KR920 = 7
* RAK_REGION_AS923-1 = 8
* RAK_REGION_AS923-2 = 9
* RAK_REGION_AS923-3 = 10

In addition to that, if you are using US915 you also need to set up the channel mask (channels 8 to 15 are the most commonly used channels in the US915 band).

This is the additional code on how to do it.

```c
  if(!(ret = api.lorawan.band.set(5)))      // configure to US915
  {
       Serial.printf("LoRaWan OTAA - set band is incorrect! \r\n");
       return;
  }

  uint16_t maskBuff = 0x0002;               // configure the mask for channels 8-15
  api.lorawan.mask.set(&maskBuff);
```

:::

4. The last step is to upload the code by clicking the **Upload** icon. Take note that you should select the right board and port, as shown in the previous example [LED Blinking](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#compile-an-example-with-arduino-led-breathing).

:::tip 📝 NOTE:
- RAK11720 should automatically go to BOOT mode when the firmware is uploaded via Arduino IDE.
- If BOOT mode is not initiated, you have to send `AT+BOOT` manually to force BOOT mode.
:::

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/lorawan_upload.png"
  width="80%"
  caption="Uploading the Code"
/>

5. You should now be able to see the terminal logs in the Serial Monitor of the Arduino IDE. Sometimes the COM port will be disconnected, so you won't be able to see the terminal output immediately. You can reconnect the module or try to push the reset button to see the terminal output.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/lorawan_logs.png"
  width="65%"
  caption="Output Logs"
/>

6. You can also check on the LoRaWAN network server `Live data` if your device has been successfully joined with the `join request` and `join accept` logs.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ttn_success_uplink.png"
  width="90%"
  caption="TTN Live Data"
/>

##### TTN ABP Device Registration

1. To register an ABP device, go to your application console and select the application to which you want your device to be added. Then click **+ Register end device**, as shown in **Figure 54**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABP_RAK11720_New_1.png"
  width="100%"
  caption="Adding ABP Device"
/>

2. To register the board, click **Enter end device specifics manually**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABP_RAK11720_New_2.png"
  width="100%"
  caption="Enter end device specifics manually"
/>

3. Next step is to set up **Frequency plan**, compatible **LoRaWAN version**, and **Regional Parameters version** supported.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABP_RAK11720_New_3.png"
  width="80%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABP_RAK11720_New_4.png"
  width="80%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABP_RAK11720_New_5.png"
  width="90%"
  caption="Setting up your device"
/>

4. Click **Show advanced activation, LoRaWAN class and cluster settings** and configure the following:
  - Activation mode: **Activation by personalization (ABP)**
  - Additional LoRaWAN class capabilities: **None (class A only)**
  - Network defaults (tick off the box): Use network's default MAC settings


<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABP_RAK11720_New_6.png"
  width="90%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABP_RAK11720_New_7.png"
  width="90%"
  caption="Setting up your device"
/>

5. Once done, provide the DevEUI credentials of your device into the **DevEUI** portion. You can also generate a DevEUI via the Generate button. Then click **Generate** under **Device address**, **AppSKey**, and **NwkSKey** under the Provisioning information section. Then click **Register end device**.

:::tip 📝 NOTE:

- The **DevEUI**, **Device address**, **AppSKey**, and **NwkSKey** are hidden in this section as these are unique to a specific device. The **DevEUI** credential is unique to every RAK11720 device. Also, you should generate your own **Device address**, **AppSKey**, and **NwkSKey** credentials for your specific device and application.

:::

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABP_RAK11720_New_8.png"
  width="90%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABP_RAK11720_New_9.png"
  width="100%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABP_RAK11720_New_10.png"
  width="100%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABP_RAK11720_New_11.png"
  width="100%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABP_RAK11720_New_12.png"
  width="100%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABP_RAK11720_New_13.png"
  width="100%"
  caption="Register end device"
/>

6. You should now be able to see the device on the TTN console after you fully register your device, as shown in **Figure 67**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABP_RAK11720_New_14.png"
  width="100%"
  caption="ABP device successfully registered to TTN"
/>

##### Uploading ABP LoRaWAN Example to RAK11720

After a successful registration of the RAK11720 module to the LoRaWAN Network Server as an ABP device, you can now proceed with running the LoRaWAN ABP demo application example.

:::tip 📝 NOTE:

If you use RAK3172 as a LoRaWAN modem using AT commands instead of a stand-alone device, there is a dedicated section for [ABP AT Commands guide](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#abp-configuration-for-ttn-via-wistoolbox-console) in the later portion of this document.

:::

1. Open the example code under **RAK WisBlock RUI examples**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/abp_lorawan_example.png"
  width="100%"
  caption="ABP LoRaWAN Application Example"
/>

2. In the example code, you need to modify the device address (**DEVADDR**), application session key (**APPSKEY**), and network session key (**NWKSKEY**). All these parameters should match the ones generated on the LoRaWAN network server.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/abp_lorawan_parameter.png"
  width="90%"
  caption="Updating DEVADDR, APPSKEY, and NWKSKEY"
/>

3. This guide uses the EU868 regional band. There is no need to change the band in the example code. If the region you are in is different, you need to update the band in the code as well.

:::tip 📝 NOTE:
RAK11720 supports the following regions:

* RAK_REGION_EU433 = 0
* RAK_REGION_CN470 = 1
* RAK_REGION_RU864 = 2
* RAK_REGION_IN865 = 3
* RAK_REGION_EU868 = 4
* RAK_REGION_US915 = 5
* RAK_REGION_AU915 = 6
* RAK_REGION_KR920 = 7
* RAK_REGION_AS923-1 = 8
* RAK_REGION_AS923-2 = 9
* RAK_REGION_AS923-3 = 10

In addition to that, if you are using US915 you also need to set up the channel mask (channels 8 to 15 are the most commonly used channels in the US915 band).

This is the additional code on how to do it.

```c
  if(!(ret = api.lorawan.band.set(5)))      // configure to US915
  {
       Serial.printf("LoRaWan OTAA - set band is incorrect! \r\n");
       return;
  }

  uint16_t maskBuff = 0x0002;               // configure the mask for channels 8-15
  api.lorawan.mask.set(&maskBuff);
```

:::

4. The last step is to upload the code by clicking the **Upload** icon. Note that you should select the right board and port, as shown in the previous example [LED Blinking](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#compile-an-example-with-arduino-led-breathing).

:::tip 📝 NOTE:
RAK11720 should automatically go into BOOT mode when the firmware is uploaded via Arduino IDE.
If BOOT mode is not initiated, you have to send `AT+BOOT` manually to force BOOT mode.
:::

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/abp_lorawan_upload.png"
  width="100%"
  caption="Uploading the Code"
/>

5. You should now be able to see the terminal logs in the Serial Monitor of the Arduino IDE. Sometimes the COM port will be disconnected, so you won't be able to see the terminal output immediately. You can reconnect the module or try to push the reset button to see the terminal output.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/abp_lorawan_logs.png"
  width="100%"
  caption="Output Logs"
/>

6. You can also check on the LoRaWAN network server `Live data` if your device can successfully send uplink packets.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/abp_ttn_success_uplink.png"
  width="90%"
  caption="TTN Live Data"
/>

7. On ABP, frame counters for both uplink and downlink need to be tracked by the device firmware. However, on RUI3 ABP, there is no tracking, and frame counts will go back to zero when the device resets. This will result in failures on uplinks and downlinks. To counter this behavior, `Resets frame counters` option must be enabled by following the steps shown in **Figure 73** up to **Figure 76**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/abp_general_setting.png"
  width="80%"
  caption="General Settings"
/>

8. Click `Expand` on Network Layer.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/abp_expand_network.png"
  width="75%"
  caption="Expand Network Layer"
/>

9. Select `Advanced MAC settings`.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/abp_mac_setting.png"
  width="75%"
  caption="Advance MAC settings"
/>

10. Check `Resets frame counters`. With this enabled, all uplinks and downlinks will be successful even if the device resets/restarts.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/abp_reset_framecounts.png"
  width="60%"
  caption="Resets Frame Counters"
/>

#### Connecting with ChirpStack

This section shows how to connect the RAK11720 module to the ChirpStack platform.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/23.chirpstack-platform.png"
  width="60%"
  caption="RAK11720 Module in the Context of the ChirpStack Platform"
/>

The ChirpStack, previously known as the LoRaServer project, provides open-source components for building LoRaWAN networks. In the case of TTN, the RAK11720 module is located in the periphery and will transmit the data to the backend servers through a LoRaWAN gateway. Learn more about [ChirpStack](https://www.ChirpStack.io/).

:::tip 📝 NOTE:
In this guide, it is assumed that you are using a RAK Gateway and its built-in ChirpStack. Also, the gateway with the ChirpStack must be configured successfully. The frequency band of the nodes should be consistent with the frequency band of the gateway and ChirpStack installation.
:::

##### Create a New Application

1. Log in to the ChirpStack server using your account and password.
2. Go to the **Applications** section, as shown in **Figure 78**. By default, you should create a new application, although you can reuse existing ones. For this setup, create a new Application by clicking the **CREATE** button and filling in the required parameters, as shown **Figure 80**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/24.chirpstack.png"
  width="100%"
  caption="Applications Section"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/25.new-application.png"
  width="100%"
  caption="Creating a New Application"
/>

* For this setup, create an Application named **rak_node_test**.

ChirpStack LoraServer supports multiple system configurations, with only one by default.

* **Service profile**: Field is to select the system profile.
* **Payload codec**: It is the parsing method for selecting load data, such as parsing LPP format data.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/26.filling-parameters.png"
  width="100%"
  caption="Filling in the Parameters of an Application"
/>

<b>Register a New Device</b>

1. Choose the application created in the previous step, then select the **DEVICES** tab, as shown in **Figure 81** and **Figure 82**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/27.application-available.png"
  width="100%"
  caption="List of Applications Created"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/28.application-page.png"
  width="100%"
  caption="Device Tab of an Application"
/>

2. Once inside the DEVICE tab, create a new device (LoRaWAN node) by clicking the **+ CREATE** button.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/29.adding-node.png"
  width="100%"
  caption="Add a New Device"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/30.new-device-registration.png"
  width="100%"
  caption="ChirpStack Adding Node into the RAK11720 Module"
/>

3. Once the node is created, fill in the necessary data. You can generate a Device EUI automatically by clicking the following icon. Or, you can type the correct Device EUI in the edit box.

Fill in the parameters requested:

* **Device name and Device description**: These are descriptive texts about your device.
* **Device EUI**: This interface allows you to generate a Device EUI automatically by clicking the generate icon. You can also add a specific Device EUI directly in the form.
* **Device Profile**:
  * If you want to join in OTAA mode, select **DeviceProfile_OTAA**.
  * If you want to join in ABP mode, select **DeviceProfile_ABP**.

:::tip 📝 NOTE:
Device profiles **DeviceProfile_OTAA** and **DeviceProfile_ABP** are only available if you are using the built-in ChirpStack LoRaWAN Server of RAK Gateways.<br>
If you have your own ChirpStack installation, you can set up the device profile with `LoRaWAN MAC version 1.0.3` and `LoRaWAN Regional Parameters revision B` to make it compatible with RAK11720.
:::

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/31.adding-parameters.png"
  width="100%"
  caption="Generate a New Device EUI "
/>

##### ChirpStack OTAA Device Registration

1. If you have selected **DeviceProfile_OTAA**, as shown in **Figure 86**, after the device is created, an Application Key must be created for this device.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/32.otaa.png"
  width="100%"
  caption="ChirpStack OTAA Activation"
/>

2. A previously created Application Key can be entered here, or a new one can be generated automatically by clicking the icon highlighted in red in **Figure 87**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/33.otaa-set-device-keys.png"
  width="100%"
  caption="ChirpStack OTAA Set Application Keys"
/>

3. Once the Application Key is added to the form, the process can be finalized by clicking the **SET DEVICE-KEYS** button.

* As shown in **Figure 88**, a new device should be listed in the **DEVICES** tab. The most important parameters, such as the **Device EUI**, are shown in the summary.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/34.set-device-eui.png"
  width="100%"
  caption="ChirpStack OTAA List of the Device in the Device Tab"
/>

4. To end the process, it is a good practice to review that the **Application Key** is properly associated with this device. The **Application Key** can be verified in the **KEYS (OTAA)** tab, as shown in **Figure 89**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/35.application-key.png"
  width="100%"
  caption="Application Key Associated With the New Device"
/>

5. After registering the RAK11720 in ChirpStack as an OTAA device, you can now create a [custom firmware using the Arduino IDE for the RAK11720](/Product-Categories/WisDuo/rak11720-module/quickstart/#uploading-otaa-lorawan-example-to-rak11720) or use [OTAA AT Commands](/Product-Categories/WisDuo/rak11720-module/quickstart/#otaa-configuration-for-ttn-via-wistoolbox-console) with an external MCU host.

:::tip 📝 NOTE:
Standard OTAA mode requires the **Device EUI**, **Application Key**, and **Application EUI**, but in ChirpStack’s implementation, only the Device EUI and the Application Key are mandatory. The Application EUI is not required and not recorded in the Application tab. Nevertheless, you can reuse the Device EUI as the Application EUI during the configuration on the side of the node.
:::

##### ChirpStack ABP Device Registration

1. During the registration of a new device, if you select **DeviceProfile_ABP**, as shown in **Figure 90**, then the ChirpStack platform will assume that this device will join the LoRaWAN network using the ABP mode.

:::tip 📝 NOTE:
Check **Disable counting frame verification**. During the test, when the module is restarted, the frame counting number will also be restarted to zero. This would cause a synchronization problem with the ChirpStack server, which would treat it as a replay attack. For testing purposes, it is safe to disable this feature but remember to activate it in a production environment. That note indicates that frame counters in RAK11720 will reset to zero when the device restarts.
:::


<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/42.configuring-device-abp.png"
  width="100%"
  caption="ChirpStack Console, Configuring a Device"
/>

2. After selecting the ABP mode, the following parameters appear in the **ACTIVATION** tab. Then, you can see that there are some parameters for ABP in the **ACTIVATION** item:

  * **Device Address**
  * **Network Session Key**
  * **Application Session Key**

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/43.abp-activation-parameters.png"
  width="100%"
  caption="ChirpStack ABP Activation Parameters Needed"
/>

3. The parameters can be generated as random numbers by the platform or can be set with user values. Once these parameters are filled in properly, the process is completed by clicking on the **ACTIVATE DEVICE** button.
4. After registering the RAK11720 in ChirpStack as an ABP device, you can now create a [custom firmware using Arduino IDE for RAK11720](/Product-Categories/WisDuo/rak11720-module/quickstart/#uploading-abp-lorawan-example-to-rak11720) or use [ABP AT Commands](/Product-Categories/WisDuo/rak11720-module/quickstart/#abp-configuration-for-ttn-via-wistoolbox-console) with external MCU host.

### RAK11720 as a LoRa/LoRaWAN Modem via AT Command

The RAK11720 module can be configured using AT commands via the UART0 interface by default (UART1 can be used as well if configured correctly). You need a USB to UART TTL adapter to connect the RAK11720 to your computer's USB port and a serial terminal tool. It is highly recommended to use the [WisToolBox](https://docs.rakwireless.com/Product-Categories/Software-Tools/WisToolBox), so you can easily send AT commands and view the replies from the console output. You can configure the RAK11720 in two ways:

- LoRaWAN End-Device
- [LoRa P2P](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#lora-p2p-mode) - Point-to-point communication between two RAK11720 modules.

UART Parameters for AT Commands:

* Baud Rate: **115200&nbsp;baud** (Default but configurable)
* Data Bits: **8&nbsp;bits**
* Stop Bits: **1&nbsp;stop&nbsp;bit**
* Parity: **NONE**

#### OTAA Configuration for TTN via WisToolBox Console

The RAK11720 module can be configured using WisToolBox to do the OTAA configuration. **WisToolBox** is a software tool that supports **RAK11720** module. It automatically detects the RAK11720 module once connected to the PC. Below are the options in WisToolBox through which the OTAA configuration can be done.

Below are the steps for setting up your **RAK11720** using **WisToolBox Console**.

1. To start the configuration, type **ATE** so you can echo the commands you input during your configuration. Then press **Enter**.

It is recommended to start by testing the console and verifying that the current configuration is working by sending these two AT commands:

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
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_9A.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_9B.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_9C.png"
  width="90%"
  caption="Setting up Your Console"
/>

2. Then configure the LoRaWAN join mode to **OTAA**. You can check what parameter you will input by typing **AT+NJM?** and then **Enter** into the console terminal. For **OTAA**, you should input **AT+NJM=1** and then press **Enter** as shown in **Figure 97**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_10.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_11.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_12.png"
  width="90%"
  caption="Setting up Your Console"
/>

3. Once done, set your LoRaWAN region to EU868. You can check what parameter you will input by typing **AT+BAND?** and then **Enter** into the console terminal. For **EU868**, you should input **AT+BAND=4** then press **Enter**. If you wish to work on other regional bands, you may check the list of band parameter options below.

Set the frequency/region to EU868.

```
AT+BAND=4
```

:::tip 📝 NOTE:
Depending on the Regional Band you selected, you might need to configure the sub-band of your RAK11720 to match the gateway and LoRaWAN network server. This is especially important for Regional Bands like US915, AU915, and CN470.

To configure the masking of channels for the sub-bands, you can use the `AT+MASK` command that can be found on the [AT Command Manual](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK11720-Module/AT-Command-Manual/#at-mask).

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
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_13.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_14.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_15.png"
  width="90%"
  caption="Setting up Your Console"
/>

4. Then next to this will be updating the OTAA credentials of your device. First to this will be the **Application EUI (AppEUI)**. Go back to your console, where your RAK11720 end device was created, to copy the AppEUI credential. Paste it into the WisToolBox console, then press **Enter**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_W.png"
  width="90%"
  caption="Your Created OTAA Device from Your TTN Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_16.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_17.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_18.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_X.png"
  width="90%"
  caption="Copying the AppEUI Credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_19.png"
  width="90%"
  caption="Setting up Your Console"
/>

5. Once done, do the same procedure for the **Application key (AppKey)** and the **Device EUI (DevEUI)**.

- **For Application key (AppKey)**

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_20.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_21.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_22.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_Y.png"
  width="90%"
  caption="Copying the AppKey credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_23.png"
  width="90%"
  caption="Setting up Your Console"
/>

- **For Device EUI (DevEUI)**

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_24.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_25.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_Z.png"
  width="90%"
  caption="Copying the DevEUI credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_26.png"
  width="90%"
  caption="Setting up Your Console"
/>

6. Now that you have a configured OTAA device using the WisToolBox console, you can join the network using the WisToolBox console.
7. To do this, go back to the WisToolBox console and type **AT+JOIN**. Edit it to **AT+JOIN=1**, then press **Enter** to join the network.

:::tip 📝 NOTE:
`AT+JOIN` command parameters are optional. You can configure the settings for auto-join, reattempt interval, and the number of join attempts if your application needs them. If not configured, it will use the default parameter values.

`AT+JOIN` and `AT+JOIN=1` also share the common functionality of trying to join the network.
:::

Join command format: **`AT+JOIN=w:x:y:z`**

| Parameter | Description                                                  |
| --------- | ------------------------------------------------------------ |
| w         | Join command - 1: joining, 0: stop joining.                  |
| x         | Auto-join config - 1: auto-join on power-up, 0: no auto-join |
| y         | Reattempt interval in seconds (7-255) - 8 is the default.    |
| z         | Number of join attempts (0-255) - 0 is the default.              |

After 5 or 6&nbsp;seconds, if the request is successfully received by a LoRa gateway, you should see a `+EVT:JOINED` status reply.

:::tip 📝 NOTE:

If the OTAA device failed to join, you need to check if your device is within reach of a working LoRaWAN gateway that is configured to connect to TTN. It is also important to check that all your OTAA parameters (DEVEUI, APPEUI, and APPKEY) are correct using the `AT+DEVEUI=?`, `AT+APPEUI=?`, and `AT+APPKEY=?` commands. Lastly, ensure that the antenna of your device is properly connected.

After checking all the things above, try to join again.
:::

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_34.png"
  width="90%"
  caption="Joining Mode Using WisToolBox Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_35.png"
  width="90%"
  caption="Joining Mode Using WisToolBox Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_36.png"
  width="90%"
  caption="Joining Mode Using WisToolBox Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_37.png"
  width="90%"
  caption="Joining Mode Using WisToolBox Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_38.png"
  width="90%"
  caption="OTAA Device Successfully Joined the Network"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ttn_success_uplink.png"
  width="90%"
  caption="OTAA Device Successfully Joined the Network"
/>

9.  With the end-device properly joined to the TTN, you can now try to send some payload after a successful join. Send command format: **`AT+SEND=<port>:<payload>`**

```
AT+SEND=2:12345678
```

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_40.png"
  width="90%"
  caption="OTAA Device Sending Payload to the Network"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_41.png"
  width="90%"
  caption="OTAA Device Sending Payload to the Network"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_42.png"
  width="90%"
  caption="OTAA Device Sending Payload to the Network"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_43.png"
  width="90%"
  caption="OTAA Device Sending Payload to the Network"
/>

10. You can see the data sent by the RAK11720 module on the TTN device console *Live data* section. Also, the *Last seen* info should have been a few seconds or minutes ago.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ConWis_RAK4630_New_44.png"
  width="90%"
  caption="OTAA Test Sample Data Sent Viewed in TTN"
/>

#### ABP Configuration for TTN via WisToolBox Console

This section shows the ABP configuration guide using **WisToolBox console**. Below are the steps for setting up your **RAK11720** using **WisToolBox Console**.

1. To start the configuration, type **ATE** so you can echo the commands you input during your configuration. Then press **Enter**.

It is recommended to start by testing the console and verifying that the current configuration is working by sending these two AT commands:

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
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_9A.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_9B.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_9C.png"
  width="90%"
  caption="Setting up Your Console"
/>

2. Then configure the LoRaWAN join mode to **ABP**. You can check what parameter you will input by typing **AT+NJM?** and then **Enter** into the console terminal. For **ABP**, you should input **AT+NJM=0** and then press **Enter**, as shown in **Figure 132**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_10.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_11.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_12.png"
  width="90%"
  caption="Setting up Your Console"
/>

3. Once done, set your LoRaWAN region to EU868. You can check what parameter you will input by typing **AT+BAND?** and then **Enter** into the console terminal. For **EU868**, you should input **AT+BAND=4** then press **Enter**. If you wish to work on other regional bands, you may check the <b>List of band parameter options</b> below.


```
AT+BAND=4
```

:::tip 📝 NOTE:

Depending on the Regional Band you selected, you might need to configure the sub-band of your RAK11720 to match the gateway and LoRaWAN network server. This is especially important for Regional Bands like US915, AU915, and CN470.

To configure the masking of channels for the sub-bands, you can use the `AT+MASK` command that can be found in the [AT Command Manual](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK11720-Module/AT-Command-Manual/#at-mask).

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
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_13.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_14.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_15.png"
  width="90%"
  caption="Setting up Your Console"
/>

4. Next, update the ABP credentials on your device, the **Application session key (AppSKey)**. Go back to your console, where your RAK11720 End device was created to copy the AppSKey credential, paste it into the WisToolBox console, then press **Enter**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_W.png"
  width="90%"
  caption="Your Created ABP Device From Your TTN Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_16.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_17.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_18.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_X.png"
  width="90%"
  caption="Copying the AppSKey credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_19.png"
  width="90%"
  caption="Setting up Your Console"
/>

5. Once done, do the same procedure to **Device address** and **Network session key (NwkSKey)**.

- **For Device address**

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_20.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_21.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_22.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_Y.png"
  width="90%"
  caption="Copying the Device Address Credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_23.png"
  width="90%"
  caption="Setting up Your Console"
/>

- **For Network session key (NwkSKey)**

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_24.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_25.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_26.png"
  width="90%"
  caption="Setting up Your Console"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_Z.png"
  width="90%"
  caption="Copying the NwkSKey Credential from TTN to WisToolBox"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_27.png"
  width="90%"
  caption="Setting up Your Console"
/>

6. Now, you have a configured ABP device using the WisToolBox console. **ABP-configured devices** are directly tied to the network once done with the above procedures, so a joining procedure is not needed.
7. You can try sending the payload to TTN. Open again the terminal console of WisToolBox to send some payload using it. Send command format: **`AT+SEND=<port>:<payload>`**

```
AT+SEND=2:12345678
```

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_35.png"
  width="90%"
  caption="ABP Device Sending Payload to the Network"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_36.png"
  width="90%"
  caption="ABP Device Sending Payload to the Network"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_37.png"
  width="90%"
  caption="ABP Device Sending Payload to the Network"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_38.png"
  width="90%"
  caption="ABP Device Sending Payload to the Network"
/>

8. You can see the data sent by the RAK11720 module on the TTN device console *Live data* section. Also, the *Last seen* info should have been a few seconds or minutes ago.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/ABPConWis_RAK4630_New_39.png"
  width="90%"
  caption="ABP Test Sample Data Sent Viewed in TTN"
/>

##### LoRa P2P Mode

This section shows how to set up and connect two RAK11720 units to work in the LoRa P2P mode. The configuration of the RAK11720 units is done by connecting the two modules to a general-purpose computer using a USB-UART converter. The setup of each RAK11720 can be done separately, but testing the LoRa P2P mode will require having both units connected simultaneously. This could be done by having one computer with two USB ports or two computers with one USB port each.

It is recommended to start by testing the serial communication and verifying the current configuration is working by sending these two AT commands:

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
  src="/assets/images/wisduo/rak11720-module/quickstart/p2p_at.png"
  width="60%"
  caption="AT Command Response"
/>

1. To set up the RAK11720 to work in LoRa P2P mode, you need to input the work mode command on both RAK11720 modules. You might need to disconnect and reconnect the module as it changes its mode of operation if you are sending commands via USB.

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
  src="/assets/images/wisduo/rak11720-module/quickstart/p2p_setup.png"
  width="50%"
  caption="P2P Setup"
/>


:::tip 📝 NOTE:

Refer to the [P2P Mode](/Product-Categories/WisDuo/rak11720-module/AT-Command-Manual/) section of the AT command documentation to learn more about the definition of the parameters used.

:::

3. To set one module as a receiver (RX), set the value of the P2P to receive a command to 65535.

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
  src="/assets/images/wisduo/rak11720-module/quickstart/p2p_send.png"
  width="90%"
  caption="P2P Sending and Receiving LoRa Packets"
/>

#### AT Command over BLE

This section shows how to use AT commands over BLE using a Serial Bluetooth Terminal app.

::: tip 📝 NOTE
To enable AT command via BLE, upload first a custom firmware with initialization of the BLE UART. This can be done by adding BLE UART initialization code in the **void setup()** function - `api.ble.uart.start(0);`. You can also run the example code `BLE_Uart` example as a direct alternative.
:::

All available commands can be found in the [AT Command Manual](/Product-Categories/wisduo/rak11720-module/AT-Command-Manual/#general-commands) section of this document.

1. Download and install the Serial Bluetooth Terminal to connect the device.
2. Make sure the Bluetooth on your mobile is turned on.
3. Select **Category**, then **Devices**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/available-serial-bluetooth.png"
  width="70%"
  caption="Available Serial Bluetooth Terminal"
/>

4. Select the **Bluetooth LE** icon and click the **SCAN** icon to scan the device.
5. Look for a BLE device named **RAK.XXXXXX** in the scanner list of the app and connect to this device.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/scanning-devices.png"
  width="70%"
  caption="Scanning Devices"
/>

6. Make sure the connection is successful with **RAK.XXXXXX**.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/connect-device.png"
  width="40%"
  caption="Connect with the Device"
/>

7. Send an AT command and check whether the remote console is received or not.

```
at+ver=?
```

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/default-ble-id.png"
  width="70%"
  caption="RAK11720 AT Command Testing"
/>

## Miscellaneous

There are different ways to update the firmware of the RAK11720 (as well as to recover from a crash).

1. [Using Arduino IDE](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#firmware-update-via-arduino-ide)
2. [Using Jlink](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#firmware-update-using-jlink)
3. [Recovery via UART](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#firmware-recovery)

### Firmware Update via Arduino IDE

Whenever you upload a custom firmware, it will be updated or downgraded depending on the version of the RUI3 BSP version installed in the Arduino IDE.

### Firmware Update using Jlink

You can upload the latest [RAK11720 HEX firmware](/Product-Categories/WisDuo/RAK11720-Module/Datasheet/#software) using Jlink. The RAK11720 must be powered up, and you have to connect the SWD lines of the RAK11720 (SWDIO, SWCLK, VDD, and GND) to the Jlink connector.

1. Download and install the [Jlink software pack](https://www.segger.com/downloads/jlink/), which includes the J-Flash software you need.
2. Open the J-Flash software and click `Start J-Flash`. You should be able to see in this step that the MCU is already detected in `Log` section of J-Flash. Then, you can select `Create new project` to get started. You can also save this newly created project so that it will be easier for you to do firmware uploads in the future.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/dfu-starting-jflash.png"
  width="70%"
  caption="Starting J-Flash"
/>

3. The next step is to select the specific Apollo3 Blue chip inside the RAK11720 module.


<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/dfu-jlink-select-chip.png"
  width="70%"
  caption="Selecting the Apollo3 MCU"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/dfu-apollo3-select.png"
  width="70%"
  caption="Selecting the Apollo3 MCU"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/dfu-apollo3-confirm.png"
  width="70%"
  caption="Selecting the Apollo3 MCU"
/>

4. Opening the latest firmware you need to upload.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/dfu-browse.png"
  width="70%"
  caption="Starting J-Flash"
/>

5. Upon selecting the HEX file, you should see the binary/hex outline in the J-Flash. Then you can proceed with uploading by clicking `Production Programming`.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/dfu-production-prog.png"
  width="70%"
  caption="Starting J-Flash"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/dfu-upload-1.png"
  width="70%"
  caption="Starting J-Flash"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/dfu-upload-2.png"
  width="70%"
  caption="Starting J-Flash"
/>

### Firmware Recovery

The RAK11720 has a recovery mode procedure in the event that a custom firmware upload will result in the halting of the device. If the device does not respond to any commands, it is recommended that you do the recovery to make the device usable again.

1. You have to connect the SWO/BOOT pin to VDD and then pull the reset pin to GND momentarily. This will restart the module and also skip the application code and proceed to recovery mode. Do not pull the reset pin to GND permanently, or else the module will be halted in the reset state.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/rak11720-boot.png"
  width="20%"
  caption="BOOT Pin Configuration for BOOT MODE"
/>

2. Then on the Arduino IDE, you must select the APOLLO3 Board and connect to the right COM port.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/recovery_board.png"
  width="90%"
  caption="Apollo3 Board and COM Port"
/>

3. To proceed with the recovery procedure, select `Ambiq SBL`. Before proceeding with the process of recovery, you need to prepare to reset the module after the prompt that will show as you click `Burn Bootloader`. You need to be fully attentive because this should be quick.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/recovery_bootload.png"
  width="90%"
  caption="Burning Bootloader"
/>

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/recovery_reset_bootprocess.png"
  width="60%"
  caption="Indicator When to Reset the Module"
/>

4. When the initiation of uploading starts, you can now release the reset pin connection to GND and wait until the process is finished.

<rk-img
  src="/assets/images/wisduo/rak11720-module/quickstart/recovery_successful.png"
  width="60%"
  caption="Successful Recovery"
/>

5. The final step is to reset the module again and upload any custom firmware. The RAK11720 will be in the RUI3 Boot Mode state after the recovery, so the RUI3 firmware must be uploaded via Arduino IDE to activate the device again.
