# BLE

### Devices that support RUI3 BLE API

| RAK Modules                                                                       |
|-----------------------------------------------------------------------------------|
| <a href="/Product-Categories/WisDuo/RAK4630-Module" target="_blank">RAK4630</a>   |
| <a href="/Product-Categories/WisDuo/RAK11720-Module" target="_blank">RAK11720</a> |

## RUI BLE Data Type

### Enumerations

#### RAK\_BLE\_SERVICE\_MODE

```c
enum RAK_BLE_SERVICE_MODE
```

| Mode                 | Comment                 |
|----------------------|-------------------------|
| RAK_BLE_UART_MODE    | Switch to BLE UART mode |
| RAK_BLE_SERVICE_MODE | Switch to Beacon Mode.  |

#### RAK\_CHARS\_SECURITY\_REQ


```c
enum RAK_CHARS_SECURITY_REQ
```

| Mode                  | Comment                                                                                    |
|-----------------------|--------------------------------------------------------------------------------------------|
| RAK_SET_OPEN          | Set <code>sec_mode</code> pointed to by ptr to require no protection, open link.           |
| RAK_SET_ENC_NO_MITM   | Set <code>sec_mode</code> pointed to by ptr to require encryption, but no MITM protection. |
| RAK_SET_ENC_WITH_MITM | Set <code>sec_mode</code> pointed to by ptr to require encryption and MITM protection.     |


### RAK\_CHARS\_PROPERTIES

| Property             | Comment                                       |
|----------------------|-----------------------------------------------|
| RAK_CHR_PROPS_READ   | Set the characteristic property to be Read.   |
| RAK_CHR_PROPS_NOTIFY | Set the characteristic property to be Notify. |

### BLE\_HANDLER

```c
typedef void(* BLE_HANDLER) (void)
```

### Event

```c
enum Event
```
<table>
<thead>
  <tr>
    <th colspan="2">Enumerator</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>BLE_CONNECTED </td>
    <td>Set callback for connection event.</td>
  </tr>
  <tr>
    <td>BLE_DISCONNECTED  </td>
    <td>Set callback for disconnect event.</td>
  </tr>
</tbody>
</table>


## BLE

The following commands are the generic BLE commands:

### stop()

Disconnect an existing BLE connection.

```c
api.ble.stop()
```

| **Function** | `void stop(void)` |
|--------------|-------------------|
| **Returns**  | void              |

### registerCallback

Set a callback function when a bluetooth connection is established or disconnected.

```c
api.ble.registerCallback()
```

| **Function**   | `void registerCallback (Event event, BLE_HANDLER callback)`                       |
|----------------|-----------------------------------------------------------------------------------|
| **Parameters** | **event** - set connect or disconnect event <br> **callback** - callback function |
| **Returns**    | void                                                                              |

## BLE UART

::: tip 📝 NOTE
Serial6 is the UART interface for BLE. To enable AT commands via BLE, you can use `Serial6.begin(115200, RAK_AT_MODE);`.
:::

### start()

This API is used to start the BLE UART Service.

```c
api.ble.uart.start()
```


| **Function**   | `void start(uint8_t adv_time)`                                                   |
|----------------|----------------------------------------------------------------------------------|
| **Parameters** | **adv_time** - advertising timeout in seconds. If x = 0, advertising never stops |
| **Returns**    | void                                                                             |


### stop()

This API is used to stop the BLE UART Service.

```c
api.ble.uart.stop()
```


| **Function** | `void stop(void)` |
|--------------|-------------------|
| **Returns**  | void              |

::: details Click to View Example
```c{3}
void setup()
{
  api.ble.uart.stop();
}

void loop()
{
}
```
:::


### available()

This API is used to check if there is any incoming Byte from BLE UART Service.

```c
api.ble.uart.available()
```


| **Function**      | `bool available(void)`                                                      |
|-------------------|-----------------------------------------------------------------------------|
| **Returns**       | bool                                                                        |
| **Return Values** | **TRUE** - receive data from the ble device <br> **FALSE** - nothing to get |

### read()

This API is used to read incoming Byte from BLE UART Service.

```c
api.ble.uart.read()
```

| **Function** | `char read(void)`                                              |
|--------------|----------------------------------------------------------------|
| **Returns**  | The first byte of incoming BLE data available (Type: **char**) |

### write()

This API is used to write data and send it to the connected device via BLE.

```c
api.ble.uart.write(data, size)
```

| **Function**   | `void write(uint8_t * data, uint16_t size = 6)`                                                                            |
|----------------|----------------------------------------------------------------------------------------------------------------------------|
| **Parameters** | **data** - an array to send as a series of bytes <br> **size** - length of the data that will be written to the ble device |
| **Returns**    | void                                                                                                                       |

### setPIN()

This API is used to set the passkey with BLE pairing.

```c
api.ble.uart.setPIN(key, size)
```

| **Function**   | `void setPIN(uint8_t * key, uint16_t size)`                                                            |
|----------------|--------------------------------------------------------------------------------------------------------|
| **Parameters** | **key** - the key to set the passkey (6 digits only) <br> **size** - the length of key (can only be 6) |
| **Returns**    | void                                                                                                   |

### setPermission()

This API is used to access BLE UART to require man-in-the-middle protection.

```c
api.ble.uart.setPermission(permission)
```

| **Function**   | `void setPermission(RAK_CHARS_SECURITY_REQ permission)`                                                                                  |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------|
| **Parameters** | **permission** - This will cause apps to perform pairing with static PIN you set <br> `RAK_SET_ENC_WITH_MITM` <br> `RAK_SET_ENC_NO_MITM` |
| **Returns**    | void                                                                                                                                     |

## BLE Setting

### mac

#### get()

This API is used to get the current Device MAC Address.

```c
api.ble.mac.get()
```

```c
api.ble.mac.get(pos)
```

::: tip 📝 NOTE
If MAC is 6 bytes and x is passed as 2, the return value will be position [2] in the array. If x is NOT passed, the function will default to returning a string, all uppercase.

:::

| **Function**   | `char* get(uint8_t pos)`              |
|----------------|---------------------------------------|
| **Parameters** | **pos** - single byte, array location |
| **Returns**    | The current BLE MAC Address           |



### txPower

#### set()

This API is used to set the current transmit power level for the module's radio.

```c
api.ble.settings.txPower.set(txpwr)
```


| **Function**      | `bool set(int8_t txpwr)`                                                                                                                               |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Parameters**    | **txpwr** - The TX power level (dBm), which can be one of the following values (from lowest to higher transmit power): 0~8, -4, -8, -12, -16, -20, -40 |
| **Returns**       | bool                                                                                                                                                   |
| **Return Values** | **TRUE** for success SET <br> **FALSE** for SET fail                                                                                                   |


#### get()

This API is used to get the current transmit power level (in dBm).

```c
api.ble.settings.txPower.get()
```


| **Function** | `int8_t get()`             |
| ------------ | -------------------------- |
| **Returns**  | The current transmit power |

### advertiseInterval

#### set()

This API is used to set the time interval between two consecutive advertisements of Bluetooth low energy peripherals.

```c
api.ble.settings.advertiseInterval.set(adv_interval)
```


| **Function**      | `bool set	(int32_t adv_interval`                     |
|-------------------|------------------------------------------------------|
| **Parameters**    | **adv_interval** 1000&nbsp;ms ~ 10240&nbsp;ms        |
| **Returns**       | bool                                                 |
| **Return Values** | **TRUE** for success SET <br> **FALSE** for SET fail |


#### get()

