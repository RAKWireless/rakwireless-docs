# System

## RUI System Data Type

### Typedefs

typedef void(* 	RAK_TIMER_HANDLER) (void *data)

typedef void(* 	RAK_TASK_HANDLER) (void)

### Enumerations

#### RAK\_AT\_PERMISSION

The permission setting of AT command

```c
enum RAK_AT_PERMISSION
```

| Enumerator                   |                                                                                                |
|------------------------------|------------------------------------------------------------------------------------------------|
| RAK_ATCMD_PERM_READ          | Read permission allows for reading a variable data only and disables any write functionality.  |
| RAK_ATCMD_PERM_WRITE         | Write permission allows for writing a variable data only and disables any read functionality.  |
| RAK_ATCMD_PERM_WRITEONCEREAD | Special functionality that allows for setting variable once and only allows for reading after. |
| RAK_ATCMD_PERM_DISABLE       | Disables the AT command from being used.                                                       |

#### RAK\_TIMER\_ID

The RAK timer ID's

```c
enum RAK_TIMER_ID
```

| Enumerator  |            |
|-------------|------------|
| RAK_TIMER_0 | Timer # 0. |
| RAK_TIMER_1 | Timer # 1. |
| RAK_TIMER_2 | Timer # 2. |
| RAK_TIMER_3 | Timer # 3. |
| RAK_TIMER_4 | Timer # 4. |

#### RAK\_TIMER\_MODE

The RAK timer modes

```c
enum RAK_TIMER_MODE
```

| Enumerator         |                                         |
|--------------------|-----------------------------------------|
| RAK_TIMER_ONESHOT  | One shot timer, does trigger only once. |
| RAK_TIMER_PERIODIC | Repeating timer                         |

#### RUI\_WAKEUP\_TRIGGER\_MODE

The RAK timer modes

```c
enum RUI_WAKEUP_TRIGGER_MODE
```

| Enumerator              |                                    |
|-------------------------|------------------------------------|
| RUI_WAKEUP_RISING_EDGE  | RUI wakeup on rising edge of GPIO  |
| RUI_WAKEUP_FALLING_EDGE | RUI wakeup on falling edge of GPIO |

## Device Information

### Firmware Version

#### get()

This API allows the user to get the firmware version.

```c
api.system.firmwareVersion.get()
```


| **Function** | `const string get()`           |
|--------------|--------------------------------|
| **Returns**  | firmware version(Type: string) |


::: details Click to View Example
```c{8}
void setup()
{
  Serial.begin(115200);
}

void loop()
{
    Serial.printf("Firmware Version: %s\r\n", api.system.firmwareVersion.get().c_str());
    delay(1000);
}
```
:::

#### set()

This API allows the user to set the firmware version.

:::warning ⚠️ WARNING
Changing the firmware version will make the firmware incompatible with WisToolBox.
:::

```c
api.system.firmwareVersion.set(String version)
```


| **Function**    | `const string get()`                                                                                                            |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------|
| **Parameterss** | version	firmware version for user to be set(Type: String)                                                                       |
| **Returns**     | bool <br> &#x2022; **TRUE**	for successfully setting firmware version <br> &#x2022; **FALSE**	for setting firmware version fail |


::: details Click to View Example
```c{8}
void setup()
{
  Serial.begin(115200);
}

void loop()
{
    Serial.printf("Firmware Version: %s\r\n", api.system.firmwareVersion.get().c_str());
    delay(1000);
}
```
:::


### CLI Version

#### get()

This API allows the user to get the cli version.

```c
api.system.cliVersion.get()
```


| **Function** | `const string get()`      |
|--------------|---------------------------|
| **Returns**  | cli version(Type: string) |


::: details Click to View Example
```c{8}
void setup()
{
    Serial.begin(115200);
}

void loop()
{
    Serial.printf("AT Command Version: %s\r\n", api.system.cliVersion.get().c_str());
    delay(1000);
}
```
:::


#### set()

This API allows the user to set the cli version.

:::warning ⚠️ WARNING
Changing the CLI version will make the firmware **incompatible** with WisToolBox.
:::

```c
api.system.cliVersion.set()
```


| **Function**   | `bool set()`                                                                                                          |
|----------------|-----------------------------------------------------------------------------------------------------------------------|
| **Parameters** | version	cli version for user to be set(Type: String)                                                                  |
| **Returns**    | bool <br> &#x2022; **TRUE**	for successfully setting cli version <br> &#x2022; **FALSE**	for setting cli version fail |


::: details Click to View Example
```c{8}
void setup()
{
	Serial.begin(115200);
}

void loop()
{
	String version = "your version"
	api.system.cliVer.set(version);
	delay(1000);
}
```
:::


### API Version

#### get()

This API allows the user to get the API version.

```c
api.system.apiVersion.get()
```


| **Function** | `const string get()`      |
|--------------|---------------------------|
| **Returns**  | API version(Type: string) |


::: details Click to View Example
```c{8}
void setup()
{
    Serial.begin(115200);
}

void loop()
{
    Serial.printf("RUI API Version: %s\r\n", api.system.apiVersion.get().c_str());
    delay(1000);
}
```
:::

