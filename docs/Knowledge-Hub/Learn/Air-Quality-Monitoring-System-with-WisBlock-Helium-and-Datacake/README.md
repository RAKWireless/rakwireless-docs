---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/air-quality-monitoring-system.png
rak_desc: A step-by-step guide on how to build a WisBlock air quality monitoring system with Helium and Datacake.
tags:
  - Air Quality Monitoring
  - RAK3172 EVB
  - RAK12047
  - RAK1901
  - RAKBox-B3 Indoor Enclosure
  - RAKwireless Helium Hotspot
  - VOC Sensor
  - Helium
  - Datacake
  - WisBlock
  - WisDuo
  - Tutorial
header:
  title: Air Quality Monitoring System with WisBlock, Helium, and Datacake
  caption: by <b>Bernd Giesecke</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 20/12/2022 09:00 PM
---

# Air Quality Monitoring System with WisBlock, Helium, and Datacake

## Overview

A healthy environment is essential for our well-being. This includes the air around you. So, how will you know if the air around you is clean and good, or if it is time to open a window and let some fresh air in?

With a few modules from our WisDuo and WisBlock product lines, it is easy to detect bad environmental conditions.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/01.air-monitor.png" width="80%">
</p>

## How Does It Work

One option to measure the quality of the air is to measure the concentration of volatile organic compounds (VOC). With the measured values of the Sensirion SGP40 and the Sensirion SHTC3, the Sensirion VOC algorithm calculates the VOC index from 0 to 500.

