---
sidebar: false
rak_img: /assets/images/knowledge-hub/tutorials/build-a-door-open-counter-and-alarm-sensor-with-wisblock/door-open-counter-and-alarm-sensor-banner.jpg
rak_desc: This guide provides a step-by-step tutorial on how to build a door-open counter and alarm with the WisBlock RAK12027.
tags:
  - Tutorial
  - WisBlock
  - RAK13011
  - RAK19003
  - RAK19007
  - Arduino
  - PlatformIO
header:
  title: Build a Door Open Counter and Alarm Sensor with WisBlock
  caption: by <b>Bernd Giesecke</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 24/11/2022 08:00 AM
author:
  name: Bernd Giesecke
  about: Electronics Engineer, 23 years experience in industrial and automotive HW and SW R&D. Supporting Arduino open source community since 2014.
  img: /assets/images/knowledge-hub/authors/bernd-giesecke.png
---

# Build a Door Open Counter and Alarm Sensor with WisBlock

Reed relays are often used for contactless switching in many applications. The reed relay is normally open, but when a magnet is getting close to it, the relay contacts will close.

Here we will use this feature to create a door (or window) open/close detector. This can be useful for home alarm systems or in industrial applications where an automatic door in a production line requires one to count how often it is opened and closed or to make sure that the door is actually working.

<center>
<rk-img
  src="\assets\images\knowledge-hub\tutorials\build-a-door-open-counter-and-alarm-sensor-with-wisblock\sensor-plate-2.jpg"
  width="60%"
  caption="Door sensor"
/>
</center>

----

The RAK13011 magnetic switch module includes a WisBlock module, an external reed relay, and a magnet to control the reed relay.

The RAK13011 module fits into a sensor slot, but due to its size, it occupies two sensor slots. It is recommended to use Slot C of the [RAK19003](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19003/Overview/) Base Board or Slot D of the [RAK19007](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19007/Overview/) Base Board. Using these slots will not occupy two sensor slots, as they are designed for these longer sensor modules.

<center>
<rk-img
  src="\assets\images\knowledge-hub\tutorials\build-a-door-open-counter-and-alarm-sensor-with-wisblock\module-and-reed-magnet.jpg"
  width="60%"
  caption="RAK13011"
/>
</center>

:::tip 📝 NOTE
All the modules are available at the [RAKwireless Store](https://store.rakwireless.com/pages/wisblock).
:::

:::tip 📝 NOTE
The source code of this application is open source and can be downloaded from the GitHub repos
- [PlatformIO version using open source Arduino BSP](https://github.com/beegee-tokyo/RAK13011-Alarm-Msg-Queue).
- [RUI3 version](https://github.com/beegee-tokyo/RUI3-RAK13011).
:::

----


## Things to Consider

### Transmission Interval

The application is using LoRaWAN to transmit the status through a gateway to a LoRaWAN server. Integrations connected to the LoRaWAN server can then be used to take action.

As LoRaWAN is not a _**fast**_ communication medium, a ring buffer is used to store open and close events in case they are happening faster than the WisBlock Core module can transmit the events.
The buffer is designed to keep up to 50 events, but it can be increased if required.

----

### Debouncing the Relay Contacts

The reed relay contacts do not have any debouncing mechanism. It can easily happen that the bouncing of the relay contacts triggers multiple interrupts. The debouncing is done in the application by checking if the status has changed since the last interrupt.

----

### Arduino Open Source and RAKwireless RUI3 API

The application code is available in two versions.
1) The first one is for the open-source Arduino BSP and PlatformIO. It works with the WisBlock Core modules RAK4631, RAK11310, and RAK11200 (with the RAK13300 LoRa module).
The application is based on the [WisBlock-API](https://github.com/beegee-tokyo/WisBlock-API). Instead of running endlessly in the **`loop()`**, it is using timers and events to keep the MCU in idle/sleep mode as much as possible.
2) The second version is for RUI3 and works with the RAK4631-R and the RAK3372 Core modules.

:::tip ⚠️ WARNING
Due to a GPIO conflict with the RAK3372, The RAK13011 does not work when using Sensor Slot C. With the RAK3372 the RAK13011 must be used in another Sensor Slot.
:::

----

### Enclosure

When used as a window or door sensor, there are two options to deploy the sensors.
1) Use the encapsulated reed relay and magnet parts and connect the RAK13011 with wires. But this is not a very elegant solution and can look very ugly.
2) Take the reed relay out of the encapsulated part (or just buy a separate reed relay) and put the WisBlock modules, the battery, and the reed relay into a small custom enclosure.

