---
sidebar: false
# prev: /Knowledge-Hub/FAQs/
# next: /Knowledge-Hub/FAQs/Hardware/
---

![General FAQ Logo](/assets/images/faq/general/general-faq.svg)

<faq default-opened>
<template #question>
1. Why is the payload data received by the LoRaWAN® server garbled?
</template>
<template #answer>

![LoRaWAN® Encryption Method](/assets/images/faq/software/item1.jpg)

Whenever the gateway receives data from the nodes, the payload data is encoded in base64 and encrypted before it is sent into the server. Upon arriving in the server, the data packet is automatically decrypted which will revert the data to its base64 encoded form. Manual decoding must be done by the user to have the base64 encoded data be similar to the payload sent by the node

</template>
</faq>

<faq>
<template #question>
2. Why is Base64 encoding used for transmission?
</template>
<template #answer>

To effectively transmit all printable characters whether be in English, Chinese or other language, binary files, pictures and other files by the server or gateways, Base64 encoding is used. It is a method of representing binary data based on 64 printable characters. As an example, at the point when email was first used, it must be transmitted in English, however, as the quantity of clients expanded, clients in Chinese, Japanese and different dialects additionally requested, yet these characters couldn't be successfully handled by the server or gateways, so Base64 appeared. Alongside this, Base64 has likewise been utilized in few parallel records in URLs, cookies, and web pages.

</template>
</faq>

<faq>
<template #question>
3. What are the Boot Options in RAK811?
</template>
<template #answer>

By changing the states in the **BOOT0** and **BOOT1** pins of the RAK811, the user can choose the boot mode after resetting the device. Provided below are the options as well as the pin state assignment.

- **Main Flash memory (BOOT0: GND, BOOT1: 3V3 or GND)**: It is the built-in Flash of STM32 chip of the RAK811. Generally, when we use JTAG or SWD mode to download the firmware, it is downloaded to this chip in which would automatically starts after restarting.

- **System memory (BOOT0: 3V3, BOOT1: GND)**: The default boot mode set the manufacturer is by booting from the system memory but is used less often. Boot memory consumes a specific memory inside a chip and cannot be modified upon leaving the factory during deployment In the STM32 Chip, a preset space is allocated for the BootLoader which is commonly termed as the “ISP” program. Upon choosing this boot mode, we are downloading the firmware to the system’s Flash through this BootLoader by means of Serial Port. Follow the steps provided below to have your device boot in system memory:

  1. Set **BOOT0: 3V3** and **BOOT1: GND**, and then press the reset button, so that the BootLoader can be started from the system memory.
  2. Download the program to Flash through the serial port with the help of BootLoader.
  3. After the program download is complete, it is necessary to set BOOT0 to GND and reset it manually. In this way, STM32 can be started from Flash.

- **Built-in SRAM (BOOT0: 3V3, BOOT1: 3V3)**: Since SRAM, has no program storage capability,it is generally utilized for program debugging. Unlike in Flash wherein you would take time to entirely erase even in the slightest change in the code, you can consider using the SRAM for faster debugging. After all the changes in the code during the debugging using SRAM, you can then download it into the Flash.

</template>
</faq>

<faq>
<template #question>
4. How does OTAA(Over-the-Air Activation) network join works?
</template>
<template #answer>

OTAA is a method of LoRaWAN® network access in the air. Upon powering up, the node needs to be networked with the server before it can initiate data transmission. The node initiates a request to enter the network which the server then agrees and sends the necessary information into the node. The node then parses the said information to obtain the necessary communication parameters to start communicating with the server.

- The following are the parameters needed by the node before it can start to enter the network via OTAA:

  - APPEUI node custom 8-byte long address
  - Both the APPKEY of the server and the node are stored in advance and used to encrypt and decrypt the Join_acept message
  - DevNonce 2-byte random number, used to generate random AppSKey and NwkSKey

- The following steps is the detailed OTAA network join mode:

  1. The node sends a join_request message.
  2. The Gateway uploads this data to the Network Server. The Gateway does not parse the data at the MAC layer, but directly encodes it into base64 and then encapsulates it into a JSON package to upload to the Network Server.
  3. The Network Server sends the device network access packet to the Application Server.
  4. The Application Server agrees to join the network and replies to Network Server agrees to join the network.
  5. The Network Server generates an Addr and sends the node information to the Application Server.
  6. The Application Server generates a key and tells the relevant information to the Network Server.
  7. The Network Server informs the gateway of the data, and the Gateway converts it into a MAC packet and sends it to the node.
  8. The node parses the join_accept message part.

</template>
</faq>

<faq>
<template #question>
5. How to debug failures when RAK module cannot initiate P2P communication with LoRa® modules of other manufacturers?
</template>
<template #answer>

- Check whether the frequency plans of the two modules are identical
- Check whether the bandwidth, spreading factor, coding rate, and preamble are the same on both modules
- One of the modules must be on receiving mode while the other module sends data packets and vice versa

