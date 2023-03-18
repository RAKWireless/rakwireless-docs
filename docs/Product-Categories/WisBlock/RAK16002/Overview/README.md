---
rak_img: /assets/images/wisblock/rak16002/RAK16002.png
rak_desc: RAK16002 is a part of the WisBlock Sensor Series that is capable of measuring battery charge in battery-powered handheld PC and portable product applications.
rak_grp: [wisblock, wissensor]
next: ../Quickstart/
prev: ../../
tags:
    - wisblock
    - RAK16002
    - LTC2941IDCB
---

# RAK16002 WisBlock Coulomb Sensor Module

Thank you for choosing **RAK16002 WisBlock Coulomb Sensor Module** in your awesome IoT Project! 🎉 To help you get started, we have provided you with all the necessary documentation for your product.

* [RAK16002 Quick Start Guide](../Quickstart)
* [Datasheet](../Datasheet/)
* <a href="../../Quickstart/" target="_blank">WisBlock Quick Start Guide</a>
* [WisBlock Source Code Repository](https://github.com/RAKWireless/WisBlock/)
* [RAK16002 3D Model](https://downloads.rakwireless.com/3D_File/WisBlock/3D_RAK16002.stp)
* [40-Pin Male Connector 3D file](https://downloads.rakwireless.com/3D_File/Accessory/WisConnector/M40S1003K6M.stp)
* [WisBlock IO Tutorial](/Knowledge-Hub/Learn/WisBlock-IO-Tutorial/)

**Example**
* [Sample Code: Measuring capacity and charge of a battery](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/IO/RAK16002_Coulomb/RAK16002_Coulomb_INT_LTC2941/RAK16002_Coulomb_INT_LTC2941.ino)

## Product Description

RAK16002 is a Coulomb sensor module based on LTC2941IDCB that features programmable high and low thresholds for the accumulated charge. If a threshold is exceeded, the device communicates an alert by setting a flag in the internal status register. It can measure the battery charge state in battery-powered IoT devices. Its operating range is perfectly suited for single-cell Li-Ion batteries.

The precision coulomb counter integrates current through an internal sense resistor between the battery’s positive terminal and the load or charger. The measured charge is stored in internal registers. An I2C interface accesses and configures the device.

## Product Features

* **Module Specifications**

  * Indicates Accumulated Battery Charge and Discharge
  * High Accuracy Analog Integration
  * 1% Charge Accuracy
  * Configurable Alert Output/Charge Complete Input
  * I2C interface
  * 3.3&nbsp;V Power Supply

* **Module Size**
    * 15 x 25&nbsp;mm

## Prerequisites

To use a **RAK16002**, you need at least a **WisBlock Base board** to plug the module in. **WisBlock Base board** is the power supply for the **RAK16002** module. Furthermore, you need a **WisBlock Core** module to use the sensor.

:::warning ⚠️ WARNING
Make sure to fix the module with the screws to ensure a proper function.
:::