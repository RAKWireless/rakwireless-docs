---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK17001. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak17001/RAK17001.png
tags:
  - quickstart
  - wisblock
  - RAK17001
prev: ../Overview/
next: ../Datasheet/
---

# RAK17001 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK17001 WisBlock Motor Control Module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK17001 WisBlock Motor Control Module](https://store.rakwireless.com/products/wisblock-h-bridge-motor-driver-rak17001)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base/)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo Battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar Charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- DC Motor

#### Software

##### Arduino

- Download and install [Arduino IDE.](https://www.arduino.cc/en/Main/Software)
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP.](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index)

## Product Configuration

### Hardware Setup

RAK17001 is a WisBlock Motor Control Module that extends the WisBlock system to be used on controlling DC motor. It has a single H-bridge configuration motor driver that is ideal for low voltage DC motor and battery powered applications. It can get power from the battery of the WisBlock Base or externally via the RAK17001 terminal connector.

By setting the right jumper on the 3-pin header, you can select where you want to get the power source. The 3-pin header is located on the side of the terminal connector. It can allow up to 2.6&nbsp;A with built-in overcurrent and overtemperature protection.

For more information about RAK17001, refer to the [Datasheet](../Datasheet/).

#### Motor Driven by the WisBlock Battery

:::warning ⚠️ WARNING

- Batteries can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- Make sure the battery wires match the polarity on the WisBlock Base board. Not all batteries have the same wiring.

:::

You need to set a header jumper and short VM and BAT. This is to enable power from the battery of the WisBlock module. You can connect one DC motor via A1 and A2 pin of the terminal block.

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/RAK17001_batt_supply.png"
  width="30%"
  caption="RAK17001 Powered by WisBlock Battery"
/>

#### Motor Driven by the External VIN

You need to set header jumper and short VM and VIN to enable power from the external power source. The external power source can be a different battery pack or an independent DC power supply.

Connect this power source to the supply voltage terminals VIN and GND of RAK17001. Make sure that the voltage terminals are suitable for the range from 1.8&nbsp;V to 10&nbsp;V. Once done on the setup, you can connect one DC motor via A1 and A2 pin of the terminal block.

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/RAK17001_vin_supply.png"
  width="30%"
  caption="RAK17001 Powered by External Voltage Source"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

The RAK17001 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 3**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/RAK17001_mounting.png"
  width="60%"
  caption="RAK17001 mounting connection to a WisBlock Base module"
/>

##### Disassembling Procedure

The procedure in disassembling any type of WisBlock modules is the same.

1. To begin disassembling, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. After removing the screws, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Detach the module from the baseboard by applying force to the module at the position of the connector, as shown in **Figure 6**.

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
:::

After all this setup, you can now connect the battery and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

These are the quick links that go directly to the software guide for the specific WisBlock Core module you use:

