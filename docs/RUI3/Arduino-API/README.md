---
lineNumbers: true
---
# Arduino API

:::warning ⚠️ WARNING
With version V4.1.1 of RUI3, the LoRa P2P functions are separated into a new class and API calls for LoRa have a changed syntax:

| Old                        | New                     | Comment                                          |
| -------------------------- | ----------------------- | ------------------------------------------------ |
| `api.lorawan.pXXX`         | `api.lora.pXXX`         | All LoRa P2P API calls change.                   |
| `api.lorawan.registerPyyy` | `api.lora.registerPyyy` | All LoRa P2P callback register API calls change. |
| `api.lorawan.nwm.set(1)`   | `api.lorawan.nwm.set()` | Set device to LoRaWAN mode.                      |
| `api.lorawan.nwm.set(0)`   | `api.lora.nwm.set()`    | Set device to LoRa P2P mode.                     |

:::

## RUI Arduino Data Type

### Typedefs

typedef enum _eAnalogReference 	eAnalogReference

### Enumerations

#### RAK\_SERIAL\_MODE

```c
enum RAK_SERIAL_MODE
```

| Enumerator       |                                        |
| ---------------- | -------------------------------------- |
| RAK_AT_MODE      | AT command mode.                       |
| RAK_CUSTOM_MODE  | Custom mode                            |
| RAK_DEFAULT_MODE | Default mode which depends on platform |


#### RAK\_ADC\_RESOLUTION

```c
enum RAK_ADC_RESOLUTION
```

| Enumerator               |                        |
| ------------------------ | ---------------------- |
| RAK_ADC_RESOLUTION_8BIT  | 8&nbsp;bit resolution  |
| RAK_ADC_RESOLUTION_10BIT | 10&nbsp;bit resolution |
| RAK_ADC_RESOLUTION_12BIT | 12&nbsp;bit resolution |
| RAK_ADC_RESOLUTION_14BIT | 14&nbsp;bit resolution |



#### RAK\_ADC\_MODE

```c
enum RAK_ADC_MODE
```

| Enumerator           |                                               |
| -------------------- | --------------------------------------------- |
| RAK_ADC_MODE_DEFAULT | default range which depends on platform       |
| RAK_ADC_MODE_3_0     | maximum 3.0&nbsp;V                            |
| RAK_ADC_MODE_2_4     | maximum 2.4&nbsp;V                            |
| RAK_ADC_MODE_1_8     | maximum 1.8&nbsp;V                            |
| RAK_ADC_MODE_1_2     | maximum 1.2&nbsp;V                            |


#### RAK\_PWM\_RESOLUTION

```c
enum RAK_PWM_RESOLUTION
```

| Enumerator               |                        |
| ------------------------ | ---------------------- |
| RAK_PWM_RESOLUTION_8BIT  | 8&nbsp;bit resolution  |
| RAK_PWM_RESOLUTION_10BIT | 10&nbsp;bit resolution |
| RAK_PWM_RESOLUTION_12BIT | 12&nbsp;bit resolution |
| RAK_PWM_RESOLUTION_14BIT | 14&nbsp;bit resolution |

## Serial


### begin()

Sets the data rate in bits per second (baud) for serial data transmission.

```c
Serial.begin(baud);
```

```c
Serial.begin(baud, mode);
```


| **Function**   | `void begin (uint32_t  baud, RAK_SERIAL_MODE  mode = RAK_DEFAULT_MODE) `                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Parameters** | **baud** - The baudrate to set for the Serial. <br> **mode(optional)** - The mode that use UART in different way (if not assigned, `RAK_DEFAULT_MODE` is chosen). <br> List: <br> `RAK_AT_MODE` <br> `RAK_API_MODE` <br> `RAK_CUSTOM_MODE` <br> `RAK_DEFAULT_MODE` |
| **Returns**    | void                                                                                                                                                                                                                                                               |

::: details Click to View Example
```c{2,3}
void setup() {
  Serial.begin(115200);
  Serial1.begin(9600, RAK_CUSTOM_MODE);
}

void loop() {
}
```
:::

::: tip 📝 NOTE
For RAK4630 and RAK11720 with BLE, the BLE UART is assigned to _**`Serial6`**_.
:::


### end()

End connection of the Serial with flushing all data.

```c
Serial.end();
```

| **Function** | `void end(void)` |
| ------------ | ---------------- |
| **Returns**  | void             |

::: details Click to View Example
```c{6}
void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.end();
}
```
:::

### getBaudrate()

Gets the data rate in bits per second (baud) for serial data transmission.

```c
Serial.getBaudrate(void);
```


| **Function** | `uint32_t getBaudrate(void)` |
| ------------ | ---------------------------- |
| **Returns**  | Baud rate in bits per second |

::: details Click to View Example
```c{2,3}
void setup() {
  uint32_t baudrate = Serial.getBaudrate();
  Serial.begin(baudrate);
}

void loop() {
}
```
:::


### lock()

To lock the Serial port of the device.

::: tip 📝 NOTE
1. If you never set a password successfully, the default password will be `00000000`.
2. `Serial.lock` can only lock the Serial which is in AT Command mode.
3. `Serial.lock` will lock all Serial that is on AT Command mode.
4. Due that Serial lock and unlock is system-wise operation for all Serial ports in AT Command mode, the Serial could be unlocked from either one or more Serial ports which are in AT Command mode.
:::

```c
Serial.lock(locked);
```

| **Function**   | `void lock(bool locked)`                                             |
| -------------- | -------------------------------------------------------------------- |
| **Parameters** | **locked** - `true` to lock the device, `false` to unlock the device |
| **Returns**    | void                                                                 |

::: details Click to View Example
```c{7}
void setup() {
  Serial.begin(115200);

  //Lock Serial(USB) with password => 12345678
  String password = "12345678";
  Serial.password(password);
  Serial.lock(true);
}

void loop() {
}
```
:::

### password()

Set up the password to unlock the device when locked.

```c
Serial.password(str);
```

```c
Serial.password(new_passwd, len);
```


| **Function**   | `bool password(char * new_passwd, size_t len)`                                                                                                                   |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **str** - a string to set for unlocking the device <br> **new_passwd** - a char array to set for unlocking the device <br> **len** -	the length of your password |
| **Returns**    | **TRUE** - for success <br> **FALSE** - for failure                                                                                                              |

::: details Click to View Example
**Example:**
```c{6}
void setup() {
  Serial.begin(115200);

  //Lock Serial(USB) with password => 12345678
  String password = "12345678";
  Serial.password(password);
  Serial.lock(true);
}

void loop() {
}
```
:::

### write()

Writes a byte sequence to a specified serial port.

```c
Serial.write(val);
```
```c
Serial.write(buf, size);
```


::: tip 📝 NOTE
This function is a virtual function declared in `Print.h`.
:::


| **Function**   | `virtual size_t write( uint8_t val)`             |
| -------------- | ------------------------------------------------ |
| **Parameters** | **val** - a value to send as a single byte       |
| **Returns**    | number of bytes sent successfully (Type: size_t) |

| **Function**   | `virtual size_t write(const uint8_t* buf, size_t size)`                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **buf** - an array to send as a series of bytes <br> **size** - the number of bytes to be sent from the array |
| **Returns**    | number of bytes sent successfully (Type: size_t)                                                              |

::: details Click to View Example
```c{6,7}
void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.write(45);
  Serial.write("Hello");
}
```
:::

### available()

Gets the number of bytes available for reading from the specified serial port.

```c
Serial.available();
```

::: tip 📝 NOTE
- `Serial.available()` inherits from the Stream utility class.
:::


| **Function** | `virtual int available(void)`                                                        |
| ------------ | ------------------------------------------------------------------------------------ |
| **Returns**  | The number of bytes available for reading from the specified serial port (Type: int) |

::: details Click to View Example
```c{7}
void setup() {
  Serial.begin(115200, RAK_CUSTOM_MODE);
}

void loop() {
  //print if you receive data
  if (Serial.available() > 0) {
    Serial.print("Return Byte = ");
    Serial.println(Serial.read());
  }
}
```
:::

### read()

Reads incoming serial data.

```c
Serial.read();
```

::: tip 📝 NOTE
`Serial.read()` inherits from the Stream utility class.
:::

