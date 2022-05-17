---
rak_desc: RAK RPi DIY Gateway Kit is a kit that consist of WisLink modules to create a complete and cost-efficient gateway.
rak_img: /assets/images/accessories/rak-rpi-diy-gateway-kit/7.mounted-concentrator.png
prev: ../Overview/
next: false
tags:
    - RAK5146 Pi HAT
    - Accessories
    - Gateway
    - WisLink
---

# Installation Guide

## Kit Inclusion

The RAK RPi DIY Gateway Kit includes all required parts (**except for the Raspberry Pi 4**) that you need to create a complete and cost-efficient gateway. The kit's inclusion list is as follows:

- [RAK5146 WisLink LPWAN Concentrator](https://store.rakwireless.com/products/wislink-lpwan-concentrator-rak5146?variant=39677269409990)
- [RAK2013 WisLink Cellular Pi HAT](https://store.rakwireless.com/products/rak2013-cellular-pi-hat) (only in the cellular variant)
- [RAK2287 / RAK5146 Pi HAT](https://store.rakwireless.com/products/rak2287-pi-hat)
- RAK7244 / RAK7244C Enclosure (depending on the chosen variant)
- LoRa antenna with RP-SMA to IPEX connector
- GPS antenna with SMA to IPEX connector
- LTE antennas x2 (only in the cellular variant) with RP-SMA to IPEX connectors
- SD card
- Power adapter

:::tip 📝 NOTE:
The RAK RPi DIY Gateway Kit is designed to work specifically with **Raspberry Pi 4**, which is **NOT** included in the kit. You need to provide it yourself. 
:::


## Assembly Guide

1. Mount the Raspberry Pi 4 to the bottom plate and secure it with the 12 mm spacers (x4). The holes on the plate match the holes on the Raspberry Pi 4.


<rk-img
  src="/assets/images/accessories/rak-rpi-diy-gateway-kit/1.mount-raspberry.png"
  width="60%"
  caption="Mount the Raspberry Pi 4 on the bottom plate"
/>

2. Attach the bottom plate to the enclosure by first fitting the ports in their respective holes and then fitting the rest of the enclosure by a slight backward movement. Secure the plate to the enclosure by using four of the flathead bolts. 


<rk-img
  src="/assets/images/accessories/rak-rpi-diy-gateway-kit/2.attach-bottom-plate.png"
  width="60%"
  caption="Attach the bottom plate to the enclosure"
/>

:::tip 📝 NOTE:
Skip the following step if the version of your kit is the non-cellular one, and head directly to step 4.
:::

3. Mount the RAK2013 WisLink Cellular Pi HAT.

- Fix both RP-SMA Female connectors on the lower holes of the enclosure by using the included washers and nuts. After the connectors are fixed, gently press the IPEX to the RF connector on the RAK2013 WisLink Cellular HAT until they click on place. Finally, mount the RAK2013 on the Raspberry Pi 4. 

<rk-img
  src="/assets/images/accessories/rak-rpi-diy-gateway-kit/3.mounting-rak2013.png"
  width="60%"
  caption="Mounting the RAK2013"
/>

- Secure the RAK2013 by using the 10&nbsp;mm spacers (x4).

<rk-img
  src="/assets/images/accessories/rak-rpi-diy-gateway-kit/4.secure-rak2013.png"
  width="60%"
  caption="Securing the RAK2013"
/>

4. Mount the RAK5146 WisLink LPWAN Concentrator to the RAK2287 / RAK5146 Pi HAT by aligning and inserting the RAK5146 concentrator into the mPCIe slot (under a 45-degree angle) of the RAK2287 / RAK5146 Pi HAT. Make sure the card fits snugly into the connector. Gently press it down and fasten it with 2 screws, the screw holes on the concentrator should match the ones on the Pi HAT. Use the roundhead bolts (2&nbsp;mm in outside diameter).

<rk-img
  src="/assets/images/accessories/rak-rpi-diy-gateway-kit/5.mount-concentrator.png"
  width="60%"
  caption="Mounting the concentrator to the Pi HAT"
/>


5. Mount the RAK2287 / RAK5146 Pi HAT with the attached concentrator on top of the RAK2013 WisLink Cellular HAT (in the cellular variant) or directly on the Raspberry Pi 4 (in the non-cellular variant). Secure the Pi HAT with 4 roundhead bolts (2,5 mm in outside diameter).

<rk-img
  src="/assets/images/accessories/rak-rpi-diy-gateway-kit/6.mount-pi-hat.png"
  width="60%"
  caption="Mounting the Pi HAT to the assembly"
/>


6. Before mounting the RAK5146 LPWAN concentrator, fix RP-SMA Female and SMA Female connectors on the upper holes of the enclosure by using the included washers and nuts.

:::tip 📝 NOTE:
The RP-SMA Female connector is for the LoRa IPEX connector of the RAK5146 LPWAN concentrator and the SMA Female connector is the GPS concentrator connector. The concentrator connectors are labeled, make sure to not mix them. 
:::

<rk-img
  src="/assets/images/accessories/rak-rpi-diy-gateway-kit/7.mounted-concentrator.png"
  width="60%"
  caption="Mounted concentrator"
/>


7. To close the enclosure, attach the top heatsink plate on top using four flathead bolts.

<rk-img
  src="/assets/images/accessories/rak-rpi-diy-gateway-kit/8.heatsink.png"
  width="60%"
  caption=" Mounting top heatsink cover on the enclosure"
/>


8. Attach the LoRa, GPS, and LTE (only in the Cellular variant) antennas to the DIY gateway by screwing them to the corresponding connectors on the side. 

<rk-img
  src="/assets/images/accessories/rak-rpi-diy-gateway-kit/9.mount-antennas.png"
  width="60%"
  caption="Mounting the antennas"
/>

## Flashing the Firmware

The assembly is complete. You are now ready to flash the SD card. Follow the guide on how to flash the latest RAK5146 Pi HAT firmware. 