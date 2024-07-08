# BLE Scanner

## Prerequisite

Before compiling the **RUI3 BLE Examples**, you must check the procedures described in the Prerequisite section of [RAK4631-R QuickStart Guide](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#prerequisite).
You will also need to install and configure the Arduino IDE, as described in the RAK4631-R [Software](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#software) section.

## Loading the Example

The project is available on Arduino IDE **RAK WisBlock RUI Examples**.

1. Launch Arduino IDE then go to: **File** -> **Examples** -> **RAK WisBlock RUI examples** -> **Example** -> **BLE_Scanner**. 

<rk-img
  src="/assets/images/rui3/ble_examples/ble-scan-arduino.png"
  width="100%"
  caption="RAK WisBlock RUI BLE configuration example"
/>

2. Once the example code is open, you can now select the correct serial port, as shown in **Figure 2**.

<rk-img
  src="/assets/images/rui3/ble_examples/arduino-port.png"
  width="100%"
  caption="Selecting the correct serial port"
/>

3. The last step is to upload the code by clicking the highlighted **Upload** icon.

<rk-img
  src="/assets/images/rui3/ble_examples/scan-upload.png"
  width="100%"
  caption="Uploading the BLE scanner example code"
/>

4. You should now be able to see the project logs on the serial monitor of Arduino IDE.

The log shows details of nearby BLE Devices: **MAC Address**, **RSSI**, and **raw BLE data**.

<rk-img
  src="/assets/images/rui3/ble_examples/scan-log.png"
  width="100%"
  caption="Serial monitor BLE scan log"
/>

## Example Details

This sketch shows how to scan BLE devices using [RUI3 BLE API](/RUI3/BLE/).
