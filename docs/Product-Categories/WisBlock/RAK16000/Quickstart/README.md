---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK16000. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
tags:
  - quickstart
  - wisblock
  - RAK16000
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK16000 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK16000 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware 

- [RAK16000 WisBlock DC Current Sensor](https://store.rakwireless.com/products/rak16000)
- [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base/)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable)

#### Software 

##### Arduino

- Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

RAK16000 is a part of the WisBlock Sensor Series that is capable of measuring DC current in the range of 0 to 3&nbsp;A in a voltage range of 0 to 26&nbsp;V. With the two measured DC values, you get the power consumption by multiplying the current and voltage. Additionally, this module uses the INA219BID from Texas Instruments that offers high accuracy maximum rate of 0.5% over temperature.

The current measurement method used is the high-side, where the shunt resistor is placed between the power supply and the load. This method allows the RAK16000 to measure both the circulating current and the voltage across the load.


For more information about the RAK16000, refer to the [Datasheet](../Datasheet/).

#### Pin Definition

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak16000-pinout.png"
  width="80%"
  caption="RAK16000 Pin Definition"
/>

::: tip 📝 NOTE
- **GND** Connect to ground pin.
- **VIN+** Connect to power supply pin  
- **VIN-** Connect to load pin.
:::

#### Assembling and Disassembling of WisBlock Modules

##### Assembling Procedure

The RAK16000 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 2**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK16000 mounting connection to WisBlock Base module"
/>


<!--
##### RAK13001 Connector Crimping Mechanism

The RAK13001 features a fast-crimping terminal connector to simplify and ensure the wiring process on the fields. The fast-crimping terminal can support cable with a width between 20&nbsp;AWG to 24&nbsp;AWG. The usual stripping length is around 6 to 7&nbsp;mm. 

As shown in **Figure 5**, during the crimping process, you should first press down and maintain the spring head of the crimping terminal firmly, then insert the stripped cable head into the corresponding connector’s hole. Once inserted correctly, release the spring head, and the crimping process is completed.

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/crimping_process.png"
  width="40%"
  caption="RAK13001 Module Connector"
/>
-->

##### Disassembling Procedure

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
:::

Now, you can connect the battery (optional) and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

In our example, you can measure voltage and DC current from a sensor.

These are the quick links that go directly to the software guide for the specific WisBlock Core module you use:

