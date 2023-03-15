---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/wisblock-comparison/wisblock-comparison.jpg
rak_desc: A comparison table for the WisBlock Audio Processing.
tags:
  - WisBlock
  - WisBlock Audio
  - WisBlock Audio Core
header:
  title: WisBlock Cores and Audio Processing Comparison Table
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 15/02/2023 8:00 PM
---

# WisBlock Cores and Audio Processing Comparison Table

## WisBlock Core Comparisons for Audio

WisBlock Audio supports a number of the WisBlock Cores. The table outlines a general comparison between the supported cores.

| WisBlock Core                | Core Features        | Basic Support | SD Card Recording (RAK18003) | SD Card Playback (RAK18003) | Edge Impulse (Sound Recognition) | Cyberon License (Voice Recognition) | Power Consumption |
| ---------------------------- | -------------------- | ------------- | ---------------------------- | --------------------------- | -------------------------------- | ----------------------------------- | ----------------- |
| RAK4631 Nordic nRF52840      | LoRaWAN (SX1262) BLE | Yes           | Yes                          | Yes                         | Yes                              | Yes                                 | Middle            |
| RAK11200 Espressif ESP32     | WiFi                 | Yes           | Yes                          | Yes                         | Yes                              | Yes                                 | Highest           |
| RAK11310 Raspberry Pi RP2040 | LoRaWAN (SX1262)     | Yes           | No                           | No                          | Yes                              | No                                  | Lowest            |
| RAK3372 STM32WLE5CC          | LoRaWAN (STM32WLE5)  | No            | No                           | No                          | No                               | No                                  | -                 |

## Core Comparison

RAKwireless WisBlock Audio currently provides examples for two audio processing methods: Edge Impulse and Cyberon voice processing software. Edge Impulse allows you to create your own model to recognize any sound, whereas the Cyberon software only works with voice. Both require a model to be created in order for them to work. RAKwireless provides the model for the Cyberon voice processing software, but for the Edge Impulse, you will need to train the model and record all the training sounds (the more, the better).

For further details, see the tables on the following sections.

| WisBlock Core                | Core Features        | Edge Impulse (Sound Recognition) | Cyberon License (Voice Recognition) | RAK18080 support (DSPg DBM10L) | Power Consumption (Edge Impulse) | Power Consumption (Cyberon)       | Power Consumption (Cyberon - RAK18080) |
| ---------------------------- | -------------------- | -------------------------------- | ----------------------------------- | ------------------------------ | -------------------------------- | --------------------------------- | -------------------------------------- |
| RAK4631 Nordic nRF52840      | LoRaWAN (SX1262) BLE | Yes                              | Yes                                 | Yes                            | 10.76&nbsp;mA (19.7&nbsp;mA max) | 11.2&nbsp;mA (20.6&nbsp;mA max)   | 19.74&nbsp;mA (39.83&nbsp;mA max)      |
| RAK11200 Espressif ESP32     | WiFi                 | Yes                              | Yes                                 | Yes                            | 66.35&nbsp;mA (96.2&nbsp;mA max) | 64.95&nbsp;mA (107.5&nbsp;mA max) | 77.33&nbsp;mA (118.06&nbsp;mA max)     |
| RAK11310 Raspberry Pi RP2040 | LoRaWAN (SX1262)     | Yes                              | No                                  | Yes                            | 29.05&nbsp;mA (39&nbsp;mA max)   | N/A                               | 41.30&nbsp;mA (69.17&nbsp;mA max)      |

:::tip 📝 NOTE:
Power consumption numbers are for reference (comparison) only. Your numbers will be different.
:::

## Model Comparison

| Audio Processing Model | Power Consumption | Voice Recognition | Generic Audio Recognition | Pre-compiled Model | Create Your Own Model | Cost      | Effort | Core Utilization |
| ---------------------- | ----------------- | ----------------- | ------------------------- | ------------------ | --------------------- | --------- | ------ | ---------------- |
| Cyberon                | Medium            | Good              | No                        | Yes - RAK provided | No                    | Yes       | Low    | For testing      |
| Cyberon on RAK18080    | Highest           | Vest              | No                        | Yes - RAK provided | No                    | Yes       | Low    | Low              |
| Edge Impulse           | Lowest            | Model Dependent   | Yes                       | No                 | Yes                   | Free/Paid | High   | For testing      |

