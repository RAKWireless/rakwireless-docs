---
rak_desc: Covers the comprehensive information of your RAK7268 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
tags:
  - datasheet
  - wisgate
  - RAK7268
prev: ../Supported-LoRa-Network-Servers/ 
next: false
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK7268/Certification/RAK7268RAK7268C_CE_Cert.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK7268/Certification/RAK7268_FCC_cert.zip]
  - [RCM, https://downloads.rakwireless.com/LoRa/RAK7268/Certification/RCM%C2%A0cert_RAK7268%26RAK7268C.pdf]
  - [Anatel, https://downloads.rakwireless.com/LoRa/RAK7268/Certification/RAK7268_ANATEL_cert.zip]
  - [IC, https://downloads.rakwireless.com/LoRa/RAK7268/Certification/RAK7268_IC_cert.zip]
  - [KCC, https://downloads.rakwireless.com/LoRa/RAK7268/Certification/RAK7268_RAK7268C_KC%20certification.pdf]
---

# RAK7268 WisGate Edge Lite 2 Datasheet

## Overview

### Description

The RAK7268 WisGate Edge Lite 2 is a full 8-channel indoor gateway, based on the LoRaWAN protocol, with built-in Ethernet connectivity for a straightforward setup. There is an on-board Wi-Fi setup (supporting 2.4&nbsp;GHz Wi-Fi) that allows it to be easily configured via the default Wi-Fi AP mode. Additionally, the gateway supports LTE uplink communication connections (optional).

As with the other RAKwireless Industrial Gateways, it also supports MQTT Bridge mode, with the option for TLS authentication.

Power-over-Ethernet (PoE) is supported to serve cases where wall or ceiling mounting is required without the need to install additional power lines.

The open-source software for the management and configuration of this gateway device is based on OpenWRT. It has a built-in LoRa packet forwarder and a graphical user interface, allowing for a quick set-up without giving up the freedom of a fully customized solution.

RAK7268 also supports the MQTT Bridge function, can use the MQTT integrated to third-party platforms.

RAK7268 is especially suitable for small and medium-sized deployment scenarios in industry applications, saving the additional cost for server and R&D investment, and has the advantages of high execution efficiency. 

### Features

- Full LoRaWAN Stack support (V 1.0.3) with Semtech SX1302
- Supports 2.4&nbsp;GHz Wi-Fi AP for configuration
- 100M Base-T Ethernet with PoE
- Multi back-haul with Ethernet, Wi-Fi, Cellular
- OpenWRT software supports with Web UI for easy configuration and monitoring
- Can integrate with both private (ChirpStack) and public (TTN) network servers
- TF card for log backup and LoRa frame buffering (in case of backhaul failover)
- Built-in Network Server for easy deployment of applications and integration of gateways
- LTE Cat 4 network (optional)



## Specifications

### Overview

The overview presents the block diagram for the RAK7268 that shows the internal architecture of the board.

#### Block Diagram

<rk-img
  src="/assets/images/wisgate/rak7268/datasheet/block-diagram.png"
  width="100%"
  caption="WisGate Edge Lite 2 Block Diagram"
/>

### Hardware

The hardware specification covers only the interfacing of the RAK7268 and its corresponding functionalities. It also presents the parameters and the standard values of the board.


#### Interfaces

The hardware interfaces of RAK7268 gateway include DC 12&nbsp;V, ETH interface, Console interface, Reset key, TF Card slot, Status indicator LEDs, LoRa Antenna connector, etc. 


<rk-img
  src="/assets/images/wisgate/rak7268/datasheet/rak7268_1.png"
  width="60%"
  caption="WisGate Edge Lite 2 Interfaces"
/>


##### Reset Key Functions

The function of the Reset key is as follows:
  - **Short press**: Restart the gateway.
  - **Long press** (5&nbsp;sec and above): Restore factory settings.

##### LED Indicators 

<table>
    <thead>
        <tr><th>LEDs</th><th>Status Indication Description</th></tr>
    </thead>
    <tbody>
        <tr><td>PWR LED</td><td>Power indicator - The LED is on when device power is on</td></tr>
        <tr><td>Breathing LED</td><td>Breathing after system up</td></tr>
        <tr><td rowspan="3">ETH LED</td><td>ON - Linkup</td></tr>
        <tr><td>OFF - Linkdown</td></tr>
        <tr><td>Flicker - Data transmitting and receiving</td></tr>
        <tr><td rowspan="3">LoRa LED</td><td>ON - LoRa is working</td></tr>
        <tr><td>OFF - LoRa is not working</td></tr>
        <tr><td>Flicker - Indicate LoRa Packet receiving and sending</td></tr>
        <tr><td rowspan="8">WLAN LED</td><td>AP Mode: </td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-ON - The AP is up</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-OFF - The AP is down</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-Flicker - Data receiving and sending</td></tr>
        <tr><td>STA Mode: </td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-Slow flicker (1&nbsp;Hz) - Disconnected</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-ON - Connected</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-Flicker - Data receiving and sending</td></tr>
            <tr><td rowspan="3">LTE LED</td><td>Slow Flicker (1800&nbsp;ms High / 200&nbsp;ms Low) - Network searching</td></tr>
        <tr><td>Slow flicker (200&nbsp;ms High / 1800&nbsp;ms Low) - Idle</td></tr>
        <tr><td>Fast flicker (125&nbsp;ms High / 125&nbsp;ms Low) - Ongoing data transfer</td></tr>
    </tbody>
</table>

#### Main Specifications


<table>
    <thead><tr><th>Feature</th><th>Specifications</th></tr></thead>
    <tbody>
        <tr><td>Computing</td><td>MT7628, DDR2 RAM 128 MB</td></tr>
        <tr><td rowspan="4">Wi-Fi feature</td><td>Frequency: 2.4&nbsp;GHz (802.11b/g/n)</td></tr>
        <tr><td>RX Sensitivity: -95&nbsp;dBm (Min) </td></tr>
        <tr><td>TX Power: 20&nbsp;dBm (Max)</td></tr>
        <tr><td>Operation channels: 2.4&nbsp;GHz: 1-13</td></tr>
        <tr><td rowspan="5">LoRa feature</td><td>SX1302 Mini PCIe card</td></tr>
        <tr><td>8 Channels</td></tr>
        <tr><td>RX Sensitivity: -139&nbsp;dBm (Min)</td></tr>
        <tr><td>TX Power: 27&nbsp;dBm (Max)</td></tr>
        <tr><td>Frequency: EU433/CN470/EU868/US915/AS923/AU915/IN865/KR920</td></tr>
        <tr><td rowspan="9">Cellular</td><td>Supports Quectel EG95-E/EG95-NA (IoT/M2M -optimized LTE Cat 4 Module)</td></tr>
        <tr><td>EG95-E for EMEA Region</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;- LTE FDD: B1/B3/B7/B8/B20/B28A</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;- WCDMA: B1/B8</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;- GSM/EDGE: B3/B8</td></tr>
        <tr><td>EG95-NA for North America Region</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;- LTE FDD: B2/B4/B5/B12/B13</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;- WCDMA: B2/B4/B5</td></tr>
        <tr><td><span style="color:red">Optional supports other PCIe LTE module for Global Region</span></td></tr>
        <tr><td rowspan="2">Power supply</td><td>DC 12&nbsp;V - 1&nbsp;A</td></tr>
        <tr><td>PoE (IEEE 802.3 af), 36~57&nbsp;V<sub>DC</sub></td></tr>
        <tr><td>Power consumption</td><td>12&nbsp;W (typical)</td></tr>
        <tr><td>ETH</td><td>RJ45 (10/100 M)</td></tr>
        <tr><td>Console</td><td>Type-C USB</td></tr>
        <tr><td rowspan="3">Antenna</td><td>LoRa: RP-SMA female connector</td></tr>
        <tr><td>LTE: Internal antenna</td></tr>
        <tr><td>Wi-Fi: Internal antenna</td></tr>
        <tr><td rowspan="6">LEDs</td><td>POWER LED</td></tr>
        <tr><td>Breathing LED (Top side)</td></tr>
        <tr><td>ETH LED (On ETH connector)</td></tr>
        <tr><td>LoRa LED</td></tr>
        <tr><td>WLAN LED</td></tr>
        <tr><td>LTE LED</td></tr>
        <tr><td>Ingress protection</td><td>IP30 </td><tr>
        <tr><td>Enclosure material</td><td>Plastic</td></tr>
        <tr><td>Weight</td><td>0.3&nbsp;kg</td></tr>
        <tr><td>Dimension</td><td>166x127x36&nbsp;mm</td></tr>
        <tr><td>Operating temperature</td><td>-10 to 55&nbsp;˚C</td></tr>
        <tr><td>Installation method</td><td>Wall mounting</td></tr>
    </tbody>
</table>


#### RF Specifications

##### Wi-Fi Radio Specifications

<table>
    <thead><tr><th>Feature</th><th>Specifications</th></tr></thead>
    <tbody>
        <tr><td>Wireless Standard</td><td>IEEE 802.11b/g/n</td></tr>
        <tr><td>Operating Frequency</td><td>ISM band: 2.412~2.472&nbsp;GHz</td></tr>
        <tr><td>Operation Channels</td><td>2.4&nbsp;GHz: 1-13</td></tr>
        <tr><td rowspan="11">Transmit Power<br>(The max power maybe different<br>depending on local regulations) - per chain</td><td>802.11b</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-19&nbsp;dBm @1&nbsp;Mbps</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-19&nbsp;dBm @11&nbsp;Mbps</td></tr>
        <tr><td>802.11g</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-18&nbsp;dBm @6&nbsp;Mbps</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-16&nbsp;dBm @54&nbsp;Mbps</td></tr>
        <tr><td>802.11n (2.4G)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-18&nbsp;dBm @MCS0 (HT20)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-16&nbsp;dBm @MCS7 (HT20)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-17&nbsp;dBm @MCS0 (HT40) </td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-15&nbsp;dBm @MCS7 (HT40)</td></tr>
        <tr><td rowspan="11">Receiver Sensitivity<br>(Typical)</td><td>802.11b</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-95&nbsp;dBm @1&nbsp;Mbps</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-88&nbsp;dBm @11&nbsp;Mbps</td></tr>
        <tr><td>802.11g</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-90&nbsp;dBm @6&nbsp;Mbps</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-75&nbsp;dBm @54&nbsp;Mbps</td></tr>
        <tr><td>802.11n (2.4G)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-89&nbsp;dBm @MCS0 (HT20)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-72&nbsp;dBm @MCS7 (HT20)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-86&nbsp;dBm @MCS0 (HT40)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-68&nbsp;dBm @MCS7 (HT40)</td></tr>
    </tbody>
</table>


##### LoRa Radio Specifications

| Feature              | Specifications                                  |
| -------------------- | ----------------------------------------------- |
| Operating Frequency  | EU433/CN470/EU868/US915/AS923/AU915/IN865/KR920 |
| Transmit Power       | 27&nbsp;dBm (Max)                               |
| Receiver Sensitivity | -139&nbsp;dBm (Min)                             |

##### LTE Radio Specifications

| Feature                          | Specification                                                                                                   |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| EG95-E for EMEA Region           | LTE FDD:  B1/B3/B7/B8/B20/B28A<br />WCDMA:  B1/B8<br />GSM/EDGE:  B3/B8                                         |
| EG95-NA for North America Region | LTE FDD:  B2/B4/B5/B12/B13<br />WCDMA:  B2/B4/B5<br />Optional supports other PCIE LTE module for Global Region |


#### Electrical Requirements

The Gateway comes with a 12&nbsp;V-1&nbsp;A power adaptor. It also fully compatible with PoE (IEEE  802.3af), 36~57&nbsp;V<sub>DC</sub>.

The typical power consumption is 12&nbsp;W.

#### Environmental Requirements

The casing is IP30 rated and is made of plastic. There are holes for a mounting bracket on the back, in order to simplify wall mounting. The enclosure, while robust, is not meant for outdoor deployment and should be kept away from moisture.

| Parameter             | Value             |
| --------------------- | ----------------- |
| Dimensions            | 66x127x36&nbsp;mm |
| Weight                | 0.3&nbsp;kg       |
| Operating temperature | -10 to 55&nbsp;°C |


### Software

#### Firmware

The firmware sits on OpenWRT, which makes it possible to customize it. There is a Web UI for easy configuration and management of the device, as well as the possibility for SSH2 management.


#### Software Features

| LoRaWAN                       | Network            | Management                            |
| ----------------------------- | ------------------ | ------------------------------------- |
| Supports class A, C           | Wi-Fi AP mode      | WEB management                        |
| LoRa package forward          | Uplink backup      | SSH2                                  |
| Country code setup            | 802.1q             | Firmware update                       |
| TX Power setup                | DHCP Server/Client | NTP                                   |
| Data logger                   | Router module NAT  | Configuring the LoRa Packet Forwarder |
| Statistics                    | Firewall           | Build-in Server                       |
| Location setup                | LTE APN setup      | OpenVPN, Ping Watch Dog               |
| Server address and Port setup |                    | MQTT Bridge                           |


## Certification
<rk-certifications :params="$page.frontmatter.certifications" />

### FCC Caution 

Any changes or modifications not expressly approved by the party responsible for compliance could void the user's authority to operate the equipment. 

This device complies with part 15 of the FCC Rules. Operation is subject to the following two conditions: (1) This device may not cause harmful interference, and (2) this device must accept any interference received, including interference that may cause undesired operation. 

:::tip 📝 NOTE:

This equipment has been tested and found to comply with the limits for a Class B digital device, according to part 15 of the FCC Rules. These limits are designed to provide reasonable protection against harmful interference in a residential installation. This equipment generates, uses, and can radiate radio frequency energy and, if not installed and used following the instructions, may cause harmful interference to radio communications. However, there is no guarantee that interference will not occur in a particular installation. If this equipment does cause harmful interference to radio or television reception, which can be determined by turning the equipment off and on, the user is encouraged to try to correct the interference by one or more of the following measures:

1. Reorient or relocate the receiving antenna.
2. Increase the separation between the equipment and receiver. 
3. Connect the equipment into an outlet on a circuit different from that to which the receiver is connected.
4. Consult the dealer or an experienced radio/TV technician for help. 

:::

### FCC Radiation Exposure Statement

This equipment complies with FCC radiation exposure limits set forth for an uncontrolled environment. This equipment should be installed and operated with a minimum distance of 20&nbsp;cm between the radiator and your body.

### ISEDC Warning

This device complies with Innovation, Science, and Economic Development Canada licence-exempt RSS standard(s). Operation is subject to the following two conditions:

1. This device may not cause interference;

2. This device must accept any interference, including interference that may cause undesired operation of the device.

Le présent appareil est conforme aux CNR d' Innovation, Sciences et Développement économique Canada applicables aux appareils radio exempts de licence. L'exploitation est autorisée aux deux conditions suivantes :

1. l'appareil nedoit pas produire de brouillage, et

2. l'utilisateur de l'appareil doit accepter tout brouillage radioélectrique subi, même si le brouillage est susceptible d'en compromettre le fonctionnement.

The device complies with RF exposure guidelines, users can obtain Canadian information on RF exposure and compliance. The minimum distance from the body to use the device is 20&nbsp;cm.

Le présent appareil est conforme Après examen de ce matériel aux conformité ou aux limites d’intensité de champ RF, les utilisateurs peuvent sur l’exposition aux radiofréquences et la conformité and compliance d’acquérir les informations correspondantes. La distance minimale du corps à utiliser le dispositif est de 20&nbsp;cm.
