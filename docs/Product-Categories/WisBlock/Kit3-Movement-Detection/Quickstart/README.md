---
rak_img: /assets/images/wisblock/kits/3_movement_kit_1.png
rak_desc: Contains instructions and tutorials for installing and deploying your LoRaWAN project using the WisBlock IoT Education Kit - Movement Detection. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_grp: [wisblock,wiskit]
rak_model: Movement
prev: ../Overview/
next: ../Datasheet/
tags:
    - IoT Education Kit
    - WisBlock IoT Education Kit - Movement Detection
    - WisBlock Kit
    - WisBlock
---

# WisBlock IoT Education Kit - Movement Detection Quick Start Guide

## Prerequisite

### What Do You Need?

The **WisBlock IoT Education Kit - Movement Detection** comes with **RAK19007** and **RAK19003** **WisBlock Base boards**, two **RAK4631** **WisBlock Core modules**, and set of sensor modules to explore with. Before going through each and every step on using the **WisBlock IoT Education Kit - Movement Detection**, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK4631 WisBlock Core](https://store.rakwireless.com/products/nordic-nrf52840-ble-core-module-for-lorawan-with-lora-sx1262-rak4631-rak4631-c?variant=42576992436422?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK19007 WisBlock Base Board](https://store.rakwireless.com/products/rak19007-wisblock-base-board-2nd-gen?utm_source=RAK19007&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK12006 PIR Motion Sensor](https://store.rakwireless.com/products/wisblock-pir-module-rak12006?utm_source=RAK12006&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK12007 Ultrasonic Sensor](https://store.rakwireless.com/products/ultrasonic-sensor-module-rak12007?utm_source=RAK12007&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK12013 Radar Sensor](https://store.rakwireless.com/products/rak12013-wisblock-radar-sensor?utm_source=RAK12013&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK12017 IR Proximity Sensor](https://store.rakwireless.com/products/rak12017-wisblock-ir-sensor?utm_source=RAK12017&utm_medium=Document&utm_campaign=BuyFromStore')
- USB C Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)


#### Software

##### Arduino