:::tip 📝 NOTE:
1. Cyberon is useable with lowest effort in implementation, but you need to use RAK provided model - trigger and command words.
2. In terms of cost, Cyberon with RAK18080 is the most expensive.
:::

## Cyberon Model

The Cyberon Model is provided by RAKwireless and users cannot create their own models. If you are able to use the provided model, it is the easiest and fastest to implement. The Cyberon Model trigger and command list is provided in the table below. Refer to the samples for further information. If the RAKwireless provided model does not meet your requirements, RAKwireless can create new models for a fee for larger customers.

**Triggers/Commands available in the Cyberon Model:**

<table>
  <thead>
  <tr>
    <th>Group</th>
    <th>Trigger/Command</th>
    <th>ID</th>
  </tr>
  </thead>
  <tbody>
      <tr>
        <td rowspan = "3">Triggers</td>
        <td>Hey RAKstar</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Hey Helium</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Hey RAK Cloud</td>
        <td>3</td>
      </tr>
      <tr>
        <td rowspan = "8">Lights</td>
        <td>Turn Lights On</td>
        <td>101</td>
      </tr>
      <tr>
        <td>Turn Lights Off</td>
        <td>102</td>
      </tr>
      <tr>
        <td>Lights On</td>
        <td>103</td>
      </tr>
        <tr>
        <td>Lights Off</td>
        <td>104</td>
      </tr>
        <tr>
        <td>Turn Lights Up</td>
        <td>105</td>
      </tr>
        <tr>
        <td>Turn Lights Down</td>
        <td>106</td>
      </tr>
        <tr>
        <td>Dim Lights</td>
        <td>107</td>
      </tr>
        <tr>
        <td>Brighten Lights</td>
        <td>108</td>
      </tr>
      <tr>
        <td rowspan = "7">Lights Color</td>
        <td>Lights Red</td>
        <td>109</td>
      </tr>
      <tr>
        <td>Lights Blue</td>
        <td>110</td>
      </tr>
      <tr>
        <td>Lights Green</td>
        <td>111</td>
      </tr>
      <tr>
        <td>Lights Yellow</td>
        <td>112</td>
      </tr>
      <tr>
        <td>Lights Orange</td>
        <td>113</td>
      </tr>
      <tr>
        <td>Lights Pink</td>
        <td>114</td>
      </tr>
      <tr>
        <td>Lights White</td>
        <td>115</td>
      </tr>
      <tr>
        <td rowspan = "15">Music</td>
        <td>Play Music</td>
        <td>201</td>
      </tr>
      <tr>
        <td>Stop Music</td>
        <td>202</td>
      </tr>
      <tr>
        <td>Previous Song</td>
        <td>203</td>
      </tr>
      <tr>
        <td>Next Song</td>
        <td>204</td>
      </tr>
      <tr>
        <td>Volume Up</td>
        <td>205</td>
      </tr>
      <tr>
        <td>Volume Down</td>
        <td>206</td>
      </tr>
      <tr>
        <td>Stop</td>
        <td>207</td>
      </tr>
      <tr>
        <td>Pause</td>
        <td>208</td>
      </tr>
      <tr>
        <td>Next</td>
        <td>209</td>
      </tr>
      <tr>
        <td>Resume</td>
        <td>210</td>
      </tr>
      <tr>
        <td>Previous</td>
        <td>211</td>
      </tr>
      <tr>
        <td>Volume Up</td>
        <td>212</td>
      </tr>
      <tr>
        <td>Volume Down</td>
        <td>213</td>
      </tr>
      <tr>
        <td>Increase Volume</td>
        <td>214</td>
      </tr>
      <tr>
        <td>Decrease Volume</td>
        <td>777</td>
      </tr>
      <tr>
        <td rowspan = "7">WisDM</td>
        <td>Connect</td>
        <td>301</td>
      </tr>
      <tr>
        <td>Disconnect</td>
        <td>302</td>
      </tr>
      <tr>
        <td>Report Location</td>
        <td>303</td>
      </tr>
      <tr>
        <td>Get Status</td>
        <td>304</td>
      </tr>
      <tr>
        <td>Report Battery</td>
        <td>305</td>
      </tr>
      <tr>
        <td>Report Environment</td>
        <td>306</td>
      </tr>
      <tr>
        <td>Reset</td>
        <td>307</td>
      </tr>
  </tbody>
</table>
