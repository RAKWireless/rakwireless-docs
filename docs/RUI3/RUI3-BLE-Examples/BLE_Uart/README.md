# BLE UART

## Prerequisite

Before compiling the **RUI3 BLE Examples**, you must check the procedures described in the Prerequisite section of [RAK4631-R QuickStart Guide](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#prerequisite).
You will also need to install and configure the Arduino IDE, as described in the RAK4631-R [Software](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#software) section.

## Loading the Example

The project is available on Arduino IDE **RAK WisBlock RUI Examples**.

1. Launch Arduino IDE then go to: **File** -> **Examples** -> **RAK WisBlock RUI examples** -> **Example** -> **BLE_Uart**. 

<rk-img
  src="/assets/images/rui3/ble_examples/ble-uart-arduino.png"
  width="100%"
  caption="RAK WisBlock RUI BLE UART example"
/>

2. Once the example code is open, you can now select the correct serial port, as shown in **Figure 2**.

<rk-img
  src="/assets/images/rui3/ble_examples/arduino-port.png"
  width="100%"
  caption="Selecting the correct serial port"
/>

3. The last step is to upload the code by clicking the highlighted **Upload** icon.

<rk-img
  src="/assets/images/rui3/ble_examples/ble-uart-upload.png"
  width="100%"
  caption="Uploading the BLE_Configuration example code"
/>



## Example Details

The Bluetooth UART service allows another BLE device to exchange any data with the RAK4630-R, in small chunks. The Bluetooth UART service emulates the behavior of a physical UART.

## BLE API Used in the Project

### Set the Serial6 Custom Mode

If you want to read and write data through BLE API operations, you need to set the BLE Serial (Serial6) to **RAK_CUSTOM_MODE**.

```c
Serial6.begin(115200, RAK_CUSTOM_MODE);
```
### Set the Pairing PIN

This API is used to [set the passkey](/RUI3/BLE/#setpin) for BLE pairing.

```c
api.ble.uart.setPIN(pairing_pin, 6);  //pairing_pin = 6-digit (digit 0..9 only)
```
### Start BLE UART Service

This API is used to start the [BLE UART Service](/RUI3/BLE/#start).

```c
api.ble.uart.start();
```
### Set Permission

This API is used to require [man-in-the-middle protection](/RUI3/BLE/#setpermission) for UART service. 

```c
api.ble.uart.setPermission(RAK_SET_ENC_WITH_MITM);
```
## Testing the BLE_UART Project

To test the BLE_UART project, download and install the [nRF Toolbox for Bluetooth LE](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nrftoolbox) application.

1. Open nRF Toolbox, scroll up and click the **Utils services** (UART) icon, as shown in **Figure 4**.

<rk-img
  src="/assets/images/rui3/ble_examples/toolbox-uart.png"
  width="50%"
  caption="Toolbox UART service"
/>

2. On the Scanner window, click on the `RAK.XXXXXX` device icon.

<rk-img
  src="/assets/images/rui3/ble_examples/scan-rak.png"
  width="50%"
  caption="Scanning RAK device"
/>

:::tip 📝 NOTE
Pairing is the process by which two BLE devices exchange device information so that a secure link can be established.
:::

3. Now pair with the RAK BLE device: Click the **PAIR** button then type the PIN password, as shown in **Figure 6**.<br>
To finish the pairing, click the **OK** button. Pairing is the process by which two BLE devices exchange device information so that a secure link can be established.

<rk-img
  src="/assets/images/rui3/ble_examples/pair-uart.png"
  width="90%"
  caption="BLE UART pairing"
/>

4. Once connected, enter a message in the **Text to send** text box, then click the **Send** button.

<rk-img
  src="/assets/images/rui3/ble_examples/uart-output.png"
  width="50%"
  caption="Send text message using UART Service"
/>

5. Now check the Arduino Serial Monitor if you have received a message with content `RAK_BLE_UART!!!`. 

<rk-img
  src="/assets/images/rui3/ble_examples/uart-service-log.png"
  width="100%"
  caption="Send a text message using UART service"
/>