- [RAK16000 in RAK4631 WisBlock Core Guide](#rak16000-in-rak4631-wisblock-core-guide)
- [RAK16000 in RAK11200 WisBlock Core Guide](#rak16000-in-rak11200-wisblock-core-guide)
- [RAK16000 in RAK11310 WisBlock Core Guide](#rak16000-in-rak11310-wisblock-core-guide)

#### RAK16000 in RAK4631 WisBlock Core Guide

##### Arduino Setup


1. Select the RAK4631 WisBlock Core. 

Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) to find the RAK4631 in the Arduino Boards Manager.

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE:

```c
/**
   @file RAK16000_DcCurrent_INA219.ino
   @author rakwireless.com
   @brief Get DC current from sensor
   @version 0.1
   @date 2021-7-28
   @copyright Copyright (c) 2020
**/

#include <Wire.h>    
#include <INA219_WE.h>// Click here to get the library: http://librarymanager/All#INA219_WE
#define I2C_ADDRESS 0x41

INA219_WE ina219 = INA219_WE(I2C_ADDRESS);


void setup()
{
  Serial.begin(115200);
  Serial.println("Initializing...");
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);
  delay(300);
  // Initialize sensor
  Wire.begin();
  if(!ina219.init()){
    Serial.println("INA219 not connected!");
  }
  /* Set ADC Mode for Bus and ShuntVoltage
  * Mode *            * Res / Samples *       * Conversion Time *
  BIT_MODE_9        9 Bit Resolution             84 µs
  BIT_MODE_10       10 Bit Resolution            148 µs  
  BIT_MODE_11       11 Bit Resolution            276 µs
  BIT_MODE_12       12 Bit Resolution            532 µs  (DEFAULT)
  SAMPLE_MODE_2     Mean Value 2 samples         1.06 ms
  SAMPLE_MODE_4     Mean Value 4 samples         2.13 ms
  SAMPLE_MODE_8     Mean Value 8 samples         4.26 ms
  SAMPLE_MODE_16    Mean Value 16 samples        8.51 ms     
  SAMPLE_MODE_32    Mean Value 32 samples        17.02 ms
  SAMPLE_MODE_64    Mean Value 64 samples        34.05 ms
  SAMPLE_MODE_128   Mean Value 128 samples       68.10 ms
  */
  ina219.setADCMode(SAMPLE_MODE_128); // choose mode and uncomment for change of default
  
  /* Set measure mode
  POWER_DOWN - INA219 switched off
  TRIGGERED  - measurement on demand
  ADC_OFF    - Analog/Digital Converter switched off
  CONTINUOUS  - Continuous measurements (DEFAULT)
  */
  ina219.setMeasureMode(CONTINUOUS); // choose mode and uncomment for change of default
  
  /* Set PGain
  * Gain *  * Shunt Voltage Range *   * Max Current (if shunt is 0.1 ohms) *
   PG_40       40 mV                    0.4 A
   PG_80       80 mV                    0.8 A
   PG_160      160 mV                   1.6 A
   PG_320      320 mV                   3.2 A (DEFAULT)
  */
  ina219.setPGain(PG_320); // choose gain and uncomment for change of default
  
  /* Set Bus Voltage Range
   BRNG_16   -> 16 V
   BRNG_32   -> 32 V (DEFAULT)
  */
  ina219.setBusRange(BRNG_32); // choose range and uncomment for change of default
  ina219.setShuntSizeInOhms(0.1); // we use 100ohm
  Serial.println("INA219 Current Sensor Example Sketch - Continuous");

  /* If the current values delivered by the INA219 differ by a constant factor
     from values obtained with calibrated equipment you can define a correction factor.
     Correction factor = current delivered from calibrated equipment / current delivered by INA219
  */
  ina219.setCorrectionFactor(0.99); // insert your correction factor if necessary
}

void loop()
{
  float shuntVoltage_mV = 0.0;
  float loadVoltage_V = 0.0;
  float busVoltage_V = 0.0;
  float current_mA = 0.0;
  float power_mW = 0.0; 
  bool ina219_overflow = false;
  
  shuntVoltage_mV = ina219.getShuntVoltage_mV();
  busVoltage_V = ina219.getBusVoltage_V();
  //here we use the I=U/R to calculate, here the Resistor is 100mΩ, accuracy can reach to 0.5%.
  current_mA = shuntVoltage_mV/0.1;
  power_mW = ina219.getBusPower();
  loadVoltage_V  = busVoltage_V + (shuntVoltage_mV/1000);
  ina219_overflow = ina219.getOverflow();
  
  Serial.print("Shunt Voltage [mV]: "); Serial.println(shuntVoltage_mV);
  Serial.print("Bus Voltage [V]: "); Serial.println(busVoltage_V);
  Serial.print("Load Voltage [V]: "); Serial.println(loadVoltage_V);
  Serial.print("Current[mA]: "); Serial.println(current_mA);
  Serial.print("Bus Power [mW]: "); Serial.println(power_mW);
  if(!ina219_overflow){
    Serial.println("Values OK - no overflow");
  }
  else{
    Serial.println("Overflow! Choose higher PGAIN");
  }
  Serial.println();
  
  delay(1000);
}

```

3. Once the example sketch is open, install the **INA219_WE** library by clicking the yellow-highlighted link, as shown in **Figure 7** and **Figure 8**.

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak4631-ina219.png"
  width="100%"
  caption="Install INA219_WE Library"
/>

Click on the **Install** button to finish library installation.

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak4631-library-manager.png"
  width="100%"
  caption="Arduino Library Manager INA219_WE"
/>


4. Now, you can select the right port and upload the code, as shown in **Figure 9** and **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak4631-select-port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak4631-upload.png"
  width="100%"
  caption="Uploading the RAK16000 Sample code"
/>

After successful upload, open Arduino Serial Monitor and check the current current consumption and load voltage.

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak4630_logs.png"
  width="90%"
  caption="RAK16000 Serial Monitor"
/>

::: tip 📝 NOTE
If you experience any error in compiling an example sketch, check the updated code for the RAK16000 WisBlock Core Module that can be found on the [RAK16000 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK16000_DcCurrent_INA219).
:::


#### RAK16000 in RAK11200 WisBlock Core Guide

##### Arduino Setup

<!-- Add how to use image

-->

1. Select the RAK11200 WisBlock Core. 

Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) to find the RAK11200 in the Arduino Boards Manager.

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE:

```c
/**
   @file RAK16000_DcCurrent_INA219.ino
   @author rakwireless.com
   @brief Get DC current from sensor
   @version 0.1
   @date 2021-7-28
   @copyright Copyright (c) 2020
**/

#include <Wire.h>    
#include <INA219_WE.h>// Click here to get the library: http://librarymanager/All#INA219_WE
#define I2C_ADDRESS 0x41

INA219_WE ina219 = INA219_WE(I2C_ADDRESS);


void setup()
{
  Serial.begin(115200);
  Serial.println("Initializing...");
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);
  delay(300);
  // Initialize sensor
  Wire.begin();
  if(!ina219.init()){
    Serial.println("INA219 not connected!");
  }
  /* Set ADC Mode for Bus and ShuntVoltage
  * Mode *            * Res / Samples *       * Conversion Time *
  BIT_MODE_9        9 Bit Resolution             84 µs
  BIT_MODE_10       10 Bit Resolution            148 µs  
  BIT_MODE_11       11 Bit Resolution            276 µs
  BIT_MODE_12       12 Bit Resolution            532 µs  (DEFAULT)
  SAMPLE_MODE_2     Mean Value 2 samples         1.06 ms
  SAMPLE_MODE_4     Mean Value 4 samples         2.13 ms
  SAMPLE_MODE_8     Mean Value 8 samples         4.26 ms
  SAMPLE_MODE_16    Mean Value 16 samples        8.51 ms     
  SAMPLE_MODE_32    Mean Value 32 samples        17.02 ms
  SAMPLE_MODE_64    Mean Value 64 samples        34.05 ms
  SAMPLE_MODE_128   Mean Value 128 samples       68.10 ms
  */
  ina219.setADCMode(SAMPLE_MODE_128); // choose mode and uncomment for change of default
  
  /* Set measure mode
  POWER_DOWN - INA219 switched off
  TRIGGERED  - measurement on demand
  ADC_OFF    - Analog/Digital Converter switched off
  CONTINUOUS  - Continuous measurements (DEFAULT)
  */
  ina219.setMeasureMode(CONTINUOUS); // choose mode and uncomment for change of default
  
  /* Set PGain
  * Gain *  * Shunt Voltage Range *   * Max Current (if shunt is 0.1 ohms) *
   PG_40       40 mV                    0.4 A
   PG_80       80 mV                    0.8 A
   PG_160      160 mV                   1.6 A
   PG_320      320 mV                   3.2 A (DEFAULT)
  */
  ina219.setPGain(PG_320); // choose gain and uncomment for change of default
  
  /* Set Bus Voltage Range
   BRNG_16   -> 16 V
   BRNG_32   -> 32 V (DEFAULT)
  */
  ina219.setBusRange(BRNG_32); // choose range and uncomment for change of default
  ina219.setShuntSizeInOhms(0.1); // we use 100ohm
  Serial.println("INA219 Current Sensor Example Sketch - Continuous");

  /* If the current values delivered by the INA219 differ by a constant factor
     from values obtained with calibrated equipment you can define a correction factor.
     Correction factor = current delivered from calibrated equipment / current delivered by INA219
  */
  ina219.setCorrectionFactor(0.99); // insert your correction factor if necessary
}

void loop()
{
  float shuntVoltage_mV = 0.0;
  float loadVoltage_V = 0.0;
  float busVoltage_V = 0.0;
  float current_mA = 0.0;
  float power_mW = 0.0; 
  bool ina219_overflow = false;
  
  shuntVoltage_mV = ina219.getShuntVoltage_mV();
  busVoltage_V = ina219.getBusVoltage_V();
  //here we use the I=U/R to calculate, here the Resistor is 100mΩ, accuracy can reach to 0.5%.
  current_mA = shuntVoltage_mV/0.1;
  power_mW = ina219.getBusPower();
  loadVoltage_V  = busVoltage_V + (shuntVoltage_mV/1000);
  ina219_overflow = ina219.getOverflow();
  
  Serial.print("Shunt Voltage [mV]: "); Serial.println(shuntVoltage_mV);
  Serial.print("Bus Voltage [V]: "); Serial.println(busVoltage_V);
  Serial.print("Load Voltage [V]: "); Serial.println(loadVoltage_V);
  Serial.print("Current[mA]: "); Serial.println(current_mA);
  Serial.print("Bus Power [mW]: "); Serial.println(power_mW);
  if(!ina219_overflow){
    Serial.println("Values OK - no overflow");
  }
  else{
    Serial.println("Overflow! Choose higher PGAIN");
  }
  Serial.println();
  
  delay(1000);
}

```

3. Once the example sketch is open, install the **INA219_WE** library by clicking the yellow-highlighted link, as shown in **Figure 13** and **Figure 14**.

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak11200-ina219.png"
  width="100%"
  caption="Install INA219_WE Library"
/>

Click on the **Install** button to finish library installation.
<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak11200-library-manager.png"
  width="100%"
  caption="Arduino Library Manager INA219_WE"
/>


4. Now, you can select the right port and upload the code, as shown in **Figure 15** and **Figure 17**.

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak11200-select-port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>


Before uploading your sketch, short circuit BOOT0 and GND pin and press the reset button. Then click the Upload button.

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak11200-Boot0-for-flashing.png"
  width="50%"
  caption="Force ESP32 Download mode"
/>

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak11200-upload.png"
  width="100%"
  caption="Uploading the RAK16000 Sample code"
/>


After a successful upload, open the Arduino Serial Monitor and check the current current consumption and load voltage.

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak11200_logs.png"
  width="90%"
  caption="RAK16000 Serial Monitor"
/>

::: tip 📝 NOTE
If you experience any error in compiling an example sketch, check the updated code for the RAK16000 WisBlock Core Module that can be found on the [RAK16000 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK16000_DcCurrent_INA219).
:::


#### RAK16000 in RAK11310 WisBlock Core Guide


##### Arduino Setup

<!-- Add how to use image

-->

1. Select the RAK11310 WisBlock Core. 

Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) to find the RAK11310 in the Arduino Boards Manager.

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE:

