---
rak_desc: Walks through different connection scenarios with your RAK Hotspot v2. This includes both the outdoor and indoor enclosure and antennas of RAKwireless suitable for your LoRaWAN Gateway.
rak_img: /assets/images/wisgate/rak-hotspot-v2/overview/rak_hotspot_miner_v2.png
next: ../Datasheet/
prev: ../Quickstart/
tags:
  - RAK Hotspot v2
  - Troubleshooting
  - wisgate
---

# Troubleshooting

## Status LEDs

The RAK Hotspot V2 includes two (2) small LEDs for status: 

<br>

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/StatusLED.svg"
  width="30%"
  caption="Status LED location"
/> 

🔴 **Red LED**: Solid red is good; it means Pi is getting power. In normal operation, only solid red should be seen. Flashing red means there is some issue with the power supply — reconnect power and check again.

🟢 **Green LED**: At power-up, Green LED will blink in a random pattern, but after about 5 seconds, it should stop. If Green is blinking repeatedly for a long time, it means there is some problem - usually, this will be the SD card, but maybe a power issue too.

In the case of a constant blinking Green, refer to the following recommendations:

1. Unplug USB-C power.
2. Extract microSD card, check and re-insert it making sure it is well seated. The card could have moved in shipping, or the user may have inserted it incorrectly, which is upside down after backup.
3. Reconnect USB-C power making sure it is plugged in all the way.


## Proper connection scenarios with the RAK outdoor enclosure/antennas

### Scenario 1 (Indoor, optimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore) 
- [Magnetic Antenna Base](https://store.rakwireless.com/products/antenna-magnetic-base?utm_source=MagneticAntennaBase&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/1a.png"
  width="100%"
  caption="RAK Hotspot V2 + Magnetic Antenna Base + Fiberglass Antenna"
/> 

### Scenario 2 (Indoor, suboptimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)  
- Converter Cable (included with any of the Fiberglass Antennas)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)
  
<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/2a.png"
  width="100%"
  caption="RAK Hotspot V2 + Converter Cable + Fiberglass Antenna"
/> 

### Scenario 3 (Outdoor, optimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore) 
- [Outdoor Enclosure Kit RAKBox-GW-3](https://store.rakwireless.com/products/Outdoor-Enclosure-Kit-H?utm_source=OutdoorEnclosureKitH&utm_medium=Document&utm_campaign=BuyFromStore)
- [Lightning Arrestor](https://store.rakwireless.com/products/lightning-arrestor-for-gps-antenna?utm_source=LoRa-WiFi-LTE-SPD&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/7a.png"
  width="100%"
  caption="RAK Hotspot V2 + Outdoor Enclosure Kit RAKBox-GW-3 + Lightning Arrestor + Fiberglass Antenna"
/> 
### Scenario 4 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore) 
- Converter Cable (included with any of the Fiberglass Antennas)
- [Lightning Arrestor](https://store.rakwireless.com/products/lightning-arrestor-for-gps-antenna?utm_source=LoRa-WiFi-LTE-SPD&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/3a.png"
  width="100%"
  caption="RAK Hotspot V2 + Converter Cable + Lightning Arrestor + Fiberglass Antenna"
/> 

### Scenario 5 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore) 
- [Pulsar Cable LMR400 RAK9733](https://store.rakwireless.com/products/pulsar-cable-rak9731-rak9733?utm_source=RAK9733&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/4a.png"
  width="100%"
  caption="RAK Hotspot V2 + Pulsar Cable LMR400 RAK9733 + Fiberglass Antenna"
/> 

### Scenario 6 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)  
- [Pulsar Cable LMR400 RAK9733](https://store.rakwireless.com/products/pulsar-cable-rak9731-rak9733?utm_source=RAK9733&utm_medium=Document&utm_campaign=BuyFromStore)
- [Lightning Arrestor](https://store.rakwireless.com/products/lightning-arrestor-for-gps-antenna?utm_source=LoRa-WiFi-LTE-SPD&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/5a.png"
  width="100%"
  caption="RAK Hotspot V2 + Pulsar Cable LMR400 RAK9733 + Lightning Arrestor + Fiberglass Antenna"
/> 

### Scenario 7 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)  
- [Outdoor Enclosure Kit RAKBox-GW-3](https://store.rakwireless.com/products/Outdoor-Enclosure-Kit-H?utm_source=OutdoorEnclosureKitH&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/6a.png"
  width="100%"
  caption="RAK Hotspot V2 + Outdoor Enclosure Kit RAKBox-GW-3 + Fiberglass Antenna"
/> 

### Scenario 8 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)  
- [Outdoor Enclosure Kit RAKBox-GW-3](https://store.rakwireless.com/products/Outdoor-Enclosure-Kit-H?utm_source=OutdoorEnclosureKitH&utm_medium=Document&utm_campaign=BuyFromStore)
- [Pulsar Cable LMR400 RAK9731](https://store.rakwireless.com/products/pulsar-cable-rak9731-rak9733?utm_source=RAK9731&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/8a.png"
  width="100%"
  caption="RAK Hotspot V2 + Outdoor Enclosure Kit RAKBox-GW-3 + Pulsar Cable LMR400 RAK9731 + Fiberglass Antenna"
/> 

### Scenario 9 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore) 
- [Outdoor Enclosure Kit RAKBox-GW-3](https://store.rakwireless.com/products/Outdoor-Enclosure-Kit-H?utm_source=OutdoorEnclosureKitH&utm_medium=Document&utm_campaign=BuyFromStore)
- [Pulsar Cable LMR400 RAK9731](https://store.rakwireless.com/products/pulsar-cable-rak9731-rak9733?utm_source=RAK9731&utm_medium=Document&utm_campaign=BuyFromStore)
- [Lightning Arrestor](https://store.rakwireless.com/products/lightning-arrestor-for-gps-antenna?utm_source=LoRa-WiFi-LTE-SPD&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/9a.png"
  width="100%"
  caption="RAK Hotspot V2 + Outdoor Enclosure Kit RAKBox-GW-3 + Pulsar Cable LMR400 RAK9731 + Lightning Arrestor + Fiberglass Antenna"
/> 
