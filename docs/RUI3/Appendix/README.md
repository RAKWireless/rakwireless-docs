# Appendix

## Data Rate by Region

<b>EU868/EU433/AS923</b>

| Data Rate | Configuration             | Indicative Physical Bit Rate [bit/s] |
| --------- | ------------------------- | ------------------------------------ |
| 0         | LoRa: SF12 / 125&nbsp;kHz | 250                                  |
| 1         | LoRa: SF11 / 125&nbsp;kHz | 440                                  |
| 2         | LoRa: SF10 / 125&nbsp;kHz | 980                                  |
| 3         | LoRa: SF9 / 125&nbsp;kHz  | 1760                                 |
| 4         | LoRa: SF8 / 125&nbsp;kHz  | 3125                                 |
| 5         | LoRa: SF7 / 125&nbsp;kHz  | 5470                                 |
| 6         | LoRa: SF7 / 250&nbsp;kHz  | 11000                                |
| 7         | FSK: 50&nbsp;kbps         | 50000                                |
| 8 ~ 15    | RFU                       |                                      |

<br>


<b>CN470/KR920</b>

| Data Rate | Configuration             | Indicative Physical Bit Rate [bit/s] |
| --------- | ------------------------- | ------------------------------------ |
| 0         | LoRa: SF12 / 125&nbsp;kHz | 250                                  |
| 1         | LoRa: SF11 / 125&nbsp;kHz | 440                                  |
| 2         | LoRa: SF10 / 125&nbsp;kHz | 980                                  |
| 3         | LoRa: SF9 / 125&nbsp;kHz  | 1760                                 |
| 4         | LoRa: SF8 / 125&nbsp;kHz  | 3125                                 |
| 5         | LoRa: SF7 / 125&nbsp;kHz  | 5470                                 |
| 6 ~ 15    | RFU                       |                                      |

<br>

<b> US915 </b>

| Data Rate | Configuration             | Indicative Physical Bit Rate [bit/s] |
| --------- | ------------------------- | ------------------------------------ |
| 0         | LoRa: SF10 / 125&nbsp;kHz | 980                                  |
| 1         | LoRa: SF9 / 125&nbsp;kHz  | 1760                                 |
| 2         | LoRa: SF8 / 125&nbsp;kHz  | 3125                                 |
| 3         | LoRa: SF7 / 125&nbsp;kHz  | 5470                                 |
| 4         | LoRa: SF8 / 500&nbsp;kHz  | 12500                                |
| 5 ~ 7     | RFU                       |                                      |
| 8         | LoRa: SF12 / 500&nbsp;kHz | 980                                  |
| 9         | LoRa: SF11 / 500&nbsp;kHz | 1760                                 |
| 10        | LoRa: SF10 / 500&nbsp;kHz | 3900                                 |
| 11        | LoRa: SF9 / 500&nbsp;kHz  | 7000                                 |
| 12        | LoRa: SF8 / 500&nbsp;kHz  | 12500                                |
| 13        | LoRa: SF7 / 500&nbsp;kHz  | 21900                                |
| 14 ~ 15   | RFU                       |                                      |

<br>

<b> AU915 </b>

| Data Rate | Configuration             | Indicative Physical Bit Rate [bit/s] |
| --------- | ------------------------- | ------------------------------------ |
| 0         | LoRa: SF12 / 125&nbsp;kHz | 250                                  |
| 1         | LoRa: SF11 / 125&nbsp;kHz | 440                                  |
| 2         | LoRa: SF10 / 125&nbsp;kHz | 980                                  |
| 3         | LoRa: SF9 / 125&nbsp;kHz  | 1760                                 |
| 4         | LoRa: SF8 / 125&nbsp;kHz  | 3125                                 |
| 5         | LoRa: SF7 / 125&nbsp;kHz  | 5470                                 |
| 6         | LoRa: SF8 / 500&nbsp;kHz  | 12500                                |
| 7         | RFU                       | RFU                                  |
| 8         | LoRa: SF12 / 500&nbsp;kHz | 980                                  |
| 9         | LoRa: SF11 / 500&nbsp;kHz | 1760                                 |
| 10        | LoRa: SF10 / 500&nbsp;kHz | 3900                                 |
| 11        | LoRa: SF9 / 500&nbsp;kHz  | 7000                                 |
| 12        | LoRa: SF8 / 500&nbsp;kHz  | 12500                                |

<br>

<b> IN865 </b>

| Data Rate | Configuration             | Indicative Physical Bit Rate [bit/s] |
| --------- | ------------------------- | ------------------------------------ |
| 0         | LoRa: SF12 / 125&nbsp;kHz | 250                                  |
| 1         | LoRa: SF11 / 125&nbsp;kHz | 440                                  |
| 2         | LoRa: SF10 / 125&nbsp;kHz | 980                                  |
| 3         | LoRa: SF9 / 125&nbsp;kHz  | 1760                                 |
| 4         | LoRa: SF8 / 125&nbsp;kHz  | 3125                                 |
| 5         | LoRa: SF7 / 125&nbsp;kHz  | 5470                                 |
| 6         | RFU                       | RFU                                  |
| 7         | FSK: 50&nbsp;kbps         | 50000                                |
| 8 ~ 15    | RFU                       | RFU                                  |