For this tutorial, I chose the second option:
| <rk-img src="\assets\images\knowledge-hub\tutorials\build-a-door-open-counter-and-alarm-sensor-with-wisblock\sensor-open.jpg" caption="RAK13011"/> | <rk-img src="\assets\images\knowledge-hub\tutorials\build-a-door-open-counter-and-alarm-sensor-with-wisblock\sensor-place-1.jpg" caption="RAK13011"/> |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |

----

## Hardware Used

| BSP Version             | Module                                                                                                   | Function                                 |
| ----------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Open Source Arduino BSP | [RAK4631](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631/Overview/)                    | WisBlock Core Module                     |
| RUI3                    | [RAK4631-R](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631-R/Overview/)                | WisBlock Core Module                     |
| RUI3                    | [RAK3372](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-Evaluation-Board/)              | WisBlock Core Module                     |
| Any                     | [RAK19003](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19003/Overview/)                  | WisBlock Base Board                      |
| Any                     | [or RAK19007 (for RAK3372)](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19007/Overview/) | WisBlock Base Board                      |
| Any                     | [RAK13011](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK13011/Overview/)                  | WisBlock Magnetic Switch                 |
| Any                     | [Optional RAK1901](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1901/Overview/)           | WisBlock Temperature and Humidity Sensor |

----

## Software Used