This API is used to get the current advertisement interval.

```c
api.ble.settings.advertiseInterval.get()
```


| **Function** | `int32_t get()`                                                          |
|--------------|--------------------------------------------------------------------------|
| **Returns**  | Return the current advertisement interval (1000&nbsp;ms ~ 10240&nbsp;ms) |


### broadcastName

#### set()

This API sets the name for this device. It is used in advertisement and as the Device Name available to a connected peer.

```c
api.ble.settings.broadcastName.set(ble_name, device_name_length)
```


| **Function**      | `bool set(char *ble_name, uint8_t device_name_length)`                                                                             |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **Parameters**    | **ble_name** - setting device name an array of data to send as bytes <br> **device_name_length** - the number of bytes to transmit |
| **Returns**       | bool                                                                                                                               |
| **Return Values** | **TRUE** for success SET <br> **FALSE** for SET fail                                                                               |



#### get()

This API is used to get the current BLE device name.

```c
api.ble.settings.broadcastName.get()
```


| **Function** | `char* get()`               |
| ------------ | --------------------------- |
| **Returns**  | The current BLE Device Name |


### RAKBleAdvertise

#### start()

This API is used to start advertising after configuring the BLE settings.

```c
api.ble.advertise.start(adv_time)
```


| **Function**       | `bool start(uint8_t adv_time)`                                                      |
|--------------------|-------------------------------------------------------------------------------------|
| **Parameters**     | **adv_time** - advertising timeout in seconds. If x = 0, advertising never stops.   |
| **Returns**        | bool                                                                                |
| **Returns Values** | **TRUE**	for start advertising success <br> **FALSE** for start advertising failure |


#### stop()

This API is used to stop advertising.

```c
api.ble.advertise.stop()
```

| **Function**       | `bool stop()`                                                                     |
|--------------------|-----------------------------------------------------------------------------------|
| **Returns**        | bool                                                                              |
| **Returns Values** | **TRUE**	for stop advertising success <br> **FALSE** for stop advertising failure |


::: details Click to View Example
```c{3}
void setup()
{
  api.ble.advertise.stop();
}

void loop()
{
}
```
:::


#### status()

```c
api.ble.advertise.status()
```


| **Function**       | `bool status()`                                                                           |
|--------------------|-------------------------------------------------------------------------------------------|
| **Returns**        | bool                                                                                      |
| **Returns Values** | **TRUE**	- the device is in advertising <br> **FALSE** -  the device stops in advertising |
|                    |



### bleMode()

This API is used to support the current BLE UART Service mode switch to beacon mode.

```c
api.ble.settings.blemode(ble_mode)
```


| **Function**   | `void blemode(RAK_BLE_SERVICE_MODE ble_mode)` |
|----------------|-----------------------------------------------|
| **Parameters** | **ble_mode**	`RAK_BLE_BEACON_MODE`            |
| **Returns**    | void                                          |

## Beacon Mode

### iBeacon

#### uuid

##### set()

Application developers should define a UUID specific to their app and deployment use case.

```c
api.ble.beacon.ibeacon.uuid.set(beaconUuid)
```

| **Function**      | `bool set(uint8_t beaconUuid[])`                     |
|-------------------|------------------------------------------------------|
| **Parameters**    | **beaconUuid** - define 16 bytes                     |
| **Returns**       | bool                                                 |
| **Return Values** | **TRUE** for success SET <br> **FALSE** for SET fail |


#### major

##### set()

This API further specifies a specific iBeacon and use case. For example, this could define a sub-region within a larger region defined by the UUID.

```c
api.ble.beacon.ibeacon.major.set(major_value)
```

| **Function**      | `bool set(uint16_t major_value)`                          |
| ----------------- | --------------------------------------------------------- |
| **Parameters**    | **major_value**  - set major (define 2&nbsp;bytes)        |
| **Returns**       | bool                                                      |
| **Return Values** | **TRUE** for success SET <br> **FALSE** for SET fail      |


#### minor

##### set()

This API allows further subdivision of region or use case specified by the application developer.

```c
api.ble.beacon.ibeacon.minor.set(minor_value)
```

| **Function**      | `bool set(uint16_t minor_value)`                          |
| ----------------- | --------------------------------------------------------- |
| **Parameters**    | **minor_value**  - set minor (define 2&nbsp;bytes)        |
| **Returns**       | bool                                                      |
| **Return Values** | **TRUE** for success SET <br> **FALSE** for SET fail      |

#### power

##### set()

This API provides information about the measured power value expected at one (1)&nbsp;meter from the beacon.

```c
api.ble.beacon.ibeacon.power.set(ibeacon_power)
```

| **Function**      | `bool set(int8_t ibeacon_power)`                        |
|-------------------|---------------------------------------------------------|
| **Parameters**    | **ibeacon_power** - display measured power value (RSSI) |
| **Returns**       | bool                                                    |
| **Return Values** | **TRUE** for success SET <br> **FALSE** for SET fail    |


#### set()

This API provides the developer to control all data for BLE Beacon advertising and allows function to support full 31&nbsp;byte payload.

```c
api.ble.beacon.custom.payload.set(cus_adv_data[], cus_adv_len)
```

| **Function**      | `bool set(uint8_t cus_adv_data[], uint8_t cus_adv_len)`                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters**    | **cus_adv_data[]** - set the advertising payload (Max 31&nbsp;bytes) <br> **cus_adv_len** - the number of bytes to advertising data |
| **Returns**       | bool                                                                                                                                |
| **Return Values** | **TRUE** for success SET <br> **FALSE** for SET fail                                                                                |

## BLE Scanner

### start()
This API starts scanning for BLE peripherals in range and parsing the advertising data that is being sent out by the peripherals.

```c
api.ble.scanner.start(timeout_sec)
```

| **Function**   | `void start(uint16_t timeout_sec)`                                                                |
|----------------|---------------------------------------------------------------------------------------------------|
| **Parameters** | **timeout_sec** - field is scanning stop after x seconds. If `timeout_sec=0`, always scanning on. |
| **Returns**    | void                                                                                              |


### setInterval()

This API is used to specify a scan window (how long to scan) and interval (how long to wait between scans).

```c
api.ble.scanner.setInterval(scan_interval, scan_window);
```

| **Function**      | `bool setInterval(uint16_t scan_interval, uint16_t scan_window)`                                                                                                                           |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Parameters**    | **scan_interval** - Defines at what intervals scanner is started. (3&nbsp;ms ~ 40960&nbsp;ms) <br> **scan_window** - Defines how long to scan at each interval (3&nbsp;ms ~ 40960&nbsp;ms) |
| **Returns**       | bool                                                                                                                                                                                       |
| **Return Values** | **TRUE** for success SET <br> **FALSE** for SET fail                                                                                                                                       |



### setScannerCallback()

This API is used to register a callback function, so that application can be notified on receiving scan data.

```c
void setScannerCallback	(void(*)(int8_t, uint8_t *, uint8_t *, uint16_t) userFunc)
```

| **Function**   | `api.ble.scanner.setScannerCallback(userFunc)` |
|----------------|------------------------------------------------|
| **Parameters** | **userFunc**	callback                          |
| **Returns**    | void                                           |


## Customize Service

### RAKBleService

#### RAKBleService()

This API provides developers to create a new BLE service and construct an instance of BLEService.

```c
RAKBleService hrms = RAKBleService(service_uuid[])
```
| **Function**   | `RAKBleService(uint8_t service_uuid[])`                                                                  |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| **Parameters** | **service_uuid[]** - create a 128-bit base UUID, and the 3rd and 4th&nbsp;byte means Service 16-bit UUID |
| **Returns**    | void                                                                                                     |