## TX Power by Region

<b>EU868</b>

By default, MaxEIRP is considered to be +16&nbsp;dBm.

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1       | MaxEIRP - 2&nbsp;dB  |
| 2       | MaxEIRP - 4&nbsp;dB  |
| 3       | MaxEIRP - 6&nbsp;dB  |
| 4       | MaxEIRP - 8&nbsp;dB  |
| 5       | MaxEIRP - 10&nbsp;dB |
| 6       | MaxEIRP - 12&nbsp;dB |
| 7       | MaxEIRP - 14&nbsp;dB |
| 8 ~ 15  | RFU                  |

<br>

<b>US915</b>

By default, MaxEIRP is considered to be +30&nbsp;dBm based on LoRa Alliance specification.
However, the module's max TX power is only up to 22&nbsp;dBm. 

| TXPower | Configuration (Conducted Power) |
| ------- | ------------------------------- |
| 0       | MaxEIRP                         |
| 1       | MaxEIRP - 2&nbsp;dB             |
| 2       | MaxEIRP - 4&nbsp;dB             |
| 3 ~ 9   | -                               |
| 10      | 10&nbsp;dBm                     |
| 11 ~ 15 | RFU                             |

<br>

<b>AU915</b>

By default, MaxEIRP is considered to be +30&nbsp;dBm based on LoRa Alliance specification.
However, the module's max TX power is only up to 22&nbsp;dBm. 

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1 ~ 10  | MaxEIRP - 2*TXPower  |
| 11 ~ 15 | RFU                  |

<br>

<b>KR920</b>

By default, MaxEIRP is considered to be +14&nbsp;dBm.

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1       | MaxEIRP - 2&nbsp;dB  |
| 2       | MaxEIRP - 4&nbsp;dB  |
| 3       | MaxEIRP - 6&nbsp;dB  |
| 4       | MaxEIRP - 8&nbsp;dB  |
| 5       | MaxEIRP - 10&nbsp;dB |
| 6       | MaxEIRP - 12&nbsp;dB |
| 7       | MaxEIRP - 14&nbsp;dB |
| 8 ~ 15  | RFU                  |

<br>

<b>AS923</b>

By default, Max EIRP is considered to be 16&nbsp;dBm.

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1       | MaxEIRP - 2&nbsp;dB  |
| 2       | MaxEIRP - 4&nbsp;dB  |
| 3       | MaxEIRP - 6&nbsp;dB  |
| 4       | MaxEIRP - 8&nbsp;dB  |
| 5       | MaxEIRP - 10&nbsp;dB |
| 6       | MaxEIRP - 12&nbsp;dB |
| 7       | MaxEIRP - 14&nbsp;dB |
| 8 ~ 15  | RFU                  |

<br>

<b>IN865</b>

By default, MaxEIRP is considered to be +30&nbsp;dBm based on LoRa Alliance specification.
However, the module's max TX power is only up to 22&nbsp;dBm. 

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1       | MaxEIRP - 2&nbsp;dB  |
| 2       | MaxEIRP - 4&nbsp;dB  |
| 3       | MaxEIRP - 6&nbsp;dB  |
| 4       | MaxEIRP - 8&nbsp;dB  |
| 5       | MaxEIRP - 10&nbsp;dB |
| 6       | MaxEIRP - 12&nbsp;dB |
| 7       | MaxEIRP - 14&nbsp;dB |
| 8       | MaxEIRP - 16&nbsp;dB |
| 9       | MaxEIRP - 18&nbsp;dB |
| 10      | MaxEIRP - 20&nbsp;dB |
| 11 ~ 15 | RFU                  |

<br>

<b>CN470</b>

By default, MaxEIRP is considered to be +19.15&nbsp;dBm.

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1       | MaxEIRP - 2&nbsp;dB  |
| 2       | MaxEIRP - 4&nbsp;dB  |
| 3       | MaxEIRP - 6&nbsp;dB  |
| 4       | MaxEIRP - 8&nbsp;dB  |
| 5       | MaxEIRP - 10&nbsp;dB |
| 6       | MaxEIRP - 12&nbsp;dB |
| 7       | MaxEIRP - 14&nbsp;dB |
| 8 ~ 15  | RFU                  |

<br>

<b>EU433</b>

By default, MAxEIRP is considered to be +12.15&nbsp;dBm.

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1       | MaxEIRP - 2&nbsp;dB  |
| 2       | MaxEIRP - 4&nbsp;dB  |
| 3       | MaxEIRP - 6&nbsp;dB  |
| 4       | MaxEIRP - 8&nbsp;dB  |
| 5       | MaxEIRP - 10&nbsp;dB |
| 6 ~ 15  | RFU                  |

## Maximum Transmission Load by Region

:::tip 📝 NOTE:
The LoRaWAN stack adds 8 bytes to the user payload. In the following list, M is the maximum payload size and N is the maximum usable payload size for the user data without the MAC header.
::::

