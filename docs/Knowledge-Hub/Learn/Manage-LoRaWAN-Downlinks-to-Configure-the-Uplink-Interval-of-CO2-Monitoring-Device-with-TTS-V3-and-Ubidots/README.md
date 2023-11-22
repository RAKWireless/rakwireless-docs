---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/manage-uplink-and-downlink/uplink-downlink.png
rak_desc: This guide provides a step-by-step tutorial on how to manage uplink and downlink data of RUI3 devices and connect it with TTS v3 and Ubidots.
tags:
  - Tutorial
  - WisBlock
  - RAK19001
  - RAK12037
  - LoRaWAN
  - Arduino
  - RUI3
  - Ubidots
  - TTS V3
header:
  title: Manage LoRaWAN Downlinks to Configure the Uplink Interval of CO2 Monitoring Device with TTS V3 and Ubidots
  caption: by <b>Christian Jay Mendoza</b>
  img: /assets/images/knowledge-hub/banners/wisblock-sensor-tutorial.jpg
posted: 22/03/2023 07:33 PM
---

# Manage LoRaWAN Downlinks to Configure the Uplink Interval of CO2 Monitoring Device with TTS V3 and Ubidots

In the following tutorial, you will be guided on how to use downlinks to configure the sending interval of a LoRaWAN device, in this case, a CO2 level monitor. TTN will be used as the network server and Ubidots as the IoT platform that will display the sensor data plus switch widgets to select the transmit interval.