#### begin()

Before constructing an instance BLECharacteristic, you need to construct an instance BLEServices and execute **`.begin()`**.

```c
hrms.begin()
```

::: tip 📝 NOTE
You should create your own instance to use this API:
```c
RAKBleService hrms = RAKBleService(service_uuid[])
```
:::


| **Function** | `void begin()` |
|--------------|----------------|
| **Returns**  | void           |


:::details Click to View Example
```c{61}
#include "Arduino.h"
#define UUID16_SVC_HEART_RATE 0x180D
#define UUID16_CHR_HEART_RATE_MEASUREMENT 0x2A37
#define UUID16_CHR_BODY_SENSOR_LOCATION 0x2A38
RAKBleCharacteristic hrmc = RAKBleCharacteristic(UUID16_CHR_HEART_RATE_MEASUREMENT);
void cccd_callback(uint16_t chars_uuid, uint8_t *cccd_value)
{
    if (chars_uuid == UUID16_CHR_HEART_RATE_MEASUREMENT)
    {
        if (hrmc.notifyEnabled())
        {
            Serial.println("[Heart Rate Measurement 'Notify' enabled]");
        }
        else
        {
            Serial.println("[Heart Rate Measurement 'Notify' disabled]");
            return;
        }
    }
    //Serial.println((char *)cccd_value);
    Serial.println("");
    Serial.print("chars_uuid: ");
    Serial.print("0x");
    String uuid_str = String(chars_uuid, HEX);
    Serial.println(uuid_str);
    Serial.println("notify value:");
    String cccd_value1 = String(cccd_value[0], HEX);
    String cccd_value2 = String(cccd_value[1], HEX);
    Serial.print("0x");
    Serial.println(cccd_value1);
    Serial.print("0x");
    Serial.println(cccd_value2);
}
void send_callback(uint16_t chars_uuid, uint8_t *send_value)
{
    if (chars_uuid == UUID16_CHR_BODY_SENSOR_LOCATION)
    {
        Serial.println("[Heart Rate - Body Sensor Location Read!]");
        Serial.print("chars_uuid: ");
        Serial.print("0x");
        String uuid_str = String(chars_uuid, HEX);
        Serial.println(uuid_str);
        Serial.println("");
        Serial.print("send value: ");
        char send_str = send_value[0];
        Serial.println(send_str);
    }
}
void setup()
{
    //Base 128-bit UUID : B320F8FA-5AFC-4C1B-B96F-16247D912D0A
    //--The 3rd and 4th byte 'F8FA' means Service 16bit UUID
    uint8_t base_uuid[]={0xB3, 0x20, 0xF8, 0xFA, 0x5A, 0xFC, 0x4C, 0x1B, 0xB9, 0x6F, 0x16, 0x24, 0x7D, 0x91, 0x2D, 0x0A};
    Serial.begin(115200);
    delay(5000);
    Serial.println("RAKwireless BLE Customer Services Example");
    Serial.println("------------------------------------------------------");
    api.ble.customer.init();
    RAKBleService hrms = RAKBleService(base_uuid);
    RAKBleCharacteristic bslc = RAKBleCharacteristic(UUID16_CHR_BODY_SENSOR_LOCATION);
    hrms.begin();
    hrmc.setProperties(RAK_CHR_PROPS_NOTIFY);
    hrmc.setPermission(RAK_SET_OPEN);
    hrmc.setFixedLen(2);
    hrmc.setCccdWriteCallback(cccd_callback);
    hrmc.begin();
    delay(1000);
    uint8_t hrmdata[2] = {0x39, 0x40};
    hrmc.notify(hrmdata);
    delay(1000);
    //Body Sensor Location
    //      0     = Other
    //      1     = Chest
    //      2     = Wrist
    //      3     = Finger
    //      4     = Hand
    //      5     = Ear Lobe
    //      6     = Foot
    //      7:255 = Reserved
    bslc.setProperties(RAK_CHR_PROPS_READ);
    bslc.setPermission(RAK_SET_OPEN);
    bslc.setFixedLen(1);
    bslc.setWriteCallback(send_callback);
    bslc.begin();
    delay(1000);
    uint8_t sensor_location[1] = {'2'};
    bslc.write(sensor_location);            // Set the characteristic to 'Wrist' (2)
    api.ble.customer.start();
}
void loop()
{
}

```
:::



### RAKBleCharacteristic

#### RAKBleCharacteristic()

This API creates a new BLE characteristic associated with this service.

```c
RAKBleCharacteristic bslc = RAKBleCharacteristic(characteristicUUID)
```

| **Function**   | `RAKBleCharacteristic(uint16_t characteristicUUID)`                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **characteristicUUID** - The base is the same as the base UUID used when construct an instance BLEService, only provided the 3rd and 4th&nbsp;byte means characteristic (16 bit UUID) |


#### setProperties()

This API sets the characteristic properties.

```c
bslc.setProperties(prop)
```

::: tip 📝 NOTE
You should create your own instance to use this API.

```c
RAKBleCharacteristic bslc = RAKBleCharacteristic(characteristicUUID)
```
:::

| **Function**   | `void setProperties(RAK_CHARS_PROPERTIES prop)`                   |
|----------------|-------------------------------------------------------------------|
| **Parameters** | **prop** - currently supports (`CHR_PROPS_NOTIFY/CHR_PROPS_READ`) |
| **Returns**    | void                                                              |

:::details Click to View Example
```c{80}
#include "Arduino.h"
#define UUID16_SVC_HEART_RATE 0x180D
#define UUID16_CHR_HEART_RATE_MEASUREMENT 0x2A37
#define UUID16_CHR_BODY_SENSOR_LOCATION 0x2A38
RAKBleCharacteristic hrmc = RAKBleCharacteristic(UUID16_CHR_HEART_RATE_MEASUREMENT);
void cccd_callback(uint16_t chars_uuid, uint8_t *cccd_value)
{
    if (chars_uuid == UUID16_CHR_HEART_RATE_MEASUREMENT)
    {
        if (hrmc.notifyEnabled())
        {
            Serial.println("[Heart Rate Measurement 'Notify' enabled]");
        }
        else
        {
            Serial.println("[Heart Rate Measurement 'Notify' disabled]");
            return;
        }
    }
    //Serial.println((char *)cccd_value);
    Serial.println("");
    Serial.print("chars_uuid: ");
    Serial.print("0x");
    String uuid_str = String(chars_uuid, HEX);
    Serial.println(uuid_str);
    Serial.println("notify value:");
    String cccd_value1 = String(cccd_value[0], HEX);
    String cccd_value2 = String(cccd_value[1], HEX);
    Serial.print("0x");
    Serial.println(cccd_value1);
    Serial.print("0x");
    Serial.println(cccd_value2);
}
void send_callback(uint16_t chars_uuid, uint8_t *send_value)
{
    if (chars_uuid == UUID16_CHR_BODY_SENSOR_LOCATION)
    {
        Serial.println("[Heart Rate - Body Sensor Location Read!]");
        Serial.print("chars_uuid: ");
        Serial.print("0x");
        String uuid_str = String(chars_uuid, HEX);
        Serial.println(uuid_str);
        Serial.println("");
        Serial.print("send value: ");
        char send_str = send_value[0];
        Serial.println(send_str);
    }
}
void setup()
{
    //Base 128-bit UUID : B320F8FA-5AFC-4C1B-B96F-16247D912D0A
    //--The 3rd and 4th byte 'F8FA' means Service 16bit UUID
    uint8_t base_uuid[]={0xB3, 0x20, 0xF8, 0xFA, 0x5A, 0xFC, 0x4C, 0x1B, 0xB9, 0x6F, 0x16, 0x24, 0x7D, 0x91, 0x2D, 0x0A};
    Serial.begin(115200);
    delay(5000);
    Serial.println("RAKwireless BLE Customer Services Example");
    Serial.println("------------------------------------------------------");
    api.ble.customer.init();
    RAKBleService hrms = RAKBleService(base_uuid);
    RAKBleCharacteristic bslc = RAKBleCharacteristic(UUID16_CHR_BODY_SENSOR_LOCATION);
    hrms.begin();
    hrmc.setProperties(RAK_CHR_PROPS_NOTIFY);
    hrmc.setPermission(RAK_SET_OPEN);
    hrmc.setFixedLen(2);
    hrmc.setCccdWriteCallback(cccd_callback);
    hrmc.begin();
    delay(1000);
    uint8_t hrmdata[2] = {0x39, 0x40};
    hrmc.notify(hrmdata);
    delay(1000);
    //Body Sensor Location
    //      0     = Other
    //      1     = Chest
    //      2     = Wrist
    //      3     = Finger
    //      4     = Hand
    //      5     = Ear Lobe
    //      6     = Foot
    //      7:255 = Reserved
    bslc.setProperties(RAK_CHR_PROPS_READ);
    bslc.setPermission(RAK_SET_OPEN);
    bslc.setFixedLen(1);
    bslc.setWriteCallback(send_callback);
    bslc.begin();
    delay(1000);
    uint8_t sensor_location[1] = {'2'};
    bslc.write(sensor_location);            // Set the characteristic to 'Wrist' (2)
    api.ble.customer.start();
}
void loop()
{
}

```
:::


