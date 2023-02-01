---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: This document explains the installation details of WisBlock modules into the RAK5005-O Baseboard.
tags:
  - User-Manual
  - Installation
  - WisBlock
  - RAK5005-O
header:
  title: RAK5005-O Baseboard Installation Guide
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/rak5005-O-baseboard-installation-guide.jpg
posted: 29/02/2020 10:30 AM
---

# RAK5005-O Baseboard Installation Guide

:::tip 📝 NOTE:

RAK19007 is the 2nd generation WisBlock Base board in same form-factor with RAK5005-O. There are minor differences on the two WisBlock Base boards with makes this guide compatible to both RAK19007 and RAK5005-O Baseboards.

:::

RAK5005-O WisBlock module is a motherboard that allows you to attach  MCU, sensors, and IO modules through the standardized expansion connectors. These connectors provide a data bus interconnection between the modules attached to the baseboard.

This document explains the details related to the installation of modules into the RAK5005-O board. The following section discusses the general concepts to manipulate the WisConnector in any WisBlock module are explained. For the second one, it explains the installation details of each type of WisBlock module: Core, Sensor, and IO, and the last section explains how to remove a WisBlock module from the RAK5005-O baseboard.


## WisConnector General Concepts

### Attaching a WisConnector


The IO Connector is the interface between the RAK5005-O module and the WisBlock Core, Sensor, and IO modules. Before manipulating these modules, read the following instructions.

:::tip 📝 NOTE:

This document uses two arrows. Refer to Figure 1 for its representation.

:::

<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/1.arrows.png"
  width="50%"
  caption="Notation within the document"
/>


1. Align the connectors. Keep the header parallel and place it lightly in the corresponding lap joint of the socket.

<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/2.alignment.png"
  width="75%"
  caption="Alignment of WisConnector"
/>

2. Fit the connector. Tilt one end of the connector (header) less than 20 degrees, while do not apply force during this process, gently place the other end in parallel.

<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/3.header-to-socket.png"
  width="75%"
  caption="Fit the WisConnector’s header inside of the socket"
/>

3. After the above alignment steps, the header and socket are matched, but still not buckled.

<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/4.header-matched.png"
  width="75%"
  caption="WisConnector’s header matched inside of the socket"
/>

4. Apply forces evenly by pressing in parallel, then there will be a sound confirming the completion of the buckling.

<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/5.buckle-the-head.png"
  width="75%"
  caption="Apply forces to buckle the heard to the socket "
/>

In the process of buckling and applying force, avoid application of uneven force on both sides.

<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/6.uneven-forces.png"
  width="75%"
  caption="Avoid applying uneven forces "
/>

When the buckling process is completed, check that the header and socket are kept in parallel.

<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/7.buckle-header-to-socket.png"
  width="75%"
  caption="Correct way to buckle the WisConnector’s header to the socket"
/>

If after buckling, the header and socket are not in a parallel state (not fully assembled in one place), then press the even force on both sides of the long side to complete the correct buckling.


<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/8.not-parallel.png"
  width="75%"
  caption="WisConnector’s header is not parallel to the socket"
/>

When the aforementioned steps are not completed yet, DO NOT apply force to buckle. Otherwise, there will be a risk to damage the connector. When the connector cannot be smoothly buckled down, repeat the alignment step.


### Detaching a WisConnector

1. To disconnect the header from the socket, pull-out parallelly with even forces.


<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/9.detach-header.png"
  width="75%"
  caption="Correct way: Applying even forces to detach the header from the socket"
/>

2. Avoid pulling out the header asymmetrically in the long-side direction.

<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/10.wrong-way-of-detaching.png"
  width="60%"
  caption="Wrong way: Applying uneven forces to detach the header from the socket"
/>

3. The short-side of the connector can be pulled out asymmetrically, but apply the force vertically and avoid to rotate the header.


<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/11.dont-rotate.png"
  width="60%"
  caption="Wrong way: Do not rotate the header"
/>

4. Avoid applying forces in a single corner.

<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/12.dont-apply-force.png"
  width="55%"
  caption="Wrong way: Do not apply force in a single corner of the header"
/>

## Assembling a WisBlock Module

:::tip 📝 NOTE:

Read carefully the complete instruction first before trying to assemble a module.

:::

### WisBlock Core


A WisBlock Core module is designed to be installed on the CPU slot of the RAK5005-O baseboard. As shown in Figure 13, the location is properly marked by silkscreen. Follow carefully the procedure defined in section 2.1 in order to attach a Core module. Once attached, fix the module with 4 pieces of M1.2 x 3mm screws.


<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/13.wisblock-core-silkscreen.png"
  width="75%"
  caption="WisBlock Core silkscreen on the RAK5005-O baseboard"
/>


### WisBlock Sensor

:::tip 📝 NOTE:

The RAK1910 GPS module must be installed only on the front side of the RAK5005-O baseboard. The RAK1910 is a full-length module that use the space of two WisBlock IO module.

:::

A WisBlock Sensor module is designed to be installed on the Sensor slot of the RAK5005-O baseboard. There are four (4) available sensor slots in the RAK5005-O baseboard, two (2) on each side of the baseboard. As shown in Figure 14, the location is properly marked by silkscreen. Follow carefully the procedure of the previous section, Attaching a WisConnector, to attach a WisBlock Sensor module. Once attached, fix the module with a M1.2 x 3 mm screw.

<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/14.wisblock-sensor-silkscreen.png"
  width="75%"
  caption="WisBlock Sensor silkscreens on the RAK5005-O baseboard"
/>


### WisBlock IO


A WisBlock IO module is designed to be installed on the IO slot of the RAK5005-O baseboard. There is a single IO slot in the RAK5005-O baseboard. As shown in Figure 15, the location is properly marked by silkscreen. Follow carefully the procedure of the previous section, Attaching a WisConnector, to attach a WisBlock Sensor module. Once attached, fix the module with three pieces of M1.2 x 3mm screws.


<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/15.wisbloc-io-silkscreen.png"
  width="75%"
  caption="WisBlock IO silkscreen on the RAK5005-O baseboard"
/>


## Disassembling a WisBlock Module

:::tip 📝 NOTE:

Read carefully the complete instruction first before trying to disassemble a module.

:::

1. The procedure to disassemble any type of WisBlock modules is the same. As shown in Figure 16, first, remove the screws.

<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/16.removing-screws.png"
  width="75%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, on the PCB of a Wisblock module, there is a silkscreen that shows the correct location where force can be applied. By applying even force under the marked area,  the module can be detached from the baseboard. See Figures 17 and 18.


<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/17.detaching-silkscreen.png"
  width="75%"
  caption="Detaching silkscreen on the WisBlock module"
/>


<rk-img
  src="/assets/images//knowledge-hub/learn/rak5005-o-baseboard-installation-guide/18.detaching-module.png"
  width="65%"
  caption="Applying even forces on the proper location of a WisBlock module to detach the module from the baseboard"
/>

