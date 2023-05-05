# BLE Introduction

## Bluetooth SIG

Formed in 1998, the Bluetooth SIG is the not-for-profit trade association that oversees Bluetooth® technology. Bluetooth SIG members created and maintain the specifications and drive global interoperability. The Bluetooth SIG is a global community of over 36,000 companies. 

There is a question about BLE naming: While commonly referred to as `BLE`, the Bluetooth SIG discourages this name because `BLE` isn't a trademark they own. **Bluetooth LE** is the proper way to refer to it.


## Bluetooth Classic (BR/EDR) and Bluetooth LE

The Bluetooth Classic is ideal for use in-car infotainment systems, cable replacement, and audio stream applications. It is not optimized for low consumption but for high transfer speed.

Bluetooth LE (BLE) devices are used in applications where power consumption is crucial. The two wireless protocols are incompatible and BLE devices do not communicate with BR/EDR.

## BLE Architecture

The BLE protocol stack architecture consists of two parts: **Controller** and **Host**. Both are interfaced using **HCI** (Host to Controller Interface). The **HCI** layer provides communication between controller and host through standard interface types. Standard **HCI** commands and events are defined in the Bluetooth specifications.

<rk-img
  src="/assets/images/rui3/ble_examples/ble-stack.png"
  width="70%"
  caption="BLE protocol stack architecture"
/>
### Host Layer

The **Host** layer contains the following layers:

- Generic Access Profile (GAP)
- Generic Attribute Profile (GATT)
- Attribute Protocol (ATT)
- Security Manager (SM)
- Logical Link Control and Adaptation Protocol (L2CAP)
- Host Controller Interface (HCI) - host part

### Controller Layer

The controller contains the following layers:
- Physical Layer (PHY)
- Link Layer
- Direct Test Mode
- Host Controller Interface (HCI) - controller part


### Physical Layer (PHY)

The BLE transmitter uses **FHSS** Frequency Hopping Spread Spectrum transceiver and **GFSK** modulation. It operates at an unlicensed 2.4&nbsp;GHz frequency band. BLE offers data rates of 1&nbsp;Mbps (Bluetooth 4.2) or 2&nbsp;Mbps (Bluetooth 5.0).

The Bluetooth LE specification divides the band into 40 channels of 1&nbsp;MHz spaced 2&nbsp;MHz apart. Channels 37 to 39 are **Advertisement Channels** used by BLE devices exclusively to send advertising and beacon packets. The advertising channel frequencies were chosen to minimize interference from Wi-Fi and other sources.

<rk-img
  src="/assets/images/rui3/ble_examples/ble-channels.png"
  width="80%"
  caption="BLE channels"
/>


### Link Layer

This layer sits above the Physical Layer. It is responsible for advertising, scanning, and creating/maintaining connections. The role of BLE devices changes in peer-to-peer or broadcast modes. The **GAP** (Generic Access Profile) controls the RF state of the device, with the device in one of five states:

- Standby
- Advertising
- Scanning
- Initiating
- Connected

<rk-img
  src="/assets/images/rui3/ble_examples/ble-ll-states.png"
  width="55%"
  caption="BLE link layer states"
/>

#### BLE Roles

Bluetooth LE specification defines two roles: The **Peripheral** and **Central**. The real difference between the two is who initiates a connection. **Central** devices are the ones that initiate a connection, while **Peripheral** accept connections. In this sense, the **Central** acts as a "Master", with many **Peripheral** "Slaves" attached.

### Application Layer

The application layer is use-case dependent and refers to the implementation on top of the **GAP** Generic Access Profile and **GATT** Generic Attribute Profile. This layer is generally not part of the BLE stack.

## Broadcast-Only Devices (Beacons)

The beacon devices broadcast data so other devices may discover them and read their data but do not establish a connection.

The Apple company created a custom version of the beacon: [iBeacon](https://developer.apple.com/ibeacon/).  
Eddystone is an open beacon format from Google: [Eddystone specification](https://github.com/google/eddystone).

## BLE Indication and Notification

The BLE standard defines two ways to transfer data from the Peripheral to the Central: **Notification** and **Indication**. **Notification** and **Indication** are initiated by the Peripheral. The **Indication** can be enabled or disabled by the Central.

- **Notification** - an unacknowledged message or update.
- **Indication** - an acknowledged message or update.

<rk-img
  src="/assets/images/rui3/ble_examples/notif-indic.png"
  width="50%"
  caption="BLE indication and notification"
/>
