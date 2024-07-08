# BLE Beacon Custom Payload

## Prerequisite

Before compiling the **RUI3 BLE Examples**, you must check the procedures described in the Prerequisite section of [RAK4631-R QuickStart Guide](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#prerequisite).
You will also need to install and configure the Arduino IDE, as described in the RAK4631-R [Software](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#software) section.

## Loading the Example

The project is available on Arduino IDE **RAK WisBlock RUI Examples**. 

1. Launch Arduino IDE then go to: **File** -> **Examples** -> **RAK WisBlock RUI Examples** -> **Example** -> **BLE_Beacon_Custom_Payload**.

<rk-img
  src="/assets/images/rui3/ble_examples/ble-beacon-custom-payload.png"
  width="100%"
  caption="RAK WisBlock RUI BLE Beacon custom payload example"
/>

2. Once the example code is open, you can now select the correct serial port, as shown in **Figure 2**.

<rk-img
  src="/assets/images/rui3/ble_examples/arduino-port.png"
  width="100%"
  caption="Selecting the correct serial port"
/>

3. The last step is to upload the code by clicking the highlighted **Upload** icon.

<rk-img
  src="/assets/images/rui3/ble_examples/custom-upload.png"
  width="100%"
  caption="Uploading the BLE Beacon Custom Payload example code"
/>

## Example Details

This sketch sends an [Eddystone URL](https://en.wikipedia.org/wiki/Eddystone_(Google)) beacon. The BLE beacons can contain up to 31&nbsp;bytes of data in their payload.

## Configurable Parameters

### Custom Payload

Set [custom payload](/RUI3/BLE/#set-8) API. The URLs must be in [Eddystone](https://github.com/google/eddystone) format.

```c
uint8_t cus_adv_url[] =
    { 0x02, 0x01, 0x06, 0x03, 0x03, 0xAA, 0xFE, 0x12, 0x16, 0xAA, 0xFE,
      0x10, 0xF8, 0x01, 0x72, 0x61, 0x6B, 0x77, 0x69, 0x72, 0x65, 0x6C,
      0x65, 0x73, 0x73, 0x07 };

if (!(ret = api.ble.beacon.custom.payload.set(cus_adv_url, 26))) {
    Serial.printf("Set BLE Beacon Customize Payload parameter is incorrect! \r\n");
    return;
}
```

### Beacon Mode

To send a beacon using RUI3 BLE API, you need to switch to [Beacon mode](/RUI3/BLE/#blemode).

```c
api.ble.settings.blemode(RAK_BLE_BEACON_MODE);
```
## Scanning Beacons

You can scan the custom beacons sent by the `BLE_Beacon_Custom_Payload` project using the [nRF Connect for Mobile](https://www.nordicsemi.com/Products/Development-tools/nrf-connect-for-mobile) tool.

<rk-img
  src="/assets/images/rui3/ble_examples/eddystone-url.png"
  width="40%"
  caption="nRF Connect for Mobile tool scan"
/>