#### setPermission()

This API sets the security for the characteristic.

```c
bslc.setPermission(read_write_perm)
```

::: tip 📝 NOTE
You should create your own instance to use this API.

```c
RAKBleCharacteristic bslc = RAKBleCharacteristic(characteristicUUID)
```
:::

| **Function**   | `void setPermission(RAK_CHARS_SECURITY_REQ read_write_perm)` |
|----------------|--------------------------------------------------------------|
| **Parameters** | **read_write_perm** `RAK_SET_OPEN`                           |
| **Returns**    | void                                                         |

:::details Click to View Example
```c{81}
#include "Arduino.h"
#define UUID16_SVC_HEART_RATE 0x180D
#define UUID16_CHR_HEART_RATE_MEASUREMENT 0x2A37
#define UUID16_CHR_BODY_SENSOR_LOCATION 0x2A38
RAKBleCharacteristic hrmc = RAKBleCharacteristic(UUID16_CHR_HEART_RATE_MEASUREMENT);
void cccd_callback(uint16_t chars_uuid, uint8_t *cccd_value)
{
    if (chars_uuid == UUID16_CHR_HEART_RATE_MEASUREMENT)
    {
        if (hrmc.notifyEnabled())
        {
            Serial.println("[Heart Rate Measurement 'Notify' enabled]");
        }
        else
        {
            Serial.println("[Heart Rate Measurement 'Notify' disabled]");
            return;
        }
    }
    //Serial.println((char *)cccd_value);
    Serial.println("");
    Serial.print("chars_uuid: ");
    Serial.print("0x");
    String uuid_str = String(chars_uuid, HEX);
    Serial.println(uuid_str);
    Serial.println("notify value:");
    String cccd_value1 = String(cccd_value[0], HEX);
    String cccd_value2 = String(cccd_value[1], HEX);
    Serial.print("0x");
    Serial.println(cccd_value1);
    Serial.print("0x");
    Serial.println(cccd_value2);
}
void send_callback(uint16_t chars_uuid, uint8_t *send_value)
{
    if (chars_uuid == UUID16_CHR_BODY_SENSOR_LOCATION)
    {
        Serial.println("[Heart Rate - Body Sensor Location Read!]");
        Serial.print("chars_uuid: ");
        Serial.print("0x");
        String uuid_str = String(chars_uuid, HEX);
        Serial.println(uuid_str);
        Serial.println("");
        Serial.print("send value: ");
        char send_str = send_value[0];
        Serial.println(send_str);
    }
}
void setup()
{
    //Base 128-bit UUID : B320F8FA-5AFC-4C1B-B96F-16247D912D0A
    //--The 3rd and 4th byte 'F8FA' means Service 16bit UUID
    uint8_t base_uuid[]={0xB3, 0x20, 0xF8, 0xFA, 0x5A, 0xFC, 0x4C, 0x1B, 0xB9, 0x6F, 0x16, 0x24, 0x7D, 0x91, 0x2D, 0x0A};
    Serial.begin(115200);
    delay(5000);
    Serial.println("RAKwireless BLE Customer Services Example");
    Serial.println("------------------------------------------------------");
    api.ble.customer.init();
    RAKBleService hrms = RAKBleService(base_uuid);
    RAKBleCharacteristic bslc = RAKBleCharacteristic(UUID16_CHR_BODY_SENSOR_LOCATION);
    hrms.begin();
    hrmc.setProperties(RAK_CHR_PROPS_NOTIFY);
    hrmc.setPermission(RAK_SET_OPEN);
    hrmc.setFixedLen(2);
    hrmc.setCccdWriteCallback(cccd_callback);
    hrmc.begin();
    delay(1000);
    uint8_t hrmdata[2] = {0x39, 0x40};
    hrmc.notify(hrmdata);
    delay(1000);
    //Body Sensor Location
    //      0     = Other
    //      1     = Chest
    //      2     = Wrist
    //      3     = Finger
    //      4     = Hand
    //      5     = Ear Lobe
    //      6     = Foot
    //      7:255 = Reserved
    bslc.setProperties(RAK_CHR_PROPS_READ);
    bslc.setPermission(RAK_SET_OPEN);
    bslc.setFixedLen(1);
    bslc.setWriteCallback(send_callback);
    bslc.begin();
    delay(1000);
    uint8_t sensor_location[1] = {'2'};
    bslc.write(sensor_location);            // Set the characteristic to 'Wrist' (2)
    api.ble.customer.start();
}
void loop()
{
}
```
:::



#### setFixedLen()

This API indicates how many bytes this characteristic has.

```c
bslc.setFixedLen(fixed_len)
```

::: tip 📝 NOTE
You should create your own instance to use this API.
```c
RAKBleCharacteristic bslc = RAKBleCharacteristic(characteristicUUID)
```
:::

| **Function**   | `void setFixedLen(uint16_t fixed_len)`                              |
|----------------|---------------------------------------------------------------------|
| **Parameters** | **fixed_len** - the length of the incoming data for notify or write |
| **Returns**    | void                                                                |

