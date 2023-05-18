---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/custom-ble-development/custom-ble-development.png
rak_desc: A guide on how to develop a custom BLE (Peripheral) using RAK4631 WisBlock Core.
tags:
  - Tutorial
  - WisBlock
  - BLE
  - nRF Connect
  - RAK4631
  - RAK14000
  - RAK5005-O
header:
  title: Custom BLE (Peripheral) Development Using RAK4631
  caption: by <b>Marcio Montenegro</b>
  img: /assets/images/knowledge-hub/banners/bsp-in-arduino-ide.jpg
posted: 09/10/2021 5:40 PM
---

# Custom BLE (Peripheral) Development Using RAK4631

Bluetooth Low Energy (BLE) is a wireless network technology that is used for sensor data and low-bandwidth applications where small amounts of data are transferred at slower speeds.

BLE was introduced in 2010. The original Bluetooth defined in the previous versions is referred to as Bluetooth Classic. BLE is a new technology focused on the Internet of Things (IoT) rather than an upgrade to Bluetooth Classic. BLE is also known as "Bluetooth Smart."

## Terms and Definitions

**Central/Client**:
A device that scans for and initiates connections to BLE peripherals in order to perform some operation. This is usually a mobile device, but it can also be an embedded device like the RAK4630.

**Peripheral**:
A device that advertises its presence and accepts connections from a Central to complete a task.

**Advertising**:
When a BLE device wants to communicate its presence to other devices in the area, it broadcasts small packets of data, which are called advertising packets or advertisements.

**GAP**:
Generic Access Profile provides a framework that defines how BLE devices interact with each other.

**GATT**:
The Generic Attribute Profile defines the format of the data exposed by a BLE device.

**GATT Service**:
A collection of characteristics (data fields) that describe a device feature. For example, the DIS (Device Information Service) can include a feature that represents the device's serial number.

**GATT Characteristic**:
An entity containing meaningful data that can typically be read from or written to.

**Notification**:
A method for a BLE peripheral to notify the Central when the value of a characteristic changes. The central does not need to acknowledge receipt of the packet.

**Indication**:
Same as an indication, except each data packet is acknowledged by the Central. This guarantees their delivery at the expense of throughput.

**UUID**:
Universally unique identifier, a 128-bit number used to identify services, characteristics, and descriptors.

## Motivation

