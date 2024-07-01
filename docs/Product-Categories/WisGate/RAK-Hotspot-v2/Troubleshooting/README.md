---
rak_desc: Walks through different connection scenarios with your RAK Hotspot v2. This includes both the outdoor and indoor enclosure and antennas of RAKwireless suitable for your LoRaWAN Gateway.
rak_img: /assets/images/wisgate/rak-hotspot-v2/RAK-Hotspot-V2.png
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
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/StatusLED-1.svg"
  width="30%"
  caption="Status LED location"
/>

🔴 **Red LED**: A solid red light indicates that the Pi is receiving power, which is normal during operation. If the red LED is flashing, it indicates a power supply issue. Reconnect the power and check again to resolve the problem.

🟢 **Green LED**: Upon power-up, the green LED will blink randomly for a brief period, typically about 5 seconds, before stopping. If the green LED continues to blink repeatedly for an extended period, it suggests a problem, usually related to the SD card, but possibly also due to a power issue.

In case the green LED continues blinking persistently, consider the following recommendations:

1. Unplug the USB-C power cable.
2. Remove the microSD card, check its position, and re-insert it ensuring it is properly seated. The card may have shifted during shipping or you might have inserted it incorrectly, perhaps upside down, after backing up.
3. Reconnect the USB-C power cable, ensuring it is securely plugged in all the way.


## Proper Connection Scenarios with the RAK Outdoor Enclosure/Antennas

