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

| **Function**   | `RAKOneWireSerial(uint32_t pin, rak_onewire_serial_recv_cb callback)` |
| -------------- | --------------------------------------------------------------------- |
| **Parameters** | pin - the pin number <br> callback - the callback for receiving data  |
| **Returns**    | void                                                                  |

## begin

This API sets the speed (baud rate) for the serial communication.

```c
begin(baud, mode)
```

| **Function**   | `void begin(uint32_t baud, RAK_SERIAL_MODE mode = RAK_DEFAULT_MODE)`  |
| -------------- | --------------------------------------------------------------------- |
| **Parameters** | baud - the baud rate <br> mode - option, should be RAK_DEFAULT_MODE   |
| **Returns**    | void                                                                  |

## write

This API writes a byte sequence to a specified one wire serial port.

```c
write(buf, size)
```

| **Function**   | `size_t write(const uint8_t *buf, size_t size)`                    |
| -------------- | ------------------------------------------------------------------ |
| **Parameters** | buf - pointer to data buffer <br> size - number of bytes to send   |
| **Returns**    | size_t - the number of bytes sent successfully                     |

## available

This API gets the number of bytes available for reading from the specified one wire serial port.

```c
available()
```

| **Function**   | `int available(void)`                                              |
| -------------- | ------------------------------------------------------------------ |
| **Returns**    | int - the number of bytes available for reading                    |

## read

This API gets the number of bytes available for reading from the specified one wire serial port.

```c
read()
```

| **Function**   | `int read(void)`                       |
| -------------- | -------------------------------------- |
| **Returns**    | int - the byte read or -1 on read fail |

## end

This API closes the one wire serial port.

```c
end()
```

| **Function**   | `void end(void)`                       |
| -------------- | -------------------------------------- |
| **Returns**    | void |
