---
rak_img: /assets/images/wisblock/rak12035/RAK12035.png
rak_desc: RAK12035 is a WisBlock soil moisture sensor probe that uses capacitive sensing to measure the amount of moisture in the soil and the soil temperature.
rak_grp: [wisblock, wissensor]
next: ../Quickstart/
prev: ../../
tags:
    - wisblock
    - RAK12035
    - Atmel
    - ATTINY441-SSU
---


# RAK12035 WisBlock Soil Moisture Sensor Module

Thank you for choosing **RAK12035 WisBlock Soil Moisture Sensor Module** in your awesome IoT Project! 🎉 To help you get started, we have provided you with all the necessary documentation for your product.

* [RAK12035 Quick Start Guide](../Quickstart/)
* [Datasheet](../Datasheet/)
* <a href="../../Quickstart/" target="_blank">WisBlock Quick Start Guide</a>
* [WisBlock Source Code Repository](https://github.com/RAKWireless/WisBlock/)
* [RAK12035 3D Model](https://downloads.rakwireless.com/3D_File/WisBlock/3D_RAK12035.stp)

**Example**
- [Sample Code: RAK12035_SoilMoisture](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK12035_SoilMoisture)

## Product Description

RAK12035 is a soil sensor probe module based on the ATTINY441-SSU microcontroller from Atmel. It uses capacitive sensing to measure moisture. A 1&nbsp;MHz square wave is the output from the chip through a resistor into a big pad, and the surrounding ground plane acts as a parasitic capacitor. Both the resistor and the capacitor form a low-pass filter whose cutoff frequency changes when there is a change in capacitance.

The soil around the sensor acts as an electrolyte whose dielectric constant changes depending on the amount of moisture in it, resulting in changing the capacitance of our makeshift capacitor too. The filtered square wave is fed into a peak detector, formed by a diode and capacitor. The diode allows the positive peaks to go through, while the capacitor stores the maximum voltage of those peaks. The voltage is measured by an ADC in the MCU. An NTC element is used to measure the temperature of the soil.

RAK12035 is a separate soil moisture sensor probe that can be connected to the RAK12023 module.

Because you need to bury the RAK12035 sensor probe into the soil, the electronics on the PCB of the soil sensor, together with the cable, are covered by a shrinkable tube for additional protection from getting wet.

## Product Features

* **Module specifications**
    * Separate connector PCB [RAK12023](/Product-Categories/WisBlock/RAK12023/Overview/) is required.
    * Measures soil moisture
    * I2C address is programmable
    * Calibration via software
    * Chipset: Atmel ATTINY441-SSU

* **Size**
    * 18.1 x 149&nbsp;mm

## Prerequisites

To use a **RAK12035** sensor, you need to connect it to **RAK12023** Soil Moisture Connector. You also need a **WisBlock Base** to plug the module in. **WisBlock Base** provides power supply to the **RAK12035**. Furthermore, you need a **WisBlock Core** module to use the sensor.

:::warning ⚠️ WARNING
- Make sure to fix the module with the screws to ensure a proper function.
- The RAK12035 requires calibration to ensure a proper function.
:::

