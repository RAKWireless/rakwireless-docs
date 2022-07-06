# BLE Beacon

## Prerequisite

Before compiling the **RUI3 BLE Examples**, you must check the procedures described in the Prerequisite section of [RAK4631-R QuickStart Guide](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#prerequisite).
You will also need to install and configure the Arduino IDE, as described in the RAK4631-R [Software](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#software) section.

## Loading the Example

This project is available on Arduino IDE **RAK WisBlock RUI examples**. 

1. Launch Arduino IDE then go to: **File** -> **Examples** -> **RAK WisBlock RUI examples** -> **Example** -> **BLE_Beacon**.

<rk-img
  src="/assets/images/rui3/ble_examples/ble-beacon-arduino.png"
  width="100%"
  caption="RAK WisBlock RUI BLE Beacon example"
/>

2. Once the example code is open, you can now select the correct serial port, as shown in **Figure 2**.

<rk-img
  src="/assets/images/rui3/ble_examples/arduino-port.png"
  width="100%"
  caption="Selecting the correct serial port"
/>

3. The last step is to upload the code by clicking the highlighted **Upload** icon.

<rk-img
  src="/assets/images/rui3/ble_examples/beacon-upload.png"
  width="100%"
  caption="Uploading the BLE Beacon example code"
/>

## Example details

This sketch sends configurable advertising beacons.

## Configurable Parameters

### Major

Major values are intended to identify a subset of beacons within a large group.
Set [major](/RUI3/BLE/#major) API.
```c
if (!(ret = api.ble.beacon.ibeacon.major.set(588))) {
    Serial.printf("Set BLE Beacon parameter is incorrect! \r\n");
    return;
}
```

### Minor

Minor values are intended to identify and distinguish an individual beacon.
More details on set [minor](/RUI3/BLE/#set-6) API.
```c
if (!(ret = api.ble.beacon.ibeacon.minor.set(299))) {
    Serial.printf("Set BLE Beacon parameter is incorrect! \r\n");
    return;
}
```
Major and Minor are unsigned integer values between 1 and 65535.

### TX Power

The TX power level in 2's compliment, indicates the signal strength one meter from the device.
More details on set [TX power](/RUI3/BLE/#set-7) API.
```c
if (!(ret = api.ble.beacon.ibeacon.power.set(-68))) {
    Serial.printf("Set BLE Beacon parameter is incorrect! \r\n");
    return;
}
```
### UUID

The purpose of the UUID (Universally Unique IDentifier) is to distinguish beacons in your network from all other beacons. Set [UUID](/RUI3/BLE/#set-4) API.
```c
if (!(ret = api.ble.beacon.ibeacon.uuid.set(beaconUuid))) {
    Serial.printf("Set BLE Beacon parameter is incorrect! \r\n");
    return;
}
```

To send a beacon using RUI3 API you need to switch to [Beacon mode](/RUI3/BLE/#blemode).
```c
 api.ble.settings.blemode(RAK_BLE_BEACON_MODE);
```
## Scanning Beacons

You can scan the beacons sent by the `BLE_Beacon` project using the [nRF Connect for Mobile](https://www.nordicsemi.com/Products/Development-tools/nrf-connect-for-mobile) tool.

<rk-img
  src="/assets/images/rui3/ble_examples/beacon.png"
  width="40%"
  caption="nRF Connect for Mobile tool scan"
/>