:::details Click to View Example
```c{82}
#include "Arduino.h"
#define UUID16_SVC_HEART_RATE 0x180D
#define UUID16_CHR_HEART_RATE_MEASUREMENT 0x2A37
#define UUID16_CHR_BODY_SENSOR_LOCATION 0x2A38
RAKBleCharacteristic hrmc = RAKBleCharacteristic(UUID16_CHR_HEART_RATE_MEASUREMENT);
void cccd_callback(uint16_t chars_uuid, uint8_t *cccd_value)
{
    if (chars_uuid == UUID16_CHR_HEART_RATE_MEASUREMENT)
    {
        if (hrmc.notifyEnabled())
        {
            Serial.println("[Heart Rate Measurement 'Notify' enabled]");
        }
        else
        {
            Serial.println("[Heart Rate Measurement 'Notify' disabled]");
            return;
        }
    }
    //Serial.println((char *)cccd_value);
    Serial.println("");
    Serial.print("chars_uuid: ");
    Serial.print("0x");
    String uuid_str = String(chars_uuid, HEX);
    Serial.println(uuid_str);
    Serial.println("notify value:");
    String cccd_value1 = String(cccd_value[0], HEX);
    String cccd_value2 = String(cccd_value[1], HEX);
    Serial.print("0x");
    Serial.println(cccd_value1);
    Serial.print("0x");
    Serial.println(cccd_value2);
}
void send_callback(uint16_t chars_uuid, uint8_t *send_value)
{
    if (chars_uuid == UUID16_CHR_BODY_SENSOR_LOCATION)
    {
        Serial.println("[Heart Rate - Body Sensor Location Read!]");
        Serial.print("chars_uuid: ");
        Serial.print("0x");
        String uuid_str = String(chars_uuid, HEX);
        Serial.println(uuid_str);
        Serial.println("");
        Serial.print("send value: ");
        char send_str = send_value[0];
        Serial.println(send_str);
    }
}
void setup()
{
    //Base 128-bit UUID : B320F8FA-5AFC-4C1B-B96F-16247D912D0A
    //--The 3rd and 4th byte 'F8FA' means Service 16bit UUID
    uint8_t base_uuid[]={0xB3, 0x20, 0xF8, 0xFA, 0x5A, 0xFC, 0x4C, 0x1B, 0xB9, 0x6F, 0x16, 0x24, 0x7D, 0x91, 0x2D, 0x0A};
    Serial.begin(115200);
    delay(5000);
    Serial.println("RAKwireless BLE Customer Services Example");
    Serial.println("------------------------------------------------------");
    api.ble.customer.init();
    RAKBleService hrms = RAKBleService(base_uuid);
    RAKBleCharacteristic bslc = RAKBleCharacteristic(UUID16_CHR_BODY_SENSOR_LOCATION);
    hrms.begin();
    hrmc.setProperties(RAK_CHR_PROPS_NOTIFY);
    hrmc.setPermission(RAK_SET_OPEN);
    hrmc.setFixedLen(2);
    hrmc.setCccdWriteCallback(cccd_callback);
    hrmc.begin();
    delay(1000);
    uint8_t hrmdata[2] = {0x39, 0x40};
    hrmc.notify(hrmdata);
    delay(1000);
    //Body Sensor Location
    //      0     = Other
    //      1     = Chest
    //      2     = Wrist
    //      3     = Finger
    //      4     = Hand
    //      5     = Ear Lobe
    //      6     = Foot
    //      7:255 = Reserved
    bslc.setProperties(RAK_CHR_PROPS_READ);
    bslc.setPermission(RAK_SET_OPEN);
    bslc.setFixedLen(1);
    bslc.setWriteCallback(send_callback);
    bslc.begin();
    delay(1000);
    uint8_t sensor_location[1] = {'2'};
    bslc.write(sensor_location);            // Set the characteristic to 'Wrist' (2)
    api.ble.customer.start();
}
void loop()
{
}
```
:::



#### begin()

After adding the characteristic, must call .begin() to complete the configuration action

```c
bslc.begin()
```

::: tip 📝 NOTE
You should create your own instance to use this API.
```c
RAKBleCharacteristic bslc = RAKBleCharacteristic(characteristicUUID)
```
:::

| **Function** | `void begin()` |
|--------------|----------------|
| **Returns**  | void           |


:::details Click to View Example
```c{84}
#include "Arduino.h"
#define UUID16_SVC_HEART_RATE 0x180D
#define UUID16_CHR_HEART_RATE_MEASUREMENT 0x2A37
#define UUID16_CHR_BODY_SENSOR_LOCATION 0x2A38
RAKBleCharacteristic hrmc = RAKBleCharacteristic(UUID16_CHR_HEART_RATE_MEASUREMENT);
void cccd_callback(uint16_t chars_uuid, uint8_t *cccd_value)
{
    if (chars_uuid == UUID16_CHR_HEART_RATE_MEASUREMENT)
    {
        if (hrmc.notifyEnabled())
        {
            Serial.println("[Heart Rate Measurement 'Notify' enabled]");
        }
        else
        {
            Serial.println("[Heart Rate Measurement 'Notify' disabled]");
            return;
        }
    }
    //Serial.println((char *)cccd_value);
    Serial.println("");
    Serial.print("chars_uuid: ");
    Serial.print("0x");
    String uuid_str = String(chars_uuid, HEX);
    Serial.println(uuid_str);
    Serial.println("notify value:");
    String cccd_value1 = String(cccd_value[0], HEX);
    String cccd_value2 = String(cccd_value[1], HEX);
    Serial.print("0x");
    Serial.println(cccd_value1);
    Serial.print("0x");
    Serial.println(cccd_value2);
}
void send_callback(uint16_t chars_uuid, uint8_t *send_value)
{
    if (chars_uuid == UUID16_CHR_BODY_SENSOR_LOCATION)
    {
        Serial.println("[Heart Rate - Body Sensor Location Read!]");
        Serial.print("chars_uuid: ");
        Serial.print("0x");
        String uuid_str = String(chars_uuid, HEX);
        Serial.println(uuid_str);
        Serial.println("");
        Serial.print("send value: ");
        char send_str = send_value[0];
        Serial.println(send_str);
    }
}
void setup()
{
    //Base 128-bit UUID : B320F8FA-5AFC-4C1B-B96F-16247D912D0A
    //--The 3rd and 4th byte 'F8FA' means Service 16bit UUID
    uint8_t base_uuid[]={0xB3, 0x20, 0xF8, 0xFA, 0x5A, 0xFC, 0x4C, 0x1B, 0xB9, 0x6F, 0x16, 0x24, 0x7D, 0x91, 0x2D, 0x0A};
    Serial.begin(115200);
    delay(5000);
    Serial.println("RAKwireless BLE Customer Services Example");
    Serial.println("------------------------------------------------------");
    api.ble.customer.init();
    RAKBleService hrms = RAKBleService(base_uuid);
    RAKBleCharacteristic bslc = RAKBleCharacteristic(UUID16_CHR_BODY_SENSOR_LOCATION);
    hrms.begin();
    hrmc.setProperties(RAK_CHR_PROPS_NOTIFY);
    hrmc.setPermission(RAK_SET_OPEN);
    hrmc.setFixedLen(2);
    hrmc.setCccdWriteCallback(cccd_callback);
    hrmc.begin();
    delay(1000);
    uint8_t hrmdata[2] = {0x39, 0x40};
    hrmc.notify(hrmdata);
    delay(1000);
    //Body Sensor Location
    //      0     = Other
    //      1     = Chest
    //      2     = Wrist
    //      3     = Finger
    //      4     = Hand
    //      5     = Ear Lobe
    //      6     = Foot
    //      7:255 = Reserved
    bslc.setProperties(RAK_CHR_PROPS_READ);
    bslc.setPermission(RAK_SET_OPEN);
    bslc.setFixedLen(1);
    bslc.setWriteCallback(send_callback);
    bslc.begin();
    delay(1000);
    uint8_t sensor_location[1] = {'2'};
    bslc.write(sensor_location);            // Set the characteristic to 'Wrist' (2)
    api.ble.customer.start();
}
void loop()
{
}
```
:::


