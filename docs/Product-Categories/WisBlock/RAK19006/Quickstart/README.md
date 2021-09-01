---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK19006. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak19006/overview/RAK19006_home.png
tags:
  - quickstart
  - wisblock
  - RAK19006
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK19006 Quick Start Guide

<!--
## Introduction

This guide introduces the WisBlock RAK19006 board and how to use it.
-->

## Prerequisite

### What Do You Need?

Before going through each and every step on using RAK19006 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware 

- [RAK19006 WisBlock Wireless Charger Module](https://store.rakwireless.com/products/wireless-charge-module-rak19006?_pos=1&_sid=80a102f08&_ss=r)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base/)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#battery-connector)
- [Solar charger (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#solar-panel-connector)

#### Software 

##### Arduino

- Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

The RAK19006 WisBlock Wireless Charge Module is designed to be a part of the battery charger. It is highly efficient, Qi-compliant, and has a single-chip wireless power receiver and charger. It also integrates the receiver and linear charger and supports up to 5&nbsp;W applications.

For more information about RAK19006, refer to the [Datasheet](../Datasheet/).

#### RAK19006 Connection to WisBlock Base

<rk-img
  src="/assets/images/wisblock/rak19006/quickstart/rak19006-pinout.png"
  width="60%"
  caption="RAK19006 Pinout and Connector assignments"
/>

::: tip 📝 NOTE
The RAK19006 supports wireless battery charge via coil attached to the connector for coil, as shown in **Figure 1**. The module has a 5&nbsp;V output voltage that can be accessed via the JST connector and can be interfaced to the Solar Panel connector of the WisBlock Base to charge the Li-Ion/LiPo battery connected to WisBlock Base.
:::

#### Coil Placement on Wireless Charging Pad

<rk-img
  src="/assets/images/wisblock/rak19006/quickstart/wireless-charger.png"
  width="60%"
  caption="Coil proper placement on top of the Wireless Charging Pad"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling Procedure

The RAK19006 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 3**. Also, always secure the connection of the WisBlock module by using the compatible screws.

<rk-img
  src="/assets/images/wisblock/rak19006/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK19006 mounting connection to WisBlock Base module"
/>


##### Disassembling Procedure

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak19006/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak19006/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 6**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak19006/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
:::

Now, you can connect the battery and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

In the following example, you will be using the RAK19006 for the battery charging and will show the power voltage on the [RAK1921 WisBlock OLED Display](https://store.rakwireless.com/products/rak1921-oled-display-panel?_pos=1&_sid=202e07a15&_ss=r).

<rk-img
  src="/assets/images/wisblock/rak19006/quickstart/wisblock-connection.png"
  width="70%"
  caption="RAK19006 and RAK1921 connection to WisBlock Base Module"
/>

These are the quick links that go directly to the software guide for the specific WisBlock Core module you use:

- [RAK19006 in RAK4631 WisBlock Core Guide](/Product-Categories/WisBlock/RAK19006/Quickstart/#rak19006-in-rak4631-wisblock-core-guide)
- [RAK19006 in RAK11200 WisBlock Core Guide](/Product-Categories/WisBlock/RAK19006/Quickstart/#rak19006-in-rak11200-wisblock-core-guide)

#### RAK19006 in RAK4631 WisBlock Core Guide

##### Arduino Setup

1. First, you need to select the RAK4631 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak19006/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE.

```c
/**
 *  @file RAK13000_WirelessCharger.ino
 *  @author rakwireless.com
 *  @brief show the wireless charger power voltage by the oled
 *  @version 0.1
 *  @date 2021-02-23
 *  @copyright Copyright (c) 2020
 *  @note platform RAK4631
**/
#include <Wire.h>
#include <U8g2lib.h>       //Click here to get the library: http://librarymanager/All#u8g2

#define LED1  35 
#define LED2  36 

#define PIN_VBAT A0 //Analog pin to read battery level definition
/** Millivolt per LSB constant value = 3.0V ADC range and 12-bit ADC resolution = 3000mV/4096 */
#define VBAT_MV_PER_LSB (0.73242188F)
/** Voltage divider constant = 1.5M + 1M voltage divider on VBAT = (1.5M / (1M + 1.5M)) */
#define VBAT_DIVIDER (0.6F)
/** Compensation factor for the VBAT divider */
#define VBAT_DIVIDER_COMP (1.74)
/** Formula to calculate real battery voltage */
#define REAL_VBAT_MV_PER_LSB (VBAT_DIVIDER_COMP * VBAT_MV_PER_LSB)

U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0);

float g_powerVoltage = 0;   

void oled_show();
void readVBAT_init();
void get_BATvoltage();
void led1_on();
void led1_off();
void led2_on();
void led2_off();

void setup()
{
  time_t timeout = millis();
  readVBAT_init();
  u8g2.begin();
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
  pinMode(LED1, OUTPUT);  
  pinMode(LED2, OUTPUT);   
  
  digitalWrite(LED1, LOW);
  digitalWrite(LED2, LOW);
}

void loop()
{  
  led1_on();
  led2_off();
  get_BATvoltage();
  oled_show();
  delay(200);
  led2_on();
  led1_off();
  delay(200);
}
void led1_on()
{
  digitalWrite(LED1, HIGH);
}
void led1_off()
{
  digitalWrite(LED1, LOW);
}
void led2_on()
{
  digitalWrite(LED2, HIGH);
}
void led2_off()
{
  digitalWrite(LED2, LOW);
}
void oled_show()
{
  char data[32] = {0};
  u8g2.clearBuffer();         // clear the internal memory
  u8g2.setFont(u8g2_font_ncenB10_tr); // choose a suitable font
  
  u8g2.drawStr(3, 15, "Power  voltage:");
  memset(data, 0, sizeof(data));
  sprintf(data, "%3.2f V",g_powerVoltage);
  u8g2.drawStr(3, 45, data);
  u8g2.sendBuffer(); // transfer internal memory to the display
}
void readVBAT_init()
{
  // Set the analog reference to 3.0V (default = 3.6V)
  analogReference(AR_INTERNAL_3_0);
  // Set the resolution to 12-bit (0..4095)
  analogReadResolution(12); // Can be 8, 10, 12 or 14
  // Let the ADC settle
  delay(10);
}
void get_BATvoltage()
{
  unsigned int sum = 0,average_value = 0;
  unsigned int read_temp[10] = {0};
  unsigned char i = 0;
  unsigned int adc_max = 0;
  unsigned int adc_min = 4095; 
  average_value = analogRead(PIN_VBAT);
  for(i=0;i<10;i++)
  {
    read_temp[i] = analogRead(PIN_VBAT);
    if(read_temp[i] < adc_min)  
      {
        adc_min = read_temp[i];
      }
    if(read_temp[i] > adc_max)  
      {
        adc_max = read_temp[i];
      }
     sum = sum + read_temp[i];
//     Serial.println(read_temp[i]);
//     delay(1);
  }
  average_value = (sum - adc_max - adc_min) >> 3; 
//  Serial.println(average_value);
  g_powerVoltage = average_value * REAL_VBAT_MV_PER_LSB * 0.001;  
  Serial.print("The battery voltage is:");
  Serial.print(g_powerVoltage,2);
  Serial.println(" V");
} 

```
::: tip 📝 NOTE
The basic example code for the RAK4631 WisBlock Core Module can be found on the [RAK19006 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/IO/RAK19006_WirelessCharger)
:::

3. Then you can now select the right port and upload the code, as shown in **Figure 9** and **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak19006/quickstart/select-port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak19006/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK19006 Sample code"
/>

4. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the RAK19006 reading logs, as shown in **Figure 11**. You will be able to see the battery voltage both on the Serial Monitor and OLED Display.

<rk-img
  src="/assets/images/wisblock/rak19006/quickstart/logs.png"
  width="50%"
  caption="RAK19006 Reading logs"
/>

#### RAK19006 in RAK11200 WisBlock Core Guide

##### Arduino Setup

1. First, you need to select the RAK11200 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak19006/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE.

```c
/**
 *  @file RAK13000_WirelessCharger.ino
 *  @author rakwireless.com
 *  @brief show the wireless charger power voltage by the oled
 *  @version 0.1
 *  @date 2021-02-23
 *  @copyright Copyright (c) 2020
 *  @note platform RAK11200
**/
#include <Wire.h>
#include <U8g2lib.h>       //Click here to get the library: http://librarymanager/All#u8g2

#define LED1 12
#define LED2 2

#define PIN_VBAT WB_A0  //Analog pin to read battery level definition
/** Millivolt per LSB constant value = 3.3V ADC range and 12-bit ADC resolution = 3300mV/4096 */
#define VBAT_MV_PER_LSB (0.8056640625F) 
///** Voltage divider constant = 1.5M + 1M voltage divider on VBAT = (1.5M / (1M + 1.5M)) */
#define VBAT_DIVIDER (0.6F)
/** Compensation factor for the VBAT divider */
#define VBAT_DIVIDER_COMP (1.784F)  //(1.0/VBAT_DIVIDER)1.806
/** Formula to calculate real battery voltage */
#define REAL_VBAT_MV_PER_LSB (VBAT_DIVIDER_COMP * VBAT_MV_PER_LSB)

U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0);

float g_powerVoltage = 0;   

void oled_show();
void readVBAT_init();
void get_BATvoltage();
void led1_on();
void led1_off();
void led2_on();
void led2_off();

void setup()
{
  time_t timeout = millis();
  readVBAT_init();
  u8g2.begin();
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
  pinMode(LED1, OUTPUT);  
  pinMode(LED2, OUTPUT);   
  
  digitalWrite(LED1, LOW);
  digitalWrite(LED2, LOW);
}

void loop()
{  
  led1_on();
  led2_off();
  get_BATvoltage();
  oled_show();
  delay(200);
  led2_on();
  led1_off();
  delay(200);
}
void led1_on()
{
  digitalWrite(LED1, HIGH);
}
void led1_off()
{
  digitalWrite(LED1, LOW);
}
void led2_on()
{
  digitalWrite(LED2, HIGH);
}
void led2_off()
{
  digitalWrite(LED2, LOW);
}
void oled_show()
{
  char data[32] = {0};
  u8g2.clearBuffer();         // clear the internal memory
  u8g2.setFont(u8g2_font_ncenB10_tr); // choose a suitable font
  
  u8g2.drawStr(3, 15, "Power  voltage:");
  memset(data, 0, sizeof(data));
  sprintf(data, "%3.2f V",g_powerVoltage);
  u8g2.drawStr(3, 45, data);
  u8g2.sendBuffer(); // transfer internal memory to the display
}
void readVBAT_init()
{
  adcAttachPin(PIN_VBAT);
  analogSetAttenuation(ADC_11db); 
   // Set the resolution to 12-bit (0..4095)
  analogReadResolution(12); // Can be 8, 10, 12 or 14
  analogSetWidth(12); //Sets the sampling bit and read resolution 9-12
//  analogSetSamples(10); //Set sampling times 1-255   The default 8
//  adcStart(PIN_VBAT);
  delay(10);
}
void get_BATvoltage()
{
  unsigned int sum = 0,average_value = 0;
  unsigned int read_temp[10] = {0};
  unsigned char i = 0;
  unsigned int adc_max = 0;
  unsigned int adc_min = 4095; 
  average_value = analogRead(PIN_VBAT);  
  for(i=0;i<10;i++)
  {
    read_temp[i] = analogRead(PIN_VBAT);    
    if(read_temp[i] < adc_min)  
      {
        adc_min = read_temp[i];
      }
    if(read_temp[i] > adc_max)  
      {
        adc_max = read_temp[i];
      }
     sum = sum + read_temp[i];
//     Serial.println(read_temp[i]);
//     delay(1);
  }
  average_value = (sum - adc_max - adc_min) >> 3; 
//  Serial.println(average_value); 
  g_powerVoltage = average_value * REAL_VBAT_MV_PER_LSB * 0.001;  
  Serial.print("The battery voltage is:");
  Serial.print(g_powerVoltage,2);
  Serial.println(" V");
} 

```

::: tip 📝 NOTE
The basic example code for the RAK11200 WisBlock Core Module can be found on the [RAK19006 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK11200/IO/RAK19006_WirelessCharger)
:::

3. Then you can now select the right port and upload the code, as shown in **Figure 13** and **Figure 14**.

::: tip 📝 NOTE
RAK11200 requires **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak19006/quickstart/rak11200-select-port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak19006/quickstart/rak11200-upload.png"
  width="100%"
  caption="Uploading the RAK19006 Sample code"
/>

4.  When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the RAK19006 reading logs, as shown in **Figure 15**. You will be able to see the battery voltage both on the Serial Monitor and OLED Display.

<rk-img
  src="/assets/images/wisblock/rak19006/quickstart/logs.png"
  width="50%"
  caption="RAK19006 Reading logs"
/> 
