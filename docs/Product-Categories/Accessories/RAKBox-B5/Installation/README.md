---
prev: ../Datasheet/
next: false
tags:
  - RAKBox-B5
  - Installation Guide
rak_desc: In this guide, the process of assembling and mounting your RAKBox-B5 will be shown step by step. Strict adherence to the steps guarantees a secured and durable casing.
---

## Installation Guide

## Assembly List

<rk-img
  src="/assets/images/accessories/rakbox-b5/installation/package-contents-b5.png"
  width="80%"
  caption="Assembly list"
/>

## Assembly

**Step 1:** Place the acrylic base plate on the table. There are silkscreen marks (TOP Surface) on the base plate. Place it face up. Install the hexagon standoff on the base plate as shown in the figure below.

<rk-img
  src="/assets/images/accessories/rakbox-b5/installation/box-labels.png"
  width="60%"
  caption="Acrylic Base Labels"
/>

**Step 2:** Fix the WisIO module with three M1.2\*3 screws. The figure shows the fixation of RAK1920.

<rk-img
  src="/assets/images/accessories/rakbox-b5/installation/wisblock-io.png"
  width="40%"
  caption="Attaching WisIO Module"
/>

**Step 3:** Fix the WisBlock module on the base plate with M2.5\*4 screws.

:::warning ⚠️ WARNING
If you want to install the RAK1921 OLED, refer to [Installation of RAK1921](#installation-of-rak1921), you need to solder a 4Pin socket to the RAK5005-O before installing the WisBlock module.
:::

:::tip 📝 NOTE
The number of screws is related to the specific module, please confirm according to the actual module.
:::

<rk-img
  src="/assets/images/accessories/rakbox-b5/installation/box-wisblock.png"
  width="40%"
  caption="Attaching WisBlock Module on the Base"
/>

**Step 4:** Use two M2.5\*6 screws to fix the battery holder on the base plate.

<rk-img
  src="/assets/images/accessories/rakbox-b5/installation/box-battery-mount.png"
  width="40%"
  caption="Attaching the Battery Holder"
/>

**Step 5:**  Plug the antenna connectors into the IPEX connectors and place the antennas on the base plate. The position in the figure below is the recommended position for LoRa and BLE antennas. You can always adjust the position according to your actual needs.

<rk-img
  src="/assets/images/accessories/rakbox-b5/installation/antenna-placement.svg"
  width="40%"
  caption="Assembly - Step 5"
/>

**Step 6:** Install the 18650 battery in the battery holder, and adjust the position of the battery so that the battery wires on the top side of the holder.

:::warning ⚠️ WARNING
After the battery is placed into the battery holder, the battery can be rotated so that the battery wires are not squeezed.
:::

<rk-img
  src="/assets/images/accessories/rakbox-b5/installation/attention.png"
  width="30%"
  caption="Attaching the 18650 Battery"
/>

**Step 7:** Plug the battery connector into the WisBlock Base.

<rk-img
  src="/assets/images/accessories/rakbox-b5/installation/image-20200713164520838.png"
  width="40%"
  caption="Assembly - Step 7"
/>

**Step 8:** Fix the acrylic upper cover plate on the standoff with four M2.5 \* 6 screws.

<rk-img
  src="/assets/images/accessories/rakbox-b5/installation/box-top-plate.png"
  width="40%"
  caption="Attaching the Cover Plate"
/>

**Step 9:** Turn the shell over and install the rubber pad near the corners of the acrylic bottom.

<rk-img
  src="/assets/images/accessories/rakbox-b5/installation/image-20200713164544802.png"
  width="40%"
  caption="Attaching Rubber Pads"
/>

## Installation of RAK1921

**Step 1:** Before installation, a 4 pin connector must be soldered to the RAK1921 and a 4 pin socket must be soldered to RAK5005-O.

<rk-img
  src="/assets/images/accessories/rakbox-b5/installation/image-20200713164606765.png"
  width="50%"
  caption="Installation of RAK1921"
/>

**Step 2:** Please install the WisBlock modules according to the chapter 2.

**Step 3:** Fix two M2\*4+4 hexagon bolts at the position shown in the figure of acrylic upper cover.

<rk-img
  src="/assets/images/accessories/rakbox-b5/installation/box-assembly.png"
  width="40%"
  caption="Installing Hexagon Bolts"
/>

**Step 4:** Use two M2\*3 screws to fix the RAK1921 on the acrylic upper cover.

<rk-img
  src="/assets/images/accessories/rakbox-b5/installation/box-display.png"
  width="40%"
  caption="Installing RAK1921 OLED Display"
/>

## Assembling Other Modules

The acrylic shell supports the sensor installation of Microbus, Seeed modules and a SMA antenna connector. To use these breakout boards, install the RAK1920 WisBlock IO module. The following figure shows the prepared mounting places for Microbus and Seeed modules:

<rk-img
  src="/assets/images/accessories/rakbox-b5/installation/mounting-places.png"
  width="50%"
  caption="Mounting Places for Other Modules"
/>