### Model ID

#### get()

This API allows the user to get the model ID.

```c
api.system.modelId.get()
```


| **Function** | `const string get()`   |
|--------------|------------------------|
| **Returns**  | model ID(Type: string) |


::: details Click to View Example
```c{8}
void setup()
{
    Serial.begin(115200);
}

void loop()
{
    Serial.printf("Model ID: %s\r\n", api.system.modelId.get().c_str());
    delay(1000);
}
```
:::

#### set()

This API allows the user to set the model ID

:::warning ⚠️ WARNING
Changing the model ID will make the firmware incompatible with WisToolBox!
:::

```c
api.system.hwModel.set(model_id)
```


| **Function**   | `const string get()`                                                                                    |
|----------------|---------------------------------------------------------------------------------------------------------|
| **Parameters** | model ID for user to be set(Type: String)                                                               |
| **Returns**    | bool <br> &#x2022; **TRUE**	for successfully set model ID <br> &#x2022; **FALSE**	for set model ID fail |


::: details Click to View Example
```c{8}
void setup()
{
    Serial.begin(115200);
}

void loop()
{
    Serial.printf("Model ID: %s\r\n", api.system.modelId.get().c_str());
    delay(1000);
}
```
:::

### Chip ID

#### get()

This API allows the user to get the chip ID.

```c
api.system.chipId.get()
```


| **Function** | `const string get()`  |
|--------------|-----------------------|
| **Returns**  | chip ID(Type: string) |


::: details Click to View Example
```c{8}
void setup()
{
    Serial.begin(115200);
}

void loop()
{
    Serial.printf("Hardware ID: %s\r\n", api.system.chipId.get().c_str());
    delay(1000);
}
```
:::

### Battery

#### get()

Gets the current battery level.

```c
api.system.bat.get()
```


| **Function** | `float get(void)` |
|--------------|-------------------|
| **Returns**  | float (Unit: V)   |


::: details Click to View Example
```c{8}
void setup()
{
    Serial.begin(115200);
}

void loop()
{
    Serial.printf("Battery Level: %f\r\n", api.system.bat.get());
    delay(1000);
}
```
:::

## Flash

### get()

Reads a range of data from user flash partition.

```c
api.system.flash.get(offset, buf, len)
```


| **Function**   | `bool get(uint32_t offset, uint8_t * buf, uint32_t len)`                                                                                                                                                                                                                                                                                                                                             |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Parameters** | **offset** - the offset to the start of user flash partition (The sum of offset and length can't exceed 0x7800. If the chip is nRF52840 (e.g. RAK4631), this limitation becomes 0x20000) <br> **buf** - the buffer for reading the data <br>**len** - the length of data (The sum of offset and length can't exceed 0x7800. If the chip is nRF52840 (e.g. RAK4631), this limitation becomes 0x20000) |
| **Returns**    | bool <br> &#x2022; **TRUE**	for reading data successfully <br> &#x2022; **FALSE** for reading data failure                                                                                                                                                                                                                                                                                           |

::: details Click to View Example
```c{8}
void setup()
{
  Serial.begin(115200);
  delay(2000);
  uint8_t flash_value[4] = {0};
  bool wr_result = false;
  uint32_t data_to_save = 12345678;
  flash_value[0] = (uint8_t)(data_to_save >> 0);
  flash_value[1] = (uint8_t)(data_to_save >> 8);
  flash_value[2] = (uint8_t)(data_to_save >> 16);
  flash_value[3] = (uint8_t)(data_to_save >> 24);

  wr_result = api.system.flash.set(0, flash_value, 4);
}

void loop()
{
  uint8_t flash_read[4] = {0};
  uint32_t flash_data = 0;

  if (api.system.flash.get(0, flash_read, 4))
  {
    flash_data |= flash_read[0] << 0;
    flash_data |= flash_read[1] << 8;
    flash_data |= flash_read[2] << 16;
    flash_data |= flash_read[3] << 24;
    Serial.println(flash_data);
  }
  else
  {
    Serial.println("Failed to read data from Flash");
  }

  delay(2000);
}
```
:::

### set()

Writes a range of data to user flash partition.

```c
api.system.flash.set(offset, buf, len)
```


| **Function**   | `bool set(uint32_t offset, uint8_t * buf, uint32_t len)`                                                                                                                                                                                                                                                                                                                                           |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Parameters** | **offset** - the offset to the start of user flash partition (The sum of offset and length can't exceed 0x7800. If the chip is nRF52840(e.g. RAK4631), this limitation becomes 0x20000) <br> **buf** - the buffer for writing the data <br>**len** - the length of data (The sum of offset and length can't exceed 0x7800. If the chip is nRF52840(e.g. RAK4631), this limitation becomes 0x20000) |
| **Returns**    | bool <br> &#x2022; **TRUE**	for writing data successfully <br> &#x2022; **FALSE** for writing data failure                                                                                                                                                                                                                                                                                         |
::: details Click to View Example
```c{8}
void setup()
{
  Serial.begin(115200);
  delay(2000);
  uint8_t flash_value[4] = {0};
  bool wr_result = false;
  uint32_t data_to_save = 12345678;
  flash_value[0] = (uint8_t)(data_to_save >> 0);
  flash_value[1] = (uint8_t)(data_to_save >> 8);
  flash_value[2] = (uint8_t)(data_to_save >> 16);
  flash_value[3] = (uint8_t)(data_to_save >> 24);

  wr_result = api.system.flash.set(0, flash_value, 4);
}

void loop()
{
  uint8_t flash_read[4] = {0};
  uint32_t flash_data = 0;

  if (api.system.flash.get(0, flash_read, 4))
  {
    flash_data |= flash_read[0] << 0;
    flash_data |= flash_read[1] << 8;
    flash_data |= flash_read[2] << 16;
    flash_data |= flash_read[3] << 24;
    Serial.println(flash_data);
  }
  else
  {
    Serial.println("Failed to read data from Flash");
  }

  delay(2000);
}
```
:::

