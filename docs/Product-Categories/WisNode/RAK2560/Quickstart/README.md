---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK2560. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
rak_img: /assets/images/wisnode/rak2560/RAK2560.jpg
prev: ../Overview/
next: ../Installation/
tags:
  - RAK2560
  - quickstart
  - wisnode
---

# RAK2560 Quick Start Guide

## Prerequisites

### What do You Need?

Before going through each and every step on using the RAK2560 WisNode Sensor Hub module, make sure to prepare the necessary items listed below:

#### Hardware Tools

- [RAK2560 WisNode Sensor Hub](https://store.rakwireless.com/products/sensor-hub?utm_source=RAK2560WisNodeSense&utm_medium=Document&utm_campaign=BuyFromStore)
- Accessories - Sensor Probe, Probe IO, or a combination (numbers and variations depending on the use case)
- Additional accessories - Probe Cable, Probe Splitter, power supply, and others (numbers and variations depending on the use case)
- An Android or iOS mobile device with Bluetooth and NFC

#### Software

- [WisToolBox](https://docs.rakwireless.com/Product-Categories/Software-Tools/WisToolBox/WisToolBoxMobile/)

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/sensor-hub-ecosystem.jpg"
  width="80%"
  caption="Sensor Hub ecosystem"
/>

:::tip 📝 NOTE

WisNode Sensor Hub can be powered with batteries or a dedicated power adapter. It supports 2 to 4 batteries type: ER18505 3.6&nbsp;V 4000&nbsp;mAh Li-SOCl2 NON-rechargeable lithium batteries which are NOT included upon purchase.

You can supply the batteries locally or from one of the global electronics distributors:
1. [Amazon](https://www.amazon.com/EEMB-Capacity-Batteries-Rechargeable-Certified/dp/B07TTGW7XQ/ref=sr_1_1_sspa?crid=3Q1EZ9Y11KCKN&keywords=ER18505&qid=1676374193&sprefix=er18505%2Caps%2C201&sr=8-1-spons&psc=1&smid=A3JZ0E8P9D7DI&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExWFpINDM3V1VLVkdWJmVuY3J5cHRlZElkPUExMDE2MzEzMkRZWDVTQ1VaQURPRyZlbmNyeXB0ZWRBZElkPUEwOTc1NjU3QTFDVFBINFIwUjEyJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==)
2. [Mouser](https://www.mouser.bg/ProductDetail/Ultralife/ER18505?qs=zfu6fx%252B1HVV05VN8zSGKvA%3D%3D)
3. [AliExpress](https://www.aliexpress.com/item/1005004658194639.html?spm=a2g0o.productlist.main.1.7a477185fc5rOu&algo_pvid=8404268f-c97a-4f0e-b093-fea934f49acb&algo_exp_id=8404268f-c97a-4f0e-b093-fea934f49acb-0&pdp_ext_f=%7B%22sku_id%22%3A%2212000030006218882%22%7D&pdp_npi=3%40dis%21BGN%217.95%217.15%21%21%21%21%21%402102110316763743466464381d06f9%2112000030006218882%21sea%21BG%21827888164&curPageLogUid=P9xZl9592JjT)

:::

## Product Configuration

### Power On the Sensor Hub

1. Connect the Sensor Probe/Probe IO to the port of the RAK2560-Hub

:::warning ⚠️ WARNING
Do not power the Sensor Hub before connecting the sensors to avoid damage to the device.
:::

2. Use the power supply of your choice that is compatible with the device.

:::tip 📝 NOTE:
Using the 12&nbsp;V<sub>DC</sub> adapter provided with the Sensor Hub is recommended. You can also use 4 x EVE ER18505 3.6&nbsp;V Lithium 4000&nbsp;mAh battery and the voltage must be stable.
:::

### Device Configuration via WisToolBox

#### Accessing the Sensor Hub

1. Download and install the WisToolBox App on your smartphone.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/wistoolbox-app.jpg"
  width="25%"
  caption="WisToolBox App"
/>

2. Launch the app and make sure that the NFC is enabled on your mobile device and the Bluetooth is on. Press **SELECT DEVICE**.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/app-home-screen.png"
  width="25%"
  caption="App home screen"
/>

3. Select the Sensor Hub from the list of devices.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/in-app-list-of-devices.png"
  width="25%"
  caption="In-app list of devices"
/>

4. Pair your smartphone and the Sensor Hub by touching your phone to the **N** symbol on the front of the Hub and pressing **CONNECT** in the app.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/pairing-the-hub-to-your-smartphone.png"
  width="25%"
  caption="Pairing the Hub to your smartphone"
/>

5. When the NFC of the smartphone scans the device, a **Scan successful** message will appear.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/scan-successful.png"
  width="25%"
  caption="Scan successful"
/>

6. Automatic synchronization will start, wait until the process is complete.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/device-sync.png"
  width="55%"
  caption="Device syncing"
/>

:::tip 📝 NOTE:
By default, the BLE advertising of the Sensor Hub is turned off automatically if no connection is established within the 30&nbsp;seconds of availability. Connect to the RAK device immediately after powering it on or power it on again.

Some Android smartphones require GPS enabled to permit connection to BLE. When GPS is enabled, no sensitive information is used or shared with the application.
:::

#### Sensor Hub Info

When the data synchronization process is completed, you will see the **SENSOR HUB INFO** screen.

- **HARDWARE** - Product hardware version information
- **FIRMWARE** - Product software version information
- **DEVEUI** - EUI number of the device
- **HARDWARE MODEL** - Product model
- **HUB SERIAL** - The serial number of the device
- **№ SENSOR PROBES** - Number of Sensors Probes currently connected to the device
- **Documentation** - A link to the RAK Documentation center
- **Disconnect device** - Break the connection between your smartphone and the Hub

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/sensor-hub-info.jpg"
  width="25%"
  caption="Sensor Hub Info"
/>

#### LoRa and LoRaWAN Parameters

From the LORA & LORAWAN PARAMETERS screen, you can set and see all the information needed so the device can join a network server of your choice.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/lora-and-lorawan-parameters-screen.jpg"
  width="25%"
  caption="LoRa and LoRaWAN parameters screen"
/>

1. You can configure the **Join mode** and **Active region** in **Global settings**.
2. From the **Active region** menu, you can select the LoRaWAN band to be used.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/active-region-list.jpg"
  width="25%"
  caption="Active region list"
/>

3. You can see the Sensor Hub **Application EUI**, **Application Key**, and **Device EUI** that are needed to register the device in the network.
4. You can turn on/off the **Enable auto-join** and **ADR** buttons according to your preferences.
5. Press the **Join network** button, and the device will be able to access the network, assuming you registered it properly.

#### Sensor Probe

1. From the **SENSOR PROBE** screen, you can get all the information about the connected sensors.

- **Probe ID** - The ID that the Sensor Hub uses to identify the probe (until a reset is made). Value: 1~250
- **Hardware** - Probe's type version information
- **Firmware** - Probe's software version information
- **Hardware model** - Product model
- **Probe type** - RAK2560-Probe has two WisBlock slots, that allow the mount of one or two WisBlock sensor modules in the mass production phase

| Probe | Module Combination |             |          | Function           |                     |          |
| ----- | ------------------ | ----------- | -------- | ------------------ | ------------------- | -------- |
|       |                    | Temperature | Humidity | Barometer Pressure | 3-Axis Acceleration | Gas      |
| A     | RAK1901            | &#10004;    | &#10004; |                    |                     |          |
| B     | RAK1902            | &#10004;    | &#10004; | &#10004;           |                     |          |
| C     | RAK1904            |             |          |                    | &#10004;            |          |
| D     | RAK1906            | &#10004;    | &#10004; | &#10004;           |                     | &#10004; |
| AB    | RAK1901+RAK1902    | &#10004;    | &#10004; | &#10004;           |                     |          |
| AC    | RAK1901+RAK1904    | &#10004;    | &#10004; |                    | &#10004;            |          |
| BC    | RAK1902+RAK1904    | &#10004;    | &#10004; | &#10004;           | &#10004;            |          |
| CD    | RAK1904+RAK1906    | &#10004;    | &#10004; | &#10004;           | &#10004;            | &#10004; |

- **Sensor count** - The number of sensors in the probe.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/sensor-probe-screen.jpg"
  width="25%"
  caption="Sensor Probe screen"
/>

2. For each sensor, there is a dropdown menu with the option to set some parameters as well.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/sensor-parameters.jpg"
  width="25%"
  caption="Sensor parameters"
/>

- Sensor rule settings - Select the data sending rule type.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/sensor-rule-settings.jpg"
  width="25%"
  caption="Sensor rule settings"
/>

- **Sensor interval(s)** - Payload sending interval in seconds (when periodic sensor rule is used). Limit: 60~86400 seconds
- **Sensor data** - The currently fetched data value
- **Threshold (below)** - Set up sending rules
- **Threshold (above)** - Set up sending rules

3. The Sensor Probe sends data to the Sensor Hub according to established rules. Those rules are as follows:

| Name      | Bit | Description                                                                                                        |
| --------- | --- | ------------------------------------------------------------------------------------------------------------------ |
| Alert     | 0   | If below/above/between is triggered, the probe's sending interval will temporarily be changed to the min interval. |
| Below     | 1   | If the below threshold is triggered, data will be sent.                                                            |
| Above     | 2   | If the above threshold is triggered, data will be sent.                                                            |
| Periodic  | 3   | Data follows the sensor's send interval.                                                                           |
| Between   | 4   | Data is between the below and above the threshold values.                                                          |
| Different | 5   | Data is different than the last data.                                                                              |

<b> Example 1:</b>

```
Key = 0x03(Hex) = 0b00000011(Bin)
```

**0x03** will enable the **alert** and the **below** rules. If **below** is triggered, data will be sent to the Sensor Hub.

- 0b00000001 = Alert Enable
- 0b00000010 = Below Enable

<b>Example 2:</b>

```
Key = 0x08(Oct) = 0b00001000(Bin)
```

**0x08** will enable the **periodic** rule. The probe will send data according to the sensor's interval set.

- 0b00001000 = Periodic Enable

## Sensor Hub LoRaWAN Payload

###  Sensor Probe

 The RAK1901, RAK1902, RAK1904, and RAK1906 all incorporate multiple sensors integrated into a single sensor IC.

| WisBlock Module | Sensor IC | Sensor Type                         | Sensor Data Values                                                                                                                                              |
| --------------- | --------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAK1901         | SHTC3     | Temperature and humidity            | Temperature (-40°&nbsp;C to +125°&nbsp;C)<br>Humidity (0&nbsp;to&nbsp;100%&nbsp;RH)                                                                             |
| RAK1902         | KPS22HB   | Temperature and barometric pressure | Temperature (-40°&nbsp;C to +85°&nbsp;C)<br>Pressure (260&nbsp;to&nbsp;1260&nbsp;hPa)                                                                           |
| RAK1904         | LIS3DH    | 3-axis acceleration                 | 3-axis (XYZ)                                                                                                                                                    |
| RAK1906         | BME680    | Environmental                       | Temperature (-40°&nbsp;C  to 85°&nbsp;C)<br>Humidity (0&nbsp;to&nbsp;100%&nbsp;RH)<br>Pressure (300&nbsp;to&nbsp;1100 hPa)<br>Gas (0&nbsp;to&nbsp;500&nbsp;IAQ) |

The four (4) WisBlock modules will have four (4) sensor types as follows:

| Sensor      | Type | Data Size |
| ----------- | ---- | --------- |
| Temperature | 0x67 | 2         |
| Humidity    | 0x68 | 1         |
| Pressure    | 0x66 | 2         |
| 3-axis      | 0x71 | 6         |

RAK Sensor Type is 1&nbsp;Byte, which uses the IPSO Object ID minus 3200 in the below conversion rule:

```
RAK_DATA_TYPE = IPSO_OBJECT_ID - 3200
```

| Type                   | IPSO ID | RAK Data Type (Decimal) | RAK Data Type (Hex) | Data Size | Data Resolution per Bit          |
| ---------------------- | ------- | ----------------------- | ------------------- | --------- | -------------------------------- |
| Temperature sensor     | 3303    | 103                     | 0x67                | 2         | 0.1°&nbsp;C Signed MSB           |
| Humidity sensor        | 3304    | 104                     | 0x68                | 1         | 0.1% Unsigned                    |
| Accelerometer (3-Axis) | 3313    | 113                     | 0x71                | 6         | 0.001&nbsp;G Signed MSB per axis |
| Barometer (Pressure)   | 3315    | 115                     | 0x73                | 2         | 0.1&nbsp;hPa Unsigned MSB        |