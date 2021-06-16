---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK1910. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
tags:
  - quickstart
  - wisblock
  - RAK1910
prev: ../Overview/ 
next: ../Datasheet/ 
---

# Quick Start Guide

This guide introduces the RAK1910 WisBlock GNSS Location Module and how to program with it. The information obtained from the GPS will then be printed over the USB debug port of the WisBlock Base board.

## Prerequisite

### What Do You Need?

Before going through each and every step on using RAK1910 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware 

- [RAK1901 and GPS antenna](https://store.rakwireless.com/collections/wisblock-sensor/products/rak1910-max-7q-gnss-location-sensor)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- Li-Ion/LiPo battery (JST PHR-2 2&nbsp;mm female connector)
- Solar charger (optional)

#### Software

- Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [Github repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

WisBlock can integrate a GPS receiver which allows to know the exact outside location of the device as well as the current date and time. 

For more information about RAK1910, refer to the [Datasheet](../Datasheet/).

::: tip 📝 NOTE: 
Due to the weak GPS signal inside the buildings, it is recommended to use the GPS module outdoors, with a direct line of sight to the sky. This will ensure the necessary signal quality to obtain valid GPS data.
:::

The GPS module gives the following information:

- latitude
- longitude
- altitude
- speed
- direction
- date/time

RAK1910 module can only be connected on **SLOT A** of WisBlock Base to communicate with the WisBlock Core; hence, it will not work on SLOT B to D. Also, always secure the connection of the WisBlock module by using the compatible screw.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/rak1910-assembly.png"
  width="70%"
  caption="RAK1910 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in Figure 2, the location for Slot A, B, C, and D are properly marked by silkscreen. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) in order to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/14.wisblock-sensor-silkscreen.png"
  width="70%"
  caption="RAK1910 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applier.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in Figure 5, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

#### GPS Antenna

Another important part component of RAK1910 is the GPS antenna. You need to ensure that it is properly connected to have a good GPS signal.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/gps_antenna.png"
  width="35%"
  caption="GPS antenna"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK1910 uses UART communication lines and it can cause possible conflict especially on some IO modules. 
:::


After setting up, you can now connect the battery and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

The GPS module starts up by default at 4800&nbsp;bps. This UART speed can be increased using the library functions that have been designed for controlling and managing the module.

The GPS receiver has two operational modes: **NMEA** (National Marine Electronics Association) **Mode** and **Binary Mode**. NMEA mode uses statements from this standard to obtain location, time, and date. The binary mode is based on the sending of structured frames to establish communication between the microcontroller and the GPS receiver, i.e. to read/set ephemeris.

Listed are the different types of NMEA statements that the RAK1910 GPS receiver supports:

- **NMEA GGA**: Provides location data and an indicator of data accuracy.
- **NMEA GSA**: Provides the status of the satellites the GPS receiver has been connected to.
- **NMEA GSV**: Provides information about the satellites the GPS receiver has been connected to.
- **NMEA RMC**: Provides information about the date, time, location, and speed.
- **NMEA VTG**: Provides information about the speed and course of the GPS receiver.
- **NMEA GLL**: Provides information about the location of the GPS receiver.

The most important NMEA statements are the GGA statements which provide a validity indicator of the measurement carried out, the RMC statement which provides location, speed, and date/time, and the GSA statement which provides information about the status of the satellites the GPS receiver has been connected to.



:::warning ⚠️ WARNING    
* The included active GPS antenna must be **securely attached** to the iPEX antenna connector on the board. This is very important, otherwise the module will not work.
* You need to setup the device outdoor. It will take sometime for the device to get stable satellite connectivity. If you will configure it indoor, it will not work.
::: 

#### Initial Test of the RAK1910 WisBlock Module

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. You need to select first the WisBlock Core you have.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/rak4631_board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/rak11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. The [Basic Sample Code for RAK1910](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK1910_GPS_UBLOX7) will work on all WisBlock Core. You can open the example codes depending on your WisBlock Core, as shown in Figures 9 and 10. 

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/rak4631_gps.png"
  width="100%"
  caption="Opening RAK1910 example for RAK4631 WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/rak11200_gps.png"
  width="100%"
  caption="Opening RAK1910 example for RAK11200 WisBlock Core"
/>

3. Once the example code is open, install the [TinyGPS](https://github.com/neosarchizo/TinyGPS) library by clicking the highlighted link, as shown in Figures 11 and 12.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/tinygps_lib.png"
  width="100%"
  caption="Opening RAK1910 example for RAK4631 WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/tinygps_done.png"
  width="100%"
  caption="Opening RAK1910 example for RAK11200 WisBlock Core"
/>

4. After the successful installation of the library, you can now select the right port and upload the code, as shown in Figures 13 and 14.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/select_port.png"
  width="100%"
  caption="Opening RAK1910 example for RAK4631 WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/upload.png"
  width="100%"
  caption="Opening RAK1910 example for RAK11200 WisBlock Core"
/>

5. When you successfully upload the example sketch, open the Serial Monitor of the Arduino IDE to see the logs. The GPS will try to get a signal fix from satellites and this will vary depending on your location and if you have a direct line of sight to the sky. It can take few seconds to minutes. If you see the logs, as shown in Figure 15, your RAK1910 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/log_scan.png"
  width="80%"
  caption="Scanning GPS signal logs"
/>

6. If everything is successful, you should now see the GPS coordinates on the Serial Monitor of the Arduino IDE, as shown in Figure 16.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/log_fix.png"
  width="80%"
  caption="Scanning GPS signal logs"
/>


#### RAK1910 LoRaWAN GPS Tracker

For WisBlock Core RAK4630, it has an example for [LoRaWAN GPS Tracker](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/solutions/GPS_Tracker). 
   
The following example codes are compatible to LoRaWAN GPS Tracker Kits:

* [LoRaWAN Tracker Kit](https://store.rakwireless.com/collections/kits-bundles/products/wisblock-kit-3-gps-tracker)
* [LoRaWAN Tracker Kit with Solar Panel](https://store.rakwireless.com/collections/kits-bundles/products/wisblock-kit-2-lora-based-gps-tracker-with-solar-panel)

You also need to have a [RAK1904 (Accelerometer Module)](https://store.rakwireless.com/products/rak1904-lis3dh-3-axis-acceleration-sensor) on this example since it will trigger the transmission of LoRaWAN packets. You can connect the RAK1904 on SLOT C or SLOT D of the WisBlock Base which is on the other side of the board.

After preparing the hardware, you can now open the example sketch, as shown in Figure 17.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/lorawan-gps.png"
  width="100%"
  caption="LoRaWAN GPS Tracker example"
/>

After successful compilation, you should be able to see a successful join request if you are within a compatible gateway.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/lorawan_tracker_join.png"
  width="80%"
  caption="Successful upload of GPS Tracker example"
/>

The following part of the code will trigger the sending of LoRaWAN packets.


```
data = "";
if (abs(x - z) < 400)
```


If the absolute value of the difference between the X and Z axis is less than 400, the LoRaWAN packets will be transmitted to the network server. Physically, you can trigger this condition by positioning the WisBlock upright with the USB connector either at the top or at the bottom. You can create your own conditions too when to transmit the LoRaWAN Payload.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/lorawan_tracker_transmit.png"
  width="70%"
  caption="LoRaWAN GPS Coordinate Sent"
/>

##### Payload Decoding of LoRaWAN GPS Tracker

You need to decode the payload that you send to the network server. The format of the packets is in ASCII code. This will be on HEX value on the network server side.

For example, you will receive HEX value in this length on the network server side once the payload is properly transmitted.

```
092C31342E3632363439302C4E2C3132312E3136393032322C45
```

On the payload decoder section of the network server, you can use the decoder below to see if you get the right GPS coordinates. The payload is transmitted on Port 2.

```C
function Decoder(bytes, port) {
switch(port) {
    case 1:
        return {
        };
    case 2:
        return {
          payload: String.fromCharCode.apply(null, bytes)
        };
    default:
        return bytes;
  }
}
```

If you got the right payload, the decoded payload should look like the one below.

```
\t,14.626341,N,121.169067,E
```




    