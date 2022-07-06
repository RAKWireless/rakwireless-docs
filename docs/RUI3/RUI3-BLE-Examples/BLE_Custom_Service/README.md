# BLE Custom Service

## Prerequisite

Before compiling the **RUI3 BLE Examples**, you must check the procedures described in the Prerequisite section of [RAK4631-R QuickStart Guide](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#prerequisite).
You will also need to install and configure the Arduino IDE, as described in the RAK4631-R [Software](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#software) section.

## Loading the Example

The project is available on Arduino IDE **RAK WisBlock RUI examples**.

1. Launch Arduino IDE then go to: **File** -> **Examples** -> **RAK WisBlock RUI examples** -> **Example** -> **BLE_BLE_Custom_Service**.

<rk-img
  src="/assets/images/rui3/ble_examples/ble-custom-arduino.png"
  width="100%"
  caption="RAK WisBlock RUI BLE Custom Service example"
/>

2. Once the example code is open, you can now select the correct serial port, as shown in **Figure 2**.

<rk-img
  src="/assets/images/rui3/ble_examples/arduino-port.png"
  width="100%"
  caption="Selecting the correct serial port"
/>

3. The last step is to upload the code by clicking the highlighted **Upload** icon.

<rk-img
  src="/assets/images/rui3/ble_examples/custom-service-upload.png"
  width="100%"
  caption="Uploading the BLE Custom Service example code"
/>

## Example Details

This sketch creates a custom BLE service with two Characteristics:

- Notify Characteristic. The notification can be enabled or disabled.
- Read Characteristic.

### Initializes BLE Custom Services

RUI3 API to initialize [custom](/RUI3/BLE/#init) BLE Services:

```c
api.ble.custom.init();
```
### Create BLE Service

[BLE Service](/RUI3/BLE/#rakbleservice-2) API.

```c
RAKBleService hrms = RAKBleService(base_uuid);
```
### Create BLE Characteristic

[BLE Characteristic](/RUI3/BLE/#rakblecharacteristic-2) API.

```c
RAKBleCharacteristic hrmc = RAKBleCharacteristic(UUID16_CHR_HEART_RATE_MEASUREMENT);
RAKBleCharacteristic bslc = RAKBleCharacteristic(UUID16_CHR_BODY_SENSOR_LOCATION);
```

Methods for Characteristic:

```c
  hrmc.setProperties(RAK_CHR_PROPS_NOTIFY);
  hrmc.setPermission(RAK_SET_OPEN);
  hrmc.setFixedLen(2);  
```
### Register Callback

Register a [callback](/RUI3/BLE/#setcccdwritecallback) API.

```c
hrmc.setCccdWriteCallback(cccd_callback);  
```
On function `cccd_callback` you need to check the `chars_uuid`parameter and use the pointer `*cccd_value` to read the values.

```c
// You should create your own RAKBleCharacteristic instance to use this API.
RAKBleCharacteristic hrmc = RAKBleCharacteristic(YOUR_UUID);

void cccd_callback(uint16_t chars_uuid, uint8_t * cccd_value)
{
  // process YOUR_UUID 
  if (chars_uuid ==  YOUR_UUID) {
 
      // get cccd_value
      String cccd_value1 = String(cccd_value[0], HEX);
  }

}
```

### Arduino Serial Monitor Log

<rk-img
  src="/assets/images/rui3/ble_examples/custom-log.png"
  width="80%"
  caption="BLE Custom Service log"
/>