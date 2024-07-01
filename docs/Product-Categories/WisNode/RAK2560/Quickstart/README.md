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

### What Do You Need?

Before going through each and every step of using the RAK2560 WisNode Sensor Hub module, make sure to prepare the necessary items listed below:

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

WisNode Sensor Hub can be powered with batteries or a dedicated power adapter. It supports 2 to 4 battery types: ER18505 3.6&nbsp;V 4000&nbsp;mAh Li-SOCl2 NON-rechargeable lithium batteries which are NOT included upon purchase.

You can source the batteries locally or from one of the global electronics distributors:
1. [Amazon](https://www.amazon.com/EEMB-Capacity-Batteries-Rechargeable-Certified/dp/B07TTGW7XQ/ref=sr_1_1_sspa?crid=3Q1EZ9Y11KCKN&keywords=ER18505&qid=1676374193&sprefix=er18505%2Caps%2C201&sr=8-1-spons&psc=1&smid=A3JZ0E8P9D7DI&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExWFpINDM3V1VLVkdWJmVuY3J5cHRlZElkPUExMDE2MzEzMkRZWDVTQ1VaQURPRyZlbmNyeXB0ZWRBZElkPUEwOTc1NjU3QTFDVFBINFIwUjEyJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==)
2. [Mouser](https://www.mouser.bg/ProductDetail/Ultralife/ER18505?qs=zfu6fx%252B1HVV05VN8zSGKvA%3D%3D)
3. [AliExpress](https://www.aliexpress.com/item/1005004658194639.html?spm=a2g0o.productlist.main.1.7a477185fc5rOu&algo_pvid=8404268f-c97a-4f0e-b093-fea934f49acb&algo_exp_id=8404268f-c97a-4f0e-b093-fea934f49acb-0&pdp_ext_f=%7B%22sku_id%22%3A%2212000030006218882%22%7D&pdp_npi=3%40dis%21BGN%217.95%217.15%21%21%21%21%21%402102110316763743466464381d06f9%2112000030006218882%21sea%21BG%21827888164&curPageLogUid=P9xZl9592JjT)

:::

## Product Configuration

### Power On the Sensor Hub

1. Connect the Sensor Probe/Probe IO to the port of the RAK2560-Hub.

:::warning ⚠️ WARNING
Do not power the Sensor Hub before connecting the sensors to avoid damage to the device.
:::

:::tip 📝 NOTE:
If the Sensor Probe with Temperature, Humidity, and Pressure is used (RAK1901+RAK1902), there will be two temperature values in the WisToolBox. Due to the different accuracy of the temperature sensors, the values might be different.
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

3. Select the connection mode to pair the device.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/connection_mode.png"
  width="25%"
  caption="Connection mode"
/>

4. Select the Sensor Hub from the list of devices.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/in-app-list-of-devices.png"
  width="25%"
  caption="In-app list of devices"
/>

5. Pair your smartphone and the Sensor Hub by touching your phone to the **N** symbol on the front of the Hub and pressing **CONNECT** in the app. Retain the position of the smartphone touching the **N** symbol on the Hub and wait until the scan is done.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/pairing-the-hub-to-your-smartphone-ready-to-scan.png"
  width="50%"
  caption="Pairing the Hub to your smartphone"
/>

<!-- <rk-img
  src="/assets/images/wisnode/rak2560/quickstart/pairing-the-hub-to-your-smartphone.png"
  width="25%"
  caption="Pairing the Hub to your smartphone"
/>

6. Place your phone on the **N** Symbol on the Sensor Hub to pair it.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/ready-to-scan.png"
  width="25%"
  caption="Ready to Scan"
/> -->

6. Once the scan is done, a **Scan successful** message will appear.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/scan-successful.png"
  width="25%"
  caption="Scan successful"
/>

7. Automatic synchronization will start, wait until the process is complete.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/device-sync.png"
  width="75%"
  caption="Device syncing"
/>

:::tip 📝 NOTE:
By default, the BLE advertising of the Sensor Hub is turned off automatically if no connection is established within 30&nbsp;seconds of availability. Connect to the RAK device immediately after powering it on again.
<!-- or power it on again. -->

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
  src="/assets/images/wisnode/rak2560/quickstart/sensor-hub-info.png"
  width="25%"
  caption="Sensor Hub Info"
/>

#### LoRa and LoRaWAN Parameters

In the **LORA & LORAWAN PARAMETERS** tab, you can set and see all the information needed so the device can join a network server of your choice.

1. Configure the **Join mode** and **Active region** in **Global settings**.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/lora-and-lorawan-parameters-screen.png"
  width="25%"
  caption="LoRa and LoRaWAN parameters screen"
/>

2. In the **Active region** menu, select the LoRaWAN band to be used.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/active-region-list.png"
  width="25%"
  caption="Active region list"
/>

3. You can see the Sensor Hub **Application EUI**, **Application Key**, and **Device EUI** that are needed to register the device in the network.
4. You can turn on/off the **Enable auto-join** and **ADR** buttons according to your preferences.
5. Press the **Join network** button, and the device will be able to access the network, assuming you registered it properly.

#### Sensor Probe

1. In the **SENSOR PROBE** screen, you can get all the information about the connected sensors.

- **Probe ID** - The ID that the Sensor Hub uses to identify the probe (until a reset is made). Value: 1~250
- **Hardware** - Probe's type version information
- **Firmware** - Probe's software version information
- **Hardware model** - Product model
- **Probe type** - RAK2560-Probe has two WisBlock slots that allow the mount of one or two WisBlock sensor modules in the mass production phase.
- **Sensor count** - The number of sensors in the probe.

The table shows the probe, module combination, and functionalities.

| Probe | Module Combination |             |          | Function            |                     |          |
| :---: | :----------------: | :---------: | :------: | :-----------------: | :-----------------: | :------: |
|       |                    | Temperature | Humidity | Barometric Pressure | 3-Axis Acceleration | Gas      |
| A     | RAK1901            | &#10004;    | &#10004; |                     |                     |          |
| B     | RAK1902            | &#10004;    | &#10004; | &#10004;            |                     |          |
| C     | RAK1904            |             |          |                     | &#10004;            |          |
| D     | RAK1906            | &#10004;    | &#10004; | &#10004;            |                     | &#10004; |
| AB    | RAK1901+RAK1902    | &#10004;    | &#10004; | &#10004;            |                     |          |
| AC    | RAK1901+RAK1904    | &#10004;    | &#10004; |                     | &#10004;            |          |
| BC    | RAK1902+RAK1904    | &#10004;    | &#10004; | &#10004;            | &#10004;            |          |
| CD    | RAK1904+RAK1906    | &#10004;    | &#10004; | &#10004;            | &#10004;            | &#10004; |



<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/synchronization-in-progress.png"
  width="25%"
  caption="Synchronization in progress"
/>

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/sensor-probe-screen.png"
  width="25%"
  caption="Sensor Probe screen"
/>

2. Each sensor has a dropdown menu with the option to set some parameters as well.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/sensor-parameters.png"
  width="25%"
  caption="Sensor parameters"
/>

- **Detailed sensor settings** - Configure the parameter for sending the data.

<rk-img
  src="/assets/images/wisnode/rak2560/quickstart/sensor-rule-settings.png"
  width="25%"
  caption="Detailed sensor settings"
/>

- **Sensor data** - The currently fetched data value
- **Toogle button sensor data changes** - Send data if there is any change in the sensor value
- **Sensor interval(s)** - Payload sending interval in seconds (when periodic sensor rule is used). Limit: 60~86400 seconds
- **Toogle button for periodic uplink** - Sends data in the time interval configured
- **Lower Threshold** - Set up the lower value for the sending rules
- **Upper Threshold** - Set up the upper value for the sending rules

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

## Sensor Hub LoRaWAN Payload and NB IoT JSON Format

###  Sensor Probe

 The RAK1901, RAK1902, RAK1904, and RAK1906 all incorporate multiple sensors integrated into a single sensor IC.

| WisBlock Module | Sensor IC | Sensor Type                         | Sensor Data Values                                                                                                                                             |
| :-------------: | :-------: | :---------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| RAK1901         | SHTC3     | Temperature and Humidity            | Temperature (-40°&nbsp;C to +125°&nbsp;C)<br>Humidity (0&nbsp;to&nbsp;100%&nbsp;RH)                                                                            |
| RAK1902         | KPS22HB   | Temperature and Barometric Pressure | Temperature (-40°&nbsp;C to +85°&nbsp;C)<br>Pressure (260&nbsp;to&nbsp;1260&nbsp;hPa)                                                                          |
| RAK1904         | LIS3DH    | 3-Axis Acceleration                 | 3-Axis (XYZ)                                                                                                                                                   |
| RAK1906         | BME680    | Environmental                       | Temperature (-40°&nbsp;C to 85°&nbsp;C)<br>Humidity (0&nbsp;to&nbsp;100%&nbsp;RH)<br>Pressure (300&nbsp;to&nbsp;1100 hPa)<br>Gas (0&nbsp;to&nbsp;500&nbsp;IAQ) |

The four (4) WisBlock modules will have four (4) sensor types as follows:

| Sensor      | Type | Data Size |
| :---------: | :--- | :-------: |
| Temperature | 0x67 | 2         |
| Humidity    | 0x68 | 1         |
| Pressure    | 0x66 | 2         |
| 3-axis      | 0x71 | 6         |

RAK Sensor Type is 1&nbsp;Byte, which uses the IPSO Object ID minus 3200 in the below conversion rule:

```
RAK_DATA_TYPE = IPSO_OBJECT_ID - 3200
```

| Type                   | IPSO ID | RAK Data Type (Decimal) | RAK Data Type (Hex) | Data Size | Data Resolution per Bit     | Sensor Hub NB IoT Json |
| ---------------------- | ------- | ----------------------- | ------------------- | --------- | --------------------------- | ---------------------- |
| Temperature sensor     | 3303    | 103                     | 0x67                | 2         | 0.1° C Signed MSB           | "Temperature"          |
| Humidity sensor        | 3304    | 104                     | 0x68                | 1         | 0.1% Unsigned               | "Humidity"             |
| Accelerometer (3-Axis) | 3313    | 113                     | 0x71                | 6         | 0.001 G Signed MSB per axis | "Accelerometer"        |
| Barometer (Pressure)   | 3315    | 115                     | 0x73                | 2         | 0.1 hPa Unsigned MSB        | "Barometer"            |

### RAKwireless Standardized Payload Decoder

On [GitHub,](https://github.com/RAKWireless/RAKwireless_Standardized_Payload/blob/main/RAKwireless_Standardized_Payload.js) you can find a standard version of the decoder that works with all solutions.

### Sensor Probe IO

| Type                                                   | IPSO ID | RAK Data Type (Decimal) | RAK Data Type (HEX) | Data Size | Data Resolution per Bit                                      | Sensor Hub NB IoT Json                                       |
| ------------------------------------------------------ | ------- | ----------------------- | ------------------- | --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Digital Input                                          | 3200    | 0                       | 0x00                | 1         | (ON/OFF)                                                     | "Digital-Input"                                              |
| Digital  Output                                        | 3201    | 1                       | 0x01                | 1         | (ON /  OFF)                                                  | "Digital-Output"                                             |
| Analog  Input                                          | 3202    | 2                       | 0x02                | 2         | 0.01mA(V),  Min: 0.0, MAX: 655.35                            | "Analog-Input"                                               |
| Nitrogen                                               | 3216    | 16                      | 0x10                | 2         | 1mg/Kg,  Min: 0, MAX: 65535                                  | "NITROGEN"                                                   |
| Phosphorus                                             | 3217    | 17                      | 0x11                | 2         | 1mg/Kg,  Min: 0, MAX: 65535                                  | "PHOSPHORUS"                                                 |
| Potassium                                              | 3218    | 18                      | 0x12                | 2         | 1mg/Kg,  Min: 0, MAX: 65535                                  | "POTASSIUM"                                                  |
| Salinity                                               | 3219    | 19                      | 0x13                | 2         | 1mg/L,  Min: 0, MAX: 65535                                   | "SALINITY"                                                   |
| Dissolved  oxygen (DO)                                 | 3220    | 20                      | 0x14                | 2         | 0.01mg/L,  Min: 0.0, MAX: 655.35                             | "Dissolved-Oxygen"                                           |
| Oxidation  Reduction Potential (ORP)                   | 3221    | 21                      | 0x15                | 2         | 0.1mv  sign                                                  | "ORP"                                                        |
| Chemical  Oxygen Demand (COD)                          | 3222    | 22                      | 0x16                | 2         | 1mg/L,  Min: 0, MAX: 65535                                   | "COD"                                                        |
| Turbidity                                              | 3223    | 23                      | 0x17                | 2         | 1NTU,  Min: 0, MAX: 65535                                    | "Turbidity"                                                  |
| NO3                                                    | 3224    | 24                      | 0x18                | 2         | 0.1ppm,  Min: 0.0, MAX: 6553.5                               | "NO3"                                                        |
| NH4+                                                   | 3225    | 25                      | 0x19                | 2         | 0.01ppm,  Min: 0.0, MAX: 655.35                              | "NH4PULS"                                                    |
| Biochemical  oxygen demand (BOD)                       | 3226    | 26                      | 0x1A                | 2         | 1mg/L,  Min: 0, MAX: 65535                                   | "BOD"                                                        |
| Illuminance                                            | 3301    | 101                     | 0x65                | 4         | 1Lux,  Min: 0, MAX:4294967295                                | "Illuminance"                                                |
| Presence                                               | 3302    | 102                     | 0x66                | 1         | (Yes/No)                                                     | "Presence"                                                   |
| Temperature                                            | 3303    | 103                     | 0x67                | 2         | 0.1°C, Min: -3276.8, MAX:3276.7                              | "Temperature"                                                |
| Humidity  Sensor     Soil Humidity      SCD30 humidity | 3304    | 104                     | 0x68                | 1         | 1%RH  Unsigned                                               | "Humidity"                                                   |
| Air  Quality Index                                     | 3305    | 105                     | 0x69                | 2         | 1  Unsigned MSB     1, Min: 0, MAX: 65535                    | "GAS"                                                        |
| Humidity                                               | 3312    | 112                     | 0x70                | 2         | 0.1%,  Min: 0.0, MAX:100.0                                   | "High-Precise-Humidity"                                      |
| Accelerometer  (3-Axis)                                | 3313    | 113                     | 0x71                | 6         | 0.001 G  Signed MSB per axis                                 | "Accelerometer"                                              |
| Pressure                                               | 3315    | 115                     | 0x73                | 2         | 0.1hPa, Min: 0.0, MAX: 6553.5                                | "Barometer"                                                  |
| Battery  Level (Battery Voltage)                       | 3316    | 116                     | 0x74                | 2         | 0.01V,  Min: 0.0, MAX: 655.35                                | "BatteryValue"                                               |
| Precipitation                                          | 3317    | 117                     | 0x77                | 2         | 1mm/h,  Min: 0, MAX: 65535                                   | "Precipitation"                                              |
| Percentage                                             | 3320    | 120                     | 0x78                | 1         | 1%, Min: 0, Max:100                                          | "Percentage"                                                 |
| CO2 concentration                                      | 3325    | 125                     | 0x7D                | 2         | 1ppm,  Min: 0, MAX: 65535                                    | "CO2"                                                        |
| EC                                                     | 3392    | 192                     | 0xC0                | 2         | 0.001mS/cm,  Min: 0.0, Max:65.535                            | "EC"                                                         |
| EC                                                     | 3327    | 127                     | 0x7F                | 4         | 0.001uS/cm,  Min: 0.0, Max:4294967.295                       | "High-Precision-EC"                                          |
| Distance                                               | 3330    | 130                     | 0x82                | 4         | 0.001 m                                                      | "Distance"                                                   |
| VOC                                                    | 3338    | 138                     | 0x8A                | 2         | 1, Min:  0, MAX: 65535                                       | "VOC"                                                        |
| Wind  Speed                                            | 3346    | 146                     | 0x92                | 2         | 0.01m/s,  Min: 0.0, MAX: 655.35                              | "GustWindSpeed"                                              |
| Strikes                                                | 3347    | 147                     | 0x93                | 2         | 1, Min:  0, MAX: 65535                                       | "Strikes"                                                    |
| Capacity                                               | 3384    | 184                     | 0xB8                | 1         | 1%RH,  Min: 0, MAX: 100                                      | "Capacity"                                                   |
| DC  Current                                            | 3385    | 185                     | 0xB9                | 2         | 0.01A,  Min: -327.68, MAX: 327.67                            | "DC_Current"                                                 |
| DC  Voltage                                            | 3386    | 186                     | 0xBA                | 2         | 0.01V,  Min: 0.0, MAX: 655.35                                | "DC_Voltage"                                                 |
| Moisture                                               | 3388    | 188                     | 0xBC                | 2         | 0.1%,  Min:0.0, Max:100.0                                    | "Moisture"                                                   |
| Wind  Speed                                            | 3390    | 190                     | 0xBE                | 2         | 0.01m/s,  Min: 0.0, MAX: 655.35                              | "Wind-Speed"                                                 |
| Wind  Direction (0o -  North)                          | 3391    | 191                     | 0xBF                | 2         | 1o , in 0~359o                                               | "Wind-Direction"                                             |
| pH                                                     | 3393    | 193                     | 0xC1                | 2         | 0.01,  Min: 0.0, MAX: 655.35                                 | "High_Precision_PH"                                          |
| Normal  Precision pH                                   | 3394    | 194                     | 0xC2                | 2         | 0.1 pH                                                       | "PH"                                                         |
| Pyranometer                                            | 3395    | 195                     | 0xC3                | 2         | 1  unsigned MSB (W/m2)                                       | "PYRANOMETER"                                                |
| PM10                                                   | 3427    | 227                     | 0xE3                | 2         | 1ug/m3, Min: 0, MAX: 65535                                   | "PM10"                                                       |
| PM2.5                                                  | 3428    | 228                     | 0xE4                | 2         | 1ug/m3,  Min: 0, MAX: 65535                                  | "PM2.5"                                                      |
| Noise                                                  | 3433    | 233                     | 0xE9                | 2         | 0.1dB,  Min: 0.0, MAX: 6553.5                                | "Noise"                                                      |
| Orientation                                            | 3429    | 229                     | 0xE5                | 2         | 0.1°,  Min: -90.0, MAX: 90.0                                 | "ORIENTATION"                                                |
| Raw Data  in Binary (Modbus ADU)                       | 3441    | 241                     | 0xF1                | /         |                                                              | TLV  format binary raw data     for Modbus, RS232 or     other specific data format     "BinaryRaw" (NBIOT Json  Mode) |
| Binary2byte                                            | 3443    | 243                     | 0xF3                | 2         | Modbus  content                                              | “Raw2byte”                                                   |
| Binary4byte                                            | 3424    | 224                     | 0xF4                | 4         | Modbus  content                                              | “Raw4byte”                                                   |
| Generic  Float (IEEE754)                               | 3445    | 245                     | 0xF5                | 4         |                                                              | “Float”                                                      |
| Generic  Integer (32bit)                               | 3446    | 246                     | 0xF6                | 4         | Min:  -2147483648, Max: 2147483647                           | “Int32”                                                      |
| Generic  Unsigned Integer (32bit)                      | 3447    | 247                     | 0xF7                | 4         | Min: 0,  Max: 4294967295                                     | "uInt32”                                                     |
| Raw Data  in Binary                                    | 3448    | 248                     | 0xF8                | /         | TLV  format binary raw data     “BinaryTLV” (NBIOT Json Mode) | “BinaryTLV”                                                  |

## Configuring Sensor Hub for LoRaWAN Usage

In this video, you can learn how to visualize your Sensor Hub data in Datacake using a WisGate Edge Gateway and TTN.

<div align="center">

[![Send your Sensor Hub data to Datacake using TTN and WisGate Edge](http://img.youtube.com/vi/9vMRT_G1tFI/0.jpg)](https://www.youtube.com/watch?v=9vMRT_G1tFI "Send your Sensor Hub data to Datacake using TTN and WisGate Edge")

</div>

:::tip 📝 NOTE:
This YouTube tutorial covers the Weather Station, but the basics apply to all solutions.
:::