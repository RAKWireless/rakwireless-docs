---
sidebar: false
# prev: /Knowledge-Hub/FAQs/General/
# next: /Knowledge-Hub/FAQs/Software/
---

![Hardware FAQ Logo](/assets/images/faq/hardware/hardware-faq.svg)

<faq default-opened>
<template #question>
1. Can we develop our own Applications in RAK’s LoRaWAN® modules?
</template>
<template #answer>

Yes, with the newly released **RAK RUI API**, it is now possible to connect specific sensors in your device. You will be able to customize your own firmware for your specific needs whether be a project or even as a hobby. Check out this [Guide](https://doc.rakwireless.com/developer-tools/developer-tools/getting-started) for more information about RAK RUI API. You can also check out this sample [Firmware Customizing](https://doc.rakwireless.com/rak7204-lora-environmental-sensor/firmware-customizing) guide on how to upload your firmware to your device.

</template>
</faq>

<faq>
<template #question>
2. What are the external interfaces in RAK5205 Wistrio LPWAN Tracker? What are the frequency bands that it supports?and how many GPIOs are there?
</template>
<template #answer>

The RAK5205 LPWAN Tracker board is built on the Semtech SX1276 chip, with the STM32L1 MCU at its core. It supports **I2C, GPIOs, UART and ADC interfaces**. The board supports all LoRaWAN® frequency channels (EU433, EU868, CN470 , US915, AS920, AS923, AU915, KR920, IN865) which is easy to configure while building the firmware from the source code. The RAK5205 has 7 GPIOs labeled as **PA8, PB3, PB5, SWD*TMS, SWD* CLK, LED1_PA12 and LED2_PB4**. Checkout the [RK5205 Datasheet](/en-us/datasheet/rak5205/pin-definition.html) for a full overview of the pinout diagram.

</template>
</faq>

<faq>
<template #question>
3. What are the frequencies supported by RAK Gateways?
</template>
<template #answer>

RAK Gateways support all LoRaWAN® frequency channels as shown in the list provided below:

- EU433
- CN470
- IN865
- EU868
- AU915
- US915
- AS920
- KR920
- AS923

</template>
</faq>

<faq>
<template #question>
4. Will the RAK2245 Pi Hat work with the newly released Raspberry Pi 4?
</template>
<template #answer>

Yes. We have provided a pre-compiled firmware image that you can just easily use and flash it into your Raspberry Pi 4. You can check out the [RAK2245 - Pi Hat Device Firmware Setup](/en-us/quick-start-guide/gateways/rak2245-pi-hat-edition/device-firmware-setup.html) guide on how to burn the firmware image into your Raspberry Pi device.

Note:

- Use the official **USB-C Power supply** to have a stable power supply

</template>
</faq>

<faq>
<template #question>
5. What is the range that I can achieve with LoRa®?
</template>
<template #answer>

Technically, one can achieve with a range of **10-15 km** but there are a lot of factors that one should consider like placement of gateway, type of antenna used, message payload, physical obstructions and many more. In Rakwireless, we have obtained with a range of **20km** through the use of the **RAK7249 Macro Outdoor Gateway.** Checkout the [RAKwireless LoRaWAN® Coverage Drive Test Document](https://downloads.rakwireless.com/en/LoRa/DIY-Gateway-RAK7249/Application-Notes/RAKwireless_LoRAWAN_Coverage_Drive_Test_Report.pdf) to learn more.

</template>
</faq>

<faq>
<template #question>
6. What is the meaning of the LED of the RAK612 LPWAN Button?
</template>
<template #answer>

Whenever the keys 1 - 4 is pressed, the corresponding basket light under each key lights up for 300ms. To enter Configuration Mode, long press Key 1 for at least 500 ms. Press Key 1 again for at least 500 ms to exit Configuration Mode.

| Mode                    | Red LED     | Green LED | Blue LED                  |
| ----------------------- | ----------- | --------- | ------------------------- |
| Configuration Mode      | Steady ON   | OFF       | OFF                       |
| Transmission Successful | ON          | OFF       | Flash Twice after Red LED |
| Transmission Fail       | Flash Twice | OFF       | OFF                       |
| USB Cable Plugged       | OFF         | ON        | OFF                       |

</template>
</faq>

<faq>
<template #question>
7. What is the average power consumption of the RAK7249 Macro Outdoor Gateway with LTE working for both 8-channel and 16-channel LoRa?
</template>
<template #answer>

- Note: To attain such test condition, settings must be followed below:
  - **GPS and Wi-Fi**: Disabled
  - **4G and LoRa**: Enabled

* **At 8-Channels Working**

  - 12V DC Power Supply-Average Power: 12 Volts x 0.32 Amperes = **8.84 Watts**
  - PoE 48V Power Supply-Average Power: 48 Volts x 0.1 Amperes = **4.8 Watts**

* **At 16-Channels Working**
  - 12V DC Power Supply-Average Power: 12 Volts x 0.46 Amperes = **5.52 Watts**
  - PoE 48V Power Supply-Average Power: 48 Volts x 0.13 Amperes = **6.24 Watts**

</template>
</faq>

<faq>
<template #question>
8. How many lora modules does RAK currently have? What are the features of each module?
</template>
<template #answer>

The following are the available modules: **RAK4200, RAK4270, RAK4600, RAK4260, RAK811, RAK2200 several modules with RAK4200 and RAK811** for both high and low frequency.

The features of each module are shown in the following table:

| Module Name     | RAK4200                                                                     | RAK4270                                              | RAK4600                                                                       | RAK4260                                                                                                    | RAK811                                                                      | RAK2200                                                          |
| --------------- | --------------------------------------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| MCU             | STM32L071KB                                                                 | STM32L071KB                                          | nRF52832                                                                      | ATSAMR34J18B                                                                                               | STM32L151CBU6                                                               | N/A                                                              |
| LoRa® Chip      | SX1276                                                                      | SX1262                                               | SX1276                                                                        | Integrated in the ATSAMR34J18B chip                                                                        | SX1276                                                                      | SX1276                                                           |
| 32M TCXO        | Not supported                                                               | Not supported                                        | Not supported                                                                 | Supported                                                                                                  | Supported                                                                   | Supported                                                        |
| Support Mode    | • PA_BOOST mode <br>• Receive mode                                          | • PA_BOOST mode <br>• Receive mode                   | • PA_BOOST mode <br>• Receive mode                                            | • PA_BOOST mode <br>• RFO_HF mode <br>• Receive mode                                                       | • PA_BOOST mode <br>• RFO_HF mode <br>• Receive mode                        | • PA_BOOST mode <br>• RFO_HF mode <br>• Receive mode             |
| TX Power        | **PA_BOOST**: <br>20dB max                                                  | **PA_BOOST**: <br>22dB max                           | **PA_BOOST**: <br>20dB max <br><br>**BT**: <br>-20~4dB                        | **PA_BOOST**: <br>20dB <br><br>**RFO_HF mode**: <br>14dB max                                               | **PA_BOOST**: <br>20dB max <br><br>**RFO_HF mode**: <br>14dB max            | **PA_BOOST**: <br>20dB max <br><br>**RFO_HF mode**: <br>14dB max |
| Frequency       | **RAK4200H**: <br>868Mhz,915Mhz <br><br>**RAK4200L**: <br>433Mhz,470~510Mhz | **RAK4270H**: <br>868Mhz,915Mhz                      | **RAK4600H**: <br>868Mhz,915Mhz                                               | **RAK4260H**: <br>868Mhz,915Mhz                                                                            | **RAK4200H**: <br>868Mhz,915Mhz <br><br>**RAK4200L**: <br>433Mhz,470~510Mhz | **RAK2200H**: <br>868Mhz,915Mhz                                  |
| Form Factor     | 15 x 15.5 x 2.5 mm                                                          | 15 x 15.5 x 2.5 mm                                   | 15 x 23 x 2.5 mm                                                              | 15x15x1.8mm                                                                                                | 22x14x1.7mm                                                                 | 15x15x2.0mm                                                      |
| I/O ports       | 2 uart ports <br>1 I2C port <br>SWD port <br>2 GPIOs                        | 2 uart ports <br>1 I2C port <br>SWD port <br>4 GPIOs | 2 uart ports <br>1 I2C port <br>1 SWD port <br>1 NFC port <br>2 GPIOs         | 2 uart ports <br>1 I2C port <br>1 SWD port <br>1 SPI port <br>1 USB port <br>3 ADCs <br>3 GPIOs <br>2 PTCs | 2 uart ports <br>1 I2C ports <br>6 ADCs <br>8 GPIOs                         | N/A                                                              |
| Receive Current | **LoRa® Receive**: <br>15mA                                                 | **LoRa® Receive**: <br>15mA                          | **LoRa® Receive**: <br>17mA <br><br>**BT Receive**: <br>11.5mA                | **LoRa® Receive**: <br>13.6mA                                                                              | **LoRa® Receive**: <br>16mA                                                 | **LoRa® Receive**: <br>11.5mA                                    |
| Tx current      | **LoRa® PA_BOOST**: <br>124mA                                               | **LoRa® PA_BOOST**: <br>124mA                        | **LoRa® PA_BOOST&BT sleep**: <br>125mA <br><br>**BT tx&LoRa® sleep**: <br>9mA | **PA_BOOST@20dB**: <br>126mA <br><br>**RFO@14dB**: <br>33mA                                                | **PA_BOOST@20dB**: <br>126mA <br><br>**RFO@14dB**: <br>33mA                 | **PA_BOOST@20dB**: <br>120mA <br><br>**RFO@13dB**: <br>29mA      |
| Sleep Current   | 1.5uA                                                                       | 1.5uA                                                | 2.0uA                                                                         | 860nA                                                                                                      | 10uA                                                                        | 1uA                                                              |
| Supply Voltage  | 2.0 - 3.6V                                                                  | 2.0 - 3.6V                                           | 2.0 - 3.6V                                                                    | 1.8V - 3.6V                                                                                                | 3V - 3.45V                                                                  | 2.0 - 3.6V                                                       |
| RF port         | with Ipex                                                                   | without Ipex                                         | •LoRa® with Ipex <br>•BT with ipex                                            | Stamp pinout without Ipex                                                                                  | Stamp pinout without Ipex                                                   | Stamp pinout without Ipex                                        |
| Pin Count       | 20                                                                          | 20                                                   | 42                                                                            | 36                                                                                                         | 34                                                                          | 24                                                               |
| Program Tool    | J-link                                                                      | J-link                                               | J-link                                                                        | J-link                                                                                                     | UART                                                                        | N/A                                                              |

</template>
</faq>

<faq>
<template #question>
9. What is the difference between all Raspberry Pi based LPWAN Gateways that RAK currently offers?
</template>
<template #answer>

Currently, RAKwireless offers 4 Raspberry Pi Based LoRaWAN Gateways namely RAK7246G, RAK7246, RAK7243 and RAK7244.

|                        | RAK7246                     | RAK7246G                    | RAK7243                         | RAK7244                         |
| ---------------------- | --------------------------- | --------------------------- | ------------------------------- | ------------------------------- |
| Platform               | Raspberry Pi Zero W         | Raspberry Pi Zero W         | Raspberry Pi 3B+                | Raspberry Pi 4                  |
| LoRa Concentrator Chip | SX1308                      | SX1308                      | SX1301                          | SX1301                          |
| Tx Power               | 20dbm                       | 20dbm                       | 27dBm                           | 27dBm                           |
| Rx Sensitivity         | -139dbm @ SF12 at 125kHz    | -139dbm @ SF12 at 125kHz    | -139dbm @ SF12 at 125kHz        | -139dbm @ SF12 at 125kHz        |
| GPS                    | N/A                         | Ublox MAX-7Q                | Ublox MAX-7Q                    | Ublox MAX-7Q                    |
| Enclosure              | Acrylic                     | Acrylic                     | Metal                           | Metal                           |
| Cost                   | \$99                        | \$114                       | \$199                           | \$212                           |
| Target Use Case        | Development Platform in Lab | Development Platform in Lab | Development and Real Deployment | Development and Real Deployment |

</template>
</faq>
