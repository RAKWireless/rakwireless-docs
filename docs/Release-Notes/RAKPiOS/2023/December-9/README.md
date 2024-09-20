---
release_date: 12/09/2024
version: "0.8.0"
release_notes_description: RAKPiOS is a custom operating system tailored for CM4-based products, built on the Raspberry Pi OS. It integrates all necessary drivers, security updates, helper scripts, and Docker by default. This OS is designed for the RAK7391 WisGate Connect and RAK WisGate Developer products.
download_link: https://downloads.rakwireless.com/LoRa/Software_Firmware/RAKPiOS/History-Version-Release/20240229-rakpios-0.8.0-arm64-lite.zip
logo: /assets/images/release-notes/rakpios.png
---


<rk-release-notes/>

---


##### Added

| No. | Feature                                                        |
|-----|----------------------------------------------------------------|
| 1   | Added firstboot.d folder with scripts to execute on first boot |
| 2   | Support for Raspberry Pi 5                                     |




##### Changed

| No. | Feature                                                       |
|-----|---------------------------------------------------------------|
| 1   | Based on upstream 2023-12-11-raspios-bookworm with kernel 6.1 |
| 2   | OLED script as service                                        |
| 3   | Refactor stage2-rak folders                                   |




##### Fixed

| Daily Build No. / Bug No. | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| -                         | Remove loopback interface when checking for connected networks in create-ap |




##### Removed

| No. | Description                                          |
|-----|------------------------------------------------------|
| 1   | Removed RAKUID variable and utility                  |
| 2   | Remove most python modules from default installation |