- [RAK17001 in RAK4631 WisBlock Core Guide](#rak17001-in-rak4631-wisblock-core-guide)
- [RAK17001 in RAK11200 WisBlock Core Guide](#rak17001-in-rak11200-wisblock-core-guide)
- [RAK17001 in RAK11310 WisBlock Core Guide](#rak17001-in-rak11310-wisblock-core-guide)

#### RAK17001 in RAK4631 WisBlock Core Guide

##### Arduino Setup

After doing the hardware setup, this example code will work both for WisBlock battery-powered motor or an external power source. This will control the DC motor connected via terminal connector. The module will spin the motor clockwise then counterclockwise direction repeatedly.

1. To begin with the Arduino setup, you need to select the RAK4631 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/rak4631-board.png"
  width="80%"
  caption="Selecting RAK4631 as the WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE. This example code comes from the [RAK17001 WisBlock example repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/RAK4630/IO/RAK17001_HBridge_STSPIN250/RAK17001_HBridge_STSPIN250.ino) which demonstrates basic usage of RAK17001 module.

```c
/**
   @file RAK17001_HBridge_STSPIN250.ino
   @author rakwireless.com
   @brief Control the one motors for forward and reverse rotation from slow to fast and then from fast to slow.
   @version 0.1
   @date 2022-05-05
   @copyright Copyright (c) 2022
**/

#include <Arduino.h>
#if defined NRF52_SERIES
#include <LoRaWan-RAK4630.h>                //http://librarymanager/All#SX126x
#elif defined ARDUINO_ARCH_RP2040
#include <LoRaWan-Arduino.h>
#elif defined ESP32
#endif
#define STSPIN250_PH           WB_IO4        //the PH pin determines the direction of the current
#define STSPIN250_PWM          WB_IO3        //the PWM pin can be used to regulate the speed of the rotation
#define STSPIN250_FAULT_CHECK  WB_IO5
#define STSPIN250_EN           WB_IO6
#define FAULT_CHECK_COUNT      4             // if four protection interrupts detected within 5 seconds, Sensor may be thermal shutdown or Overcurrent and short-circuit protections
#define FAULT_CHECK_INTERVAL   5000          //value in [ms] ,


TimerEvent_t appTimer;
static uint32_t timers_init(void);
volatile uint16_t InterruptCount = 0;
volatile int old_time = 0;
volatile int new_time = 0;
bool TimerFlag = false;

void setup()
{
  //Sensor power control
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);
  delay(300);

  pinMode(LED_BLUE, OUTPUT);
  digitalWrite(LED_BLUE, LOW);
  Serial.begin(115200);
  time_t timeout = millis();
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
  Serial.println("RAK17001 Hbridege Test!");

  //creat a user timer
  uint32_t err_code;
  err_code = timers_init();
  if (err_code != 0)
  {
    Serial.printf("timers_init failed - %d\n", err_code);
    return;
  }

  pinMode(STSPIN250_PH, OUTPUT);
  digitalWrite(STSPIN250_PH, HIGH);

  pinMode(STSPIN250_PWM, OUTPUT);
  digitalWrite(STSPIN250_PWM, LOW);

  pinMode(STSPIN250_EN, OUTPUT);
  digitalWrite(STSPIN250_EN, HIGH);//if set STSPIN250_EN High,sensor work normal.if set LOW, Sensors enter low power mode.
  //   digitalWrite(STSPIN250_EN, LOW);

  pinMode(STSPIN250_FAULT_CHECK, INPUT);
  attachInterrupt(digitalPinToInterrupt(STSPIN250_FAULT_CHECK), motor_interrupt, FALLING);

  TimerSetValue(&appTimer, FAULT_CHECK_INTERVAL);
  TimerStart(&appTimer);
  delay(100);
}

void loop()
{
  if (TimerFlag)//Thermal shutdown or Overcurrent and short-circuit protections
  {
    InterruptCount = 0;
    digitalWrite(LED_BLUE, HIGH);
    Serial.println("Sensor thermal shutdown or Overcurrent and short-circuit protections,Please check it！！！");
    delay(500);
    return;
  }
  else
  {
    if (digitalRead(STSPIN250_EN) == 1)
    {
      digitalWrite(STSPIN250_PH, HIGH);  //The motor rotates clockwise
      Serial.println("The motor turns clockwise");
      for (uint8_t i = 50 ; i < 255 ; i++ )
      {
        analogWrite(STSPIN250_PWM, i);
        delay(35);
      }
      delay(100);
      for (uint8_t i = 255 ; i > 0 ; i-- )
      {
        analogWrite(STSPIN250_PWM, i);
        delay(35);
      }

      digitalWrite(STSPIN250_PH, LOW);//Counterclockwise rotation of motor
      Serial.println("The motor turns Counterclockwise ");
      for (uint8_t i = 50 ; i < 255 ; i++ )
      {
        analogWrite(STSPIN250_PWM, i);
        delay(35);
      }
      delay(100);
      for (uint8_t i = 255 ; i > 0 ; i-- )
      {
        analogWrite(STSPIN250_PWM, i);
        delay(35);
      }
    }
    else
    {
      Serial.println("please exit the low-power mode ");
      delay(1000);
    }
  }
}


void motor_interrupt() {
  old_time = new_time;
  new_time = millis();
  if (new_time - old_time >= 100)
    InterruptCount++;
}


/**@brief Function for handling user timerout event.
*/
void motor_check_periodic_handler(void)
{
  TimerSetValue(&appTimer, FAULT_CHECK_INTERVAL);
  TimerStart(&appTimer);
  Serial.print("InterruptCount=");
  Serial.println(InterruptCount);
  if (InterruptCount >= FAULT_CHECK_COUNT)
  {
    Serial.print("InterruptCount1=");
    Serial.println(InterruptCount);
    TimerFlag = true;
  }
  InterruptCount = 0;
}

/**@brief Function for the Timer initialization.
   @details Initializes the timer module. This creates and starts application timers.
*/
uint32_t timers_init(void)
{
  TimerInit(&appTimer, motor_check_periodic_handler);
  return 0;
}
```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK4631 WisBlock Core Module that can be found on the [RAK17001 Motor Driver Example WisBlock Repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/RAK4630/IO/RAK17001_HBridge_STSPIN250/RAK17001_HBridge_STSPIN250.ino).
:::

3. Then you can now select the right port and upload the code, as shown in **Figure 8** and **Figure 9**.

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/select-port.png"
  width="80%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/upload.png"
  width="80%"
  caption="Uploading the RAK17001 Sample code"
/>

4. When you have successfully uploaded the example sketch, you'll now see that the motor will start spinning and reversing direction repeatedly.

The direction is based on how the wires of DC motor is connected. It should be connected to the A1 and A2 pin of RAK17001 terminal block. You can reverse the direction by interchanging the wire connection.

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/logs.png"
  width="60%"
  caption="Serial monitor logs"
/>

#### RAK17001 in RAK11200 WisBlock Core Guide

##### Arduino Setup

After doing the hardware setup, this example code will work both for WisBlock battery-powered motor or an external power source. This will control the DC motor connected via terminal connector. The module will spin the motor clockwise then counterclockwise direction repeatedly.

1. To start with the Arduino setup, you need to select the RAK11200 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/rak11200-board.png"
  width="80%"
  caption="Selecting RAK11200 as the WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE. This example code comes from the [RAK17001 WisBlock example repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/RAK11200/IO/RAK17001_HBridge_STSPIN250/RAK17001_HBridge_STSPIN250.ino) which demonstrates basic usage of RAK17001 module.

```c
/**
   @file RAK17001_HBridge_STSPIN250.ino
   @author rakwireless.com
   @brief Control the one motors for forward and reverse rotation from slow to fast and then from fast to slow.
   @version 0.1
   @date 2022-05-05
   @copyright Copyright (c) 2022
**/

#include <Arduino.h>

#define STSPIN250_PH           WB_IO4        //the PH pin determines the direction of the current
#define STSPIN250_PWM          WB_IO3        //the PWM pin can be used to regulate the speed of the rotation
#define STSPIN250_FAULT_CHECK  WB_IO5
#define STSPIN250_EN           WB_IO6

#define FAULT_CHECK_COUNT      4             // if four protection interrupts detected within 5 seconds, Sensor may be thermal shutdown or Overcurrent and short-circuit protections
volatile uint16_t  InterruptCount = 0;
volatile int old_time = 0;
volatile int new_time = 0;
hw_timer_t *tim1 = NULL;
bool TimerFlag = false;
// use first channel of 16 channels (started from zero)
#define LEDC_CHANNEL_0  0

// use 13 bit precission for LEDC timer
#define LEDC_TIMER_13_BIT  13

// use 5000 Hz as a LEDC base frequency
#define LEDC_BASE_FREQ     5000

/**
   @brief  Arduino like analogWrite. 
*/
void ledcAnalogWrite(uint8_t channel, uint32_t value, uint32_t valueMax = 255)
{
  // calculate duty, 8191 from 2 ^ 13 - 1
  uint32_t duty = (8191 / valueMax) * min(value, valueMax);

  // write duty to LEDC
  ledcWrite(channel, duty);
}

void setup()
{
  //Sensor power control
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);
  delay(300);

  pinMode(LED_BLUE, OUTPUT);
  digitalWrite(LED_BLUE, LOW);
  Serial.begin(115200);
  time_t timeout = millis();
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
  Serial.println("RAK17001 Test!");

  tim1 = timerBegin(0, 80, true);
  timerAttachInterrupt(tim1, tim1Interrupt, true);
  timerAlarmWrite(tim1, 500000ul, true);
  timerAlarmEnable(tim1);

  pinMode(STSPIN250_PH, OUTPUT);
  digitalWrite(STSPIN250_PH, HIGH);

  pinMode(STSPIN250_PWM, OUTPUT);
  digitalWrite(STSPIN250_PWM, LOW);

  pinMode(STSPIN250_EN, OUTPUT);
  digitalWrite(STSPIN250_EN, HIGH);//if set STSPIN250_EN High,sensor work normal.if set LOW, Sensors enter low power mode.

  pinMode(STSPIN250_FAULT_CHECK, INPUT);
  attachInterrupt(digitalPinToInterrupt(STSPIN250_FAULT_CHECK), motor_interrupt, FALLING);
  delay(300);

  ledcSetup(LEDC_CHANNEL_0, LEDC_BASE_FREQ, LEDC_TIMER_13_BIT); // Set channel 0

  ledcAttachPin(STSPIN250_PWM, LEDC_CHANNEL_0);
}
void loop()
{
  if (TimerFlag)//Thermal shutdown or Overcurrent and short-circuit protections
  {
    InterruptCount = 0;
    digitalWrite(LED_BLUE, HIGH);
    Serial.println("Sensor thermal shutdown or Overcurrent and short-circuit protections,Please check it！！！");
    delay(500);
    return;
  }
  else
  {
    if (digitalRead(STSPIN250_EN) == 1)
    {
      digitalWrite(STSPIN250_PH, HIGH);  //The motor rotates clockwise
      Serial.println("The motor turns clockwise");
      for (uint8_t i = 50 ; i < 255 ; i++ )
      {
        ledcAnalogWrite(LEDC_CHANNEL_0, i);
        delay(50);
      }
      delay(100);
      for (uint8_t i = 255 ; i > 0 ; i-- )
      {
        ledcAnalogWrite(LEDC_CHANNEL_0, i);
        delay(50);
      }

      digitalWrite(STSPIN250_PH, LOW);//Counterclockwise rotation of motor
      Serial.println("The motor turns Counterclockwise ");
      for (uint8_t i = 50 ; i < 255 ; i++ )
      {
        ledcAnalogWrite(LEDC_CHANNEL_0, i);
        delay(50);
      }
      delay(100);
      for (uint8_t i = 255 ; i > 0 ; i-- )
      {
        ledcAnalogWrite(LEDC_CHANNEL_0, i);
        delay(50);
      }
    }
    else
    {
      Serial.println("please exit the low-power mode ");
      delay(1000);
    }
  }
}

void tim1Interrupt()
{
  if (InterruptCount)
  {
    if (InterruptCount >= FAULT_CHECK_COUNT)  // if three protection interrupts detected within 5 seconds, Sensor may be thermal shutdown or Overcurrent and short-circuit protections
    {
      TimerFlag = true;
      //    Serial.print("timerAlarmEnabled=");
      //    Serial.println(timerAlarmEnabled(tim1));
    }
  }
}

void motor_interrupt() {
  old_time = new_time;
  new_time = millis();
  if (new_time - old_time >= 100)
    InterruptCount++;
}
```

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK11200 WisBlock Core Module. You can find it on the [RAK17001 Motor Driver Example WisBlock Repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/RAK11200/IO/RAK17001_HBridge_STSPIN250/RAK17001_HBridge_STSPIN250.ino).
:::

3. Then you can now select the right port and upload the code, as shown in **Figure 12** and **Figure 13**.

::: tip 📝 NOTE
RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/port_esp32.png"
  width="80%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/upload_esp32.png"
  width="80%"
  caption="Uploading the RAK17001 Sample code"
/>

4. When you have successfully uploaded the example sketch, you'll now see that the motor will start spinning and reversing direction repeatedly.

The direction is based on how the wires of DC motor is connected. It should be connected to the A1 and A2 pin of RAK17001 terminal block. You can reverse the direction by interchanging the wire connection.

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/logs.png"
  width="60%"
  caption="Serial monitor logs"
/>

#### RAK17001 in RAK11310 WisBlock Core Guide

##### Arduino Setup

After doing the hardware setup, this example code will work both for WisBlock battery-powered motor or an external power source. This will control the DC motor connected via terminal connector. The module will spin the motor clockwise then counterclockwise direction repeatedly.

1. To begin with the Arduino setup, you need to select the RAK11310 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as the WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE. This example code comes from the [RAK17001 WisBlock example repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/RAK11300/IO/RAK17001_HBridge_STSPIN250/RAK17001_HBridge_STSPIN250.ino) which demonstrates basic usage of RAK17001 module.

```c
/**
   @file RAK17001_HBridge_STSPIN250.ino
   @author rakwireless.com
   @brief Control the one motors for forward and reverse rotation from slow to fast and then from fast to slow.
   @version 0.1
   @date 2022-05-05
   @copyright Copyright (c) 2022
**/

#include <Arduino.h>
#if defined NRF52_SERIES
#include <LoRaWan-RAK4630.h>                //http://librarymanager/All#SX126x
#elif defined ARDUINO_ARCH_RP2040
#include <LoRaWan-Arduino.h>
#elif defined ESP32
#endif
#define STSPIN250_PH           WB_IO4        //the PH pin determines the direction of the current
#define STSPIN250_PWM          WB_IO3        //the PWM pin can be used to regulate the speed of the rotation
#define STSPIN250_FAULT_CHECK  WB_IO5
#define STSPIN250_EN           WB_IO6
#define FAULT_CHECK_COUNT      4             // if four protection interrupts detected within 5 seconds, Sensor may be thermal shutdown or Overcurrent and short-circuit protections
#define FAULT_CHECK_INTERVAL   5000          //value in [ms] ,


TimerEvent_t appTimer;
static uint32_t timers_init(void);
volatile uint16_t InterruptCount = 0;
volatile int old_time = 0;
volatile int new_time = 0;
bool TimerFlag = false;

void setup()
{
  //Sensor power control
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);
  delay(300);

  pinMode(LED_BLUE, OUTPUT);
  digitalWrite(LED_BLUE, LOW);
  Serial.begin(115200);
  time_t timeout = millis();
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
  Serial.println("RAK17001 Hbridege Test!");

  //creat a user timer
  uint32_t err_code;
  err_code = timers_init();
  if (err_code != 0)
  {
    Serial.printf("timers_init failed - %d\n", err_code);
    return;
  }

  pinMode(STSPIN250_PH, OUTPUT);
  digitalWrite(STSPIN250_PH, HIGH);

  pinMode(STSPIN250_PWM, OUTPUT);
  digitalWrite(STSPIN250_PWM, LOW);

  pinMode(STSPIN250_EN, OUTPUT);
  digitalWrite(STSPIN250_EN, HIGH);//if set STSPIN250_EN High,sensor work normal.if set LOW, Sensors enter low power mode.
  //   digitalWrite(STSPIN250_EN, LOW);

  pinMode(STSPIN250_FAULT_CHECK, INPUT);
  attachInterrupt(digitalPinToInterrupt(STSPIN250_FAULT_CHECK), motor_interrupt, FALLING);

  TimerSetValue(&appTimer, FAULT_CHECK_INTERVAL);
  TimerStart(&appTimer);
  delay(100);
}

void loop()
{
  if (TimerFlag)//Thermal shutdown or Overcurrent and short-circuit protections
  {
    InterruptCount = 0;
    digitalWrite(LED_BLUE, HIGH);
    Serial.println("Sensor thermal shutdown or Overcurrent and short-circuit protections,Please check it！！！");
    delay(500);
    return;
  }
  else
  {
    if (digitalRead(STSPIN250_EN) == 1)
    {
      digitalWrite(STSPIN250_PH, HIGH);  //The motor rotates clockwise
      Serial.println("The motor turns clockwise");
      for (uint8_t i = 50 ; i < 255 ; i++ )
      {
        analogWrite(STSPIN250_PWM, i);
        delay(35);
      }
      delay(100);
      for (uint8_t i = 255 ; i > 0 ; i-- )
      {
        analogWrite(STSPIN250_PWM, i);
        delay(35);
      }

      digitalWrite(STSPIN250_PH, LOW);//Counterclockwise rotation of motor
      Serial.println("The motor turns Counterclockwise ");
      for (uint8_t i = 50 ; i < 255 ; i++ )
      {
        analogWrite(STSPIN250_PWM, i);
        delay(35);
      }
      delay(100);
      for (uint8_t i = 255 ; i > 0 ; i-- )
      {
        analogWrite(STSPIN250_PWM, i);
        delay(35);
      }
    }
    else
    {
      Serial.println("please exit the low-power mode ");
      delay(1000);
    }
  }
}


void motor_interrupt() {
  old_time = new_time;
  new_time = millis();
  if (new_time - old_time >= 100)
    InterruptCount++;
}


/**@brief Function for handling user timerout event.
*/
void motor_check_periodic_handler(void)
{
  TimerSetValue(&appTimer, FAULT_CHECK_INTERVAL);
  TimerStart(&appTimer);
  Serial.print("InterruptCount=");
  Serial.println(InterruptCount);
  if (InterruptCount >= FAULT_CHECK_COUNT)
  {
    Serial.print("InterruptCount1=");
    Serial.println(InterruptCount);
    TimerFlag = true;
  }
  InterruptCount = 0;
}

/**@brief Function for the Timer initialization.
   @details Initializes the timer module. This creates and starts application timers.
*/
uint32_t timers_init(void)
{
  TimerInit(&appTimer, motor_check_periodic_handler);
  return 0;
}
```

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK11310 WisBlock Core Module that can be found on the [RAK17001 Motor Driver Example WisBlock Repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/RAK11300/IO/RAK17001_HBridge_STSPIN250/RAK17001_HBridge_STSPIN250.ino).
:::

3. Then you can now select the right port and upload the code, as shown in **Figure 16** and **Figure 17**.

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/port_rak11310.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/upload_rak11310.png"
  width="100%"
  caption="Uploading the RAK17001 Sample code"
/>

4. When you have successfully uploaded the example sketch, you'll now see that the motor will start spinning and reversing direction repeatedly.

The direction is based on how the wires of DC motor is connected. It should be connected to the A1 and A2 pin of RAK17001 terminal block. You can reverse the direction by interchanging the wire connection.

<rk-img
  src="/assets/images/wisblock/rak17001/quickstart/logs.png"
  width="60%"
  caption="Serial monitor logs"
/>