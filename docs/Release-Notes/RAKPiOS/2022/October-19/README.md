---
release_date: 10/19/2022
version: "0.6.0"
release_notes_description: RAKPiOS is a custom operating system tailored for CM4-based products, built on the Raspberry Pi OS. It integrates all necessary drivers, security updates, helper scripts, and Docker by default. This OS is designed for the RAK7391 WisGate Connect and RAK WisGate Developer products.
download_link: https://downloads.rakwireless.com/LoRa/Software_Firmware/RAKPiOS/History-Version-Release/20221019-rakpios-0.6.0-arm64-lite.zip
logo: /assets/images/release-notes/rakpios.png
---


<rk-release-notes/>

---

##### Added

| No. | Feature                                     |
|-----|---------------------------------------------|
| 1   | Force user to type password for sudo access |


##### Changed

| No. | Feature                                                                                                                                         |
|-----|-------------------------------------------------------------------------------------------------------------------------------------------------|
| 1   | Based on 2022-09-22-raspios-bullseye (but keeping default user as 'rak' with 'changeme' as initial password and force change it on first login) |
| 2   | Set GPIO expanders I2C addresses to 0x26 and 0x27                                                                                               |
| 3   | Enable SPI and I2C on all devices (not only for CM4)                                                                                            |
| 4   | MOTD does not show docker section if there is no container running                                                                              |
| 5   | Changes in docker build scripts                                                                                                                 |


