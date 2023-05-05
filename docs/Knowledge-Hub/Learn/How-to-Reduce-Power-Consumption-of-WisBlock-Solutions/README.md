---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/reduce-power-consumption/reduce-power-consumption.png
rak_desc: A step-by-step guide on how to reduce the power consumption of WisBlock solutions.
tags:
  - WisBlock
  - Semaphores
  - FreeRTOS
  - LoRaWAN
  - LoRa
  - Tutorial
header:
  title: How to Reduce Power Consumption of WisBlock Solutions
  caption: by <b>Bernd Giesecke</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 12/01/2021 09:00 PM
---

# How to Reduce Power Consumption of WisBlock Solutions

- [How to Reduce Power Consumption of WisBlock Solutions](#how-to-reduce-power-consumption-of-wisblock-solutions)
  - [Overview](#overview)
  - [delay(milliseconds)](#delaymilliseconds)
  - [xSemaphoreTakeBinary(semaphoreHandle, portMAX\_DELAY)](#xsemaphoretakebinarysemaphorehandle-portmax_delay)
    - [How Semaphores Work](#how-semaphores-work)
    - [How to Use Semaphores to Reduce the Power Consumption](#how-to-use-semaphores-to-reduce-the-power-consumption)
    - [How to Put the LoRa Transceiver into Sleep Mode](#how-to-put-the-lora-transceiver-into-sleep-mode)
      - [LoRaWAN](#lorawan)
      - [LoRa P2P](#lora-p2p)
    - [Code Example](#code-example)
    - [Principal of the Code](#principal-of-the-code)
      - [**`_loopTask_`**](#_looptask_)
      - [**`_loraTask_`**](#_loratask_)

## Overview

While the [WisBlock Core RAK4631](https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore) is built on the low-power Nordic nRF52840 MCU and the low-power LoRa transceiver [Semtech SX1262](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1262), having both of them active all the time is not ideal for battery-supplied solutions.

This article provides two examples of how to reduce power consumption using FreeRTOS features like **tasks** and **semaphores**. The Arduino BSP for the nRF52 MCUs is a wrapper for Nordic's SDK, which is based on FreeRTOS.

Both the MCU and the LoRa transceiver offer a sleep mode that can reduce consumption significantly. However, when writing your application with the Arduino framework, it is not obvious how to use sleep mode. There is no **`sleep()`** command available.

However, there are methods provided by the underlying FreeRTOS OS that can be used to put a task to sleep. When all tasks are in sleep mode, the MCU enters low-power sleep mode. It is not as perfectly implemented as that of ESP32 MCUs where specific sleep functions can be called, but there are several methods. In your application, one uses the **`delay`** function, while the other uses **`semaphores`**.

## delay(milliseconds)

This command will put the task to sleep for x milliseconds. It may appear simple to use, but it is not very practical. Because the task cannot receive information about external events such as an interrupt from a sensor or a 9DOF sensor while in the **`delay()`** function. So, in most cases, the **`delay`** is not a viable option.

## xSemaphoreTakeBinary(semaphoreHandle, portMAX_DELAY)

Semaphores are used by FreeRTOS to control task switches and to allow tasks to **sleep** while waiting for an event. According to the [FreeRTOS documentation](https://www.freertos.org/a00113.html), there are four types of semaphores: **`binary`**, **`counting`**, **`mutex`**, and **`recursive mutex`**. In this example, we'll use the **`binary semaphore`** to keep things simple.

### How Semaphores Work

See this exerpt from the [FreeRTOS documentation](https://www.freertos.org/Embedded-RTOS-Binary-Semaphores.html):

> Think of a binary semaphore as a queue that can only hold one item. The queue can therefore only be empty or full (hence binary). Tasks and interrupts using the queue don’t care what the queue holds – they only want to know if the queue is empty or full. This mechanism can be exploited to synchronize (for example) a task with an interrupt.

> Consider the case where a task is used to service a peripheral. Polling the peripheral would be wasteful of CPU resources, and prevent other tasks from executing. It is therefore preferable that the task spends most of its time in the Blocked state (allowing other tasks to execute) and only execute itself when there is something for it to do. This is achieved using a binary semaphore by having the task Block while attempting to ‘take’ the semaphore. An interrupt routine is then written for the peripheral that just ‘gives’ the semaphore when the peripheral requires servicing. The task always ‘takes’ the semaphore (reads from the queue to make the queue empty), but never ‘gives’ it. The interrupt always ‘gives’ the semaphore (writes to the queue to make it full) but never takes it.

### How to Use Semaphores to Reduce the Power Consumption

To handle different events, we create separate tasks. When using the Arduino Framework, only one task is created: the **`loop()`** function, referred to as **`loopTask`** in the following paragraphs. In addition, we will create a second task called **`loraTask`** to handle all LoRa and LoRaWAN events.

Semaphores determine which of the two tasks is active. We define a semaphore called **`taskEvent`** for the **`loopTask`**. The task will only be active if **`taskEvent`** is available. The semaphore is made available through two different events:

   - a timer event that wakes up the **`loopTask`** every 2 minutes to send a status message
   - after receiving a packet via LoRaWAN or LoRa P2P

In addition, a second semaphore called **`loraEvent`** is created for the **`loraTask`**. The task in charge of LoRa communication will be activated only if:

- a package was received and triggered an interrupt signal
- the **`loopTask`** wants to send a package

In the example code, the **`setup()`** function takes both the **`taskEvent`** and the **`loraEvent`** semaphores before starting the **`loopTask`** and the **`loraTask`**. Once started, the two tasks will call **`xSemaphoreTake(semaphore, portMAX_DELAY)`**. The first parameter specifies the semaphore the task wants to take, and the second parameter specifies the time the task will wait for the semaphore to be available. **`portMAX_DELAY`** indicates that the function will not return until a semaphore is provided. Because the setup task has taken both semaphores, both tasks go to sleep, causing the nRF52840 to enter sleep mode.

### How to Put the LoRa Transceiver into Sleep Mode

The method for reducing power consumption differs depending on whether the [LoRaWAN protocol](https://www.rakwireless.com/en-us/technology/lorawan) or a simple LoRa P2P (point-to-point) communication is used.

#### LoRaWAN

If the application is using the LoRaWAN stack, the power consumption depends very much on which LoRaWAN class the node is configured for. As a Class A node, the LoRa transceiver is always in sleep mode. Only when the application sends a packet to the LoRaWAN server does the transceiver wake up. Because there are two RX windows defined for Class A nodes, the LoRa transceiver will enter RX mode after successfully sending the packet. These RX windows can be used by the LoRaWAN server to send a packet to the node.

But if the node is configured as a Class C node, the LoRa transceiver has to be in RX mode all the time. Because a Class C node must be able to receive a packet from the LoRaWAN server at any time, regardless of whether it has sent a package or not. As a result, configuring a node as Class C is not a good idea for battery-powered applications.

#### LoRa P2P

How much power can be saved depends on the requirements of your application.

<b>Scenario 1: Sending only</b>

In this scenario, a node is only sending a packet frequently but does not need to receive any data from the other nodes.

To maximize power savings, the LoRa transceiver is always in sleep mode. Only when the application needs to send a packet does the transceiver wake up and remain awake until the packet is sent. Then it returns to sleep mode.

<b>Scenario 2: Sending and Receiving</b>

In this scenario, the node wants to receive packets from other nodes at any time. As a result, it should remain in RX mode unless a packet is sent from the application. After a successful transmission, it will return to RX mode. The power consumption in RX mode is lower than in TX mode, but not as low as in sleep mode. To improve power consumption, Semtech implemented in the SX1262 LoRa transceiver a special RX method. This method is called **RxDutyCycle**.

- **Difference Between RX Mode and RxDutyCycle Mode**

  - In **RX mode**, the transceiver stays active all the time, listening to incoming packets.
  - In **RxDutyCycle mode**, the transceiver loops between a short RX time and a longer sleep time.

The principle of the RxDutyCycle is to put the transceiver in RX mode and listen to see if any packet preamble can be detected. If no preamble is detected, the transceiver goes into sleep mode. If a preamble is detected, the transceiver stays in RX mode to receive the complete packet and then raises the interrupt line to wake up the attached MCU.

The RX and sleep times of the RxDutyCycle must be carefully calculated based on the length of the preamble and the length of a single symbol. If the sleep period is set to be longer than the preamble length, the LoRa transceiver may miss a packet. More information can be found in the [Semtech documentation](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R0000001O3w/zsdHpRveb0_jlgJEedwalzsBaBnALfRq_MnJ25M_wtI).

You can also download and use the [SX1261 Calculator Tool](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1261#downloads), from Semtech web page, to calculate these values.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/reduce-power-consumption/lora-calculator.png" width="80%">
</p>

When you start the calculator, you can enter all the parameters for the LoRa transmission. Then, it will show you the number of symbols for the preamble and the length of a symbol.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/reduce-power-consumption/start-lora-calcu.png" width="100%">
</p>

To detect a packet's preamble, the transceiver must be in RX mode for at least two symbols and must not sleep for more than the length of the complete preamble.

The following are the formulas to calculate the time:
- RX time: `2 symbols * symbol length * 1000 * symbol time * nRF clock divider`
- Sleep time: `# of preamble symbols * symbol length * 1000 * nRF clock divider`

_**nRF clock divider**_ is fixed to 15.625
_**symbol length**_ calculated for Spreading Factor 7, Bandwidth 125&nbsp;kHz, Coding Rat 4/5 is 1.024&nbsp;ms

So the RX time is `2 * 1024 * 1000 * 15.625` and the sleep time is `10 * 1024 * 1000 * 15.625`.

### Code Example

The following are the full code examples available for both LoRaWAN and LoRa P2P:

- [LoRaWAN Deep Sleep](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/communications/LoRa/LoRaWAN/RAK4631-DeepSleep-LoRaWan)
- [LoRa P2P Deep Sleep](https://github.com/RAKWireless/WisBlock/tree/master/tutorials/RAK4631-Deep-Sleep-P2P)

### Principal of the Code

#### **`_loopTask_`**

In **`setup()`**, we create the semaphore for the **`loopTask`** and take it, so that the task does not start immediately. We also start a timer that will periodically wake up the **`loopTask`** to send its status:

```c
void setup()
{
    // Create the loopTask semaphore
    taskEvent = xSemaphoreCreateBinary();
    // Initialize semaphore
    xSemaphoreGive(taskEvent);

    ... // do other initialization

    // Start the timer that will wakeup the loop frequently
    taskWakeupTimer.begin(SLEEP_TIME, periodicWakeup);
    taskWakeupTimer.start();

    // Take the semaphore so the loop will go to sleep until an event happens
    xSemaphoreTake(taskEvent, 10);
}
```


In addition, a callback function is required that will be called by the timer. This task just gives the **`loopEvent`** semaphore and enables the **`loopTask`** to run:

```c
void periodicWakeup(TimerHandle_t unused)
{
  // Give the semaphore, so the loop task will wake up
  xSemaphoreGiveFromISR(taskEvent, pdFALSE);
}
```

In the **`loopTask,`** we try to get the semaphore, which will put the task to sleep until either a timer event or a received package gives the semaphore and starts it. After all the required processing is finished, we take the semaphore again. This will put the **`loopTask`** back to sleep:

```c
void loop()
{
    // Sleep until we are woken up by an event
    if (xSemaphoreTake(taskEvent, portMAX_DELAY) == pdTRUE)
    {

        ... // do stuff here

        // Go back to sleep
        xSemaphoreTake(taskEvent, 10);
    }
}
```


#### **`_loraTask_`**

In the LoRa initialization function, we create the semaphore for the **`loraTask`** and take it, so that the task does not start immediately.

```c
void initLoRa()
{
    // Create the LoRaWan event semaphore
	loraEvent = xSemaphoreCreateBinary();
	// Initialize semaphore
	xSemaphoreGive(loraEvent);

	... // initialize LoRa P2P

	// In deep sleep we need to hijack the SX126x IRQ to trigger a wakeup of the nRF52
	attachInterrupt(PIN_LORA_DIO_1, loraIntHandler, RISING);

	// Take the semaphore, so loop will be stopped waiting to get it
	xSemaphoreTake(loraEvent, 10);
}
```

The LoRaWan initialization looks a little bit different, as we start the **Join** procedure at the end. To handle the **Join** procedure, the **`loraTask`** has to be enabled. Therefore, we are not taking the semaphore immediately. The **`loraTask`** will start sleeping after the **Join** process has been finished.

```c
void initLoRa()
{
    // Create the LoRaWan event semaphore
	loraEvent = xSemaphoreCreateBinary();
	// Initialize semaphore
	xSemaphoreGive(loraEvent);

	... // initialize LoRa P2P

	// In deep sleep we need to hijack the SX126x IRQ to trigger a wakeup of the nRF52
	attachInterrupt(PIN_LORA_DIO_1, loraIntHandler, RISING);

	// Start Join procedure
	lmh_join();
}
```


As you can see, we are re-assigning the interrupt handler for the interrupt signal DIO1 to our own function **`loraIntHandler()`**. Normally, the interrupt signal is handled within the LoRa library, but we need to use our own interrupt handler to wake up the **`loraTask`**. The interrupt handler is only sending the semaphore so that the **`loraTask`** can wake up and handle the LoRa event.

```c
void loraIntHandler(void)
{
	// SX126x set IRQ
	if (loraEvent != NULL)
	{
		// Wake up LoRa task
		xSemaphoreGive(loraEvent);
	}
}
```

The **`loraTask`** will try to get the semaphore and start sleeping until a LoRa event happens and wakes it up, so it can handle the event:

```c
void loraTask(void *pvParamters)
{
    while(1)
    {
        if (xSemaphoreTake(loraEvent, portMAX_DELAY) == pdTRUE)
        {
            // Handle Radio events with special process command!!!!
            Radio.IrqProcessAfterDeepSleep();
        }
    }
}
```


Each of the LoRa event callback functions takes the semaphore after the LoRa event was handled and sends the **`loraTask`** back to sleep.

```c
void OnTxDone(void)
{
    // handle TX done

    // Send LoRa handler back to sleep
    xSemaphoreTake(loraEvent, 10);
}
```


In **`OnRxDone()`**, we wake up the loop task so that the received data can be handled:

```c
void OnRxDone(void)
{
    // handle RX done

    // Notify loopTask about the event
    xSemaphoreGive(taskEvent);

    // Send LoRa handler back to sleep
    xSemaphoreTake(loraEvent, 10);
}
```


As you can see, semaphores are a good tool to keep your tasks sleeping when they are not needed and help reduce the power consumption of your application.

Two examples of low power consumption that I could achieve are by using semaphores and task sleep. In both cases, the node was sending a 14-byte packet every 10 seconds. The consumption shown below is in between packets being sent. During the TX phase, these values are significantly higher.

**In LoRa P2P TX only mode: ~120&nbsp;uA**

<p align="center">
<img src="/assets/images/knowledge-hub/learn/reduce-power-consumption/tx-only-sleep.png" width="80%">
</p>

**In LoRa P2P TX/RxDutyCycle mode: ~6&nbsp;mA**

<p align="center">
<img src="/assets/images/knowledge-hub/learn/reduce-power-consumption/rxdutycycle.png" width="80%">
</p>


- The above power consumption was measured with one board – no sensors attached and six other nodes sending on the same frequency. The results will vary depending on the variances of your boards and the number of other nodes using the same frequency (for RxDutyCycle mode). <br>
- Consumption is also affected by the charging level of your battery. The lower the voltage, the higher the current.- The consumption is as well depending on the charging level of your battery. The lower the voltage, the higher the current.


:::tip 📝 NOTE:
You can download the e-book to learn more about the [WisBlock concept](https://www.rakwireless.com/en-us/company/ebook/wisblock-a-revolutionary-concept-for-agile-hardware-development?utm_campaign=RAK%20says%20Thank%20You%21%20%28VZ7iva%29&utm_medium=email&utm_source=TTN%20Survey%20Responders&_ke=).
:::