```c
/**
   @file RAK16000_DcCurrent_INA219.ino
   @author rakwireless.com
   @brief Get DC current from sensor
   @version 0.1
   @date 2021-7-28
   @copyright Copyright (c) 2020
**/

#include <Wire.h>    
#include <INA219_WE.h>// Click here to get the library: http://librarymanager/All#INA219_WE
#define I2C_ADDRESS 0x41

INA219_WE ina219 = INA219_WE(I2C_ADDRESS);


void setup()
{
  Serial.begin(115200);
  Serial.println("Initializing...");
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);
  delay(300);
  // Initialize sensor
  Wire.begin();
  if(!ina219.init()){
    Serial.println("INA219 not connected!");
  }
  /* Set ADC Mode for Bus and ShuntVoltage
  * Mode *            * Res / Samples *       * Conversion Time *
  BIT_MODE_9        9 Bit Resolution             84 µs
  BIT_MODE_10       10 Bit Resolution            148 µs  
  BIT_MODE_11       11 Bit Resolution            276 µs
  BIT_MODE_12       12 Bit Resolution            532 µs  (DEFAULT)
  SAMPLE_MODE_2     Mean Value 2 samples         1.06 ms
  SAMPLE_MODE_4     Mean Value 4 samples         2.13 ms
  SAMPLE_MODE_8     Mean Value 8 samples         4.26 ms
  SAMPLE_MODE_16    Mean Value 16 samples        8.51 ms     
  SAMPLE_MODE_32    Mean Value 32 samples        17.02 ms
  SAMPLE_MODE_64    Mean Value 64 samples        34.05 ms
  SAMPLE_MODE_128   Mean Value 128 samples       68.10 ms
  */
  ina219.setADCMode(SAMPLE_MODE_128); // choose mode and uncomment for change of default
  
  /* Set measure mode
  POWER_DOWN - INA219 switched off
  TRIGGERED  - measurement on demand
  ADC_OFF    - Analog/Digital Converter switched off
  CONTINUOUS  - Continuous measurements (DEFAULT)
  */
  ina219.setMeasureMode(CONTINUOUS); // choose mode and uncomment for change of default
  
  /* Set PGain
  * Gain *  * Shunt Voltage Range *   * Max Current (if shunt is 0.1 ohms) *
   PG_40       40 mV                    0.4 A
   PG_80       80 mV                    0.8 A
   PG_160      160 mV                   1.6 A
   PG_320      320 mV                   3.2 A (DEFAULT)
  */
  ina219.setPGain(PG_320); // choose gain and uncomment for change of default
  
  /* Set Bus Voltage Range
   BRNG_16   -> 16 V
   BRNG_32   -> 32 V (DEFAULT)
  */
  ina219.setBusRange(BRNG_32); // choose range and uncomment for change of default
  ina219.setShuntSizeInOhms(0.1); // we use 100ohm
  Serial.println("INA219 Current Sensor Example Sketch - Continuous");

  /* If the current values delivered by the INA219 differ by a constant factor
     from values obtained with calibrated equipment you can define a correction factor.
     Correction factor = current delivered from calibrated equipment / current delivered by INA219
  */
  ina219.setCorrectionFactor(0.99); // insert your correction factor if necessary
}

void loop()
{
  float shuntVoltage_mV = 0.0;
  float loadVoltage_V = 0.0;
  float busVoltage_V = 0.0;
  float current_mA = 0.0;
  float power_mW = 0.0; 
  bool ina219_overflow = false;
  
  shuntVoltage_mV = ina219.getShuntVoltage_mV();
  busVoltage_V = ina219.getBusVoltage_V();
  //here we use the I=U/R to calculate, here the Resistor is 100mΩ, accuracy can reach to 0.5%.
  current_mA = shuntVoltage_mV/0.1;
  power_mW = ina219.getBusPower();
  loadVoltage_V  = busVoltage_V + (shuntVoltage_mV/1000);
  ina219_overflow = ina219.getOverflow();
  
  Serial.print("Shunt Voltage [mV]: "); Serial.println(shuntVoltage_mV);
  Serial.print("Bus Voltage [V]: "); Serial.println(busVoltage_V);
  Serial.print("Load Voltage [V]: "); Serial.println(loadVoltage_V);
  Serial.print("Current[mA]: "); Serial.println(current_mA);
  Serial.print("Bus Power [mW]: "); Serial.println(power_mW);
  if(!ina219_overflow){
    Serial.println("Values OK - no overflow");
  }
  else{
    Serial.println("Overflow! Choose higher PGAIN");
  }
  Serial.println();
  
  delay(1000);
}

```