| **Function**      | `virtual int read(void)`                                          |
| ----------------- | ----------------------------------------------------------------- |
| **Returns**       | The first byte of incoming serial data available (Type: int32_t)  |
| **Return Values** | **-1** Read fail, received nothing from the specified serial port |

::: details Click to View Example
```c{9}
void setup() {
  Serial.begin(115200, RAK_CUSTOM_MODE);
}

void loop() {
  //print if you receive data
  if (Serial.available() > 0) {
    Serial.print("Return Byte = ");
    Serial.println(Serial.read());
  }
}
```
:::

### peek()

Returns the next byte (character) of incoming serial data without removing it from the internal serial buffer. That is, successive calls to peek() will return the same character, as will the next call to [read()](#read).

```c
Serial.peek();
```

| **Function** | `virtual int peek(void)`                                                                     |
| ------------ | -------------------------------------------------------------------------------------------- |
| **Returns**  | The first byte of incoming serial data available (or -1 if no data is available) (Type: int) |

::: details Click to View Example
```c{11}
void setup() {
  Serial.begin(115200, RAK_CUSTOM_MODE);
}

void loop() {
  //print if you receive data
  if (Serial.available() > 0) {

    //Peek the data first
    Serial.print("Peek the Byte = ");
    Serial.println(Serial.peek());

    //Read the data you peeked
    Serial.print("Return Byte = ");
    Serial.println(Serial.read());
  }
}
```
:::

### flush()

Waits for the transmission of outgoing serial data to complete.

```c
Serial.flush();
```

| **Function** | `virtual void flush(void)` |
| ------------ | -------------------------- |
| **Returns**  | void                       |

::: details Click to View Example
```c{8}
void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.write(45);
  Serial.write("Hello");
  Serial.flush();
}
```
:::

### print()

Prints data to the serial port as human-readable ASCII text. This command can take many forms. Numbers are printed using an ASCII character for each digit. Floats are similarly printed as ASCII digits, defaulting to two decimal places. Bytes are sent as a single character. Characters and strings are sent as is.

```c
Serial.print(val);
```

```c
Serial.print(val,format);
```

| **Function**   | `size_t print(long, int=DEC)`                                                              |
| -------------- | ------------------------------------------------------------------------------------------ |
| **Parameters** | **val** - the value to print, allows any data type                                         |
| **Returns**    | Returns the number of bytes written, though reading that number is optional (Type: size_t) |

::: details Click to View Example
```c{7-19}
void setup() {
  Serial.begin(9600); // open the serial port at 9600 bps:
}

void loop() {
  // print labels
  Serial.print("NO FORMAT");  // prints a label
  Serial.print("\t");         // prints a tab

  Serial.print("DEC");
  Serial.print("\t");

  Serial.print("HEX");
  Serial.print("\t");

  Serial.print("OCT");
  Serial.print("\t");

  Serial.print("BIN");
  Serial.println();        // carriage return after the last label

  for (int x = 0; x < 64; x++) { // only part of the ASCII chart, change to suit
    // print it out in many formats:
    Serial.print(x);       // print as an ASCII-encoded decimal - same as "DEC"
    Serial.print("\t\t");  // prints two tabs to accommodate the label length

    Serial.print(x, DEC);  // print as an ASCII-encoded decimal
    Serial.print("\t");    // prints a tab

    Serial.print(x, HEX);  // print as an ASCII-encoded hexadecimal
    Serial.print("\t");    // prints a tab

    Serial.print(x, OCT);  // print as an ASCII-encoded octal
    Serial.print("\t");    // prints a tab

    Serial.println(x, BIN);  // print as an ASCII-encoded binary
    // then adds the carriage return with "println"
    delay(200);            // delay 200 milliseconds
  }
  Serial.println();        // prints another carriage return
}
```
:::

### println()

Prints data to the serial port as human-readable ASCII text followed by a carriage return character (ASCII 13, or '') and a newline character (ASCII 10, or ''). This command takes the same form as `Serial.print()`.

```c
Serial.print(val);
```

```c
Serial.print(val,format);
```

| **Function**   | `size_t println(int, int=DEC)`                                                             |
| -------------- | ------------------------------------------------------------------------------------------ |
| **Parameters** | **val** - the value to print, allows any data type                                         |
| **Returns**    | Returns the number of bytes written, though reading that number is optional (Type: size_t) |

::: details Click to View Example
```c{13-17}
int analogValue = 0;    // variable to hold the analog value

void setup() {
  // open the serial port at 9600 bps:
  Serial.begin(9600);
}

void loop() {
  // read the analog input on pin 0:
  analogValue = analogRead(0);

  // print it out in many formats:
  Serial.println(analogValue);       // print as an ASCII-encoded decimal
  Serial.println(analogValue, DEC);  // print as an ASCII-encoded decimal
  Serial.println(analogValue, HEX);  // print as an ASCII-encoded hexadecimal
  Serial.println(analogValue, OCT);  // print as an ASCII-encoded octal
  Serial.println(analogValue, BIN);  // print as an ASCII-encoded binary

  // delay 10 milliseconds before the next reading:
  delay(10);
}
```
:::
### printf()

To output formatted text over Serial without the need to create a char array first, fill it with snprintf() and then send it with `Serial.println`.

```c
Serial.printf(val);
```

| **Function**   | `size_t printf(const char * val,	...)`                                                     |
| -------------- | ------------------------------------------------------------------------------------------ |
| **Parameters** | **val**                                                                                    |
| **Returns**    | Returns the number of bytes written, though reading that number is optional (Type: size_t) |

::: details Click to View Example
```c{10}
int exampleNum = 123;

void setup()
{
  Serial.begin(115200);
}

void loop()
{
  Serial.printf("The example number = %d\r\n", exampleNum);
}

```
:::

### setTimeout()

This API is used to set the timeout value for read/write/flush API.

```c
Serial.setTimeout(timeout);
```

| **Function**   | `void setTimeout(unsigned long timeout)` |
| -------------- | ---------------------------------------- |
| **Parameters** | **timeout** - the timeout value          |
| **Returns**    | void                                     |

::: details Click to View Example
```c{5}
void setup() {
  Serial.begin(115200);

  //Set Timeout to 5000
  Serial.setTimeout(5000);
  Serial.print("Time out = ");
  Serial.println(Serial.getTimeout());
}

void loop() {
}
```
:::

### getTimeout()

This API is used to get the timeout value for read/write/flush API.

```c
Serial.getTimeout(timeout);
```

| **Function** | `unsigned long getTimeout(void)`           |
| ------------ | ------------------------------------------ |
| **Returns**  | The value of timeout (Type: unsigned long) |

::: details Click to View Example
```c{7}
void setup() {
  Serial.begin(115200);

  //Set Timeout to 5000
  Serial.setTimeout(5000);
  Serial.print("Time out = ");
  Serial.println(Serial.getTimeout());
}

void loop() {
}
```
:::

### readBytes()

Read characters from Stream into buffer terminates if length characters have been read, or timeout (see [setTimeout](#settimeout)).

```c
Serial.readBytes(buffer, length);
```

::: tip 📝 NOTE
`Serial.readBytes()` inherits from the Stream utility class.
:::


| **Function**   | `size_t readBytes(char* buffer,size_t length)`                                                |
| -------------- | --------------------------------------------------------------------------------------------- |
| **Parameters** | **buffer** - The buffer to store the bytes in. <br> **length** - The number of bytes to read. |
| **Returns**    | The number of bytes placed in the buffer (Type: `size_t`)                                     |

::: details Click to View Example
```c{12}
void setup() {
  Serial.begin(11500, RAK_CUSTOM_MODE);
}

void loop() {
  int returnBytes = 0;
  char readBuf[256];

  if (Serial.available > 0) {

    //Read 5 characters in 1 second
    returnBytes = Serial.readBytes(readBuf, 5);

    if (returnBytes == 0)
      Serial.print("read nothing");
    else {
      Serial.print("read: ");
      for (int i=0; i<returnBytes; i++) {
        Serial.print(readBuf[i]);
      }
    }

    Serial.println("");
  }
}
```
:::

### readBytesUntil()

As readBytes with terminator character Terminates if length characters have been read, timeout, or if the terminator character detected.

```c
Serial.readBytesUntil(terminator, buffer, length);
```

::: tip 📝 NOTE
`Serial.readBytesUntil()` inherits from the Stream utility class
:::


| **Function**   | `size_t readBytesUntil(char terminator, char* buffer, size_t length)`                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **terminator** - The character to search for <br> **buffer** - The buffer to store the bytes in <br> **length** - The number of bytes to read |
| **Returns**    | `size_t`                                                                                                                                      |

::: details Click to View Example
```c{12}
void setup() {
  Serial.begin(11500,RAK_CUSTOM_MODE);
}

void loop() {
  int returnBytes = 0;
  char readBuf[256];

  if (Serial.available > 0) {

    //Read 5 characters in 1 second,or Press ENTER to end reading
    returnBytes = Serial.readBytesUntil('\r', readBuf, 5);

    if (returnBytes == 0)
      Serial.print("read nothing");
    else {
      Serial.print("read: ");
      for (int i=0; i<returnBytes; i++) {
        Serial.print(readBuf[i]);
      }
    }

    Serial.println("");
  }
}
```
:::

### readString

Reads characters from a Stream into a String. The function terminates if it times out (see [setTimeout()](#settimeout)).


```c
Serial.readString();
```

::: tip 📝 NOTE
`Serial.readString()` inherits from the Stream utility class.
:::

| **Function** | `String readString()`                            |
| ------------ | ------------------------------------------------ |
| **Returns**  | A **String** read from a Stream (Type: `String`) |

::: details Click to View Example
```c{11}
void setup() {
  Serial.begin(11500,RAK_CUSTOM_MODE);
}

void loop() {
  String returnString = "";

  if (Serial.available > 0) {

    //Read 5 characters in 1 second
    returnString = Serial.readString();

    if (returnString == "")
      Serial.print("read nothing");
    else {
      Serial.print("read: ");
      Serial.println(returnString);
    }

    Serial.println("");
  }
}
```
:::

### readStringUntil()

Reads characters from the serial buffer into a String until the terminator is found or a timeout occurs (see [setTimeout()](#settimeout)).

```c
Serial.readStringUntil(terminator);
```

::: tip 📝 NOTE
`Serial.readStringUntil()` inherits from the Stream utility class.
:::


| **Function** | `String readStringUntil(char	terminator)`                                                          |
| ------------ | -------------------------------------------------------------------------------------------------- |
| **Returns**  | The entire **String** read from the serial buffer, up to the terminator character(Type: `String`). |

::: details Click to View Example
```c{11}
void setup() {
  Serial.begin(11500,RAK_CUSTOM_MODE);
}

void loop() {
  String returnString = "";

  if (Serial.available > 0) {

    //Read 5 characters in 1 second,or Press ENTER to end reading
    returnString = Serial.readStringUntil('\r');

    if (returnString == "")
      Serial.print("read nothing");
    else {
      Serial.print("read: ");
      Serial.println(returnString);
    }

    Serial.println("");
  }
}
```
:::

## Wire

### begin()

Initiate the Wire library and join the I2C bus as a master.

```c
Wire.begin();
```

| **Function** | `void begin(void)` |
| ------------ | ------------------ |
| **Returns**  | void               |


:::details Click to View Example
```c{2}
void setup() {
  Wire.begin();
}

void loop() {
}
```
:::

### end()

End the I2C bus
```c
Wire.end();
```

| **Function** | `void end(void)` |
| ------------ | ---------------- |
| **Returns**  | void             |

::: details Click to View Example
```c{6}
void setup() {
  Wire.begin();
}

void loop() {
  Wire.end();
}
```
:::

### setClock()

This function modifies the clock frequency for I2C communication. I2C slave devices have no minimum working clock frequency, however 100&nbsp;kHz is usually the baseline.

```c
Wire.setClock(freq);
```

| **Function**   | `void setClock(uint32_t freq)`                                                                                                     |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **freq**	- The value (in Hertz) of desired communication clock. Accepted values are 100000 (standard mode) and 400000 (fast mode). |
| **Returns**    | void                                                                                                                               |

::: details Click to View Example
```c{3}
void setup() {
  Wire.begin();
  Wire.setClock(400000);
}

void loop() {
}
```
:::

### beginTransmission()

Begin a transmission to the I2C slave device with the given address. Subsequently, queue bytes for transmission with the write() function and transmit them by calling [endTransmission()](#endtransmission).

```c
Wire.beginTransmission(address);
```

| **Function**   | `void beginTransmission(uint8_t address)`                    |
| -------------- | ------------------------------------------------------------ |
| **Parameters** | **address** - The 7-bit address of the device to transmit to |
| **Returns**    | void                                                         |

::: details Click to View Example
```c{6}
void setup() {
  Wire.begin();
}

void loop() {
  Wire.beginTransmission(0b1110000);
  Wire.write(0x35);
  Wire.endTransmission();
}
```
:::

### endTransmission()

Ends a transmission to a slave device that was begun by [beginTransmission()](#begintransmission) and transmits the bytes that were queued by `write()`.

```c
Wire.endTransmission();
```

```c
Wire.endTransmission(sendStop);
```

| **Function**   | `uint32_t endTransmission(uint8_t sendStop = false)`                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Parameters** | **sendStop(optional)** <br> &#x2022; **true** will send a stop message, releasing the bus after transmission. <br>  &#x2022; **false** will send a restart, keeping the connection active (default = false). |
| **Returns**    | 0	- success <br> 1- fail                                                                                                                                                                                     |

::: details Click to View Example
```c{8}
void setup() {
  Wire.begin();
}

void loop() {
  Wire.beginTransmission(0b1110000);
  Wire.write(0x35);
  Wire.endTransmission();
}
```
:::
### requestFrom()

Used by the master to request bytes from a slave device. The bytes may then be retrieved with the [available()](#available-2) and [read()](#read-2) functions.

```c
Wire.requestFrom(address, quantity);
```

```c
Wire.requestFrom(address, quantity, sendStop);
```


| **Function**   | `uint8_t requestFrom(uint8_t	address, uint8_t quantity, uint8_t sendStop)`                                                                                                                                                                                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **address** - The 7-bit address of the device to request bytes from <br> **quantity** - The number of bytes to request <br>  **sendStop** <br> - **true** will send a stop message after the request, releasing the bus. <br> - **false** will continually send a restart after the request, keeping the connection active(default = false) |
| **Returns**    | The number of bytes returned from the slave device (Type: byte)                                                                                                                                                                                                                                                                             |

::: details Click to View Example
```c{10}
void setup() {
  Wire.begin();
}

void loop() {
  Wire.beginTransmission(0b1110000);
  Wire.write(0x35);
  Wire.endTransmission();

  Wire.requestFrom(0b1110000, 6);

  while(Wire.available()) {
    char c = Wire.read();
    Serial.print(c);
  }
  delay(5000);

}
```
:::

### write()

Writes data to a slave device.

```c
Wire.write(value);
```

```c
Wire.write(data, size);
```

::: tip 📝 NOTE
In-between calls to [beginTransmission()](#begintransmission) and [endTransmission()](#endtransmission).
:::


| **Function**   | `virtual size_t write(const uint8_t* data, size_t size)`                                                                                       |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **value** - A value to send as a single byte <br> **data** - An array of data to send as bytes <br> **size** - The number of bytes to transmit |
| **Returns**    | `write()` will return the number of bytes written, though reading that number is optional (Type: byte)                                         |

::: details Click to View Example
```c{7}
  void setup() {
    Wire.begin();
  }

  void loop() {
    Wire.beginTransmission(0b1110000);
    Wire.write(0x35);
    Wire.endTransmission();

    Wire.requestFrom(0b1110000, 6);

    while(Wire.available()) {
      char c = Wire.read();
      Serial.print(c);
    }
    delay(5000);

  }
```
:::

### available()

Returns the number of bytes available for retrieval with [read()](#read-2).

```c
Wire.available();
```


| **Function** | `virtual int available(void)`             |
| ------------ | ----------------------------------------- |
| **Returns**  | The number of bytes available for reading |

::: details Click to View Example
```c{12}
void setup() {
  Wire.begin();
}

void loop() {
  Wire.beginTransmission(0b1110000);
  Wire.write(0x35);
  Wire.endTransmission();

  Wire.requestFrom(0b1110000, 6);

  while(Wire.available()) {
    char c = Wire.read();
    Serial.print(c);
  }
  delay(5000);

}
```
:::

### read()

Reads a byte that was transmitted from a slave device to a master

```c
Wire.read();
```

| **Function** | `virtual int read(void)` |
| ------------ | ------------------------ |
| **Returns**  | The next byte received   |


::: tip 📝 NOTE
- `read()` inherits from the Stream utility class.
:::

::: details Click to View Example
```c{13}
void setup() {
  Wire.begin();
}

void loop() {
  Wire.beginTransmission(0b1110000);
  Wire.write(0x35);
  Wire.endTransmission();

  Wire.requestFrom(0b1110000, 6);

  while(Wire.available()) {
    char c = Wire.read();
    Serial.print(c);
  }
  delay(5000);

}
```
:::

## SPI

### begin()

Initializes the SPI bus by setting SCK, MOSI, and SS to outputs, pulling SCK and MOSI low, and SS high.

```c
SPI.begin()
```

| **Function** | `void begin()` |
| ------------ | -------------- |
| **Returns**  | void           |

### end()

Disables the SPI bus.

```c
SPI.end()
```

| **Function** | `void end()` |
| ------------ | ------------ |
| **Returns**  | void         |

### transfer16()

SPI transfer is based on a simultaneous send and receive: the received data is returned in receivedVal16.

```c
receivedVal16 = SPI.transfer16(val16)
```

| **Function**   | `uint16_t transfer16	(uint16_t data)`                       |
| -------------- | ----------------------------------------------------------- |
| **Parameters** | **val16** - the two bytes variable to send out over the bus |
| **Returns**    | The received data                                           |


### transfer()

SPI transfer is based on a simultaneous send and receive: the received data is returned in receivedVal. In case of buffer transfers the received data is stored in the buffer in-place.

```c
receivedVal = SPI.transfer(val)
```

```c
SPI.transfer(buffer, size)
```


| **Function**   | `void transfer(void* buf, size_t count)`                                                          |
| -------------- | ------------------------------------------------------------------------------------------------- |
| **Parameters** | **val** - the byte to send out over the bus <br> **buffer** - the array of data to be transferred |
| **Returns**    | The received data                                                                                 |

### beginTransaction()

Initializes the SPI bus using the defined SPISettings.

```c
SPI.beginTransactions(mySetting)
```

| **Function**   | `void beginTransaction(SPISettings settings)`                |
| -------------- | ------------------------------------------------------------ |
| **Parameters** | **mySetting** - the chosen settings according to SPISettings |
| **Returns**    | void                                                         |

### endTransaction()

Stops using the SPI bus.

```c
SPI.endTransaction()
```

| **Function** | `void endTransaction()` |
| ------------ | ----------------------- |
| **Returns**  | void                    |

### setBitOrder()

Sets the order of the bits shifted out of and into the SPI bus, either LSBFIRST (least-significant bit first) or MSBFIRST (most-significant bit first).

```c
SPI.setBitOrder(order)
```

| **Function**   | `void setBitOrder(BitOrder order)`      |
| -------------- | --------------------------------------- |
| **Parameters** | **order** - either LSBFIRST or MSBFIRST |
| **Returns**    | void                                    |

### setDataMode()

Sets the SPI data mode: that is, clock polarity and phase.

```c
SPI.setDataMode(mode)
```

| **Function**   | `void setDataMode(uint8_t mode)`                                           |
| -------------- | -------------------------------------------------------------------------- |
| **Parameters** | **mode**<br>	- SPI_MODE0 <br>- SPI_MODE1 <br> - SPI_MODE2 <br> - SPI_MODE3 |
| **Returns**    | void                                                                       |

### setClockDivider()

Sets the SPI clock divider relative to the system clock.

```c
SPI.setClockDivider(divider)
```

| **Function**   | `void setClockDivider(uint32_t uc_div)`                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **divider**<br> - SPI_CLOCK_DIV2 <br> - SPI_CLOCK_DIV4 <br> - SPI_CLOCK_DIV8 <br> - SPI_CLOCK_DIV16 <br> - SPI_CLOCK_DIV32 <br> - SPI_CLOCK_DIV64 <br> - SPI_CLOCK_DIV128 <br> - SPI_CLOCK_DIV256 |
| **Returns**    | void                                                                                                                                                                                              |

## Time

### delay

Pauses the program for the amount of time (in milliseconds) specified as parameter. (There are 1000 milliseconds in a second.)

```c
delay(ms);
```

| **Function**   | `void delay(uint32_t ms)`                    |
| -------------- | -------------------------------------------- |
| **Parameters** | **ms** - The number of milliseconds to pause |

::: details Click to View Example
```c{11}
unsigned long myTime;

void setup() {
  Serial.begin(115200);
}
void loop() {
  Serial.print("Time: ");
  myTime = millis();

  Serial.println(myTime); // prints time since program started
  delay(1000);          // wait a second so as not to send massive amounts of data
}
```
:::

### delayMicroseconds

Pauses the program for the amount of time (in microseconds) specified by the parameter. There are a thousand microseconds in a millisecond and a million microseconds in a second.

```c
delayMicroSeconds(us);
```

| **Function**   | `void delayMicroseconds(uint32_t us)`        |
| -------------- | -------------------------------------------- |
| **Parameters** | **us** - The number of microseconds to pause |


::: details Click to View Example
```c{11}
unsigned long time;

void setup() {
  Serial.begin(115200);
}
void loop() {
  Serial.print("Time: ");
  time = micros();

  Serial.println(time); //prints time since program started
  delayMicroseconds(1000);          // wait a second so as not to send massive amounts of data
}
```
:::

### millis

Returns the number of milliseconds passed since the device began running the current program.

```c
millis();
```

| **Function** | `unsigned long millis()`                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------------- |
| **Returns**  | The number of milliseconds since the device began running the current program (Type: unsigned long). |

::: details Click to View Example
```c{8}
unsigned long myTime;

void setup() {
  Serial.begin(115200);
}
void loop() {
  Serial.print("Time: ");
  myTime = millis();

  Serial.println(myTime); // prints time since program started
  delay(1000);          // wait a second so as not to send massive amounts of data
}
```
:::

### micros

Returns the number of microseconds since the device began running the current program.

```c
unsigned long micros()
```

| **Function** | `micros();`                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------------- |
| **Returns**  | Number of microseconds since the device began running the current program (Type: unsigned long) |

::: details Click to View Example
```c{8}
unsigned long time;

void setup() {
  Serial.begin(115200);
}
void loop() {
  Serial.print("Time: ");
  time = micros();

  Serial.println(time); //prints time since program started
  delayMicrosecond(1000);          // wait a second so as not to send massive amounts of data
}
```
:::

## AdvancedIO

### tone()

Generates a square wave of the specified frequency (and 50% duty cycle) on a pin. A duration can be specified, otherwise the wave continues until a call to [noTone()](#notone). Only one tone can be generated at a time. If a tone is already playing on a different pin, the call to tone() will have no effect. If the tone is playing on the same pin, the call will set its frequency.

```c
tone(pin, frequency);
```

```c
tone(pin, frequency, duration);
```

| **Function**   | `void tone(uint8_t pin, uint32_t frequency, uint64_t duration = 0)`                                                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Parameters** | **pin** - The device pin on which to generate the tone <br> **frequency** - The frequency of the tone in hertz <br> **duration(optional)** - The duration of the tone in milliseconds (default = no timeout) |
| **Returns**    | void                                                                                                                                                                                                         |

::: details Click to View Example
```c{20,22}
uint8_t ledPin = 36;
uint8_t pulsePin = 13;
unsigned long duration;

void setup() {
  Serial.begin(115200);
  pinMode(pulsePin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  duration = pulseIn(pulsePin, LOW);
  Serial.print("Pulse duration = ");
  Serial.print((float)duration/1000000);
  Serial.println(" sec");

  if(duration >= 15000000)
    noTone(ledPin);
  else if(duration >= 10000000)
    tone(ledPin, 494, 5000);
  else if(duration >= 5000000)
    tone(ledPin, 494);
}
```
:::

### noTone()

Stops the generation of a square wave triggered by [tone()](#tone).

```c
noTone(pin);
```

| **Function**   | `void noTone(uint8_t pin)`                                    |
| -------------- | ------------------------------------------------------------- |
| **Parameters** | **pin** - The device pin on which to stop generating the tone |
| **Returns**    | void                                                          |

::: details Click to View Example
```c{18}
uint8_t ledPin = 36;
uint8_t pulsePin = 13;
unsigned long duration;

void setup() {
  Serial.begin(115200);
  pinMode(pulsePin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  duration = pulseIn(pulsePin, LOW);
  Serial.print("Pulse duration = ");
  Serial.print((float)duration/1000000);
  Serial.println(" sec");

  if(duration >= 15000000)
    noTone(ledPin);
  else if(duration >= 10000000)
    tone(ledPin, 494, 5000);
  else if(duration >= 5000000)
    tone(ledPin, 494);
}
```
:::

### shiftOut()

Shifts out a byte of data one bit at a time. Starts from either the most (That it the leftmost) or least (rightmost) significant bit. Each bit is written in turn to a data pin, after which a clock pin is pulsed (taken high, then low) to indicate that the bit is available.

```c
shiftOut(dataPin, clockPin, bitOrder, val);
```

| **Function**   | `void shiftOut(uint8_t dataPin, uint8_t clockPin, uint8_t bitOrder, uint8_t val)`                                                                                                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **dataPin** - The pin on which to output each bit <br> **clockPin** - The pin to toggle once the dataPin has been set to the correct value <br> **bitOrder** - Which order to shift out the bits, either **MSBFIRST** or **LSBFIRST** <br> **val** - The data to shift out |
| **Returns**    | void                                                                                                                                                                                                                                                                       |

### shiftIn()

Shifts in a byte of data one bit at a time. Starts from either the most (That is the leftmost) or least (rightmost) significant bit. For each bit, the clock pin is pulled high, the next bit is read from the data line, and then the clock pin is taken low.

```c
byte incoming = shiftIn(dataPin, clockPin, bitOrder);
```

| **Function**   | `uint32_t shiftIn(uint8_t dataPin, uint8_t clockPin, uint8_t bitOrder)`                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **dataPin** - The pin on which to output each bit <br> **clockPin** - The pin to toggle once the dataPin has been set to the correct value <br> **bitOrder** - Which order to shift out the bits, either **MSBFIRST** or **LSBFIRST** |
| **Returns**    | The value read(Type: byte);                                                                                                                                                                                                           |


### pulseIn()

Reads a pulse (either HIGH or LOW) on a pin. For example, if value is HIGH, pulseIn() waits for the pin to go from LOW to HIGH, starts timing, then waits for the pin to go LOW and stops timing. Returns the length of the pulse in microseconds or gives up and returns 0 if no complete pulse was received within the timeout.

```c
pulseIn(pin, state);
```

```c
pulseIn(pin, state, timeout);
```

| **Function**   | `unsigned long pulseIn(uint8_t pin, uint8_t state, unsigned long timeout = 1000000L)`                                                                                                                                        |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **pin** - The pin on which you want to read a pulse <br> **state** - Type of pulse to read: either HIGH or LOW <br> **timeout(optional)** - The number of microseconds to wait for the pulse to start; default is one second |
| **Returns**    | The length of the pulse (in microseconds) or 0 if no pulse started before the timeout(Type: unsigned long)                                                                                                                   |

::: details Click to View Example
```c{12}
uint8_t ledPin = 36;
uint8_t pulsePin = 13;
unsigned long duration;

void setup() {
  Serial.begin(115200);
  pinMode(pulsePin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  duration = pulseIn(pulsePin, LOW);
  Serial.print("Pulse duration = ");
  Serial.print((float)duration/1000000);
  Serial.println(" sec");

  if(duration >= 15000000)
    noTone(ledPin);
  else if(duration >= 10000000)
    tone(ledPin, 494, 5000);
  else if(duration >= 5000000)
    tone(ledPin, 494);
}
```
:::
### pulseInLong()

`pulseInLong()` is an alternative to `pulseIn()` which is better at handling long pulse and interrupt affected scenarios

```c
pulseInLong(pin, state);
```

```c
pulseInLong(pin, state, timeout);
```

| **Function**   | `unsigned long pulseInLong(uint8_t pin, uint8_t state, unsigned long timeout = 1000000L)`                                                                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **pin** - The pin on which you want to read a pulse <br> **state** - Type of pulse to read: either HIGH or LOW <br> **timeout(optional)** - The number of microseconds to wait for the pulse to start; default is one second. |
| **Returns**    | The length of the pulse (in microseconds) or 0 if no pulse started before the timeout(Type: unsigned long).                                                                                                                   |


## Characters

### isAlphaNumeric()

Analyze if a char is alphanumeric (that is a letter or a numbers). Returns true if thisChar contains either a number or a letter.

```c
isAlphaNumeric(thisChar);
```

| **Function**   | `boolean isAlphaNumeric(int thisChar)`                                                   |
| -------------- | ---------------------------------------------------------------------------------------- |
| **Parameters** | **thisChar**	variable(Type: char)                                                        |
| **Returns**    | **TRUE**: The character is alphanumeric<br> **FALSE**: The character is not alphanumeric |

::: details Click to View Example
```c{6}
char mychar = 'A';

void setup() {
  Serial.begin(115200);

  if (isAlphaNumeric(myChar)) { // tests if myChar isa letter or a number
    Serial.println("The character is alphanumeric");
  }
  else {
    Serial.println("The character is not alphanumeric");
  }
}

void loop() {
}
```
:::


### isAlpha()

Analyze if a char is alpha (that is a letter). Returns true if thisChar contains a letter.

```c
isAlpha(thisChar);
```

| **Function**   | `boolean isAlpha(int thisChar)`                                                    |
| -------------- | ---------------------------------------------------------------------------------- |
| **Parameters** | **thisChar**	variable(Type: char)                                                  |
| **Returns**    | **TRUE**: The character is a letter<br> **FALSE**	: The character is not a letter |

::: details Click to View Example
```c {6}
char mychar = 'A';

void setup() {
  Serial.begin(115200);

  if (isAlpha(myChar)) {  // tests if myChar is a letter
    Serial.println("The character is a letter");
  }
  else {
    Serial.println("The character is not a letter");
  }
}

void loop() {
}
```
:::

### isAscii()

Analyze if a char is Ascii. Returns true if thisChar contains an Ascii character.

```c
isAscii(thisChar);
```

| **Function**   | `boolean isAscii(int thisChar)`                                               |
| -------------- | ----------------------------------------------------------------------------- |
| **Parameters** | **thisChar**	variable(Type: char)                                             |
| **Returns**    | **TRUE**: The character is Ascii <br> **FALSE**	: The character is not Ascii |


::: details Click to View Example
```c {6}
char mychar = 'A';

void setup() {
  Serial.begin(115200);

  if (isAscii(myChar)) {  // tests if myChar is an Ascii character
    Serial.println("The character is Ascii");
  }
  else {
    Serial.println("The character is not Ascii");
  }
}

void loop() {
}
```
:::

### isWhitespace

Analyze if a char is a space character. Returns true if the argument is a space or horizontal tab ('').

```c
isWhitespace(thisChar);
```

| **Function**   | `boolean isWhitespace(int thisChar)`                                                         |
| -------------- | -------------------------------------------------------------------------------------------- |
| **Parameters** | **thisChar**	variable(Type: char)                                                            |
| **Returns**    | **TRUE**: The character is a space or tab<br> **FALSE**: The character is not a space or tab |

::: details Click to View Example
```c {6}
char mychar = 'A';

void setup() {
  Serial.begin(115200);

  if (isWhitespace(myChar)) { // tests if myChar is a space character
    Serial.println("The character is a space or tab");
  }
  else {
    Serial.println("The character is not a space or tab");
  }
}

void loop() {
}
```
:::


### isControl()

Analyze if a char is a control character. Returns true if thisChar is a control character.

```c
isControl(thisChar);
```

| **Function**   | `boolean isControl(int thisChar)`                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------- |
| **Parameters** | **thisChar**	variable(Type: char)                                                                       |
| **Returns**    | **TRUE**: The character is a control character <br> **FALSE**: The character is not a control character |

::: details Click to View Example
```c {6}
char mychar = 'A';

void setup() {
  Serial.begin(115200);

  if (isControl(myChar)) {  // tests if myChar is a control character
    Serial.println("The character is a control character");
  }
  else {
    Serial.println("The character is not a control character");
  }
}

void loop() {
}
```
:::


### isDigit()

Analyze if a char is a digit (that is a number). Returns true if thisChar is a number.

```c
isDigit(thisChar);
```

| **Function**   | `boolean isDigit(int thisChar)`                                                   |
| -------------- | --------------------------------------------------------------------------------- |
| **Parameters** | **thisChar**	variable(Type: char)                                                 |
| **Returns**    | **TRUE**: The character is a number <br> **FALSE**: The character is not a number |

::: details Click to View Example
```c {6}
char mychar = 'A';

void setup() {
  Serial.begin(115200);

  if (isDigit(myChar)) {  // tests if myChar is a digit
    Serial.println("The character is a number");
  }
  else {
    Serial.println("The character is not a number");
  }
}

void loop() {
}
```
:::

### isGraph()

Analyze if a char is printable with some content (space is printable but has no content). Returns true if thisChar is printable.

```c
isGraph(thisChar);
```

| **Function**   | `boolean isGraph(int thisChar)`                                                     |
| -------------- | ----------------------------------------------------------------------------------- |
| **Parameters** | **thisChar**	variable(Type: char)                                                   |
| **Returns**    | **TRUE**: The character is printable <br> **FALSE**: The character is not printable |

::: details Click to View Example
```c {6}
char mychar = 'A';

void setup() {
  Serial.begin(115200);

  if (isGraph(myChar)) {  // tests if myChar is a printable character but not a blank space.
    Serial.println("The character is printable");
  }
  else {
    Serial.println("The character is not printable");
  }
}

void loop() {
}
```
:::

### isLowerCase()

Analyze if a char is lower case (that is a letter in lower case). Returns true if thisChar contains a letter in lower case.

```c
isLowerCase(thisChar);
```

| **Function**   | `boolean isLowerCase(int thisChar)`                                                   |
| -------------- | ------------------------------------------------------------------------------------- |
| **Parameters** | **thisChar**	variable(Type: char)                                                     |
| **Returns**    | **TRUE**: The character is lower case <br> **FALSE**: The character is not lower case |

::: details Click to View Example
```c {6}
char mychar = 'A';

void setup() {
  Serial.begin(115200);

  if (isLowerCase(myChar)) {  // tests if myChar is a lower case letter
    Serial.println("The character is lower case");
  }
  else {
    Serial.println("The character is not lower case");
  }
}

void loop() {
}
```
:::


### isPrintable()

Analyze if a char is printable (that is any character that produces an output, even a blank space). Returns true if thisChar is printable

```c
isPrintable(thisChar);
```

| **Function**   | `boolean isPrintable(int thisChar)`                                                 |
| -------------- | ----------------------------------------------------------------------------------- |
| **Parameters** | **thisChar**	variable(Type: char)                                                   |
| **Returns**    | **TRUE**: The character is printable <br> **FALSE**: The character is not printable |

::: details Click to View Example
```c {6}
char mychar = 'A';

void setup() {
  Serial.begin(115200);

  if (isPrintable(myChar)) {  // tests if myChar is printable char
    Serial.println("The character is printable");
  }
  else {
    Serial.println("The character is not printable");
  }
}

void loop() {
}
```
:::

### isPunct()

Analyze if a char is punctuation (that is a comma, a semicolon, an exclamation mark and so on). Returns true if thisChar is punctuation.

```c
isPunct(thisChar);
```

| **Function**   | `boolean isPunct(int thisChar)`                                                            |
| -------------- | ------------------------------------------------------------------------------------------ |
| **Parameters** | **thisChar**	variable(Type: char)                                                          |
| **Returns**    | **TRUE**: The character is a punctuation<br> **FALSE**: The character is not a punctuation |

::: details Click to View Example
```c {6}
char mychar = 'A';

void setup() {
  Serial.begin(115200);

  if (isPunct(myChar)) {  // tests if myChar is a punctuation character
    Serial.println("The character is a punctuation");
  }
  else {
    Serial.println("The character is not a punctuation");
  }
}

void loop() {
}
```
:::

### isSpace()

Analyze if a char is a white-space character. Returns true if the argument is a space, form **feed ('')**, **newline ('')**, **carriage return ('')**, **horizontal tab ('')**, or **vertical tab ('')**.

```c
isSpace(thisChar);
```

| **Function**   | `boolean isSpace(int thisChar)`                                                         |
| -------------- | --------------------------------------------------------------------------------------- |
| **Parameters** | **thisChar**	variable(Type: char)                                                       |
| **Returns**    | **TRUE**: The character is white-space <br> **FALSE**: The character is not white-space |

::: details Click to View Example
```c {6}
char mychar = 'A';

void setup() {
  Serial.begin(115200);

  if (isSpace(myChar)) {  // tests if myChar is a white-space character
    Serial.println("The character is white-space");
  }
  else {
    Serial.println("The character is not white-space");
  }
}

void loop() {
}
```
:::

### isUpperCase()

Analyze if a char is upper case (that is a letter in upper case). Returns true if thisChar is upper case.

```c
isUpperCase(thisChar);
```

| **Function**   | `boolean isUpperCase(int thisChar)`                                                   |
| -------------- | ------------------------------------------------------------------------------------- |
| **Parameters** | **thisChar**	variable(Type: char)                                                     |
| **Returns**    | **TRUE**: The character is upper case <br> **FALSE**: The character is not upper case |

::: details Click to View Example
```c {6}
char mychar = 'A';

void setup() {
  Serial.begin(115200);

  if (isUpperCase(myChar)) {  // tests if myChar is an upper case letter
    Serial.println("The character is upper case");
  }
  else {
    Serial.println("The character is not upper case");
  }
}

void loop() {
}
```
:::

### isHexadecimalDigit()

Analyze if a char is an hexadecimal digit (A-F, 0-9). Returns true if thisChar contains an hexadecimal digit.

```c
isHexadecimalDigit(thisChar);
```

| **Function**   | `boolean isHexadecimalDigit(int thisChar)`                                                                |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| **Parameters** | **thisChar**	variable(Type: char)                                                                         |
| **Returns**    | **TRUE**: The character is an hexadecimal digit <br> **FALSE**: The character is not an hexadecimal digit |

::: details Click to View Example
```c {6}
char mychar = 'A';

void setup() {
  Serial.begin(115200);

  if (isHexadecimalDigit(myChar)) { // tests if myChar is an hexadecimal digit
    Serial.println("The character is an hexadecimal digit");
  }
  else {
    Serial.println("The character is not an hexadecimal digit");
  }
}

void loop() {
}
```
:::


## Bit and Byte

### bitRead

Reads a bit of a number.

```c
bitRead(value, bit);
```

| **Function**   | `uint8_t bitRead(value, bit)`                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **value** - The number from which to read <br> **bit** - Which bit to read, starting at 0 for the least-significant (rightmost) bit |
| **Returns**    | The value of the bit (0 or 1)                                                                                                       |

::: details Click to View Example
```c{6,9,12,15}
void setup() {
  Serial.begin(115200);
  Serial.println("Read the bits of 6(0110)");

  Serial.print("bitRead(6, 0) = ");
  Serial.println(bitRead(6, 0));    //print the first bit of 6

  Serial.print("bitRead(6, 1) = ");
  Serial.println(bitRead(6, 1));    //print the second bit of 6

  Serial.print("bitRead(6, 2) = ");
  Serial.println(bitRead(6, 2));    //print the third bit of 6

  Serial.print("bitRead(6, 3) = ");
  Serial.println(bitRead(6, 3));    //print the fourth bit of 6
}

void loop() {
}
```
:::

### bitSet

Sets (writes a 1 to) a bit of a numeric variable.

```c
bitSet(value, bit);
```

| **Function**   | `void bitSet(value, bit)`                                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Parameters** | **value** - The numeric variable whose bit to set <br> **bit** - Which bit to set, starting at 0 for the least-significant (rightmost) bit |
| **Returns**    | void                                                                                                                                       |

::: details Click to View Example
```c{10}
void setup() {
  Serial.begin(115200);

  Serial.print("Before bitSet(): 6 => ");
  Serial.println(6, BIN);

  Serial.print("After bitSet(6, 0) => ");
  int value = 6;
  int pos = 0;
  Serial.println(bitSet(value,pos), BIN);  //set the first bit of 6(0110) to 1
}

void loop() {
}
```
:::

### bitClear

Clears (writes a 0 to) a bit of a numeric variable.

```c
bitClear(value, bit);
```

| **Function**   | `void bitClear(value, bit)`                                                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **value** - The numeric variable whose bit to clear <br> **bit** - Which bit to clear, starting at 0 for the least-significant (rightmost) bit |
| **Returns**    | The value of the numeric variable after the bit at position n is cleared                                                                       |

::: details Click to View Example
```c{10}
void setup() {
  Serial.begin(115200);

  Serial.print("Before bitClear(): 6 => ");
  Serial.println(6, BIN);

  Serial.print("After bitClear(6, 1) => ");
  int value = 6;
  int pos = 1;
  Serial.println(bitClear(value,ipos), BIN);  // set the second bit of 6(0110) to 0
}

void loop() {
}
```
:::

### bitWrite

Writes a bit of a numeric variable.

```c
bitWrite(value, bit, bitvalue);
```

| **Function**   | `void bitWrite(value, bit, bitvalue)`                                                                                                                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **value** - The numeric variable to which to write <br> **bit** - Which bit of the number to write, starting at 0 for the least-significant (rightmost) bit <br> **bitvalue** - The value to write to the bit (0 or 1) |
| **Returns**    | void                                                                                                                                                                                                                   |

::: details Click to View Example
```c{9,12,15,18}
void setup() {
  Serial.begin(115200);

  int target = 6; // set the bitWrite target to 6
  Serial.print("Before bitWrite(): 6 => ");
  Serial.println(target, BIN);

  Serial.print("After bitWrite(target, 0, 1) => ");  // Set the first bit of target to 1
  Serial.println(bitWrite(target, 0,1), BIN);

  Serial.print("After bitWrite(target, 1, 0) => ");  // Set the second bit of target to 0
  Serial.println(bitWrite(target, 1,0), BIN);

  Serial.print("After bitWrite(target, 2, 0) => ");  // Set the third bit of target to 0
  Serial.println(bitWrite(target, 2,0), BIN);

  Serial.print("After bitWrite(target, 3, 1) => ");  // Set the fourth bit of target to 1
  Serial.println(bitWrite(target, 3,1), BIN);

  Serial.println("");
  Serial.println("target now should be 9(1001)");
  Serial.print("target = ");
  Serial.println(target);
}

void loop() {
}
```
:::


### bit

Computes the value of the specified bit. (bit 0 is 1, bit 1 is 2, bit 2 is 4, etc.)

```c
bit(b);
```

| **Function**   | `uint8_t bit(b)`                       |
| -------------- | -------------------------------------- |
| **Parameters** | **b** - The bit whose value to compute |
| **Returns**    | The value of the bit                   |

::: details Click to View Example
```c{5,7}
void setup() {
  Serial.begin(115200);

  Serial.print("bit 0: ");
  Serial.println(bit(0));
  Serial.print("bit 3: ");
  Serial.println(bit(3));
}

void loop() {
}
```
:::


### lowByte

Extracts the low-order (rightmost) byte of a variable (e.g. a word).

```c
lowByte(w);
```

| **Function**   | `uint8_t lowByte(w)`        |
| -------------- | --------------------------- |
| **Parameters** | **w** - A value of any type |
| **Returns**    | byte                        |

::: details Click to View Example
```c{6,9}
void setup() {
  Serial.begin(115200);
  Serial.println("Test target 0xABCD");

  uint16_t target = 0xABCD;

  Serial.print("lowByte() of 0xABCD = "); // extract the low-order byte of the target
  Serial.println(lowByte(target), HEX);

  Serial.print("highByte() of 0xABCD = "); // extract the low-order byte of the target
  Serial.println(highByte(target), HEX);
}

void loop() {
}
```
:::

### highByte

Extracts the high-order (leftmost) byte of a word (or the second lowest byte of a larger data type).

```c
highByte(w);
```

| **Function**   | `uint8_t highByte(w)`       |
| -------------- | --------------------------- |
| **Parameters** | **w** - A value of any type |
| **Returns**    | byte                        |

::: details Click to View Example
```c{6,9}
void setup() {
  Serial.begin(115200);
  Serial.println("Test target 0xABCD");

  uint16_t target = 0xABCD;

  Serial.print("lowByte() of 0xABCD = "); // extract the low-order byte of the target
  Serial.println(lowByte(target), HEX);

  Serial.print("highByte() of 0xABCD = "); // extract the low-order byte of the target
  Serial.println(highByte(target), HEX);
}

void loop() {
}
```
:::


## DigitalIO

### pinMode()

Configures the specified pin to behave either as an input or an output.

```c
pinMode(pin, mode);
```

| **Function**   | `void pinMode(uint8_t pin, uint8_t mode)`                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **pin** - The pin which you want to set <br> **mode** <br> - `INPUT`<br> -  `OUTPUT`<br> -  `INPUT_PULLUP` <br> -  `INPUT_PULLDOWN` |
| **Returns**    | void                                                                                                                                |

::: details Click to View Example
```c{6,7}
uint8_t ledPin = 36;   // LED connected to digital pin 36
uint8_t inputPin = 13; // input connected to digital pin 13

void setup()
{
    pinMode(ledPin, OUTPUT);         // sets the digital pin 36 as output
    pinMode(inputPin, INPUT_PULLUP); // sets the digital pin 13 as input
}

void loop()
{
    int val = digitalRead(inputPin); // read the input pin
    if (val == LOW)
        digitalWrite(ledPin, HIGH); // enable led if input is LOW
    else
        digitalWrite(ledPin, LOW); // disable led if input is HIGH
}
```
:::

### digitalWrite()

Writes a HIGH or a LOW value to a digital pin.

```c
digitalWrite(pin, value);
```

| **Function**   | `void digitalWrite(uint8_t pin, uint8_t value)`                        |
| -------------- | ---------------------------------------------------------------------- |
| **Parameters** | **pin** - The pin which you want to write <br> **value** - HIGH or LOW |
| **Returns**    | void                                                                   |

::: details Click to View Example
```c{14,16}
uint8_t ledPin = 36;   // LED connected to digital pin 36
uint8_t inputPin = 13; // input connected to digital pin 13

void setup()
{
    pinMode(ledPin, OUTPUT);         // sets the digital pin 36 as output
    pinMode(inputPin, INPUT_PULLUP); // sets the digital pin 13 as input
}

void loop()
{
    int val = digitalRead(inputPin); // read the input pin
    if (val == LOW)
        digitalWrite(ledPin, HIGH); // enable led if input is LOW
    else
        digitalWrite(ledPin, LOW); // disable led if input is HIGH
}
```
:::

### digitalRead()

Reads the value from a specified digital pin, either HIGH or LOW.


```c
digitalRead(pin);
```

| **Function**   | `int digitalRead	(uint8_t pin)`          |
| -------------- | ---------------------------------------- |
| **Parameters** | **pin** - The pin which you want to read |
| **Returns**    | HIGH or LOW(Type: int)                   |

::: details Click to View Example
```c{12}
uint8_t ledPin = 36;   // LED connected to digital pin 36
uint8_t inputPin = 13; // input connected to digital pin 13

void setup()
{
    pinMode(ledPin, OUTPUT);         // sets the digital pin 36 as output
    pinMode(inputPin, INPUT_PULLUP); // sets the digital pin 13 as input
}

void loop()
{
    int val = digitalRead(inputPin); // read the input pin
    if (val == LOW)
        digitalWrite(ledPin, HIGH); // enable led if input is LOW
    else
        digitalWrite(ledPin, LOW); // disable led if input is HIGH
}
```
:::

## AnalogIO

### analogRead()

Reads the value from the specified analog pin.

```c
analogRead(pin);
```


| **Function**   | `int analogRead(uint8_t pin)`                           |
| -------------- | ------------------------------------------------------- |
| **Parameters** | **pin** - The name of the analog input pin to read from |
| **Returns**    | The analog reading on the pin(Type: int)                |


### analogReference()

Configures the reference voltage used for analog input.

```c
analogReference(type);
```

| **Function**                           | `void analogReference(uint8_t type)`                                                                                                                                               |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters (Interval Vref RAK4630)** | **type** - Which type of reference to use: <br> `RAK_ADC_MODE_DEFAULT` (3.3&nbsp;V) <br> `RAK_ADC_MODE_3_0`  <br>`RAK_ADC_MODE_2_4` <br> `RAK_ADC_MODE_1_8` <br>`RAK_ADC_MODE_1_2` |
| **Returns**                            | void                                                                                                                                                                               |

:::warning ⚠️ WARNING
ADC voltage reference for RAK3172 and RAK3172-SiP is fixed to VDD voltage.
:::

### analogOversampling()

Sets the number of readings from the analog port.

```c
void analogOversampling(uint32_t ulOversampling);
```


| **Function**   | `void analogOversampling(uint32_t ulOversampling)`        |
| -------------- | --------------------------------------------------------- |
| **Parameters** | **ulOversampling** - Number of readings from analog input |
| **Returns**    | void                                                      |



### analogWrite()

Writes an analog value (PWM wave) to a pin. Can be used to light a LED at varying brightnesses or drive a motor at various speeds. After a call to `analogWrite()`, the pin will generate a steady rectangular wave of the specified duty cycle until the next call to `analogWrite()`.

```c
analogWrite(pin, value);
```

| **Function**   | `void analogWrite(uint8_t pin, int value)`                                                                           |
| -------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **pin** - The pin which you want to read <br> **value** - The duty cycle: between 0 (always off) and 255 (always on) |
| **Returns**    | void                                                                                                                 |

::: details Click to View Example
```c{30,32}
int val = 0; // variable to write the LED pin
bool state = false;
bool ledSwitch = false;

void valChage()
{
  state = !state;
  if(val == 0)
    ledSwitch = !ledSwitch;
}

void setup() {
  // put your setup code here, to run once:
  pinMode(GREEN_LED, OUTPUT);
  pinMode(BLUE_LED, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(val == 0 || val == 255)
     valChage();

  // To determine to make the led lighter or darker
  if(state)
    val++;
  else
    val--;
  // To switch the lighting led
  if(ledSwitch)
    analogWrite(GREEN_LED ,val); // Light the green led
  else
    analogWrite(BLUE_LED, val); //Light the blue led

}    digitalWrite(ledPin, LOW); // disable led if input is HIGH
```
:::

### analogReadResolution()

`analogReadResolution()` sets the size (in bits) of the value returned by `analogRead()`. It defaults to 10 bits (returns values between 0-1023) for backward compatibility with AVR based boards.


```c
analogReadResolution(bits);
```

| **Function**   | `void analogReadResolution(uint8_t bits)`                                                                                                                                                                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **bits** - Determines the resolution (in bits) of the value returned by the `analogRead()` function. You can set this between 1 and 32. You can also set the resolutions higher than the supported 12 or 16&nbsp;bits, but values returned by `analogRead()` will suffer approximation. |
| **Returns**    | void                                                                                                                                                                                                                                                                               |

### analogWriteResolution()

analogWriteResolution() sets the resolution of the `analogWrite()` function. It defaults to 8 bits (values between 0-255) for backward compatibility with AVR based boards.

```c
analogWriteResolution(bits);
```

| **Function**   | `void analogWriteResolution(uint8_t bits)`                                                                                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Parameters** | **bits** - Determines the resolution (in bits) of the values used in the `analogWrite()` function. The value can range from 1 to 32. If you choose a resolution higher or lower than your board’s hardware capabilities, the value used in `analogWrite()` will be either truncated if it’s too high or padded with zeros if it’s too low. |
| **Returns**    | void                                                                                                                                                                                                                                                                                                                                       |



## Interrupts

### interrupts()

Re-enables interrupts after they’ve been disabled by `noInterrupts()`.

```c
interrupts();
```

| **Function** | `void interrupts(void)` |
| ------------ | ----------------------- |
| **Returns**  | void                    |

::: details Click to View Example
```c{7}
void setup() {
}

void loop() {
  noInterrupts();
  // critical, time-sensitive code here
  interrupts();
  // other code here
}
```
:::

### noInterrupts()

Disables interrupts. You can re-enable them with `interrupts()`.

```c
noInterrupts();
```

| **Function** | `void noInterrupts(void)` |
| ------------ | ------------------------- |
| **Returns**  | void                      |

::: details Click to View Example
```c{5}
void setup() {
}

void loop() {
  noInterrupts();
  // critical, time-sensitive code here
  interrupts();
  // other code here
}
```
:::

### attachInterrupt()

Digital Pins With Interrupts. See also [AttachInterrupt](https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/)

```c
attachInterrupt(pin, ISR, mode);
```

| **Function**   | `void attachInterrupt(uint32_t pin, void(*)(void) userFunc, int mode)`                                                                                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Parameters** | **pin** - The number of the interrupt <br> **ISR** - The ISR to call when the interrupt occurs; this function must take no parameters and return nothing. This function is sometimes referred to as an interrupt service routine. <br>  **mode** - Defines when the interrupt should be triggered <br> &#x2022; LOW <br> &#x2022; CHANGE <br> &#x2022; RISING <br> &#x2022; FALLING. |
| **Returns**    | void                                                                                                                                                                                                                                                                                                                                                                                 |

::: details Click to View Example
```c{15}
uint8_t ledPin = 36;
uint8_t interruptPin = 13;
volatile byte state = LOW;
long startTime = 0;

void blink()
{
    state = !state;
}

void setup()
{
    pinMode(ledPin, OUTPUT);
    pinMode(interruptPin, INPUT_PULLUP);
    attachInterrupt(interruptPin, blink, CHANGE);
    startTime = millis();
}

void loop()
{
    //After 20sec will disable ISR for pin13
    if(millis() - startTime >= 20*1000)
        detachInterrupt(13);

    digitalWrite(ledPin, state);
}
```
:::

### detachInterrupt()

Turns off the given interrupt.

```c
detachInterrupt(pin);
```


| **Function**   | `void detachInterrupt(uint32_t pin)`             |
| -------------- | ------------------------------------------------ |
| **Parameters** | **pin** - The number of the interrupt to disable |
| **Returns**    | void                                             |

::: details Click to View Example
```c{23}
uint8_t ledPin = 36;
uint8_t interruptPin = 13;
volatile byte state = LOW;
long startTime = 0;

void blink()
{
    state = !state;
}

void setup()
{
    pinMode(ledPin, OUTPUT);
    pinMode(interruptPin, INPUT_PULLUP);
    attachInterrupt(interruptPin, blink, CHANGE);
    startTime = millis();
}

void loop()
{
    //After 20sec will disable ISR for pin13
    if(millis() - startTime >= 20*1000)
        detachInterrupt(13);

    digitalWrite(ledPin, state);
}
```
:::

## RandomNumber

### random

The random function generates pseudo-random numbers.

```c
random(max);
```

```c
random(min, max);
```


| **Function**   | `long random(long min, long max)`                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **min(optional)** - Lower bound of the random value, inclusive(default = 0) <br> **max** - Upper bound of the random value, exclusive |
| **Returns**    | A random number between min and max-1(Type: long)                                                                                     |

::: details Click to View Example
```c{8}
uint8_t ledPin = 36;
uint8_t interruptPin = 13;
volatile byte state = LOW;
long startTime = 0;

void blink()
{
    state = !state;
}

void setup()
{
    pinMode(ledPin, OUTPUT);
    pinMode(interruptPin, INPUT_PULLUP);
    attachInterrupt(interruptPin, blink, CHANGE);
    startTime = millis();
}

void loop()
{
    //After 20sec will disable ISR for pin13
    if(millis() - startTime >= 20*1000)
        detachInterrupt(13);

    digitalWrite(ledPin, state);
}
```
:::

### randomSeed()

`randomSeed()` initializes the pseudo-random number generator, causing it to start at an arbitrary point in its random sequence. This sequence, while very long, and random, is always the same.
If it is important for a sequence of values generated by `random()` to differ, on subsequent executions of a sketch, use `randomSeed()` to initialize the random number generator with a fairly random input, such as `analogRead()` on an unconnected pin.

```c
randomSeed(seed);
```


| **Function**   | `void randomSeed	(unsigned long seed)`                   |
| -------------- | -------------------------------------------------------- |
| **Parameters** | **seed**	number to initialize the pseudo-random sequence |
| **Returns**    | void                                                     |


::: details Click to View Example
```c{3}
void setup() {
  Serial.begin(115200);//UART0 baudrate 115200
  randomSeed(analogRead(0));
}

void loop() {
  Serial.print("Random number(0 ~ 999) : ");
  uint32_t l = random(1000);
  Serial.println(l);

  //delay 1 second
  delay(1000);
}
```
:::