<b>EU868</b>

| DataRate | M           | N           |
| -------- | ----------- | ----------- |
| 0        | 59          | 51          |
| 1        | 59          | 51          |
| 2        | 59          | 51          |
| 3        | 123         | 115         |
| 4        | 250         | 242         |
| 5        | 250         | 242         |
| 6        | 250         | 242         |
| 7        | 250         | 242         |
| 8 ~ 15   | Not Defined | Not Defined |

<br>

<b>US915</b>

| DataRate | M           | N           |
| -------- | ----------- | ----------- |
| 0        | 19          | 11          |
| 1        | 61          | 53          |
| 2        | 133         | 125         |
| 3        | 250         | 242         |
| 4        | 250         | 242         |
| 5 ~ 7    | Not Defined | Not Defined |
| 8        | 61          | 53          |
| 9        | 137         | 129         |
| 10       | 250         | 242         |
| 11       | 250         | 242         |
| 12       | 250         | 242         |
| 13       | 250         | 242         |
| 14 ~ 15  | Not Defined | Not Defined |

<br>

<b>AU915</b>

| DataRate | M           | N           |
| -------- | ----------- | ----------- |
| 0        | 59          | 51          |
| 1        | 59          | 51          |
| 2        | 59          | 51          |
| 3        | 123         | 115         |
| 4        | 250         | 242         |
| 5        | 250         | 242         |
| 6        | 250         | 242         |
| 7        | Not Defined | Not Defined |
| 8        | 61          | 53          |
| 9        | 137         | 129         |
| 10       | 250         | 242         |
| 11       | 250         | 242         |
| 12       | 250         | 242         |
| 13       | 250         | 242         |
| 14 ~ 15  | Not Defined | Not Defined |

<br>

<b>KR920</b>

| DataRate | M           | N           |
| -------- | ----------- | ----------- |
| 0        | 59          | 51          |
| 1        | 59          | 51          |
| 2        | 59          | 51          |
| 3        | 123         | 115         |
| 4        | 250         | 242         |
| 5        | 250         | 242         |
| 6 ~ 15   | Not Defined | Not Defined |

<b>AS923</b>


<table style="text-align: center">
<thead>
  <tr>
   <th>DataRate</th>
   <th colspan = 2>Uplink MAC Payload Size (M)</th>
   <th colspan = 2>Downlink MAC Payload Size (M)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td></td>
    <td>UplinkDwellTime = 0</td>
    <td>UplinkDwellTime = 1</td>
    <td>DownlinkDwellTime = 0</td>
    <td>DownlinkDwellTime = 1</td>
  </tr>
  <tr>
    <td>0</td>
    <td>59</td>
    <td>N/A</td>
    <td>59</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>1</td>
    <td>59</td>
    <td>N/A</td>
    <td>59</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>2</td>
    <td>59</td>
    <td>19</td>
    <td>59</td>
    <td>19</td>
  </tr>
  <tr>
    <td>3</td>
    <td>123</td>
    <td>61</td>
    <td>123</td>
    <td>61</td>
  </tr>
  <tr>
    <td>4</td>
    <td>250</td>
    <td>133</td>
    <td>250</td>
    <td>133</td>
  </tr>
  <tr>
    <td>5</td>
    <td>250</td>
    <td>250</td>
    <td>250</td>
    <td>250</td>
  </tr>
  <tr>
    <td>6</td>
    <td>250</td>
    <td>250</td>
    <td>250</td>
    <td>250</td>
  </tr>
  <tr>
    <td>7</td>
    <td>250</td>
    <td>250</td>
    <td>250</td>
    <td>250</td>
  </tr>
  <tr>
    <td>8 ~ 15</td>
      <td colspan=2>RFU</td>
      <td colspan=2>RFU</td>
  </tr>
</tbody>
</table>

<br>

<b>IN865</b>

| DataRate | M           | N           |
| -------- | ----------- | ----------- |
| 0        | 59          | 51          |
| 1        | 59          | 51          |
| 2        | 59          | 51          |
| 3        | 123         | 115         |
| 4        | 250         | 242         |
| 5        | 250         | 242         |
| 6        | 250         | 242         |
| 7        | 250         | 242         |
| 8 ~ 15   | Not Defined | Not Defined |

<br>

<b>CN470</b>

| DataRate | M           | N           |
| -------- | ----------- | ----------- |
| 0        | 59          | 51          |
| 1        | 59          | 51          |
| 2        | 59          | 51          |
| 3        | 123         | 115         |
| 4        | 250         | 242         |
| 5        | 250         | 242         |
| 6 ~ 15   | Not Defined | Not Defined |

<br>

<b>EU433</b>

| DataRate | M           | N           |
| -------- | ----------- | ----------- |
| 0        | 59          | 51          |
| 1        | 59          | 51          |
| 2        | 59          | 51          |
| 3        | 123         | 115         |
| 4        | 250         | 242         |
| 5        | 250         | 242         |
| 6        | 250         | 242         |
| 7        | 250         | 242         |
| 8 ~ 15   | Not Defined | Not Defined |