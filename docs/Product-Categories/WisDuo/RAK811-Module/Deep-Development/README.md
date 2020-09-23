---
prev: ../LoRaWAN-P2P/AT-Command-Manual/
next: ../Datasheet/
tags: RAK811
---

# LoRa Module Deep Development Reference

## Overview

The product portfolio of RAK LoRa node RAK811 modules. This module comes with a standard version of firmware that allows you to integrate quickly these modules in their solutions for LoRaWAN or LoRa P2P communication through the AT commands interface.

Further customization of the firmware can be done through the RUI Online compiler. At this layer, the customized firmware interface with the hardware through the RUI Core abstraction layer. In RAK, it is called the secondary firmware development/customization.  

Additionally, RAK offers a third alternative for advanced customers who need to have deeper integration of their solutions with these modules. In this alternative, you could develop their own version of firmware that runs inside of the RAK modules.


## How to Implement your App on RAK Module

### Schematic


One of the essential aspects that allow customers to develop their own version of firmware is the module’s hardware schematic. This allows the customers to understand the module’s pinout, connections between the inner MCU and the LoRa transceiver.

:::tip 📝 NOTE:

There are two versions of the RAK811 module. One for the high-frequency bands (i.e. 915MHz, 866 MHz) and one for the low-frequency bands (i.e.433 MHz). High and low-frequency modules are different, pay attention to distinguish.

:::

### Porting Lora Protocol Stack

When implementing the LoRa protocol stack, special attention must be paid in the SPI connections, since the LoRa transceivers are controlled by the MCU through an SPI interface. Hence, the following are the important pins: **SPI1_MISO, SPI1_MOSI, SPI_NSS, SPI_CLK**. Additionally, the DIO, RFI paths are important as well to have a functioning LoRa communication.

After that, **Real Time CLock (RTC)** must be properly configured in the MCU to ensure accurate timing of protocol stack during the runtime.

Finally, the protocol stack code can be added after other pins are configured.

### Application

Once the porting of the protocol stack is ready, you can focus on the development of their applications. There are two options you can choose with: 

&nbsp;&nbsp;&nbsp;&nbsp;a. Do not use the original bootloader that comes in RAK modules from the factory. In this case, you must provide your own version of the bootloader. 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;b. Use RAK bootloader and the upgrade the custom firmware by using [RAK Device Firmware Upgrade (DFU) Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_tool/).

If you want to fully develop your own, you can refer to the schematic diagram and the datasheet of the MCU to implement the code. If you want to use RAK bootloader, continue reading the next section.

### Bootloader

In any MCU, after the power is connected, the System bootloader is on a charge to bootstrap all the necessary to set up the Interrupt Vector table, initialize variables, and jump to the address of the main() symbol.

Figure 1 below shows the usual memory map of an ARM Cortex M3 MCU, which is the architecture of the MCU of the RAK811.

<rk-img
  src="/assets/images/wisduo/rak811-module/deep-development/memory-map.png"
  width="80%"
  caption="Usual memory map for an ARM Cortex M4 MCU"
/>

The flash section is between the 0x0800 0000 and 0x080X 0000. X depends on the different models of MCU.

The RAK’s bootloader is stored in the internal flash section and has a size of 12K, located between 0x0800 0000 to 0x0800 2FFF. Its primary function is to write a new version of firmware received from the serial port into the flash memory section. The bootloader uses the Ymodem protocol and supervise internally the exceptions in the upgrade process. When the upgrade process is interrupted and power on again, the bootloader will detect abnormal events and can also upgrade again.

The RAK811’s bootloader uses the segment the flash memory between 0x0808 0F00 and 0x0808 0FFF to store its parameters. 
In the bootloader parameter storage area, 256 bytes are planned, but only two words are used to store the jump flag and upgrade the status flag.

Finally, the serial port to communicate with the RAK’s bootloader in these modules is the UART1 (pin PA9, pin PA10). The parameters of the UART communication are the 115200 / 8-N-1, which need to be properly configured in the RAK firmware upgrade tool. 

### Application Requirements

Since the RAK bootloader is stored between the 0x0800 0000 and 0x0800 2FFF segment of the flash memory, your application should be shifted accordingly. In the application code, you need to modify the interrupt vector table address as the following:

SCB->VTOR = FLASH_BASE | 0x3000;

In the linker, the script must be updated accordingly. For example, in case you use GCC, modify your linker script like the following:

FLASH (rx): ORIGIN = 0x8003000, LENGTH = 116K

The customer’s application firmware should implement as minimum one AT command: "at +boot\r\n". The function of this command is to jump from the application state into the bootloader state in preparation for the further application firmware upgrade. The logic of this command is the following:

Your application firmware should implement as a minimum one AT command: <b>`at +boot\r\n` </b>. The function of this command is to jump from the application state into the bootloader state in preparation for the further application firmware upgrade. The logic of this command is the following:


1. For RAK811, write the value **0x00000000** into the address **0x0808 0F00**. 

2. Reset MCU. You can call the **NVIC_SystemReset() interface** in the ST library to reset the MCU.

:::tip 📝 NOTE:

The bootloader turned off the global interrupt when jumping from the application state. Therefore, when the application code is initialized, the global interrupt should be turned on again.

:::