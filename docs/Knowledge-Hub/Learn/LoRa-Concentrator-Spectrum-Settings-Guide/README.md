---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: A sample calculation for the frequency template for spectral band under the WEB Management Platform.
tags:
  - User-Manual
  - WisGate
header:
  title: LoRa Concentrator Spectrum Settings Guide
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/general_banner.jpg
posted: 2/29/2020 10:30 AM
---

# LoRa Concentrator Spectrum Settings Guide

* [EU868 Spectrum Settings](#eu868-spectrum-settings)
* [KR920 Spectrum Settings](#kr920-spectrum-settings)

This is the LoRa RF Radio unit. It integrated two **Semtech SX1257** front-end modules with the most popular LoRaWAN Baseband chip, the **SX1301**. Because of the design of the concentrator module, there are two separate RX chains, which need to have the proper number of channels assigned in order for the module to function optimally. The chains are referred to as Radio 0 and Radio 1 in the Web Management Platform.

* **Radio 0**: can work in both TX and RX mode. It can have up to 5 channels assigned
* **Radio 1**: works solely in RX mode. It can also have up to 5 channels assigned.

The concentrator module supports up to 8 Multi-Spreading Factor Channels (Multi-SF), 1 Lora Standard Channel and 1 FSK Channel, that can be spread over the 2 Radios as long as the 5 channels/Radio rule is obeyed.

# EU868 Spectrum Settings

Let us take as an example the **EU863-870 frequency band**. When accessing the Web Management Platform, there is a template for it that you can import directly which would not need to set every channel manually. However, the way it has been configured is in accordance with principles that apply for any band.

## Center Frequency Settings

1. Set the Center Frequencies for the two Radios


|RX Channels|Frequency(Hz)| 
| ---- | ---- | 
|**Radio 0** Center Frequency | 867500000 (867.5 MHz) | 
|**Radio 1** Center Frequency | 868500000 (868.5 MHz) | 


2. Set the **Minimum** and **Maximum** frequency range of Radio

|TX Channels|Frequency (Hz) | 
| ---- | ---- | 
|**Radio 0** Tx Minimum Frequency|863000000 (863 MHz)| 
|**Radio 1** Tx Maximum Frequency|870000000 (870 MHz)| 

* The image below shows what the values for the EU863-870 band should be.
<rk-img
  src="/assets/images/knowledge-hub/user-manual/lora-spectrum-eu868/eu868freqtemplate.png"
  width="75%"
  caption="Default Frequency Template in the Web Management Platform"
/>

## Radio/Channel Selection

Let us have a summary of the parameters that can be seen in the image below, which is below the Radio
0 and Radio 1 frequency fields we discussed in the previous section.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/lora-spectrum-eu868/channel-panel.png"
  width="100%"
  caption="Concentrator Channel Panel"
/>

||| 
| ---- | ---- | 
|Chain. ID| Unique identifier of the channel (8 Multi-SF Channels, 1 LoRa Standard, 1 FSK) |
|Enable| Slider for turning a channel on/off | 
|Radio| The Radio the channel will be assigned to (max 5 per Radio) | 
|If [Hz] | The frequency offset from the center frequency for the given channel | 
|Freq [Hz] | The resulting frequency for the channel after summing the center frequency with the If field value | 
|Bandwidth [KHz] | This is only selectable for the LoRa Standard and FSK channels. The MultiSF are static | 
|Datarate| Essentially this is the Spreading Factor (SF) as it is directly related to the bitwise data rate. The MultiSF channels can dynamically use any of the available SFs (SF7 – SF12). The Standard LoRa channel has to have a single value assigned (SF7 - SF12). The FSK channel has a field with a numeric value to be entered in bps. In order to have each channel at the desired frequency the user needs to set the appropriate offset from the central frequency. This way you can end up with a number of channels spread above and below the center frequency | 


## Offset Frequency Settings

The (The Things Network) TTN Frequency Plan for the EU863-868 region is listed below. You may check other (The Things Network) TTN [Frequency Plan Documentations](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans.html).

### Uplink
    1. 868.1 - SF7BW125 to SF12BW125 
    2. 868.3 - SF7BW125 to SF12BW125 and SF7BW250
    3. 868.5 - SF7BW125 to SF12BW125 
    4. 867.1 - SF7BW125 to SF12BW125 
    5. 867.3 - SF7BW125 to SF12BW125 
    6. 867.5 - SF7BW125 to SF12BW125 
    7. 867.7 - SF7BW125 to SF12BW125 
    8. 867.9 - SF7BW125 to SF12BW125 
    9. 868.8 - FSK

### Downlink
    * Uplink channels 1-9 (RX1) 
    * 869.525 - SF9BW125 (RX2 downlink only)

With the Frequency Plan provided by The Things Network (TTN) it is now easy to see why we have chosen the values shown in **Figure 1: Default Frequency Template in the Web Management Platform**.

* Two (2) things should be taken into account.
    * We need to cover the whole spectrum for the **Uplink**, from the lowest to the highest frequency.
    * Additionally, we need to have the 5 channels per radio to be as close as possible with each other. So, we would group the Radios by frequency and not by number of channels. 

For the aforementioned reason, **TTN channels 1,2,3,9** should be assigned to the **first Radio (Radio 0)** (additionally there is one more channel, number 2, but with SF7 and 250KHz bandwidth). The **second Radio (Radio 1)** can get the other **five channels 4,5,6,7,8**.

Now, in order to keep the bandwidth tight, we pick a channel in each of the two Radio ranges
as close as possible to the middle. Ideally, as we have five channels, this would be the 3rd one. The **center frequency channels** are than **TTN channels 3 and 6**. This leads us to the center frequencies
that are in **Figure 1: Default Frequency Template in the Web Management Platform**. As for the Uplink, we simply need to cover the whole band, in this case
863 MHz to 870 MHz.

## Offset Frequency Calculation

Now we can start calculating the frequency offset we need to have from the center frequency
for each channel. We will use the following formula:

:::tip 📝 NOTE
**If** = **MultiSF** - **Radio Freq**
:::

### RADIO 1
    1. MultiSF 0 = TTN 1 = 868100000 Hz
         If 0 = MultiSF 0 - Radio 1 Freq = 868100000 – 868500000 = -400000 Hz
    2. MultiSF 1 = TTN 2 = 868300000 Hz 
         If 1 = MultiSF 1 - Radio 1 Freq = 868300000 – 868500000 = -200000 Hz
    3. MultiSF 2 = TTN 3 = 868500000 Hz 
         If 2 = MultiSF 2 - Radio 1 Freq = 868500000 – 868500000 = 0 Hz

Those are the first 3 TTN channels. The next channel however is at a lower frequency than all
the previous ones. Thus, it will be assigned to Radio 0

### RADIO 0
    1. MultiSF 3 = TTN 4 = 867100000 Hz 
        If 3 = MultiSF 3 - Radio 0 Freq = 867100000 – 867500000 = -400000 Hz 
    2. MultiSF 4 = TTN 5 = 867300000 Hz 
        If 4 = MultiSF 4 - Radio 0 Freq = 867300000 – 867500000 = -200000 Hz 
    3. MultiSF 5 = TTN 6 = 867500000 Hz 
        If 5 = MultiSF 5 - Radio 0 Freq = 867500000 – 867500000 = 0 Hz
    4. MultiSF 6 = TTN 7 = 867700000 Hz
        If 6 = MultiSF 6 - Radio 0 Freq = 867700000 – 867500000 = 200000 Hz
    5. MultiSF 7 = TTN 8 = 867900000 Hz 
        If 7 = MultiSF 7 - Radio 0 Freq = 867900000 – 867500000 = 400000 Hz

Finally, we have all the If frequency values and we only need plug them in the fields to get the
TTN EU863-868 Frequency Plan through Web Management Platform

:::tip 📝 NOTE
Do not forget to manually set the Bandwidth and DataRate of the LoRa std at 250K Hz (SF7) and FSK at 125K Hz (50000 bps).
:::

This concludes setting up the two Radios with the appropriated frequencies, bandwidths and
data rates.

# KR920 Spectrum Settings

Let us take as an example the **KR920-923 frequency band**. When accessing the Web Management Platform, there is a template for it that you can
import directly which would not need to set every channel manually. However, the way it has been configured is in accordance with principles that apply for any band.

## Center Frequency Settings

1. Sett the Center Frequencies for the two Radios

|RX Channels|Frequency (Hz) | 
| ---- | ---- | 
| **Radio 0** Center Frequency | 922500000 (922.5 MHz) | 
| **Radio 1** Center Frequency | 923300000 (923.3 MHz) | 


2. Set the **Minimum** and **Maximum** frequency range of Radio

| TX Channels | Frequency (Hz) | 
| ---- | ---- | 
| **Radio 0 Tx** Minimum Frequency | 920000000 (920 MHz) | 
| **Radio 1 Tx** Maximum Frequency | 925000000 (925 MHz) | 

* The figures below shows what the values for the KR920-923 frequency band should be:
<rk-img
  src="/assets/images/knowledge-hub/user-manual/lora-spectrum-kr920/kr920_concentrator0.png"
  width="75%"
  caption="Concentrator 0 Frequency Range"
/>

<rk-img
  src="/assets/images/knowledge-hub/user-manual/lora-spectrum-kr920/kr920_concentrator1.png"
  width="75%"
  caption="Concentrator 1 Frequency Range"
/>

## Radio/Channel Selection

Let us have a summary of the parameters that can be seen in the image below, which is below the Radio
0 and Radio 1 frequency fields we talked about in the previous section.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/lora-spectrum-kr920/concentrator0_panel.png"
  width="100%"
  caption="Concentrator 0 Settings"
/>

The same summary applies to Concentrator Module 1 in the image below:

<rk-img
  src="/assets/images/knowledge-hub/user-manual/lora-spectrum-kr920/concentrator1_panel.png"
  width="100%"
  caption="Concentrator 1 Settings"
/>

|||
| ---- | ---- | 
| Chain. ID | Unique identifier of the channel (8 Multi-SF Channels, 1 LoRa Standard, 1 FSK) | 
| Enable | Slider for turning a channel on/off | 
| Radio | The Radio the channel will be assigned to (max 5 per Radio) | 
| If [Hz] | The frequency offset from the center frequency for the given channel | 
| Freq [Hz] | The resulting frequency for the channel after summing the center frequency with the If field value | 
| Bandwidth [KHz] | This is only selectable for the LoRa Standard and FSK channels. The MultiSF are static | 
| Datarate | Essentially this is the Spreading Factor (SF as it is directly related to the bitwise data rate. The MultiSF channels can dynamically use any of the available SFs (SF7 – SF12). The Standard LoRa channel has to have a single value assigned (SF7 - SF12). The FSK channel has a field with a numeric value to be entered in bps In order to have each channel at the desired frequency the user needs to set the appropriate offset from the central frequency. This way you can end up with a number of channels spread above and below the center frequency | 


## Offset Frequency Settings

In Accordance with the [LoRa Alliance Regional Parameters Documentation](https://lora-alliance.org/sites/default/files/2018-04/lorawantm_regional_parameters_v1.1rb_-_final.pdf), we have the
following two frequency sub-bands, where channels 1, 2, and 3 are the default ones and need
to be available in any equipment using the band.

### Sub-Band 1

###### Uplink
    1. 922.1 - SF7BW125 to SF12BW125
    2. 922.3 - SF7BW125 to SF12BW125
    3. 922.5 - SF7BW125 to SF12BW125
    4. 922.7 - SF7BW125 to SF12BW125
    5. 922.9 - SF7BW125 to SF12BW125
    6. 923.1 - SF7BW125 to SF12BW125
    7. 923.3 - SF7BW125 to SF12BW125

###### Downlink
    Uplink channels 1-9 (RX1)

### Sub-Band 2

###### Uplink
    8. 920.9 - SF7BW125 to SF12BW125
    9. 921.1 - SF7BW125 to SF12BW125
    10. 921.3 - SF7BW125 to SF12BW125
    11. 921.5 - SF7BW125 to SF12BW125
    12. 921.7 - SF7BW125 to SF12BW125
    13. 921.9 - SF7BW125 to SF12BW125
###### Downlink
    Uplink channels 1-9 (RX1)

With the [Frequency Plan](https://lora-alliance.org/sites/default/files/2018-04/lorawantm_regional_parameters_v1.1rb_-_final.pdf) provided by LoRa Alliance®, it is now easy to see why we have chosen the values shown in Figure 3: Concentrator 0 Frequency Range and Figure 4: Concentrator 1 Frequency Range. 

* Two (2) things should be taken into account.
    * We need to cover the whole spectrum for the **Uplink**, from the lowest to the highest frequency.
    * Additionally, we need to have the 5 channels per radio to be as close as possible with each other. So, we would group the Radios by frequency and not by number of channels.

For the aforementioned reason, **channels 1,2,3,4,** and **5** should be assigned to the **first Radio (Radio 0)**. The **second Radio (Radio 1)** can get the other two **channels 6**, and
**7**.

Now, in order to keep the bandwidth tight, we pick a channel in each of the two Radio ranges
as close as possible to the middle. Ideally, as we have five channels (Radio 0), this would be the 3rd one. The **center frequency channels** are then **channels 3** and **7**. This leads us to the center frequencies
that are in Figure 3: Concentrator 0 Frequency Range. As for the Downlink, we simply need to cover the whole band, in this case
920 MHz to 925 MHz.

## Offset Frequency Calculation

Now we can start calculating the frequency offset we need to have from the center frequency
for each channel. We will use the following formula:

:::tip 📝 NOTE
 **If** = **MultiSF** - **Radio Freq**
:::

### Concentrator Module 0

###### RADIO 0 
    MultiSF 0 = CH 1 = 922100000 Hz 
     If 0 = MultiSF 0 - Radio 0 Freq = 922100000 – 922500000 = -400000 Hz 
    MultiSF 1 = CH 2 = 922300000 Hz 
     If 1 = MultiSF 1 - Radio 0 Freq = 922300000 – 922500000 = -200000 Hz 
    MultiSF 2 = CH 3 = 922500000 Hz 
     If 2 = MultiSF 2 - Radio 0 Freq = 922500000 – 922500000 = 0 Hz 
    MultiSF 3 = CH 4 = 922700000 Hz 
     If 3 = MultiSF 3 - Radio 0 Freq = 922700000 – 922500000 = 200000 Hz 
    MultiSF 4 = CH 5 = 922900000 Hz 
     If 4 = MultiSF 4 - Radio 0 Freq = 922900000 – 922500000 = 400000 Hz 
###### RADIO 1 
    MultiSF 5 = CH 6 = 923100000 Hz 
     If 5 = MultiSF 5 - Radio 1 Freq = 923100000 Hz – 923300000 = -200000 Hz 
    MultiSF 6 = CH 7 = 923300000 Hz 
     If 6 = MultiSF 6 - Radio 1 Freq = 923300000 Hz – 923300000 = 0 Hz

Finally we have all the If frequency values and we only need plug them in the fields to get the
TTN KR920-923 frequency plan. 

### Concentrator Module 1

###### RADIO 0
    MultiSF 0 = CH 1 = 920900000 Hz 
     If 0 = MultiSF 0 - Radio 0 Freq = 920900000 – 921100000 = -200000 Hz 
    MultiSF 1 = CH 2 = 921100000 Hz 
     If 1 = MultiSF 1 - Radio 0 Freq = 921100000 – 921100000 = 0 Hz 
    MultiSF 2 = CH 3 = 921300000 Hz 
     If 2 = MultiSF 2 - Radio 0 Freq = 921300000 – 921100000 = 200000 Hz 

###### RADIO 1 
    MultiSF 3 = CH 4 = 921500000 Hz 
     If 3 = MultiSF 3 - Radio 1 Freq = 921500000 – 921700000 = -200000 Hz 
    MultiSF 4 = CH 5 = 921700000 Hz 
     If 4 = MultiSF 4 - Radio 1 Freq = 921700000 – 921700000 = 0 Hz 
    MultiSF 5 = CH 6 = 922900000 Hz 
     If 5 = MultiSF 5 - Radio 1 Freq = 921900000 – 921700000 = 200000 Hz

:::tip 📝 NOTE
 Remember Band 1 is limited to 14 dBm maximum output power, Band 2 is limited to 10 dBm. The maximum downlink power of the RAK7249 Macro Outdoor Gateway is 23 dBm.
:::

This concludes setting up the two Radios with the appropriated frequencies, bandwidths and
data rates.