## Timer

On RUI3 Timer API, there are two different Timer modes based on the trigger.


| **Timer Mode**     | **Comments**                 |
|--------------------|------------------------------|
| RAK_TIMER_ONESHOT  | Timer triggered one time     |
| RAK_TIMER_PERIODIC | Timer triggered periodically |

The timer control is performed via Timer ID. The Timer ID definition is shown below. 5 timers are available for the user application

| **Timer ID** | **Comments** |
|--------------|--------------|
| RAK_TIMER_0  | timer ID #0  |
| RAK_TIMER_1  | timer ID #1  |
| RAK_TIMER_2  | timer ID #2  |
| RAK_TIMER_3  | timer ID #3  |
| RAK_TIMER_4  | timer ID #4  |


### create()

```c
api.system.timer.create()
```

| **Function**   | `bool api.system.timer.create(id, handler, mode)`                                                                                                                     |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Parameters** | **id** - is the Timer ID<br>**handler** - the handler function for this Timer<br>**mode** - the mode of this Timer (**RAK_TIMER_ONESHOT** or **RAK_TIMER_PERIODIC** ) |
| **Returns**    | bool <br> &#x2022; **TRUE**	for creating Timer successfully <br> &#x2022; **FALSE** for creating Timer failure                                                        |

:::details Click to View Example
```c{10}
void handler(void *data)
{
  Serial.printf("[%lu]This is the Timer handler function\r\n", millis());
}

void setup()
{
  Serial.begin(115200);
  if (api.system.timer.create(RAK_TIMER_0, (RAK_TIMER_HANDLER)handler, RAK_TIMER_PERIODIC) != true) {
    Serial.printf("Creating timer failed.\r\n");
  } else if (api.system.timer.start(RAK_TIMER_0, 1000, NULL) != true) {
    Serial.printf("Starting timer failed.\r\n");
  }
}
```
:::

### start()

```c
api.system.timer.start()
```
| **Function**   | `bool api.system.timer.start(id, ms, data)`                                                                                         |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------|
| **Parameters** | **id** - is the Timer ID<br>**ms** - is the period of Timer (milliseconds)<br> **data** - the data passed to Timer handler function |
| **Returns**    | bool <br> &#x2022; **TRUE**	for starting  Timer successfully <br> &#x2022; **FALSE** for starting Timer failure                     |

:::details Click to View Example
```c{10}
void handler(void *data)
{
  Serial.printf("[%lu]This is the Timer handler function\r\n", millis());
}

void setup()
{
  Serial.begin(115200);
  if (api.system.timer.create(RAK_TIMER_0, (RAK_TIMER_HANDLER)handler, RAK_TIMER_PERIODIC) != true) {
    Serial.printf("Creating timer failed.\r\n");
  } else if (api.system.timer.start(RAK_TIMER_0, 1000, NULL) != true) {
    Serial.printf("Starting timer failed.\r\n");
  }
}
```
:::

### stop()

```c
api.system.timer.stop()
```
| **Function**   | `bool api.system.timer.stop(id)`                                                                             |
|----------------|--------------------------------------------------------------------------------------------------------------|
| **Parameters** | **id** - is the Timer ID                                                                                     |
| **Returns**    | bool <br> &#x2022; **TRUE**	for stoping Timer successfully <br> &#x2022; **FALSE** for stoping Timer failure |

:::details Click to View Example
```c{10}
void handler(void *data)
{
  Serial.printf("[%lu]This is the Timer handler function\r\n", millis());
}

void setup()
{
  Serial.begin(115200);
  if (api.system.timer.create(RAK_TIMER_0, (RAK_TIMER_HANDLER)handler, RAK_TIMER_PERIODIC) != true) {
    Serial.printf("Creating timer failed.\r\n");
  } else if (api.system.timer.start(RAK_TIMER_0, 1000, NULL) != true) {
    Serial.printf("Starting timer failed.\r\n");
  }
}

void loop()
{
  if (millis() > 60000) {
    if (api.system.timer.stop(RAK_TIMER_0) != true) {
      Serial.printf("Stoping timer failed.\r\n");
    }
  }
}
```
:::


## Powersave

### lpm()

This API sets and gets the low power mode

#### get()

Get current LPM settings

```c
api.system.lpm.get()
```

