---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: This tutorial shows the basics to start creating your custom firmware with RUI3 API.
tags:
  - Tutorial
  - WisBlock
  - RUI3
  - Ubidots
header:
  title: Getting Started with RUI3 API
  caption: by <b>Bernd Giesecke</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 19/05/2022 3:30 PM
---

# Getting Started with RUI3 API

This article aims to show you the basics to start creating your custom firmware with RUI3 API. A separate [API documentation](https://docs.rakwireless.com/RUI3/) is available and example code can be found in the RUI3 BSP and in the [GitHub repo](https://github.com/RAKWireless/RAK-nRF52-RUI/tree/main/libraries/RUI_V3_examples/examples).

In addition to that, here is an overview of the requirements to connect your RUI3 [WisDuo](https://store.rakwireless.com/collections/wisduo) or [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core) to LoRaWAN.

## LoRaWAN Credentials

Depending on the Join Mode your RUI3 node needs different credentials, DevEUI, AppEUI, AppKey for OTAA or AppSkey, NwSkey and Device Address for ABP. All of these can be set with simple function calls in RUI3:

<b> To manage the credentials for OTAA Join mode: </b>

`api.lorawan.appeui`
`api.lorawan.appkey`
`api.lorawan.deui`

<b> To manage the credentials for ABP Join mode: </b>

`api.lorawan.daddr`
`api.lorawan.appskey`
`api.lorawan.nwkskey`

These functions have both `SET` and `GET` calls, so you can not only set the values, but you can also read back the values.

Example for OTAA:

```c
uint8_t node_device_eui[8] = {0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x88};
  // OTAA Application EUI MSB
  uint8_t node_app_eui[8] = {0x0E, 0x0D, 0x0D, 0x01, 0x0E, 0x01, 0x02, 0x0E};
  // OTAA Application Key MSB
  uint8_t node_app_key[16] = {0x2B, 0x7E, 0x15, 0x16, 0x28, 0xAE, 0xD2, 0xA6, 0xAB, 0xF7, 0x15, 0x88, 0x09, 0xCF, 0x4F, 0x3E};

  // Set App EUI
  if(!(ret = api.lorawan.appeui.set(node_app_eui, 8)))
  {
       Serial.printf("RUI3 - set device EUI failed! \r\n");
       return;
  }
  // Set App Key
  if(!(ret = api.lorawan.appkey.set(node_app_key, 16)))
  {
       Serial.printf("RUI3 - set application EUI failed! \r\n");
       return;
  }
  // Set Device EUI
  if(!(ret = api.lorawan.deui.set(node_device_eui, 8)))
  {
       Serial.printf("RUI3 - set application key failed! \r\n");
       return;
  }
```

Example for ABP:

```c
uint8_t node_dev_addr[4] = {0x05, 0x05, 0x06, 0x06};
  // ABP Application Session Key
  uint8_t node_app_skey[16] = {0xB4, 0x91, 0xCC, 0x10, 0x17, 0x0E, 0x89, 0x04, 0x33, 0xCA, 0x5B, 0x13, 0x1E, 0x74, 0x20, 0x07};
  // ABP Network Session Key
  uint8_t node_nwk_skey[16] = {0xBF, 0x9B, 0x75, 0xBC, 0xD6, 0x08, 0x06, 0xDD, 0x80, 0xED, 0xB8, 0xE6, 0x83, 0x29, 0x9D, 0x22};

  // Set Device Address
  if (!api.lorawan.daddr.set(node_dev_addr, 4)) {
    Serial.printf("RUI3 - set device addr failed! \r\n");
    return;
  }
  // Set Application Session Key
  if (!api.lorawan.appskey.set(node_app_skey, 16)) {
    Serial.printf
    ("RUI3 - set application session key failed! \r\n");
    return;
  }
  // Set Network Session Key
  if (!api.lorawan.nwkskey.set(node_nwk_skey, 16)) {
    Serial.printf
    ("RUI3 - set network session key failed! \r\n");
    return;
  }
```


## Network Parameter

In addition to the credentials, several network parameters must be defined, such as **Region**, **Node Class**, **Join Mode**, and for some regions and specific LoRaWAN servers, the Channel Mask.

All of these settings can be setup with the following API functions:

`api.lorawan.band`
`api.lorawan.deviceClass`
`api.lorawan.njm`
`api.lorawan.mask`

These functions have both **SET** and **GET** calls, so you can not only set the values, but you can also read back the values.

### api.lorawan.band

This call is used to set (or check) the Region (equal frequency settings) the device is using. Valid settings are as follows:

`RAK_REGION_EU433`	`RAK_REGION_IN865`	`RAK_REGION_AU915`
`RAK_REGION_CN470`	`RAK_REGION_EU868`	`RAK_REGION_KR920`
`RAK_REGION_RU864`	`RAK_REGION_US915`	`RAK_REGION_AS923`

**Example**

```c
  if(!(ret = api.lorawan.band.set(RAK_REGION_EU868)))
  {
       Serial.printf("RUI3 - set band failed! \r\n");
       return;
  }
```

### api.lorawan.deviceClass

LoRaWAN node devices are classified into three types.

- **Class A devices** have the lowest power consumption. The device can only receive downlink messages from an LNS (LoRaWAN Network Server) after it has sent a data packet.
- **Class B devices** open scheduled receive windows for downlink messages and thus consume more power.
- **Class C devices** can receive downlink messages at any time. Because the LoRa transceiver must always be in receive mode, this class has the highest power consumption.

Valid settings are as follows:

`RAK_LORA_CLASS_A`	`RAK_LORA_CLASS_B`	`RAK_LORA_CLASS_C`

Example:

```c++
  if(!(ret = api.lorawan.deviceClass.set(RAK_LORA_CLASS_A)))
  {
       Serial.printf("RUI3 - set device class failed! \r\n");
       return;
  }
```

### api.lorawan.njm

As previously stated, there are two ways for a device to join the LoRaWAN network: OTAA and ABP.

In OTAA mode, the device has a DevEUI, an AppEUI, and an AppKey that are known by both the LNS and the device. During the join process, the device sends these credentials to the LNS. If the LNS recognizes the credentials, it generates a new random application and network session key and sends it to the device. These keys are then used to encrypt data messages in future communications.

In ABP mode, the device and the LNS are both aware of the application session key and the network session key. As a result, the Join procedure is only on the device to inform the LoRaWAN MAC stack about these keys.

Valid network join modes:

`RAK_LORA_OTAA`	`RAK_LORA_ABP`

Example:

```c
  // Set network join mode
  if(!(ret = api.lorawan.njm.set(RAK_LORA_OTAA)))
  {
       Serial.printf("RUI3 - set network join mode failed! \r\n");
       return;
  }
```

### api.lorawan.mask

Some of the region's channel plans defined in the LoRaWAN regional parameters have a large number of channels (frequencies) that can be used to communicate between the device, gateway, and LNS. In these cases, the device must know which channels it is permitted to use for packet transmission. Typically, there are eight TX channels and one RX channel.

For example, the region US915 has defined 72 channels, but because most gateways only support eight channels, the eight available channels must be masked out of the 72. Because the Things Network uses channels 8 to 15 by default, the device must be configured to use only these eight channels. The channel masks are defined in groups of eight channels, as shown below:

| Mask Number (for API call) | Channel Mask | Enabled Channels |
| :------------------------: | :----------: | :--------------: |
|            ALL             |    0x0000    |   All enabled    |
|             1              |    0x0001    |      0 - 7       |
|             2              |    0x0002    |      8 – 15      |
|             3              |    0x0004    |     16 - 23      |
|             4              |    0x0008    |     24 - 31      |
|             5              |    0x0010    |     32 - 39      |
|             6              |    0x0020    |     40 – 47      |
|             …              |      …       |        …         |
|             10             |    0x0200    |     72 – 79      |
|             11             |    0x0400    |     80 – 87      |
|             12             |    0x0800    |     88 - 95      |

Example:

```c
// Set the channel mask (only required for US915, AU915 and CN470)
  uint16_t maskBuff = 0x0002;
  if(!(ret = api.lorawan.njm.set(&maskBuff)))
  {
       Serial.printf("RUI3 - set channel mask failed! \r\n");
       return;
  }
```


## Join the Network

After all of the above credentials and settings have been completed, the device is ready to join the network. Aside from the join function call, another function can be used to check the status of the join process.

- The `api.lorawan.join` call returns only the success or failure of the join start. The join may fail if the device has already joined the network, for example.
- The `api.lorawan.njs` call can be used to determine the status of the join sequence. If the device successfully joined, it will return **TRUE**; otherwise, it will return **FALSE**.

Example:

```c
// Start to join the network
  if(!(ret = api.lorawan.join()))
  {
       Serial.printf("RUI3 - join fail! \r\n");
       return;
  }
  /**Wait for Join success */
  while (!api.lorawan.njs.get())
  {
    Serial.print("Waiting for Lorawan join...");
    api.lorawan.join();
    delay(10000);
  }
```

## Summary

These few commands set up the device to successfully join the LoRaWAN network. Here's a complete simple example of a RUI3 network join sequence:

```c
void setup()
{
    // OTAA Device EUI MSB
    uint8_t node_device_eui[8] = {0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x88};
    // OTAA Application EUI MSB
    uint8_t node_app_eui[8] = {0x0E, 0x0D, 0x0D, 0x01, 0x0E, 0x01, 0x02, 0x0E};
    // OTAA Application Key MSB
    uint8_t node_app_key[16] = {0x2B, 0x7E, 0x15, 0x16, 0x28, 0xAE, 0xD2, 0xA6, 0xAB, 0xF7, 0x15, 0x88, 0x09, 0xCF, 0x4F, 0x3E};

    // Set App EUI
    if (!(ret = api.lorawan.appeui.set(node_app_eui, 8)))
    {
        Serial.printf("RUI3 - set device EUI failed! \r\n");
        return;
    }
    // Set App Key
    if (!(ret = api.lorawan.appkey.set(node_app_key, 16)))
    {
        Serial.printf("RUI3 - set application EUI failed! \r\n");
        return;
    }
    // Set Device EUI
    if (!(ret = api.lorawan.deui.set(node_device_eui, 8)))
    {
            Serial.printf("RUI3 - set application key failed! \r\n");
        return;
    }
    // Set LoRaWAN Region
    if (!(ret = api.lorawan.band.set(RAK_REGION_EU868)))
    {
        Serial.printf("RUI3 - set band failed! \r\n");
        return;
    }
    // Set device class
    if (!(ret = api.lorawan.deviceClass.set(RAK_LORA_CLASS_A)))
    {
        Serial.printf("RUI3 - set device class failed! \r\n");
        return;
    }
    // Set network join mode
    if (!(ret = api.lorawan.njm.set(RAK_LORA_OTAA)))
    {
        Serial.printf("RUI3 - set network join mode failed! \r\n");
        return;
    }
    // Start to join the network
    if(!(ret = api.lorawan.join()))
    {
        Serial.printf("RUI3 - join fail! \r\n");
        return;
    }
}

bool has_joined = false;

void loop()
{
    if (!has_joined)
    {
        if (api.lorawan.njs.get())
        {
            Serial.println("RUI3 - joined network");
            has_joined = true;
        }
    }
    else
    {
        // Read sensors, send the data
        // ...
        // We talk about this in the next post
    }
}
```