- Download and install the [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

**WisBlock IoT Education Kit - Movement Detection** includes several movement detection sensors that can be used with the **RAK19007** and **RAK19003 WisBlock Base Boards**, which you can choose from. They are used to monitor object movements or even for motion detection, which can be useful for different IoT applications. You can select from these movement detection sensors for your specific applications.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/all-sensors.png"
  width="70%"
  caption="Set of WisBlock IoT Education Kit - Movement Detection"
/>

Assemble the WisBlock Movement Detection Modules with the RAK19007 WisBlock Base Board as shown in **Figures 2-5**:

**RAK4631 + RAK12006 Board**

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/rak4631+rak12006.png"
  width="60%"
  caption="RAK4631 + RAK12006 Board"
/>

**RAK4631 + RAK12007 Board**

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/rak4631+rak12007.png"
  width="80%"
  caption="RAK4631 + RAK12007 Board"
/>

**RAK4631 + RAK12013 Board**

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/rak4631+rak12013.png"
  width="70%"
  caption="RAK4631 + RAK12013 Board"
/>

**RAK4631 + RAK12017 Board**

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/rak4631+rak12017.png"
  width="60%"
  caption="RAK4631 + RAK12017 Board"
/>

#### Assembly and Functionality Tests of WisBlock Movement Detection Modules

This kit makes use of the different WisBlock Movement Detection modules. Refer to the following list for more information on their assemblies and functionalities:

- [RAK12006 PIR Motion Sensor](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12006/Quickstart/)
- [RAK12007 Ultrasonic Sensor](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12007/Quickstart/#prerequisite)
- [RAK12013 Radar Sensor](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12013/Quickstart/)
- [RAK12017 IR Proximity Sensor](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12017/Quickstart/#prerequisite)


### Software Configuration and Examples

#### LoRaWAN Applications for WisBlock Movement Kit Using TTN and ThingSpeak

- [RAK12006 PIR Motion Sensor LoRaWAN Application](#rak12006-pir-motion-sensor-lorawan-application)
- [RAK12007 Ultrasonic Sensor LoRaWAN Application](#rak12007-ultrasonic-sensor-lorawan-application)
- [RAK12013 Radar Sensor LoRaWAN Application](#rak12013-radar-sensor-lorawan-application)
- [RAK12017 IR Proximity Sensor LoRaWAN Application](#rak12017-ir-proximity-sensor-lorawan-application)

##### RAK12006 PIR Motion Sensor LoRaWAN Application

###### Connect to The Things Network (TTN)

- If you already have an existing TTN account, you may proceed to the [OTAA Device Registration](#otaa-device-registration) section.
- If you do not already have an account, go to the [The Things Network Configuration](#the-things-network-configuration) section and create one, then register your end-device.

###### LoRaWAN Code for RAK12006

1. If you already have **Arduino IDE** installed on your laptop or PC and added **RAK4631 board** into it, you may proceed to the next step. If you have not yet installed the **Arduino IDE**, go to the [RAK4631 Installation](#arduino-ide-installation-rak4631) section and execute the following steps.

2. After the installation, you can now proceed with programming your **RAK12006** module. Simply copy the **RAK12006 LoRaWAN Application** code below and paste it into the **Arduino IDE**.

::: tip 📝 NOTE

The example code uses [SX126x-Arduino](https://github.com/beegee-tokyo/SX126x-Arduino) library which needs to be added to successfully compile the LoRaWAN code.

:::

::: details <b><i> Click here to view the example code </i></b>
```c
#include <Arduino.h>
#include <LoRaWan-RAK4630.h> //http://librarymanager/All#SX126x
#include <SPI.h>
#include <Wire.h>

// Section to add include libraries, declarations and variables.

#define SENSOR_PIN  WB_IO6   // Attach AM312 sensor to Arduino Digital Pin WB_IO6

int gCurrentStatus = 0;         // variable for reading the pin current status

int sensor_val;


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
uint8_t nodeDeviceEUI[8] = {0xAC, 0x1F, 0x09, 0xFF, 0xFE, 0x06, 0xD3, 0xE9};
uint8_t nodeAppEUI[8] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
uint8_t nodeAppKey[16] = {0x3F, 0xC4, 0x80, 0x0D, 0x4A, 0xE7, 0xAD, 0x9F, 0xDC, 0x27, 0x5D, 0x37, 0x2C, 0x4C, 0xD3, 0xF8};

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
  pinMode(SENSOR_PIN, INPUT);        // PIR Sensor as an INPUT
  pinMode(LED_GREEN, OUTPUT);
  pinMode(LED_BLUE, OUTPUT);

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
   Serial.println("    RAK12006 LoRaWAN test");
   Serial.println("========================");

}

// Default void loop

void loop()
{
  // Put your application tasks here, like reading of sensors,
  // Controlling actuators and/or other functions.
  gCurrentStatus = digitalRead(SENSOR_PIN);

    if (gCurrentStatus == 0)
    // "0" for Detected; "1" for Undetected
    {
      digitalWrite(LED_GREEN, HIGH); // Turn ON LED
      digitalWrite(LED_BLUE, HIGH);
      sensor_val = 1;
      send_lora_frame();
      delay(2000);
    }

    else if (gCurrentStatus == 1)
    {
      // do nothing
      digitalWrite(LED_GREEN, LOW); // Turn OFF LED
      digitalWrite(LED_BLUE, LOW);
      sensor_val = 0;
      send_lora_frame();
      delay(2000);
    }

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

// void send_lora_frame for RAK12006 Application
void send_lora_frame(void)
{
  if (lmh_join_status_get() != LMH_SET)
  {
    //Not joined, try again later
    return;
  }

  //int sensor_val;
  uint32_t i = 0;
  memset(m_lora_app_data.buffer, 0, LORAWAN_APP_DATA_BUFF_SIZE);
  m_lora_app_data.port = gAppPort;
  m_lora_app_data.buffer[i++] = sensor_val;
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

Before uploading the Arduino Code, there are configurations that you need to set up to ensure that the device can join a LoRaWAN Network server. The following steps will explain the default settings and how to configure them.

- Set up the LoRaWAN region. The **LORAMAC_REGION** can be any of your desired regions to work with. You can change this to a region that is applicable to you, like `LORAMAC_REGION_US915`, `LORAMAC_REGION_AU915`, etc.

The following table lists the LoRaWAN regions and the countries where they are used:

| LoRaWAN Region         | Usage                                                             |
| ---------------------- | ----------------------------------------------------------------- |
| LORAMAC_REGION_AS923-1 | Australia, Singapore, Solomon Islands, Sri-Lanka, Taiwan          |
| LORAMAC_REGION_AS923-2 | Vietnam                                                           |
| LORAMAC_REGION_AS923-3 | Philippines, Albania, Algeria, Denmark, Greenland, Jordan         |
| LORAMAC_REGION_AS923-4 | Israel                                                            |
| LORAMAC_REGION_AU915   | Australia, Anguilla, Argentina, and other parts of South America  |
| LORAMAC_REGION_CN470   | China                                                             |
| LORAMAC_REGION_EU433   | EU, UK, Brazil, Costa Rica, Cuba, and other parts of Africa       |
| LORAMAC_REGION_IN865   | India, Cook Islands, Egypt, Hong Kong, Jordan, New Zealand, Niger |
| LORAMAC_REGION_EU868   | EU, UK and other parts of Africa                                  |
| LORAMAC_REGION_KR920   | Republic of Korea                                                 |
| LORAMAC_REGION_US915   | USA                                                               |
| LORAMAC_REGION_RU864   | Russia                                                            |

```c
LoRaMacRegion_t g_CurrentRegion = LORAMAC_REGION_US915;    /* Region:US915*/

```

- Set up the LoRaWAN activation method. In this case, you will use the **OTAA** configuration, which is also the default from the given code.

```c
bool doOTAA = true;   // OTAA is used by default.

```

- Set up the message type if confirmed or not. **Confirmed message** is the default for this one. You can change it to an **unconfirmed message** by changing the value to `LMH_UNCONFIRMED_MSG`.

```c
lmh_confirm g_CurrentConfirm = LMH_CONFIRMED_MSG;         /* confirm/unconfirm packet definition*/

```

- Set the device to **Class A**.

```c
DeviceClass_t g_CurrentClass = CLASS_A;         /* class definition*/

```

- Set up the EUIs and KEY. The **DeviceEUI**, **AppEUI**, and **AppKey** are the credentials of your device registered to TTN that will be used for the OTAA keys in the code. You need to replace the ones in the code with the credentials registered in TTN.

```c
//OTAA keys !!!! KEYS ARE MSB !!!!
uint8_t nodeDeviceEUI[8] = {0xAC, 0x1F, 0x09, 0xFF, 0xFE, 0x06, 0xD3, 0xE9};
uint8_t nodeAppEUI[8] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
uint8_t nodeAppKey[16] = {0x3F, 0xC4, 0x80, 0x0D, 0x4A, 0xE7, 0xAD, 0x9F, 0xDC, 0x27, 0x5D, 0x37, 0x2C, 0x4C, 0xD3, 0xF8};

```

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_20.png"
  width="90%"
  caption="Device's credentials registered in TTN"
/>

3. Once you're done with the code, you can now proceed with uploading it to your device. You must first choose your RAK4631 board on your desktop or laptop. To do so, navigate to **Tools** > **Board:XXXXX** > **RAKwireless nRF Boards** and select **WisBlock RAK4631**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_30.png"
  width="90%"
  caption="Selecting the RAK4631 board"
/>

4. After you have selected your board, go to **Tools** > **Port** and then select the specific port of your board.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_31.png"
  width="90%"
  caption="Selecting the port of RAK4631 board"
/>

5. You can then upload your code by clicking the Upload button (the right arrow sign). Once completed, the **Device programmed** notification will appear in the console at the bottom of the Arduino IDE.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_33.png"
  width="90%"
  caption="Arduino code is successfully uploaded into your RAK4631 board"
/>

::: tip 📝 NOTE

The steps outlined above apply to the **RAK12013** and **RAK12017** applications. Once you have finished uploading the code, proceed to the next step:

- **RAK12013**: [Setting up RAK12013 Radar Sensor Dashboard Using ThingSpeak](#setting-up-rak12013-radar-sensor-dashboard-using-thingspeak)
- **RAK12017**: [Setting up RAK12017 IR Proximity Sensor Dashboard Using ThingSpeak](#setting-up-rak12017-ir-proximity-sensor-dashboard-using-thingspeak)
:::

###### Setting up RAK12006 PIR Motion Sensor Dashboard Using ThingSpeak

This section will guide you on how to integrate your RAK12006 PIR Motion Sensor LoRaWAN application with ThingSpeak.


1. If you already have an existing **ThingSpeak account** and available channels to create, you may proceed to the next step. If you haven't yet created an account, go to the [Setting up Your Device Using ThingSpeak](#setting-up-your-device-using-thingspeak) section to set up your **RAK12006 PIR Motion Sensor**.

2. Once done, go to the **Channels** tab to create a new channel. Enter the details of the channel and then click **Save Channel**.

For **RAK12006 Application**:
  - Enter **Movement Monitoring** in the **Name** field.
  - Tick off **Field 1**.
  - Click **Save Channel**.


::: tip 📝 NOTE

The details and information are dependent on what device you are using (e.g. **RAK12006**).

:::

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_11.png"
  width="80%"
  caption="Creating the channel for RAK12006 application"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_12.png"
  width="80%"
  caption="Creating the channel for RAK12006 application"
/>

3. You should now see the **Movement Monitoring Channel** dashboard for the RAK12006 application.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_13A.png"
  width="80%"
  caption="Movement Monitoring channel for RAK12006 application"
/>

4. You can edit and change the details of your **Movement Monitoring** channel by clicking the pencil logo under **Field 1 Chart**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_14A.png"
  width="80%"
  caption="Edit the Movement Monitoring Channel details"
/>

5. A window will pop up and you can now start editing the details. Since it is a PIR motion sensor, the goal is to monitor the movement status at specific time. For this application, you may follow the parameters in **Figure 14**, and then click **Save**.


<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_15A.png"
  width="80%"
  caption="Field 1 Chart Options"
/>

You should now see the same dashboard as shown in **Figure 15.**

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_16A.png"
  width="80%"
  caption="Field 1 Chart for RAK12006 Application"
/>

6. Then go back to your TTN account and add the **ThingSpeak Webhook** for your **RAK12006 Application**. Under Applications, choose **Integrations** >**Webhooks**, and then select the **+ Add webhook** button.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_17.png"
  width="80%"
  caption="Adding a webhook for your RAK12006 Application"
/>

7. Choose **ThingSpeak** from the webhook templates, and the **Setup webhook for ThingSpeak** window will appear. Following that, you must return to your ThingSpeak account to obtain the necessary credentials:

    - **Channel ID**
    - **API Key**

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_18.png"
  width="80%"
  caption="Selecting ThingSpeak under the webhook templates"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_19.png"
  width="80%"
  caption="Setup webhook for ThingSpeak"
/>

<b> Channel ID </b>

- From the **Channel** menu, navigate to your Movement Monitoring dashboard. The Channel ID can be found under the name of your channel, **Movement Monitoring**; copy and paste it into the **Channel ID** section of your webhook in TTN.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_20A.png"
  width="80%"
  caption="Channel ID"
/>

<b> API Keys </b>

- From the **Channel** menu, navigate to your Movement Monitoring dashboard and select **API Keys** tab. The **API Keys** can be found under the **Write API key** field; copy and paste it to the **API Key** section of your webhook. Once done, simply click **Create ThingSpeak webhook**.


<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_21A.png"
  width="80%"
  caption="API Key"
/>

8. After filling in the necessary details, click **Create ThingSpeak webhook**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_22A.png"
  width="80%"
  caption="Create ThingSpeak webhook"
/>

You should see your RAK12006 Application Webhook ID on the Webhooks dashboard.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_23.png"
  width="80%"
  caption="Created ThingSpeak webhook under RAK12006 Application"
/>

9. Once done, go to **End devices** and click your existing device.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_24.png"
  width="80%"
  caption="RAK12006 Application"
/>

::: tip 📝 NOTE

The details and information are dependent to what device you are using (e.g. **RAK12006**). The steps creating ThingSpeak webhook, proceed to the next step:

- **RAK12013**: [Setting up RAK12013 Rada Sensor Dashboard Using ThingSpeak](#setting-up-rak12013-radar-sensor-dashboard-using-thingspeak)
- **RAK12017**: [Setting up RAK12017 IR Proximity Sensor Dashboard Using ThingSpeak](#setting-up-rak12017-ir-proximity-sensor-dashboard-using-thingspeak)

:::

10. Click the device application and go to the **Payload formatters** tab.
11. Setup the **Uplink** and under **Formatter type**, select **Custom Javascript formatter**.
12. Under the **Formatter code**, you need to replace the default code with the code provided below. This will decode the data from TTN going to ThingSpeak. Once done, click **Save changes**.

```js
// For ThingSpeak

function Decoder(bytes, port)
{
  var decoded = {};

  if (port === 2)
  {
      pir_data = (bytes[0]);
      decoded.field1 = pir_data;
      return decoded;
  }
}
```

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_25.png"
  width="80%"
  caption="Payload Formatter"
/>

13. Then, return to your device's **Live data** in TTN and compare it to the live data from your ThingSpeak account. You should now be seeing accurate periods of movement occurrences.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_26A.png"
  width="80%"
  caption="Live data from your device in TTN"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_27A.png"
  width="80%"
  caption="Live data of your device in ThingSpeak"
/>

14. To have a better visualization of the gathered data, you may include a widget with your channel. Under the **Channels** Menu, go to **Private View** > **+Add Widgets**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_28A.png"
  width="80%"
  caption="Adding Widget in ThingSpeak"
/>

15. Select your desired widget for your application, then click **Next**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_29A.png"
  width="80%"
  caption="Adding Widget in ThingSpeak"
/>

16. Set your preferred parameters for your widget, then click **Create**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_30A.png"
  width="80%"
  caption="Adding Widget in ThingSpeak"
/>

17. You should now see the newly added widgets for your RAK12006 application on the ThingSpeak Dashboard.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_31A.png"
  width="80%"
  caption="ThingSpeak Dashboard"
/>

[Back](#lorawan-applications-for-wisblock-movement-kit-using-ttn-and-thingspeak)


##### RAK12007 Ultrasonic Sensor LoRaWAN Application

###### TTN Registration Section and Device Registration

###### Connect to The Things Network (TTN)

- If you already have an existing TTN account, you may proceed to the [OTAA Device Registration](#otaa-device-registration) section.
- If you do not already have an account, go to the [The Things Network Configuration](#the-things-network-configuration) section and create one, then register your end-device.

###### LoRaWAN Code for RAK12007

1. If you already have **Arduino IDE** installed on your laptop or PC and added **RAK4631 board** into it, you may proceed to the next step. If you have not yet installed the **Arduino IDE**, go to the [RAK4631 Installation](#arduino-ide-installation-rak4631) section and execute the following steps.

2. After the installation, you can now proceed with programming your **RAK12007** module. Simply copy the **RAK12007 LoRaWAN Application** code below and paste it into the **Arduino IDE**.

::: tip 📝 NOTE
The example code uses [SX126x-Arduino](https://github.com/beegee-tokyo/SX126x-Arduino) library which needs to be added to successfully compile the LoRaWAN code.
:::

::: details <b><i> Click here to view the example code </i></b>
```c

#include <Arduino.h>
#include <LoRaWan-RAK4630.h> //http://librarymanager/All#SX126x
#include <SPI.h>
#include <Wire.h>

#ifdef RAK4630
  #define BOARD "RAK4631 "
  #define  RAK4631_BOARD true
#else
  #define  RAK4631_BOARD false
#endif

// Section to add include libraries, declarations and variables.

#define Enable WB_IO2
#define TRIG WB_IO6
#define ECHO WB_IO4
#define PD   WB_IO5   //power done control （=1 power done，=0 power on）

#define TIME_OUT  24125 //max measure distance is 4m,the velocity of sound is 331.6m/s in 0℃,TIME_OUT=4*2/331.6*1000000=24215us

float ratio = 346.6/1000/2;   //velocity of sound =331.6+0.6*25℃(m/s),(Indoor temperature about 25℃)

long int duration_time();  //measure high level time

long int duration, mm;



bool doOTAA = true;   // OTAA is used by default.
#define SCHED_MAX_EVENT_DATA_SIZE APP_TIMER_SCHED_EVENT_DATA_SIZE /**< Maximum size of scheduler events. */
#define SCHED_QUEUE_SIZE 60                     /**< Maximum number of events in the scheduler queue. */
#define LORAWAN_DATERATE DR_0                   /*LoRaMac datarates definition, from DR_0 to DR_5*/
#define LORAWAN_TX_POWER TX_POWER_5             /*LoRaMac tx power definition, from TX_POWER_0 to TX_POWER_15*/
#define JOINREQ_NBTRIALS 3                      /**< Number of trials for the join request. */
DeviceClass_t g_CurrentClass = CLASS_A;         /* class definition*/
LoRaMacRegion_t g_CurrentRegion = LORAMAC_REGION_US915;    /* Region:US915*/
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
uint8_t nodeDeviceEUI[8] = {0xAC, 0x1F, 0x09, 0xFF, 0xFE, 0x06, 0xD3, 0xE9};
uint8_t nodeAppEUI[8] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
uint8_t nodeAppKey[16] = {0x8B, 0x0E, 0x96, 0x86, 0xE8, 0x4E, 0xA3, 0xB5, 0x31, 0x42, 0xB3, 0x65, 0x75, 0xB1, 0xD3, 0xED};

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
  pinMode(Enable, OUTPUT);
  digitalWrite(Enable, HIGH);
  pinMode(ECHO, INPUT);   // Echo Pin of Ultrasonic Sensor is an Input
  pinMode(TRIG, OUTPUT);  // Trigger Pin of Ultrasonic Sensor is an Output
  pinMode(PD, OUTPUT);    // power done control pin is an Output
  digitalWrite(TRIG,LOW);
  digitalWrite(PD,LOW);

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
   Serial.println("  RAK12007 LoRaWAN test ");
   Serial.println("========================");

}

void loop()
{
  // Put your application tasks here, like reading of sensors,
  // Controlling actuators and/or other functions.


  // long int duration, mm;
   digitalWrite(LED_BLUE,HIGH);
   digitalWrite(LED_GREEN, HIGH);
   duration = duration_time();
   if(duration > 0)
   {
     mm = duration*ratio; //Test distance = (high level time×velocity of sound (340M/S) / 2,
     digitalWrite(LED_BLUE,LOW);
     digitalWrite(LED_GREEN, LOW);
     Serial.println("Sending frame now...");
     send_lora_frame();
     Serial.print(mm);
     Serial.print("mm");
     Serial.println();
     delay(15000);
   }
   else
   {
     Serial.println("Out of range");
   }
  delay(50);

}

long int duration_time()
{
   long int respondTime;
   pinMode(TRIG, OUTPUT);
   digitalWrite(TRIG, HIGH);
   delayMicroseconds(12);   //pull high time need over 10us
   digitalWrite(TRIG, LOW);
   pinMode(ECHO, INPUT);
   respondTime = pulseIn(ECHO, HIGH); // microseconds
   delay(33);
   if(RAK4631_BOARD)
   {
     respondTime = respondTime*0.7726; // Time calibration factor is 0.7726,to get real time microseconds for 4631board
   }
   Serial.printf("respond time is %d\r\n",respondTime);

   if((respondTime>0)&&(respondTime < TIME_OUT))  //ECHO pin max timeout is 33000us according it's datasheet
   {
    return respondTime;
   }
   else
   {
     return -1;
   }
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

  data = "Distance:" + String(mm) + "mm";
  Serial.println(data);

  uint32_t mm_data = mm;

  m_lora_app_data.buffer[i++] = 0x0A;
  m_lora_app_data.buffer[i++] = (uint8_t)((mm_data & 0xFF000000) >> 24);
  m_lora_app_data.buffer[i++] = (uint8_t)((mm_data & 0x00FF0000) >> 16);
  m_lora_app_data.buffer[i++] = (uint8_t)((mm_data & 0x0000FF00) >> 8);
  m_lora_app_data.buffer[i++] = (uint8_t)(mm_data & 0x000000FF);
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


Before uploading the Arduino Code, there are configurations that you need to set up to ensure that the device can join a LoRaWAN Network server. The following steps will explain the default settings and how to configure them.

- Set up the LoRaWAN region. The **LORAMAC_REGION** can be any of your desired regions to work with. You can change this to a region that is applicable to you, like `LORAMAC_REGION_US915`, `LORAMAC_REGION_AU915`, etc.

The following table lists the LoRaWAN regions and the countries where they are used:

| LoRaWAN Region         | Usage                                                             |
| ---------------------- | ----------------------------------------------------------------- |
| LORAMAC_REGION_AS923-1 | Australia, Singapore, Solomon Islands, Sri-Lanka, Taiwan          |
| LORAMAC_REGION_AS923-2 | Vietnam                                                           |
| LORAMAC_REGION_AS923-3 | Philippines, Albania, Algeria, Denmark, Greenland, Jordan         |
| LORAMAC_REGION_AS923-4 | Israel                                                            |
| LORAMAC_REGION_AU915   | Australia, Anguilla, Argentina, and other parts of South America  |
| LORAMAC_REGION_CN470   | China                                                             |
| LORAMAC_REGION_EU433   | EU, UK, Brazil, Costa Rica, Cuba, and other parts of Africa       |
| LORAMAC_REGION_IN865   | India, Cook Islands, Egypt, Hong Kong, Jordan, New Zealand, Niger |
| LORAMAC_REGION_EU868   | EU, UK and other parts of Africa                                  |
| LORAMAC_REGION_KR920   | Republic of Korea                                                 |
| LORAMAC_REGION_US915   | USA                                                               |
| LORAMAC_REGION_RU864   | Russia                                                            |

```c
LoRaMacRegion_t g_CurrentRegion = LORAMAC_REGION_US915;    /* Region:US915*/

```
- Set up the LoRaWAN activation method. In this case, you will use the **OTAA** configuration, which is also the default from the given code.

```c
bool doOTAA = true;   // OTAA is used by default.

```

- Set up the message type if confirmed or not. **Confirmed message** is the default for this one. You can change it to an **unconfirmed message** by changing the value to `LMH_UNCONFIRMED_MSG`.

```c
lmh_confirm g_CurrentConfirm = LMH_CONFIRMED_MSG;         /* confirm/unconfirm packet definition*/

```

- Set the device to **Class A**.

```c
DeviceClass_t g_CurrentClass = CLASS_A;         /* class definition*/

```

- Set up the EUIs and KEY. The **DeviceEUI**, **AppEUI**, and **AppKey** are the credentials of your device registered to TTN that will be used for the OTAA keys in the code. You need to replace the ones in the code with the credentials registered in TTN.


```c
//OTAA keys !!!! KEYS ARE MSB !!!!
uint8_t nodeDeviceEUI[8] = {0xAC, 0x1F, 0x09, 0xFF, 0xFE, 0x06, 0xD3, 0xE9};
uint8_t nodeAppEUI[8] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
uint8_t nodeAppKey[16] = {0x8B, 0x0E, 0x96, 0x86, 0xE8, 0x4E, 0xA3, 0xB5, 0x31, 0x42, 0xB3, 0x65, 0x75, 0xB1, 0xD3, 0xED};

```

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12007_20.png"
  width="90%"
  caption="Device's credentials registered in TTN"
/>

3. Once you're done with the code, you can now proceed with uploading it to your device. You must first choose your RAK4631 board on your desktop or laptop. To do so, navigate to **Tools** > **Board:XXXXX** > **RAKwireless nRF Boards** and select **WisBlock RAK4631**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12007_30.png"
  width="90%"
  caption="Selecting the RAK4631 board"
/>

4. After you have selected your board, go to **Tools** > **Port** and then select the specific port of your board.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12007_31.png"
  width="90%"
  caption="Selecting the port of RAK4631 board"
/>

5. You can then upload your code by clicking the Upload button (the right arrow sign). Once completed, the **Device programmed** notification will appear in the console at the bottom of the Arduino IDE.


<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12007_33.png"
  width="90%"
  caption="Arduino code is successfully uploaded into your RAK4631 board"
/>

###### Setting up RAK12007 Ultrasonic Sensor Dashboard Using ThingSpeak

This section will guide you on how to integrate your RAK12007 Ultrasonic sensor LoRaWAN application with ThingSpeak.

1. If you already have an existing **ThingSpeak account** and available channels to create, you may proceed to the next step. If you haven't yet created an account, go to the [Setting up Your Device Using ThingSpeak](#setting-up-your-device-using-thingspeak) section to set up your **RAK12007 Ultrasonic Sensor**.

2. Once done, go to the **Channels** tab to create a new channel. Enter the details of the channel and then click **Save Channel**.

For **RAK12007 Application**:
  - Enter **Distance Monitoring** in the **Name** field.
  - Tick off **Field 1**.
  - Click **Save Channel**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_11.png"
  width="80%"
  caption="Creating the channel for RAK12007 application"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_12.png"
  width="80%"
  caption="Creating the channel for RAK12007 application"
/>

3. You should now see the **Movement Monitoring Channel** dashboard for the RAK12007 application.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_13.png"
  width="80%"
  caption="Distance Monitoring channel for RAK12007 application"
/>


4. You can edit and change the details of your **Distance Monitoring** channel by clicking the pencil logo under **Field 1 Chart**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_14.png"
  width="80%"
  caption="Distance Monitoring channel for RAK12007 application"
/>

5. A window will pop up and you can now start editing the details. The goal is to monitor the distance status at specific time. For this application, you may follow the parameters in **Figure 39**, and then click **Save**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_15.png"
  width="80%"
  caption="Field 1 Chart Options"
/>

You should now see the same dashboard as shown in **Figure 40**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_16.png"
  width="80%"
  caption="Field 1 Chart for RAK12007 Application"
/>

6. Then go back to your TTN account and add the **ThingSpeak Webhook** for your **RAK12007 Application**. Under Applications, choose **Integrations** >**Webhooks**, and then select the **+ Add webhook** button.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_17.png"
  width="80%"
  caption="Adding a webhook for your RAK12007 Application"
/>

7. Choose **ThingSpeak** from the webhook templates, and the **Setup webhook for ThingSpeak** window will appear. Following that, you must return to your ThingSpeak account to obtain the necessary credentials:

    - **Channel ID**
    - **API Key**


<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_18.png"
  width="80%"
  caption="Selecting ThingSpeak under the webhook templates"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_19.png"
  width="80%"
  caption="Setup webhook for ThingSpeak"
/>

<b> Channel ID </b>

- From the **Channel** menu, navigate to your Distance Monitoring dashboard. The Channel ID can be found under the name of your channel, **Movement Monitoring**; copy and paste it into the **Channel ID** section of your webhook in TTN.


<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_20.png"
  width="80%"
  caption="Channel ID"
/>


<b> API Keys </b>

- From the **Channel** menu, navigate to your Movement Monitoring dashboard and select **API Keys** tab. The **API Keys** can be found under the **Write API key** field; copy and paste it to the **API Key** section of your webhook. Once done, simply click **Create ThingSpeak webhook**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_21.png"
  width="80%"
  caption="API Key"
/>

8. After filling in the necessary details, click **Create ThingSpeak webhook**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_22.png"
  width="80%"
  caption="Create ThingSpeak webhook"
/>

You should see your RAK12007 Application Webhook ID on the Webhooks dashboard.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_23.png"
  width="80%"
  caption="Created ThingSpeak webhook under RAK12007 Application"
/>

9. Once done, go to **End devices** and click your existing device.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_24.png"
  width="80%"
  caption="RAK12007 Application"
/>

10. Click the device application and go to the **Payload formatters** tab.
11. Setup the **Uplink** and under **Formatter type**, select **Custom Javascript formatter**.
12. Under the **Formatter code**, you need to replace the default code with the code provided below. This will decode the data from TTN going to ThingSpeak. Once done, click **Save changes**.

```js
function Decoder(bytes, port)
{
  var decoded = {};

  if (port === 2)
  {

    distance_data = (bytes[1] << 24) | (bytes[2] << 16) | (bytes[3] << 8) | (bytes[4]);
    decoded.field1 = distance_data;
    return decoded;
  }
}
```

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_25.png"
  width="80%"
  caption="Payload Formatter"
/>

13. Then, return to your device's **Live data** in TTN and compare it to the live data from your ThingSpeak account. You should now see measured values at their respective periods.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_26.png"
  width="80%"
  caption="Live data from your device in TTN"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_27.png"
  width="80%"
  caption="Live data of your device in ThingSpeak"
/>

14. To have a better visualization of the gathered data, you may include a widget with your channel. Under the **Channels** Menu, go to **Private View** > **+Add Widgets**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_28.png"
  width="80%"
  caption="Adding Widget in ThingSpeak"
/>

15. Select your desired widget for your application, then click **Next**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_29.png"
  width="80%"
  caption="Adding Widget in ThingSpeak"
/>

16. Set your preferred parameters for your widget, then click **Create**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_30.png"
  width="80%"
  caption="Adding Widget in ThingSpeak"
/>

18. You should now see the newly added widgets for your RAK12007 application on the ThingSpeak Dashboard.


<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12007_ThingSpeak_31.png"
  width="80%"
  caption="ThingSpeak Dashboard"
/>

[Back](#lorawan-applications-for-wisblock-movement-kit-using-ttn-and-thingspeak)


##### RAK12013 Radar Sensor LoRaWAN Application

###### Connect to The Things Network (TTN)

- If you already have an existing TTN account, you may proceed to the [OTAA Device Registration](#otaa-device-registration) section.
- If you do not already have an account, go to the [The Things Network Configuration](#the-things-network-configuration) section and create one, then register your end-device.

###### LoRaWAN Code for RAK12013

1. If you already have **Arduino IDE** installed on your laptop or PC and added **RAK4631 board** into it, you may proceed to the next step. If you have not yet installed the **Arduino IDE**, go to the [RAK4631 Installation](#arduino-ide-installation-rak4631) section and execute the following steps.

2. After the installation, you can now proceed with programming your **RAK12006** module. Simply copy the **RAK12006 LoRaWAN Application** code below and paste it into the **Arduino IDE**.

::: tip 📝 NOTE

The example code uses [SX126x-Arduino](https://github.com/beegee-tokyo/SX126x-Arduino) library which needs to be added to successfully compile the LoRaWAN code.

:::

::: details <b><i> Click here to view the example code </i></b>
```c

#include <Arduino.h>
#include <LoRaWan-RAK4630.h> //http://librarymanager/All#SX126x
#include <SPI.h>
#include <Wire.h>

// Section to add include libraries, declarations and variables.

#define SENSOR_OUT      WB_IO3
#define SENSOR_Enable   WB_IO4

int sensor_val;         // read pin as INPUT
int sensor_val_1;

boolean g_motion_status = false;

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
uint8_t nodeAppKey[16] = {0xE7, 0x70, 0x32, 0x84, 0x81, 0x0F, 0xA1, 0xE1, 0xB1, 0x85, 0x67, 0x37, 0xC1, 0xC8, 0x2B, 0xD6};

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
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);

  pinMode (SENSOR_Enable, OUTPUT);
  digitalWrite(SENSOR_Enable, HIGH); // Sensor disable input (low = disable)

  pinMode(SENSOR_OUT, INPUT);        // Radar Sensor as an INPUT
  pinMode(LED_GREEN, OUTPUT);
  pinMode(LED_BLUE, OUTPUT);

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

   Serial.println("====================================");
   Serial.println("    RAK12013 3GHz Radar LoRaWAN test");
   Serial.println("====================================");
   Serial.println("Waiting for motion");

}

void loop()
{
  // Put your application tasks here, like reading of sensors,
  // Controlling actuators and/or other functions.

  sensor_val = digitalRead(SENSOR_OUT);
  if((sensor_val > 0) && (g_motion_status == false))
  {
    digitalWrite(LED_BLUE, HIGH);
    digitalWrite(LED_GREEN, LOW);
    g_motion_status = true;
    sensor_val_1 = 1;
    Serial.println("Motion Detected");
  }

  if((sensor_val == 0) && (g_motion_status == true))
  {
    digitalWrite(LED_BLUE, LOW);
    digitalWrite(LED_GREEN, HIGH);
    g_motion_status = false;
    sensor_val_1 = 0;
    Serial.println("No Motion Detected");
  }

  send_lora_frame();
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

void send_lora_frame(void)
{
  if (lmh_join_status_get() != LMH_SET)
  {
    //Not joined, try again later
    return;
  }

  uint32_t i = 0;
  memset(m_lora_app_data.buffer, 0, LORAWAN_APP_DATA_BUFF_SIZE);
  m_lora_app_data.port = gAppPort;
  m_lora_app_data.buffer[i++] = sensor_val_1;
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

And for next steps, follow instruction used for [RAK12006](#lorawan-code-for-rak12006) Module and use the above code instead.

###### Setting up RAK12013 Radar Sensor Dashboard Using ThingSpeak

This section will guide you on how to integrate your RAK12013 Radar Sensor LoRaWAN application with ThingSpeak.

1. If you already have an existing **ThingSpeak account** and available channels to create, you may proceed to the next step. If you haven't yet created an account, go to the [Setting up Your Device Using ThingSpeak](#setting-up-your-device-using-thingspeak) section to set up your **RAK12013 Radar Sensor**.

2. Once done, refer to the [Setting up RAK12006 PIR Motion Sensor Dashboard Using ThingSpeak](#setting-up-rak12006-pir-motion-sensor-dashboard-using-thingspeak) section and execute **Step 2** to **Step 7** since RAK12006 and RAK12017 have similar applications. The only difference between these two devices is that **RAK12013** reads radar data.

3. Then, click the device application and go to **Payload formatters** tab.
4. Setup the Uplink and under **Formatter type**, select **Custom Javascript formatter**.
5. UUnder the **Formatter code**, you need to replace the default code with the code provided below. This will decode the data from TTN going to ThingSpeak. Once done, click **Save changes**.

```js
function Decoder(bytes, port)
{
  var decoded = {};

  if (port === 2)
  {
      radar_data = (bytes[0]);
      decoded.field1 = radar_data;
      return decoded;
  }
}

```

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12013_ThingSpeak_25.png"
  width="80%"
  caption="Payload Formatter"
/>

6. Then, return to your device's **Live data** in TTN and compare it to the live data from your ThingSpeak account. You should now be seeing accurate periods of movement occurrences.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12013_ThingSpeak_26.png"
  width="80%"
  caption="Live data from your device in TTN"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12013_ThingSpeak_27.png"
  width="80%"
  caption="Live data of your device in ThingSpeak"
/>

7. To have a better visualization of the gathered data, you may include a widget with your channel. Under the **Channels** Menu, go to **Private View** > **+Add Widgets**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12013_ThingSpeak_28.png"
  width="80%"
  caption="Adding Widget in ThingSpeak"
/>

8. Select your desired widget for your application, then click **Next**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12013_ThingSpeak_29.png"
  width="80%"
  caption="Adding Widget in ThingSpeak"
/>

9. Set your preferred parameters for your widget, then click **Create**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12013_ThingSpeak_30.png"
  width="80%"
  caption="Adding Widget in ThingSpeak"
/>

10. You should now see the newly added widgets for your RAK12006 application on the ThingSpeak Dashboard.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12013_ThingSpeak_31.png"
  width="80%"
  caption="ThingSpeak Dashboard"
/>

[Back](#lorawan-applications-for-wisblock-movement-kit-using-ttn-and-thingspeak)


##### RAK12017 IR Proximity Sensor LoRaWAN Application

###### TTN Registration Section and Device Registration

1. If you already have an existing TTN account, you may proceed to the next step. If you haven't yet created a TTN account, please refer to this [link](#ttn-account-creation) for the steps.

2. Once done with the TTN account creation, you may now proceed with the device registration. Please refer to this [guide](#device-registration) for your reference.

###### LoRaWAN Code for RAK12017

1. If you already have **Arduino IDE** installed to your laptop or PC and added **RAK4631 board** into it, you may proceed to the next step. If you haven't yet installed the **Arduino IDE**, please refer to this [link](#arduino-ide-installation-rak4631) for the steps.

For **RAK12017 IR Proximity Sensor LoRaWAN Application**, you will be using the code below:

::: tip 📝 NOTE

The example code uses [SX126x-Arduino](https://github.com/beegee-tokyo/SX126x-Arduino) library which needs to be added to successfully compile the LoRaWAN code.

:::

::: details <b><i> Click here to view the example code </i></b>
```c

#include <Arduino.h>
#include <LoRaWan-RAK4630.h> //http://librarymanager/All#SX126x
#include <SPI.h>
#include <Wire.h>

int sensor_val;

// Section to add include libraries, declarations and variables.

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
uint8_t nodeAppKey[16] = {0x19, 0xC4, 0x7D, 0xC9, 0x83, 0xF5, 0x7A, 0xD5, 0x2B, 0xA6, 0x3A, 0xAA, 0x39, 0x52, 0x7A, 0xD6};

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
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);
  pinMode(WB_IO4, INPUT);        // IR Sensor as an INPUT
  pinMode(LED_GREEN, OUTPUT);
  pinMode(LED_BLUE, OUTPUT);

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
   Serial.println("  RAK12017 LoRaWAN test ");
   Serial.println("========================");

}

void loop()
{
  // Put your application tasks here, like reading of sensors,
  // Controlling actuators and/or other functions.

  if (digitalRead(WB_IO4) == 0)
  {
    digitalWrite(LED_GREEN, HIGH);   // Turn ON LEDs
    digitalWrite(LED_BLUE, HIGH);
    sensor_val = 1;
    Serial.println("IR Status: Motion Detected");
    Serial.println(" value: 1");
  }
  else if (digitalRead(WB_IO4) == 1)
  {
    // No motion detected
    digitalWrite(LED_GREEN, LOW);   // Turn OFF LEDs
    digitalWrite(LED_BLUE, LOW);
    sensor_val = 0;
    Serial.println("IR Status: No Motion Detected");
    Serial.println(" value: 0");
  }

  send_lora_frame();
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

void send_lora_frame(void)
{
  if (lmh_join_status_get() != LMH_SET)
  {
    //Not joined, try again later
    return;
  }

  uint32_t i = 0;
  memset(m_lora_app_data.buffer, 0, LORAWAN_APP_DATA_BUFF_SIZE);
  m_lora_app_data.port = gAppPort;
  m_lora_app_data.buffer[i++] = sensor_val;
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

And for next steps, follow instruction used for [RAK12006](#lorawan-code-for-rak12006) Module and use the above code instead.

###### Setting up RAK12017 IR Proximity Sensor Dashboard Using ThingSpeak

This section will guide you on how to integrate your RAK12017 IR Proximity sensor LoRaWAN application with ThingSpeak.

1. If you already have your **ThingSpeak Account** and available channels to create, you may proceed to the next step. If you haven't yet created an account, go to the [Setting up Your Device Using ThingSpeak](#setting-up-your-device-using-thingspeak) section to set up your **RAK12017 IR Proximity Sensor**.

2. Once done, refer to the [Setting up RAK12006 PIR Motion Sensor Dashboard Using ThingSpeak](#setting-up-rak12006-pir-motion-sensor-dashboard-using-thingspeak) section and execute **Step 2** to **Step 7** since RAK12006 and RAK12017 have similar applications. The only difference between these two devices is that **RAK12017** reads infrared data.

3. Then, click the device application and go to **Payload formatters** tab.
4. Setup the Uplink and under **Formatter type**, select **Custom Javascript formatter**.
5. UUnder the **Formatter code**, you need to replace the default code with the code provided below. This will decode the data from TTN going to ThingSpeak. Once done, click **Save changes**.

```js
function Decoder(bytes, port)
{
  var decoded = {};

  if (port === 2)
  {
      ir_sensor_data = (bytes[0]);
      decoded.field1 = ir_sensor_data;
      return decoded;
  }
}

```

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12017_ThingSpeak_25.png"
  width="80%"
  caption="Payload Formatter"
/>

6. Then, return to your device's **Live data** in TTN and compare it to the live data from your ThingSpeak account. You should now be seeing accurate periods of movement occurrences.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12017_ThingSpeak_26.png"
  width="80%"
  caption="Live data from your device in TTN"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12017_ThingSpeak_27.png"
  width="80%"
  caption="Live data of your device in ThingSpeak"
/>

7. To have a better visualization of the gathered data, you may include a widget with your channel. Under the **Channels** Menu, go to **Private View** > **+Add Widgets**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12017_ThingSpeak_28.png"
  width="80%"
  caption="Adding Widget in ThingSpeak"
/>

8. Select your desired widget for your application, then click **Next**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12017_ThingSpeak_29.png"
  width="80%"
  caption="Adding Widget in ThingSpeak"
/>

9. Set your preferred parameters for your widget, then click **Create**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12017_ThingSpeak_30.png"
  width="80%"
  caption="Adding Widget in ThingSpeak"
/>

10. You should now see the newly added widgets for your RAK12006 application on the ThingSpeak Dashboard.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12017_ThingSpeak_31.png"
  width="80%"
  caption="ThingSpeak Dashboard"
/>

[Back](#lorawan-applications-for-wisblock-movement-kit-using-ttn-and-thingspeak)


## Miscellaneous

### The Things Network Configuration

#### Create a TTN Account

1. Go to [The Things Network](https://www.thethingsnetwork.org/) and sign up an account.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_1.png"
  width="90%"
  caption="Signing up an account in TTN"
/>

2. Choose a **Community** and get started.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_2.png"
  width="90%"
  caption="Signing up an account in TTN"
/>

3. Choose a network cluster.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_3.png"
  width="90%"
  caption="Selecting Cluster in TTN"
/>

You can also opt to sign up and create an account using your The Things ID.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_4.png"
  width="90%"
  caption="Signing up through the Things ID"
/>

If you have a TTN V2, you can use the same login credentials. If you do not yet have an account, you must create one.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_5.png"
  width="90%"
  caption="Creation of an account through the Things ID"
/>

#### Adding an Account

1. Now that you are logged in to the platform, the next step is to create an application. Select **Create an application**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_7.png"
  width="90%"
  caption="The Things Stack Platform"
/>

2. Fill in the needed information, then click the **Create application** button.

   - **Application ID** - This will be the unique ID of your application in the Network. ID must contain only lowercase letters, numbers, and dashes (-).
   - **Application name** (optional) - This is the name of your application.
   - **Description** (optional) – Description of your application. Optional application description; can also be used to save notes about the application.


<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_10.png"
  width="70%"
  caption="Details of the TTN application"
/>

::: tip 📝 NOTE
The details and information are dependent on what device you are using.
:::

If you have no error on the previous step, you should now be on the application console page.

<!-- The next step is to add end-devices to your TTN application. -->

<!-- LoRaWAN specifications enforce that each end-device has to be personalized and activated. Activation can be done via Over-The-Air-Activation (OTAA) mode to register your device. -->


#### OTAA Device Registration

1. To start adding an OTAA end-device, go to your application console and click **+ Register end device**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_11.png"
  width="90%"
  caption="Adding a device in OTAA mode"
/>

2. In the input method, select **Enter end device specifics manually** to register your device.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_12.png"
  width="60%"
  caption="Registering the device in OTAA mode"
/>

3. Next, set up the **Frequency plan**, the compatible **LoRaWAN version**, and the supported **Regional Parameters version**. Then provide the **JoinEUI** credentials by entering zeroes.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_14.png"
  width="60%"
  caption="Setting up your device"
/>

4. Click **Show advanced activation, LoRaWAN class and cluster settings** and configure the following parameters, then click **Confirm**:
   - Activation mode: **Over the air activation (OTAA)**
   - Additional LoRaWAN class capabilities: **None (class A only)**
   - Network defaults: **Use network's default MAC settings**


<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_15.png"
  width="60%"
  caption="Setting up your device"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_16.png"
  width="50%"
  caption="Setting up your device"
/>

5. Once done, provide the DevEUI credentials of your device into the **DevEUI** portion. Click the **Generate** button under **Provisioning Information** > **AppKey** to automatically generate the specific end-device ID of your board.

Once done, you need to change the **End device ID** since it is automatically prefilled using the **DevEUI** of your device. Then click **Register end device**.


:::tip 📝 NOTE:

- The **AppEUI**, **DevEUI**, and **AppKey** are hidden in this section as these are unique from a specific device. The **DevEUI** credential is unique to every **RAK4631** device. Also, you should generate your own **AppEUI** and **AppKey** credentials for your specific device and application.
- The **AppEUI** is the same as **JoinEUI**.
- The details under **End device ID** are dependent on what device you are using.
:::

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_19.png"
  width="50%"
  caption="Register End Device"
/>

6. After you have fully registered your device, you should be able to see it on the TTN console.

:::tip 📝 NOTE:

- The **AppEUI**, **DevEUI**, and **AppKey** are the parameters that you will need to activate your LoRaWAN end-device via OTAA. The **AppKey** is hidden by default for security reasons, but you can easily show it by clicking the show button. You can also copy the parameters quickly using the copy button.
- These parameters are always accessible on the device console page, as shown in **Figure 85**.
:::

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_20.png"
  width="90%"
  caption="OTAA device successfully registered to TTN"
/>

### Arduino IDE Installation + RAK4631

1. Download the [Arduino IDE](https://www.arduino.cc/en/software) and install it on your PC or laptop. You must choose the appropriate **Arduino IDE** depending on your operating system.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_22.png"
  width="80%"
  caption="Download Options for the Arduino IDE"
/>

2. Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the `package_rakwireless_index.json` board installation package. The WisBlock Core should now be available on the Arduino IDE.

3. Open the **Arduino IDE** and go to **File** > **Preference**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_23.png"
  width="80%"
  caption="Preference Set-Up"
/>

4. In the **Preferences** window, under the **Settings** tab, click the icon in line with **Additional Boards Manager URLs**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_24.png"
  width="80%"
  caption="Preference Window"
/>

5. A window will pop up. Copy the highlighted link and click **OK**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_25.png"
  width="80%"
  caption="RAKwireless Arduino BSP"
/>

6. Paste the link under the **Additional boards manager URLs:** field, and then click **OK**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_26.png"
  width="80%"
  caption="Completing the setup of the RAKwireless BSP support for the Arduino Board Manager"
/>

7. In your **Arduino IDE**, go to **Tools** > **Board:XXXXX** > **Boards Manager** and look for **RAKwireless Boards by RAKwireless** since you will be working with **RAK4631 WisBlock Core**. Choose the latest version, then install it. Once done, close the **Board Manager**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_27.png"
  width="80%"
  caption="Opening the Boards Manager"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/TTN_RAK12006_28.png"
  width="80%"
  caption="Installing the RAKwireless nRF Boards"
/>

::: tip 📝 NOTE
The steps outlined above apply to all devices you will be using. Once done with the installation of the device, proceed to its next step:

- **RAK12006**: [LoRaWAN Code for RAK12006](#lorawan-code-for-rak12006)
- **RAK12007**: [LoRaWAN Code for RAK12007](#lorawan-code-for-rak12007)
- **RAK12013**: [LoRaWAN Code for RAK12013](#lorawan-code-for-rak12013)
- **RAK12017**: [LoRaWAN Code for RAK12017](#lorawan-code-for-rak12017)
:::

[Back](#lorawan-applications-for-wisblock-movement-kit-using-ttn-and-thingspeak)

### Setting up Your Device Using ThingSpeak

1. Go to [thingspeak.com](https://thingspeak.com/), then click **Get Started For Free**. Select **Create One!** to create your ThingSpeak account.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_1.png"
  width="80%"
  caption="ThingSpeak Platform"
/>

2. Once your newly created account has been verified, click **OK**. Then, for the **ThingSpeak Usage Intent**, select **Personal, non-commercial projects** and click **OK**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_8.png"
  width="80%"
  caption="ThingSpeak Account creation"
/>

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_9.png"
  width="80%"
  caption="ThingSpeak Account creation"
/>

3. Then under **Channels**, click **New Channel**.

<rk-img
  src="/assets/images/wisblock/kits/kit3_quickstart/RAK12006_ThingSpeak_10.png"
  width="80%"
  caption="Creating New Channel in ThingSpeak"
/>


::: tip 📝 NOTE
The steps outlined above apply to all devices you will be using. Once you have finished creating a ThingSpeak account and are ready to start adding channels, proceed to the next step:

- **RAK12006**: [LoRaWAN Code for RAK12006](#setting-up-rak12006-pir-motion-sensor-dashboard-using-thingspeak)
- **RAK12007**: [LoRaWAN Code for RAK12007](#setting-up-rak12006-pir-motion-sensor-dashboard-using-thingspeak)
- **RAK12013**: [LoRaWAN Code for RAK12013](#setting-up-rak12013-radar-sensor-dashboard-using-thingspeak)
- **RAK12017**: [LoRaWAN Code for RAK12017](#setting-up-rak12017-ir-proximity-sensor-dashboard-using-thingspeak)
:::

[Back](#lorawan-applications-for-wisblock-movement-kit-using-ttn-and-thingspeak)
