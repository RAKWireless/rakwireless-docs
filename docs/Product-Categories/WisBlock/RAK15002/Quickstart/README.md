---
rak_img: /assets/images/wisblock/rak15002/overview/rak15002_home.png
rak_desc: Contains instructions and tutorials for installing and deploying your RAK15002. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
tags:
  - quickstart
  - wisblock
  - rak15002
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK15002 Quick Start Guide

<!--
## Introduction

This guide introduces the WisBlock RAK15002 board and how to use it.
-->

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK15002 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware 

- [RAK15002 WisBlock SD Card Module](https://store.rakwireless.com/collections/wisblock-storage/products/sd-card-module-rak15002)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base/)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#battery-connector)
- [Solar charger (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#solar-panel-connector)

#### Software 

##### Arduino

- Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

The RAK15002 is a Micro SD card module that can be mounted to the IO slot of the WisBlock Baseboard. It allows the usage of Micro SD cards as a data storage medium. This module uses a 4-line SPI interface to access the SD card and supports the card insert detection feature. 

For more information about RAK15002, refer to the [Datasheet](../Datasheet/).


<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/connection.png"
  width="60%"
  caption="RAK15002 connection to WisBlock Base"
/>


#### Assembling and Disassembling of WisBlock Modules

##### Assembling Procedure

The RAK15002 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 2**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/mounting.png"
  width="60%"
  caption="RAK15002 mounting connection to WisBlock Base module"
/>


##### Disassembling Procedure

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
:::

### SD Card Preparation

The Micro SD Card should be formatted as FAT before using. You can use [SD Card Formatter](https://www.sdcard.org/downloads/formatter/) by SD Association or other third-party applications.

1. Open the SD Card Formatter application.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/sd_format.png"
  width="50%"
  caption="SD Card Formatter Application"
/>

2. Plug in your Micro SD Card using Micro SD Card Reader, and choose your SD Card assigned drive.

3. Select **Format** and proceed. *Formatting will remove your SD Card's files and contents*.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/sd_format1.png"
  width="50%"
  caption="Formatting Confirmation"
/>

4. After successfully formatting, you will receive a message, as shown in **Figure 8**.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/sd_format2.png"
  width="50%"
  caption="Formatting Success"
/>

5. You can now use your Micro SD Card on **RAK15002 Micro SD Card Module**.

### Software Configuration and Example

In the following example, you will be using the [RAK15002 WisBlock SD Card Module](https://store.rakwireless.com/collections/wisblock-storage/products/sd-card-module-rak15002).


These are the quick links that go directly to the software guide for the specific WisBlock Core module you use:

- [RAK15002 in RAK4631 WisBlock Core Guide](/Product-Categories/WisBlock/rak15002/Quickstart/#rak15002-in-rak4631-wisblock-core-guide)
- [RAK15002 in RAK11200 WisBlock Core Guide](/Product-Categories/WisBlock/rak15002/Quickstart/#rak15002-in-rak11200-wisblock-core-guide)
- [RAK15002 in RAK11300 WisBlock Core Guide](/Product-Categories/WisBlock/rak15002/Quickstart/#rak15002-in-rak11300-wisblock-core-guide)

#### RAK15002 in RAK4631 WisBlock Core Guide

##### Arduino Setup

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/connection4631.png"
  width="60%"
  caption="RAK15002 in RAK4631 Connection"
/>

1. Select the RAK4631 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/selectboard4631.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE.

```c
/**
   @file RAK15002_SD_Card.ino
   @author rakwireless.com
   @brief Read, write, delete SD card file for RAK4631.
   @version 0.1
   @date 2021-3-11
   @copyright Copyright (c) 2021
**/

#include "SPI.h"
#include "SD.h"//http://librarymanager/All#SD

/**
   @brief  This function is used to read data from a file. 
*/
void readFile(const char * path)
{
  Serial.printf("Reading file: %s\n", path);
  
  File file = SD.open(path, FILE_READ); // re-open the file for reading.
  if (file) 
  {
    Serial.println("Read from file: ");
    
    while (file.available()) 
    {
      Serial.write(file.read());  // read from the file until there's nothing else in it.
    }
    file.close(); // close the file.
  } 
  else 
  {
    Serial.println("Failed to open file for reading."); // if the file didn't open, print an error.
    return;
  }
}

/**
   @brief  This function is used to write data to a file. 
*/
void writeFile(const char * path, const char * message)
{
  Serial.printf("Writing file: %s\n", path);

  File file = SD.open(path, FILE_WRITE);

  if (file) // if the file opened okay, write to it:
  {
    if(file.print(message))
    {
      Serial.println("File written.");
    } 
    else 
    {
      Serial.println("Write failed.");
    }
    file.close();
  } 
  else 
  {
    Serial.println("Failed to open file for writing."); 
    return;
  }
}

/**
   @brief  This function is used to delete a file. 
*/
void deleteFile(const char * path)
{
  Serial.printf("Deleting file: %s\n", path);
  
  if(SD.remove(path))
  {
    Serial.println("File deleted.");
  } 
  else 
  {
    Serial.println("Delete failed.");
  }
}

/**
   @brief  This function is used to test read and write file speed. 
*/
void testFileIO(const char * path)
{
  Serial.println("Test read and write file speed.");
  Serial.printf("Writing file: %s\n", path);
  
  static uint8_t buf[512];
  size_t len = 0;
  uint32_t start = millis();
  uint32_t end = start;

  File file = SD.open(path, FILE_WRITE);

  if (file)// if the file opened okay, write to it.
  {
    size_t i;
    start = millis();
    for(i=0; i<2048; i++)
    {
      file.write(buf, 512);
    }
    end = millis() - start;
    Serial.printf("%u KB written for %u ms\n", 2048 * 512/1024, end);
    file.close();
  }
  else 
  {
    Serial.println("Failed to open file for writing.");
    return;
  }
  delay(10);
  
  file = SD.open(path, FILE_READ);
  if (file)
  {
    len = file.size();
    size_t flen = len;
    start = millis();
    while(len)
    {
      size_t toRead = len;
      if(toRead > 512)
      {
        toRead = 512;
      }
      file.read(buf, toRead);
      len -= toRead;
    }
    end = millis() - start;
    Serial.printf("%u KB read for %u ms\n", flen/1024, end);
    file.close();
  } 
  else 
  {
    Serial.println("Failed to open file for reading.");
    return;
  }
}

void setup() 
{
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
  Serial.println("RAK15002 SD Card Test.");
  Serial.println("=====================================");
  
  if (!SD.begin()) 
  {    
    Serial.println("Card Mount Failed! Please make sure the card is inserted!");
    return;
  }
  
  deleteFile("RAK15002.txt"); 

  writeFile("RAK15002.txt", "RAK15002 SD Card Test.\n");
  
  readFile("RAK15002.txt");
  
  testFileIO("RAK15002.txt");
}

void loop() 
{
}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK4631 WisBlock Core Module that can be found on the [RAK15002 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/RAK4630/IO/RAK15002_SD_Card/RAK15002_SD_Card.ino).
:::

3. Click the link highlighted in red to locate the library, as shown in **Figure 11**.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/click_library.png"
  width="100%"
  caption="Locating the required library in the Library Manager"
/>


4. Install the required library, as shown in **Figure 12**.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/library.png"
  width="100%"
  caption="Installing the Library"
/>


5. Select the correct port and upload your code, as shown in **Figure 13** and **Figure 14**.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/select_port4631.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/upload4631.png"
  width="100%"
  caption="Uploading code"
/>

6. When you have successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the RAK15002 read/write message, as shown in **Figure 15**. You will be able to see the status and the function performed on your SD Card.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/serialmonitor.png"
  width="100%"
  caption="RAK15002 logs"
/>


7. To verify the content, you can use a card reader and open the text file generated, as shown in **Figure 16** and **Figure 17**.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/check_content.png"
  width="70%"
  caption="The file generated using the code"
/>

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/check_content1.png"
  width="70%"
  caption="Text file contents"
/>

#### RAK15002 in RAK11200 WisBlock Core Guide

##### Arduino Setup

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/connection11200.png"
  width="60%"
  caption="RAK15002 in RAK11200 Connection"
/>

1. Select the RAK11200 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/selectboard11200.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE.

```c
/**
   @file RAK15002_SD_Card.ino
   @author rakwireless.com
   @brief Read, write, delete SD card file for RAK11200.
   @version 0.1
   @date 2021-3-11
   @copyright Copyright (c) 2021
**/

#include "FS.h"
#include "SD.h"
#include "SPI.h"

/**
   @brief  This function is used to read data from a file. 
*/
void readFile(fs::FS &fs, const char * path)
{
  Serial.printf("Reading file: %s\n", path);

  File file = fs.open(path);
  if(!file)
  {
    Serial.println("Failed to open file for reading.");
    return;
  }

  Serial.println("Read from file: ");
  while(file.available())
  {
    Serial.write(file.read());
  }
  file.close();
}

/**
   @brief  This function is used to write data to a file. 
*/
void writeFile(fs::FS &fs, const char * path, const char * message)
{
  Serial.printf("Writing file: %s\n", path);

  File file = fs.open(path, FILE_WRITE);
  if(!file)
  {
    Serial.println("Failed to open file for writing.");
    return;
  }
  if(file.print(message))
  {
    Serial.println("File written.");
  } 
  else 
  {
    Serial.println("Write failed.");
  }
  file.close();
}

/**
   @brief  This function is used to append data to a file. 
*/
void appendFile(fs::FS &fs, const char * path, const char * message)
{
  Serial.printf("Appending to file: %s\n", path);

  File file = fs.open(path, FILE_APPEND);
  if(!file)
  {
    Serial.println("Failed to open file for appending.");
    return;
  }
  if(file.print(message))
  {
    Serial.println("Message appended.");
  } 
  else 
  {
    Serial.println("Append failed.");
  }
  file.close();
}

/**
   @brief  This function is used to delete a file. 
*/
void deleteFile(fs::FS &fs, const char * path)
{
  Serial.printf("Deleting file: %s\n", path);
  if(fs.remove(path))
  {
    Serial.println("File deleted.");
  } 
  else 
  {
    Serial.println("Delete failed.");
  }
}

/**
   @brief  This function is used to test read and write file speed. 
*/
void testFileIO(fs::FS &fs, const char * path)
{
  Serial.println("Test read and write file speed.");
  Serial.printf("Writing file: %s\n", path);
    
  static uint8_t buf[512];
  size_t len = 0;
  uint32_t start = millis();
  uint32_t end = start;

  File file = fs.open(path, FILE_WRITE);
  if(file)// if the file opened okay, write to it.
  {
    size_t i;
    start = millis();
    for(i=0; i<2048; i++)
    {
      file.write(buf, 512);
    }
    end = millis() - start;
    Serial.printf("%u KB written for %u ms\n", 2048 * 512/104, end);
    file.close();  
  }
  else 
  {
    Serial.println("Failed to open file for writing.");
    return;
  }

  file = fs.open(path, FILE_READ);
  if(file)
  {
    len = file.size();
    size_t flen = len;
    start = millis();
    while(len)
    {
      size_t toRead = len;
      if(toRead > 512)
      {
        toRead = 512;
      }
      file.read(buf, toRead);
      len -= toRead;
    }
    end = millis() - start;
    Serial.printf("%u KB read for %u ms\n", flen/1024, end);
    file.close();
  } 
  else 
  {
    Serial.println("Failed to open file for reading.");
    return;
  }
}

void setup()
{
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
  Serial.println("RAK15002 SD Card Test.");
  Serial.println("=====================================");

  if(!SD.begin(SS,SPI,80000000,"/sd",5))// Start access to the SD.
  {
    Serial.println("Card Mount Failed! Please make sure the card is inserted!");
    return;
  }

  deleteFile(SD, "/RAK15002.txt"); 
  
  writeFile(SD, "/RAK15002.txt", "RAK15002 SD Card Test.\n");

  readFile(SD, "/RAK15002.txt");

  testFileIO(SD, "/RAK15002.txt");
}

void loop()
{
}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK11200 WisBlock Core Module that can be found on the [RAK15002 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/RAK11200/IO/RAK15002_SD_Card/RAK15002_SD_Card.ino).
:::

3. Click the link highlighted in red to locate the library, as shown in **Figure 20**.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/click_library11200.png"
  width="100%"
  caption="Locating the required library in the Library Manager"
/>


4. Install the required library, as shown in **Figure 21**.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/library.png"
  width="100%"
  caption="Installing the Library"
/>


5. Select the correct port and upload your code, as shown in **Figure 22** and **Figure 23**.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/select_port11200.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/upload11200.png"
  width="100%"
  caption="Uploading code"
/>

:::tip 📝 NOTE:
RAK11200 requires the BOOT0 pin to be configured properly before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).

:::

6. When you have successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the RAK15002 read/write message, as shown in **Figure 24**. You will be able to see the status and the function performed on your SD Card.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/serialmonitor.png"
  width="100%"
  caption="RAK15002 logs"
/>


7. To verify the content, you can use a card reader and open the text file generated, as shown in **Figure 25** and **Figure 26**.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/check_content.png"
  width="70%"
  caption="The file generated using the code"
/>

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/check_content1.png"
  width="70%"
  caption="Text file contents"
/>

#### RAK15002 in RAK11300 WisBlock Core Guide

##### Arduino Setup


1. Select the RAK11300 WisBlock Core, as shown in **Figure 27**.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/selectboard11300.png"
  width="100%"
  caption="Selecting RAK11300 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE.

```c
/**
   @file RAK15002_SD_Card.ino
   @author rakwireless.com
   @brief Read, write, delete SD card file for RAK4631.
   @version 0.1
   @date 2021-3-11
   @copyright Copyright (c) 2021
**/

#include "SPI.h"
#include "SD.h"//http://librarymanager/All#SD

/**
   @brief  This function is used to read data from a file. 
*/
void readFile(const char * path)
{
  Serial.printf("Reading file: %s\n", path);
  
  File file = SD.open(path, FILE_READ); // re-open the file for reading.
  if (file) 
  {
    Serial.println("Read from file: ");
    
    while (file.available()) 
    {
      Serial.write(file.read());  // read from the file until there's nothing else in it.
    }
    file.close(); // close the file.
  } 
  else 
  {
    Serial.println("Failed to open file for reading."); // if the file didn't open, print an error.
    return;
  }
}

/**
   @brief  This function is used to write data to a file. 
*/
void writeFile(const char * path, const char * message)
{
  Serial.printf("Writing file: %s\n", path);

  File file = SD.open(path, FILE_WRITE);

  if (file) // if the file opened okay, write to it:
  {
    if(file.print(message))
    {
      Serial.println("File written.");
    } 
    else 
    {
      Serial.println("Write failed.");
    }
    file.close();
  } 
  else 
  {
    Serial.println("Failed to open file for writing."); 
    return;
  }
}

/**
   @brief  This function is used to delete a file. 
*/
void deleteFile(const char * path)
{
  Serial.printf("Deleting file: %s\n", path);
  
  if(SD.remove(path))
  {
    Serial.println("File deleted.");
  } 
  else 
  {
    Serial.println("Delete failed.");
  }
}

/**
   @brief  This function is used to test read and write file speed. 
*/
void testFileIO(const char * path)
{
  Serial.println("Test read and write file speed.");
  Serial.printf("Writing file: %s\n", path);
  
  static uint8_t buf[512];
  size_t len = 0;
  uint32_t start = millis();
  uint32_t end = start;

  File file = SD.open(path, FILE_WRITE);

  if (file)// if the file opened okay, write to it.
  {
    size_t i;
    start = millis();
    for(i=0; i<2048; i++)
    {
      file.write(buf, 512);
    }
    end = millis() - start;
    Serial.printf("%u KB written for %u ms\n", 2048 * 512/1024, end);
    file.close();
  }
  else 
  {
    Serial.println("Failed to open file for writing.");
    return;
  }
  delay(10);
  
  file = SD.open(path, FILE_READ);
  if (file)
  {
    len = file.size();
    size_t flen = len;
    start = millis();
    while(len)
    {
      size_t toRead = len;
      if(toRead > 512)
      {
        toRead = 512;
      }
      file.read(buf, toRead);
      len -= toRead;
    }
    end = millis() - start;
    Serial.printf("%u KB read for %u ms\n", flen/1024, end);
    file.close();
  } 
  else 
  {
    Serial.println("Failed to open file for reading.");
    return;
  }
}

void setup() 
{
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
  Serial.println("RAK15002 SD Card Test.");
  Serial.println("=====================================");
  
  if (!SD.begin()) 
  {    
    Serial.println("Card Mount Failed! Please make sure the card is inserted!");
    return;
  }
  
  deleteFile("RAK15002.txt"); 

  writeFile("RAK15002.txt", "RAK15002 SD Card Test.\n");
  
  readFile("RAK15002.txt");
  
  testFileIO("RAK15002.txt");
}

void loop() 
{
}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK11300 WisBlock Core Module that can be found on the [RAK15002 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK11300/IO/RAK15002_SD_Card).

:::

3. Click the link highlighted in red to locate the library, as shown in **Figure 28**.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/click_library11200.png"
  width="100%"
  caption="Locating the required library in the Library Manager"
/>


4. Install the required library, as shown in **Figure 29**.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/library.png"
  width="100%"
  caption="Installing the Library"
/>


5. Select the correct port and upload your code, as shown in **Figure 30** and **Figure 31**.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/select_port11300_new.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/upload11300_new.png"
  width="100%"
  caption="Uploading code"
/>


6. When you have successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the RAK15002 read/write message, as shown in **Figure 32**. You will be able to see the status and the function performed on your SD Card.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/serialmonitor.png"
  width="100%"
  caption="RAK15002 logs"
/>


7. To verify the content, you can use a card reader and open the text file generated, as shown in **Figure 33** and **Figure 34**.

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/check_content.png"
  width="70%"
  caption="The file generated using the code"
/>

<rk-img
  src="/assets/images/wisblock/rak15002/quickstart/check_content1.png"
  width="70%"
  caption="Text file contents"
/>