### Scenario 1 (Indoor, optimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- [Magnetic Antenna Base](https://store.rakwireless.com/products/antenna-magnetic-base?utm_source=MagneticAntennaBase&utm_medium=Document&utm_campaign=BuyFromStore)
<<<<<<< HEAD
- [Fiberglass Antenna](https://store.rakwireless.com/products/fiber-glass-antenna-1?m=2&h=helium-antenna&variant=43034794721478?utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)
=======
- [Fiberglass Antenna](https://store.rakwireless.com/products/fiber-glass-antenna-1?m=2&h=helium-antenna&variant=43034794721478)
>>>>>>> 65268b40f (Troubleshooting audited.)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/Fig2.png"
  width="100%"
  caption="RAK Hotspot V2 + Magnetic Antenna Base + Fiberglass Antenna"
/>

### Scenario 2 (Indoor, suboptimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- Converter Cable (included with any of the Fiberglass Antennas)
<<<<<<< HEAD
- [Fiberglass Antenna](https://store.rakwireless.com/products/fiber-glass-antenna-1?m=2&h=helium-antenna&variant=43034794721478?utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)
=======
- [Fiberglass Antenna](https://store.rakwireless.com/products/fiber-glass-antenna-1?m=2&h=helium-antenna&variant=43034794721478)
>>>>>>> 65268b40f (Troubleshooting audited.)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/Fig3.png"
  width="100%"
  caption="RAK Hotspot V2 + Converter Cable + Fiberglass Antenna"
/>

### Scenario 3 (Outdoor, optimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- [Outdoor Enclosure Kit RAKBox-GW-3](https://store.rakwireless.com/products/Outdoor-Enclosure-Kit-H?utm_source=OutdoorEnclosureKitH&utm_medium=Document&utm_campaign=BuyFromStore)
- [Lightning Arrestor](https://store.rakwireless.com/products/lightning-arrestor-for-gps-antenna?utm_source=LoRa-WiFi-LTE-SPD&utm_medium=Document&utm_campaign=BuyFromStore)
<<<<<<< HEAD
- [Fiberglass Antenna](https://store.rakwireless.com/products/fiber-glass-antenna-1?m=2&h=helium-antenna&variant=43034794721478?utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)
=======
- [Fiberglass Antenna](https://store.rakwireless.com/products/fiber-glass-antenna-1?m=2&h=helium-antenna&variant=43034794721478)
>>>>>>> 65268b40f (Troubleshooting audited.)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/Fig4.png"
  width="100%"
  caption="RAK Hotspot V2 + Outdoor Enclosure Kit RAKBox-GW-3 + Lightning Arrestor + Fiberglass Antenna"
/>
### Scenario 4 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- Converter Cable (included with any of the Fiberglass Antennas)
- [Lightning Arrestor](https://store.rakwireless.com/products/lightning-arrestor-for-gps-antenna?utm_source=LoRa-WiFi-LTE-SPD&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/fiber-glass-antenna-1?m=2&h=helium-antenna&variant=43034794721478)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/Fig5.png"
  width="100%"
  caption="RAK Hotspot V2 + Converter Cable + Lightning Arrestor + Fiberglass Antenna"
/>

### Scenario 5 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- [Pulsar Cable LMR400 RAK9733](https://store.rakwireless.com/products/pulsar-cable-rak9731-rak9733?utm_source=RAK9733&utm_medium=Document&utm_campaign=BuyFromStore)
<<<<<<< HEAD
- [Fiberglass Antenna](https://store.rakwireless.com/products/fiber-glass-antenna-1?m=2&h=helium-antenna&variant=43034794721478?utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)
=======
- [Fiberglass Antenna](https://store.rakwireless.com/products/fiber-glass-antenna-1?m=2&h=helium-antenna&variant=43034794721478)
>>>>>>> 65268b40f (Troubleshooting audited.)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/Fig6.png"
  width="100%"
  caption="RAK Hotspot V2 + Pulsar Cable LMR400 RAK9733 + Fiberglass Antenna"
/>

### Scenario 6 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- [Pulsar Cable LMR400 RAK9733](https://store.rakwireless.com/products/pulsar-cable-rak9731-rak9733?utm_source=RAK9733&utm_medium=Document&utm_campaign=BuyFromStore)
- [Lightning Arrestor](https://store.rakwireless.com/products/lightning-arrestor-for-gps-antenna?utm_source=LoRa-WiFi-LTE-SPD&utm_medium=Document&utm_campaign=BuyFromStore)
<<<<<<< HEAD
- [Fiberglass Antenna](https://store.rakwireless.com/products/fiber-glass-antenna-1?m=2&h=helium-antenna&variant=43034794721478?utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)
=======
- [Fiberglass Antenna](https://store.rakwireless.com/products/fiber-glass-antenna-1?m=2&h=helium-antenna&variant=43034794721478)
>>>>>>> 65268b40f (Troubleshooting audited.)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/Fig7.png"
  width="100%"
  caption="RAK Hotspot V2 + Pulsar Cable LMR400 RAK9733 + Lightning Arrestor + Fiberglass Antenna"
/>

### Scenario 7 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- [Outdoor Enclosure Kit RAKBox-GW-3](https://store.rakwireless.com/products/Outdoor-Enclosure-Kit-H?utm_source=OutdoorEnclosureKitH&utm_medium=Document&utm_campaign=BuyFromStore)
<<<<<<< HEAD
- [Fiberglass Antenna](https://store.rakwireless.com/products/fiber-glass-antenna-1?m=2&h=helium-antenna&variant=43034794721478?utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)
=======
- [Fiberglass Antenna](https://store.rakwireless.com/products/fiber-glass-antenna-1?m=2&h=helium-antenna&variant=43034794721478)
>>>>>>> 65268b40f (Troubleshooting audited.)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/Fig8.png"
  width="100%"
  caption="RAK Hotspot V2 + Outdoor Enclosure Kit RAKBox-GW-3 + Fiberglass Antenna"
/>

### Scenario 8 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- [Outdoor Enclosure Kit RAKBox-GW-3](https://store.rakwireless.com/products/Outdoor-Enclosure-Kit-H?utm_source=OutdoorEnclosureKitH&utm_medium=Document&utm_campaign=BuyFromStore)
- [Pulsar Cable LMR400 RAK9731](https://store.rakwireless.com/products/pulsar-cable-rak9731-rak9733?utm_source=RAK9731&utm_medium=Document&utm_campaign=BuyFromStore)
- [Fiberglass Antenna](https://store.rakwireless.com/products/fiber-glass-antenna-1?m=2&h=helium-antenna&variant=43034794721478)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/Fig9.png"
  width="100%"
  caption="RAK Hotspot V2 + Outdoor Enclosure Kit RAKBox-GW-3 + Pulsar Cable LMR400 RAK9731 + Fiberglass Antenna"
/>

### Scenario 9 (Outdoor, suboptimal)

Products Used:

- [RAK Hotspot V2](https://store.rakwireless.com/products/rak-hotspot-miner?utm_source=RAKHotspotMiner&utm_medium=Document&utm_campaign=BuyFromStore)
- [Outdoor Enclosure Kit RAKBox-GW-3](https://store.rakwireless.com/products/Outdoor-Enclosure-Kit-H?utm_source=OutdoorEnclosureKitH&utm_medium=Document&utm_campaign=BuyFromStore)
- [Pulsar Cable LMR400 RAK9731](https://store.rakwireless.com/products/pulsar-cable-rak9731-rak9733?utm_source=RAK9731&utm_medium=Document&utm_campaign=BuyFromStore)
- [Lightning Arrestor](https://store.rakwireless.com/products/lightning-arrestor-for-gps-antenna?utm_source=LoRa-WiFi-LTE-SPD&utm_medium=Document&utm_campaign=BuyFromStore)
<<<<<<< HEAD
- [Fiberglass Antenna](https://store.rakwireless.com/products/fiber-glass-antenna-1?m=2&h=helium-antenna&variant=43034794721478?utm_source=868-930MHz8dBiFiberGlassAntenna&utm_medium=Document&utm_campaign=BuyFromStore)
=======
- [Fiberglass Antenna](https://store.rakwireless.com/products/fiber-glass-antenna-1?m=2&h=helium-antenna&variant=43034794721478)
>>>>>>> 65268b40f (Troubleshooting audited.)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-v2/troubleshooting/Fig10.png"
  width="100%"
  caption="RAK Hotspot V2 + Outdoor Enclosure Kit RAKBox-GW-3 + Pulsar Cable LMR400 RAK9731 + Lightning Arrestor + Fiberglass Antenna"
/>
