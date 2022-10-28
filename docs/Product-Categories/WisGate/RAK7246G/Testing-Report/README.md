---
rak_desc: Displays the RAK7246G test requirements and results in different temperature work and storage scenarios. This ensures that your LoRaWAN Gateway can operate efficiently in various conditions.
rak_img: /assets/images/wisgate/rak7246g/quickstart/RAK7246G.png
prev: ../Datasheet/
next: false
tags:
  - RAK7246G
  - wisgate
  - Environment Test Report
---

# Environment Test Report

## Product Information

| Sample Name     | Model                                     | Quantity |
| --------------- | ----------------------------------------- | -------- |
| LoRaWAN Gateway | RAK7246 (Raspberry Pi 0+ + RAK2246 EU868) | 1        |

## Test Project

| No. | Test item                     | Temperature conditions |
| --- | ----------------------------- | ---------------------- |
| 1   | Low-temperature storage test  | -10˚&nbsp;C            |
| 2   | Low-temperature work test     | -10˚&nbsp;C            |
| 3   | High-temperature storage test | 65˚&nbsp;C             |
| 4   | High-temperature work test    | 65˚&nbsp;C             |

## Test Equipment

| Test Equipment                   | Model                                     | Quantity |
| -------------------------------- | ----------------------------------------- | -------- |
| Multi-channel temperature tester | WD-08A                                    | 1        |
| Environmental test chamber       | Mini BTC 03                               | 1        |
| Equipment being tested           | RAK7246 (Raspberry Pi 0+ + RAK2246 EU868) | 1        |
| LoRa Nodes                       | RAK5205                                   | 7        |

## Pictures of the Test Equipment

<rk-img
  src="/assets/images/wisgate/rak7246g/testing-report/1.png"
  width="50%"
  caption="Multi-channel temperature tester"
/>

<rk-img
  src="/assets/images/wisgate/rak7246g/testing-report/2.png"
  width="50%"
  caption="RAK7246"
/>

<rk-img
  src="/assets/images/wisgate/rak7246g/testing-report/3.png"
  width="50%"
  caption="Environmental test chamber"
/>

<rk-img
  src="/assets/images/wisgate/rak7246g/testing-report/4.png"
  width="50%"
  caption="LoRa nodes"
/>

## Test Requirements

- Low-temperature storage test:

Place the DUT in the temperature chamber and set the low temperature to -10˚&nbsp;C. The DUT can power up and login via SSH when all temperature monitoring points reach -10˚&nbsp;C.

- Low-temperature work test:

a. When all test points reach -10˚&nbsp;C, The DUT can power up and login via SSH.

b. It can connect to the cloud server to send and receive LoRa packets.

c. The LAN port and Wi-Fi work well.

- High-temperature storage test:

Place the DUT in the temperature chamber and set the high temperature to 65˚&nbsp;C. The DUT can power up and login via SSH when all temperature monitoring points reach 65˚&nbsp;C.

- High-temperature work test:

a. When all test points reach 65˚&nbsp;C, The DUT can power up and login via SSH.

b. It can connect to the cloud server to send and receive LoRa packets.

c. The LAN port and Wi-Fi work well.

- Temperature monitoring points of RAK7246:

| Chains | Monitoring Point                                           | Color  | Max Temperature |
| ------ | ---------------------------------------------------------- | ------ | --------------- |
| ch1    | Raspberry Pi 0' CPU                                        | RED    | 89˚&nbsp;C      |
| ch2    | Raspberry Pi 0' power chip                                 | YELLOW | 88.1˚&nbsp;C    |
| ch3    | Raspberry Pi 0' Wi-Fi module                               | BLUE   | 87.6˚&nbsp;C    |
| ch4    | Heat dissipation aluminum of RAK2245                       | PURPLE | 85.8˚&nbsp;C    |
| ch5    | The internal temperature of the environmental test chamber | WHITE  | 65˚&nbsp;C      |

<rk-img
  src="/assets/images/wisgate/rak7246g/testing-report/5.png"
  width="75%"
  caption="Temperature monitoring points"
/>

## Test Results

| Test Project             | Test Result                                                               | Conclusion |
| ------------------------ | ------------------------------------------------------------------------- | ---------- |
| Low-temperature storage  | The DUT can power up and login via SSH.                                   | PASS       |
| Low-temperature work     | Can send and receive LoRa packets normally and the Wi-Fi also works well. | PASS       |
| High-temperature storage | The DUT can power up and login via SSH.                                   | PASS       |
| High-temperature work    | Can send and receive LoRa packets normally and the Wi-Fi also works well. | PASS       |

<rk-img
  src="/assets/images/wisgate/rak7246g/testing-report/6.png"
  width="75%"
  caption="Send and receive LoRa packets at -10 ℃"
/>

<rk-img
  src="/assets/images/wisgate/rak7246g/testing-report/7.png"
  width="75%"
  caption="Send and receive packets at 65 ℃"
/>

<rk-img
  src="/assets/images/wisgate/rak7246g/testing-report/8.png"
  width="75%"
  caption="Wi-Fi works well at -10 ℃"
/>

<rk-img
  src="/assets/images/wisgate/rak7246g/testing-report/9.png"
  width="75%"
  caption="Wi-Fi works well at 65 ℃"
/>

## Test Date and Location

| Item          | Information                                                               |
| ------------- | ------------------------------------------------------------------------- |
| Test date     | 20 November 2019                                                          |
| Test location | Room 307, building 3, Guofeng Meitang building, Huilongguan town, Beijing |
| Prepared by   | Hairui Tao                                                                |
| Approved by   | Ken Yu                                                                    |
