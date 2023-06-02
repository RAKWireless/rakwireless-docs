# System

## RUI System Data Type

### RAK\_AT\_PERMISSION

The permission setting of AT command

```c
enum RAK_AT_PERMISSION
```

| Enumerator                   |                                                                                                |
| ---------------------------- | ---------------------------------------------------------------------------------------------- |
| RAK_ATCMD_PERM_READ          | Read permission allows for reading a variable data only and disables any write functionality.  |
| RAK_ATCMD_PERM_WRITE         | Write permission allows for writing a variable data only and disables any read functionality.  |
| RAK_ATCMD_PERM_WRITEONCEREAD | Special functionality that allows for setting variable once and only allows for reading after. |
| RAK_ATCMD_PERM_DISABLE       | Disables the AT command from being used.                                                       |

## Device Information
### Firmware Version

#### get()

This api allows user to get the firmware version.

```c
api.system.firmwareVersion.get()
```


| **Function** | `const string get()`           |
| ------------ | ------------------------------ |
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

### CLI Version

#### get()

This api allows user to get the cli version.

```c
api.system.cliVersion.get()
```


| **Function** | `const string get()`      |
| ------------ | ------------------------- |
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


### API Version

#### get()

This api allows user to get the api version.

```c
api.system.apiVersion.get()
```


| **Function** | `const string get()`      |
| ------------ | ------------------------- |
| **Returns**  | api version(Type: string) |


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

This api allows user to get the mode ID.

```c
api.system.modelId.get()
```


| **Function** | `const string get()`   |
| ------------ | ---------------------- |
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

### Chip ID

#### get()

This api allows user to get the chip ID.

```c
api.system.chipId.get()
```


| **Function** | `const string get()`  |
| ------------ | --------------------- |
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
| ------------ | ----------------- |
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


| **Function**   | `bool get(uint32_t offset, uint8_t * buf, uint32_t len)`                                                                                                                                                                                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **offset** the offset to the start of user flash partition (The sum of offset and length can't exceed 0x7800. If the chip is nRF52840(e.g. RAK4631), this limitation becomes 0x20000) <br> **buf** the buffer for reading the data <br>**len**the length of data (The sum of offset and length can't exceed 0x7800. If the chip is nRF52840(e.g. RAK4631), this limitation becomes 0x20000) |
| **Returns**    | **TRUE**	for reading data successfully <br> **FALSE** for reading data failure                                                                                                                                                                                                                                                                                                              |
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

Writes a range of data from user flash partition.

```c
api.system.flash.set(offset, buf, len)
```


| **Function**   | `bool set(uint32_t offset, uint8_t * buf, uint32_t len)`                                                                                                                                                                                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **offset** the offset to the start of user flash partition (The sum of offset and length can't exceed 0x7800. If the chip is nRF52840(e.g. RAK4631), this limitation becomes 0x20000) <br> **buf** the buffer for writing the data <br>**len**the length of data (The sum of offset and length can't exceed 0x7800. If the chip is nRF52840(e.g. RAK4631), this limitation becomes 0x20000) |
| **Returns**    | **TRUE**	for writing data successfully <br> **FALSE** for writing data failure                                                                                                                                                                                                                                                                                                              |
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
| ------------------ | ---------------------------- |
| RAK_TIMER_ONESHOT  | Timer triggered one time     |
| RAK_TIMER_PERIODIC | Timer triggered periodically |

The timer control is performed via Timer ID. The Timer ID definition is shown below.

| **Timer ID** | **Comments** |
| ------------ | ------------ |
| RAK_TIMER_0  | timer ID #0  |
| RAK_TIMER_1  | timer ID #1  |
| RAK_TIMER_2  | timer ID #2  |
| RAK_TIMER_3  | timer ID #3  |
| RAK_TIMER_4  | timer ID #4  |


### create()

```c
api.system.timer.create()
```

| **Function**   | `bool api.system.timer.create(id, handler, mode)`                                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **id** is the Timer ID<br>**handler** the handler function for this Timer<br>**mode** the mode of this Timer (**RAK_TIMER_ONESHOT** or **RAK_TIMER_PERIODIC** ) |
| **Returns**    | **TRUE**	for creating Timer successfully <br> **FALSE** for creating Timer failure                                                                              |

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
| **Function**   | `bool api.system.timer.start(id, ms, data)`                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Parameters** | **id**  is the Timer ID<br>**ms** is the period of Timer (milliseconds)<br> **data** the data passed to Timer handler function |
| **Returns**    | **TRUE**	for starting  Timer successfully <br> **FALSE** for starting Timer failure                                            |

### stop()

