---
rak_img: /assets/images/wisblock/rak13800/overview/RAK13800_home.png
rak_desc: Contains instructions and tutorials for installing and deploying your RAK13800 project. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
tags:
  - quickstart
  - wisblock
  - RAK13800
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK13800 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK13800 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware 

- [RAK13800 WisBlock Ethernet Module](https://store.rakwireless.com/products/rak13800-wisblock-ethernet-interface)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base/)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- Li-Ion/LiPo battery (optional)
- Solar charger (optional)

#### Software 

##### Arduino

Based on the choice of the WisBlock Core, select a Development Environment:

<b>Programming via Arduino IDE</b>
- [RAKwireless BSP support for Arduino](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index)
<br>In Arduino IDE, once you installed the BSP, the examples for WisBlock Core will be automatically included on the list of examples. 

<b>Programming via PlatformIO IDE:</b>
- [RAKwireless WisBlock modules in PlatformIO](https://github.com/RAKWireless/WisBlock/blob/master/PlatformIO/README.md)


## Product Configuration

### Hardware Setup

The RAK13800 WisBlock Ethernet Module must be mounted on the IO slot of the WisBlock Base board, as shown in the highlighted red area. 

To use RAK13800 in your project, you need to connect a [Wisblock Core](/Product-Categories/WisBlock/#wisblock-core), as shown in the highlighted green area.

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/rak13800_connection.png"
  width="60%"
  caption="RAK13800 Connection to WisBlock Base Board"
/>

For more information about RAK13800, refer to the [Datasheet](../Datasheet/).


#### Assembling and Disassembling of WisBlock Modules

##### Assembling Procedure

Always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK13800 mounting connection to WisBlock Base module"
/>


##### Disassembling Procedure

The procedure in disassembling any type of WisBlock module is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
:::


### Software Configuration and Example

In the following example, you will be using the RAK13800 HTTP Client example. This example sends an HTTP request to `google.com` and prints the output on the console.


#### RAK13800 WisBlock Core Guide

##### Arduino Setup

1. Launch Arduino IDE and select your favorite **WisBlock Core** on **Arduino Boards Manager**:

- For **RAK4631**: `Tools` ->`Boards Manager` -> `RAKwireless nRF modules` -> `WisBlock RAK4631`
- For **RAK11200**: `Tools` ->`Boards Manager` -> `RAKwireless ESP32 modules` -> `WisCore RAK11200 Board`
- For **RAK11300**: `Tools` ->`Boards Manager` -> `Rakwireless Raspberry Pi modules` -> `WisBlock RAK11300`

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/board-manager-rak4631.png"
  width="100%"
  caption="Selecting WisBlock RAK4631 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE. The sample code will work on all **WisBlock Core**:

```c
/**
   @file RAK13800_Ethernet_HTTP_Client_W5100S.ino
   @author rakwireless.com
   @brief  This example connects to a website (http://www.google.com).
   @version 0.1
   @date 2021-11-02
   @copyright Copyright (c) 2021
**/

#include <SPI.h>
#include <RAK13800_W5100S.h> // Click to install library: http://librarymanager/All#RAK13800_W5100S

#define SERVER_PORT   80    //  Define the server port.

// If you don't want to use DNS (and reduce your sketch size)
// Use the numeric IP instead of the name for the server.
//IPAddress server(74,125,232,128);  // Numeric IP for Google (no DNS)
char server[] = "www.google.com";    // Name address for Google (using DNS)

IPAddress ip(192, 168, 0, 177); // Set the static IP address to use if the DHCP fails to assign

IPAddress myDns(192, 168, 0, 1);

EthernetClient client;

byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED }; // Set the MAC address, do not repeat in a network.
unsigned long beginMicros, endMicros;
unsigned long byteCount = 0;
bool printWebData = true;  // Set to false for better speed measurement

void setup() 
{
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH); // Enable power supply.
  
  pinMode(WB_IO3, OUTPUT);
  digitalWrite(WB_IO3, LOW);  // Reset Time.
  delay(100);
  digitalWrite(WB_IO3, HIGH);  // Reset Time.
  
  time_t timeout = millis();
  // Initialize Serial for debug output.
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
  Serial.println("RAK13800 Ethernet HTTP Client example.");

  Ethernet.init( SS );
  Serial.println("Initialize Ethernet with DHCP:");
  if (Ethernet.begin(mac) == 0) // Start the Ethernet connection.
  {
    Serial.println("Failed to configure Ethernet using DHCP");
    if (Ethernet.hardwareStatus() == EthernetNoHardware)  // Check for Ethernet hardware present.
    {
      Serial.println("Ethernet shield was not found.  Sorry, can't run without hardware. :(");
      while (true) 
      {
        delay(1); // Do nothing, just love you.
      }
    }
    while (Ethernet.linkStatus() == LinkOFF) 
    {
      Serial.println("Ethernet cable is not connected.");
      delay(500);
    }
    
    Ethernet.begin(mac, ip, myDns); // Try to configure using IP address instead of DHCP.
  } 
  else 
  {
    Serial.print("DHCP assigned IP ");
    Serial.println(Ethernet.localIP());
  }
 
  delay(1000);   // Give the Ethernet shield a second to initialize.
  Serial.print("connecting to ");
  Serial.print(server);
  Serial.println("...");

  if (client.connect(server, SERVER_PORT)) // If you get a connection, report back via serial.
  {
    Serial.print("connected to ");
    Serial.println(client.remoteIP());
    // Make a HTTP request.
    client.println("GET /search?q=arduino HTTP/1.1");
    client.println("Host: www.google.com");
    client.println("Connection: close");
    client.println();
  } 
  else 
  {
    Serial.println("connection failed");  // If you didn't get a connection to the server.
  }
  beginMicros = micros();
}

void loop() 
{
  int len = client.available(); //  If there are incoming bytes available from the server, read them and print them.
  if (len > 0) 
  {
    byte buffer[80];
    if (len > 80) 
  {
      len = 80;
  }
    client.read(buffer, len);
    if (printWebData) 
    {
      Serial.write(buffer, len); // Show in the serial monitor (slows some boards)
    }
    byteCount = byteCount + len;
  }

  if (!client.connected()) // If the server's disconnected, stop the client.
  {
    endMicros = micros();
    Serial.println();
    Serial.println("disconnecting.");
    client.stop();
    Serial.print("Received ");
    Serial.print(byteCount);
    Serial.print(" bytes in ");
    float seconds = (float)(endMicros - beginMicros) / 1000000.0;
    Serial.print(seconds, 4);
    float rate = (float)byteCount / seconds / 1000.0;
    Serial.print(", rate = ");
    Serial.print(rate);
    Serial.print(" kbytes/second");
    Serial.println();

    while (true) 
    {
      delay(1); // Do nothing forevermore.
    }
  }
}

```

::: tip 📝 NOTES
- If you experience any error in compiling the example sketch, check the updated code for the RAK11200 WisBlock Core Module that can be found on the [RAK13800 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/).
- Don't repeat the same MAC address on network : `byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };`.
- Don't forget to connect the ethernet cable on J4.
:::


3. Install the required library using **Arduino Library Manager**, as shown in **Figure 7**. On Arduino, select `Sketch` -> `Include Library` -> `Manage Libraries...`.


<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/rak13800-library.png"
  width="80%"
  caption="Installing the RAK13800 Library using Arduino library manager"
/>

Make sure you have installed the latest version of the [RAKWireless library for the RAK13800 Ethernet Module](https://github.com/RAKWireless/RAK13800-W5100S).


4. After a successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 8** and **Figure 9**.


<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/rak4631-port.png"
  width="100%"
  caption="Selecting the correct serial port"
/>

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/rak4631-upload.png"
  width="100%"
  caption="Uploading the RAK13800 Sketch"
/>

:::tip 📝 NOTE:
RAK11200 WisBlock WiFi module requires the BOOT0 pin to be configured properly before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

Before uploading your sketch on RAK11200, short circuit **BOOT0** and **GND** pins and press the reset button.

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/rak11200-boot0.jpg"
  width="80%"
  caption="RAK11200 download mode"
/>

5. When you have successfully uploaded the example sketch, check the Arduino console, as shown in  **Figure 11**.

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/rak13800-logs.png"
  width="100%"
  caption="RAK13800 HTTP client console output log"
/>

<!-- 

#### RAK13800 in RAK11200 WisBlock Core Guide

##### Arduino Setup


1. First, you need to select the RAK11200 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/board-manager-rak11200.png"
  width="100%"
  caption="Selecting WisBlock RAK11200 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE.

```c
/**
   @file RAK13800_Ethernet_HTTP_Client_W5100S.ino
   @author rakwireless.com
   @brief  This example connects to a website (http://www.google.com).
   @version 0.1
   @date 2021-11-02
   @copyright Copyright (c) 2021
**/

#include <SPI.h>
#include <RAK13800_W5100S.h> // Click to install library: http://librarymanager/All#RAK13800_W5100S

#define SERVER_PORT   80    //  Define the server port.

// If you don't want to use DNS (and reduce your sketch size)
// Use the numeric IP instead of the name for the server.
//IPAddress server(74,125,232,128);  // Numeric IP for Google (no DNS)
char server[] = "www.google.com";    // Name address for Google (using DNS)

IPAddress ip(192, 168, 0, 177); // Set the static IP address to use if the DHCP fails to assign

IPAddress myDns(192, 168, 0, 1);

EthernetClient client;

byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED }; // Set the MAC address, do not repeat in a network.
unsigned long beginMicros, endMicros;
unsigned long byteCount = 0;
bool printWebData = true;  // Set to false for better speed measurement

void setup() 
{
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH); // Enable power supply.
  
  pinMode(WB_IO3, OUTPUT);
  digitalWrite(WB_IO3, LOW);  // Reset Time.
  delay(100);
  digitalWrite(WB_IO3, HIGH);  // Reset Time.
  
  time_t timeout = millis();
  // Initialize Serial for debug output.
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
  Serial.println("RAK13800 Ethernet HTTP Client example.");

  Ethernet.init( SS );
  Serial.println("Initialize Ethernet with DHCP:");
  if (Ethernet.begin(mac) == 0) // Start the Ethernet connection.
  {
    Serial.println("Failed to configure Ethernet using DHCP");
    if (Ethernet.hardwareStatus() == EthernetNoHardware)  // Check for Ethernet hardware present.
    {
      Serial.println("Ethernet shield was not found.  Sorry, can't run without hardware. :(");
      while (true) 
      {
        delay(1); // Do nothing, just love you.
      }
    }
    while (Ethernet.linkStatus() == LinkOFF) 
    {
      Serial.println("Ethernet cable is not connected.");
      delay(500);
    }
    
    Ethernet.begin(mac, ip, myDns); // Try to configure using IP address instead of DHCP.
  } 
  else 
  {
    Serial.print("DHCP assigned IP ");
    Serial.println(Ethernet.localIP());
  }
 
  delay(1000);   // Give the Ethernet shield a second to initialize.
  Serial.print("connecting to ");
  Serial.print(server);
  Serial.println("...");

  if (client.connect(server, SERVER_PORT)) // If you get a connection, report back via serial.
  {
    Serial.print("connected to ");
    Serial.println(client.remoteIP());
    // Make a HTTP request.
    client.println("GET /search?q=arduino HTTP/1.1");
    client.println("Host: www.google.com");
    client.println("Connection: close");
    client.println();
  } 
  else 
  {
    Serial.println("connection failed");  // If you didn't get a connection to the server.
  }
  beginMicros = micros();
}

void loop() 
{
  int len = client.available(); //  If there are incoming bytes available from the server, read them and print them.
  if (len > 0) 
  {
    byte buffer[80];
    if (len > 80) 
	{
      len = 80;
	}
    client.read(buffer, len);
    if (printWebData) 
    {
      Serial.write(buffer, len); // Show in the serial monitor (slows some boards)
    }
    byteCount = byteCount + len;
  }

  if (!client.connected()) // If the server's disconnected, stop the client.
  {
    endMicros = micros();
    Serial.println();
    Serial.println("disconnecting.");
    client.stop();
    Serial.print("Received ");
    Serial.print(byteCount);
    Serial.print(" bytes in ");
    float seconds = (float)(endMicros - beginMicros) / 1000000.0;
    Serial.print(seconds, 4);
    float rate = (float)byteCount / seconds / 1000.0;
    Serial.print(", rate = ");
    Serial.print(rate);
    Serial.print(" kbytes/second");
    Serial.println();

    while (true) 
    {
      delay(1); // Do nothing forevermore.
    }
  }
}

```

::: tip 📝 NOTES
- If you experience any error in compiling the example sketch, check the updated code for the RAK11200 WisBlock Core Module that can be found on the [RAK13800 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/).
- Don't repeat the same MAC address on network : `byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };`.
- Don't forget to connect the ethernet cable on J4.
:::

3. Install the required library using **Arduino Library Manager** as shown in **Figure 12**. On Arduino select: `Sketch` -> `Include Library` -> `Manage Libraries...`.

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/rak13800-library.png"
  width="80%"
  caption="Installing the RAK13800 Library on RAK11200"
/>

Make sure you installed the latest version of the [RAKWireless library for the RAK13800 Ethernet Module](https://github.com/RAKWireless/RAK13800-W5100S).

4. Select the correct port and upload your code, as shown in **Figure 13** and **Figure 14**.

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/rak11200-port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

:::tip 📝 NOTE:
RAK11200 requires the BOOT0 pin to be configured properly before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

5. Before uploading your sketch, short circuit **BOOT0** and **GND** pins and press the reset button.

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/rak11200-boot0.jpg"
  width="80%"
  caption="RAK11200 download mode"
/>

6. Click on highlighted icon to upload the example sketch.

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/rak11200-upload.png"
  width="100%"
  caption="Uploading RAK13800 Sketch"
/>


6. When you have successfully uploaded the example sketch, check the Arduino console as shown in  **Figure 16**.

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/rak11200-console-http-client.png"
  width="100%"
  caption="RAK13800 HTTP client console output"
/>


#### RAK13800 in RAK11300 WisBlock Core Guide

##### Arduino Setup


1. First, you need to select the RAK11300 WisBlock Core as shown in **Figure 17**.

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/rak11300-board.png"
  width="100%"
  caption="Selecting RAK11300 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE.

```c
/**
   @file RAK13800_Ethernet_HTTP_Client_W5100S.ino
   @author rakwireless.com
   @brief  This example connects to a website (http://www.google.com).
   @version 0.1
   @date 2021-11-02
   @copyright Copyright (c) 2021
**/

#include <SPI.h>
#include <RAK13800_W5100S.h> // Click to install library: http://librarymanager/All#RAK13800_W5100S

#define SERVER_PORT   80    //  Define the server port.

// If you don't want to use DNS (and reduce your sketch size)
// Use the numeric IP instead of the name for the server.
//IPAddress server(74,125,232,128);  // Numeric IP for Google (no DNS)
char server[] = "www.google.com";    // Name address for Google (using DNS)

IPAddress ip(192, 168, 0, 177); // Set the static IP address to use if the DHCP fails to assign

IPAddress myDns(192, 168, 0, 1);

EthernetClient client;

byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED }; // Set the MAC address, do not repeat in a network.
unsigned long beginMicros, endMicros;
unsigned long byteCount = 0;
bool printWebData = true;  // Set to false for better speed measurement

void setup() 
{
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH); // Enable power supply.
  
  pinMode(WB_IO3, OUTPUT);
  digitalWrite(WB_IO3, LOW);  // Reset Time.
  delay(100);
  digitalWrite(WB_IO3, HIGH);  // Reset Time.
  
  time_t timeout = millis();
  // Initialize Serial for debug output.
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
  Serial.println("RAK13800 Ethernet HTTP Client example.");

  Ethernet.init( SS );
  Serial.println("Initialize Ethernet with DHCP:");
  if (Ethernet.begin(mac) == 0) // Start the Ethernet connection.
  {
    Serial.println("Failed to configure Ethernet using DHCP");
    if (Ethernet.hardwareStatus() == EthernetNoHardware)  // Check for Ethernet hardware present.
    {
      Serial.println("Ethernet shield was not found.  Sorry, can't run without hardware. :(");
      while (true) 
      {
        delay(1); // Do nothing, just love you.
      }
    }
    while (Ethernet.linkStatus() == LinkOFF) 
    {
      Serial.println("Ethernet cable is not connected.");
      delay(500);
    }
    
    Ethernet.begin(mac, ip, myDns); // Try to configure using IP address instead of DHCP.
  } 
  else 
  {
    Serial.print("DHCP assigned IP ");
    Serial.println(Ethernet.localIP());
  }
 
  delay(1000);   // Give the Ethernet shield a second to initialize.
  Serial.print("connecting to ");
  Serial.print(server);
  Serial.println("...");

  if (client.connect(server, SERVER_PORT)) // If you get a connection, report back via serial.
  {
    Serial.print("connected to ");
    Serial.println(client.remoteIP());
    // Make a HTTP request.
    client.println("GET /search?q=arduino HTTP/1.1");
    client.println("Host: www.google.com");
    client.println("Connection: close");
    client.println();
  } 
  else 
  {
    Serial.println("connection failed");  // If you didn't get a connection to the server.
  }
  beginMicros = micros();
}

void loop() 
{
  int len = client.available(); //  If there are incoming bytes available from the server, read them and print them.
  if (len > 0) 
  {
    byte buffer[80];
    if (len > 80) 
	{
      len = 80;
	}
    client.read(buffer, len);
    if (printWebData) 
    {
      Serial.write(buffer, len); // Show in the serial monitor (slows some boards)
    }
    byteCount = byteCount + len;
  }

  if (!client.connected()) // If the server's disconnected, stop the client.
  {
    endMicros = micros();
    Serial.println();
    Serial.println("disconnecting.");
    client.stop();
    Serial.print("Received ");
    Serial.print(byteCount);
    Serial.print(" bytes in ");
    float seconds = (float)(endMicros - beginMicros) / 1000000.0;
    Serial.print(seconds, 4);
    float rate = (float)byteCount / seconds / 1000.0;
    Serial.print(", rate = ");
    Serial.print(rate);
    Serial.print(" kbytes/second");
    Serial.println();

    while (true) 
    {
      delay(1); // Do nothing forevermore.
    }
  }
}

```


::: tip 📝 NOTES
- If you experience any error in compiling the example sketch, check the updated code for the RAK11200 WisBlock Core Module that can be found on the [RAK13800 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/).
- Don't repeat the same MAC address on network : `byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };`.
- Don't forget to connect the ethernet cable on J4.
:::


3. Install the required library using **Arduino Library Manager** as shown in **Figure 18**. On Arduino select: `Sketch` -> `Include Library` -> `Manage Libraries...`.

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/rak13800-library.png"
  width="80%"
  caption="Installing the RAK13800 Library on RAK11300"
/>

Make sure you installed the latest version of the [RAKWireless library for the RAK13800 Ethernet Module](https://github.com/RAKWireless/RAK13800-W5100S).

4. Select the correct port and upload your code, as shown in **Figure 19** and **Figure 20**.

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/rak11300-port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

5. Click on highlighted icon to upload the example sketch.

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/rak11300-upload.png"
  width="100%"
  caption="Uploading code"
/>

6. When you have successfully uploaded the example sketch, check the Arduino console as shown in  **Figure 21**.

<rk-img
  src="/assets/images/wisblock/rak13800/quickstart/rak11300-console-http-client.png"
  width="100%"
  caption="RAK13800 HTTP client console output"
/>

-->
