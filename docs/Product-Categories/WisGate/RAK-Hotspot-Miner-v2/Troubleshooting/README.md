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


The RAK Hotspot Miner includes two (2) small LEDs for status: 

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/troubleshooting/StatusLED.svg"
  width="30%"
  caption="Status LED location"
/> 

🔴 **Red LED**: Solid red is good; it means Pi is getting power. In normal operation, only solid red should be seen. Flashing red means there is some issue with the power supply — reconnect power and check again.

🟢 **Green LED**: At power-up, Green LED will blink in a random pattern, but after about 5 seconds, it should stop. If Green is blinking repeatedly for a long time, it means there is some problem - usually, this will be the SD card, but maybe a power issue too.

In the case of a constant blinking Green, refer to the following recommendations:

1. Unplug USB-C power.
2. Extract microSD card, check and re-insert it making sure it is well seated. The card could have moved in shipping, or the user may have inserted it incorrectly, which is upside down after backup.
3. Reconnect USB-C power making sure it is plugged in all the way.