With the new [WisBlock RAK12047 VOC Sensor](https://store.rakwireless.com/products/rak12047-voc-sensor-sensirion-sgp40?utm_source=RAK12047&utm_medium=Document&utm_campaign=BuyFromStore), you can easily build a sensor system for your home or office that measures the VOC index of the air. Based on the Sensirion SGP40 and using the [Sensirion Gas Index Algorithm](https://github.com/Sensirion/gas-index-algorithm), it is just **Click-Code-Connect** to build an [air quality sensor](https://store.rakwireless.com/products/wisblock-kit-4-air-quality-monitor).

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/02.voc-sensor.png" width="100%">
</p>

The collected sensor data is transmitted over the Helium network to the Helium Console and then forwarded to the data processing tool **[Datacake](https://app.datacake.de/dashboard/d/c5320599-56ed-4818-9d53-e677e8a03561)**.

In Datacake, the sensor values are not only visualized but also analyzed. A warning is sent to you if the VOC index indicates an air quality level that is not good for your health.

The sensor can be battery-powered and send the data every 2 minutes (configurable).

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/03.voc-sensor-opened.png" width="50%">
</p>

On Datacake, the received values are visualized.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/4.datacake-dashboard.png" width="100%">
</p>

## Requirements

To create your air quality sensor system, you need the following:

### Hardware

- [RAK3172 EVB](https://store.rakwireless.com/products/evaluation-board-rak3172-e?utm_source=RAK3172EvaluationBoard&utm_medium=Document&utm_campaign=BuyFromStore) - Evaluation Board with the low power RAK3172 based on the STM32WL5 MCU
- [RAK12047](https://store.rakwireless.com/products/rak12047-voc-sensor-sensirion-sgp40?utm_source=RAK12047&utm_medium=Document&utm_campaign=BuyFromStore) - VOC module with the Sensirion SGP40 sensor
- [RAK1901](https://store.rakwireless.com/products/rak1901-shtc3-temperature-humidity-sensor?utm_source=RAK1901&utm_medium=Document&utm_campaign=BuyFromStore) - Temperature and Humidity module with the Sensirion SHTC3 sensor
- [RAKBox-B3 Indoor Enclosure](https://store.rakwireless.com/products/rakbox-b3-indoor-enclosure?utm_source=WisBlockRAKBox-B2Enclosure&utm_medium=Document&utm_campaign=BuyFromStore) - Rated IP20 for indoor Industrial IoT Application matching WisBlock form factor board
- [RAKwireless Helium Hotspot](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore) - a Helium Hotspot or nearby Helium Hotspots in range

### Software

- [VOC Sensor Application](https://github.com/beegee-tokyo/RUI3-RAK12047-Air-Quality) source code
- [Helium Console](https://console.helium.com/) access
- [Datacake](https://datacake.co/) account


## How Does the Data Flow

The WisBlock VOC sensor reads data every 10&nbsp;seconds (configurable) from the RAK12047 sensor module. It sends the sensor readings to the Sensirion Gas Index Algorithm, which calculates them along with the RAK1901 sensor's temperature and humidity values. The algorithm then generates a VOC index ranging from 0 to 500, indicating the quality of the surrounding air, with 100 being good and 500 being bad.

The calculated VOC index is then sent over the Helium Network every 2 minutes (configurable). The Helium Console registers the VOC sensor device and creates a flow to the Datacake integration. When a data packet containing sensor data arrives, the Helium Console forwards it to Datacake.

In Datacake, we configure the device and the visualization dashboard to view the measured values. In addition, a rule is created that sends an alarm message if the VOC index exceeds a certain level. This rule sends you an email with a warning about the poor air quality.

## How to Build It

### Set Up the Sensor Device

We are using the RAK3172-E Evaluation Board, which comes with the RAK5005-O Base Board. The Base Board has four sensor slots, and we place the RAK1901 and RAK12047 sensor modules in slots A and B.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/05.sensor-mounting.png" width="70%">
</p>

### Get the Sources

Next, we are downloading the application firmware for RAK3172. The application firmware is based on the RUI3 API, and the source code is available on [GitHub](https://github.com/beegee-tokyo/RUI3-RAK12047-Air-Quality).

The guides on how to compile the application firmware and upload the code can be found in the [RAKwireless Documentation Center](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Quickstart/#rak3172-e-as-a-stand-alone-device-using-rui3).

### Set Up the Sensor Node

After the firmware is loaded to the RAK3172, set up the LoRaWAN credentials and other settings over the USB connection with AT commands.

Get the LoRaWAN credentials. The first one is the **DevEUI**, which is printed on the label of the RAK3172.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/06.rak3172-module.png" width="30%">
</p>

### Set Up the Sensor Node in Helium

The next two will be provided by the Helium Console. Log in to the Helium Console and register a new device to obtain the required AppEUI and AppKey.

Go to the **Devices** tab and click the **new device** icon

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/7a.helium-create-device.png" width="80%">
</p>

Replace the Dev EUI with the RAK3172's Dev EUI and copy the App EUI and App Key (shown values are examples and should not be used).

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/7b.helium-create-device.png" width="80%">
</p>

:::tip 📝 NOTE:
After creating a new device, it will take several minutes before it is registered and can be used. Until then, the new device is labeled **Pending**:

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/7c.helium-create-device.png" width="90%">
</p>
:::

### Finish the Setup of the Sensor Node

Set up the credentials in RAK3172 using the AT command interface. Connect the evaluation board with the USB cable and start the RAK Serial Tool (or any other serial terminal application on your computer). Select the COM port and 115200 as the baud rate.

Only six commands are required for the setup. Shown values below are examples and should not be reused.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/8.setup-credentials-and-band.png" width="90%">
</p>

| Command                                      | Meaning                             |
| -------------------------------------------- | ----------------------------------- |
| `AT+NJM=1`                                   | Set LoRaWAN network mode            |
| `AT+DEVEUI=6081F940FA1A71C5`                 | Set Device EUI                      |
| `AT+APPEUI=6081F9C372FCDB36`                 | Set Application EUI                 |
| `AT+APPKEY=1B1FD3CA8F9D54D1FF4579063121BA5F` | Set Application Key                 |
| `AT+BAND=10`                                 | Set LoRaWAN region (frequency band) |
| `AT+JOIN=1:1`                                | Start network join process          |


The complete AT command manual can be found in our [RUI3 Documentation Center](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/#overview).

For the `AT+BAND` command, it depends on the country you live in because LoRaWAN uses different frequency bands for different countries.

Here is an overview:

| Band | Region Name | Region        |
| ---- | ----------- | ------------- |
| 0    | EU433       | Europe        |
| 1    | CN470       | China         |
| 2    | RU864       | Russia        |
| 3    | IN865       | India         |
| 4    | EU868       | Europe        |
| 5    | US915       | North America |
| 6    | AU915       | Australia     |
| 7    | KR920       | South Korea   |
| 8    | AS923-1     | Asia          |
| 9    | AS923-2     | Asia          |
| 10   | AS923-3     | Asia          |
| 11   | AS923-4     | Israel        |

And then, the frequency for the packet transfer needs to be set up. For this, a custom AT command is defined in the code.

**`ATC+SENDFREQ`**

This AT command expects the time interval in seconds between two data packets. The time is stored in the device's flash memory, and it is only necessary to set the time once. To save battery life, the frequency should not be too frequent. Every two minutes is a good time interval.

```
ATC+SENDFREQ=120
OK
```

Now, the VOC sensor will send its data every 2&nbsp;minutes.

Once we've configured the device and registered it in the Helium Console, it can join the network and begin sending sensor data. You will see in the Helium Console the incoming data packets.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/9.helium-data.png" width="100%">
</p>

Once this is achieved the data flow in the Helium Console needs to be setup.

### Set Up Helium Data Flow

1. We need an encoder for the incoming data. To make things easier, a matching decoder is available in the same GitHub repository as the source codes. The [Helium-Ext-LPP-Decoder.js] (https://github.com/beegee-tokyo/RUI3-RAK12047-Air-Quality/tree/main/decoders) can be found in the decoders folder.

2. You can use this decoder in the Helium Console by creating a new Function. Go to the **Functions** tab and click **New Function**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/010.helium-function.png" width="100%">
</p>

3. In Step 1, give the function a name. For this case, **Ext-Lpp-Decoder**. Select the function **Decoder**, and then the type is **Custom Script**. After that, the window will extend and you will see an example decoder function.

4. In Step 2, overwrite this example with the javascript from [Helium-Ext-LPP-Decoder.js](https://github.com/beegee-tokyo/RUI3-RAK12047-Air-Quality/tree/main/decoders).

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/11.helium-decoder.png" width="100%">
</p>

5. To send the data from the Helium Console to Datacake, we need to create an Integration. Go to the **Integrations** tab, select the add New Integration icon, and then click **Datacake** Integration.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/12.helium-integration.png" width="100%">
</p>

6. In the next window click on **Add Integration**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/13.add-integration.png" width="100%">
</p>

- Enter the Datacake Token (Datacake URL), and give the integration a name.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/14.datacake-token.png" width="100%">
</p>

That’s all on the Helium Console. The next steps are on the Datacake Console.

### Set Up Datacake

- If you do not yet have a Datacake account, you can create one for free at [Datacake](https://datacake.co/) to visualize a limited number of sensor nodes.

- In the Datacake Console, go to **Devices** and click on **+ Add Device**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/15.add-device.png" width="100%">
</p>

- Choose LoRaWAN from the opening window and click **Next**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/016.next.png" width="60%">
</p>

- In the next window, choose **New Product**. Give it a product name, and click **Next**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/17.new-product.png" width="60%">
</p>

- Then, select **Helium** Network and click **Next**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/018.helium-network.png" width="60%">
</p>

- In the **DEVEUI** field, enter the device EUI and give the device a **NAME**. Then click **Next**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/019.eui-next.png" width="60%">
</p>

- If this is your first Datacake device, you can select the **Free** plan and then click **Create**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/020.select-free-plan.png" width="60%">
</p>

- Now that you have created the device, open it from the **Devices** tab.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/21.open-devices.png" width="60%">
</p>

- At first, there will be an empty dashboard because we need to configure the device. To proceed, click **Configuration**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/22.configuration.png" width="100%">
</p>

- In the **Configuration** tab, scroll down until you see the **Payload Decoder**. Overwrite the example decoder with the content of [Datacake-Ext-LPP-Decoder.js](https://github.com/beegee-tokyo/RUI3-RAK12047-Air-Quality/tree/main/decoders) from the decoders folder.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/23.payload-decoder.png" width="100%">
</p>

- Scroll further down until you see the section **Fields**. Use the **+ Add Field** button to add the following data fields:

| Name                        | Identifier    | Type    |
| --------------------------- | ------------- | ------- |
| Gas resistance RAK1906      | ANALOG_IN_9   | Float   |
| Barometric Pressure RAK1906 | BAROMETER_8   | Float   |
| Humidity RAK1906            | HUMIDITY_6    | Float   |
| Temperature RAK1906         | TEMPERATURE_7 | Float   |
| VOC RAK12047                | VOC_16        | Integer |
| Battery                     | VOLTAGE_1     | Float   |

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/24.add-field.png" width="100%">
</p>

Don’t forget to push the **Save** button after updating each configuration section.

- Open the **Debug** tab and check if the data from the sensor is arriving and being decoded correctly.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/25.debug.png" width="100%">
</p>

- To visualize the incoming data, open the **Dashboard** and click the edit icon on the right side. The setup of the visualization widgets is very simple, so only the setup of the first widget is shown.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/26.edit-widget.png" width="100%">
</p>

- After clicking **Add Widget**, select **Chart** in the opening window.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/27.chart.png" width="60%">
</p>

- In the **Basic** tab, give the widget a name, and in the **Data** tab, choose the field to display.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/28.basic-data.png" width="100%">
</p>

- In the **Axes** tab, you can specify where the axis data should be displayed, and in the **Timeframe** tab, you can specify the time range for the data to be displayed.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/29.axes.png" width="100%">
</p>

- To complete the first widget, click the **Save** button. I created a few of these widgets to display the various data from the WisBlock VOC sensor node.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/30.widgets.png" width="100%">
</p>

- Push the edit icon on the right side to save your dashboard.

- To receive notifications if the VOC index is showing bad air around the sensor, we use the **Rules** function of Datacake. Click **Rules** to view the defined rules, then click **Add Rule**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/31.add-rule.png" width="100%">
</p>

- Click **Please Choose**, and select your device. Then, click **Field**, and select **VOC RAK12047**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/32.please-choose.png" width="60%">
</p>

- Change the criteria to **larger than or equal to**. Choose the value you want the warning to be sent out at and set the hysteresis.
- The warning can be sent via email, SMS, or by initiating a downlink. For this case, email was chosen. In the email text, you can use placeholders to add the measured value of the VOC sensor.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/33.larger-email.png" width="100%">
</p>

Now, everything is ready, and you will be informed if it is time to open the windows and get some fresh air. Below is a sample email I received to do so.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-air-quality-monitoring-system-with-helium-and-datacake/34.email-fresh-air.png" width="100%">
</p>