#### notify()

This API provides information to send notifications to the connector.

```c
bslc.notify(notify_data)
```

::: tip 📝 NOTE
You should create your own instance to use this API.

```c
RAKBleCharacteristic bslc = RAKBleCharacteristic(characteristicUUID)
```
:::

| **Function**   | `void notify	(uint8_t * notify_data)`                   |
|----------------|---------------------------------------------------------|
| **Parameters** | **notify_data** - an array to send as a series of bytes |
| **Returns**    | void                                                    |

:::details Click to View Example
```c{69}
#include "Arduino.h"
#define UUID16_SVC_HEART_RATE 0x180D
#define UUID16_CHR_HEART_RATE_MEASUREMENT 0x2A37
#define UUID16_CHR_BODY_SENSOR_LOCATION 0x2A38
RAKBleCharacteristic hrmc = RAKBleCharacteristic(UUID16_CHR_HEART_RATE_MEASUREMENT);
void cccd_callback(uint16_t chars_uuid, uint8_t *cccd_value)
{
    if (chars_uuid == UUID16_CHR_HEART_RATE_MEASUREMENT)
    {
        if (hrmc.notifyEnabled())
        {
            Serial.println("[Heart Rate Measurement 'Notify' enabled]");
        }
        else
        {
            Serial.println("[Heart Rate Measurement 'Notify' disabled]");
            return;
        }
    }
    //Serial.println((char *)cccd_value);
    Serial.println("");
    Serial.print("chars_uuid: ");
    Serial.print("0x");
    String uuid_str = String(chars_uuid, HEX);
    Serial.println(uuid_str);
    Serial.println("notify value:");
    String cccd_value1 = String(cccd_value[0], HEX);
    String cccd_value2 = String(cccd_value[1], HEX);
    Serial.print("0x");
    Serial.println(cccd_value1);
    Serial.print("0x");
    Serial.println(cccd_value2);
}
void send_callback(uint16_t chars_uuid, uint8_t *send_value)
{
    if (chars_uuid == UUID16_CHR_BODY_SENSOR_LOCATION)
    {
        Serial.println("[Heart Rate - Body Sensor Location Read!]");
        Serial.print("chars_uuid: ");
        Serial.print("0x");
        String uuid_str = String(chars_uuid, HEX);
        Serial.println(uuid_str);
        Serial.println("");
        Serial.print("send value: ");
        char send_str = send_value[0];
        Serial.println(send_str);
    }
}
void setup()
{
    //Base 128-bit UUID : B320F8FA-5AFC-4C1B-B96F-16247D912D0A
    //--The 3rd and 4th byte 'F8FA' means Service 16bit UUID
    uint8_t base_uuid[]={0xB3, 0x20, 0xF8, 0xFA, 0x5A, 0xFC, 0x4C, 0x1B, 0xB9, 0x6F, 0x16, 0x24, 0x7D, 0x91, 0x2D, 0x0A};
    Serial.begin(115200);
    delay(5000);
    Serial.println("RAKwireless BLE Customer Services Example");
    Serial.println("------------------------------------------------------");
    api.ble.customer.init();
    RAKBleService hrms = RAKBleService(base_uuid);
    RAKBleCharacteristic bslc = RAKBleCharacteristic(UUID16_CHR_BODY_SENSOR_LOCATION);
    hrms.begin();
    hrmc.setProperties(RAK_CHR_PROPS_NOTIFY);
    hrmc.setPermission(RAK_SET_OPEN);
    hrmc.setFixedLen(2);
    hrmc.setCccdWriteCallback(cccd_callback);
    hrmc.begin();
    delay(1000);
    uint8_t hrmdata[2] = {0x39, 0x40};
    hrmc.notify(hrmdata);
    delay(1000);
    //Body Sensor Location
    //      0     = Other
    //      1     = Chest
    //      2     = Wrist
    //      3     = Finger
    //      4     = Hand
    //      5     = Ear Lobe
    //      6     = Foot
    //      7:255 = Reserved
    bslc.setProperties(RAK_CHR_PROPS_READ);
    bslc.setPermission(RAK_SET_OPEN);
    bslc.setFixedLen(1);
    bslc.setWriteCallback(send_callback);
    bslc.begin();
    delay(1000);
    uint8_t sensor_location[1] = {'2'};
    bslc.write(sensor_location);            // Set the characteristic to 'Wrist' (2)
    api.ble.customer.start();
}
void loop()
{
}
```
:::



#### write()

Data is written by the application to provide the peer connector for read data.

```c
bslc.write(send_data)
```

::: tip 📝 NOTE
You should create your own instance to use this API.
```c
RAKBleCharacteristic bslc = RAKBleCharacteristic(characteristicUUID)
```
:::

| **Function**   | `void write(uint8_t * send_data)`                     |
|----------------|-------------------------------------------------------|
| **Parameters** | **send_data** - an array to send as a series of bytes |
| **Returns**    | void                                                  |

:::details Click to View Example
```c{87}
#include "Arduino.h"
#define UUID16_SVC_HEART_RATE 0x180D
#define UUID16_CHR_HEART_RATE_MEASUREMENT 0x2A37
#define UUID16_CHR_BODY_SENSOR_LOCATION 0x2A38
RAKBleCharacteristic hrmc = RAKBleCharacteristic(UUID16_CHR_HEART_RATE_MEASUREMENT);
void cccd_callback(uint16_t chars_uuid, uint8_t *cccd_value)
{
    if (chars_uuid == UUID16_CHR_HEART_RATE_MEASUREMENT)
    {
        if (hrmc.notifyEnabled())
        {
            Serial.println("[Heart Rate Measurement 'Notify' enabled]");
        }
        else
        {
            Serial.println("[Heart Rate Measurement 'Notify' disabled]");
            return;
        }
    }
    //Serial.println((char *)cccd_value);
    Serial.println("");
    Serial.print("chars_uuid: ");
    Serial.print("0x");
    String uuid_str = String(chars_uuid, HEX);
    Serial.println(uuid_str);
    Serial.println("notify value:");
    String cccd_value1 = String(cccd_value[0], HEX);
    String cccd_value2 = String(cccd_value[1], HEX);
    Serial.print("0x");
    Serial.println(cccd_value1);
    Serial.print("0x");
    Serial.println(cccd_value2);
}
void send_callback(uint16_t chars_uuid, uint8_t *send_value)
{
    if (chars_uuid == UUID16_CHR_BODY_SENSOR_LOCATION)
    {
        Serial.println("[Heart Rate - Body Sensor Location Read!]");
        Serial.print("chars_uuid: ");
        Serial.print("0x");
        String uuid_str = String(chars_uuid, HEX);
        Serial.println(uuid_str);
        Serial.println("");
        Serial.print("send value: ");
        char send_str = send_value[0];
        Serial.println(send_str);
    }
}
void setup()
{
    //Base 128-bit UUID : B320F8FA-5AFC-4C1B-B96F-16247D912D0A
    //--The 3rd and 4th byte 'F8FA' means Service 16bit UUID
    uint8_t base_uuid[]={0xB3, 0x20, 0xF8, 0xFA, 0x5A, 0xFC, 0x4C, 0x1B, 0xB9, 0x6F, 0x16, 0x24, 0x7D, 0x91, 0x2D, 0x0A};
    Serial.begin(115200);
    delay(5000);
    Serial.println("RAKwireless BLE Customer Services Example");
    Serial.println("------------------------------------------------------");
    api.ble.customer.init();
    RAKBleService hrms = RAKBleService(base_uuid);
    RAKBleCharacteristic bslc = RAKBleCharacteristic(UUID16_CHR_BODY_SENSOR_LOCATION);
    hrms.begin();
    hrmc.setProperties(RAK_CHR_PROPS_NOTIFY);
    hrmc.setPermission(RAK_SET_OPEN);
    hrmc.setFixedLen(2);
    hrmc.setCccdWriteCallback(cccd_callback);
    hrmc.begin();
    delay(1000);
    uint8_t hrmdata[2] = {0x39, 0x40};
    hrmc.notify(hrmdata);
    delay(1000);
    //Body Sensor Location
    //      0     = Other
    //      1     = Chest
    //      2     = Wrist
    //      3     = Finger
    //      4     = Hand
    //      5     = Ear Lobe
    //      6     = Foot
    //      7:255 = Reserved
    bslc.setProperties(RAK_CHR_PROPS_READ);
    bslc.setPermission(RAK_SET_OPEN);
    bslc.setFixedLen(1);
    bslc.setWriteCallback(send_callback);
    bslc.begin();
    delay(1000);
    uint8_t sensor_location[1] = {'2'};
    bslc.write(sensor_location);            // Set the characteristic to 'Wrist' (2)
    api.ble.customer.start();
}
void loop()
{
}
```
:::

