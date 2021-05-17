---
prev: ../Quickstart/
next: false
tags:
  - RAK7243
  - Environment Test Report
  - wisgate
---

# Environment Test Report

## Product Information

| Sample name     | Model                                            | Quantity |
| --------------- | ------------------------------------------------ | -------- |
| LoRaWAN gateway | RAK7243 (Raspberry Pi 3B+ + LTE + RAK2245 EU868) | 1        |

## Test Project

| No. | Test item                     | Temperature conditions |
| --- | ----------------------------- | ---------------------- |
| 1   | Low-temperature storage test  | -40 ℃                  |
| 2   | Low-temperature work test     | -40 ℃                  |
| 3   | High-temperature storage test | 85 ℃                   |
| 4   | High-temperature work test    | 85 ℃                   |

## Test Equipment

| Test equipment                   | Model                                           | Quantity |
| -------------------------------- | ----------------------------------------------- | -------- |
| Multi-channel temperature tester | WD-08A                                          | 1        |
| Environmental test chamber       | Mini BTC 03                                     | 1        |
| Equipment being tested           | RAK7243 (Raspberry Pi3B+ + LTE + RAK2245 EU868) | 1        |
| LoRa Nodes                       | RAK5205                                         | 7        |

## Pictures of the Test Equipment

<rk-img
  src="/assets/images/wisgate/rak7243/testing-report/1.tester.png"
  width="50%"
  caption="Multi-channel temperature tester"
/>

<rk-img
  src="/assets/images/wisgate/rak7243/testing-report/2.png"
  width="50%"
  caption="RAK7243"
/>

<rk-img
  src="/assets/images/wisgate/rak7243/testing-report/3.test_chamber.png"
  width="50%"
  caption="Enviromental test chamber"
/>

<rk-img
  src="/assets/images/wisgate/rak7243/testing-report/4.lora-nodes.png"
  width="50%"
  caption="LoRa nodes"
/>

## Test requirements

- Low-temperature storage test:

Place the DUT in the temperature chamber and set the low temperature to -40º C. The DUT can power up and login via SSH when all temperature monitoring points reach -40℃.

- Low-temperature work test:

a. When all test points reach -40º C, The DUT can power up and login via SSH.

b. It can connect to the cloud server to send and receive LoRa packets.

c. The LAN port and Wi-Fi work well.

- High-temperature storage test:

Place the DUT in the temperature chamber and set the high temperature to 85º C. The DUT can power up and login via SSH when all temperature monitoring points reach 85º C.

- High-temperature work test:

a. When all test points reach 85º C, The DUT can power up and login via SSH.

b. It can connect to the cloud server to send and receive LoRa packets.

c. The LAN port and Wi-Fi work well.

- Temperature monitoring points of RAK7243:

| Chains | Monitoring point                                           | Color  | Max temperature |
| ------ | ---------------------------------------------------------- | ------ | --------------- |
| ch1    | Raspberry Pi 3B+' CPU                                      | RED    | 106.7º C        |
| ch2    | Raspberry Pi 3B+' power chip                               | YELLOW | 107º C          |
| ch3    | Raspberry Pi 3B+' Wi-Fi module                             | BLUE   | 104.1º C        |
| ch4    | Raspberry Pi 3B+' PHY chip                                 | PURPLE | 106.5º C        |
| ch5    | RAK2013 LTE module                                         | CYAN   | 101º C          |
| ch6    | Heat dissipation aluminum of RAK2245                       | GREEN  | 100.9º C        |
| ch7    | The internal temperature of the environmental test chamber | WHITE  | 85.6º C         |

<rk-img
  src="/assets/images/wisgate/rak7243/testing-report/5.png"
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
  src="/assets/images/wisgate/rak7243/testing-report/6.png"
  width="75%"
  caption="Send and receive LoRa packets at -40º C"
/>

<rk-img
  src="/assets/images/wisgate/rak7243/testing-report/7.lora-packets.png"
  width="75%"
  caption="Send and receive packets at 85º C"
/>

<rk-img
  src="/assets/images/wisgate/rak7243/testing-report/8.wifi.png"
  width="75%"
  caption="Wi-Fi works well at -40º C"
/>

<rk-img
  src="/assets/images/wisgate/rak7243/testing-report/9.wifi.png"
  width="75%"
  caption="Wi-Fi works well at 85º C"
/>

## Test Date and Location

| Item           | Information                                                               |
| -------------- | ------------------------------------------------------------------------- |
| Test date:     | 19 November 2019                                                          |
| Test location: | Room 307, building 3, Guofeng Meitang building, Huilongguan town, Beijing |
| Prepared by:   | Hairui Tao                                                                |
| Approved by:   | Ken Yu                                                                    |
