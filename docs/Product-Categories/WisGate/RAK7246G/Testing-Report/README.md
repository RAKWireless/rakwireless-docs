---
rak_desc: Displays the RAK7246G test requirements and results in different temperature work and storage scenarios. This ensures that your LoRaWAN Gateway can operate efficiently in various conditions.
rak_img: /assets/images/wisgate/rak7246g/quickstart/RAK7246_home.png
prev: ../Datasheet/
next: false
tags:
  - RAK7246G
  - wisgate
  - Environment Test Report
---

# Environment Test Report

## Product Information

| Sample name     | Model                                     | Quantity |
| --------------- | ----------------------------------------- | -------- |
| LoRaWAN gateway | RAK7246 (Raspberry Pi 0+ + RAK2246 EU868) | 1        |

## Test Project

| No. | Test item                     | Temperature conditions |
| --- | ----------------------------- | ---------------------- |
| 1   | Low-temperature storage test  | -10 ℃                  |
| 2   | Low-temperature work test     | -10 ℃                  |
| 3   | High-temperature storage test | 65 ℃                   |
| 4   | High-temperature work test    | 65 ℃                   |

## Test Equipment

| Test equipment                   | Model                                     | Quantity |
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
  caption="Enviromental test chamber"
/>

<rk-img
  src="/assets/images/wisgate/rak7246g/testing-report/4.png"
  width="50%"
  caption="LoRa nodes"
/>

## Test Requirements

- Low-temperature storage test:

Place the DUT in the temperature chamber and set the low temperature to -10º C. The DUT can power up and login via SSH when all temperature monitoring points reach -10℃.

- Low-temperature work test:

a. When all test points reach -10º C, The DUT can power up and login via SSH.

b. It can connect to the cloud server to send and receive LoRa packets.

c. The LAN port and Wi-Fi work well.

- High-temperature storage test:

Place the DUT in the temperature chamber and set the high temperature to 65º C. The DUT can power up and login via SSH when all temperature monitoring points reach 65º C.

- High-temperature work test:

a. When all test points reach 65º C, The DUT can power up and login via SSH.

b. It can connect to the cloud server to send and receive LoRa packets.

c. The LAN port and Wi-Fi work well.

- Temperature monitoring points of RAK7246:

| Chains | Monitoring point                                           | Color  | Max temperature |
| ------ | ---------------------------------------------------------- | ------ | --------------- |
| ch1    | Raspberry Pi 0' CPU                                        | RED    | 89º C           |
| ch2    | Raspberry Pi 0' power chip                                 | YELLOW | 88.1º C         |
| ch3    | Raspberry Pi 0' Wi-Fi module                               | BLUE   | 87.6º C         |
| ch4    | Heat dissipation aluminum of RAK2245                       | PURPLE | 85.8º C         |
| ch5    | The internal temperature of the environmental test chamber | WHITE  | 65º C           |

<rk-img
  src="/assets/images/wisgate/rak7246g/testing-report/5.png"
  width="75%"
  caption="Temperature monitoring points"
/>

## Test Results

| Test project             | Test result                                                               | Conclusion |
| ------------------------ | ------------------------------------------------------------------------- | ---------- |
| Low-temperature storage  | The DUT can power up and login via SSH.                                   | PASS       |
| Low-temperature work     | Can send and receive LoRa packets normally and the Wi-Fi also works well. | PASS       |
| High-temperature storage | The DUT can power up and login via SSH.                                   | PASS       |
| High-temperature work    | Can send and receive LoRa packets normally and the Wi-Fi also works well. | PASS       |

<rk-img
  src="/assets/images/wisgate/rak7246g/testing-report/6.png"
  width="75%"
  caption="Send and recieve LoRa packets at -10º C"
/>

<rk-img
  src="/assets/images/wisgate/rak7246g/testing-report/7.png"
  width="75%"
  caption="Send and recieve packets at 65º C"
/>

<rk-img
  src="/assets/images/wisgate/rak7246g/testing-report/8.png"
  width="75%"
  caption="Wi-Fi works well at -10º C"
/>

<rk-img
  src="/assets/images/wisgate/rak7246g/testing-report/9.png"
  width="75%"
  caption="Wi-Fi works well at 65º C"
/>

## Test Date and Location

| Item           | Information                                                               |
| -------------- | ------------------------------------------------------------------------- |
| Test date:     | 20 November 2019                                                          |
| Test location: | Room 307, building 3, Guofeng Meitang building, Huilongguan town, Beijing |
| Prepared by:   | Hairui Tao                                                                |
| Approved by:   | Ken Yu                                                                    |