| **Function**   | `uint8_t get(void) 	`                                           |
|----------------|-----------------------------------------------------------------|
| **Parameters** | **id** - is the Timer ID                                        |
| **Returns**    | 1	for low power mode enabled <br> 0	for low power mode disabled |

:::details Click to View Example
```c{10}
void setup()
{
    Serial.begin(115200);

    Serial.printf("Set the low power mode %s\n\r", api.system.lpm.set(1) ? "Success" : "Fail");
}

void loop()
{
    Serial.printf("The low power mode = %d\n\r", api.system.lpm.get());

    delay(1000);
}
```

#### set()

Set current LPM settings

```c
api.system.lpm.set(uint8_t  	value)
```

| **Function**   | `bool set(uint8_t value)`                                                                                         |
|----------------|-------------------------------------------------------------------------------------------------------------------|
| **Parameters** | **value** <br> 1	for low power mode enabled <br> 0	for low power mode disabled                                    |
| **Returns**    | bool <br> &#x2022; TRUE	for setting low power mode success <br> &#x2022; FALSE	for setting low power mode failure |

:::details Click to View Example
```c{10}
void setup()
{
    Serial.begin(115200);

    Serial.printf("Set the low power mode %s\n\r", api.system.lpm.set(1) ? "Success" : "Fail");
}

void loop()
{
    Serial.printf("The low power mode = %d\n\r", api.system.lpm.get());

    delay(1000);
}
```

### cpu()

Sleeps the cpu with default no timeout.

```c
api.system.sleep.cpu();
```

| **Function**   | `void cpu(int ms_time = POWERSAVE_NO_TIMEOUT)`                          |
|----------------|-------------------------------------------------------------------------|
| **Parameters** | **ms_time(optional)** - Duration for cpu to sleep(default = no timeout) |
| **Returns**    | void                                                                    |


:::details Click to View Example
```c{7}
void setup()
{
}

void loop()
{
  api.system.sleep.cpu(1000);
}
```
:::

### lora()

Sleeps lora with default no timeout.

```c
api.system.sleep.lora();
```

| **Function**   | `void lora(int ms_time = POWERSAVE_NO_TIMEOUT)`                         |
|----------------|-------------------------------------------------------------------------|
| **Parameters** | **ms_time(optional)** - Duration for cpu to sleep(default = no timeout) |
| **Returns**    | void                                                                    |


:::details Click to View Example
```c{7}
void setup()
{
}

void loop()
{
  api.system.sleep.lora(1000);
}
```
:::

### all()

Sleeps all the component with default no timeout.

```c
api.system.sleep.all();
```

| **Function**   | `void all(int ms_time = POWERSAVE_NO_TIMEOUT)`                                    |
|----------------|-----------------------------------------------------------------------------------|
| **Parameters** | **ms_time(optional)** - Duration for all component to sleep(default = no timeout) |
| **Returns**    | void                                                                              |


:::details Click to View Example
```c{7}
void setup()
{
}

void loop()
{
  api.system.sleep.all(1000);
}
```
:::

### registerWakeupCallback()

This registers a wakeup callback function. The wakeup is triggered by an GPIO pin that is setup with `api.system.sleep.setup`.

```c
api.system.sleep.registerWakeupCallback(POWER_SAVE_HANDLER callback);
```

| **Function**   | `api.system.sleep.registerWakeupCallback(POWER_SAVE_HANDLER callback);`                                          |
|----------------|------------------------------------------------------------------------------------------------------------------|
| **Parameters** | **callback** - Pointer to the function to be called                                                              |
| **Returns**    | bool <br> &#x2022; **TRUE** = add callback function success <br> &#x2022; **FALSE** = add callback function fail |


:::details Click to View Example
```c{7}
void WakeupCallback()
  {
      Serial.printf("This is Wakeup Callback\r\n");
  }

  void setup()
  {
      Serial.begin(115200);
	  api.system.sleep.setup(RUI_WAKEUP_FALLING_EDGE, 12);
      if ( api.system.sleep.registerWakeupCallback(WakeupCallback) == false )
      {
          Serial.println("Create Wakeup Callback failed.");
      }
  }

  void loop()
  {
    api.system.sleep.cpu(1000);
  }
```
:::


### setup()

Sets up the sleep function.

```c
api.system.sleep.setup(mode, pin);
```

On sleep mode, the device wake up trigger can be configured.

| **Trigger Mode**        | **Description**                  |
|-------------------------|----------------------------------|
| RUI_WAKEUP_RISING_EDGE  | Trigger wake up on rising edge.  |
| RUI_WAKEUP_FALLING_EDGE | Trigger wake up on falling edge. |

| **Function**   | `void setup(RUI_WAKEUP_TRIGGER_MODE mode, uint32_t pin)`                                                                         |
|----------------|----------------------------------------------------------------------------------------------------------------------------------|
| **Parameters** | **mode** - This decide to use Rising or Falling trigger mode. <br> **pin** - This is the pin to be chosen as the wake up source. |
| **Returns**    | void                                                                                                                             |


:::details Click to View Example
```c{3}
void setup()
{
  api.system.sleep.setup(RUI_WAKEUP_FALLING_EDGE, 32);
}

void loop()
{
  api.system.sleep.all(1000);
}
```
:::