This guide is composed of the following section:
- [Manage LoRaWAN Downlinks to Configure the Uplink Interval of CO2 Monitoring Device with TTS V3 and Ubidots](#manage-lorawan-downlinks-to-configure-the-uplink-interval-of-co2-monitoring-device-with-tts-v3-and-ubidots)
  - [Getting Started](#getting-started)
  - [Hardware Setup](#hardware-setup)
    - [Modules / Sensors Connection Diagram](#modules--sensors-connection-diagram)
    - [LoRa / BLE Antenna](#lora--ble-antenna)
  - [Messages Types](#messages-types)
  - [Setting Up the Device to TTS V3 Network Server](#setting-up-the-device-to-tts-v3-network-server)
  - [Example Code Configuration for Uplink](#example-code-configuration-for-uplink)
    - [Configuring LoRaWAN](#configuring-lorawan)
    - [LoRaWAN Payload](#lorawan-payload)
    - [Data Format](#data-format)
    - [Uploading the Arduino Code](#uploading-the-arduino-code)
    - [Payload Format](#payload-format)
  - [Connect TTS V3 to Ubidots Using Plugins Webhook Integration](#connect-tts-v3-to-ubidots-using-plugins-webhook-integration)
    - [Decoding Payloads](#decoding-payloads)
  - [Create a Dashboard on Ubidots](#create-a-dashboard-on-ubidots)
  - [Manage Downlink Messages to TTS V3](#manage-downlink-messages-to-tts-v3)
    - [Creating a Switch Widget on Ubidots](#creating-a-switch-widget-on-ubidots)
    - [Converting the Switch into a Toggle Switch](#converting-the-switch-into-a-toggle-switch)
    - [Setup a Downlink Payload in Ubidots to TTS V3](#setup-a-downlink-payload-in-ubidots-to-tts-v3)
    - [Data Format](#data-format-1)
  - [Example Code Configuration for Downlink](#example-code-configuration-for-downlink)
    - [LoRaWAN Downlink](#lorawan-downlink)
    - [Uploading the Arduino Code](#uploading-the-arduino-code-1)
  - [Full Source Code](#full-source-code)


## Getting Started

- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core), but in this article, [RAK4631-R RUI3 Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631-R/Overview/#product-description) was used.

:::tip 📝 NOTE
Any WisBlock Core with RUI3 firmware can work on this tutorial like RAK3372 (based on RAK3172) and RAK11722 (based on RAK11720). <br>
All RUI3 codes presented in this tutorial will work in any of these cores without needing any modifications.
:::

- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base), but in this article, [RAK19001 WisBlock Baseboard](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19001/Overview/#product-description) was used.
- Your choice of [WisBlock Sensors](https://store.rakwireless.com/collections/wisblock-sensor) or other modules, but in this article, [RAK12037 WisBlock CO2 Sensor Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12037/Overview/#product-description) was used.
- USB Cable
- [Li-Ion / LiPo Battery](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore) (optional)
- [Ubidots Account](https://industrial.ubidots.com/accounts/signup_industrial/)
- [The Things Stack Account](https://id.thethingsnetwork.org/oidc/interaction/hW5cT6RZn8AsudEe1bjL1/register)
- [Arduino IDE](https://www.arduino.cc/en/software)


## Hardware Setup

This section is about the actual device configuration.

### Modules / Sensors Connection Diagram

The RAK12037 WisBlock CO2 Sensor Module can be connected to any IO slot of the RAK19001 WisBlock Baseboard to communicate with the RAK4631-R WisBlock LPWAN Module. Always secure the connection of the WisBlock modules and sensors by using compatible screws.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/hardware-setup.png"
  width="80%"
  caption="Modules connection to WisBlock Baseboard"
/>

### LoRa / BLE Antenna

Another important part of the RAK4631-R module is the antennas.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/lora-antenna.png"
  width="30%"
  caption="LoRa Antenna"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/ble-antenna.png"
  width="30%"
  caption="BLE Antenna"
/>

You need to ensure that the antenna is properly connected to have a good LoRa signal. Do not power the module without an antenna to avoid damage to the RF section of the chip.

The RAK4631-R has a label on its sticker on where to connect the antennas.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/antenna-label.png"
  width="30%"
  caption="RAK4631-R Antenna label"
/>

:::tip 📝 NOTE
Detailed information about the RAK4631-R BLE and LoRa antenna can be found on the [antenna datasheet](https://downloads.rakwireless.com/#LoRa/WisBlock/Accessories/).
:::

:::warning ⚠️ WARNING
When using the LoRa or Bluetooth Low Energy transceivers, make sure that an antenna is always connected. Using these transceivers without an antenna can damage the system. Make sure to fix the module with screws to ensure proper function.
:::

After all this setup, you can now connect the battery (optional) and USB cable to start programming the RAK12037.

:::warning ⚠️ WARNING

- Battery can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Make sure the battery wires match the polarity on the RAK WisBlock Base Board. Not all batteries have the same wiring.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
:::


## Messages Types

1. **Uplink Messages** - Uplink messages are sent by end devices to gateways (uplinks), and gateways pass it on to the network server (The Things Stack), which, in turn, passes it on to the IoT visualization platform (Ubidots).

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/uplink.png"
  width="70%"
  caption="Uplink Transmission"
/>

2. **Downlink Messages** - Each downlink message is sent by the network server (The Things Stack) through gateways down to the end devices (downlinks). This also includes some messages or controls initiated by the IoT platform (Ubidots) to end devices.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/downlink.png"
  width="70%"
  caption="Downlink Transmission"
/>

End devices in a LoRaWAN network come in three (3) classes: **Class A**, **Class B**, and **Class C**. While end devices can always send uplinks at will, the device-configured class of operation determines when it can receive downlinks. The class also determines the device energy efficiency. The more energy efficient a device, the longer the battery life. To know more about classes, please refer to [LoRaWAN Device Classes](https://www.thethingsnetwork.org/docs/lorawan/classes/).


## Setting Up the Device to TTS V3 Network Server

1. Log in to your `The Things Stack` account. On the **Overview** section, click **Go to applications** then **+ Create application**.

:::tip 📝 NOTE
- Your newly created account must be within an active gateway that is registered and connected to `The Things Network`. Select the appropriate [Cluster](https://console.cloud.thethings.network/) to access the console.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/create-app.png"
  width="100%"
  caption="Create an Application"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/create-app2.png"
  width="100%"
  caption="Create an Application"
/>

2. Fill in the `Application ID` and other specific details or necessary information about your application, then click **Create application** to have your application registered.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/create-app3.png"
  width="100%"
  caption="Creating an Application"
/>

3. Next, click **+ Register end device**.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/add-end-device.png"
  width="100%"
  caption="Adding an end device"
/>

4. Choose the following configurations in adding the end devices. To learn more about which frequency plan and parameters to use in your country, please see [LoRaWAN Regional Parameters](https://lora-alliance.org/resource_hub/rp2-101-lorawan-regional-parameters-2/).

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/configure-end-device.png"
  width="100%"
  caption="Configurations on adding an end device"
/>

5. Click **Show advanced activation, LoRaWAN class and cluster settings**.

There are two (2) options for registering end devices depending on the activation mode you selected:
- Over-The-Air-Activation (OTAA)
- Activation-By-Personalization (ABP)

For now, choose **OTAA** for the activation mode and **CLASS A** for LoRaWAN class.

The **JoinEUI** is also called the **AppEUI**, a 64-bit extended unique identifier used to identify the Join Server during activation. You may input any hex values, but it is okay to fill it out with all-zeros.

Then click **Confirm**.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/advance-settings.png"
  width="100%"
  caption="Advanced Settings"
/>

6. Then input a unique end device’s EUIs and Keys (**DevEUI** and **AppKey**).

For **DevEUI**, you may input any hex value, but you may also check your RAK4631-R module to see if there’s a QR sticker attached to the module that you can scan and then use as your **DevEUI**. Otherwise, click **Generate** to generate a random unique identifier.

For **AppKey**, also click **Generate** to generate a random unique identifier.

For **End device ID**, you may input a different unique value if you need to. Otherwise, It will automatically prefill this value using the previously entered **DevEUI**.

Then click **Register end device**.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/register-end-device.png"
  width="100%"
  caption="Registering the end device"
/>

7. You should now be able to see your newly created device on `The Things Stack` console. Take note of the keys in the `Activation information` section, such as the **AppEUI**, **DevEUI**, and **AppKey**, as they are needed for the next part of this guide.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/registered-device.png"
  width="100%"
  caption="End device successfully registered to TTS V3"
/>


## Example Code Configuration for Uplink

1. Install the [RAKwireless Arduino BSP Index](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the `package_rakwireless.com_rui_index.json` board installation package for RUI3 support in Arduino IDE. The WisBlock Core should now be available on the Arduino IDE.

2. Select the RAK4631-R WisBlock Core

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/rak4631-r-board.png"
  width="100%"
  caption="Choosing the RAK4631-R Board"
/>

3. Copy the following example code into your Arduino IDE.

::: details Click Here to View Example Code
```c
#include <Wire.h>
#include "SparkFun_SCD30_Arduino_Library.h"

#define OTAA_PERIOD   (20000)
/*************************************

   LoRaWAN band setting:
     RAK_REGION_EU433
     RAK_REGION_CN470
     RAK_REGION_RU864
     RAK_REGION_IN865
     RAK_REGION_EU868
     RAK_REGION_US915
     RAK_REGION_AU915
     RAK_REGION_KR920
     RAK_REGION_AS923-1
     RAK_REGION_AS923-2
     RAK_REGION_AS923-3
     RAK_REGION_AS923-4

 *************************************/
#define OTAA_BAND     (RAK_REGION_EU868)
#define OTAA_DEVEUI   {0xAC, 0x3F, 0x29, 0xFF, 0xFE, 0x23, 0xEF, 0x9C}
#define OTAA_APPEUI   {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00}
#define OTAA_APPKEY   {0xB8, 0x27, 0xEB, 0xFF, 0xFE, 0x39, 0x00, 0x00, 0x42, 0x34, 0x6E, 0x56, 0xBD, 0xC7, 0x35, 0x43}

SCD30 airSensor;

/** Packet buffer for sending */
uint8_t collected_data[64] = { 0 };

void recvCallback(SERVICE_LORA_RECEIVE_T * data)
{
  if (data->BufferSize > 0) {
    Serial.println("Something received!");
    for (int i = 0; i < data->BufferSize; i++) {
      Serial.printf("%x", data->Buffer[i]);
    }
    Serial.print("\r\n");
  }
}

void joinCallback(int32_t status)
{
  Serial.printf("Join status: %d\r\n", status);
}

void sendCallback(int32_t status)
{
  if (status == 0) {
    Serial.println("Successfully sent");
  } else {
    Serial.println("Sending failed");
  }
}

void setup()
{
  Serial.begin(115200, RAK_AT_MODE);

  Serial.println("RAKwireless LoRaWan OTAA Example");
  Serial.println("------------------------------------------------------");

  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);

  // Initialize Serial for debug output
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

  Serial.println("SCD30 Automatic self-calibration Example.");

  Wire.begin();

  //Start sensor using the Wire port and enable the auto-calibration (ASC)
  if (airSensor.begin(Wire, true) == false)
  {
    Serial.println("Air sensor not detected. Please check wiring. Freezing...");
    while (1)
    {
      delay(10);
    }
  }

  Serial.print("Automatic self-calibration set to：");
  if (airSensor.getAutoSelfCalibration() == true)
    Serial.println("true");
  else
    Serial.println("false");

  // OTAA Device EUI MSB first
  uint8_t node_device_eui[8] = OTAA_DEVEUI;
  // OTAA Application EUI MSB first
  uint8_t node_app_eui[8] = OTAA_APPEUI;
  // OTAA Application Key MSB first
  uint8_t node_app_key[16] = OTAA_APPKEY;

  if (!api.lorawan.appeui.set(node_app_eui, 8)) {
    Serial.printf("LoRaWan OTAA - set application EUI is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.appkey.set(node_app_key, 16)) {
    Serial.printf("LoRaWan OTAA - set application key is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.deui.set(node_device_eui, 8)) {
    Serial.printf("LoRaWan OTAA - set device EUI is incorrect! \r\n");
    return;
  }

  if (!api.lorawan.band.set(OTAA_BAND)) {
    Serial.printf("LoRaWan OTAA - set band is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.deviceClass.set(RAK_LORA_CLASS_A)) {
    Serial.printf("LoRaWan OTAA - set device class is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.njm.set(RAK_LORA_OTAA))	// Set the network join mode to OTAA
  {
    Serial.
	printf("LoRaWan OTAA - set network join mode is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.join())	// Join to Gateway
  {
    Serial.printf("LoRaWan OTAA - join fail! \r\n");
    return;
  }

  /** Wait for Join success */
  while (api.lorawan.njs.get() == 0) {
    Serial.print("Wait for LoRaWAN join...");
    api.lorawan.join();
    delay(10000);
  }

  if (!api.lorawan.adr.set(true)) {
    Serial.printf
	("LoRaWan OTAA - set adaptive data rate is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.rety.set(1)) {
    Serial.printf("LoRaWan OTAA - set retry times is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.cfm.set(1)) {
    Serial.printf("LoRaWan OTAA - set confirm mode is incorrect! \r\n");
    return;
  }

  /** Check LoRaWan Status*/
  Serial.printf("Duty cycle is %s\r\n", api.lorawan.dcs.get()? "ON" : "OFF");	// Check Duty Cycle status
  Serial.printf("Packet is %s\r\n", api.lorawan.cfm.get()? "CONFIRMED" : "UNCONFIRMED");	// Check Confirm status
  uint8_t assigned_dev_addr[4] = { 0 };
  api.lorawan.daddr.get(assigned_dev_addr, 4);
  Serial.printf("Device Address is %02X%02X%02X%02X\r\n", assigned_dev_addr[0], assigned_dev_addr[1], assigned_dev_addr[2], assigned_dev_addr[3]);	// Check Device Address
  Serial.printf("Uplink period is %ums\r\n", OTAA_PERIOD);
  Serial.println("");
  api.lorawan.registerRecvCallback(recvCallback);
  api.lorawan.registerJoinCallback(joinCallback);
  api.lorawan.registerSendCallback(sendCallback);
}

void uplink_routine()
{
  /** Payload of Uplink */
  uint8_t data_len = 0;

  float temp = airSensor.getTemperature();
  float hum = airSensor.getHumidity();

  uint16_t co2_data = (airSensor.getCO2());
  uint16_t temperature_data = (temp) * 100;
  uint16_t humidity_data = (hum) * 100;

  collected_data[data_len++] = co2_data >> 8;
  collected_data[data_len++] = co2_data;
  collected_data[data_len++] = temperature_data >> 8;
  collected_data[data_len++] = temperature_data;
  collected_data[data_len++] = humidity_data >> 8;
  collected_data[data_len++] = humidity_data;

  Serial.println("Data Packet:");
  for (int i = 0; i < data_len; i++) {
    Serial.printf("0x%02X ", collected_data[i]);
  }
    Serial.print("co2(ppm):");
    Serial.print(co2_data);

    Serial.print(" temp(C):");
    Serial.print(temp, 2);

    Serial.print(" humidity(%):");
    Serial.print(hum, 2);

  Serial.println("");

  /** Send the data package */
  if (api.lorawan.send(data_len, (uint8_t *) & collected_data, 2, true, 1)) {
    Serial.println("Sending is requested");
  } else {
    Serial.println("Sending failed");
  }
}

void loop()
{
  static uint64_t last = 0;
  static uint64_t elapsed;

  if (airSensor.dataAvailable())
  {
    if ((elapsed = millis() - last) > OTAA_PERIOD) {
      uplink_routine();
      last = millis();
    }
  }
  else
    Serial.println("Waiting for new data");
  //Serial.printf("Try sleep %ums..", OTAA_PERIOD);
  api.system.sleep.all(OTAA_PERIOD);
  //Serial.println("Wakeup..");
}

```
:::

4. Once the example code is open, install the [SparkFun_SCD30](https://github.com/sparkfun/SparkFun_SCD30_Arduino_Library) library for the CO2 sensor module.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/co2-lib.png"
  width="80%"
  caption="SparkFun SCD30 Library"
/>

### Configuring LoRaWAN

Before uploading the Arduino code, there are configurations that you need to set up in the example code to ensure that the device can join a LoRaWAN network server.

The steps below will explain the default settings and how to configure them:

1. Set up the LoRa region.

```c
#define OTAA_BAND   (RAK_REGION_EU868)
```
You can change this region that is applicable to you, such as:

- RAK_REGION_EU433
- RAK_REGION_CN470
- RAK_REGION_RU864
- RAK_REGION_IN865
- RAK_REGION_EU868
- RAK_REGION_US915
- RAK_REGION_AU915
- RAK_REGION_KR920
- RAK_REGION_AS923-1
- RAK_REGION_AS923-2
- RAK_REGION_AS923-3
- RAK_REGION_AS923-4

2. Set up the EUIs and KEY. Get these parameters from the [Setting Up the Device to TTS V3 Network Server](#setting-up-the-device-to-tts-v3-network-server) section of this guide. The EUI and KEY must match those configured in the `TTS V3` application. Otherwise, your device will not be able to connect to the `TTS V3` server. In this application, the device is activated via **OTAA**, so you need to configure the **DevEUI**, **AppEUI**, and **AppKey**.

```c
#define OTAA_DEVEUI   {0xAC, 0x3F, 0x29, 0xFF, 0xFE, 0x23, 0xEF, 0x9C}
#define OTAA_APPEUI   {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00}
#define OTAA_APPKEY   {0xB8, 0x27, 0xEB, 0xFF, 0xFE, 0x39, 0x00, 0x00, 0x42, 0x34, 0x6E, 0x56, 0xBD, 0xC7, 0x35, 0x43}
```

3. Set up an uplink period.

The default is 20000&nbsp;ms or 20&nbsp;seconds.

```c
#define OTAA_PERIOD   (20000)
```

### LoRaWAN Payload

- This is the setup on the `void joinCallback(int32_t status)` function. This will check the status if your device has been successfully connected or not connected to the TTS V3.

```c
void joinCallback(int32_t status)
{
  Serial.printf("Join status: %d\r\n", status);
}
```

- This is the setup on the `void sendCallback(int32_t status)` function. This will check the status if the data from the sensor has been successfully sent or failed to the TTS V3.

```c
void sendCallback(int32_t status)
{
  if (status == 0) {
    Serial.println("Successfully sent");
  } else {
    Serial.println("Sending failed");
  }
}
```

- This is the setup on the `void uplink_routine()` function. This will gather the data from the sensor and package them in a LoRaWAN payload.

```c
void uplink_routine()
{
  /** Payload of Uplink */
  uint8_t data_len = 0;

  float temp = airSensor.getTemperature();
  float hum = airSensor.getHumidity();

  uint16_t co2_data = (airSensor.getCO2());
  uint16_t temperature_data = (temp) * 100;
  uint16_t humidity_data = (hum) * 100;

  collected_data[data_len++] = co2_data >> 8;
  collected_data[data_len++] = co2_data;
  collected_data[data_len++] = temperature_data >> 8;
  collected_data[data_len++] = temperature_data;
  collected_data[data_len++] = humidity_data >> 8;
  collected_data[data_len++] = humidity_data;

  Serial.println("Data Packet:");
  for (int i = 0; i < data_len; i++) {
    Serial.printf("0x%02X ", collected_data[i]);
  }
    Serial.println();

    Serial.print("co2(ppm):");
    Serial.print(co2_data);

    Serial.print(" temp(C):");
    Serial.print(temp, 2);

    Serial.print(" humidity(%):");
    Serial.print(hum, 2);

  Serial.println("");

  /** Send the data package */
  if (api.lorawan.send(data_len, (uint8_t *) & collected_data, 2, true, 1)) {
    Serial.println("Sending is requested");
  } else {
    Serial.println("Sending failed");
  }
}
```

### Data Format


| Byte1           | Byte2           | Byte3        | Byte4        | Byte5     | Byte6     |
| --------------- | --------------- | ------------ | ------------ | --------- | --------- |
| Carbon Dioxide1 | Carbon Dioxide2 | Temperature1 | Temperature2 | Humidity1 | Humidity2 |


  - CO<sub>2</sub> is transmitted as two (2) bytes. For example, 926&nbsp;ppm, will be sent as `0x03 0x9E`.
  - Temperature is sent as two (2)&nbsp;bytes, enlarged 100 times for accuracy. For example, 30.79°&nbsp;C times 100 is 3079 and will be sent as `0x0C 0x07`.
  - Humidity is sent as two (2)&nbsp;bytes, enlarged 100 times for accuracy. For example, 75.47% times 100 is 7547, which will be sent as `0x1D 0x7B`.


### Uploading the Arduino Code

After a successful installation of the library and configuration of the LoRaWAN Network Server setup, you can now select the right serial port and upload the code.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/select-port.png"
  width="100%"
  caption="Selecting the correct serial port"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/upload.png"
  width="100%"
  caption="Uploading the example code"
/>

When you have successfully uploaded the example sketch, open the serial monitor of the Arduino IDE to see the sensor's reading logs. If you see the logs, as shown below, then your device is properly sending uplink messages.

 <rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/serial-joined.png"
  width="80%"
  caption="Device successfully joined to the TTS V3"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/data-packet.png"
  width="80%"
  caption="Sensor data successfully sent to TTS V3"
/>

Then check again your `The Things Stack` account and go to **Applications** > **`<name of your application>`** > **`<name of your end device>`** > **Live Data**. Wait for the uplink payload messages, which are updated every 20&nbsp;seconds.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/uplink-tts.png"
  width="100%"
  caption="Successfully onboarded using The Things Stack"
/>

### Payload Format

Payload formatters allow you to process data going to and from end devices. This is useful for converting payloads to human-readable fields, or for doing any other kind of data conversion on uplinks and downlinks.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/hex-payload.png"
  width="100%"
  caption="Converting the payload to human-readable fields"
/>

:::tip 📝 NOTE
[RAKwireless has a standard payload decoding](https://github.com/RAKWireless/RAKwireless_Standardized_Payload) which you can also use.

This approach is outside the scope of this tutorial, but if you decide to proceed with this approach, you can use this payload formatting that is compatible with the RAK12037 CO2 sensor.

```c
  g_solution_data.addConcentration(LPP_CHANNEL_CO2_2, co2_data);
  g_solution_data.addTemperature(LPP_CHANNEL_CO2_Temp_2, temp);
  g_solution_data.addRelativeHumidity(LPP_CHANNEL_CO2_HUMID_2, hum);
```

:::



1. On your `The Things Stack` account, go to **Applications** > **`<name of your application>`** > **`<name of your end device>`** > **Payload formatters** > **Uplink**.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/payload-format-navigation.png"
  width="100%"
  caption="Uplink Payload Formatter"
/>

2. Choose the **Custom Javascript formatter** as the Formatter type.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/js-format.png"
  width="100%"
  caption="Choosing Formatter Type"
/>

3. Copy this Decoder code, paste it inside the Formatter code, and then click **Save Changes**.

```c
function Decoder(bytes, port)
{
  var decoded = {};

  if (port === 2)
  {
      co2_data = (bytes[0] << 8) | (bytes[1]);
      decoded.co2 = co2_data;
      temperature_data= (bytes[2] << 8) | (bytes[3]);
      decoded.temperature = temperature_data/ 100;
      humidity_data= (bytes[4] << 8) | (bytes[5]);
      decoded.humidity = humidity_data/ 100;
      return decoded;
  }
}
```

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/save-formatter.png"
  width="100%"
  caption="Payload format code"
/>

4. After saving, go to **Applications** > **`<name of your application>`** > **`<name of your end device>`** > **Live Data**. Wait for the uplink data messages again, and you'll be able to see that the payload is already decoded into human-readable data.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/decoded-payload.png"
  width="100%"
  caption="Decoded Uplink Payload"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/decoded-payload2.png"
  width="100%"
  caption="Decoded Uplink Payload"
/>

## Connect TTS V3 to Ubidots Using Plugins Webhook Integration

There is a pre-built integration, which allows users to easily forward sensor data from `The Things Stack` network server to `Ubidots`, using Plugins.

You have to create an account first in [Ubidots](https://ubidots.com/) if you don't have one yet.

1. To create a TTS Plugin in your `Ubidots` account, go to the **Devices** tab, click on **Plugins**, then click the **+** icon to create a new Plugin. Search for **The Things Stack** and click on it.

:::tip 📝 NOTE
There are two The Things Stack plugins. Ensure that you select the one for LoRaWAN devices and not for monitoring LoRaWAN gateways, as shown in **Figure 30**.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/plugin-nav.png"
  width="100%"
  caption="Navigating Plugin"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/tts-plugin.png"
  width="80%"
  caption="TTS V3 Plugin"
/>

2. The plugin instructions will appear. Fill out the needed parameters, then click on the **Next** icon.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/plugin-fill.png"
  width="80%"
  caption="Plugin parameters"
/>

- **Ubidots device type**: A device type will be created and linked to this plugin. It allows you to make batch changes to all of the devices that receive data through this plugin.

- **Ubidots token**: Select the Ubidots token you'd like to use for this plugin. We recommend creating a new token dedicated to this plugin using [this guide](https://help.ubidots.com/en/articles/590078-find-your-token-from-your-ubidots-account).

3. Add a name and description for your plugin.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/plugin-demo.png"
  width="80%"
  caption="Plugin details"
/>

4. Finish the process and a new plugin will appear in the Plugins list:

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/plugin-created.png"
  width="100%"
  caption="New Plugin created"
/>

5. Click on the newly-created TTS Plugin, click the **Decoder** tab, and copy the **HTTPs Endpoint URL**. The structure of the URL is as follows:

**`https://dataplugin.ubidots.com/api/web-hook/<PLUGIN-ID>`**

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/decoder-id.png"
  width="100%"
  caption="HTTPs Endpoint URL"
/>

6. Finally, go to your `The Things Stack` account, click on the desired Application then on **Integrations** > **Webhooks**, then click on **+ Add webhook** and choose **Ubidots**.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/tts-ubidots.png"
  width="100%"
  caption="Webhook Integration"
/>

Fill out these fields:

- **Webhook ID**: Pick a name for your webhook.
- **Plugin ID**: Unique identifier (`<PLUGIN-ID>`) found at the end of your plugin HTTPs Endpoint URL. The one that you copied.
- **Ubidots Token**: Token used to authenticate Ubidots API requests. This is the token previously created.

Finally, the webhook should look something like this:

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/webhook-setup.png"
  width="60%"
  caption="Create webhook"
/>

7. After creating your webhook, it will appear on your TTS V3 account.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/webhook-created.png"
  width="100%"
  caption="Created webhook"
/>

### Decoding Payloads

1. Go to your `Ubidots` account. After creating a TTS Plugin, click on it and you will see a **Decoder** tab. Scroll-down and you will see it contains a **Decoding Function** that you can edit at will, in order to decode your data frames.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/decode-function.png"
  width="100%"
  caption="Ubidots Decoder"
/>

2. Inside the **Decoding Function**, you have to uncomment `line 37` because we are already decoding in TTS V3 using payload formatters. Then comment out `line 42`. Finally, click **SAVE & MAKE LIVE**.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/decoder-code.png"
  width="100%"
  caption="Decoding Function"
/>

3. After that, go to **Devices** > **Devices**, you will see that Ubidots automatically created your device every time a payload from a new device is received.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/ubidots-device.png"
  width="100%"
  caption="Newly created device"
/>


## Create a Dashboard on Ubidots

You can create your own dashboard to visualize and monitor the data as shown in **Figure 41**. For dashboard making, please refer to [Create Dashboards & Widgets](https://help.ubidots.com/en/articles/2400308-create-dashboards-and-widgets).

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/ubidots-dashboard.png"
  width="100%"
  caption="Ubidots Dashboard"
/>


## Manage Downlink Messages to TTS V3

For the downlink, we want to create toggle switches in our Ubidots dashboard. When one of the switches is pressed, it will send a downlink command to the TTS V3 and down into our end device, and when the end device receives the command, it will change its uplink sending time interval based on the switch that we clicked.

Three (3) switches were used. The first switch will change the uplink interval of the end device to 20 seconds, the second switch is for the 40-second uplink interval, and the last or third switch is for the 60-second uplink interval.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/switch.png"
  width="80%"
  caption="Uplink Interval Switches"
/>


### Creating a Switch Widget on Ubidots

1. Create a widget for switches. But before that, create variables first for the three (3) switches. Go to **Devices** > **Devices** and then click your end device name. After that, you'll be able to see the details and other variables, such as the sensor data of your end device.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/ubidots-device.png"
  width="100%"
  caption="Choosing your end device"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/variables.png"
  width="100%"
  caption="End device variables"
/>


2. Next, we need to add three (3) variables because we will create three (3) switches, one variable for each switch. To add a variable, click **+ Add Variable**, then choose **Raw** and rename your variables as you want. Variables were named `uplink-1`, `uplink-2`, and `uplink-3`.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/add-variables.png"
  width="100%"
  caption="Adding variables"
/>

3. Go to **Data** > **Dashboard**, then click the **+** icon on the uppermost right to add a new widget for your switches on your dashboard. On the **Control** section of the widget, choose **Switch**.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/dashboard-widget.png"
  width="100%"
  caption="Ubidots Dashboard"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/switch-widget.png"
  width="60%"
  caption="Adding a Switch Widget"
/>


4. To add a variable on our switch. Click **+ ADD VARIABLES**, then search for your `<end device>` then choose the raw variable that you have created before on **STEP 2**, then click **SELECT**.


<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/add-switch-variable.png"
  width="60%"
  caption="Adding a Switch variable"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/select-variable.png"
  width="60%"
  caption="Selecting a Switch variable"
/>

5. You'll now be able to see the variable you added for your first switch. You can also rename or make other configurations for your switch (optional).

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/switch-message.png"
  width="60%"
  caption="Configuring the Switch"
/>


6. Now, you have to add another variable for the other switches. Just follow the previous steps, then click **SAVE**.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/add-more.png"
  width="60%"
  caption="Adding another Switch variable"
/>

7. Finally, you have created a widget for the three (3) switches.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/switch-dashboard.png"
  width="100%"
  caption="Uplink Interval Switch Widgets"
/>


### Converting the Switch into a Toggle Switch

Now that we have created our three (3) switches, we do not want to turn on all of the switches at the same time, as shown in **Figure 53**. What we wanted to do is to make a toggle switch so that when we turn on one of those switches, the other two switches must be automatically turned-off as shown in **Figure 54**.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/not-toggle.png"
  width="60%"
  caption="This is NOT a toggle switch"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/toggle.png"
  width="60%"
  caption="This is a toggle switch"
/>

:::tip 📝 NOTE
We need to create three (**IF triggers... THEN actions**) events:
1. IF Uplink-1 is turned ON, THEN Uplink-2 and Uplink-3 is turned OFF.
2. IF Uplink-2 is turned ON, THEN Uplink-1 and Uplink-3 is turned OFF.
3. IF Uplink-3 is turned ON, THEN Uplink-1 and Uplink-2 is turned OFF.
:::


1. Go to **Data** > **Events**, then click the **+** icon on the upper right side to create a new event.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/event-nav.png"
  width="100%"
  caption="Create event"
/>

2. Now, on the **IF triggers** section of the **Events** tab, choose **Select Variable**.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/if-triggers.png"
  width="100%"
  caption="Select variable"
/>

3. Search for your end device,


<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/search-dev.png"
  width="60%"
  caption="Search end device"
/>

Select the variable of your `Uplink-1`, then click the `check` icon.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/select-var.png"
  width="60%"
  caption="Selected variable"
/>

4. Change the value into **1** to indicate that IF `Uplink-1` is turned ON. Then, click **Next**.

- **`1`**: means that IF the switch is turned ON
- **`0`**: means that IF the switch is turned OFF

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/if-value.png"
  width="100%"
  caption="IF triggers"
/>


5. On the **THEN actions** section of the **Events** tab. Choose **Add new action**, then select **Set Variable**.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/then-action.png"
  width="100%"
  caption="Set variable"
/>


6. Go to **Variables** > **Select variable** and search your end device again, then select multiple variables which are your `Uplink-2` and `Uplink-3`.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/then-action-select.png"
  width="100%"
  caption="Search variable"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/then-action-var.png"
  width="60%"
  caption="Selected variables"
/>

7. After selecting variables `Uplink-2` and `Uplink-3`, look in the **Message** box of the **ACTIVE TRIGGER** section, put a value of `zero (0)` to set a command to turn OFF our `Uplink-2` and `Uplink-3`. Click the `check` icon.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/then-action-value.png"
  width="100%"
  caption="Set a value"
/>

8. Finally, rename your event and click the `check` icon to finish setting it up.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/event-name.png"
  width="100%"
  caption="Renaming the Event"
/>

9. You will now see your newly created event for the first toggle switch (red box). Do the same previous steps for the other remaining switches (green box). After doing that, you will have three (3) events for your switches as shown in **Figure 65** below. Next, go to your **Dashboards** again to see if the toggle switches work.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/complete-events.png"
  width="100%"
  caption="Switch Events"
/>


### Setup a Downlink Payload in Ubidots to TTS V3

1. Go to **Data** > **Events**, then select one of your created events. Let us pick the `switch-1` event as our example.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/payload1.png"
  width="100%"
  caption="Select an event"
/>

2. Go to **THEN actions** section, then create a new event, and select **Trigger WebHook**.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/payload2.png"
  width="100%"
  caption="Create new event"
/>

3. Head to your `The Things Stack` account. Go to **Applications** and select the application hosting the device you want to make a downlink to.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/app-hosting.png"
  width="100%"
  caption="Selecting your host application"
/>

4. Extract the **Region** and **Application ID** and save them into your notes.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/region-appid.png"
  width="100%"
  caption="Extract Region and Application ID"
/>

- **Region**: The region where your TTS resides.
- **Application ID**: Found in the Application **Overview** section.

5. Extract and save the **API Key**.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/api-key.png"
  width="100%"
  caption="Extract API Key"
/>

:::warning ⚠️ WARNING
The API Key generated must be saved on a note application since it will not be accessible anymore after its creation!
:::

- **API Key**: The TTS V3 console doesn't allow seeing existing API Keys. Therefore, unless you already have an existing API Key saved in a secure place, you will have to [create a new API Key](https://www.thethingsindustries.com/docs/integrations/webhooks/scheduling-downlinks/#create-an-api-key). Check the box with the **Write downlink application traffic** because it is mandatory to allow downlink traffic.

6. Lastly, extract and save the **Device ID**.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/device-id.png"
  width="100%"
  caption="Extract Device ID"
/>

- **Device ID**: Found on the **End devices** tab.

7. Enter the acquired information above in the webhook options panel of the event action.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/http-url.png"
  width="100%"
  caption="HTTP and URL settings"
/>

- **HTTP Method**: `POST`
- **URL**: `https://<region>.cloud.thethings.network/api/v3/as/applications/<application-id>/devices/<device-id>/down/push` (you'll need to replace `<region>`, `<application-id>` and `<device-id>` with the information obtained in the previous step.)

8. On the **Headers** section, click **+ Add header**.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/headers.png"
  width="100%"
  caption="Headers settings"
/>

- **Headers**: You'll be needing 2 headers. One is for the **Content-Type**, and the other one is for the **Authorization**. It follows the structure `key:value`.

  - `Content-Type : application/json`
  - `Authorization  : Bearer <API Key>` (you'll need to replace `<API Key>` with the information obtained in the previous step.)

:::tip 📝 NOTE
At this stage, all information you input on the Ubidots platform is critical. Any wrong input on the text boxes will fail to send downlink packets via Button Widget.
:::

9. Lastly, enter the JSON body. This is the JSON expected by the TTS V3 back end. You can send either a base-64 payload or a human-readable payload, but for now, we will be sending a base-64 payload.

Since we are now on a `switch-1` event and it is also a 20-second time interval switch, we need to convert the 20-second into HEX.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/dec-hex.png"
  width="100%"
  caption="20 seconds converted to HEX"
/>

The 20&nbsp;seconds are now equivalent to **`0x14`** in HEX.

Let us send 2&nbsp;bytes of payload down to our TTS V3. The payload we wanted to send if we pressed the `switch-1` should be **`0x01, 0x14`**.

**WHERE:**

  - **0x01**: This is just the variable name for the switch (this variable's value should be the same for ALL of the switches.)
  - **0x14**: The 20-sec uplink time interval that we set

10. Now, convert the 2&nbsp;bytes of payload **`0x01, 0x14`** into a Base-64.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/hex-base64.png"
  width="40%"
  caption="HEX payload converted to Base-64"
/>

Our **`0x01, 0x14`** HEX payload is now equivalent to **`ARQ=`** in Base-64.

11. Go to the JSON body and enter the following Base-64 payload, then click the `check` icon to finish the setup.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/json-body.png"
  width="100%"
  caption="Base-64 payload JSON Body"
/>

- **Body**: `{"downlinks":[{"frm_payload":"<base-64-payload>","f_port":<port>,"priority":"NORMAL"}]}` (you'll need to replace `<base-64-payload>` with the payload formatted in base-64, `<port>` with the listening port of your device.)

12. Finally, go to your **Dashboards** and try to press the 20-second switch, you will now be able to see a downlink payload in your TTS V3 account. Your Base-64 (**`ARQ=`**) payload is automatically converted back again into HEX (**`0x01, 0x14`**) as shown in **Figure 77** below.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/0114-payload.png"
  width="100%"
  caption="20-second switch payload"
/>

13. Do the same previous steps for the other remaining switches; the 40-second switch and the 60-second switch, and you'll get a downlink result as shown in **Figure 78** below.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/tts-payload.png"
  width="100%"
  caption="All switches payload"
/>

### Data Format

| Byte1           | Byte2                |
| --------------- | -------------------- |
| Switch variable | Uplink Time Interval |

  - Downlink is sent as two (2)&nbsp;bytes. For example, if you want to send a 60-second uplink time, it will be sent as `0x01, 0x3C`.
  - The first byte is just a variable name for the switch.
  - The second byte is the desired uplink time interval that has been set by the user.


## Example Code Configuration for Downlink

1. Copy the following example code into your Arduino IDE. It is the same code used for uplink - the one we just made and added some modifications to.

::: details Click Here to View Example Code
```c
#include <Wire.h>
#include "SparkFun_SCD30_Arduino_Library.h"

/*************************************

   LoRaWAN band setting:
     RAK_REGION_EU433
     RAK_REGION_CN470
     RAK_REGION_RU864
     RAK_REGION_IN865
     RAK_REGION_EU868
     RAK_REGION_US915
     RAK_REGION_AU915
     RAK_REGION_KR920
     RAK_REGION_AS923

 *************************************/
#define OTAA_BAND     (RAK_REGION_EU868)
#define OTAA_DEVEUI   {0xAC, 0x1F, 0x09, 0xFF, 0xFE, 0x03, 0xEF, 0x6C}
#define OTAA_APPEUI   {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00}
#define OTAA_APPKEY   {0x98, 0xF9, 0x41, 0x43, 0x94, 0xDA, 0x4D, 0x18, 0x42, 0x34, 0x6E, 0x56, 0xBD, 0xC7, 0x35, 0x43}

SCD30 airSensor;

/** Packet buffer for sending */
uint8_t collected_data[64] = { 0 };
int OTAA_PERIOD = 20000;

void recvCallback(SERVICE_LORA_RECEIVE_T * data)
{
  if (data->BufferSize > 0) {
    Serial.println("Something received!");
    for (int i = 0; i < data->BufferSize; i++) {
      Serial.printf("%x", data->Buffer[i]);
    }
    Serial.print("\r\n");

    uint8_t val_1 = data->Buffer[0];
    uint8_t val_2 = data->Buffer[1];
    Serial.println(val_1);
    Serial.println(val_2);

    if (val_1 == 1)
    {
      OTAA_PERIOD = (val_2 * 1000);
    }
  }
}

void joinCallback(int32_t status)
{
  Serial.printf("Join status: %d\r\n", status);
}

void sendCallback(int32_t status)
{
  if (status == 0) {
    Serial.println("Successfully sent");
  } else {
    Serial.println("Sending failed");
  }
}

void setup()
{
  Serial.begin(115200, RAK_AT_MODE);

  Serial.println("RAKwireless LoRaWan OTAA Example");
  Serial.println("------------------------------------------------------");

  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);

  // Initialize Serial for debug output
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

  Serial.println("SCD30 Automatic self-calibration Example.");

  Wire.begin();

  //Start sensor using the Wire port and enable the auto-calibration (ASC)
  if (airSensor.begin(Wire, true) == false)
  {
    Serial.println("Air sensor not detected. Please check wiring. Freezing...");
    while (1)
    {
      delay(10);
    }
  }

  Serial.print("Automatic self-calibration set to：");
  if (airSensor.getAutoSelfCalibration() == true)
    Serial.println("true");
  else
    Serial.println("false");

  // OTAA Device EUI MSB first
  uint8_t node_device_eui[8] = OTAA_DEVEUI;
  // OTAA Application EUI MSB first
  uint8_t node_app_eui[8] = OTAA_APPEUI;
  // OTAA Application Key MSB first
  uint8_t node_app_key[16] = OTAA_APPKEY;

  if (!api.lorawan.appeui.set(node_app_eui, 8)) {
    Serial.printf("LoRaWan OTAA - set application EUI is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.appkey.set(node_app_key, 16)) {
    Serial.printf("LoRaWan OTAA - set application key is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.deui.set(node_device_eui, 8)) {
    Serial.printf("LoRaWan OTAA - set device EUI is incorrect! \r\n");
    return;
  }

  if (!api.lorawan.band.set(OTAA_BAND)) {
    Serial.printf("LoRaWan OTAA - set band is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.deviceClass.set(RAK_LORA_CLASS_A)) {
    Serial.printf("LoRaWan OTAA - set device class is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.njm.set(RAK_LORA_OTAA))	// Set the network join mode to OTAA
  {
    Serial.
	printf("LoRaWan OTAA - set network join mode is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.join())	// Join to Gateway
  {
    Serial.printf("LoRaWan OTAA - join fail! \r\n");
    return;
  }

  /** Wait for Join success */
  while (api.lorawan.njs.get() == 0) {
    Serial.print("Wait for LoRaWAN join...");
    api.lorawan.join();
    delay(10000);
  }

  if (!api.lorawan.adr.set(true)) {
    Serial.printf
	("LoRaWan OTAA - set adaptive data rate is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.rety.set(1)) {
    Serial.printf("LoRaWan OTAA - set retry times is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.cfm.set(1)) {
    Serial.printf("LoRaWan OTAA - set confirm mode is incorrect! \r\n");
    return;
  }

  /** Check LoRaWan Status*/
  Serial.printf("Duty cycle is %s\r\n", api.lorawan.dcs.get()? "ON" : "OFF");	// Check Duty Cycle status
  Serial.printf("Packet is %s\r\n", api.lorawan.cfm.get()? "CONFIRMED" : "UNCONFIRMED");	// Check Confirm status
  uint8_t assigned_dev_addr[4] = { 0 };
  api.lorawan.daddr.get(assigned_dev_addr, 4);
  Serial.printf("Device Address is %02X%02X%02X%02X\r\n", assigned_dev_addr[0], assigned_dev_addr[1], assigned_dev_addr[2], assigned_dev_addr[3]);	// Check Device Address
  Serial.printf("Uplink period is %ums\r\n", OTAA_PERIOD);
  Serial.println("");
  api.lorawan.registerRecvCallback(recvCallback);
  api.lorawan.registerJoinCallback(joinCallback);
  api.lorawan.registerSendCallback(sendCallback);
}

void uplink_routine()
{
  /** Payload of Uplink */
  uint8_t data_len = 0;

  float temp = airSensor.getTemperature();
  float hum = airSensor.getHumidity();

  uint16_t co2_data = (airSensor.getCO2());
  uint16_t temperature_data = (temp) * 100;
  uint16_t humidity_data = (hum) * 100;

  collected_data[data_len++] = co2_data >> 8;
  collected_data[data_len++] = co2_data;
  collected_data[data_len++] = temperature_data >> 8;
  collected_data[data_len++] = temperature_data;
  collected_data[data_len++] = humidity_data >> 8;
  collected_data[data_len++] = humidity_data;

  Serial.println("Data Packet:");
  for (int i = 0; i < data_len; i++) {
    Serial.printf("0x%02X ", collected_data[i]);
  }
    Serial.println();

    Serial.print("co2(ppm):");
    Serial.print(co2_data);

    Serial.print(" temp(C):");
    Serial.print(temp, 2);

    Serial.print(" humidity(%):");
    Serial.print(hum, 2);

  Serial.println("");

  /** Send the data package */
  if (api.lorawan.send(data_len, (uint8_t *) & collected_data, 2, true, 1)) {
    Serial.println("Sending is requested");
  } else {
    Serial.println("Sending failed");
  }
}

void loop()
{
  static uint64_t last = 0;
  static uint64_t elapsed;

  if (airSensor.dataAvailable())
  {
    if ((elapsed = millis() - last) > OTAA_PERIOD) {
      uplink_routine();
      last = millis();
    }
  }
  else
    Serial.println("Waiting for new data");
  //Serial.printf("Try sleep %ums..", OTAA_PERIOD);
  api.system.sleep.all(OTAA_PERIOD);
  //Serial.println("Wakeup..");
}
```
:::

### LoRaWAN Downlink

1. This is the setup for the OTAA variable uplink time interval.

```c
int OTAA_PERIOD;
```

2. This is the setup on the `void recvCallback(SERVICE_LORA_RECEIVE_T * data)` function. This will gather the downlink data received from the TTS V3 and package it to be set as our new OTAA variable uplink time interval.

```c
void recvCallback(SERVICE_LORA_RECEIVE_T * data)
{
  if (data->BufferSize > 0) {
    Serial.println("Something received!");
    for (int i = 0; i < data->BufferSize; i++) {
      Serial.printf("%x", data->Buffer[i]);
    }
    Serial.print("\r\n");

    uint8_t val_1 = data->Buffer[0];
    uint8_t val_2 = data->Buffer[1];
    Serial.println(val_1);
    Serial.println(val_2);

    if (val_1 == 1)
    {
      OTAA_PERIOD = (val_2 * 1000);
    }
  }
}
```

### Uploading the Arduino Code

You can now select the right serial port and upload the code.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/select-port.png"
  width="100%"
  caption="Selecting the correct serial port"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/upload.png"
  width="100%"
  caption="Uploading the example code"
/>

When you have successfully uploaded the example sketch, open the serial monitor of the Arduino IDE to see the reading logs. Try to press the switch you created and configured on Ubidots. If you see the logs, as shown below, then your device is properly sending downlink messages and your device is now sending an uplink based on the time interval that the switch sends.

If you noticed, the HEX payload from TTS has been converted back to the real time-value of the switch in the Serial Monitor.

<rk-img
  src="/assets/images/knowledge-hub/learn/manage-uplink-and-downlink/downlink-payload.png"
  width="100%"
  caption="Successfull downlink"
/>

:::tip 📝 NOTE
All the integration from the Ubidots to TTN downlink can be tested and simulated manually using the downlink section of `Payload formatters` tab of The Things Stack.

If there is no downlink that was received on the end-device `recvCallback`, it is a good idea to test first the firmware directly from TTN downlink.

When using TTN downlink, the input can be the direct payload and no need to convert unlike from Ubidots.

For example, there is no need to convert `0x0114` to `ARQ=`.
:::

## Full Source Code

Below is the full source code of this article:


::: details Click Here to View Example Code
```c
#include <Wire.h>
#include "SparkFun_SCD30_Arduino_Library.h"

/*************************************

   LoRaWAN band setting:
     RAK_REGION_EU433
     RAK_REGION_CN470
     RAK_REGION_RU864
     RAK_REGION_IN865
     RAK_REGION_EU868
     RAK_REGION_US915
     RAK_REGION_AU915
     RAK_REGION_KR920
     RAK_REGION_AS923

 *************************************/
#define OTAA_BAND     (RAK_REGION_EU868)
#define OTAA_DEVEUI   {0xAC, 0x1F, 0x09, 0xFF, 0xFE, 0x03, 0xEF, 0x6C}
#define OTAA_APPEUI   {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00}
#define OTAA_APPKEY   {0x98, 0xF9, 0x41, 0x43, 0x94, 0xDA, 0x4D, 0x18, 0x42, 0x34, 0x6E, 0x56, 0xBD, 0xC7, 0x35, 0x43}

SCD30 airSensor;

/** Packet buffer for sending */
uint8_t collected_data[64] = { 0 };
int OTAA_PERIOD = 20000;

void recvCallback(SERVICE_LORA_RECEIVE_T * data)
{
  if (data->BufferSize > 0) {
    Serial.println("Something received!");
    for (int i = 0; i < data->BufferSize; i++) {
      Serial.printf("%x", data->Buffer[i]);
    }
    Serial.print("\r\n");

    uint8_t val_1 = data->Buffer[0];
    uint8_t val_2 = data->Buffer[1];
    Serial.println(val_1);
    Serial.println(val_2);

    if (val_1 == 1)
    {
      OTAA_PERIOD = (val_2 * 1000);
    }
  }
}

void joinCallback(int32_t status)
{
  Serial.printf("Join status: %d\r\n", status);
}

void sendCallback(int32_t status)
{
  if (status == 0) {
    Serial.println("Successfully sent");
  } else {
    Serial.println("Sending failed");
  }
}

void setup()
{
  Serial.begin(115200, RAK_AT_MODE);

  Serial.println("RAKwireless LoRaWan OTAA Example");
  Serial.println("------------------------------------------------------");

  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);

  // Initialize Serial for debug output
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

  Serial.println("SCD30 Automatic self-calibration Example.");

  Wire.begin();

  //Start sensor using the Wire port and enable the auto-calibration (ASC)
  if (airSensor.begin(Wire, true) == false)
  {
    Serial.println("Air sensor not detected. Please check wiring. Freezing...");
    while (1)
    {
      delay(10);
    }
  }

  Serial.print("Automatic self-calibration set to：");
  if (airSensor.getAutoSelfCalibration() == true)
    Serial.println("true");
  else
    Serial.println("false");

  // OTAA Device EUI MSB first
  uint8_t node_device_eui[8] = OTAA_DEVEUI;
  // OTAA Application EUI MSB first
  uint8_t node_app_eui[8] = OTAA_APPEUI;
  // OTAA Application Key MSB first
  uint8_t node_app_key[16] = OTAA_APPKEY;

  if (!api.lorawan.appeui.set(node_app_eui, 8)) {
    Serial.printf("LoRaWan OTAA - set application EUI is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.appkey.set(node_app_key, 16)) {
    Serial.printf("LoRaWan OTAA - set application key is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.deui.set(node_device_eui, 8)) {
    Serial.printf("LoRaWan OTAA - set device EUI is incorrect! \r\n");
    return;
  }

  if (!api.lorawan.band.set(OTAA_BAND)) {
    Serial.printf("LoRaWan OTAA - set band is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.deviceClass.set(RAK_LORA_CLASS_A)) {
    Serial.printf("LoRaWan OTAA - set device class is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.njm.set(RAK_LORA_OTAA))	// Set the network join mode to OTAA
  {
    Serial.
	printf("LoRaWan OTAA - set network join mode is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.join())	// Join to Gateway
  {
    Serial.printf("LoRaWan OTAA - join fail! \r\n");
    return;
  }

  /** Wait for Join success */
  while (api.lorawan.njs.get() == 0) {
    Serial.print("Wait for LoRaWAN join...");
    api.lorawan.join();
    delay(10000);
  }

  if (!api.lorawan.adr.set(true)) {
    Serial.printf
	("LoRaWan OTAA - set adaptive data rate is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.rety.set(1)) {
    Serial.printf("LoRaWan OTAA - set retry times is incorrect! \r\n");
    return;
  }
  if (!api.lorawan.cfm.set(1)) {
    Serial.printf("LoRaWan OTAA - set confirm mode is incorrect! \r\n");
    return;
  }

  /** Check LoRaWan Status*/
  Serial.printf("Duty cycle is %s\r\n", api.lorawan.dcs.get()? "ON" : "OFF");	// Check Duty Cycle status
  Serial.printf("Packet is %s\r\n", api.lorawan.cfm.get()? "CONFIRMED" : "UNCONFIRMED");	// Check Confirm status
  uint8_t assigned_dev_addr[4] = { 0 };
  api.lorawan.daddr.get(assigned_dev_addr, 4);
  Serial.printf("Device Address is %02X%02X%02X%02X\r\n", assigned_dev_addr[0], assigned_dev_addr[1], assigned_dev_addr[2], assigned_dev_addr[3]);	// Check Device Address
  Serial.printf("Uplink period is %ums\r\n", OTAA_PERIOD);
  Serial.println("");
  api.lorawan.registerRecvCallback(recvCallback);
  api.lorawan.registerJoinCallback(joinCallback);
  api.lorawan.registerSendCallback(sendCallback);
}

void uplink_routine()
{
  /** Payload of Uplink */
  uint8_t data_len = 0;

  float temp = airSensor.getTemperature();
  float hum = airSensor.getHumidity();

  uint16_t co2_data = (airSensor.getCO2());
  uint16_t temperature_data = (temp) * 100;
  uint16_t humidity_data = (hum) * 100;

  collected_data[data_len++] = co2_data >> 8;
  collected_data[data_len++] = co2_data;
  collected_data[data_len++] = temperature_data >> 8;
  collected_data[data_len++] = temperature_data;
  collected_data[data_len++] = humidity_data >> 8;
  collected_data[data_len++] = humidity_data;

  Serial.println("Data Packet:");
  for (int i = 0; i < data_len; i++) {
    Serial.printf("0x%02X ", collected_data[i]);
  }
    Serial.println();

    Serial.print("co2(ppm):");
    Serial.print(co2_data);

    Serial.print(" temp(C):");
    Serial.print(temp, 2);

    Serial.print(" humidity(%):");
    Serial.print(hum, 2);

  Serial.println("");

  /** Send the data package */
  if (api.lorawan.send(data_len, (uint8_t *) & collected_data, 2, true, 1)) {
    Serial.println("Sending is requested");
  } else {
    Serial.println("Sending failed");
  }
}

void loop()
{
  static uint64_t last = 0;
  static uint64_t elapsed;

  if (airSensor.dataAvailable())
  {
    if ((elapsed = millis() - last) > OTAA_PERIOD) {
      uplink_routine();
      last = millis();
    }
  }
  else
    Serial.println("Waiting for new data");
  //Serial.printf("Try sleep %ums..", OTAA_PERIOD);
  api.system.sleep.all(OTAA_PERIOD);
  //Serial.println("Wakeup..");
}
```
:::