3. Once the example sketch is open, install the **INA219_WE** library by clicking the yellow-highlighted link, as shown in **Figure 20** and **Figure 21**.

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak11310-ina219.png"
  width="100%"
  caption="Install INA219_WE Library"
/>

Click on the **Install** button to finish library installation.
<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak11310-library-manager.png"
  width="100%"
  caption="Arduino Library Manager INA219_WE"
/>


4. Now, you can select the right port and upload the code, as shown in **Figure 22** and **Figure 23**.

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak11310-select-port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak11310-upload.png"
  width="80%"
  caption="Uploading the RAK16000 Sample code"
/>


After successful upload, open the Arduino Serial Monitor and check the current current consumption and load voltage.

<rk-img
  src="/assets/images/wisblock/rak16000/quickstart/rak11300_logs.png"
  width="90%"
  caption="RAK16000 Serial Monitor"
/>

::: tip 📝 NOTE
If you experience any error in compiling an example sketch:

1. Run the `post_install` script to install the missing drivers. You have to go to `%userprofile%\AppData\Local\Arduino15\packages\rakwireless\hardware\mbed_rp2040\0.0.6` and run `post_install.bat`.

2. Check the updated code for the RAK16000 WisBlock Core Module that can be found on the [RAK16000 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK16000_DcCurrent_INA219).
:::