<b>1. IDE </b>

  Open Source Arduino BSP and PlatformIO
  - [PlatformIO](https://platformio.org/install)
  - [Adafruit nRF52 BSP](https://docs.platformio.org/en/latest/boards/nordicnrf52/adafruit_feather_nrf52832.html)
  - [Patch to use RAK4631 with PlatformIO](https://github.com/RAKWireless/WisBlock/tree/master/PlatformIO)

  RUI3
  - [Arduino IDE](https://www.arduino.cc/en/software) (requires some file name changes and manual installation of libraries)
  - [RUI3 BSP for RAK4631 and RAK3372](hhttps://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index)

<b>2. LoRaWAN and BLE Communication </b>

  Open Source Arduino BSP and PlatformIO
  - [WisBlock-API](https://registry.platformio.org/libraries/beegee-tokyo/WisBlock-API)
  - [SX126x-Arduino LoRaWAN library](https://registry.platformio.org/libraries/beegee-tokyo/SX126x-Arduino)

  Both BSP versions
  - [CayenneLPP](https://registry.platformio.org/libraries/sabas1080/CayenneLPP)
  - [ArduinoJson](https://registry.platformio.org/libraries/bblanchon/ArduinoJson)

:::tip 📝 NOTE
When using PlatformIO, the required libraries are automatically installed.
If the RUI3 version is used in the Arduino IDE, all libraries must be installed manually with the Arduino IDE Library Manager.
:::

----


## How Does the Application Work?

In both the open source and the RUI3 versions, the WisBlock Core module is going into sleep mode after it is connected to the LoRaWAN server.

Two events are waking up the WisBlock Core module:
- Door opening or closing event triggers an interrupt
- (optional) the module can wake up in a configurable interval to send an _**\<I am Alive\>**_ message to the LoRaWAN server.

Everything else is handled in the background by RUI3 or the WisBlock-API.

:::tip 📝 NOTE
Code examples used are from the PlatformIO version of the code.
These are not the complete code, only snippets taken from the sources.
:::

In case a door opening or closing event is detected, the application will receive a wake-up signal from the interrupt callback.

```cpp
void switch_int_handler(void)
{
  switch_status = digitalRead(SWITCH_INT);
  api_wake_loop(SWITCH_CHANGE);
}
```

The application will then check the status of the relay to eliminate bouncing effects.

```cpp
if (switch_status == (uint32_t)digitalRead(SWITCH_INT))
{
  MYLOG("SWITCH", "Switch Status confirmed");
}
else
{
  MYLOG("SWITCH", "Switch bouncing");
  return;
}
```

Next, the event will be added to the ring buffer. If there is still a packet-sending activity, a timer will be started to delay the next packet sending.

```cpp
// Add event to queue
MYLOG("APP", "Adding event to queue, pending %ld", uxQueueMessagesWaiting(event_queue));
xQueueSendToBack(event_queue, &switch_status, 0);

if (lora_busy)
{
  delayed_sending.start();
  return;
}
else
{
  g_task_event_type |= STATUS;
}
```

In case it is possible to send the packet immediately, the event type is changed and the sending routine is called. First, the battery level is measured, then the oldest event status is pulled from the ring buffer and both values are added to the LoRaWAN packet.
```cpp
// Reset the packet
g_solution_data.reset();

// Get battery level
float batt_level_f = read_batt();
g_solution_data.addVoltage(LPP_CHANNEL_BATT, batt_level_f / 1000.0);

// Add switch status, get the event out of the queue
uint32_t old_event = 0;
xQueueReceive(event_queue, &old_event, 0);
MYLOG("APP", "Pulled event from queue, pending %ld", uxQueueMessagesWaiting(event_queue));

g_solution_data.addPresence(LPP_CHANNEL_SWITCH, old_event);

lmh_error_status result = send_lora_packet(g_solution_data.getBuffer(), g_solution_data.getSize());
```

----

## LoRaWAN Packet Format

The packet data is made compatible with the extended Cayenne LPP encoding from [ElectronicCats/CayenneLPP](https://github.com/ElectronicCats/CayenneLPP).

The content of the packet depends on the modules installed on the WisBlock Base Board:

| Data          | Channel No. | Channel ID | Length       | Comment                  | Required Module | Decoded Field Name |
| ------------- | ----------- | ---------- | ------------ | ------------------------ | --------------- | ------------------ |
| Battery value | 1           | _**116**_  | 2&nbsp;bytes | 0.01&nbsp;V Unsigned MSB | RAK4631         | voltage_1          |
| Door event    | 48          | 102        | 1&nbsp;bytes | bool                     | RAK13011        | presence_48        |

:::tip 📝 NOTE
- The Channel IDs in cursive is in extended format and not supported by standard Cayenne LPP data decoders.
- Example decoders for TTN, Chirpstack, Helium, and Datacake can be found in the [Github repo](https://github.com/beegee-tokyo/WisBlock-IAQ-PM-CO2-VOC-EPD/tree/main/decoders).
:::


----

## Using Datacake to Show the Door Opening and Closing Events

As a simple example to visualize the door events, I created a device in [**Datacake**](https://datacake.co).
Datacake is an easy-to-use **Low Code IoT** platform. In my Datacake account, I set up the device with the matching payload decoder, visualization, and creation of an email alert.

### Datacake Payload Decoder

In the device configuration, the Datacake decoder from the [**decoders**](https://github.com/beegee-tokyo/WisBlock-Seismic-Sensor/tree/main/decoders) folder is used.

----

### Datacake Fields

The battery values and the door events are stored in the Datacake fields. The door events are called **`Window 1`** because I started the project as a window-opening alarm system.

| Field Name | Identifier  | Type    |
| ---------- | ----------- | ------- |
| Battery    | VOLTAGE_1   | Float   |
| Window 1   | PRESENCE_48 | Boolean |

----

### Datacake Visualization

In the dashboard, you can show the current status of the door/window. In the latest code, I added a temperature and humidity sensor, so these values are shown as well (only when using the open-source Arduino BSP).

<rk-img
  src="\assets\images\knowledge-hub\tutorials\build-a-door-open-counter-and-alarm-sensor-with-wisblock\datacake.png"
  width="100%"
  caption="Window/Door switch Datacake dashboard"
/>


---

<rk-author />