#### notifyEnabled()

This API confirms whether the current connection has enabled notification.

```c
bslc.notifyEnabled()
```

::: tip 📝 NOTE
You should create your own instance to use this API.

```c
RAKBleCharacteristic bslc = RAKBleCharacteristic(characteristicUUID)
```
:::

| **Function** | `bool notifyEnabled(void)` |
|--------------|----------------------------|
| **Returns**  | void                       |

:::details Click to View Example
```c{10}
#include "Arduino.h"
#define UUID16_SVC_HEART_RATE 0x180D
#define UUID16_CHR_HEART_RATE_MEASUREMENT 0x2A37
#define UUID16_CHR_BODY_SENSOR_LOCATION 0x2A38
RAKBleCharacteristic hrmc = RAKBleCharacteristic(UUID16_CHR_HEART_RATE_MEASUREMENT);
void cccd_callback(uint16_t chars_uuid, uint8_t *cccd_value)
{
    if (chars_uuid == UUID16_CHR_HEART_RATE_MEASUREMENT)
    {
        if (hrmc.notifyEnabled())
        {
            Serial.println("[Heart Rate Measurement 'Notify' enabled]");
        }
        else
        {
            Serial.println("[Heart Rate Measurement 'Notify' disabled]");
            return;
        }
    }
    //Serial.println((char *)cccd_value);
    Serial.println("");
    Serial.print("chars_uuid: ");
    Serial.print("0x");
    String uuid_str = String(chars_uuid, HEX);
    Serial.println(uuid_str);
    Serial.println("notify value:");
    String cccd_value1 = String(cccd_value[0], HEX);
    String cccd_value2 = String(cccd_value[1], HEX);
    Serial.print("0x");
    Serial.println(cccd_value1);
    Serial.print("0x");
    Serial.println(cccd_value2);
}
void send_callback(uint16_t chars_uuid, uint8_t *send_value)
{
    if (chars_uuid == UUID16_CHR_BODY_SENSOR_LOCATION)
    {
        Serial.println("[Heart Rate - Body Sensor Location Read!]");
        Serial.print("chars_uuid: ");
        Serial.print("0x");
        String uuid_str = String(chars_uuid, HEX);
        Serial.println(uuid_str);
        Serial.println("");
        Serial.print("send value: ");
        char send_str = send_value[0];
        Serial.println(send_str);
    }
}
void setup()
{
    //Base 128-bit UUID : B320F8FA-5AFC-4C1B-B96F-16247D912D0A
    //--The 3rd and 4th byte 'F8FA' means Service 16bit UUID
    uint8_t base_uuid[]={0xB3, 0x20, 0xF8, 0xFA, 0x5A, 0xFC, 0x4C, 0x1B, 0xB9, 0x6F, 0x16, 0x24, 0x7D, 0x91, 0x2D, 0x0A};
    Serial.begin(115200);
    delay(5000);
    Serial.println("RAKwireless BLE Customer Services Example");
    Serial.println("------------------------------------------------------");
    api.ble.customer.init();
    RAKBleService hrms = RAKBleService(base_uuid);
    RAKBleCharacteristic bslc = RAKBleCharacteristic(UUID16_CHR_BODY_SENSOR_LOCATION);
    hrms.begin();
    hrmc.setProperties(RAK_CHR_PROPS_NOTIFY);
    hrmc.setPermission(RAK_SET_OPEN);
    hrmc.setFixedLen(2);
    hrmc.setCccdWriteCallback(cccd_callback);
    hrmc.begin();
    delay(1000);
    uint8_t hrmdata[2] = {0x39, 0x40};
    hrmc.notify(hrmdata);
    delay(1000);
    //Body Sensor Location
    //      0     = Other
    //      1     = Chest
    //      2     = Wrist
    //      3     = Finger
    //      4     = Hand
    //      5     = Ear Lobe
    //      6     = Foot
    //      7:255 = Reserved
    bslc.setProperties(RAK_CHR_PROPS_READ);
    bslc.setPermission(RAK_SET_OPEN);
    bslc.setFixedLen(1);
    bslc.setWriteCallback(send_callback);
    bslc.begin();
    delay(1000);
    uint8_t sensor_location[1] = {'2'};
    bslc.write(sensor_location);            // Set the characteristic to 'Wrist' (2)
    api.ble.customer.start();
}
void loop()
{
}
```
:::


#### setCccdWriteCallback()

This API is used to register a callback function, so that application can be notified on BLE notify data to peer connector.

```c
bslc.setCccdWriteCallback(userFunc)
```

::: tip 📝 NOTE
You should create your own instance to use this API.
```c
RAKBleCharacteristic bslc = RAKBleCharacteristic(characteristicUUID)
```
:::

| **Function**   | `void setCccdWriteCallback(void(*)(uint16_t, uint8_t *) 	userFunc)` |
|----------------|---------------------------------------------------------------------|
| **Parameters** | **userFunc** - callback function                                    |
| **Returns**    | void                                                                |

