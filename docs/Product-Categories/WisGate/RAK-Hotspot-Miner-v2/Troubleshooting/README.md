---
next: ../Datasheet/
prev: ../Quickstart/
tags:
  - RAK Hotspot Miner v2
  - Troubleshooting
  - wisgate
---

# Troubleshooting

## Status LEDs

The RAK Hotspot Miner V2 includes two (2) small LEDs for status: 

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner-v2/troubleshooting/StatusLED.svg"
  width="40%"
  caption="Status LED location"
/> 

🔴 **Red LED**: Solid red is good; it means Pi is getting power. In normal operation, only solid red should be seen. Flashing red means there is some issue with the power supply — reconnect power and check again.

🟢 **Green LED**: At power-up, Green LED will blink in a random pattern, but after about 5 seconds, it should stop. If Green is blinking repeatedly for a long time, it means there is some problem - usually, this will be the SD card, but maybe a power issue too.

In the case of a constant blinking Green, refer to the following recommendations:

1. Unplug USB-C power.
2. Extract microSD card, check and re-insert it making sure it is well seated. The card could have moved in shipping, or the user may have inserted it incorrectly, which is upside down after backup.
3. Reconnect USB-C power making sure it is plugged in all the way.


## Proper Miner connection scenarios with the RAK outdoor enclosure/antennas

### Scenario 1 (Indoor, optimal)

Products Used:

- [RAK Hotspot Miner V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore) 
- [Magnetic Antenna Base](https://store.rakwireless.com/products/antenna-magnetic-base?utm_source=MagneticAntennaBase&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiber Glass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner-v2/troubleshooting/1a.png"
  width="100%"
  caption="RAK Hotspot Miner V2 + Magnetic Antenna Base + Fiber Glass Antenna"
/> 

### Scenario 2 (Indoor, suboptimal)

Products Used:

- [RAK Hotspot Miner V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)  
- Converter Cable (included with any of the Fiber Glass Antennas)
- [Fiber Glass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)
  
<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner-v2/troubleshooting/2a.png"
  width="100%"
  caption="RAK Hotspot Miner V2 + Converter Cable + Fiber Glass Antenna"
/> 

### Scenario 3 (Outdoor, optimal)

Products Used:

- [RAK Hotspot Miner V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore) 
- [Outdoor Enclosure Kit RAKBox-GW-3](https://store.rakwireless.com/products/Outdoor-Enclosure-Kit-H?variant=37912840863942)
- [Lightning Arrestor](https://store.rakwireless.com/products/lightning-arrestor)
- [Fiber Glass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner-v2/troubleshooting/7a.png"
  width="100%"
  caption="RAK Hotspot Miner V2 + Outdoor Enclosure Kit RAKBox-GW-3 + Lightning Arrestor + Fiber Glass Antenna"
/> 
### Scenario 4 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot Miner V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore) 
- Converter Cable (included with any of the Fiber Glass Antennas)
- [Lightning Arrestor](https://store.rakwireless.com/products/lightning-arrestor)
- [Fiber Glass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner-v2/troubleshooting/3a.png"
  width="100%"
  caption="RAK Hotspot Miner V2 + Converter Cable + Lightning Arrestor + Fiber Glass Antenna"
/> 

### Scenario 5 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot Miner V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore) 
- [Pulsar Cable LMR400 RAK9733](https://store.rakwireless.com/products/pulsar-cable-rak9731-rak9733?variant=39677580935366)
- [Fiber Glass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner-v2/troubleshooting/4a.png"
  width="100%"
  caption="RAK Hotspot Miner V2 + Pulsar Cable LMR400 RAK9733 + Fiber Glass Antenna"
/> 

### Scenario 6 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot Miner V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)  
- [Pulsar Cable LMR400 RAK9733](https://store.rakwireless.com/products/pulsar-cable-rak9731-rak9733?variant=39677580935366)
- [Lightning Arrestor](https://store.rakwireless.com/products/lightning-arrestor)
- [Fiber Glass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner-v2/troubleshooting/5a.png"
  width="100%"
  caption="RAK Hotspot Miner V2 + Pulsar Cable LMR400 RAK9733 + Lightning Arrestor + Fiber Glass Antenna"
/> 

### Scenario 7 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot Miner V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)  
- [Outdoor Enclosure Kit RAKBox-GW-3](https://store.rakwireless.com/products/Outdoor-Enclosure-Kit-H?variant=37912840863942)
- [Fiber Glass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner-v2/troubleshooting/6a.png"
  width="100%"
  caption="RAK Hotspot Miner V2 + Outdoor Enclosure Kit RAKBox-GW-3 + Fiber Glass Antenna"
/> 

### Scenario 8 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot Miner V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)  
- [Outdoor Enclosure Kit RAKBox-GW-3](https://store.rakwireless.com/products/Outdoor-Enclosure-Kit-H?variant=37912840863942)
- [Pulsar Cable LMR400 RAK9731](https://store.rakwireless.com/products/pulsar-cable-rak9731-rak9733?variant=39677580935366)
- [Fiber Glass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner-v2/troubleshooting/8a.png"
  width="100%"
  caption="RAK Hotspot Miner V2 + Outdoor Enclosure Kit RAKBox-GW-3 + Pulsar Cable LMR400 RAK9731 + Fiber Glass Antenna"
/> 

### Scenario 9 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot Miner V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore) 
- [Outdoor Enclosure Kit RAKBox-GW-3](https://store.rakwireless.com/products/Outdoor-Enclosure-Kit-H?variant=37912840863942)
- [Pulsar Cable LMR400 RAK9731](https://store.rakwireless.com/products/pulsar-cable-rak9731-rak9733?variant=39677580935366)
- [Lightning Arrestor](https://store.rakwireless.com/products/lightning-arrestor)
- [Fiber Glass Antenna](https://store.rakwireless.com/products/900-930mhz-8dbi-fiber-glass-antenna?variant=36518410322078&utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner-v2/troubleshooting/9a.png"
  width="100%"
  caption="RAK Hotspot Miner V2 + Outdoor Enclosure Kit RAKBox-GW-3 + Pulsar Cable LMR400 RAK9731 + Lightning Arrestor + Fiber Glass Antenna"
/> 