The Bluetooth Special Interest Group (SIG) manages publicly specified [GATT services](https://www.bluetooth.com/specifications/specs/).

The Adafruit Bluefruit library library makes it easy to add Bluetooth Low Energy connectivity to your IoT project. Bluefruit offers common BLE services such as:

**Battery Service (BAS)**
 - Send notifications about the battery level of the device.
**DIS (Device Information Service)**
 - Provides generic information about the device. Such as: manufacturer name, model, serial number.
**NUS (Nordic UART Service)**
 - This is a proprietary service defined by Nordic Semiconductors that we can use as a baseline transport mechanism between BLE modules. You can use this service to send any kind of data from central to peripheral or vice versa.

But BLE opens up a world of endless possibilities by allowing developers to specify various custom profiles for different use cases. The lack of good examples of custom BLE profiles using Adafruit Bluefruit inspired me to write this article. If you want to generate a new UUID for your application, see the following link: https://www.novelbits.io/uuid-for-custom-services-and-characteristics/

## Prerequisites

- [WisBlock Starter Kit](https://store.rakwireless.com/products/wisblock-iot-starter-kit?utm_source=IoTStarterKit&utm_medium=Document&utm_campaign=BuyFromStore) with [RAK4631](https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore) and [RAK5005-O](https://store.rakwireless.com/products/rak5005-o-base-board?utm_source=RAK5005-OWisBlockBaseBoard&utm_medium=Document&utm_campaign=BuyFromStore)
- Mobile with nrf Connect for Mobile application installed
    - [Android](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en_US&gl=US)
    - [iOS](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

## Install Arduino BSP

This guide requires the installation of an Arduino board support package. Refer to the following link: https://docs.rakwireless.com/Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/.

### Testing Custom BLE Sketch

1. Download the [sketch](https://drive.google.com/file/d/1JsvUj7Pr2V5-xAuFhAZ5rLvfnyk80zUD/view?usp=sharing) first. Or, you can copy the following code:

::: details Click to View Example
```c
#include <bluefruit.h>

// Custom UUID used to differentiate this device.
// Use any online UUID generator to generate a valid UUID.
// Note that the byte order is reversed ... CUSTOM_UUID
// below corresponds to the follow value:
// df67ff1a-718f-11e7-8cf7-a6006ad3dba0

//E54B0001-67F5-479E-8711-B3B99198CE6C - led service
//E54B0002-67F5-479E-8711-B3B99198CE6C - led characteristic

const uint8_t LED_SERVICE_UUID[] =
{
    0x6C, 0xCE, 0x98, 0x91, 0xB9, 0xB3, 0x11, 0x87,
    0x9E, 0x47, 0xF5, 0x67, 0x01, 0x00, 0x4B, 0xE5
};

const uint8_t LED_CHR_UUID[] =
{
    0x6C, 0xCE, 0x98, 0x91, 0xB9, 0xB3, 0x11, 0x87,
    0x9E, 0x47, 0xF5, 0x67, 0x02, 0x00, 0x4B, 0xE5
};


// RAK4630 supply two LED
// Green LED
#ifndef LED_BUILTIN
#define LED_BUILTIN 35
#endif

// Blue LED
#ifndef LED_BUILTIN2
#define LED_BUILTIN2 36
#endif

BLEService        lbs(LED_SERVICE_UUID);
BLECharacteristic lsbLED(LED_CHR_UUID);
BLEConnection* connection;

void setupAdv(void)
{

  Bluefruit.Advertising.addFlags(BLE_GAP_ADV_FLAGS_LE_ONLY_GENERAL_DISC_MODE);
  Bluefruit.Advertising.addTxPower();
 // Include bleuart 128-bit uuid
  Bluefruit.Advertising.addService(lbs);

  // There isn't enough room in the advertising packet for the
  // name so we'll place it on the secondary Scan Response packet
  Bluefruit.ScanResponse.addName();
  // For recommended advertising interval
  // https://developer.apple.com/library/content/qa/qa1931/_index.html
  Bluefruit.Advertising.setInterval(320,360);    // in unit of 0.625 ms
  Bluefruit.Advertising.restartOnDisconnect(true);
}
void setup()
{
  Serial.begin(115200);
  while ( !Serial ) delay(10);   // for nrf52840 with native usb
  Serial.println("BLE custom example");
  Bluefruit.begin();
  Bluefruit.setName("RAK4630");

  // Configure callbacks
  Bluefruit.Periph.setConnectCallback(connect_callback);
  Bluefruit.Periph.setDisconnectCallback(disconnect_callback);

  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, 0); // led off

  lbs.begin();
  lsbLED.setProperties(CHR_PROPS_READ | CHR_PROPS_WRITE);
  lsbLED.setPermission(SECMODE_OPEN, SECMODE_OPEN);
  lsbLED.setFixedLen(1);
  lsbLED.begin();
  lsbLED.write8(0x00); // led = off
  lsbLED.setWriteCallback(led_write_callback);

  // Set up Advertising Packet
  setupAdv();

  // Start Advertising
  Bluefruit.Advertising.start();
}

/**
 * Callback invoked when a connection is dropped
 * @param conn_handle connection where this event happens
 * @param reason is a BLE_HCI_STATUS_CODE which can be found in ble_hci.h
 */
void disconnect_callback(uint16_t conn_handle, uint8_t reason)
{
  (void) conn_handle;
  (void) reason;

  Serial.println();
  Serial.print("Disconnected, reason = 0x");
  Serial.println(reason, HEX);
  lsbLED.write8(0x0);

}

// callback invoked when central connects
void connect_callback(uint16_t conn_handle)
{
  // Get the reference to current connection
  connection = Bluefruit.Connection(conn_handle);

  char central_name[32] = { 0 };
  connection->getPeerName(central_name, sizeof(central_name));

  Serial.print("Connected to ");
  Serial.println(central_name);
}


void led_write_callback(uint16_t conn_hdl, BLECharacteristic* chr, uint8_t* data, uint16_t len)
{
  (void) conn_hdl;
  (void) chr;
  (void) len; // len should be 1

  // data = 1 -> LED = On
  // data = 0 -> LED = Off
  digitalWrite(LED_BUILTIN,data[0]&1);
  Serial.print("Data: ");
  Serial.println(data[0],HEX);
  lsbLED.write8(0x01);
}

void loop()
{

}
```
:::

2. Before upload the sketch, attach the LoRa and BLE antennas. Although this guide does not use LoRa, the [LoRa antenna](https://store.rakwireless.com/collections/antennas-1/products/5dbi-fiber-glass-antenna-supports-902-928mhz?utm_source=RAKARG14&utm_medium=Document&utm_campaign=BuyFromStore) must be installed.
3. Connect your WisBlock Starter Kit to the PC using the USB cable.
4. Launch the Arduino IDE, choose **File** → **Open**, and select the path where you downloaded the sketch.
5. On the Arduino IDE, navigate to **Tools** → **Board** → **RAKwireless nRF modules** →  **WisBlock RAKwireless nRF modules**  → **WisBlock Core RAK4631 Boar**d to find your board in the Arduino menu.
6. Select the appropriate serial port for your board from the **Tools** → **Port** menu.
7. Finally, click the **Upload** button.
8. After that, check the log messages of the application. Open the **Arduino Serial Monitor** and launch the **nRF Connect mobile** application.
9. Click the **SCAN** button and look for the device **RAK4630** in the list. If you have a WisBlock Starter Kit connected, you can see the blue LED flashing while the BLE is disconnected.
10. Finally, click the **CONNECT** button.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/custom-ble-development/nrf-app.png" width="80%">
</p>

11. After a successful BLE connection, the blue LED turns off. To send a message using a custom BLE service, go to the **CLIENT** tab and click **Unknown Service**.
12. A new **Unknown Service and Characteristic** window will appear. Finally, click on the up **arrow** icon that has been highlighted.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/custom-ble-development/arrow.png" width="40%">
</p>

13. A new **Write value** window will appear. To turn off the green LED on the WisBlock Starter Kit RAK5005-O Base board, type `00` and then press the **SEND** button. To turn on the green LED, type `01` and then press the **SEND** button.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/custom-ble-development/write-value.png" width="80%">
</p>

Use this example only as a reference to develop a more complete application.