---
static_root: /assets/images/wishat/rak8213-pi-hat/datasheet
tags: 
  - datasheet
  - wishat
  - RAK8213 Pi HAT
prev: ../Overview/
rak_desc: Covers the comprehensive information of your RAK8213 Pi HAT to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
---

# RAK8213 Pi HAT Datasheet

<!---
<rk-img
  :src="`${$frontmatter.static_root}/rak8213-pi-hat.png`"
  width="75%"
  caption="RAK8213 Pi Hat"
/>
-->

## Overview

### Description

**RAK8213 Pi HAT** is designed to work in conjunction with the **RAK8213 NB-IoT module**. It works as a converter for the RAK8213 mPCIe module to the **40-pin header connector** on the Raspberry Pi. Thus, the RAK8213 HAT allows one to easily add NB-IoT functionality to any Raspberry Pi.

### Features

- Pi HAT form factor 
- mPCIe slot
- Micro-USB connector serving as both interface and power for the RAK8213

## Specifications

### Overview

#### Block Diagram

RAK8213 Pi HAT maps the RAK8213 pins from the 52pin mPCIe connector to the 40 pin Raspberry Pi connector. Refer to the block diagram in figure 1 shown below and the pin mapping table shown in the Pin Definition section. 

<rk-img
  :src="`${$frontmatter.static_root}/rak8213_block_diagram.png`"
  width="60%"
  caption="RAK8213 Pi HAT Block Diagram"
/>

### Hardware

#### Pin Definition

The following tables show the pin definition and description of RAK8213 Pi HAT on the 40-PIN Pi HAT connector.

| **Type** | **Description** |
| -------- | --------------- |
| IO       | Bidirectional   |
| DI       | Digital Input   |
| DO       | Digital output  |
| OC       | Open collector  |
| OD       | Open drain      |
| PI       | Power input     |
| PO       | Power output    |
| NC       | No Connection   |