:::details Click to View Example
```c{65}
#include "Arduino.h"
#define UUID16_SVC_HEART_RATE 0x180D
#define UUID16_CHR_HEART_RATE_MEASUREMENT 0x2A37
#define UUID16_CHR_BODY_SENSOR_LOCATION 0x2A38
RAKBleCharacteristic hrmc = RAKBleCharacteristic(UUID16_CHR_HEART_RATE_MEASUREMENT);
void cccd_callback(uint16_t chars_uuid, uint8_t *cccd_value)
{
    if (chars_uuid == UUID16_CHR_HEART_RATE_MEASUREMENT)
    {
        if (hrmc.notifyEnabled())
        {
            Serial.println("[Heart Rate Measurement 'Notify' enabled]");
        }
        else
        {
            Serial.println("[Heart Rate Measurement 'Notify' disabled]");
            return;
        }
    }
    //Serial.println((char *)cccd_value);
    Serial.println("");
    Serial.print("chars_uuid: ");
    Serial.print("0x");
    String uuid_str = String(chars_uuid, HEX);
    Serial.println(uuid_str);
    Serial.println("notify value:");
    String cccd_value1 = String(cccd_value[0], HEX);
    String cccd_value2 = String(cccd_value[1], HEX);
    Serial.print("0x");
    Serial.println(cccd_value1);
    Serial.print("0x");
    Serial.println(cccd_value2);
}
void send_callback(uint16_t chars_uuid, uint8_t *send_value)
{
    if (chars_uuid == UUID16_CHR_BODY_SENSOR_LOCATION)
    {
        Serial.println("[Heart Rate - Body Sensor Location Read!]");
        Serial.print("chars_uuid: ");
        Serial.print("0x");
        String uuid_str = String(chars_uuid, HEX);
        Serial.println(uuid_str);
        Serial.println("");
        Serial.print("send value: ");
        char send_str = send_value[0];
        Serial.println(send_str);
    }
}
void setup()
{
    //Base 128-bit UUID : B320F8FA-5AFC-4C1B-B96F-16247D912D0A
    //--The 3rd and 4th byte 'F8FA' means Service 16bit UUID
    uint8_t base_uuid[]={0xB3, 0x20, 0xF8, 0xFA, 0x5A, 0xFC, 0x4C, 0x1B, 0xB9, 0x6F, 0x16, 0x24, 0x7D, 0x91, 0x2D, 0x0A};
    Serial.begin(115200);
    delay(5000);
    Serial.println("RAKwireless BLE Customer Services Example");
    Serial.println("------------------------------------------------------");
    api.ble.customer.init();
    RAKBleService hrms = RAKBleService(base_uuid);
    RAKBleCharacteristic bslc = RAKBleCharacteristic(UUID16_CHR_BODY_SENSOR_LOCATION);
    hrms.begin();
    hrmc.setProperties(RAK_CHR_PROPS_NOTIFY);
    hrmc.setPermission(RAK_SET_OPEN);
    hrmc.setFixedLen(2);
    hrmc.setCccdWriteCallback(cccd_callback);
    hrmc.begin();
    delay(1000);
    uint8_t hrmdata[2] = {0x39, 0x40};
    hrmc.notify(hrmdata);
    delay(1000);
    //Body Sensor Location
    //      0     = Other
    //      1     = Chest
    //      2     = Wrist
    //      3     = Finger
    //      4     = Hand
    //      5     = Ear Lobe
    //      6     = Foot
    //      7:255 = Reserved
    bslc.setProperties(RAK_CHR_PROPS_READ);
    bslc.setPermission(RAK_SET_OPEN);
    bslc.setFixedLen(1);
    bslc.setWriteCallback(send_callback);
    bslc.begin();
    delay(1000);
    uint8_t sensor_location[1] = {'2'};
    bslc.write(sensor_location);            // Set the characteristic to 'Wrist' (2)
    api.ble.customer.start();
}
void loop()
{
}
```
:::

#### setWriteCallback()

This API is used to register a callback function so that the application can trigger a notification event when the peer connector reads data. (Data is written by the application and ready to be read.)

```c
bslc.setWriteCallback(userFunc)
```

::: tip 📝 NOTE
You should create your own instance to use this API.

```c
RAKBleCharacteristic bslc = RAKBleCharacteristic(characteristicUUID)
```
:::

| **Function**   | `void setWriteCallback(void(*)(uint16_t, uint8_t *) 	userFunc)` |
|----------------|-----------------------------------------------------------------|
| **Parameters** | **userFunc** - callback function                                |
| **Returns**    | void                                                            |

:::details Click to View Example
```c{83}
#include "Arduino.h"
#define UUID16_SVC_HEART_RATE 0x180D
#define UUID16_CHR_HEART_RATE_MEASUREMENT 0x2A37
#define UUID16_CHR_BODY_SENSOR_LOCATION 0x2A38
RAKBleCharacteristic hrmc = RAKBleCharacteristic(UUID16_CHR_HEART_RATE_MEASUREMENT);
void cccd_callback(uint16_t chars_uuid, uint8_t *cccd_value)
{
    if (chars_uuid == UUID16_CHR_HEART_RATE_MEASUREMENT)
    {
        if (hrmc.notifyEnabled())
        {
            Serial.println("[Heart Rate Measurement 'Notify' enabled]");
        }
        else
        {
            Serial.println("[Heart Rate Measurement 'Notify' disabled]");
            return;
        }
    }
    //Serial.println((char *)cccd_value);
    Serial.println("");
    Serial.print("chars_uuid: ");
    Serial.print("0x");
    String uuid_str = String(chars_uuid, HEX);
    Serial.println(uuid_str);
    Serial.println("notify value:");
    String cccd_value1 = String(cccd_value[0], HEX);
    String cccd_value2 = String(cccd_value[1], HEX);
    Serial.print("0x");
    Serial.println(cccd_value1);
    Serial.print("0x");
    Serial.println(cccd_value2);
}
void send_callback(uint16_t chars_uuid, uint8_t *send_value)
{
    if (chars_uuid == UUID16_CHR_BODY_SENSOR_LOCATION)
    {
        Serial.println("[Heart Rate - Body Sensor Location Read!]");
        Serial.print("chars_uuid: ");
        Serial.print("0x");
        String uuid_str = String(chars_uuid, HEX);
        Serial.println(uuid_str);
        Serial.println("");
        Serial.print("send value: ");
        char send_str = send_value[0];
        Serial.println(send_str);
    }
}
void setup()
{
    //Base 128-bit UUID : B320F8FA-5AFC-4C1B-B96F-16247D912D0A
    //--The 3rd and 4th byte 'F8FA' means Service 16bit UUID
    uint8_t base_uuid[]={0xB3, 0x20, 0xF8, 0xFA, 0x5A, 0xFC, 0x4C, 0x1B, 0xB9, 0x6F, 0x16, 0x24, 0x7D, 0x91, 0x2D, 0x0A};
    Serial.begin(115200);
    delay(5000);
    Serial.println("RAKwireless BLE Customer Services Example");
    Serial.println("------------------------------------------------------");
    api.ble.customer.init();
    RAKBleService hrms = RAKBleService(base_uuid);
    RAKBleCharacteristic bslc = RAKBleCharacteristic(UUID16_CHR_BODY_SENSOR_LOCATION);
    hrms.begin();
    hrmc.setProperties(RAK_CHR_PROPS_NOTIFY);
    hrmc.setPermission(RAK_SET_OPEN);
    hrmc.setFixedLen(2);
    hrmc.setCccdWriteCallback(cccd_callback);
    hrmc.begin();
    delay(1000);
    uint8_t hrmdata[2] = {0x39, 0x40};
    hrmc.notify(hrmdata);
    delay(1000);
    //Body Sensor Location
    //      0     = Other
    //      1     = Chest
    //      2     = Wrist
    //      3     = Finger
    //      4     = Hand
    //      5     = Ear Lobe
    //      6     = Foot
    //      7:255 = Reserved
    bslc.setProperties(RAK_CHR_PROPS_READ);
    bslc.setPermission(RAK_SET_OPEN);
    bslc.setFixedLen(1);
    bslc.setWriteCallback(send_callback);
    bslc.begin();
    delay(1000);
    uint8_t sensor_location[1] = {'2'};
    bslc.write(sensor_location);            // Set the characteristic to 'Wrist' (2)
    api.ble.customer.start();
}
void loop()
{
}
```
:::

### RAKBleCustomer

#### init()

This API initializes the basic work of BLE custom services.

```c
api.ble.customer.init()
```


| **Function** | `void init()` |
|--------------|---------------|
| **Returns**  | void          |


#### start()

After completing all the services and characteristic settings, start the custom services.

```c
api.ble.customer.start()
```


| **Function** | `void start()` |
|--------------|----------------|
| **Returns**  | void           |
