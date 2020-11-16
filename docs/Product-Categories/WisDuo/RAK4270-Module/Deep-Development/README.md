---
prev: ../LoRaWAN-P2P/AT-Command-Manual/
next: ../Datasheet/
tags: RAK4270
---


# LoRa Module Deep Development

## Overview

### Introduction

The product portfolio of RAK LoRa node RAK4270 module. These modules come with a standard version of firmware that allow the customers to integrate quickly these modules in their solutions for LoRaWAN or LoRa P2P communication through the AT commands interface.

Further customization of the firmware can be done through the RUI Online compiler. At this layer the customized firmware interface with the hardware through the RUI Core abstraction layer. In RAK we called this a secondary firmware development/customization.

Additionally, RAK offers a third alternative for advance customers who need to have a deeper integration of their solutions with these modules. In this alternative, the customer could develop their own version of firmware that runs inside of the RAK modules.

## How to implement your app on RAK module

### Schematic

One of the essential aspects that allow customers to develop their own version of firmware is the module’s hardware schematic. This allow the customers to understand the module’s pinout, connections between the inner MCU and the LoRa transceiver.

Please note there are two version of RAK4270 module. One for the high frequency bands (i.e. 915MHz, 866 MHz) and one for the low frequency bands (i.e.433 MHz). RAK4270, share the same hardware connections between high frequency and low frequency models.

### Porting Lora Protocol Stack

When implementing the LoRa protocol stack, special attention must be paid in the SPI connections, since the LoRa transceivers is controlled by the MCU through a SPI interface. The important pins are: , SPI1_MISO, SPI1_MOSI, SPI_NSS, SPI_CLK. Additionally, the DIO, RFI path are important as well to have a functioning LoRa communication.
After that, RTC must be properly configured in the MCU to ensure accurate timing of protocol stack during the runtime.
Finally, the protocol stack code can be added after other pins are configured.

### Application

Once the porting the protocol stack is ready, customers can focus on the development of their applications. There are two options:

- Do not use the original bootloader that comes in RAK modules from the factory. In the case, the customer must provide his own version of bootloader.
- Use RAK's bootloader and the upgrade the custom firmware by using RAK’s Device Firmware Upgrade Tool. You can download it from here:
  - [RAK Device Firmware Upgrade (DFU) Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_tool/RAK_Device_Firmware_Upgrade_Tool_v1.4.zip)
  - [Device Firmware Upgrade Tool for MacOS](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_tool/RAK_Device_Firmware_Upgrade_Tool_v1.4_MacOS.zip)
  - [Device Firmware Upgrade Tool for Ubuntu](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_tool/RAK_Device_Firmware_Upgrade_Tool_v1.4_Ubuntu.zip)

If you want to fully develop your own, you can refer to the schematic diagram and the datasheet of the MCU to implement the code. If you want to use RAK’s bootloader, please continue reading the next section.

### Bootloader

#### Bootloader Introduction

In any MCU, after the power is connected, the System bootloader is on charge to bootstrap all the necessary to setup the Interrupt Vector table, initialize variables, and jump to the address of the main() symbol.

In the following image shows a usual memory map for an ARM Cortex M0+ MCU, which is the architecture of the MCU of the RAK4270.

<rk-img
  src="/assets/images/wisduo/rak4270-module/deep-development/boot-mode.png"
  width="70%"
  caption="The flash section is between the 0x0800 0000 and 0x080X 0000. The X depends on the different models of MCU"
/>

The RAK’s bootloader is stored in the internal flash section and has a size of 12K, located between 0x0800 0000 to 0x0800 2FFF. Its primary function is to write a new version of firmware received from the serial port into the flash memory section. The bootloader uses the Ymodem protocol and supervise internally the exceptions in the upgrade process. When the upgrade process is interrupted and power on again, bootloader will detect abnormal events and can also upgrade again.

RAK4270’s bootloader uses the segment between 0x0808 1700 to 0x0808 17FF to store its parameters.

In the bootloader parameter storage area, 256 bytes are planned, but only two words are used to store the jump flag and upgrade status flag.

Finally, the serial port to communicate with the RAK’s bootloader in these modules is the UART1 (pin PA9, pin PA10). The parameters of the UART communication are: 115200 / 8-N-1, which need to be properly configured in the RAK firmware upgrade tool.

#### Application Requirements

Since the RAK’s bootloader is stored between the 0x0800 0000 and 0x0800 2FFF segment of the flash memory, the customer’s application should be shifted accordingly. In the application code, you need to modify the interrupt vector table address as the following:

`SCB->VTOR = FLASH_BASE | 0x3000`

In linker script must be updated accordingly. For example, in case you use GCC, please modify your linker script as the following:

`FLASH (rx) : ORIGIN = 0x8003000, LENGTH = 116K`

The customer’s application firmware should implement as minimum one AT command: `at +boot\r\n`. The function of this command is to jump from the application state into the bootloader state in preparation for the further application firmware upgrade. The logic of this command is the following:

- For RAK4270 , write the value 0x00000000 in the address 0x0808 1700.
- Reset MCU . You can call the **NVIC_SystemReset()** interface in the ST library to reset the MCU.

::: tip 📝 NOTE
The bootloader turned off the global interrupt when jumping from the application state. Therefore, when the application code is initialized, the global interrupt should be turned on again.
:::
