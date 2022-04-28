# Custom Mode

## Overview

RUI3 custom mode will allow you to create different commands outside the standard AT and Binary command modes. However, to develop custom mode, you will need to upload your own written code that uses RUI3 API using your favorite IDE like Arduino and Visual Studio. There is no limit on what you can do on custom mode. In this section, the necessary RUI APIs are shown to illustrate how you can create your own custom mode.

## Switching to Custom Mode

**AT Command to Custom Mode**

You need to use the RUI API `Serial.begin` to switch the serial operating mode to custom mode. There is no direct AT command to switch to custom mode. You have to upload a firmware that uses the RUI API to the device. For example, in switching the Serial to custom mode, you will need `Serial.begin(115200,RAK_CUSTOM_MODE)`.

**Binary Mode to Custom Mode**

You need to use the RUI API `Serial.begin` to switch the serial operating mode to custom mode. There is no direct Binary command to switch to custom mode. You have to upload a firmware that uses the RUI API to the device. For example, in switching Serial to custom mode, you will need `Serial.begin(115200,RAK_CUSTOM_MODE)`.

## Serial APIs for Custom Mode

**Checking how many bytes are from Serial Port**

You can use `Serial.available()` to know if there's input on the Serial Port. It also returns the number of bytes available for reading on the specific port.

**Reading bytes from Serial Port**

You can use `Serial.read()` to get a single byte from the input on the Serial Port. You can store it in a variable or form an array for later processing as part of your custom parser.

**Writing bytes to Serial Port**

You can use `Serial.printf()` to send bytes to the output of the Serial Port. You can use this to send reply to the custom commands you created.

## Custom Mode Single Char Parser Demo Code

```c
void my_handler(char buf)
{
    //Do something
    Serial.printf(“%c”, buf);
}

void setup()
{
    Serial.begin(115200, RAK_CUSTOM_MODE);
}

void loop()
{
    while (Serial.available())
    {
        char buf;

        buf = Serial.read()

        my_handler(buf);
    }
}
```