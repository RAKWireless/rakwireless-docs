# BLE Configuration

## Prerequisite

Before compiling the **RUI3 BLE Examples**, you must check the procedures described in the Prerequisite section of [RAK4631-R QuickStart Guide](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#prerequisite).
You will also need to install and configure the Arduino IDE, as described in the RAK4631-R [Software](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#software) section.

## Loading the Example

The project is available on Arduino IDE **RAK WisBlock RUI Examples**.

1. Launch Arduino IDE then go to: **File** -> **Examples** -> **RAK WisBlock RUI examples** -> **Example** -> **BLE_Configuration**.
 
<rk-img
  src="/assets/images/rui3/ble_examples/ble-conf-arduino.png"
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
  src="/assets/images/rui3/ble_examples/ble-conf-upload.png"
  width="100%"
  caption="Uploading the BLE_Configuration example code"
/>

4. You should now be able to see the project logs on the serial monitor of Arduino IDE.

<rk-img
  src="/assets/images/rui3/ble_examples/ble-conf-log.png"
  width="90%"
  caption="Serial monitor BLE_Configuration log"
/>

## Example details

This sketch shows [RUI3 BLE API](/RUI3/BLE/) configuration parameters that can be used in your RUI3 project.<br>

<!--

2. Now select the BLE_Configuration project on : `File -> Examples -> RAK WisBlock RUI examples -> Example -> BLE_Configuration`. 
<rk-img
  src="/assets/images/rui3/ble_examples/ble-conf-arduino.png"
  width="100%"
  caption="RAK WisBlock RUI BLE Configuration example"
/>

3. Once the example code is open, you can now select the correct serial port, as shown in **Figure 6**.

<rk-img
  src="/assets/images/rui3/ble_examples/arduino-port.png"
  width="100%"
  caption="Selecting the correct serial port"
/>

4. The last step is to upload the code by clicking the highlighted **Upload** icon.

<rk-img
  src="/assets/images/rui3/ble_examples/ble-conf-upload.png"
  width="100%"
  caption="Uploading the BLE_Configuration example code"
/>

5. You should now be able to see the project logs on the Serial Monitor of Arduino IDE.

<rk-img
  src="/assets/images/rui3/ble_examples/ble-conf-log.png"
  width="90%"
  caption="Serial Monitor BLE_Configuration log"
/>
-->

## Configurable Parameters

## Start BLE UART Service

Start the [BLE UART Service](/RUI3/BLE/#start) using BLE API.

```c
api.ble.uart.start();
```
### Advertise Status

Get the current [Advertise Status](/RUI3/BLE/#status) using BLE API.

```c
get_dav_status = api.ble.advertise.status();
```

### Set Tx Power Level

Set the [Tx Power Level](/RUI3/BLE/#set). The code below sets the Tx Power to 8&nbsp;dBm.

```c
get_dav_status = api.ble.settings.txPower.set(8);
```

### Set BLE Broadcast Name

Set the [Broadcast Name](/RUI3/BLE/#set-3). The code below sets the Broadcast Name to **RAKBLE-4631**.

```c
char dev_name[12] = { 'R', 'A', 'K', 'B', 'L', 'E', '-', '4', '6', '3', '1', '\0' };

  if (!(ret = api.ble.settings.broadcastName.set(dev_name, 12))) {
      Serial.printf("BLE Configuration - set broadcast name is incorrect! \r\n");
      return;
  }
```
### Start the BLE Advertising

Configure the [BLE Advertising](/RUI3/BLE/#start-2) timeout.

```c
if (!(ret = api.ble.advertise.start(60))) {
      Serial.printf("BLE Configuration - set start advertise parameter is incorrect! \r\n");
    return;
}
```
### Get the BLE Advertising Interval

Get the current [advertising interval](/RUI3/BLE/#get-3) in milliseconds.

```c
int32_t get_adv_interval = api.ble.settings.advertiseInterval.get();
```

### Get Device MAC Address

Get the current [MAC Address](/RUI3/BLE/#get) position 2.
```c
char *get_position_2_mac_addr = api.ble.mac.get(2);
```

## Scanning BLE Advertising Packets

You can check the BLE packets sent by the `BLE_Configuration` project using the [nRF Connect for Mobile](https://www.nordicsemi.com/Products/Development-tools/nrf-connect-for-mobile) tool.

<rk-img
  src="/assets/images/rui3/ble_examples/ble-conf-scan.png"
  width="40%"
  caption="nRF Connect for Mobile tool scan"
/>
