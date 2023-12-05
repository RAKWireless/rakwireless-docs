# One Wire Serial

## RAK_ONEWIRE_SERIAL_RECEIVE_T

Structure with the received data

```c
typedef struct
{
  uint8_t* Buffer;     ///< Pointer to the buffer
  uint8_t Buffersize;     ///< Size of the buffer
};
```

## rak_onewire_serial_recv_cb

This callback receives data from the OneWire interface.

```c
 void(* rak_onewire_serial_recv_cb) (SERIAL_PORT port, RAK_ONEWIRE_SERIAL_RECEIVE_T *data)
```

| **Function**   | `void rak_onewire_serial_recv_cb callback(SERIAL_PORT port, RAK_ONEWIRE_SERIAL_RECEIVE_T *data)` |
| -------------- | --------------------------------------------------------------------- |
| **Parameters** | port	- the serial port used <br> *data - pointer to the received data structure  |
| **Returns**    | void                                        |

## RAKOneWireSerial Class

This API chooses the pin number for one wire serial and prepare the callback function for receiving data.

```c
OneWireSerial(pin, callback)
```

| **Function**   | `RAKOneWireSerial(uint32_t pin, rak_onewire_serial_recv_cb callback)`                                                                                                                                                                                   |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **pin** - the pin number <br> ONLY UART1_RXD_PIN and UART1_TXD_PIN are supported <br> **callback** - the callback for receiving data <br> _**not functional in RUI3 V4.1.0**_ |
| **Returns**    | void                                                                                                                                                                                |

:::warning ⚠️ WARNING
The callback function is not functional in RUI3 V4.1.0. Use NULL while declaring the instance!
:::

:::warning ⚠️ WARNING
Available pins for OneWire are only UART1_RXD_PIN and UART1_TXD_PIN!
:::

::: details Click to View Example
```c{21}
       RAKOneWireSerial onewire(UART1_RXD_PIN,NULL);

       void setup()
       {
           Serial.begin(115200);
           onewire.begin(115200, RAK_CUSTOM_MODE);
       }

       void loop()
       {
            onewire.write("data\r\n");
            while(onewire.available())
            {
                char a = onewire.read();
                Serial.printf("%c",a);
            }
       }
```
:::

## begin

This API sets the speed (baud rate) for the serial communication.

```c
begin(baud, mode)
```

| **Function**   | `void begin(uint32_t baud, RAK_SERIAL_MODE mode = RAK_DEFAULT_MODE)`  |
| -------------- | --------------------------------------------------------------------- |
| **Parameters** | baud - the baud rate <br> mode - option, should be RAK_DEFAULT_MODE   |
| **Returns**    | void                                                                  |

::: details Click to View Example
```c{21}
       RAKOneWireSerial onewire(UART1_RXD_PIN,NULL);
       void setup()
       {
           Serial.begin(115200);
           onewire.begin(115200, RAK_CUSTOM_MODE);
       }

       void loop()
       {
            onewire.write("data\r\n");
            while(onewire.available())
            {
                char a = onewire.read();
                Serial.printf("%c",a);
            }
       }
```
:::

## write

This API writes a byte sequence to a specified one wire serial port.

```c
write(buf, size)
```

| **Function**   | `size_t write(const uint8_t *buf, size_t size)`                    |
| -------------- | ------------------------------------------------------------------ |
| **Parameters** | buf - pointer to data buffer <br> size - number of bytes to send   |
| **Returns**    | size_t - the number of bytes sent successfully                     |

::: details Click to View Example
```c{21}
       RAKOneWireSerial onewire(UART1_RXD_PIN,NULL);
       void setup()
       {
           Serial.begin(115200);
           onewire.begin(115200, RAK_CUSTOM_MODE);
       }

       void loop()
       {
            onewire.write("data\r\n");
            while(onewire.available())
            {
                char a = onewire.read();
                Serial.printf("%c",a);
            }
       }
```
:::

## available

This API gets the number of bytes available for reading from the specified one wire serial port.

```c
available()
```

| **Function**   | `int available(void)`                                              |
| -------------- | ------------------------------------------------------------------ |
| **Returns**    | int - the number of bytes available for reading                    |

::: details Click to View Example
```c{21}
       RAKOneWireSerial onewire(UART1_RXD_PIN,NULL);
       void setup()
       {
           Serial.begin(115200);
           onewire.begin(115200, RAK_CUSTOM_MODE);
       }

       void loop()
       {
            onewire.write("data\r\n");
            while(onewire.available())
            {
                char a = onewire.read();
                Serial.printf("%c",a);
            }
       }
```
:::

## read

This API gets the number of bytes available for reading from the specified one wire serial port.

```c
read()
```

| **Function**   | `int read(void)`                       |
| -------------- | -------------------------------------- |
| **Returns**    | int - the byte read or -1 on read fail |

::: details Click to View Example
```c{21}
       RAKOneWireSerial onewire(UART1_RXD_PIN,NULL);
       void setup()
       {
           Serial.begin(115200);
           onewire.begin(115200, RAK_CUSTOM_MODE);
       }

       void loop()
       {
            onewire.write("data\r\n");
            while(onewire.available())
            {
                char a = onewire.read();
                Serial.printf("%c",a);
            }
       }
```
:::

## end

This API closes the one wire serial port.

```c
end()
```

| **Function**   | `void end(void)`                       |
| -------------- | -------------------------------------- |
| **Returns**    | void |