```c
api.system.timer.stop()
```
| **Function**   | `bool api.system.timer.stop(id)`                                                 |
| -------------- | -------------------------------------------------------------------------------- |
| **Parameters** | **id**  is the Timer ID                                                          |
| **Returns**    | **TRUE**	for stoping Timer successfully <br> **FALSE** for stoping Timer failure |


## Powersave

### cpu()

Sleeps the cpu with default no timeout.

```c
api.system.sleep.cpu();
```

| **Function**   | `void cpu(int ms_time = POWERSAVE_NO_TIMEOUT)`                          |
| -------------- | ----------------------------------------------------------------------- |
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
| -------------- | ----------------------------------------------------------------------- |
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
| -------------- | --------------------------------------------------------------------------------- |
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

### setup()

Sets up the sleep function.

```c
api.system.sleep.setup(mode);
```

On sleep mode, the device wake up trigger can be configured.

| **Trigger Mode**        | **Description**                      |
| ----------------------- | ------------------------------------ |
| RUI_WAKEUP_RISING_EDGE  | Trigger wake up during rising edge.  |
| RUI_WAKEUP_FALLING_EDGE | Trigger wake up during falling edge. |

| **Function**   | `void setup(RUI_WAKEUP_TRIGGER_MODE mode, uint32_t pin)`                                                                         |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **mode** - This decide to use Rising or Falling trigger mode. <br> **pin** - This is the pin to be chosen as the wake up source. |
| **Returns**    | void                                                                                                                             |


:::details Click to View Example
```c{3}
void setup()
{
  api.system.sleep.setup(RUI_WAKEUP_FALLING_EDGE);
}

void loop()
{
  api.system.sleep.all(1000);
}
```
:::


## Serial

### pword
#### set()

This api allows user to set a 1~8 digits password to lock the default serial.

```c
api.system.pword.set(passwd_Str)
```

```c
api.system.pword.set(passwd_Char, len)
```

| **Function**   | `bool set(char * passwd, uint32_t len)`                                                                                                                                                   |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **passwd_Str** - the password to lock the Default Serial(Type: string) <br> **passwd_Char** - the password to lock the Default Serial(Type: char *) <br> **len** - the length of password |
| **Returns**    | **TRUE**	successfully set a password <br> **FALSE**	failed to set a password                                                                                                              |


:::details Click to View Example
```c{6}
int loopCount = 0;

void setup()
{
  string password = "12345678";
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


#### lock()

This api allows user to lock the default serial with the pass set in `api.system.pword.set()`.

::: tip 📝 NOTE
If you never set a password successfully, the default password will be **00000000**.
:::

```c
api.system.pword.lock()
```

| **Function** | `void lock(void)` |
| ------------ | ----------------- |
| **Returns**  | void              |


:::details Click to View Example
```c{7}
int loopCount = 0;

void setup()
{
    string password = "12345678";
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


#### unlock()
This api allows user to unlock the default serial without password when its locked.

```c
api.system.pword.unlock()
```

| **Function** | `void unlock(void)` |
| ------------ | ------------------- |
| **Returns**  | void                |


:::details Click to View Example
```c{15}
int loopCount = 0;

void setup()
{
    string password = "12345678";
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



## Misc

### alias

#### set()

Sets the alias name for device.

```c
api.system.alias.set(buf, len)
```

| **Function**   | `bool set(char* buf , uint32_t len)`                                                        |
| -------------- | ------------------------------------------------------------------------------------------- |
| **Parameters** | **buf** - the buffer to set alias name <br> **len** - the length of alias name(<= 16 bytes) |
| **Returns**    | **TRUE**	for setting alias name successfully <br> **FALSE**	for setting alias name failure  |

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

| **Function**   | `bool get(char* buf , uint32_t len)`                                                        |
| -------------- | ------------------------------------------------------------------------------------------- |
| **Parameters** | **buf** - the buffer to get alias name <br> **len** - the length of alias name(<= 16 bytes) |
| **Returns**    | **TRUE**	for getting alias name successfully <br> **FALSE**	for getting alias name failure  |

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

| **Function**   | `bool add(char *cmd, char *usage, char *title, PF_handle handle,unsigned int perm = RAK_ATCMD_PERM_WRITE                                                                                                  | RAK_ATCMD_PERM_READ);` |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **cmd** - the cmd to define cmd name <br> **usage** - the cmd usage <br> **title** - the cmd title <br> **handle** - the handler that this command will execute <br>**perm**	the cmd execution permission |


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
* `RAK_ATCMD_PERM_READ`, `RAK_ATCMD_PERM_WRITE`, `RAK_ATCMD_PERM_WRITEONCEREAD`, `RAK_ATCMD_PERM_DISABLE` AT commands' default permission are `RAK_ATCMD_PERM_READ | RAK_ATCMD_PERM_WRITE`.

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
| ------------ | --------------- |
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
| ------------ | ----------------------- |
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
