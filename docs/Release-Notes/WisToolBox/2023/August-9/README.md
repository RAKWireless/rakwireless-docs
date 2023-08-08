---
release_date: 08/09/2023
version: "4.0"
release_notes_description: WisToolBox is a complementary software tool for RUI3-based RAK modules. It is available as a computer application and as a mobile app. It also supports different operating systems - Windows, Linux, macOS, Android, and iOS. WisToolBox is primarily used for device configuration and management via an intuitive user interface.
download_link:
    - text: Windows
      link: https://www.microsoft.com/store/productId/9P6691TTW3J5
    - text: Linux
      link: https://snapcraft.io/wistoolbox
    - text: macOS
      link: https://downloads.rakwireless.com/WisToolBox/WisToolBox_macOS.zip
logo: /assets/images/release-notes/WisToolBox.png

---

<rk-release-notes/>


##### Added

| No. | Feature                                                                          | Description                                                                                                                                                                                          |
| --- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | RAK10701 Field tester for LoRaWAN support                                        | Integrated into both the mobile and desktop versions of WisToolBox. It empowers users to effortlessly configure the RAK10701 device for LoRaWAN compatibility.                                       |
| 2   | RAK11720 Ambiq Apollo3 Core Module for LoRaWAN support                           | Incorporated the RAK11720 into the WisToolBox desktop version, exclusively for WisDuo users. With this enhancement, configuring the RAK11720 for LoRaWAN connectivity becomes a seamless experience. |
| 3   | Sensor Probe IO with 3rd Party Sensors Integration via Generic Backend Mechanism | Seamlessly connect 3rd-party pre-built sensors using Sensor ProbeIO. <br> Effortlessly view sensor data and set device intervals through WisToolBox.                                                 |


##### Enhanced

| No. | Feature                                                        | Description                                                                                                                                                    |
| --- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Revamped onboarding flow for improved visibility               | For the mobile version, onboarding flow is changed to get better visibility of NFC and BLE connection flows. Devices can easily connect to different devices.  |
| 2   | Enhanced terminology for better clarity                        | Updated the naming convention: from **NB-IoT** to **LTE-M** across the sensor hub device.                                                                      |
| 3   | Enhanced certification visibility in LTE-M application section | Introducing a valuable validation rule for certificates within the application section of LTE-M, specifically when the chosen service is MQTT or AWS IoT Core. |
|     |                                                                | For mobile app user, you can easily determine whether the sensor hub application settings include the uploaded certificates.                                   |
|     |                                                                | This enhancement provides a clear information about whether you need to supply these certificates.                                                             |  |  |