### lpm

This API sets and gets the low power mode of the device.

### get()

Gets up the low power mode status.

```c
uint8_t api.system.lpm.get(void);
```

| **Function** | `uint8_t get(void)`                            |
|--------------|------------------------------------------------|
| **Returns**  | **uint8_t** - Low Power Mode 0 == off, 1 == on |


:::details Click to View Example
```c{3}
void setup()
{
	Serial.begin(115200);

	Serial.printf("Set the low power mode %s\n\r", api.system.lpm.set(1) ? "Success" : "Fail");
}

void loop()
{
	Serial.printf("The low power mode = %d\n\r", api.system.lpm.get());

	delay(1000);
}
```
:::

### set()

Set up the low power mode.

```c
bool api.system.lpm.set(uint8_t value);
```

| **Function**   | `uint8_t get(void)`                                                                                             |
|----------------|-----------------------------------------------------------------------------------------------------------------|
| **Parameters** | **value** - Low Power Mode 0 == off, 1 == on                                                                    |
| **Returns**    | **bool** &#x2022; **TRUE** if low power mode could be enabled or disabled, **FALSE** if failure (not supported) |


:::details Click to View Example
```c{3}
void setup()
{
	Serial.begin(115200);

	Serial.printf("Set the low power mode %s\n\r", api.system.lpm.set(1) ? "Success" : "Fail");
}

void loop()
{
	Serial.printf("The low power mode = %d\n\r", api.system.lpm.get());

	delay(1000);
}
```
:::

<!--
### scheduler

The scheduler API allows to define tasks that are called by the schedule in ???????????????????

### create()

Create a new task.

```c
bool api.system.scheduler.task.create(char * name, RAK_TASK_HANDLER handler);
```

| **Function**   | `bool create(char * name, RAK_TASK_HANDLER handler)`                                                     |
|----------------|----------------------------------------------------------------------------------------------------------|
| **Parameters** | **name** - Task name <br> **handler** - Pointer to the task function                                     |
| **Returns**    | **bool** <br> &#x2022; TRUE for creating task successfully <br> &#x2022; FALSE for creating task failure |


:::details Click to View Example
```c{3}
void handler(void *data)
{
  Serial.printf("[%lu]This is the handler\r\n", millis());
  delay(60000);
}

void setup()
{
  Serial.begin(115200);

  if (api.system.scheduler.task.create("task1", (RAK_TASK_HANDLER)handler) != true) {
    Serial.printf("Creating new task failed.\r\n");
  }
}

void loop()
{
}
```
:::

### destroy()

Create a new task.

```c
bool api.system.scheduler.task.destroy(char* name);
```

| **Function**   | `bool destroy(char * name)`                                                                                  |
|----------------|--------------------------------------------------------------------------------------------------------------|
| **Parameters** | **name** - Task name (if not specified, current thread is destroyed)                                         |
| **Returns**    | **bool** <br> &#x2022; TRUE for destroying task successfully <br> &#x2022; FALSE for destroying task failure |


:::details Click to View Example
```c{3}
void handler(void *data)
{
  Serial.printf("[%lu]This is the handler\r\n", millis());
  delay(60000);
}

void setup()
{
  Serial.begin(115200);

  if (api.system.scheduler.task.create("task1", (RAK_TASK_HANDLER)handler) != true) {
    Serial.printf("Creating new task failed.\r\n");
  }
}

void loop()
{
  if (millis() > 60000) {
    if (api.system.scheduler.task.destroy("task1") != true) {
      Serial.printf("Destroying existing task failed.\r\n");
    }
  }
}
```
:::

## RAK Thread
The RAK Thread API allows to define threads that can ???????????????????

### RT_INIT
Initialize a RAK thread.

```c
#define RT_INIT(rt) LABEL_INIT((rt)->label)
```

::: details Click to View Example
**Example:**
```c{6}
#include "Arduino.h"
#if defined(WISBLOCK_BASE_5005) || defined(WISBLOCK_BASE_5005_O)
uint8_t ledPin = LED_BLUE;
uint8_t inputPin = WB_IO1;
#else
#warning Please set a right pin refer to the documentation
uint8_t ledPin = 0xFF;
uint8_t inputPin = 0xFF;
#endif
int buttonState;
rt rtBlink;
rt rtButton;
int blinkThread(struct rt *rt) {
    RT_BEGIN(rt);
    for (;;) {
        if (buttonState == HIGH) {
            digitalWrite(ledPin, HIGH);
            RT_SLEEP(rt, 200);
            digitalWrite(ledPin, LOW);
            RT_SLEEP(rt, 100);
        } else {
            digitalWrite(ledPin, LOW);
            RT_YIELD(rt);
        }
    }
    RT_END(rt);
}
int buttonThread(struct rt *rt) {
    RT_BEGIN(rt);
    for (;;) {
        buttonState = digitalRead(inputPin);
        RT_YIELD(rt);
    }
    RT_END(rt);
}
void setup()
{
    Serial.begin(115200);
    Serial.println("RAKwireless RAK Thread Example");
    Serial.println("------------------------------------------------------");
    pinMode(ledPin, OUTPUT);
    pinMode(inputPin, INPUT);
    buttonState = digitalRead(inputPin);
    RT_INIT(&rtBlink);
    RT_INIT(&rtButton);
}
void loop()
{
    RT_SCHEDULE(blinkThread(&rtBlink));
    RT_SCHEDULE(buttonThread(&rtButton));
}
```
:::