</template>
</faq>

<faq>
<template #question>
6. How does the SX1276 use DIOx pins? Do all DIOx pins need to be connected to the MCU?
</template>
<template #answer>

The most commonly used are transmit interrupts and receive interrupts, so at least **DIO0** and **DIO1** can be connected. In P2P mode, you can also use the polling register mode to receive and send data without using the interrupt method. With such method, DIO are not necessarily connected to the MCU; only the 4-wire SPI pin and reset pin are required to be connected.

![DIO Mapping LoRa® Mode](/assets/images/faq/software/item6.jpg)

</template>
</faq>

<faq>
<template #question>
7. How to remotely switch from CLASS A to CLASS C, or from CLASS C to CLASS A in LoRaWAN® through the server?
</template>
<template #answer>

In LoRaWAN® v1.0.2, switching from Class A to Class C and vice versa can only be controlled by the application layer of the node. The network access category is determined by the specified parameters when the protocol stack is initialized. If the customer wants to remotely control A to C, or C to A switch from the server, it is recommended to control from the application logic layer.

</template>
</faq>

<faq>
<template #question>
8. How long will the battery of LoRa® node last? How is it calculated?
</template>
<template #answer>

Battery life depends on the following factors:

- Battery capacity
- Frequency of Lora contract.
- The current of sending packets (generally 120~130mA).
- The data rate of sending packets.
- Leakage current after Lora node enters sleep mode.

**Example**: The battery capacity used is **2000mAH**, and the distribution frequency is **10 minutes per time.**The rate of delivery of LoRa® ultimately reflects the length of delivery time. If **50 bytes** are transmitted at **SF7 rate**, it can be sent between **100ms and 200ms**, calculated at 200ms. Sent at **SF12 rate** for about **2.5s**. For RAK4200 module, the **leakage current** after sleep is **1.5uA**.

![Battery Life Calculation](/assets/images/faq/software/item8.jpg)

Seen from the above examples, in order to prolong the battery life, it is necessary to make the node work at a **high rate**, at the same time to **extend the packet interval** and **send as short data messages as possible.**

</template>
</faq>

<faq>
<template #question>
9. How does ChirpStack LoRa® Server communicate with nodes through MQTT?
</template>
<template #answer>

The MQTT integration publishes all the data it receives from the devices as JSON over MQTT. To receive data from your device, you therefore need to subscribe to its MQTT topic. For debugging, you could use a (command-line) tool like mosquitto_sub which is part of the [Mosquitto](http://mosquitto.org/) MQTT broker.

Use + for a single-level wildcard, # for
a multi-level wildcard.

**Examples**:

- Considerations:
  - MQTT topics are case-sensitive
  - The ApplicationID can be retrieved using the API or from the web-interface. Take into consideration that it is not the same with Application EUI.

```sh
mosquitto_sub -t "application/123/#" -v  #display everything for the given application ID
nmosquitto_sub -t "application/123/device/+/rx" -v  #display only the RX payloads for the given application ID"
```

**Events**

The MQTT integration exposes all events as documented by [Event Types](https://www.chirpstack.io/application-server/integrate/sending-receiving/#event-types). The following mapping to MQTT topics applies for the available events:

- **Uplink**: application/[applicationID]/device/[devEUI]/rx
- **Status**: application/[applicationID]/device/[devEUI]/status
- **Ack**: application/[applicationID]/device/[devEUI]/ack
- **Error**: application/[applicationID]/device/[devEUI]/error
- **Scheduling downlink data**: application/[applicationID]/device/[devEUI]/tx

* Considerations:
  - For versions before v1.0.0 ".../device/.." is configured as ".../node/...." Please refer to the [application_server.integration.mqtt configuration](https://www.chirpstack.io/application-server/install/config/) for the correct topic.
  - The Application ID and Device EUI of the device will be taken from the topic.

**Example Payload:**

```json
{
    "confirmed": true,                        // whether the payload must be sent as confirmed data down or not
    "fPort": 10,                              // FPort to use (must be > 0)
    "data": "...."                            // base64 encoded data (plaintext, will be encrypted by ChirpStack Network Server)
    "object":  {                               // decoded object (when application coded has been configured)
        "temperatureSensor": {"1": 25},       // when providing the 'object', you can omit 'data'
        "humiditySensor": {"1": 32}
    }
}
```

</template>
</faq>

<faq>
<template #question>
10. How to revert back to Wi-Fi AP Mode when your Wi-Fi  SSID or Password is incorrect in Wi-Fi Client Mode?
</template>
<template #answer>

If you have set an incorrect SSID or Password for Wi-Fi Client Mode, insert the SD Card into your PC and in the boot disk, and create a new file "**rak_ap**". Afterwhich, re-insert the SD Card into your Raspberry Pi based gateway and it should work again in Wi-Fi AP Mode.

![RAK_AP File](/assets/images/faq/software/item10.png)

</template>
</faq>
