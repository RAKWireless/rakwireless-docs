---
rak_img: /assets/images/wisblock/rak12002/overview/rak12002_home.png
rak_desc: Contains instructions and tutorials for installing and deploying your RAK12002. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
tags:
  - quickstart
  - wisblock
  - RAK12002
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK12002 Quick Start Guide



## Prerequisite

### What Do You Need?

Before going through each and every step on using RAK12002 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware 

- [RAK12002 WisBlock RTC Module](https://store.rakwireless.com/collections/wisblock-extra/products/rtc-module-rak12002?variant=40102983598278)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base/)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#battery-connector)
- [Solar charger (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#solar-panel-connector)

#### Software 

##### Arduino

- Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

The RAK12002 is a Real-Time Clock module, part of the RAKwireless WisBlock Series, which was designed to provide real-time clock capabilities on your WisBlock projects. The RTC chip is based on RV-3028-C7 from Micro Crystal which can be interfaced via I2C.

For more information about RAK12002, refer to the [Datasheet](../Datasheet/).

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/rak12002_assembly.png"
  width="60%"
  caption="RAK12002 connection to WisBlock Base"
/>

::: tip 📝 NOTE
- You can connect the RAK12002 to any of the WisBlock Base Board Slot A to D.
- RAK12002 has a built-in supercapacitor that can provide up to 7 days of extra timing capability in case the Li-Ion Battery is drained or disconnected.
:::

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/rak12002_slotAtoD.png"
  width="50%"
  caption="RAK12002 connection to WisBlock Base Slots A to D"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling Procedure

The RAK12002 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 3**. Also, always secure the connection of the WisBlock module by using the compatible screws.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/mounting.png"
  width="60%"
  caption="RAK12002 mounting connection to WisBlock Base module"
/>

##### Disassembling Procedure

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 6**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
:::

### Software Configuration and Example

In the following example, you will be using the [RAK12002 WisBlock RTC Module](https://store.rakwireless.com/collections/wisblock-extra/products/rtc-module-rak12002?variant=40102983598278) to setup the time and date.

These are the quick links that go directly to the software guide for the specific WisBlock Core module you use:

- [RAK12002 in RAK4631 WisBlock Core Guide](/Product-Categories/WisBlock/RAK12002/Quickstart/#rak12002-in-rak4631-wisblock-core-guide)
- [RAK12002 in RAK11200 WisBlock Core Guide](/Product-Categories/WisBlock/RAK12002/Quickstart/#rak12002-in-rak11200-wisblock-core-guide)
- [RAK12002 in RAK11300 WisBlock Core Guide](/Product-Categories/WisBlock/RAK12002/Quickstart/#rak12002-in-rak11300-wisblock-core-guide)

#### RAK12002 in RAK4631 WisBlock Core Guide

##### Arduino Setup

1. First, you need to select the RAK4631 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE.

```c
/**
   @file RAK12002_RTC_DateTime_RV-3028-C7.ino
   @author rakwireless.com
   @brief Set and read RTC time.
   @version 0.1
   @date 2021-04-30
   @copyright Copyright (c) 2021
**/

#include "Melopero_RV3028.h" //Click here to get the library: http://librarymanager/All#Melopero_RV3028

Melopero_RV3028 rtc;

/**
 * @brief Arduino setup function
 * @note Called once after power on or reset
 * 
 */
void setup() 
{
  // Initialize Serial for debug output
  time_t timeout = millis();
  Serial.begin(115200);
  while (!Serial)
  {
    if ((millis() - timeout) < 5000)
    {
      delay(100);
    }
    else
    {
      break;
    }
  }
  rtc.initDevice(); // First initialize and create the rtc device

  rtc.writeToRegister(0x35,0x00);  
  rtc.writeToRegister(0x37,0xB4); //Direct Switching Mode (DSM): when VDD < VBACKUP, switchover occurs from VDD to VBACKUP
  
  rtc.set24HourMode();  // Set the device to use the 24hour format (default) instead of the 12 hour format

  // Set the date and time
  // year, month, weekday, date, hour, minute, second
  // Note: time is always set in 24h format
  // Note: month value ranges from 1 (Jan) to 12 (Dec)
  // Note: date value ranges from 1 to 31
  rtc.setTime(2021, 4, 6, 30, 0, 0, 0);
}

/**
 * @brief Arduino loop function
 * @note Output date and time every second
 * 
 */
void loop() 
{
  Serial.printf("%d:%d:%d %d/%d/%d \n",rtc.getHour(),rtc.getMinute(),rtc.getSecond(),rtc.getYear(),rtc.getMonth(),rtc.getDate());
  delay(1000);
}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK4631 WisBlock Core Module that can be found on the [RAK12002 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK12002_RTC_DateTime_RV-3028-C7)
:::

3. Click the link to locate the library.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/add_library.png"
  width="100%"
  caption="Locating the required library in the Library Manager"
/>

4. Install the required library, as shown in **Figure 9**.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/install_library.png"
  width="100%"
  caption="Installing the Library"
/>

5. Select the correct port and upload your code, as shown in **Figure 10** and **Figure 11**.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/uploading.png"
  width="100%"
  caption="Uploading code"
/>

6. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the RAK12002 date/time logs, as shown in **Figure 12**. You will be able to see the Time and Date in the Serial Monitor.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/serial-monitor.png"
  width="100%"
  caption="RAK12002 date/time logs"
/>

7. You can set the time and date in the code, as shown in **Figure 13** and **Figure 14**.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/set-time-and-date.png"
  width="50%"
  caption="Code for setting the time and date in RAK12002"
/>

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/time-and-date-format.png"
  width="50%"
  caption="Time and Date format"
/>

#### RAK12002 in RAK11200 WisBlock Core Guide

##### Arduino Setup

1. Select the RAK11200 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/RAK11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE.

```c
/**
   @file RAK12002_RTC_DateTime_RV-3028-C7.ino
   @author rakwireless.com
   @brief Set and read RTC time.
   @version 0.1
   @date 2021-04-30
   @copyright Copyright (c) 2021
**/

#include "Melopero_RV3028.h" //Click here to get the library: http://librarymanager/All#Melopero_RV3028

Melopero_RV3028 rtc;

/**
 * @brief Arduino setup function
 * @note Called once after power on or reset
 * 
 */
void setup() 
{
  // Initialize Serial for debug output
  time_t timeout = millis();
  Serial.begin(115200);
  while (!Serial)
  {
    if ((millis() - timeout) < 5000)
    {
      delay(100);
    }
    else
    {
      break;
    }
  }
  rtc.initDevice(); // First initialize and create the rtc device

  rtc.writeToRegister(0x35,0x00);  
  rtc.writeToRegister(0x37,0xB4); //Direct Switching Mode (DSM): when VDD < VBACKUP, switchover occurs from VDD to VBACKUP
  
  rtc.set24HourMode();  // Set the device to use the 24hour format (default) instead of the 12 hour format

  // Set the date and time
  // year, month, weekday, date, hour, minute, second
  // Note: time is always set in 24h format
  // Note: month value ranges from 1 (Jan) to 12 (Dec)
  // Note: date value ranges from 1 to 31
  rtc.setTime(2021, 4, 6, 30, 0, 0, 0);
}

/**
 * @brief Arduino loop function
 * @note Output date and time every second
 * 
 */
void loop() 
{
  Serial.printf("%d:%d:%d %d/%d/%d \n",rtc.getHour(),rtc.getMinute(),rtc.getSecond(),rtc.getYear(),rtc.getMonth(),rtc.getDate());
  delay(1000);
}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK11200 WisBlock Core Module that can be found on the [RAK12002 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK12002_RTC_DateTime_RV-3028-C7)
:::

3. Click the link to locate the library.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/adding_library11200.png"
  width="100%"
  caption="Locating the required library in the Library Manager"
/>

4. Install the required library, as shown in **Figure 17**.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/library_install11200.png"
  width="100%"
  caption="Installing the Library"
/>

5. Select the correct port and upload your code, as shown in **Figure 18** and **Figure 19**.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/select_port11200.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/upload11200.png"
  width="100%"
  caption="Uploading code"
/>

:::tip 📝 NOTE:
RAK11200 requires the BOOT0 pin to be configured properly before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

6. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the RAK12002 date/time logs, as shown in **Figure 20**. You will be able to see the Time and Date in the Serial Monitor.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/serial_monitor11200.png"
  width="100%"
  caption="RAK12002 date/time logs"
/>

7. You can set the time and date in the code, as shown in **Figure 21** and **Figure 22**.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/set-time-and-date.png"
  width="50%"
  caption="Code for setting the time and date in RAK12002"
/>

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/time-and-date-format.png"
  width="50%"
  caption="Time and Date format"
/>

#### RAK12002 in RAK11300 WisBlock Core Guide

##### Arduino Setup

1. Select the RAK11300 WisBlock Core, as shown in **Figure 23**.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/rak11300_board.png"
  width="100%"
  caption="Selecting RAK11300 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE:

```c
/**
   @file RAK12002_RTC_DateTime_RV-3028-C7.ino
   @author rakwireless.com
   @brief Set and read RTC time.
   @version 0.1
   @date 2021-04-30
   @copyright Copyright (c) 2021
**/

#include "Melopero_RV3028.h" //Click here to get the library: http://librarymanager/All#Melopero_RV3028

Melopero_RV3028 rtc;

/**
 * @brief Arduino setup function
 * @note Called once after power on or reset
 * 
 */
void setup() 
{
  // Initialize Serial for debug output
  time_t timeout = millis();
  Serial.begin(115200);
  while (!Serial)
  {
    if ((millis() - timeout) < 5000)
    {
      delay(100);
    }
    else
    {
      break;
    }
  }
  rtc.initDevice(); // First initialize and create the rtc device

  rtc.writeToRegister(0x35,0x00);  
  rtc.writeToRegister(0x37,0xB4); //Direct Switching Mode (DSM): when VDD < VBACKUP, switchover occurs from VDD to VBACKUP
  
  rtc.set24HourMode();  // Set the device to use the 24hour format (default) instead of the 12 hour format

  // Set the date and time
  // year, month, weekday, date, hour, minute, second
  // Note: time is always set in 24h format
  // Note: month value ranges from 1 (Jan) to 12 (Dec)
  // Note: date value ranges from 1 to 31
  rtc.setTime(2021, 4, 6, 30, 0, 0, 0);
}

/**
 * @brief Arduino loop function
 * @note Output date and time every second
 * 
 */
void loop() 
{
  Serial.printf("%d:%d:%d %d/%d/%d \n",rtc.getHour(),rtc.getMinute(),rtc.getSecond(),rtc.getYear(),rtc.getMonth(),rtc.getDate());
  delay(1000);
}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK11300 WisBlock Core Module that can be found on the [RAK12002 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK12002_RTC_DateTime_RV-3028-C7).

:::

3. Click the link to locate the library, as shown in **Figure 24**.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/adding_library11300.png"
  width="100%"
  caption="Locating the required library in the Library Manager"
/>

4. Install the required library, as shown in **Figure 25**.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/library_install11300.png"
  width="100%"
  caption="Installing the Library"
/>

5. Select the correct port and upload your code, as shown in **Figure 26** and **Figure 27**.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/select_port11300.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/upload11300.png"
  width="100%"
  caption="Uploading code"
/>

6. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the RAK12002 date/time logs, as shown in **Figure 28**. You will be able to see the Time and Date in the Serial Monitor.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/serial_monitor11200.png"
  width="100%"
  caption="RAK12002 date/time logs"
/>

7. You can set the time and date in the code, as shown in **Figure 29** and **Figure 30**.

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/set-time-and-date.png"
  width="50%"
  caption="Code for setting the time and date in RAK12002"
/>

<rk-img
  src="/assets/images/wisblock/rak12002/quickstart/time-and-date-format.png"
  width="50%"
  caption="Time and Date format"
/>