### RT_BEGIN
Begin a RAK thread.

```c
#define RT_BEGIN(rt) {char RT_YIELD_FLAG = 1; LABEL_RESUME((rt)->label)}
```

::: details Click to View Example
**Example:**
```c{6}
#include "Arduino.h"
#if defined(WISBLOCK_BASE_5005) || defined(WISBLOCK_BASE_5005_O)
uint8_t ledPin = LED_BLUE;
uint8_t inputPin = WB_IO1;
#else
#warning Please set a right pin refer to the documentation
uint8_t ledPin = 0xFF;
uint8_t inputPin = 0xFF;
#endif
int buttonState;
rt rtBlink;
rt rtButton;
int blinkThread(struct rt *rt) {
    RT_BEGIN(rt);
    for (;;) {
        if (buttonState == HIGH) {
            digitalWrite(ledPin, HIGH);
            RT_SLEEP(rt, 200);
            digitalWrite(ledPin, LOW);
            RT_SLEEP(rt, 100);
        } else {
            digitalWrite(ledPin, LOW);
            RT_YIELD(rt);
        }
    }
    RT_END(rt);
}
int buttonThread(struct rt *rt) {
    RT_BEGIN(rt);
    for (;;) {
        buttonState = digitalRead(inputPin);
        RT_YIELD(rt);
    }
    RT_END(rt);
}
void setup()
{
    Serial.begin(115200);
    Serial.println("RAKwireless RAK Thread Example");
    Serial.println("------------------------------------------------------");
    pinMode(ledPin, OUTPUT);
    pinMode(inputPin, INPUT);
    buttonState = digitalRead(inputPin);
    RT_INIT(&rtBlink);
    RT_INIT(&rtButton);
}
void loop()
{
    RT_SCHEDULE(blinkThread(&rtBlink));
    RT_SCHEDULE(buttonThread(&rtButton));
}
```
:::

### RT_END
End a RAK thread.

```c
#define RT_END(rt) 	{LABEL_END((rt)->label); RT_YIELD_FLAG = 0; RT_INIT(rt); return RT_ENDED; }
```

::: details Click to View Example
**Example:**
```c{6}
#include "Arduino.h"
#if defined(WISBLOCK_BASE_5005) || defined(WISBLOCK_BASE_5005_O)
uint8_t ledPin = LED_BLUE;
uint8_t inputPin = WB_IO1;
#else
#warning Please set a right pin refer to the documentation
uint8_t ledPin = 0xFF;
uint8_t inputPin = 0xFF;
#endif
int buttonState;
rt rtBlink;
rt rtButton;
int blinkThread(struct rt *rt) {
    RT_BEGIN(rt);
    for (;;) {
        if (buttonState == HIGH) {
            digitalWrite(ledPin, HIGH);
            RT_SLEEP(rt, 200);
            digitalWrite(ledPin, LOW);
            RT_SLEEP(rt, 100);
        } else {
            digitalWrite(ledPin, LOW);
            RT_YIELD(rt);
        }
    }
    RT_END(rt);
}
int buttonThread(struct rt *rt) {
    RT_BEGIN(rt);
    for (;;) {
        buttonState = digitalRead(inputPin);
        RT_YIELD(rt);
    }
    RT_END(rt);
}
void setup()
{
    Serial.begin(115200);
    Serial.println("RAKwireless RAK Thread Example");
    Serial.println("------------------------------------------------------");
    pinMode(ledPin, OUTPUT);
    pinMode(inputPin, INPUT);
    buttonState = digitalRead(inputPin);
    RT_INIT(&rtBlink);
    RT_INIT(&rtButton);
}
void loop()
{
    RT_SCHEDULE(blinkThread(&rtBlink));
    RT_SCHEDULE(buttonThread(&rtButton));
}
```
:::

### RT_WAIT_UNTIL
Yield CPU while the conditon is false.

```c
#define RT_WAIT_UNTIL(rt, condition) do { LABEL_SET((rt)->label); if(!(condition)) { return RT_WAITING; } } while(0)
```

::: details Click to View Example
**Example:**
```c{6}
// NONE
```
:::

### RT_WAIT_WHILE
Yield CPU while the conditon is true.

```c
#define RT_WAIT_WHILE(rt, cond) RT_WAIT_UNTIL((rt), !(cond))
```

::: details Click to View Example
**Example:**
```c{6}
// NONE
```
:::

#### RT_WAIT_THREAD
Yield CPU while the conditon is true.

```c
#define RT_WAIT_THREAD(rt, thread) RT_WAIT_WHILE((rt), RT_SCHEDULE(thread))
```

::: details Click to View Example
**Example:**
```c{6}
// NONE
```
:::

### RT_SPAWN
Spawn a new RAK thread.

```c
#define RT_SPAWN(rt, child, thread) do { RT_INIT((child)); RT_WAIT_THREAD((rt), (thread)); } while(0)
```

