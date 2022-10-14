---
rak_desc: Provides comprehensive information about your RAK18003 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak18003/overview/RAK18003_home.png
prev: ../Overview/
next: false
tags:
  - Datasheet
  - WisBlock Audio
  - RAK18003
  - 3PEAK
  - TPT29555 
  - SG MICRO CORP
  - 5223YWQ10 
---


# RAK18003 WisBlock Audio Interposer Module Datasheet

## Overview

### Description

The RAK18003 is an interposer module, part of the WisBlock Audio Series. The RAK18003 is designed to allow multiple WisBlock Audio modules to be used together on a single IO slot. It consists of two IO expanders (TPT29555-TS5R), one signal switch (5223YWQ10/TR), and connectors where other WisBlock Audio modules can be interfaced. It also has a usable TF card slot.

### Features

* **Module Specifications**
  - Interposer board
  - Extend IO for WisBlock Core to control other modules
  - FPC connector for connecting PDM MIC modules
  - TF-card connector  
  - BTB connector for WisBlock Audio stack

* **Module Size**
  - 25 x 35&nbsp;mm

## Specifications

### Overview 

<rk-img
  src="/assets/images/wisblock/rak18003/datasheet/RAK18003_Back_Front.png"
  width="40%"
  caption="RAK18003 WisBlock Audio Interposer Module top and bottom view"
/>

#### Mounting 

The RAK18003 WisBlock Audio Interposer Module can be mounted to the IO slot of the [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. **Figure 2** shows the mounting mechanism of the RAK18003 on a WisBlock Base module. Other WisBlock Audio modules can be interfaced via BTB connector.

<rk-img
  src="/assets/images/wisblock/rak18003/datasheet/RAK18003_mounting.png"
  width="50%"
  caption="RAK18003 WisBlock Audio Interposer Module mounting"
/>

### Hardware

The hardware specification is categorized into five (5) parts that cover the chipset and pinouts and the corresponding functions and diagrams of the module. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK18003 WisBlock Audio Interposer Module.

#### Chipset

| Vendor        | Part Number |
| ------------- | ----------- |
| 3PEAK         | TPT29555    |
| SG MICRO CORP | 5223YWQ10   |

#### Pin Definition

The RAK18003 WisBlock Audio Interposer Module comprises a standard WisBlock connector, FPC connector for PDM MIC modules, a BTB connector for the WisBlock Audio stack, and a TF connector. 

##### WisBlock Connector

The WisBlock connector allows the RAK18003 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 3**.

<rk-img
  src="/assets/images/wisblock/rak18003/datasheet/rak18003-pinouts.png"
  width="55%"
  caption="RAK18003 WisBlock Audio Interposer Module WisBlock Connector Diagram"
/>

:::tip 📝 NOTE:
- **VBAT**,**VBUS**,**3V3_S**, and **GND** are the power supply from the WisBlock Base. 
- **Core_I2C_SDA** and **Core_I2C_SCL** are I2C signals from WisBlock Core which works as a master to communicate with other I2C devices.
- **Core_AIN0** and **Core_AIN1** are ADC input for WisBlock Core.
- **CORE_SPI_MISO**,**CORE_SPI_CLK**, and **CORE_SPI_MOSI** are SPI signals, which work as a master to communicate with other SPI devices.
- **IOEX_INT** is a GPIO signal, it connects to the IO expander's INT. When the input to the IO expander changes, the IO expander generates an interrupt signal to be detected by the WisBlock Core.
- **Core_PDM1_Data** and **Core_PDM1_CLK** are PDM signals.
- **Core_I2S_DO**, **Core_I2S_DI**,* *Core_I2S_WS**, and **Core_I2S_BCLK** are I2S signals.
:::

##### Stack Connector

The BTB connector is designed to support WisBlock Audio Modules. It allows the RAK18003 module to be stacked with other WisBlock Audio modules, such as RAK18080 (DSP board), RAK18060 (AMP board), and RAK18040 (Analog MIC driver).

<rk-img
  src="/assets/images/wisblock/rak18003/datasheet/RAK18003_BTB_Pinout.png"
  width="45%"
  caption="RAK18003 WisBlock Audio Interposer Module BTB Connector diagram"
/>

:::tip 📝 NOTE:
- **3V3**, **VBAT**, **VBUS**, and **GND** are power supply from the WisBlock Base board.
- **CORE_SPI_MOSI**, **CORE_SPI_MISO**, and **CORE_SPI_CLK** are SPI signals from the WisBlock Core which works as the master. **CORE_SPI_CS1** and **CORE_SPI_CS2** are the SPI's chip select signals. WisBlock Core controls these pins using the IO expander.
- **Core_I2C_SCL** and **Core_I2C_SDA** are I2C signals connected to WisBlock Core which works as the master.
- **AMP_CTR_IO1**, **AMP_CTR_IO2**, and **AMP_CTR_IO3** are IO signals form AMP board. WisBlock Core controls these pins using an IO expander.
- **DSP_CTR_IO1**, **DSP_CTR_IO2**, **DSP_CTR_IO3**, **DSP_CTR_IO4**, and **DSP_CTR_IO5** are IO signals form DSP board. WisBlock Core controls these pins using an IO expander.
- **Core_AIN0** and **Core_AIN1** are ADC input for the WisBlock Core. 
- **DSP_PDM1_CLK**,**DSP_PDM1_Data**,**DSP_PDM2_CLK**, and **DSP_PDM2_Data**  are PDM signals for DSP board.
- **Core_Reset** is a hardware reset signal from WisBlock Base.
- **DSP_Check** and **AMP_Check** are used to check whether a DSP board or AMP board is connected. This pin is low when there is no DSP or AMP board and will be high when connect to a DSP or AMP board.
- **CORE_I2S_DO**, **CORE_I2S_DI**, **CORE_I2S_WS**, and **CORE_I2S_BCLK** are I2S signals.
- **AMP_CTR_IO1** is the GPIO from the interposer board. Normally this pin is high. This pin will be low if there is an error within the amplifier and is shared between amplifiers.
:::

##### FPC Connector

The FPC connector allows the RAK18003 module to be connected to a PDM MIC board, such as RAK18030.

<rk-img
  src="/assets/images/wisblock/rak18003/datasheet/RAK18003_FPC_Pinout.png"
  width="40%"
  caption="RAK18003 WisBlock Audio Interposer Module FPC connector diagram"
/>

:::tip 📝 NOTE:
- **3V3** and **GND** are the power supply for the MIC boards.  
- **MIC_CTR_IO1** is the GPIO from the interposer board which can control the MIC if left or right channel.
- **MIC_PDM1_Data**, **MIC_PDM1_CLK**, **MIC_PDM2_Data**, and **MIC_PDM2_CLK** are PDM signals.
- **MIC_Check** is a signal to let the interposer board know if a MIC exists in the FPC connector.
:::

#### Mechanical Characteristic

##### Board Dimensions

**Figure 6** shows the dimensions and the mechanical drawing of the RAK18003 module.

<rk-img
  src="/assets/images/wisblock/rak18003/datasheet/RAK18003_mechanic_drawing.png"
  width="70%"
  caption="RAK18003 Audio Interposer Module mechanical drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak18003/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak18003/datasheet/rak18003-schematic-1.png"
  width="100%"
  caption="RAK18003 Audio Interposer Module schematic diagram"
/>

