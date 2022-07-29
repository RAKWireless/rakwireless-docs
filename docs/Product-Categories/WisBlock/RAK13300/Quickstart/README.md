---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK13300. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak13300/overview/RAK13300_home.png
tags:
  - quickstart
  - wisblock
  - RAK13300
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK13300 Quick Start Guide



## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK13300 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK13300](https://store.rakwireless.com/products/rak13300-wisblock-lpwan)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- [RAK11200 WisBlock Core](https://store.rakwireless.com/products/wiscore-esp32-module-rak11200?utm_source=WisBlockRAK11200&utm_medium=Document&utm_campaign=BuyFromStore)
- USB Cable
- [LoRa-compatible Antennas](https://store.rakwireless.com/collections/antennas-1)
- [Li-Ion/LiPo battery(optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable)


#### Software

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [GitHub repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

You can integrate the RAK13300 Wireless module on WisBlock Core module that does not have a built-in LoRa radio chip like the WisBlock Core RAK11200. The RAK13300 module will extend your WisBlock application to have LoRa P2P or LoRaWAN functionality. For more information about RAK13300, refer to its [Datasheet](../Datasheet/).

RAK13300 module can be mounted to the IO slot of the WisBlock Base and communicated to the WisBlock Core via SPI. The module is activated via `WB_IO2` pin of the WisBlock Core.



<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/connection.png"
  width="80%"
  caption="RAK13300 connection to WisBlock Base"
/>



#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location of the IO Slot is properly marked by silkscreen. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/mounting-mechanism.png"
  width="70%"
  caption="RAK13300 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the base board.

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK13300 uses UART communication lines, and it can cause possible conflict, especially on some modules that also use UART. 
:::

### LoRa Antenna

The RAK13300 requires a LoRa Antenna to have a good signal. And do not power the module without an antenna connected to the IPEX connector to avoid damage to the RF section of this chip.

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/lora-antenna.png"
  width="35%"
  caption="LoRa Antenna"
/>

::: tip 📝 NOTE
Detailed information about the LoRa antenna can be found on the [LoRa Antenna Datasheet](https://downloads.rakwireless.com/LoRa/WisBlock/Accessories/868%20915%20LoRa%20Antenna%20for%20WisBlock.pdf). 
:::

RAK13300 has the antenna slot which can be found in **Figure 7**.

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/RAK13300_antenna_label.png"
  width="35%"
  caption="RAK13300 Antenna Slot"
/>

:::warning ⚠️ WARNING

- When using the LoRa transceivers, make sure that an antenna is always connected. Using these transceivers without an antenna can damage the system. Make sure to fix the module with the screws to ensure a proper function.

:::

### Battery Connection (Optional)

You can power the module via USB Cable or Li-Ion/LiPo battery via connectors, as shown in **Figure 8**. This illustration shows RAK5005-O as WisBlock Base. There are other [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) boards available, and you need to check the datasheet of the specific WisBlock Base board for the right polarity and parameters.

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/battery-connection.gif"
  width="35%"
  caption="WisBlock Base RAK5005-O battery polarity and connection"
/>

:::warning ⚠️ WARNING

- Batteries can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- Make sure the battery wires match the polarity on the WisBlock Base board. Not all batteries have the same wiring.

:::



### Software Configuration and Example

The RAK13300 is a LoRa module based on the SX1262 LoRa chip. It provides an easy-to-use, small-size, and low-power solution for long-range wireless data applications.

These are the quick links that go directly to the software guide for the specific WisBlock Core module you use:

- [RAK13300 as LoRa P2P receiver](/Product-Categories/WisBlock/RAK13300/Quickstart/#setting-up-rak13300-as-receiver)
- [RAK13300 as LoRa P2P transmitter](/Product-Categories/WisBlock/RAK13300/Quickstart/#setting-up-rak13300-as-transmitter)



#### LoRa Point-to-Point Example

In this example code, you will be able to send/receive payloads via LoRaP2P using the RAK13300 LPWAN Wireless Module. This will ensure that your RAK13300 is functional and ready for your IoT project.

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/LoRaP2P.png"
  width="80%"
  caption="LoRaP2P Example"
/>

::: tip 📝 NOTE
You can use other [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) and [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core) with LoRa capability as dummy transmitter.
:::

##### Setting up RAK13300 as Receiver

If you have already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. You need to select RAK11200 as your WisBlock Core, as shown in **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/rak13300_tx_board.png"
  width="90%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE:

```c
	/**
 * @file LoRaP2P_RX.ino
 * @author rakwireless.com
 * @brief Receiver node for LoRa point to point communication
 * @version 0.1
 * @date 2021-08-21
 * 
 * @copyright Copyright (c) 2020
 * 
 */
#include <Arduino.h>
#include <SX126x-Arduino.h> //http://librarymanager/All#SX126x
#include <SPI.h>

// Function declarations
void OnRxDone(uint8_t *payload, uint16_t size, int16_t rssi, int8_t snr);
void OnRxTimeout(void);
void OnRxError(void);


// Define LoRa parameters
#define RF_FREQUENCY 868300000	// Hz
#define TX_OUTPUT_POWER 22		// dBm
#define LORA_BANDWIDTH 0		// [0: 125 kHz, 1: 250 kHz, 2: 500 kHz, 3: Reserved]
#define LORA_SPREADING_FACTOR 7 // [SF7..SF12]
#define LORA_CODINGRATE 1		// [1: 4/5, 2: 4/6,  3: 4/7,  4: 4/8]
#define LORA_PREAMBLE_LENGTH 8	// Same for Tx and Rx
#define LORA_SYMBOL_TIMEOUT 0	// Symbols
#define LORA_FIX_LENGTH_PAYLOAD_ON false
#define LORA_IQ_INVERSION_ON false
#define RX_TIMEOUT_VALUE 3000
#define TX_TIMEOUT_VALUE 3000

static RadioEvents_t RadioEvents;

static uint8_t RcvBuffer[64];

void setup()
{
    pinMode(WB_IO2, OUTPUT);
    digitalWrite(WB_IO2, HIGH);
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
	Serial.println("LoRaP2P Rx Test");
	Serial.println("=====================================");

	// Initialize the Radio callbacks
	RadioEvents.TxDone = NULL;
	RadioEvents.RxDone = OnRxDone;
	RadioEvents.TxTimeout = NULL;
	RadioEvents.RxTimeout = OnRxTimeout;
	RadioEvents.RxError = OnRxError;
	RadioEvents.CadDone = NULL;
	// Initialize LoRa chip.
	lora_rak13300_init();
	// Initialize the Radio
	Radio.Init(&RadioEvents);

	// Set Radio channel
	Radio.SetChannel(RF_FREQUENCY);

	// Set Radio RX configuration
	Radio.SetRxConfig(MODEM_LORA, LORA_BANDWIDTH, LORA_SPREADING_FACTOR,
					  LORA_CODINGRATE, 0, LORA_PREAMBLE_LENGTH,
					  LORA_SYMBOL_TIMEOUT, LORA_FIX_LENGTH_PAYLOAD_ON,
					  0, true, 0, 0, LORA_IQ_INVERSION_ON, true);

	// Start LoRa
	Serial.println("Starting Radio.Rx");
	Radio.Rx(RX_TIMEOUT_VALUE);
}

void loop()
{
 // Put your application tasks here, like reading of sensors,
  // Controlling actuators and/or other functions. 

}

/**@brief Function to be executed on Radio Rx Done event
 */
void OnRxDone(uint8_t *payload, uint16_t size, int16_t rssi, int8_t snr)
{
  Serial.println("OnRxDone");
  delay(10);
  memcpy(RcvBuffer, payload, size);

  Serial.printf("RssiValue=%d dBm, SnrValue=%d\n", rssi, snr);

  for (int idx = 0; idx < size; idx++)
  {
    Serial.printf("%02X ", RcvBuffer[idx]);
  }
  Serial.println("");
  Radio.Rx(RX_TIMEOUT_VALUE);
}

/**@brief Function to be executed on Radio Rx Timeout event
 */
void OnRxTimeout(void)
{
  Serial.println("OnRxTimeout");
  Radio.Rx(RX_TIMEOUT_VALUE);
}

/**@brief Function to be executed on Radio Rx Error event
 */
void OnRxError(void)
{
  Serial.println("OnRxError");
  Radio.Rx(RX_TIMEOUT_VALUE);
}
```

3. You can now select the right serial port and upload the code, as shown in **Figure 11** and **Figure 12**.

:::tip 📝 NOTE:
Since you are using RAK11200 as WisBlock Core, you need to configure the BOOT0 pin before uploading. You need to short it to the ground then press the reset button of the WisBlock Base before releasing the BOOT0 pin. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/selecting_port.png"
  width="90%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/upload.png"
  width="90%"
  caption="Uploading the RAK13300 example code"
/>

:::tip 📝 NOTE:
If you experience any error in compiling the example sketch, check the updated code for the RAK13300 WisBlock LPWAN Wireless Module that can be found on the [RAK13300 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK11200/communications/LoRa/RAK13300_LoRaP2P/LoRaP2P_RX)
:::

4. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the initial logs. You may not see any logs yet if you have not set the transmitter up or you do not have any existing transmitting device.


##### Setting up the Dummy Transmitter

In this example, you will be using RAK11310 as the WisBlock Core and RAK19003 as the WisBlock Base for the dummy transmitter.

1. You need to select RAK11310 as your WisBlock Core, as shown in **Figure 13**.

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/select_rak11300.png"
  width="90%"
  caption="Selecting RAK11300 as WisBlock Core"
/>

2. Open the example code for LoRaP2P Transmitter, as shown in **Figure 14**.

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/rak11310_txsample.png"
  width="90%"
  caption="Opening the example code"
/>

3. Select the correct port and upload, as shown in **Figure 15** and **Figure 16**.

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/select_rak11300port.png"
  width="90%"
  caption="Selecting the correct serial port"
/>

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/upload11300.png"
  width="90%"
  caption="Uploading the code"
/>

4. When you have successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the initial logs, as shown in **Figure 17**.

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/transmitting_done.png"
  width="75%"
  caption="Transmission logs in Serial Monitor"
/>

:::tip 📝 NOTE:

**OnTxDone** respond means that your transmitter is now ready.
:::

##### Testing the Receive and Transmit Transaction

1. To check if the communication is successful, you can power the transmitting node via battery or power brick to avoid confusion in the serial port. You may refer to **Figure 18** for the illustration.

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/finalsetup.png"
  width="90%"
  caption="Receiving and Transmitting Node Setup"
/>

2. Connect the receiving node to your PC and open the serial monitor. You will see the message is received, as shown in **Figure 19**.

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/serial-monitor.png"
  width="75%"
  caption="Payload logs received in Serial Monitor"
/>

##### Setting up RAK13300 as Transmitter

If you have already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. You need to select RAK11200 as your WisBlock Core, as shown in **Figure 20**.

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/rak13300_tx_board.png"
  width="90%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE:

```c
/**
 * @file LoRaP2P_TX.ino
 * @author rakwireless.com
 * @brief Transmitter node for LoRa point to point communication
 * @version 0.1
 * @date 2021-08-21
 * 
 * @copyright Copyright (c) 2020
 * 
 */

#include <Arduino.h>
#include <SX126x-Arduino.h> //http://librarymanager/All#SX126x
#include <SPI.h>

// Function declarations
void OnTxDone(void);
void OnTxTimeout(void);


// Define LoRa parameters
#define RF_FREQUENCY 868300000  // Hz
#define TX_OUTPUT_POWER 22    // dBm
#define LORA_BANDWIDTH 0    // [0: 125 kHz, 1: 250 kHz, 2: 500 kHz, 3: Reserved]
#define LORA_SPREADING_FACTOR 7 // [SF7..SF12]
#define LORA_CODINGRATE 1   // [1: 4/5, 2: 4/6,  3: 4/7,  4: 4/8]
#define LORA_PREAMBLE_LENGTH 8  // Same for Tx and Rx
#define LORA_SYMBOL_TIMEOUT 0 // Symbols
#define LORA_FIX_LENGTH_PAYLOAD_ON false
#define LORA_IQ_INVERSION_ON false
#define RX_TIMEOUT_VALUE 3000
#define TX_TIMEOUT_VALUE 3000

static RadioEvents_t RadioEvents;
static uint8_t TxdBuffer[64];

void setup()
{
  pinMode(WB_IO2, OUTPUT);
    digitalWrite(WB_IO2, HIGH);
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
  Serial.println("LoRap2p Tx Test");
  Serial.println("=====================================");

  // Initialize the Radio callbacks
  RadioEvents.TxDone = OnTxDone;
  RadioEvents.RxDone = NULL;
  RadioEvents.TxTimeout = OnTxTimeout;
  RadioEvents.RxTimeout = NULL;
  RadioEvents.RxError = NULL;
  RadioEvents.CadDone = NULL;
  // Initialize LoRa chip.
  lora_rak13300_init();
  // Initialize the Radio
  Radio.Init(&RadioEvents);

  // Set Radio channel
  Radio.SetChannel(RF_FREQUENCY);

  // Set Radio TX configuration
  Radio.SetTxConfig(MODEM_LORA, TX_OUTPUT_POWER, 0, LORA_BANDWIDTH,
            LORA_SPREADING_FACTOR, LORA_CODINGRATE,
            LORA_PREAMBLE_LENGTH, LORA_FIX_LENGTH_PAYLOAD_ON,
            true, 0, 0, LORA_IQ_INVERSION_ON, TX_TIMEOUT_VALUE);
  send();
}

void loop()
{
  // Put your application tasks here, like reading of sensors,
  // Controlling actuators and/or other functions. 
}

/**@brief Function to be executed on Radio Tx Done event
 */
void OnTxDone(void)
{
  Serial.println("OnTxDone");
  delay(5000);
  send();
}

/**@brief Function to be executed on Radio Tx Timeout event
 */
void OnTxTimeout(void)
{
  Serial.println("OnTxTimeout");
}

void send()
{
  TxdBuffer[0] = 'H';
  TxdBuffer[1] = 'e';
  TxdBuffer[2] = 'l';
  TxdBuffer[3] = 'l';
  TxdBuffer[4] = 'o';
  Radio.Send(TxdBuffer, 5);
}
```

3. You can now select the right serial port and upload the code, as shown in **Figure 21** and **Figure 22**.

:::tip 📝 NOTE:
Since you are using RAK11200 as WisBlock Core, you need to configure the BOOT0 pin before uploading. You need to short it to the ground then press the reset button of the WisBlock Base before releasing the BOOT0 pin. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/rak13300_tx_port.png"
  width="90%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/rak13300_tx_upload.png"
  width="90%"
  caption="Uploading the RAK13300 example code"
/>

:::tip 📝 NOTE:
If you experience any error in compiling the example sketch, check the updated code for the RAK13300 WisBlock LPWAN Wireless Module that can be found on the [RAK13300 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK11200/communications/LoRa/RAK13300_LoRaP2P/LoRaP2P_TX)
:::

4. When you have successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the transmission logs, as shown in **Figure 23**.

<rk-img
  src="/assets/images/wisblock/rak13300/quickstart/rak13300_tx_serial.png"
  width="75%"
  caption="Transmission logs in Serial Monitor"
/>

:::tip 📝 NOTE:
- You can set up a receiver node to see the transmitted messages.
- You can use [RAK4631 WisBlock Core](https://store.rakwireless.com/collections/wisblock-core/products/rak4631-lpwan-node) as receiver using [RAK4631 P2P RX Mode Example](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/communications/LoRa/LoRaP2P#5-rx-mode)
- You can use [RAK11310 WisBlock Core](https://store.rakwireless.com/collections/wisblock-core/products/rak11310-wisblock-lpwan-module) as receiver using [RAK11310 P2P RX Mode Example](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK11300/communications/LoRa/LoRaP2P#5-rx-mode)
- You can use another [RAK11200 WisBlock Core and RAK13300 WisBlock LPWAN Module](/Product-Categories/WisBlock/RAK13300/Quickstart/#setting-up-rak13300-as-receiver) as receiver.
:::