::: details Click to View Example
**Example:**
```c{6}
// NONE
```
:::

### RT_RESTART
Restart a RAK thread.

```c
#define RT_RESTART(rt) 	do {  RT_INIT(rt); return RT_WAITING; } while(0)
```

::: details Click to View Example
**Example:**
```c{6}
// NONE
```
:::

### RT_SCHEDULE
Schedule a RAK thread to run.

```c
#define RT_SCHEDULE(f) ((f) < RT_EXITED)
```

::: details Click to View Example
**Example:**
```c{6}
// NONE
```
:::

### RT_YIELD
Yield CPU time.

```c
#define RT_YIELD(rt) do { RT_YIELD_FLAG = 0; LABEL_SET((rt)->label); if(RT_YIELD_FLAG == 0) { return RT_YIELDED; } } while(0)
```

::: details Click to View Example
**Example:**
```c{6}
// NONE
```
:::

### RT_YIELD_UNTIL
Yield CPU time until the condition is false.

```c
#define RT_YIELD_UNTIL(rt, cond) do { RT_YIELD_FLAG = 0; LABEL_SET((rt)->label); if((RT_YIELD_FLAG == 0) || !(cond)) { return RT_YIELDED; } } while(0)
```

::: details Click to View Example
**Example:**
```c{6}
// NONE
```
:::

### RT_SLEEP
Yield CPU time for a period of time.

```c
#define RT_SLEEP(rt, delay) { do { static unsigned long protothreads_sleep; protothreads_sleep = millis(); RT_WAIT_UNTIL(rt, millis() - protothreads_sleep > delay); } while(false); }
```

::: details Click to View Example
**Example:**
```c{6}
// NONE
```
:::

-->

# Misc

### pword

Allows the application to lock the default Serial port and protect it with a password

#### set

This API allows the user to set a 1~8 digits password to lock the default serial.

```c
api.system.pword.set(passwd_Str);
```
```c
api.system.pword.set(passwd_Char, len);
```


| **Function**   | `bool set(char * passwd_Char, size_t len)` `bool set(char * passwd_Str, size_t len)`                                                                                     |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Parameters** | **passwd_Str** - a string to set for unlocking the device <br> **passwd_Char** - a char array to set for unlocking the device <br> **len** -	the length of your password |
| **Returns**    | **bool** <br> - **TRUE** - for successfully set a password  <br> - **FALSE** - for set a password failure                                                                |

::: details Click to View Example
**Example:**
```c{6}
int loopCount = 0;

void setup()
{
  String password = "12345678";
  api.system.pword.set(password); // set the password to 12345678
  api.system.pword.lock();        // lock the default port
}

void loop()
{
  loopCount++;

  if (loopCount == 60)
    api.system.pword.unlock();   // unlock the default port after 60 seconds

  delay(1000);
}
```
:::

#### lock

This API allows the user to lock the default serial with the pass set in `api.system.pword.set()`.

```c
api.system.pword.lock();
```


| **Function** | `void lock(void)` |
|--------------|-------------------|
| **Returns**  | void              |

::: details Click to View Example
**Example:**
```c{6}
int loopCount = 0;

void setup()
{
  String password = "12345678";
  api.system.pword.set(password); // set the password to 12345678
  api.system.pword.lock();        // lock the default port
}

void loop()
{
  loopCount++;

  if (loopCount == 60)
    api.system.pword.unlock();   // unlock the default port after 60 seconds

  delay(1000);
}
```
:::

#### unlock

This API allows the user to unlock the default serial without password when it is locked.

```c
api.system.pword.unlock();
```


| **Function** | `void unlock(void)` |
|--------------|---------------------|
| **Returns**  | void                |

::: details Click to View Example
**Example:**
```c{6}
int loopCount = 0;

void setup()
{
  String password = "12345678";
  api.system.pword.set(password); // set the password to 12345678
  api.system.pword.lock();        // lock the default port
}

void loop()
{
  loopCount++;

  if (loopCount == 60)
    api.system.pword.unlock();   // unlock the default port after 60 seconds

  delay(1000);
}
```
:::

### alias

#### set()

Sets the alias name for device.

```c
api.system.alias.set(buf, len)
```

| **Function**   | `bool set(char* buf , uint32_t len)`                                                                         |
|----------------|--------------------------------------------------------------------------------------------------------------|
| **Parameters** | **buf** - the buffer to set alias name <br> **len** - the length of alias name(<= 16 bytes)                  |
| **Returns**    | &#x2022; **TRUE**	for setting alias name successfully <br> &#x2022; **FALSE**	for setting alias name failure |

::: tip 📝 NOTE
Then length `len` on setting the alias must be the same on the size of the alias name.
:::

:::details Click to View Example
```c{4}
void setup()
{
    Serial.begin(115200);
    api.system.alias.set("my device",9);
    char buf[16];
    Serial.println(api.system.alias.get(buf,16));
    Serial.println(buf);
}
void loop()
{
}
```
:::

#### get()

Gets the alias name for device.

```c
api.system.alias.get(buf, len)
```

