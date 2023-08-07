---
rak_img: /assets/images/wisblock/kits/4_industrial_kit_1.png
rak_desc: The WisBlock IoT Education Kit - Smart Industry is a comprehensive and customizable IoT kit that includes position and distance sensors, UI devices and actuators. It also supports different connectivity options like LoRaWAN, NB-IoT and LTE-M.

rak_grp: [wisblock,wiskit]
rak_model: Industrial
prev: ../Overview/
next: ../Datasheet/
tags:
    - IoT Education Kit
    - WisBlock IoT Education Kit - Smart Industry
    - WisBlock Kit
    - WisBlock   
---

# WisBlock IoT Education Kit - Smart Industry Quick Start Guide

## Prerequisite

### What Do You Need?

The **WisBlock IoT Education Kit - Smart Industry** comes with **RAK19007** and **RAK19001** **WisBlock Base boards**, two **RAK4631** **WisBlock Core modules**, and set of sensor modules to explore with. Before going through each and every step on using the **WisBlock IoT Education Kit - Smart Industry**, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK4631 WisBlock Core](https://store.rakwireless.com/products/nordic-nrf52840-ble-core-module-for-lorawan-with-lora-sx1262-rak4631-rak4631-c?variant=42576992436422)
- [RAK19007 WisBlock Base Board](https://store.rakwireless.com/products/rak19007-wisblock-base-board-2nd-gen)
- [RAK19001 WisBlock Base Board](https://store.rakwireless.com/products/rak19001-wisblock-dual-io-base-board)
- [RAK16002 Coulomb Sensor](https://store.rakwireless.com/products/rak16002-coulomb-sensor)
- [RAK12014 IR ToF Sensor](https://store.rakwireless.com/products/rak12014-wisblock-tof-sensor)
- [RAK12029 Inductive Sensor](https://store.rakwireless.com/products/rak12029-inductive-proximity-sensor)
- [RAK13001 Relay Module](https://store.rakwireless.com/products/relay-io-rak13001)
- USB C Cable
- [RAK19005 Sensor Extension Cable (optional)](https://store.rakwireless.com/products/fpc-extension-cable-for-slot-a-to-d-rak19005)
- [RAK19008 IO Extension Cable (optional)](https://store.rakwireless.com/products/wisblock-io-extension-cable-rak19008)
- [Li-Ion/LiPo battery](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software
  
##### Arduino

- Download and install [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup & Sample Applications

**WisBlock IoT Education Kit - Smart Industry** comprises of position and distance sensors, UI devices and actuators that can be used with **RAK19007** and **RAK19001** **WisBlock Base boards** which you can choose from. They are used in industrial environments that can be useful to different IoT applications. You can choose from these devices for your desired applications.

- **Battery Monitoring Application - RAK4631 + RAK16002 Board**

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/rak4631+rak16002.png"
  width="80%"
  caption="RAK4631 + RAK16002 Board"
/>

- **Material Classifier Application - RAK4631 + RAK12014 + RAK12029 + RAK13001 Board**

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/rak4631+all_sensors_new.png"
  width="90%"
  caption="RAK4631 + RAK12014 + RAK12029 + RAK13001 Board"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/rak4631+all_sensors_3.png"
  width="40%"
  caption="RAK12014 connected at RAK19001 board"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/rak4631+all_sensors_2_new.png"
  width="80%"
  caption="RAK4631 + RAK12014 + RAK12029 + RAK13001 Board"
/>

#### Assembly and Functionality Tests of WisBlock Smart Industry Modules

The following WisBlock Smart Industry modules listed below are used in this kit. To check for their asssemblies and functionalities, please refer to the links below for further information:

- [RAK16002 Coulomb Sensor](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK16002/Quickstart/#prerequisite)
- [RAK12014 IR ToF Sensor](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12014/Quickstart/)
- [RAK12029 Inductive Sensor](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12029/Quickstart/)
- [RAK13001 Relay Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK13001/Quickstart/)

### Software Configuration and Examples

#### LoRaWAN Applications for WisBlock Smart Industry Kit using TTN and Quibitro

- [Battery Monitoring LoRaWAN Application](#battery-monitoring-lorawan-application)
- [Material Classifier LoRaWAN Application](#material-classifier-lorawan-application)

##### Battery Monitoring LoRaWAN Application

The **Battery Monitoring LoRaWAN Application** is used to monitor the state-of-charge (SoC) of the battery used in RAKwireless devices via **TTN** or **Qubitro**. It uses **RAK16002** coulomb sensor module which is based on **LTC2941IDCB**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Battery.png"
  width="60%"
  caption="Battery Monitoring device"
/>

###### Battery Monitoring - TTN Registration Section and Device Registration

1. If you already have an existing TTN account, you may proceed to the next steps. If you haven't created any TTN account, please refer to this [link](#ttn-account-creation) to create one. 

2. Once done with the TTN account creation, you may now proceed with the device registration. Please refer to this [guide](#device-registration) for your reference. After creating the application and adding the device in TTN, you can proceed on the LoRaWAN Code uploading steps.

###### LoRaWAN Code for Battery Monitoring

1. If you already have **Arduino IDE** installed to your laptop or PC and added **RAK4631 board** into it, you may proceed to the next step. If you haven't yet installed the **Arduino IDE**, please refer to this [link](#arduino-ide-installation-rak4631) for the steps.

2. After the installation, you can now proceed programming your **Battery Monitoring** device. Just copy the code below for **Battery Monitoring LoRaWAN Application** and paste it into the **Arduino IDE**.

::: tip 📝 NOTE

The example code uses [SX126x-Arduino](https://github.com/beegee-tokyo/SX126x-Arduino) library which needs to be added to successfully compile the LoRaWAN code.

:::

::: details Click Here to View Example Code
```c

#include <Arduino.h>
#include <LoRaWan-RAK4630.h> //http://librarymanager/All#SX126x
#include <SPI.h>
#include <Wire.h>

#include "LTC2941.h"               // Click here to get the library: http://librarymanager/All#GROVE-Coulomb_Counter
#define BATTERY_CAPACITY	2200     // unit:mAh.	
#define CURRENT_CAPACITY  42352    // Set the current battery level to 1800 mAh.
#define Enable            WB_IO2   // Sensor Power Switch

#ifdef RAK4630
  #define BOARD "RAK4631 "
  #define  RAK4631_BOARD true  
#else    
  #define  RAK4631_BOARD false             
#endif

long int coulomb, mAh, percent;

bool doOTAA = true;   // OTAA is used by default.
#define SCHED_MAX_EVENT_DATA_SIZE APP_TIMER_SCHED_EVENT_DATA_SIZE /**< Maximum size of scheduler events. */
#define SCHED_QUEUE_SIZE 60                     /**< Maximum number of events in the scheduler queue. */
#define LORAWAN_DATERATE DR_0                   /*LoRaMac datarates definition, from DR_0 to DR_5*/
#define LORAWAN_TX_POWER TX_POWER_5             /*LoRaMac tx power definition, from TX_POWER_0 to TX_POWER_15*/
#define JOINREQ_NBTRIALS 3                      /**< Number of trials for the join request. */
DeviceClass_t g_CurrentClass = CLASS_A;         /* class definition*/
LoRaMacRegion_t g_CurrentRegion = LORAMAC_REGION_US915;    /* Region:EU868*/
lmh_confirm g_CurrentConfirm = LMH_CONFIRMED_MSG;         /* confirm/unconfirm packet definition*/
uint8_t gAppPort = LORAWAN_APP_PORT;                      /* data port*/

/**@brief Structure containing LoRaWan parameters, needed for lmh_init()
*/
static lmh_param_t g_lora_param_init = {LORAWAN_ADR_ON, LORAWAN_DATERATE, LORAWAN_PUBLIC_NETWORK, JOINREQ_NBTRIALS, LORAWAN_TX_POWER, LORAWAN_DUTYCYCLE_OFF};

// Forward declaration
static void lorawan_has_joined_handler(void);
static void lorawan_join_failed_handler(void);
static void lorawan_rx_handler(lmh_app_data_t *app_data);
static void lorawan_confirm_class_handler(DeviceClass_t Class);
static void send_lora_frame(void);

/**@brief Structure containing LoRaWan callback functions, needed for lmh_init()
*/
static lmh_callback_t g_lora_callbacks = {BoardGetBatteryLevel, BoardGetUniqueId, BoardGetRandomSeed,
                                        lorawan_rx_handler, lorawan_has_joined_handler, lorawan_confirm_class_handler, lorawan_join_failed_handler
                                       };
//OTAA keys !!!! KEYS ARE MSB !!!!
uint8_t nodeDeviceEUI[8] = {0xAC, 0x1F, 0x09, 0xFF, 0xFE, 0x05, 0x3E, 0x3E};
uint8_t nodeAppEUI[8] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
uint8_t nodeAppKey[16] = {0x64, 0xF6, 0xCB, 0x00, 0x35, 0x2D, 0x3B, 0x99, 0x6C, 0xFB, 0x36, 0xE4, 0xCE, 0x1A, 0x08, 0x91};

// ABP keys
uint32_t nodeDevAddr = 0x260116F8;
uint8_t nodeNwsKey[16] = {0x7E, 0xAC, 0xE2, 0x55, 0xB8, 0xA5, 0xE2, 0x69, 0x91, 0x51, 0x96, 0x06, 0x47, 0x56, 0x9D, 0x23};
uint8_t nodeAppsKey[16] = {0xFB, 0xAC, 0xB6, 0x47, 0xF3, 0x58, 0x45, 0xC7, 0x50, 0x7D, 0xBF, 0x16, 0x8B, 0xA8, 0xC1, 0x7C};

// Private definition
#define LORAWAN_APP_DATA_BUFF_SIZE 64                     /**< buffer size of the data to be transmitted. */
static uint8_t m_lora_app_data_buffer[LORAWAN_APP_DATA_BUFF_SIZE];            //< Lora user application data buffer.
static lmh_app_data_t m_lora_app_data = {m_lora_app_data_buffer, 0, 0, 0, 0}; //< Lora user application data structure.

static uint32_t count = 0;
static uint32_t count_fail = 0;

void setup()
{
  // Sensor Power Switch
  pinMode(Enable, OUTPUT);
  digitalWrite(Enable, HIGH);

  pinMode(LED_GREEN, OUTPUT);  // Output LED
  pinMode(LED_BLUE, OUTPUT);   // Output LED

  // Initialize LoRa chip.
  lora_rak4630_init();

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
  Serial.println("=====================================");
  Serial.println("Welcome to RAK4630 LoRaWan!!!");
  if (doOTAA)
  {
    Serial.println("Type: OTAA");
  }
  else
  {
    Serial.println("Type: ABP");
  }

  switch (g_CurrentRegion)
  {
    case LORAMAC_REGION_AS923:
      Serial.println("Region: AS923");
      break;
    case LORAMAC_REGION_AU915:
      Serial.println("Region: AU915");
      break;
    case LORAMAC_REGION_CN470:
      Serial.println("Region: CN470");
      break;
    case LORAMAC_REGION_EU433:
      Serial.println("Region: EU433");
      break;
    case LORAMAC_REGION_IN865:
      Serial.println("Region: IN865");
      break;
    case LORAMAC_REGION_EU868:
      Serial.println("Region: EU868");
      break;
    case LORAMAC_REGION_KR920:
      Serial.println("Region: KR920");
      break;
    case LORAMAC_REGION_US915:
      Serial.println("Region: US915");
      break;
  }
  Serial.println("=====================================");

  // Setup the EUIs and Keys
  if (doOTAA)
  {
    lmh_setDevEui(nodeDeviceEUI);
    lmh_setAppEui(nodeAppEUI);
    lmh_setAppKey(nodeAppKey);
  }
  else
  {
    lmh_setNwkSKey(nodeNwsKey);
    lmh_setAppSKey(nodeAppsKey);
    lmh_setDevAddr(nodeDevAddr);
  }

  uint32_t err_code;
  // Initialize LoRaWan
  err_code = lmh_init(&g_lora_callbacks, g_lora_param_init, doOTAA, g_CurrentClass, g_CurrentRegion);
  if (err_code != 0)
  {
    Serial.printf("lmh_init failed - %d\n", err_code);
    return;
  }

  // Start Join procedure
  lmh_join();

  Serial.println("========================");
  Serial.println("RAK16002 LoRaWAN example");
  Serial.println("========================");
  
  Wire.begin();
    
  ltc2941.initialize();
  ltc2941.setBatteryFullMAh(BATTERY_CAPACITY , false);
  ltc2941.setAccumulatedCharge(CURRENT_CAPACITY); // Set the current battery level to 1800 mAh.

}

void loop()
{
  // Put your application tasks here, like reading of sensors,
  // Controlling actuators and/or other functions.

  digitalWrite(LED_BLUE,HIGH);
  digitalWrite(LED_GREEN, HIGH);

  // Measures Coulomb, Charge and Percentage
  coulomb = ltc2941.getCoulombs();
  mAh = ltc2941.getmAh();
  percent = ltc2941.getPercent();

  Serial.println("Sending frame now...");
  send_lora_frame();  

  Serial.print(coulomb);
  Serial.print("C   ");
  Serial.print(mAh);
  Serial.print("mAh   ");
  Serial.print(percent);
  Serial.println("%");
  delay(5000);

}

/**@brief LoRa function for handling HasJoined event.
 */
void lorawan_has_joined_handler(void)
{
  Serial.println("OTAA Mode, Network Joined!");
}

/**@brief LoRa function for handling OTAA join failed
*/
static void lorawan_join_failed_handler(void)
{
  Serial.println("OTAA join failed!");
  Serial.println("Check your EUI's and Keys's!");
  Serial.println("Check if a Gateway is in range!");
}
/**@brief Function for handling LoRaWan received data from Gateway
 *
 * @param[in] app_data  Pointer to rx data
 */
void lorawan_rx_handler(lmh_app_data_t *app_data)
{
  Serial.printf("LoRa Packet received on port %d, size:%d, rssi:%d, snr:%d, data:%s\n",
          app_data->port, app_data->buffsize, app_data->rssi, app_data->snr, app_data->buffer);
}

void lorawan_confirm_class_handler(DeviceClass_t Class)
{
  Serial.printf("switch to class %c done\n", "ABC"[Class]);
  // Informs the server that switch has occurred ASAP
  m_lora_app_data.buffsize = 0;
  m_lora_app_data.port = gAppPort;
  lmh_send(&m_lora_app_data, g_CurrentConfirm);
}

String data = "";

void send_lora_frame(void)
{
  if (lmh_join_status_get() != LMH_SET)
  {
    //Not joined, try again later
    return;
  }
  
  Serial.print("result: ");
  uint32_t i = 0;
  memset(m_lora_app_data.buffer, 0, LORAWAN_APP_DATA_BUFF_SIZE);
  m_lora_app_data.port = gAppPort;

  data = " Coulomb: " + String(coulomb) + " C " + " Charge: " + String(mAh) + " mAh " + " Percentage: " + String(percent) + " % ";
  Serial.println(data);

  uint32_t coulomb_data = coulomb;
  uint32_t mAh_data = mAh;
  uint16_t percent_data = percent;

  m_lora_app_data.buffer[i++] = 0x01;

  m_lora_app_data.buffer[i++] = (uint8_t)((coulomb_data  & 0xFF000000) >> 24);
  m_lora_app_data.buffer[i++] = (uint8_t)((coulomb_data  & 0x00FF0000) >> 16);
  m_lora_app_data.buffer[i++] = (uint8_t)((coulomb_data  & 0x0000FF00) >> 8);
  m_lora_app_data.buffer[i++] = (uint8_t)(coulomb_data  & 0x000000FF);

  m_lora_app_data.buffer[i++] = (uint8_t)((mAh_data & 0xFF000000) >> 24);
  m_lora_app_data.buffer[i++] = (uint8_t)((mAh_data & 0x00FF0000) >> 16);
  m_lora_app_data.buffer[i++] = (uint8_t)((mAh_data & 0x0000FF00) >> 8);
  m_lora_app_data.buffer[i++] = (uint8_t)(mAh_data & 0x000000FF);

  m_lora_app_data.buffer[i++] = (uint8_t)((percent_data) >> 8);
  m_lora_app_data.buffer[i++] = (uint8_t)(percent_data);

  m_lora_app_data.buffsize = i;

  lmh_error_status error = lmh_send(&m_lora_app_data, g_CurrentConfirm);
  if (error == LMH_SUCCESS)
  {
    count++;
    Serial.printf("lmh_send ok count %d\n", count);
  }
  else
  {
    count_fail++;
    Serial.printf("lmh_send fail count %d\n", count_fail);
  }
}

```
:::

Before uploading the Arduino Code, there are configurations that you need to set up to ensure that the device can join a LoRaWAN Network server. The steps below will explain the default settings and how to configure them.

- Set up the LoRaWAN region. The **LORAMAC_REGION** can be any of your desired region to work with. You can change this to a region that is applicable to you like `LORAMAC_REGION_US915`, `LORAMAC_REGION_AU915`, etc. Below is the table of LoRaWAN regions and their respective countries where they are used in:

|     LoRaWAN Region      |                               Usage                                  |
| ----------------------- | -------------------------------------------------------------------- |
| LORAMAC_REGION_AS923-1  | Australia, Singapore, Solomon Islands, Sri-Lanka, Taiwan             |
| LORAMAC_REGION_AS923-2  | Vietnam                                                              |
| LORAMAC_REGION_AS923-3  | Philippines, Albania, Algeria, Denmark, Greenland, Jordan            |
| LORAMAC_REGION_AS923-4  | Israel                                                               |
| LORAMAC_REGION_AU915    | Australia, Anguilla, Argentina, and many parts of South America      |
| LORAMAC_REGION_CN470    | China                                                                |
| LORAMAC_REGION_EU433    | EU, UK, Brazil, Costa Rica, Cuba, and many parts of Africa           |
| LORAMAC_REGION_IN865    | India, Cook Islands, Egypt, Hong Kong, Jordan, New Zealand, Niger    |
| LORAMAC_REGION_EU868    | EU, UK and many parts of Africa                                      |
| LORAMAC_REGION_KR920    | Republic of Korea                                                    | 
| LORAMAC_REGION_US915    | USA                                                                  |
| LORAMAC_REGION_RU864    | Russia                                                               |

```c
LoRaMacRegion_t g_CurrentRegion = LORAMAC_REGION_US915;    /* Region:US915*/
```
- Set up the LoRaWAN activation method. In this case, we will be using the **OTAA** configuration which is also the default from the given code.

```c
bool doOTAA = true;   // OTAA is used by default.
```

- Set up the message type if confirmed or not. **Confirmed message** is the default for this one. You can change to an **unconfirmed message** by changing the value to `LMH_UNCONFIRMED_MSG`.

```c
lmh_confirm g_CurrentConfirm = LMH_CONFIRMED_MSG;         /* confirm/unconfirm packet definition*/
```

- Set the device to **Class A**.

```c
DeviceClass_t g_CurrentClass = CLASS_A;         /* class definition*/
```

- Setup the EUIs and KEY. The **DeviceEUI**, **AppEUI** and **AppKey** are the credentials of your device registered to TTN that will be used for the OTAA keys in the code. You need to replace the ones in the code with the credentials registered in TTN.

```c
//OTAA keys !!!! KEYS ARE MSB !!!!
uint8_t nodeDeviceEUI[8] = {0xAC, 0x1F, 0x09, 0xFF, 0xFE, 0x05, 0x3E, 0x3E};
uint8_t nodeAppEUI[8] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
uint8_t nodeAppKey[16] = {0x64, 0xF6, 0xCB, 0x00, 0x35, 0x2D, 0x3B, 0x99, 0x6C, 0xFB, 0x36, 0xE4, 0xCE, 0x1A, 0x08, 0x91};
```

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_21.png"
  width="90%"
  caption="Device's credentials registered in TTN"
/>

3. Once done with the code, you can now proceed uploading it into your device. You need to select first your RAK4631 board from desktop or laptop. To do this, go to **Tools** > **Board:XXXXX** > **RAKwireless nRF Boards** > **WisBlock RAK4631**. After you selected your board, you need to select the specific port of your board. To do this, go to **Tools** > **Port** > then the specific port of your board.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_RAK16002_1.png"
  width="90%"
  caption="Selecting the RAK4631 board"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_RAK16002_2.png"
  width="90%"
  caption="Selecting the port of RAK4631 board"
/>

4. Once done, you can now upload your code. Simply click the right arrow sign at the upper left portion of your Arduino IDE. Once done, you will see the **Device programmed** notification at the bottom part of your Arduino IDE.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_RAK16002_3.png"
  width="90%"
  caption="Uploading your code into your RAK4631 board"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_RAK16002_4.png"
  width="90%"
  caption="Arduino code is successfully uploaded into your RAK4631 board"
/>

###### Battery Monitoring via TTN

1. To monitor the data of your **Battery Monitoring** device via **TTN**, you need to go back to your TTN account where you created your application and registered your device. 

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_RAK16002_5.png"
  width="90%"
  caption="Your Battery Monitoring device in TTN"
/>

2. Then go to **Payload formatters**. Under **Formatter type**, select **Custom Javascript formatter**. Then under the **Formatter code**, you need to replace the default code with the one below. This will decode the data from your device going to **TTN**. Once done, simply click **Save changes**.

```c
// Use for RAK16002 Application 

function Decoder(bytes, port) 
{

  var decoded = {};
  
  if (port === 2)
  {
    if(bytes[0] == 1) // check if the header byte is 1.
    {
      coulomb_data = (bytes[1] << 24) | (bytes[2] << 16) | (bytes[3] << 8) | (bytes[4]);
      charge_data = (bytes[5] << 24) | (bytes[6] << 16) | (bytes[7] << 8) | (bytes[8]);
      percent_data = (bytes[9] << 8) | (bytes[10]);
      
      decoded.coulomb = coulomb_data;
      decoded.charge = charge_data;
      decoded.percent = percent_data;
      
      return decoded;
      
    }
  }
}
```

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_RAK16002_6.png"
  width="90%"
  caption="Payload Formatter"
/>

3. Then go back to **Live data** of your device in TTN and compare it with the live data from the **Serial Monitor** of your device. You should now seeing identical results between them.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_RAK16002_7.png"
  width="90%"
  caption="Live data from your device in TTN"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_RAK16002_8.png"
  width="90%"
  caption="Live data from your device in its Serial Monitor"
/>

###### Battery Monitoring via Qubitro

This section will guide you on how to integrate your application using Qubitro.

1. Go to [Qubitro Portal](https://portal.qubitro.com/login) and create your account.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_1.png"
  width="80%"
  caption="Creating Qubitro Account"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_2.png"
  width="80%"
  caption="Creating Qubitro Account"
/>

2. Once done with the account creation, login into your **Qubitro Account**. Then click **New Project**, then fill out your desired **Name**, as well as the **Description** based on your battery monitoring application, then click **Create**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_3.png"
  width="80%"
  caption="Creating New Project"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_4.png"
  width="80%"
  caption="Creating New Project"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_5.png"
  width="80%"
  caption="Created New Project"
/>

3. Then click into your newly-created project then click **New source**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_6.png"
  width="80%"
  caption="Adding New source"
/>

4. Among the data sources, choose **The Things Stack**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_7.png"
  width="80%"
  caption="Choosing The Things Stack"
/>

5. For the **integration type**, choose **Import from network**, then copy and paste the **PROJECT ID** and **WEBHOOK SIGNING KEY** temporarily to notepad. These credentials will be used on the later part, then click **Go to project**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_8.png"
  width="80%"
  caption="Copying the credentials"
/>

6. Then head back to your **TTN Application** where you created your battery monitoring application to add webhook from it. To do this, just click your device then go to **Integrations** > **Webhooks** > **+ Add webhook**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_9.png"
  width="80%"
  caption="Going to your TTN application for your Battery Monitoring Application"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_10.png"
  width="80%"
  caption="Adding Webhook"
/>

7. Then choose **Qubitro** as your webhook template.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_11.png"
  width="80%"
  caption="Qubitro"
/>

8. Then fill in the needed details:
   - **Webhook ID** - For this example, you can use **battery-monitoring-application**.
   - **Project ID** - Paste the credential you copied from **Step 5**.
   - **Webhook Signing Key** - Paste the credential you copied from **Step 5**.

   Then click **Create Qubitro webhook**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_12.png"
  width="80%"
  caption="Creating Qubitro webhook"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_13.png"
  width="80%"
  caption="Added a Qubitro webhook"
/>

9. After you created your webhook, go back to your **Qubitro** platform to check the changes made. Refresh **Qubitro** by clicking the **Refresh** button on the upper right side of your screen. You will notice that a newly-added device is included in the platform.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_14.png"
  width="80%"
  caption="Refreshing Qubitro to add devices into it"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_15.png"
  width="80%"
  caption="Device successfully included in Qubitro"
/>

10. To add the decoder, simply go to **Functions** > **Create Function**. Then under **Decoder Function**, click **Get started**. You will be now routed to **Function Configuration**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_16.png"
  width="80%"
  caption="Creating Function"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_17.png"
  width="80%"
  caption="Decoder Function"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_18.png"
  width="80%"
  caption="Function Configuration"
/>

11. Under the **Formatter type**, choose **Custom Javascript formatter**. Then under the **Formatter code**, you need to replace its default entry with the code below:

```c
// Use for RAK16002 Application 

function Decoder(bytes, port) 
{

  var decoded = {};
  
  if (port === 2)
  {
    if(bytes[0] == 1) // check if the header byte is 1.
    {
      coulomb_data = (bytes[1] << 24) | (bytes[2] << 16) | (bytes[3] << 8) | (bytes[4]);
      charge_data = (bytes[5] << 24) | (bytes[6] << 16) | (bytes[7] << 8) | (bytes[8]);
      percent_data = (bytes[9] << 8) | (bytes[10]);
      
      decoded.coulomb = coulomb_data;
      decoded.charge = charge_data;
      decoded.percent = percent_data;
      
      return decoded;
      
    }
  }
}
```

Once done, simply click **Save and complete**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_19.png"
  width="80%"
  caption="Function Configuration"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_20.png"
  width="80%"
  caption="Created Decoder Function"
/>

12. Then go to your device and click on the **Data** tab to check for the incoming data coming from your device. You should now be seeing live data from your device. To gather the most recent data, simply click **Refresh**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_21.png"
  width="80%"
  caption="Data Tab"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_22.png"
  width="80%"
  caption="Historical Data"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_23.png"
  width="80%"
  caption="Refreshing data to get newer ones"
/>

13. To add a monitoring dashboard for the data from the battery monitoring device, you need to go to **Home** which is located at the left top most part of your screen. Then click **Dashboards** > **New dashboard** > **Create new**. Then fill out the **Create New Dashboard** portion using the details of your device. For the **Tags**, just simply input **Test** then click **Create**. Once done, click on to your newly-created dashboard.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_24.png"
  width="80%"
  caption="Creating dashboard for your Battery Monitoring device"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_25.png"
  width="80%"
  caption="Creating dashboard for your Battery Monitoring device"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_26.png"
  width="80%"
  caption="Creating dashboard for your Battery Monitoring device"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_27.png"
  width="80%"
  caption="Newly-created dashboard for your Battery Monitoring device"
/>

14. Click **Edit** > **New widget** to add a widget for a specific parameter need to be monitored.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_28.png"
  width="80%"
  caption="Adding a widget"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_29.png"
  width="80%"
  caption="Adding a widget"
/>

15. Once done, you're now at the **Widget Configuration**. At the **WIDGET TYPE**, choose **Chart**. Then provide the name of the parameter under **SHOW WIDGET NAME**. Once done, proceed to **Add point +**. Choose your **existing project**, **application** and the **specific parameter** you need to monitor in your dashboard. Once done, just click **Save**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_30.png"
  width="100%"
  caption="Widget Configuration"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_31.png"
  width="100%"
  caption="Widget Configuration"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_32.png"
  width="100%"
  caption="Connect Data Point"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_33.png"
  width="100%"
  caption="Connect Data Point"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_34.png"
  width="100%"
  caption="Connect Data Point"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_35.png"
  width="100%"
  caption="Connect Data Point"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_36.png"
  width="100%"
  caption="Connect Data Point"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_37.png"
  width="100%"
  caption="Connect Data Point"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_38.png"
  width="100%"
  caption="Connect Data Point"
/>

16. Now you have an existing preview of your data from your device. Under **CHART TYPE** at the left side of your screen, choose **Line**. Once done, go to **STANDARD OPTIONS** to choose the appropriate unit for your parameter to be monitored in the dashboard. Once done, click **Save widget**. 

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_39.png"
  width="100%"
  caption="Widget Configuration"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_40.png"
  width="100%"
  caption="Widget Configuration"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_41.png"
  width="100%"
  caption="Widget Configuration"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_42.png"
  width="100%"
  caption="Widget Configuration"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_43.png"
  width="100%"
  caption="Widget Configuration"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_44.png"
  width="100%"
  caption="Saving the changes made in your Widget Configuration"
/>

17. Then click **Save changes** to include the data of parameter. Then you have now the newly-made widget for your specific parameter.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_45.png"
  width="100%"
  caption="Save changes"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_46.png"
  width="100%"
  caption="Newly-made widget"
/>

18. In able for you to include additional widgets for other parameters, you need to click **Edit** > **New widget** then repeat **Step 15** to **Step 17**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_47.png"
  width="100%"
  caption="Adding widgets into your dashboard"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_48.png"
  width="100%"
  caption="Adding widgets into your dashboard"
/>

19. Then there you have it a real-time monitoring dashboard for your battery monitoring device.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/Qub_49.png"
  width="100%"
  caption="Monitoring dashboard for your battery monitoring device"
/>

[Back](#lorawan-applications-for-wisblock-smart-industry-kit-using-ttn-and-quibitro)

##### Material Classifier LoRaWAN Application

The **Material Classifier LoRaWAN Application** is used to monitor the distance to a certain material and at the same time, it determines whether a material is metallic or non-metallic via **TTN** or **Qubitro**. It uses **RAK12014** module responsible for accurate distance measurement based on **VL53L0X**, **RAK12029** module responsible for metal detection based on **LDC1614**, and **RAK13001** relay module that can control an external device once a metallic material is detected.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Object_New.png" 
  width="80%"
  caption="Material Classifier device"
/>

###### Material Classifier - TTN Registration Section and Device Registration

1. If you already have an existing TTN account, you may proceed to the next steps. If you haven't created any TTN account, please refer to this [link](#ttn-account-creation) to create one. 

2. Once done with the TTN account creation, you may now proceed with the device registration. Please refer to this [guide](#device-registration) for your reference. After creating the application and adding the device in TTN, you can proceed on the LoRaWAN Code uploading steps.

###### LoRaWAN Code for Material Classifier

1. If you already have **Arduino IDE** installed to your laptop or PC and added **RAK4631 board** into it, you may proceed to the next step. If you haven't yet installed the **Arduino IDE**, please refer to this [link](#arduino-ide-installation-rak4631) for the steps.

2. After the installation, you can now proceed programming your **Material Classifier** device. Just copy the code below for **Material Classifier LoRaWAN Application** and paste it into the **Arduino IDE**.

::: tip 📝 NOTE

The example code uses [SX126x-Arduino](https://github.com/beegee-tokyo/SX126x-Arduino) library which needs to be added to successfully compile the LoRaWAN code.

:::

::: details Click Here to View Example Code
```c

#include <Arduino.h>
#include <LoRaWan-RAK4630.h>  //http://librarymanager/All#SX126x
#include <SPI.h>
#include <Wire.h>

// For RAK12014 module
#include <vl53l0x_class.h>    // Click to install library: http://librarymanager/All#stm32duino_vl53l0x
VL53L0X sensor_vl53l0x(&Wire, WB_IO2);

uint32_t distance;
int status;

// For RAK13001 module 
#define RELAY_PIN WB_IO4
int object;

// For RAK12029 module
#include "RAK12029_LDC1614.h"

#define INDUCTANCE 13.000
#define CAPATANCE 100.0
#define GETCHANNEL LDC1614_CHANNEL_0     // LDC1614_CHANNEL_(0~3); selecting the coil channel from 0 - 3
RAK12029_LDC1614_Inductive ldc;

u16 value = 0;
u32 ChannelData = 0;

#ifdef RAK4630
#define BOARD "RAK4631 "
#define RAK4631_BOARD true
#else
#define RAK4631_BOARD false
#endif

bool doOTAA = true;                                               // OTAA is used by default.
#define SCHED_MAX_EVENT_DATA_SIZE APP_TIMER_SCHED_EVENT_DATA_SIZE /**< Maximum size of scheduler events. */
#define SCHED_QUEUE_SIZE 60                                       /**< Maximum number of events in the scheduler queue. */
#define LORAWAN_DATERATE DR_0                                     /*LoRaMac datarates definition, from DR_0 to DR_5*/
#define LORAWAN_TX_POWER TX_POWER_5                               /*LoRaMac tx power definition, from TX_POWER_0 to TX_POWER_15*/
#define JOINREQ_NBTRIALS 3                                        /**< Number of trials for the join request. */
DeviceClass_t g_CurrentClass = CLASS_A;                           /* class definition*/
LoRaMacRegion_t g_CurrentRegion = LORAMAC_REGION_US915;           /* Region:EU868*/
lmh_confirm g_CurrentConfirm = LMH_CONFIRMED_MSG;                 /* confirm/unconfirm packet definition*/
uint8_t gAppPort = LORAWAN_APP_PORT;                              /* data port*/

/**@brief Structure containing LoRaWan parameters, needed for lmh_init()
*/
static lmh_param_t g_lora_param_init = { LORAWAN_ADR_ON, LORAWAN_DATERATE, LORAWAN_PUBLIC_NETWORK, JOINREQ_NBTRIALS, LORAWAN_TX_POWER, LORAWAN_DUTYCYCLE_OFF };

// Forward declaration
static void lorawan_has_joined_handler(void);
static void lorawan_join_failed_handler(void);
static void lorawan_rx_handler(lmh_app_data_t *app_data);
static void lorawan_confirm_class_handler(DeviceClass_t Class);
static void send_lora_frame(void);

/**@brief Structure containing LoRaWan callback functions, needed for lmh_init()
*/
static lmh_callback_t g_lora_callbacks = { BoardGetBatteryLevel, BoardGetUniqueId, BoardGetRandomSeed,
                                           lorawan_rx_handler, lorawan_has_joined_handler, lorawan_confirm_class_handler, lorawan_join_failed_handler };
//OTAA keys !!!! KEYS ARE MSB !!!!
uint8_t nodeDeviceEUI[8] = { 0xAC, 0x1F, 0x09, 0xFF, 0xFE, 0x06, 0xD3, 0xE9 };
uint8_t nodeAppEUI[8] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
uint8_t nodeAppKey[16] = { 0xC0, 0x81, 0xBB, 0x65, 0x54, 0xCF, 0xF7, 0x65, 0x87, 0x70, 0xFD, 0x31, 0x7F, 0x01, 0x87, 0x51 };

// ABP keys
uint32_t nodeDevAddr = 0x260116F8;
uint8_t nodeNwsKey[16] = { 0x7E, 0xAC, 0xE2, 0x55, 0xB8, 0xA5, 0xE2, 0x69, 0x91, 0x51, 0x96, 0x06, 0x47, 0x56, 0x9D, 0x23 };
uint8_t nodeAppsKey[16] = { 0xFB, 0xAC, 0xB6, 0x47, 0xF3, 0x58, 0x45, 0xC7, 0x50, 0x7D, 0xBF, 0x16, 0x8B, 0xA8, 0xC1, 0x7C };

// Private definition
#define LORAWAN_APP_DATA_BUFF_SIZE 64                                            /**< buffer size of the data to be transmitted. */
static uint8_t m_lora_app_data_buffer[LORAWAN_APP_DATA_BUFF_SIZE];               //< Lora user application data buffer.
static lmh_app_data_t m_lora_app_data = { m_lora_app_data_buffer, 0, 0, 0, 0 };  //< Lora user application data structure.

static uint32_t count = 0;
static uint32_t count_fail = 0;

void setup() {
  // Sensor Power Switch
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);

  // Control Chip Switch
  pinMode(WB_IO5, OUTPUT);
  digitalWrite(WB_IO5, LOW);

  // Control Relay Module
  pinMode(RELAY_PIN,OUTPUT);
  digitalWrite(RELAY_PIN, LOW);    // relay module initially LOW

  pinMode(LED_GREEN, OUTPUT);      // Output LED
  pinMode(LED_BLUE, OUTPUT);       // Output LED

  // Initialize LoRa chip.
  lora_rak4630_init();

  // Initialize Serial for debug output
  time_t timeout = millis();
  Serial.begin(115200);
  while (!Serial) {
    if ((millis() - timeout) < 5000) {
      delay(100);
    } else {
      break;
    }
  }
  Serial.println("=====================================");
  Serial.println("Welcome to RAK4630 LoRaWan!!!");
  if (doOTAA) {
    Serial.println("Type: OTAA");
  } else {
    Serial.println("Type: ABP");
  }

  switch (g_CurrentRegion) {
    case LORAMAC_REGION_AS923:
      Serial.println("Region: AS923");
      break;
    case LORAMAC_REGION_AU915:
      Serial.println("Region: AU915");
      break;
    case LORAMAC_REGION_CN470:
      Serial.println("Region: CN470");
      break;
    case LORAMAC_REGION_EU433:
      Serial.println("Region: EU433");
      break;
    case LORAMAC_REGION_IN865:
      Serial.println("Region: IN865");
      break;
    case LORAMAC_REGION_EU868:
      Serial.println("Region: EU868");
      break;
    case LORAMAC_REGION_KR920:
      Serial.println("Region: KR920");
      break;
    case LORAMAC_REGION_US915:
      Serial.println("Region: US915");
      break;
  }
  Serial.println("=====================================");

  // Setup the EUIs and Keys
  if (doOTAA) {
    lmh_setDevEui(nodeDeviceEUI);
    lmh_setAppEui(nodeAppEUI);
    lmh_setAppKey(nodeAppKey);
  } else {
    lmh_setNwkSKey(nodeNwsKey);
    lmh_setAppSKey(nodeAppsKey);
    lmh_setDevAddr(nodeDevAddr);
  }

  uint32_t err_code;
  // Initialize LoRaWan
  err_code = lmh_init(&g_lora_callbacks, g_lora_param_init, doOTAA, g_CurrentClass, g_CurrentRegion);
  if (err_code != 0) {
    Serial.printf("lmh_init failed - %d\n", err_code);
    return;
  }

  // Start Join procedure
  lmh_join();

  Serial.println("===========================================");
  Serial.println("RAK12014 + RAK12029 + RAK13001 LoRaWAN Code");
  Serial.println("===========================================");

  Wire.begin();

  // Configure VL53L0X component.
  sensor_vl53l0x.begin();

  // Switch off VL53L0X component.
  sensor_vl53l0x.VL53L0X_Off();

  // Initialize VL53L0X component.
  status = sensor_vl53l0x.InitSensor(0x52);
  if (status) {
    Serial.println("Init sensor_vl53l0x failed...");
  }

  // From RAK12029 
  ldc.LDC1614_init();
  /*single channel use case configuration.*/
  if (ldc.LDC1614_single_channel_config(GETCHANNEL, INDUCTANCE, CAPATANCE)) {
    Serial.println("can't detect sensor!");
    while (1) delay(100);
  }
}

void loop() {
  // Put your application tasks here, like reading of sensors,
  // Controlling actuators and/or other functions.

  // Read data from RAK12014
  status = sensor_vl53l0x.GetDistance(&distance);

  // Read data from RAK12029
  ldc.IIC_read_16bit(LDC1614_READ_DEVICE_ID, &value);
  if (value == 0x3055) {
    //u32 ChannelData = 0;
    /*Get channel 0 result and parse it.*/
    delay(100);
    if (ldc.LDC1614_get_channel_result(GETCHANNEL, &ChannelData) == 0) {
      /*sensor result value.you can make a lot of application according to its changes.*/
      if (0 != ChannelData) {
        digitalWrite(LED_BLUE, HIGH);     // Indicator Blue LED 
        digitalWrite(LED_GREEN, HIGH);    // Indicator Green LED
      }
      delay(200);
      digitalWrite(LED_BLUE, LOW);        // Indicator Blue LED 
      digitalWrite(LED_GREEN, LOW);       // Indicator Green LED
    }
  }

  if (ChannelData >= 49800000)            // metallic material sensed nearby via inductive sensor
  {
    digitalWrite(RELAY_PIN, HIGH);        // Turns ON the relay module
    object = 1;                           // "1" corresponds to metallic object
    Serial.println("Metal Detected");                     
  }

  else if (ChannelData <= 49650000)       // nothing metallic was sensed; default value sensed by the inductive sensor
  {
    digitalWrite(RELAY_PIN, LOW);         // Turns OFF the relay module
    object = 0;                           // "0" corresponds to non-metallic object
    Serial.println("No Metal Detected");
  }

  Serial.println("Sending frame now...");
  send_lora_frame();

  Serial.print(distance);       // From RAK12014 module
  Serial.println("mm   ");
  Serial.println(object);       // From RAK13001 module
  Serial.println(ChannelData);  // From RAK12029 module

  delay(5000);
}

/**@brief LoRa function for handling HasJoined event.
 */
void lorawan_has_joined_handler(void) {
  Serial.println("OTAA Mode, Network Joined!");
}

/**@brief LoRa function for handling OTAA join failed
*/
static void lorawan_join_failed_handler(void) {
  Serial.println("OTAA join failed!");
  Serial.println("Check your EUI's and Keys's!");
  Serial.println("Check if a Gateway is in range!");
}
/**@brief Function for handling LoRaWan received data from Gateway
 *
 * @param[in] app_data  Pointer to rx data
 */
void lorawan_rx_handler(lmh_app_data_t *app_data) {
  Serial.printf("LoRa Packet received on port %d, size:%d, rssi:%d, snr:%d, data:%s\n",
                app_data->port, app_data->buffsize, app_data->rssi, app_data->snr, app_data->buffer);
}

void lorawan_confirm_class_handler(DeviceClass_t Class) {
  Serial.printf("switch to class %c done\n", "ABC"[Class]);
  // Informs the server that switch has occurred ASAP
  m_lora_app_data.buffsize = 0;
  m_lora_app_data.port = gAppPort;
  lmh_send(&m_lora_app_data, g_CurrentConfirm);
}

String data = "";

void send_lora_frame(void) {
  if (lmh_join_status_get() != LMH_SET) {
    //Not joined, try again later
    return;
  }

  Serial.print("result: ");
  uint32_t i = 0;
  memset(m_lora_app_data.buffer, 0, LORAWAN_APP_DATA_BUFF_SIZE);
  m_lora_app_data.port = gAppPort;

  data = " Distance: " + String(distance) + " mm " + " Metallic: " + String(object) + " Inductive_Sense: " + String(ChannelData);
  Serial.println(data);

  uint32_t distance_data = distance;    // data from RAK12014 module
  uint32_t channel_data = ChannelData;  // data from RAK12029 module
  int metallic_data = object;           // data from RAK13001 module

  m_lora_app_data.buffer[i++] = 0x01;  // byte[0]

  // Data from RAK12014 module
  m_lora_app_data.buffer[i++] = (uint8_t)((distance_data & 0xFF000000) >> 24);    // byte[1]
  m_lora_app_data.buffer[i++] = (uint8_t)((distance_data & 0x00FF0000) >> 16);    // byte[2]
  m_lora_app_data.buffer[i++] = (uint8_t)((distance_data & 0x0000FF00) >> 8);     // byte[3]
  m_lora_app_data.buffer[i++] = (uint8_t)(distance_data & 0x000000FF);            // byte[4]

  // Data from RAK12029 module (inductive sensor)
  m_lora_app_data.buffer[i++] = (uint8_t)((channel_data & 0xFF000000) >> 24);    // byte[5]
  m_lora_app_data.buffer[i++] = (uint8_t)((channel_data & 0x00FF0000) >> 16);    // byte[6]
  m_lora_app_data.buffer[i++] = (uint8_t)((channel_data & 0x0000FF00) >> 8);     // byte[7]
  m_lora_app_data.buffer[i++] = (uint8_t)(channel_data & 0x000000FF);            // byte[8]

  // Data from RAK13001 module (relay module status)
  m_lora_app_data.buffer[i++] = metallic_data;                                   // byte[9]

  m_lora_app_data.buffsize = i;

  lmh_error_status error = lmh_send(&m_lora_app_data, g_CurrentConfirm);
  if (error == LMH_SUCCESS) {
    count++;
    Serial.printf("lmh_send ok count %d\n", count);
  } else {
    count_fail++;
    Serial.printf("lmh_send fail count %d\n", count_fail);
  }
}

```
:::

Before uploading the Arduino Code, there are configurations that you need to set up to ensure that the device can join a LoRaWAN Network server. The steps below will explain the default settings and how to configure them.

- Set up the LoRaWAN region. The **LORAMAC_REGION** can be any of your desired region to work with. You can change this to a region that is applicable to you like `LORAMAC_REGION_US915`, `LORAMAC_REGION_AU915`, etc. Below is the table of LoRaWAN regions and their respective countries where they are used in:

|     LoRaWAN Region      |                               Usage                                  |
| ----------------------- | -------------------------------------------------------------------- |
| LORAMAC_REGION_AS923-1  | Australia, Singapore, Solomon Islands, Sri-Lanka, Taiwan             |
| LORAMAC_REGION_AS923-2  | Vietnam                                                              |
| LORAMAC_REGION_AS923-3  | Philippines, Albania, Algeria, Denmark, Greenland, Jordan            |
| LORAMAC_REGION_AS923-4  | Israel                                                               |
| LORAMAC_REGION_AU915    | Australia, Anguilla, Argentina, and many parts of South America      |
| LORAMAC_REGION_CN470    | China                                                                |
| LORAMAC_REGION_EU433    | EU, UK, Brazil, Costa Rica, Cuba, and many parts of Africa           |
| LORAMAC_REGION_IN865    | India, Cook Islands, Egypt, Hong Kong, Jordan, New Zealand, Niger    |
| LORAMAC_REGION_EU868    | EU, UK and many parts of Africa                                      |
| LORAMAC_REGION_KR920    | Republic of Korea                                                    | 
| LORAMAC_REGION_US915    | USA                                                                  |
| LORAMAC_REGION_RU864    | Russia                                                               |

```c
LoRaMacRegion_t g_CurrentRegion = LORAMAC_REGION_US915;    /* Region:US915*/
```
- Set up the LoRaWAN activation method. In this case, we will be using the **OTAA** configuration which is also the default from the given code.

```c
bool doOTAA = true;   // OTAA is used by default.
```

- Set up the message type if confirmed or not. **Confirmed message** is the default for this one. You can change to an **unconfirmed message** by changing the value to `LMH_UNCONFIRMED_MSG`.

```c
lmh_confirm g_CurrentConfirm = LMH_CONFIRMED_MSG;         /* confirm/unconfirm packet definition*/
```

- Set the device to **Class A**.

```c
DeviceClass_t g_CurrentClass = CLASS_A;         /* class definition*/
```

- Setup the EUIs and KEY. The **DeviceEUI**, **AppEUI** and **AppKey** are the credentials of your device registered to TTN that will be used for the OTAA keys in the code. You need to replace the ones in the code with the credentials registered in TTN.

```c
//OTAA keys !!!! KEYS ARE MSB !!!!
uint8_t nodeDeviceEUI[8] = { 0xAC, 0x1F, 0x09, 0xFF, 0xFE, 0x06, 0xD3, 0xE9 };
uint8_t nodeAppEUI[8] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
uint8_t nodeAppKey[16] = { 0xC0, 0x81, 0xBB, 0x65, 0x54, 0xCF, 0xF7, 0x65, 0x87, 0x70, 0xFD, 0x31, 0x7F, 0x01, 0x87, 0x51 };
```
<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_RAK12014_5.png"
  width="90%"
  caption="Device's credentials registered in TTN"
/>

3. Once done with the code, you can now proceed uploading it into your device. You need to select first your RAK4631 board from desktop or laptop. To do this, go to **Tools** > **Board:XXXXX** > **RAKwireless nRF Boards** > **WisBlock RAK4631**. After you selected your board, you need to select the specific port of your board. To do this, go to **Tools** > **Port** > then the specific port of your board.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_RAK12014_1.png"
  width="90%"
  caption="Selecting the RAK4631 board"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_RAK12014_2.png"
  width="90%"
  caption="Selecting the port of RAK4631 board"
/>

4. Once done, you can now upload your code. Simply click the right arrow sign at the upper left portion of your Arduino IDE. Once done, you will see the **Device programmed** notification at the bottom part of your Arduino IDE.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_RAK12014_3.png"
  width="90%"
  caption="Uploading your code into your RAK4631 board"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_RAK12014_4.png"
  width="90%"
  caption="Arduino code is successfully uploaded into your RAK4631 board"
/>

###### Material Classifier via TTN

1. To monitor the data of your **Material Classifier** device via **TTN**, you need to go back to your TTN account where you created your application and registered your device. 

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_RAK12014_6.png"
  width="90%"
  caption="Your Battery Monitoring device in TTN"
/>

2. Then go to **Payload formatters**. Under **Formatter type**, select **Custom Javascript formatter**. Then under the **Formatter code**, you need to replace the default code with the one below. This will decode the data from your device going to **TTN**. Once done, simply click **Save changes**.

```c
// LoRaWAN code for RAK12014 + RAK12029 + RAK13001 Application

function Decoder(bytes, port) 
{

  var decoded = {};
  
  if (port === 2)
  {
    if(bytes[0] == 1) // check if the header byte is 1.
    {
      distance_data = (bytes[1] << 24) | (bytes[2] << 16) | (bytes[3] << 8) | (bytes[4]);
      channel_data = (bytes[5] << 24) | (bytes[6] << 16) | (bytes[7] << 8) | (bytes[8]);
      metallic_data = (bytes[9]);
      
      decoded.distance = distance_data;
      decoded.inductive_sense = channel_data;
      decoded.metallic = metallic_data;
      
      return decoded;
      
    }
  }
}
```

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_RAK12014_7.png"
  width="90%"
  caption="Payload Formatter"
/>

3. Then go back to **Live data** of your device in TTN and compare it with the live data from the **Serial Monitor** of your device. You should now seeing identical results between them.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_RAK12014_8.png"
  width="90%"
  caption="Live data from your device in TTN"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_RAK12014_9.png"
  width="90%"
  caption="Live data from your device in its Serial Monitor"
/>

###### Material Classifier via Qubitro

This section will guide you on how to integrate your application using Qubitro.

1. Go to [Qubitro Portal](https://portal.qubitro.com/login) and create your account.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_1.png"
  width="80%"
  caption="Creating Qubitro Account"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_2.png"
  width="80%"
  caption="Creating Qubitro Account"
/>

2. Once done with the account creation, login into your **Qubitro Account**. Then click **New Project**, then fill out your desired **Name**, as well as the **Description** based on your material classifier application, then click **Create**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_3.png"
  width="80%"
  caption="Creating New Project"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_4.png"
  width="80%"
  caption="Creating New Project"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_5.png"
  width="80%"
  caption="Created New Project"
/>

3. Then click into your newly-created project then click **New source**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_6.png"
  width="80%"
  caption="Adding New source"
/>

4. Among the data sources, choose **The Things Stack**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_7.png"
  width="80%"
  caption="Choosing The Things Stack"
/>

5. For the **integration type**, choose **Import from network**, then copy and paste the **PROJECT ID** and **WEBHOOK SIGNING KEY** temporarily to notepad. These credentials will be used on the later part, then click **Go to project**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_8.png"
  width="80%"
  caption="Copying the credentials"
/>

6. Then head back to your **TTN Application** where you created your material classifier application to add webhook from it. To do this, just click your device then go to **Integrations** > **Webhooks** > **+ Add webhook**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_9.png"
  width="80%"
  caption="Going to your TTN application for your Battery Monitoring Application"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_10.png"
  width="80%"
  caption="Adding Webhook"
/>

7. Then choose **Qubitro** as your webhook template.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_11.png"
  width="80%"
  caption="Qubitro"
/>

8. Then fill in the needed details:
   - **Webhook ID** - For this example, you can use **material-classifier-application**.
   - **Project ID** - Paste the credential you copied from **Step 5**.
   - **Webhook Signing Key** - Paste the credential you copied from **Step 5**.

   Then click **Create Qubitro webhook**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_12.png"
  width="80%"
  caption="Creating Qubitro webhook"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_13.png"
  width="80%"
  caption="Added a Qubitro webhook"
/>

9. After you created your webhook, go back to your **Qubitro** platform to check the changes made. Refresh **Qubitro** by clicking the **Refresh** button on the upper right side of your screen. You will notice that a newly-added device is included in the platform.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_14.png"
  width="80%"
  caption="Refreshing Qubitro to add devices into it"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_15.png"
  width="80%"
  caption="Device successfully included in Qubitro"
/>

10. To add the decoder, simply go to **Functions** > **Create Function**. Then under **Decoder Function**, click **Get started**. You will be now routed to **Function Configuration**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_16.png"
  width="80%"
  caption="Creating Function"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_17.png"
  width="80%"
  caption="Decoder Function"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_18.png"
  width="80%"
  caption="Function Configuration"
/>

11. Under the **Formatter type**, choose **Custom Javascript formatter**. Then under the **Formatter code**, you need to replace its default entry with the code below:

```c
// LoRaWAN code for RAK12014 + RAK12029 + RAK13001 Application

function Decoder(bytes, port) 
{

  var decoded = {};
  
  if (port === 2)
  {
    if(bytes[0] == 1) // check if the header byte is 1.
    {
      distance_data = (bytes[1] << 24) | (bytes[2] << 16) | (bytes[3] << 8) | (bytes[4]);
      channel_data = (bytes[5] << 24) | (bytes[6] << 16) | (bytes[7] << 8) | (bytes[8]);
      metallic_data = (bytes[9]);
      
      decoded.distance = distance_data;
      decoded.inductive_sense = channel_data;
      decoded.metallic = metallic_data;
      
      return decoded;
      
    }
  }
}
```

Once done, simply click **Save and complete**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_19.png"
  width="80%"
  caption="Function Configuration"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_20.png"
  width="80%"
  caption="Created Decoder Function"
/>

12. Then go to your device and click on the **Data** tab to check for the incoming data coming from your device. You should now be seeing live data from your device. To gather the most recent data, simply click **Refresh**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_21.png"
  width="80%"
  caption="Data Tab"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_22.png"
  width="80%"
  caption="Historical Data"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_23.png"
  width="80%"
  caption="Refreshing data to get newer ones"
/>

13. To add a monitoring dashboard for the data from the material classifier device, you need to go to **Home** which is located at the left top most part of your screen. Then click **Dashboards** > **New dashboard** > **Create new**. Then fill out the **Create New Dashboard** portion using the details of your device. For the **Tags**, just simply input **Test** then click **Create**. Once done, click on to your newly-created dashboard.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_24.png"
  width="80%"
  caption="Creating dashboard for your Material Classifier device"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_25.png"
  width="80%"
  caption="Creating dashboard for your Material Classifier device"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_26.png"
  width="80%"
  caption="Creating dashboard for your Material Classifier device"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_27.png"
  width="80%"
  caption="Newly-created dashboard for your Material Classifier device"
/>

14. Click **Edit** > **New widget** to add a widget for a specific parameter need to be monitored.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_28.png"
  width="80%"
  caption="Adding a widget"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_29.png"
  width="80%"
  caption="Adding a widget"
/>

15. Once done, you're now at the **Widget Configuration**. At the **WIDGET TYPE**, choose **Chart**. Then provide the name of the parameter under **SHOW WIDGET NAME**. Once done, proceed to **Add point +**. Choose your **existing project**, **application** and the **specific parameter** you need to monitor in your dashboard. Once done, just click **Save**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_30.png"
  width="100%"
  caption="Widget Configuration"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_31.png"
  width="100%"
  caption="Widget Configuration"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_32.png"
  width="100%"
  caption="Connect Data Point"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_33.png"
  width="100%"
  caption="Connect Data Point"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_34.png"
  width="100%"
  caption="Connect Data Point"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_35.png"
  width="100%"
  caption="Connect Data Point"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_36.png"
  width="100%"
  caption="Connect Data Point"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_37.png"
  width="100%"
  caption="Connect Data Point"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_38.png"
  width="100%"
  caption="Connect Data Point"
/>

16. Now you have an existing preview of your data from your device. Under **CHART TYPE** at the left side of your screen, choose **Line**. Once done, go to **STANDARD OPTIONS** to choose the appropriate unit for your parameter to be monitored in the dashboard. Once done, click **Save widget**. 

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_39.png"
  width="100%"
  caption="Widget Configuration"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_40.png"
  width="100%"
  caption="Widget Configuration"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_41.png"
  width="100%"
  caption="Widget Configuration"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_42.png"
  width="100%"
  caption="Widget Configuration"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_43.png"
  width="100%"
  caption="Widget Configuration"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_44.png"
  width="100%"
  caption="Saving the changes made in your Widget Configuration"
/>

17. Then click **Save changes** to include the data of parameter. Then you have now the newly-made widget for your specific parameter.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_45.png"
  width="100%"
  caption="Save changes"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_46.png"
  width="100%"
  caption="Newly-made widget"
/>

18. In able for you to include additional widgets for other parameters, you need to click **Edit** > **New widget** then repeat **Step 15** to **Step 17**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_47.png"
  width="100%"
  caption="Adding widgets into your dashboard"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_48.png"
  width="100%"
  caption="Adding widgets into your dashboard"
/>

19. Then there you have it a real-time monitoring dashboard for your material classifier device.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/MC_Qub_49.png"
  width="100%"
  caption="Monitoring dashboard for your material classifier device"
/>

[Back](#lorawan-applications-for-wisblock-smart-industry-kit-using-ttn-and-quibitro)

## Miscellaneous

### TTN Account Creation

1. The first step is to go to [The Things Network](https://www.thethingsnetwork.org/) and sign up an account shown in the figure below. Then select a cluster as shown in the figure below.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_1.png"
  width="90%"
  caption="Signing up an account in TTN"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_2.png"
  width="90%"
  caption="Signing up an account in TTN"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_3.png"
  width="90%"
  caption="Selecting Cluster in TTN"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_4.png"
  width="90%"
  caption="Signing up through the Things ID"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_5.png"
  width="90%"
  caption="Creation of an account through the Things ID"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_6.png"
  width="90%"
  caption="Creation of an account through the Things ID"
/>

You can use the same login credentials on the TTN V2 if you have one. If you have no account yet, you need to create one.

2. Now that you are logged in to the platform, the next step is to create an application. Click **Create an application**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_7.png"
  width="90%"
  caption="The Things Stack Platform"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_8.png"
  width="90%"
  caption="Creating TTN Application of your LoRaWAN devices"
/>

3. To have an application registered, input first the specific details and necessary information about your application then click **Create application**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_10.png"
  width="70%"
  caption="Details of the TTN application"
/>

::: tip 📝 NOTE

The details and information are dependent to what device you are using (e.g. **RAK16002**, etc.). 

:::

4. If you have no error on the previous step, you should now be on the application console page.

::: tip 📝 NOTE

Above procedures are applicable to all applications you will be using.

- For **Battery Monitoring**, go to this [link](#battery-monitoring-ttn-registration-section-and-device-registration) once done with the TTN account creation.
- For **Material Classifier**, go to this [link](#material-classifier-ttn-registration-section-and-device-registration) once done with the TTN account creation.

:::

### Device Registration

1. Go to your application console to register a device. To start adding an OTAA end-device, click **+ Register end device**, as shown below.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_11.png"
  width="90%"
  caption="Register End Device"
/>

2. To register the board, click the **Enter end device specifics manually**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_12.png"
  width="60%"
  caption="Enter end device specifics manually"
/>

3. Next step is to set up **Frequency plan**, compatible **LoRaWAN version**, and **Regional Parameters version** supported. Then provide the **JoinEUI** credentials by entering zeroes into it.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_13.png"
  width="70%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_14.png"
  width="60%"
  caption="Setting up your device"
/>

4. Then click **Show advanced activation, LoRaWAN class and cluster settings**. Configure the activation mode by selecting **Over the air activation (OTAA)** and Additional LoRaWAN class capabilities to **class A only**. Then click **Confirm**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_15.png"
  width="60%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_16.png"
  width="50%"
  caption="Setting up your device"
/>

5. Once done, provide the DevEUI credentials of your device into the **DevEUI** portion. This will automatically generate the specific End
device ID of your board. Then click **Generate** under **AppKey** under Provisioning information section. Once done, you need to change the **End device ID** since it is automatically prefilled using the **DevEUI** of your device. Then click **Register end device**.

:::tip 📝 NOTE:

- The **AppEUI**, **DevEUI**, and **AppKey** are hidden in this section as these are unique from a specific device. The **DevEUI** credential is unique to every **RAK4631** device. Also, you should generate your own **AppEUI** and **AppKey** credentials for your specific device and application.

- The **AppEUI** is the same as **JoinEUI**.

- The details under **End device ID** are dependent to what device you are using (e.g. **rak16002-application**, etc.). 

:::

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_17.png"
  width="50%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_18.png"
  width="50%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_19.png"
  width="50%"
  caption="Changing the End device ID"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_20.png"
  width="50%"
  caption="Register End Device"
/>

6. You should now be able to see the device on the TTN console after you fully register your device, as shown below.

:::tip 📝 NOTE:

- The **AppEUI**, **DevEUI**, and **AppKey** are the parameters that you will need to activate your LoRaWAN end-device via OTAA. The **AppKey** is hidden by default for security reasons, but you can easily show it by clicking the show button. You can also copy the parameters quickly using the copy button.

- These parameters are always accessible on the device console page, as highlighted in the figure below.
:::

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_21.png"
  width="90%"
  caption="OTAA device successfully registered to TTN"
/>

::: tip 📝 NOTE

Above procedures are applicable to all applications you will be using.

- For **Battery Monitoring**, go to this [link](#lorawan-code-for-battery-monitoring) once done with the device registration.
- For **Material Classifier**, go to this [link](#lorawan-code-for-material-classifier) once done with the device registration.

:::

### Arduino IDE Installation + RAK4631

1. Download the [Arduino IDE](https://www.arduino.cc/en/software) and install it on your PC or laptop. You must choose the appropriate **Arduino IDE** depending on your operating system.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_22.png"
  width="80%"
  caption="Download Options for the Arduino IDE"
/>

2. Open the **Arduino IDE** then install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the `package_rakwireless_index.json` board installation package. The WisBlock Core should now be available on the Arduino IDE. Click on **File** > **Preference**. In the **Preference** window, look for **Additional Boards Manager URLs** then click the icon on the right side. Paste the link into it then click **OK** > **OK**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_23.png"
  width="80%"
  caption="Preference Set-Up"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_24.png"
  width="80%"
  caption="Preference Window"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_25.png"
  width="80%"
  caption="RAKwireless Arduino BSP"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_26.png"
  width="80%"
  caption="Completing the setup of the RAKwireless BSP support for the Arduino Board Manager"
/>

3. Then to your **Arduino IDE**, go to **Tools** > **Board:XXXXX** > **Boards Manager**. Then look for **RAKwireless Boards by RAKwireless** since we will be working on with the **RAK4631 WisBlock Core**. Choose the latest version then install it. Once done, close the **Board Manager**.

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_27.png"
  width="80%"
  caption="Opening the Boards Manager"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_28.png"
  width="80%"
  caption="Installing the RAKwireless nRF Boards"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit4_quickstart/TTN_Kit4_29.png"
  width="80%"
  caption="Successfully installed the RAKwireless nRF Boards"
/>

::: tip 📝 NOTE

Above procedures are applicable to all applications you will be using.

- For **Battery Monitoring**, go to this [link](#lorawan-code-for-battery-monitoring) once done with the installation.
- For **Material Classifier**, go to this [link](#lorawan-code-for-material-classifier) once done with the installation.

:::




