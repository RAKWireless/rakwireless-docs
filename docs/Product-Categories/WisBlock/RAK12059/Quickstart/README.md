---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK12059. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak12059/RAK12059.png
tags:
  - quickstart
  - wisblock
  - RAK12059
prev: ../Overview/
next: ../Datasheet/
---

# RAK12059 Quick Start Guide


## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12059 WisBlock Liquid Level Sensor Module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12059 WisBlock Liquid Level Sensor Module](https://store.rakwireless.com/products/wisblock-water-level-sensor-rak12059?utm_source=RAK12059&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base?utm_source=WisBlockBase&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core?utm_source=WisBlockCore&utm_medium=Document&utm_campaign=BuyFromStore)
- USB Cable
- [Li-Ion/LiPo Battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar Charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

- Download and install [Arduino IDE.](https://www.arduino.cc/en/Main/Software)
- To add the RAKwireless Core boards to your Arduino Boards Manager, install the [RAKwireless Arduino BSP.](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index)

## Product Configuration

### Hardware Setup

The WisBlock Sensor RAK12059 is a liquid-level measurement sensor. It uses MILONE's proprietary eTape sensor products with different active lengths. For more information about RAK12059, refer to the [Datasheet](../Datasheet/).

The RAK12059 WisBlock Liquid Level Sensor Module can be mounted on the sensor slots of the WisBlock Base board, as shown in **Figure 1**. It will work on SLOT A, C, D, E and F. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak12059/quickstart/connection.png"
  width="80%"
  caption="RAK12059 Connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for the sensors slots are properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with three pieces of M1.2 x 3&nbsp;mm screws.

<rk-img
  src="/assets/images/wisblock/rak12059/quickstart/mounting-mechanism.png"
  width="70%"
  caption="RAK12059 assembly to WisBlock Base"
/>

##### Disassembling

The procedure for disassembling any type of WisBlock module is the same.

1. To begin disassembling, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak12059/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. After removing the screws, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12059/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Detach the module from the base board by applying forcer to the module at the position of the connector, as shown in **Figure 5**.

<rk-img
  src="/assets/images/wisblock/rak12059/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
- If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/). This tool finds possible pin conflicts.
:::

After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

:::warning ⚠️ WARNING
- Batteries can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and, eventually, other electronic parts.
- Make sure the battery wires match the polarity on the WisBlock Base board. Not all batteries have the same wiring.
:::

### Software Configuration and Example

In this example, you will monitor the level of the liquid where the MILONE eTape probe is submerged. The eTape sensor data will be captured by the ADC chip of RAK12059 module then accessed by WisBlock Core via I2C interface.

#### Initial Test of the RAK12059 WisBlock Module

1. Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the `package_rakwireless_index.json` board installation package. The WisBlock Core should now be available on the Arduino IDE.

2. After that, you need to select the WisBlock Core you have, as shown in **Figure 6** to **Figure 8**.

**RAK4631 Board**

<rk-img
  src="/assets/images/wisblock/rak12059/quickstart/selectboard4631.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**RAK11200 Board**

<rk-img
  src="/assets/images/wisblock/rak12059/quickstart/selectboard11200.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

**RAK11310 Board**

<rk-img
  src="/assets/images/wisblock/rak12059/quickstart/selectboard11300.png"
  width="100%"
  caption="Selecting RAK11300 as WisBlock Core"
/>

3. Copy the example code below:

::: details View the example code
```c
/**
   @file RAK12059_liquid_level_measurement.ino
   @author rakwireless.com
   @brief This code can be used to obtain the depth of the liquid level
   @version 1.0
   @date 2022-09-21
   @copyright Copyright (c) 2022
*/

#include "ADC_SGM58031.h" //http://librarymanager/All#RAKwireless_ADC_SGM58031_library

//RAK_ADC_SGM58031 sgm58031;
RAK_ADC_SGM58031 sgm58031(SGM58031_SDA_ADDRESS);
// RAK_ADC_SGM58031 sgm58031(Wire);
// RAK_ADC_SGM58031 sgm58031(Wire,SGM58031_DEFAULT_ADDRESS);

#define ALERT_PIN     WB_IO1  //SlotA installation, please do not use it on SLOTB
//#define ALERT_PIN   WB_IO3  //SlotC installation.
//#define ALERT_PIN   WB_IO5  //SlotD installation.


#define EPISON 1e-7

//If you use 8 inches, use this code
#define REF 1500.0
#define RESISTANCE_MAX 1657.0
#define RESISTANCE 1100.0
#define LENGTH 7.0

//If you use 12 inches, use this code
//#define REF 2000.0
//#define RESISTANCE_MAX 2145.0
//#define RESISTANCE 1600.0
//#define LENGTH 11.0

//If you use 24 inches, use this code
//#define REF 4000.0
//#define RESISTANCE_MAX 4157.0
//#define RESISTANCE 3600.0
//#define LENGTH 23.0

bool  interrupt_flag = false;
void setup()
{
  // put your setup code here, to run once:
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);
  pinMode(LED_GREEN, OUTPUT);
  pinMode(LED_BLUE, OUTPUT);
  digitalWrite(LED_BLUE, HIGH);
  digitalWrite(LED_GREEN, HIGH);
  delay(300);
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
  sgm58031.begin();
  Serial.println("RAK12059 TEST");
  if (sgm58031.getChipID() != DEVICE_ID)
  {
    Serial.println("No CHIP found ... please check your connection");
    while (1)
    {
      delay(100);
    }
  }
  else
  {
    Serial.println("Found SGM58031 Chip");
  }

  pinMode(ALERT_PIN, INPUT);
  attachInterrupt(digitalPinToInterrupt(ALERT_PIN), threshold_interrupt, FALLING);

  sgm58031.setAlertLowThreshold(0x0000);  // Write  0x0000  to Lo_Thresh
  sgm58031.setAlertHighThreshold(0x7FFF); // Write 0x7FFF to Hi_Thresh
  sgm58031.setConfig(0xC2E0);             // Write config, OS=1, AIN0 to GND, G=(+/-4.096V input range)
  sgm58031.setVoltageResolution(SGM58031_FS_4_096);
  delay(1000);
}




void get_liquid_distance(uint16_t resistance_max, uint16_t resistance, uint8_t length, uint16_t ref)
{
  float gVoltage = sgm58031.getVoltage();
  Serial.print(F("gVoltage="));
  Serial.print(gVoltage);
  Serial.println("V");

  float x1 = ((resistance_max + ref) * gVoltage) - (3.3 * ref);
  float x2 = (resistance / length) *  gVoltage;
  Serial.printf("x1=%f  x2=%f\r\n", x1, x2);
  if (x1 <= EPISON)
  {
    return ;
  }
  float distance_inch = x1 / x2;
  float distance_cm = distance_inch * 2.54;
  Serial.printf("distance:%0.2f inch   %0.2f cm \r\n", distance_inch, distance_cm);
}



void loop()
{
  // put your main code here, to run repeatedly:
  if (interrupt_flag)
  {
    interrupt_flag = false;
    Serial.println("The voltage exceeds the preset threshold. Please check");
  }
  get_liquid_distance(RESISTANCE_MAX, RESISTANCE, LENGTH, REF);
  Serial.println("");
  delay(1000);
}

void threshold_interrupt(void)
{
  interrupt_flag = true;
}
```
:::

::: tip 📝 NOTE:
- If you experience any error in compiling the example sketch, check the updated code for the RAK12059 WisBlock Liquid Level Sensor Module that can be found on the [RAK12059 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/sensors/RAK12059_liquid_level_measurement/RAK12059_liquid_level_measurement.ino). The sample code on GitHub will work on all WisBlock Core.
:::

4. Install the required libraries. Click the highlighted links, as shown in **Figure 9** and **Figure 10**

<rk-img
  src="/assets/images/wisblock/rak12059/quickstart/library-highlight.png"
  width="80%"
  caption="Link for required libraries"
/>

<rk-img
  src="/assets/images/wisblock/rak12059/quickstart/library.png"
  width="70%"
  caption="RAKwireless ADC SGM58031 library"
/>

5. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 11** and **Figure 12**.

::: tip 📝 NOTE:
RAK11200 requires the BOOT0 pin to be configured properly before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak12059/quickstart/select_port4631.png"
  width="80%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak12059/quickstart/upload.png"
  width="80%"
  caption="Uploading the sample code"
/>

6. When you have successfully uploaded the sample code, you should see the distance output on the Serial Terminal, as shown in **Figure 13**.

<rk-img
  src="/assets/images/wisblock/rak12059/quickstart/serialport.png"
  width="60%"
  caption="RAK12059 Module reading in Serial Monitor"
/>
