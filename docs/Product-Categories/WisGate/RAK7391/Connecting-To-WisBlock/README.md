---
rak_desc: Provides information on how to connect your RAK7391 to any WisBlock modules. This information includes technical specifications, characteristics, and requirements.
rak_img: /assets/images/wisgate/rak7391/overview/RAK7391.png
prev: ../Services/
next: ../Datasheet/
tags:
  - RAK7391
  - Connecting to WisBlock
  - WisGate
---

# RAK7391 WisGate Connect Connecting to WisBlock

## Connectors Position

There are two WisBlock slots on the RAK7391 board, right next to the USB 2.0 and USB 3.0 ports. The WisBlock slots support various industrial protocols via WisBlock modules: IO, Analog, 0-5&nbsp;V, 4-20&nbsp;mA, ModBUS, and LinBUS.

<rk-img
  src="/assets/images/wisgate/rak7391/connecting-to-wisblock/1.wisblock-slots.png"
  width="60%"
  caption="WisBlock slots"
/>

## Pin Definition

Both of the WisBlock slots connectors are with 40-pin high-density headers. Each of them is connected to a GPIO expander TPT29555-TS5R. The I2C addresses of these two GPIO expander chips are 0x26 and 0x27. 

<rk-img
  src="/assets/images/wisgate/rak7391/connecting-to-wisblock/2.pinouts.png"
  width="100%"
  caption="WisBlock slot pinouts"
/>

<br>

<rk-img
  src="/assets/images/wisgate/rak7391/connecting-to-wisblock/3.gpio.png"
  width="100%"
  caption="GIPO expand pinouts"
/>

## Supported Modules

The WisBlock slots support various industrial protocols via WisBlock modules: IO, Analog, 0-5&nbsp;V, 4-20&nbsp;mA, ModBUS, and LinBUS.

### Onboard

- TPT29555 GPIO Expander

### Interface

- [RAK5801 4-20mA Interface Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK5801/Overview/)
- [RAK5802 RS485 ModBUS Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK5802/Overview/)
- [RAK5811 0-5V Interface Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK5811/Overview/)
- [RAK13001 Relay IO Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK13001/Overview/)
- [RAK13004 PWM Expander Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK13004/Overview/)
- [RAK13005 LIN Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK13005/Overview/)
- [RAK13007 Relay Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK13007/Overview/)
- [RAK16001 ADC Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK16001/Overview/)
- [RAK17000 Motor Control Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK17000/Overview/)

### Sensors

- [RAK12004 MQ2 Gas Sensor Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12004/Overview/)
- [RAK12006 PIR Sensor Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12006/Overview/)
- [RAK12009 MQ3 Alcohol Gas Sensor Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12009/Overview/)
- [RAK12015 Vibration Detection Sensor Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12015/Overview/)
- [RAK13003 IO Expansion Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK13003/Overview/)
- [RAK16000 DC Current Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK16000/Overview/)

### Wireless

- [RAK13300 LPWAN Wireless Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK13300/Overview/)
- [RAK13600 NFC Reader Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK13600/Overview/)

## Example Code

For each module supported by RAK7391 WisBlock slot, there is a Python and Node-RED example script/flow prepared for you to get started with. You can download them from the links attached to each module below.

### Onboard

- TPT29555 GPIO Expander ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/rak7391/tpt29555))

### Interface

- RAK5801 4-20mA Interface Module ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/interface/rak5801), [Node-RED flow](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-node-red/-/tree/dev/interface/rak5801))
- RAK5802 RS485 ModBUS Module ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/interface/rak5802), [Node-RED flow](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-node-red/-/tree/dev/interface/rak5802/rak5802_modbus))
- RAK5811 0-5V Interface Module ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/interface/rak5811), [Node-RED flow](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-node-red/-/tree/dev/interface/rak5811))
- RAK13001 Relay IO Module ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/interface/rak13001))
- RAK13004 PWM Expander Module ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/interface/rak13004), [Node-RED flow](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-node-red/-/tree/dev/interface/rak13004/rak13004-servo))
- RAK13005 LIN Module ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/interface/rak13005), [Node-RED flow](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-node-red/-/tree/dev/interface/rak13005/rak13005-linbus))
- RAK13007 Relay Module ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/interface/rak13007))
- RAK16001 ADC Module ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/interface/rak16001), [Node-RED flow](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-node-red/-/tree/dev/interface/rak16001))
- RAK17000 Motor Control Module ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/interface/rak17000))


### Sensors

- RAK12004 MQ2 Gas Sensor Module ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/sensors/rak12004/rak12004-reading), [Node-RED flow](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-node-red/-/tree/dev/sensors/rak12004/rak12004-reading))
- RAK12006 PIR Sensor Module ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/sensors/rak12006))
- RAK12009 MQ3 Alcohol Gas Sensor Module ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/sensors/rak12009/rak12009-reading), [Node-RED flow](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-node-red/-/tree/dev/sensors/rak12009/rak12009-reading))
- RAK12015 Vibration Detection Sensor Module ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/sensors/rak12015), [Node-RED flow](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-node-red/-/tree/dev/sensors/rak12015/rak12015-tampering-detector))
- RAK13003 IO Expansion Module ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/sensors/rak13003/rak13003-blink), [Node-RED flow using the same chip](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-node-red/-/tree/dev/display/rak14003-example))
- RAK16000 DC Current Sensor ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/sensors/rak16000), [Node-RED flow](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-node-red/-/tree/dev/sensors/rak16000))

### Wireless

- RAK13300 SX1262 LPWAN Module ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/wireless/rak13300/rak13300-p2p))
- RAK13600 NFC Reader Module ([Python example](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-python/-/tree/dev/interface/rak13600), [Node-RED flow](https://git.rak-internal.net/product-rd/gateway/wis-developer/rak7391/wisblock-node-red/-/tree/dev/wireless/rak13600))