| **Pin Number** | **Raspberry Pi 40-PIN Connector** | **RAK8213 Pi HAT PIN** | **I/O** | **Remarks**                                                                                                                                                                                                                                                                                                                                                 |
| -------------- | --------------------------------- | ---------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1              | 3V3                               | NC                     |         | No Connection                                                                                                                                                                                                                                                                                                                                               |
| 2              | 5V                                | 5V                     | PI      | 5V Input                                                                                                                                                                                                                                                                                                                                                    |
| 3              | GPIO2(SDA1)                       | NC                     |         | No Connection                                                                                                                                                                                                                                                                                                                                               |
| 4              | 5V                                | 5V                     | PI      | 5V Input                                                                                                                                                                                                                                                                                                                                                    |
| 5              | GPIO3(SCL1)                       | NC                     |         | No Connection                                                                                                                                                                                                                                                                                                                                               |
| 6              | GND                               | GND                    |         | Ground                                                                                                                                                                                                                                                                                                                                                      |
| 7              | GPIO4(GPIO_GCLK)                  | NC                     |         | No Connection                                                                                                                                                                                                                                                                                                                                               |
| 8              | GPIO14(TXD0)                      | UART_RXD_ LTE          | DI      | Connect RAK8213 built in LTE Module’s UART_RXD                                                                                                                                                                                                                                                                                                              |
| 9              | GND                               | GND                    |         | Ground                                                                                                                                                                                                                                                                                                                                                      |
| 10             | GPIO15(RXD0)                      | UART_TXD_ LTE          | DO      | Connect RAK8213 built in LTE Module’s UART_TXD                                                                                                                                                                                                                                                                                                              |
| 11             | GPIO17(GPIO_GEN0)                 | NC                     |         | No Connection                                                                                                                                                                                                                                                                                                                                               |
| 12             | GPIO18(GPIO_GEN1)                 | PWRKEY_LTE             | DI      | Turn on/off the module. When RAK8213 is in power off mode, it can be turned on to normal mode by driving the PI_PWRKEY pin to a high level for at least 500ms.<br><br>When RAK8213 is in normal mode, driving the PWRKEY_LTE pin to a high-level voltage for at least 650ms, the module will execute power-down procedure after the PWRKEY_LTE is released. |
| 13             | GPIO27(GPIO_GEN2)                 | UART_DCD_LTE           | DO      | Data carrier detection                                                                                                                                                                                                                                                                                                                                      |
| 14             | GND                               | GND                    |         | Ground                                                                                                                                                                                                                                                                                                                                                      |
| 15             | GPIO22(GPIO_GEN3)                 | UART_DTR_LTE           | DI      | Data terminal ready (sleep mode control)                                                                                                                                                                                                                                                                                                                    |
| 16             | GPIO23(GPIO_GEN4)                 | VBUS_CTRL_LTE          | DI      | USB detection control,<br><br>High level: Enable USB detection<br><br>Low level: Disable USB detection                                                                                                                                                                                                                                                      |
| 17             | 3V3                               | NC                     |         | No Connection                                                                                                                                                                                                                                                                                                                                               |
| 18             | GPIO24(GPIO_GEN5)                 | GNSS_PWR_CTRL_LTE      | DI      | Active GNSS antenna power supply control,<br><br>High level: Enable power supply(3.3V)<br><br>Low level: Disable power supply                                                                                                                                                                                                                               |
| 19             | GPIO10(SPI_MOSI)                  | NC                     |         | No Connection                                                                                                                                                                                                                                                                                                                                               |
| 20             | GND                               | GND                    |         | Ground                                                                                                                                                                                                                                                                                                                                                      |
| 21             | GPIO9(SPI_MISO)                   | NC                     |         | No Connection                                                                                                                                                                                                                                                                                                                                               |
| 22             | GPIO25(GPIO_GEN6)                 | UART_CTS_LTE           | DO      | Clear to send                                                                                                                                                                                                                                                                                                                                               |
| 23             | GPIO11(SPI_CLK)                   | NC                     |         | No Connection                                                                                                                                                                                                                                                                                                                                               |
| 24             | GPIO8(SPI_CE0_N)                  | NC                     |         | No Connection                                                                                                                                                                                                                                                                                                                                               |
| 25             | GND                               | GND                    |         | Ground                                                                                                                                                                                                                                                                                                                                                      |
| 26             | GPIO7(SPI_CE1_N)                  | NC                     |         | No Connection                                                                                                                                                                                                                                                                                                                                               |
| 27             | ID_SD                             | NC                     |         | No Connection                                                                                                                                                                                                                                                                                                                                               |
| 28             | ID_SC                             | NC                     |         | No Connection                                                                                                                                                                                                                                                                                                                                               |
| 29             | GPIO5                             | W_DISABLE_LTE          | DI      | Airplane mode control, Pull-up by default. In low voltage level, the RAK8213 built in LTE Module can enter into airplane mode                                                                                                                                                                                                                               |
| 30             | GND                               | GND                    |         | Ground                                                                                                                                                                                                                                                                                                                                                      |
| 31             | GPIO6                             | RESET_LTE              | DI      | Connect to RAK8213 built in LTE Module’s RESET PIN, LTE Module reset input, Active Low                                                                                                                                                                                                                                                                      |
| 32             | GPIO12                            | UART_RST_LTE           | DI      | Request to send                                                                                                                                                                                                                                                                                                                                             |
| 33             | GPIO13                            | NC                     |         | No Connection                                                                                                                                                                                                                                                                                                                                               |
| 34             | GND                               | GND                    |         | Ground                                                                                                                                                                                                                                                                                                                                                      |
| 35             | GPIO19                            | NC                     |         | No Connection                                                                                                                                                                                                                                                                                                                                               |
| 36             | GPIO16                            | PSM_LTE                | DO      | Power saving mode indicator                                                                                                                                                                                                                                                                                                                                 |
| 37             | GPIO26                            | AP_READY_LTE           | DI      | Application processor sleep state detection                                                                                                                                                                                                                                                                                                                 |
| 38             | GPIO20                            | UART_RI_LTE            | DO      | Ring indicator                                                                                                                                                                                                                                                                                                                                              |
| 39             | GND                               | GND                    |         | Ground                                                                                                                                                                                                                                                                                                                                                      |
| 40             | GPIO21                            | STATUS_LTE             | DO      | Indicate the module’s operation status. It will output low level when the module is powered on.                                                                                                                                                                                                                                                             |

:::tip 📝 NOTE
There is a Micro-USB connector on the RAK8213 Pi HAT, which connects to RAK8213\u2019s USB interface. This gives you direct access to the USB interface (BG96), and is also required in order to power the RAK8213 when inserted in the slot, as it requires additional power.
:::


## Ordering Information

| **Model**      | **Description**                          | **Supported Module** |
| -------------- | ---------------------------------------- | -------------------- |
| RAK8213 Pi HAT | PCIe to Pi HAT Convert Board for RAK8213 | RAK8213              |