| **Function**   | `bool get(char* buf , uint32_t len)`                                                                         |
|----------------|--------------------------------------------------------------------------------------------------------------|
| **Parameters** | **buf** - the buffer to get alias name <br> **len** - the length of alias name(<= 16 bytes)                  |
| **Returns**    | &#x2022; **TRUE**	for getting alias name successfully <br> &#x2022; **FALSE**	for getting alias name failure |

:::details Click to View Example
```c
void setup()
{
    Serial.begin(115200);
    api.system.alias.set("my device",9);
    char buf[16];
    Serial.println(api.system.alias.get(buf,16));
    Serial.println(buf);
}
void loop()
{
}
```
:::

### atMode

#### add()

Provides developers to create AT CMD.

```c
api.system.atMode.add(cmd, usage, title, handle, perm)
```

| **Function**   | `bool add(char *cmd, char *usage, char *title, PF_handle handle,unsigned int perm = RAK_ATCMD_PERM_WRITE                                                                                                  | RAK_ATCMD_PERM_READ);`                        |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Parameters** | &#x2022; **cmd** - the cmd to define cmd name <br> &#x2022; **usage** - the cmd usage <br> &#x2022; **title** - the cmd title <br> &#x2022; **handle** - the handler that this command will execute <br> &#x2022; **perm**	- the cmd execution permission |


:::details Click to View Example
```c
uint32_t led_status;

int led_handle(SERIAL_PORT port, char *cmd, stParam *param) {
    if (param->argc == 1 && !strcmp(param->argv[0], "?")) {
        Serial.print(cmd);
        Serial.print("=");
        Serial.println(led_status?"HIGH":"LOW");
    } else if (param->argc == 1) {
        for (int i = 0 ; i < strlen(param->argv[0]) ; i++) {
            if (!isdigit(*(param->argv[0]+i))) {
                return AT_PARAM_ERROR;
            }
        }

        led_status = strtoul(param->argv[0], NULL, 10);
        if (led_status != 0 && led_status != 1) {
            return AT_PARAM_ERROR;
        }

        pinMode(GREEN_LED, OUTPUT);
        pinMode(BLUE_LED, OUTPUT);
        digitalWrite(GREEN_LED, (led_status == 1)?HIGH:LOW);
        digitalWrite(BLUE_LED, (led_status == 1)?HIGH:LOW);
    } else {
        return AT_PARAM_ERROR;
    }

    return AT_OK;
}

void setup()
{
    api.system.atMode.add("LED", "This controls both green and blue LEDs.", "LED", led_handle, RAK_ATCMD_PERM_WRITE | RAK_ATCMD_PERM_READ);
}

void loop()
{
}
```
:::


### CHANGE\_ATCMD\_PERM

Changes AT command permission.

PERMISSION LEVEL:
* `RAK_ATCMD_PERM_READ`
* `RAK_ATCMD_PERM_WRITE`
* `RAK_ATCMD_PERM_WRITEONCEREAD`,
* `RAK_ATCMD_PERM_DISABLE`

AT commands' default permission are `RAK_ATCMD_PERM_READ | RAK_ATCMD_PERM_WRITE`.

```c
#define CHANGE_ATCMD_PERM(_atcmd_name, _atcmd_perm)
```

**Value:**
```c
    ATCMD_ITEM(atcmd_queue, atcmd_permission_item UNIQUE_NAME(permissions)) =   \
    {                                       \
    .atcmd_id = _atcmd_name,                \
    .permission = _atcmd_perm,              \
    }
```

:::details Click to View Example
```c
CHANGE_ATCMD_PERM("AT+APPKEY", RAK_ATCMD_PERM_READ);
CHANGE_ATCMD_PERM("AT+APPSKEY", RAK_ATCMD_PERM_WRITE);
CHANGE_ATCMD_PERM("AT+DEVADDR", RAK_ATCMD_PERM_WRITEONCEREAD);
CHANGE_ATCMD_PERM("AT+APPEUI", RAK_ATCMD_PERM_DISABLE);
CHANGE_ATCMD_PERM("AT+NETID", RAK_ATCMD_PERM_READ | RAK_ATCMD_PERM_WRITE);
CHANGE_ATCMD_PERM("AT+ALIAS", RAK_ATCMD_PERM_READ | RAK_ATCMD_PERM_WRITE);
CHANGE_ATCMD_PERM("AT+HWID", RAK_ATCMD_PERM_READ | RAK_ATCMD_PERM_WRITE);

void setup()
{
}

void loop()
{
}
```
:::


### reboot()


```c
api.system.reboot()
```

| **Function** | `void reboot()` |
|--------------|-----------------|
| **Returns**  | void            |


:::details Click to View Example
```c{12}
int loopCount = 0;

void setup()
{
}

void loop()
{
  loopCount++;

  if(loopCount == 60)
    api.system.reboot();  // Reboot after 60 seconds

  delay(1000);
}
```
:::


### restoreDefault()


```c
api.system.restoreDefault()
```

| **Function** | `void restoreDefault()` |
|--------------|-------------------------|
| **Returns**  | void                    |


:::details Click to View Example
```c{3}
void setup()
{
  api.system.restoreDefault();
}

void loop()
{
}
:::
