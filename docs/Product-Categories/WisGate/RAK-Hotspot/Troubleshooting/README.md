---
rak_desc: Walks through different connection scenarios with your RAK Hotspot. This includes both the outdoor and indoor enclosure and antennas of RAKwireless suitable for your LoRaWAN Gateway.
rak_img: /assets/images/wisgate/rak-hotspot/overview/RAK-Hotspot.png
next: ../Datasheet/
prev: ../Backup/
tags:
  - RAK Hotspot
  - Troubleshooting
  - wisgate
---
# Troubleshooting

## Status LEDs

The RAK Hotspot includes two (2) small LEDs for status:

<br>

<rk-img
  src="/assets/images/wisgate/rak-hotspot/troubleshooting/StatusLED.svg"
  width="30%"
  caption="Status LED location"
/>

🔴 **Red LED**:
Solid red is good; it means Pi is getting power. In normal operation, only solid red should be seen. Flashing red means there is some issue with power supply - reconnect power and check again.

🟢 **Green LED**:
At power-up, Green LED will blink in a random pattern, but after about 5 seconds, it should stop. If Green is blinking repeatedly for a long time, it means there is some problem, usually this will be the SD card, maybe a power issue too.

In the case of a constant blinking Green, refer to the following recommendations::

1. Unplug USB-C power.
2. Extract the microSD card, check and re-insert it making sure it is well seated. The card could have moved in shipping, or the user may have inserted it incorrectly, which is upside down after backup.
3. Reconnect USB-C power making sure it is plugged in all the way.


## Proper Connection Scenarios with the RAK Outdoor Enclosure/Antennas

### Scenario 1 (Indoor, optimal)

Products Used:

- [RAK Hotspot](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- [Magnetic Antenna Base](https://store.rakwireless.com/products/antenna-magnetic-base?utm_source=MagneticAntennaBase&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)


<rk-img
  src="/assets/images/wisgate/rak-hotspot/troubleshooting/1.png"
  width="100%"
  caption="RAK Hotspot + Magnetic Antenna Base + Fiberglass Antenna"
/>


### Scenario 2 (Indoor, suboptimal)

Products Used:

- [RAK Hotspot](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- Converter Cable (included with any of the Fiberglass Antennas)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot/troubleshooting/2.png"
  width="100%"
  caption="RAK Hotspot + Converter Cable + Fiberglass Antenna"
/>

### Scenario 3 (Outdoor, optimal)

Products Used:

- [RAK Hotspot](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- [Outdoor Enclosure Kit RAKBox-GW-3](https://store.rakwireless.com/products/Outdoor-Enclosure-Kit-H?utm_source=OutdoorEnclosureKitH&utm_medium=Document&utm_campaign=BuyFromStore)
- [Lightning Arrestor](https://store.rakwireless.com/products/lightning-arrestor-for-gps-antenna?utm_source=LoRa-WiFi-LTE-SPD&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot/troubleshooting/7.png"
  width="100%"
  caption="RAK Hotspot + Outdoor Enclosure Kit RAKBox-GW-3 + Lightning Arrestor + Fiberglass Antenna"
/>

### Scenario 4 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- Converter Cable (included with any of the Fiberglass Antennas)
- [Lightning Arrestor](https://store.rakwireless.com/products/lightning-arrestor-for-gps-antenna?utm_source=LoRa-WiFi-LTE-SPD&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot/troubleshooting/3.png"
  width="100%"
  caption="RAK Hotspot + Converter Cable + Lightning Arrestor + Fiberglass Antenna"
/>

### Scenario 5 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- [Pulsar Cable LMR400 RAK9733](https://store.rakwireless.com/products/pulsar-cable-rak9731-rak9733?utm_source=RAK9733&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot/troubleshooting/4.png"
  width="100%"
  caption="RAK Hotspot + Pulsar Cable LMR400 RAK9733 + Fiberglass Antenna"
/>

### Scenario 6 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- [Pulsar Cable LMR400 RAK9733](https://store.rakwireless.com/products/pulsar-cable-rak9731-rak9733?utm_source=RAK9733&utm_medium=Document&utm_campaign=BuyFromStore)
- [Lightning Arrestor](https://store.rakwireless.com/products/lightning-arrestor-for-gps-antenna?utm_source=LoRa-WiFi-LTE-SPD&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)


<rk-img
  src="/assets/images/wisgate/rak-hotspot/troubleshooting/5.png"
  width="100%"
  caption="RAK Hotspot + Pulsar Cable LMR400 RAK9733 + Lightning Arrestor + Fiberglass Antenna"
/>

### Scenario 7 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- [Outdoor Enclosure Kit RAKBox-GW-3](https://store.rakwireless.com/products/Outdoor-Enclosure-Kit-H?utm_source=OutdoorEnclosureKitH&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)


<rk-img
  src="/assets/images/wisgate/rak-hotspot/troubleshooting/6.png"
  width="100%"
  caption="RAK Hotspot + Outdoor Enclosure Kit RAKBox-GW-3 + Fiberglass Antenna"
/>

### Scenario 8 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- [Outdoor Enclosure Kit RAKBox-GW-3](https://store.rakwireless.com/products/Outdoor-Enclosure-Kit-H?utm_source=OutdoorEnclosureKitH&utm_medium=Document&utm_campaign=BuyFromStore)
- [Pulsar Cable LMR400 RAK9731](https://store.rakwireless.com/products/pulsar-cable-rak9731-rak9733?utm_source=RAK9731&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)


<rk-img
  src="/assets/images/wisgate/rak-hotspot/troubleshooting/8.png"
  width="100%"
  caption="RAK Hotspot + Outdoor Enclosure Kit RAKBox-GW-3 + Pulsar Cable LMR400 RAK9731 + Fiberglass Antenna"
/>

### Scenario 9 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- [Outdoor Enclosure Kit RAKBox-GW-3](https://store.rakwireless.com/products/Outdoor-Enclosure-Kit-H?utm_source=OutdoorEnclosureKitH&utm_medium=Document&utm_campaign=BuyFromStore)
- [Pulsar Cable LMR400 RAK9731](https://store.rakwireless.com/products/pulsar-cable-rak9731-rak9733?utm_source=RAK9731&utm_medium=Document&utm_campaign=BuyFromStore)
- [Lightning Arrestor](https://store.rakwireless.com/products/lightning-arrestor-for-gps-antenna?utm_source=LoRa-WiFi-LTE-SPD&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)


<rk-img
  src="/assets/images/wisgate/rak-hotspot/troubleshooting/9.png"
  width="100%"
  caption="RAK Hotspot + Outdoor Enclosure Kit RAKBox-GW-3 + Pulsar Cable LMR400 RAK9731 + Lightning Arrestor + Fiberglass Antenna"
/>