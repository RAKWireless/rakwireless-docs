---
release_date: 08/26/2024
version: "0.9.0"
release_notes_description: RAKPiOS is a custom operating system tailored for CM4-based products, built on the Raspberry Pi OS. It integrates all necessary drivers, security updates, helper scripts, and Docker by default. This OS is designed for the RAK7391 WisGate Connect and RAK WisGate Developer products.
download_link: https://downloads.rakwireless.com/LoRa/Software_Firmware/RAKPiOS/20240826-rakpios-0.9.0-arm64-lite.zip
logo: /assets/images/release-notes/rakpios.png
---


<rk-release-notes/>

---


##### Added

| No. | Feature                                                  |
|-----|----------------------------------------------------------|
| 1   | Included script to configure Miromico Mioty Edge Card    |
| 2   | Add custom entry points for WisBlock USB at /dev/ttyWB## |



##### Changed

| No. | Feature                                                             |
|-----|---------------------------------------------------------------------|
| 1   | Based on upstream 2024-07-04-raspios-bookworm-arm64 with kernel 6.6 |



##### Fixed

| Daily Build No. / Bug No. | Description                                            |
|---------------------------|--------------------------------------------------------|
| -                         | Fixed error in rakpios-cli modules folder not existing |


