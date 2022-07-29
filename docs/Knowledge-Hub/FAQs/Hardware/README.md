---
rak_desc: RAKwireless has compiled some commonly raised questions and categorized them into three — General, Hardware, and Software. Browse through these sections to answer your inquiries and provide you more information about the products. If you have unanswered questions left, message us through the chat box or immerse in the RAKWireless Forum.
rak_img: /assets/images/faq/hardware/hardware-faq.png
header:
    title: Welcome to FAQs section!
    caption: RAKwireless has compiled some commonly raised questions and categorized them into three — General, Hardware, and Software. Browse through these sections to answer your inquiries and provide you more information about the products. If you have unanswered questions left, message us through the chat box or immerse in the RAKWireless Forum.
---

# Hardware FAQs

<faq default-opened>
<template #question>
1. Can we develop our own Applications in RAK’s LoRaWAN modules?
</template>
<template #answer>

Yes, with the newly released **RAK RUI API**, it is now possible to connect specific sensors in your device. You will be able to customize your own firmware for your specific needs whether be a project or even as a hobby. Check out this [Guide](https://doc.rakwireless.com/developer-tools/developer-tools/getting-started) for more information about RAK RUI API. You can also check out this sample [Firmware Customizing](https://doc.rakwireless.com/rak7204-lora-environmental-sensor/firmware-customizing) guide on how to upload your firmware to your device.

</template>
</faq>

<faq>
<template #question>
2. What are the external interfaces in RAK5205 Wistrio LPWAN Tracker? What are the frequency bands that it supports and how many GPIOs are there?
</template>
<template #answer>

The RAK5205 LPWAN Tracker board is built on the Semtech SX1276 chip, with the STM32L1 MCU at its core. It supports **I2C, GPIOs, UART and ADC interfaces**. The board supports all LoRaWAN frequency channels (EU433, EU868, CN470 , US915, AS920, AS923, AU915, KR920, IN865) which is easy to configure while building the firmware from the source code. The RAK5205 has 7 GPIOs labeled as **PA8, PB3, PB5, SWD*TMS, SWD* CLK, LED1_PA12 and LED2_PB4**. Checkout the [RAK5205 Datasheet](/en-us/datasheet/rak5205/pin-definition.html) for a full overview of the pinout diagram.

</template>
</faq>

<faq>
<template #question>
3. What are the frequencies supported by RAK Gateways?
</template>
<template #answer>

RAK Gateways support all LoRaWAN frequency channels as shown in the list provided below:

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
5. What is the range that I can achieve with LoRa?
</template>
<template #answer>

Technically, one can achieve with a range of **10-15 km** but there are a lot of factors that one should consider like placement of gateway, type of antenna used, message payload, physical obstructions and many more. In Rakwireless, we have obtained with a range of **20km** through the use of the **RAK7249 Macro Outdoor Gateway.** Checkout the [RAKwireless LoRaWAN Coverage Drive Test Document](https://downloads.rakwireless.com/en/LoRa/DIY-Gateway-RAK7249/Application-Notes/RAKwireless_LoRAWAN_Coverage_Drive_Test_Report.pdf) to learn more.

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

The following are the available modules: **RAK4200, RAK4270, RAK4600, RAK4260,RAK811 and RAK3172**. The features of each module are shown in the following table:

| Module Name           | RAK4200                                                        | RAK4270                                                                                | RAK4600                                                      | RAK4260                                                                        | RAK811                                                         | RAK3172                                                         |
| --------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------ | -------------------------------------------------------------- | --------------------------------------------------------------- |
| MCU                   | STM32L071KB                                                    | STM32L071KB                                                                            | nRF52832                                                     | ATSAMR34J18B                                                                   | STM32L151CBU6                                                  | STM32WLE5CC                                                     |
| LoRa Chip             | SX1276                                                         | SX1262                                                                                 | SX1276                                                       | Integrated in the ATSAMR34J18B chip                                            | SX1276                                                         | Integrated in the STM32WLE5CC chip                              |
| 32M TCXO              | Not supported                                                  | Not supported                                                                          | Not supported                                                | Supported                                                                      | Supported                                                      | Not Yet Supported                                               |
| Support Mode          | PA_BOOST mode • Receive mode                                   | • PA_BOOST mode • Receive mode                                                         | • PA_BOOST mode • Receive mode                               | • PA_BOOST mode • RFO_HF mode • Receive mode                                   | • PA_BOOST mode • RFO_HF mode • Receive mode                   | PA_BOOST mode Receive mode                                      |
| TX Power              | **PA_BOOST**: 20dB max                                         | **PA_BOOST:** 22dB max                                                                 | **PA_BOOST:** 20dB max BT: -20~4dB                           | **PA_BOOST:** 20dB RFO_HF mode: 14dB max                                       | **PA_BOOST**: 20dB max  **RFO_HF mode**: 14dB max              | PA_BOOST: 22dB max                                              |
| Frequency             | **RAK4200H**: 868Mhz, 915Mhz  **RAK4200L**: 433Mhz, 470~510Mhz | **RAK4270(H):** IN865, EU868, AU915, US915, KR920, AS923  **RAK4270(L):** EU433, CN470 | **RAK4600(H):** IN865, EU868, AU915, US915, KR920, AS923     | **RAK4260(H):** IN865, EU868, AU915, US915, KR920, AS923                       | **RAK4200H**: 868Mhz, 915Mhz  **RAK4200L**: 433Mhz, 470~510Mhz | IN865, EU868, US915, AU915, KR920, AS923, RU864                 |
| Form Factor           | 15 x 15.5 x 2.5 mm                                             | 15 x 15.5 x 2.5 mm                                                                     | 15 x 23 x 2.5 mm                                             | 15x15x1.8mm                                                                    | 22x14x1.7mm                                                    | 15 x 15.5 x 3.5 mm                                              |
| I/O ports             | 2 UART ports 1 I2C port SWD port 2 GPIOs                       | 2 UART ports 1 I2C port SWD port 4 GPIOs                                               | 2 UART ports 1 I2C port 1 SWD port 1 NFC port 2 GPIOs        | 2 UART ports 1 I2C port 1 SWD port 1 SPI port 1 USB port 3 ADCs 3 GPIOs 2 PTCs | 2 UART ports 1 I2C ports 6 ADCs 8 GPIOs                        | 2 UART ports 1 I2C port 1 SPI port SWD port 6 GPIOs 5 Analog in |
| Receive Current       | **LoRa Receive**: 15mA                                         | **LoRa Receive:** 15mA                                                                 | **LoRa Receive:** 17mA **BT Receive:** 11.5mA                | **LoRa Receive:** 13.6mA                                                       | **LoRa Receive**: 16mA                                         | 5.22 mA                                                         |
| Tx current            | **LoRa PA_BOOST**: 124mA                                       | **LoRa PA_BOOST:** 124mA                                                               | **LoRa PA_BOOST&BT sleep:** 125mA  **BT tx&LoRa sleep:** 9mA | **PA_BOOST@20dB:** 126mA  **RFO@14dB:** 33mA                                   | **PA_BOOST@20dB**: 126mA  **RFO@14dB**: 33mA                   | 87 mA (@20dBm 868 MHz)                                          |
| Sleep Current         | 1.5uA                                                          | 1.5uA                                                                                  | 2.0uA                                                        | 860nA                                                                          | 10uA                                                           | 1.69 uA                                                         |
| Supply Voltage        | 2.0 - 3.6V                                                     | 2.0 - 3.6V                                                                             | 2.0 - 3.6V                                                   | 1.8V - 3.6V                                                                    | 3V - 3.45V                                                     | 2.0 - 3.6V                                                      |
| RF port               | •LoRa with Ipex •Stamp pinout without Ipex                     | •LoRa with Ipex •Stamp pinout without Ipex                                             | •LoRa with Ipex •BT with Ipex                                | Stamp pinout without Ipex                                                      | Stamp pinout without Ipex                                      | LoRa with Ipex Stamp pinout without Ipex                        |
| Pin Count             | 20                                                             | 20                                                                                     | 42                                                           | 36                                                                             | 34                                                             | 32                                                              |
| Program Tool          | J-link                                                         | J-link                                                                                 | J-link                                                       | J-link                                                                         | UART                                                           | UART, J-link                                                    |
| Certifications        | CE/FCC                                                         | CE/FCC/KC/JRL                                                                          | CE/FCC                                                       | CE/FCC/KC                                                                      | KC/CE (Ongoing)/FCC (Ongoing)                                  |                                                                 |
| LBT                   | -                                                              | -                                                                                      | -                                                            | -                                                                              | -                                                              | Supported                                                       |
| LoRaWAN Version       | 1.02                                                           | 1.02                                                                                   | 1.02                                                         | 1.02                                                                           | 1.02                                                           | 1.03                                                            |
| LoRaWAN Certification | -                                                              | -                                                                                      | -                                                            | -                                                                              | -                                                              | Ongoing                                                         |
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

<faq>
<template #question>
10. What is the difference between all antennas that RAK currently offers?
</template>
<template #answer>

The following is a comparison between the antennas available in our store:

| Antenna Model              | 905000 / 905001     | RAKARG15           | RAKARJ14           | RAKARJ15           | RAKARJ16           | RAKARJ17           | RAKARJ18               | RAKARJ19               |
| -------------------------- | ------------------- | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ---------------------- | ---------------------- |
| Frequency Range            | 858MHz ~ 878MHz     | 900MHz ~ 930MHz    | 902MHz ~ 928MHz    | 863MHz ~ 870MHz    | 902MHz ~ 928MHz    | 863MHz ~ 870MHz    | 900MHz ~ 930MHz        | 853MHz ~ 883MHz        |
| Peak Gain                  | 8.0dBi              | 8.0dBi             | 2.3dBi             | 2.8dBi             | 2.3dBi             | 2.8dBi             | 1.2dBi                 | 2.3dBi                 |
| VSWR                       | ≤ 1.5               | ≤ 1.5              | ≤ 1.5              | ≤ 1.3              | ≤ 1.5              | ≤ 1.3              | ≤ 2.0                  | ≤ 2.0                  |
| Efficiency                 | ≤ 69%               | ≤ 65%              | > 80%              | > 80%              | > 80%              | > 80%              | N/A                    | N/A                    |
| Feed Impedance             | 50Ω                 | 50Ω                | 50Ω                | 50Ω                | 50Ω                | 50Ω                | 50Ω                    | 50Ω                    |
| Polarization               | Vertical            | Vertical           | Vertical           | Vertical           | Vertical           | Vertical           | Vertical               | Vertical               |
| Cover Material (Color)     | Fiberglass (White)  | Fiberglass (White) | Plastic (White)    | Plastic (White)    | Plastic (Black)    | Plastic (Black)    | Plastic (Black)        | Plastic (Black)        |
| Connector Type             | N-type Male         | N-type Male        | RP-SMA             | RP-SMA             | RP-SMA             | RP-SMA             | RP-SMA                 | RP-SMA                 |
| Dimension (mm)             | Փ 25.0mm x 1300.0mm | Փ 25.0mm x 900.0mm | Փ 13.0mm x 198.0mm | Փ 13.0mm x 198.0mm | Փ 13.0mm x 198.0mm | Փ 13.0mm x 198.0mm | Փ 8.2-10.0mm x 142.0mm | Փ 8.2-10.0mm x 142.0mm |
| Operation Temperature (°C) | Vertical            | Vertical           | Vertical           | Vertical           | Vertical           | Vertical           | Vertical               | Vertical               |
| Humidity Range             | Vertical            | Vertical           | Vertical           | Vertical           | Vertical           | Vertical           | Vertical               | Vertical               |


</template>
</faq>

<faq>
<template #question>
10. Do all RAK gateways have GPS? Is it necessary at all?
</template>
<template #answer>

Yes, except for RAK7258 WisGate Edge Lite, which is an indoor gateway. All gateways have either a built-in GPS or have an input to use an external one. The GPS is mandatory for Class B, so that the beacons are all synchronized and to use multicasting as well.


</template>
</faq>

<faq>
<template #question>
11. How to factory reset the gateway? 
</template>
<template #answer>

- For WisGate Edge Gateways:
    
    - There are two ways to do a factory reset. One is from the Web UI: go to System > Backup/Flash Firmware > Perform reset. The second option is the reset button of the gateway itself by holding it for 10+ seconds.

- For WisGate Developer Gateways:
  
    - Reflash the firmware image on the SD card. On how to do so, refer to the documentation for the product in question.

</template>
</faq>



