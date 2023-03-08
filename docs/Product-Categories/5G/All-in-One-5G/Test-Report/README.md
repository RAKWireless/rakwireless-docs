---
prev: ../Datasheet/
next: false
tags:
  - All-in-One 5G
  - 5G
  - Test Report
rak_desc: Displays the All-in-One 5G test requirements and results in different areas and work scenarios. This ensures that your All-in-One 5G device can operate and perform efficiently in various conditions.
rak_img: /assets/images/5g/all-in-one-5g/all-in-one-5g.png

---

# All-in-One 5G Test Report

## Overview

This test report applies to the All-in-One 5G and is mainly a test for LTE-related functions. The test items covered in this report mainly include basic function tests, performance tests, coverage tests, and stability tests.

### Test Equipment

| **Name**   | **Count** | **Description**    | **Comment**         |
| ---------- | --------- | ------------------ | ------------------- |
| All-in-One | 1         | 4G Radio, M320     | Pure Radio          |
| AGW        | 1         | LTE Core           |                     |
| NMS        | 1         | Network Management |                     |
| FTP Server | 1         | FTP Server         | IP:10.0.12.48       |
| UE         | 2         | Samsung S21        | IP:192.168.128.0/24 |
| CPE        | 1         | Baicells           | IP:192.168.128.0/24 |

### Network Details

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/1.png" width="60%" class="center">

### Radio Configuration

- **Band:** 48
- **Bandwidth:** 20&nbsp;MHz
- **EARFCN:** 55340
- **Subframe Assignment:** 2 (DL:UL = 3:1)
- **Special Subframe Patterns:** 7

### Test Definitions

The following are key performance parameters for LTE field tests that must be considered for the task:

- **RSRP:** The average power received from a single reference signal, with typical values ranging from -44&nbsp;dBm (good) to -140&nbsp;dBm (bad).
- **RSRQ:** A measure of the quality of the received signal, with typical values ranging from -19.5&nbsp;dB (poor) to -3&nbsp;dB (good).
- **SINR:** Signal-to-Interference-to-Noise Ratio, representing the ratio of signal power to noise power.

Table below shows the values that are considered good and bad for the LTE signal strength:

<b> RF Conditions </b>

| Area | Description | RSRP (dBm)  | RSRQ (dB)  | SINR (dB) |
| ---- | ----------- | ----------- | ---------- | --------- |
| A    | Excellent   | >= -80      | >= -10     | >= 20     |
| B    | Good        | -80 to -90  | -10 to -15 | 13 to 20  |
| C    | Mid Cell    | -90 to -100 | -15 to -20 | 0 to 13   |
| D    | Cell Edge   | <= -100     | < -20      | <= 0      |

## Test Summary Report

The tables below show the test cases and results of the Function and Performance tests.

### Function Tests

| Test Case                              | Test Result |
| -------------------------------------- | ----------- |
| TC001_Function_UE_Attach               | Pass        |
| TC002_Function_UE_Detach               | Pass        |
| TC003_Function_UE_Service_Request      | Pass        |
| TC004_Function_Paging                  | Pass        |
| TC005_Function_Periodic_TAU            | Pass        |
| TC006_Function_UE_FTP_Download         | Pass        |
| TC007_Function_UE_FTP_Upload           | Pass        |
| TC008_Function_UE_Voip_Service         | Pass        |
| TC009_Function_UE_Stream_Media_Service | Pass        |

### Performance Tests

| Test Case                                | Test Result                                                  |
| ---------------------------------------- | ------------------------------------------------------------ |
| TC001_Performance_Uplink_TCP_Data        | 13&nbsp;Mbps                                                 |
| TC002_Performance_Uplink_UDP_Data        | 13&nbsp;Mbps <br> Average packet loss rate: 0.01%            |
| TC003_Performance_Downlink_TCP_Data      | 102&nbsp;Mbps                                                |
| TC004_Performance_Downlink_UDP_Data      | 100&nbsp;Mbps <br> Average packet loss rate: 0.01%           |
| TC005_Performance_Ping_Average_Latency   | Minimum latency: 20&nbsp;ms <br> Average latency: 31&nbsp;ms |
| TC006_Performance_Attach Average_Latency | Average latency: 800&nbsp;ms                                 |
| TC007_Performance_Max_Online_Users       | 32&nbsp;UE                                                   |

### CQT Tests

Several locations were selected to satisfy the conditions of the LTE field test parameters. For the delay and throughput-related tests, the test results are detailed in the [CQT Tests](#cqt-tests-2).

### Field Tests

The test terminal is used to conduct a walking test indoors and to record the indicators such as RSRP, RSRQ, SNR, and FTP download rate in real-time. Similar to DT testing, the test results are detailed in the [Field Tests](#field-tests-2).

### Stability Tests

Thirty-two (32) terminals are connected to the network and carry out FTP download tests continuously. The test results are detailed in the [Stability Test](#stability-test).

## Function Tests
### TC001 Function UE Attach

#### Test Results

UE is attached to the network successfully, and the UE information is seen from NMS.

   - Result: **Passed**

#### Test Captures

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/2.png" width="70%" class="center">
<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/3.png" width="60%" class="center">

### TC002 Function UE Detach

#### Test Results

UE is detached successfully from the network.<br>
   - Result: **Passed**

#### Test Captures

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/4.png" width="70%" class="center">

### TC003 Function UE Service Request

#### Test Results

UE enters the idle state from the active state. When the UE has a data service request, the service request process is successfully initiated.

   - Result: **Passed**

#### Test Captures

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/5.png" width="70%" class="center">

### TC004 Function Paging

#### Test Results

UE enters the idle state from the active state and the core successfully triggers the paging process when a downlink data request arrives. UE sends service request messages successfully.

   - Result: **Passed**

#### Test Captures

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/6.png" width="70%" class="center">

### TC005 Function Periodic TAU

#### Test Results
When the UE accessed the LTE network, UE triggers TAU procedure periodically according to the timer obtained from the core network.

   - Result: **Passed**

#### Test Captures

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/7.png" width="70%" class="center">

### TC006 Function UE FTP Download

#### Test Results

Download files from FTP server by FTP App, and the download process is normal.

   - Result: **Passed**

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/8.png" width="30%" class="center">

#### Test Captures

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/9.png" width="100%" class="center">

### TC007 Function UE FTP Upload

#### Test Results

Upload files to FTP server by FTP App, the upload process is normal.

   - Result: **Passed**

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/10.png" width="30%" class="center">

#### Test Captures

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/11.png" width="100%" class="center">

### TC008 Function UE Voip Service

#### Test Results

To test the VoIP, WeChat App was launched. The video call went smoothly.
   - Result: **Passed**

#### Test Captures

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/12.png" width="40%" class="center">

### TC009 Function UE Stream Media Service

#### Test Results

For media streaming, the YouTube App was launched. Watching the videos went smoothly.
   - Result: **Passed**

#### Test Captures

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/13.png" width="40%" class="center">

## Performance Tests

All performance test results are tested in places with very excellent signal strength and high SNR (Area A).

### TC001 Performance Uplink TCP Data

#### Test Results
UE sends uplink TCP data packets to the FTP server. The peak rate is 13&nbsp;Mbps.

#### Test Captures

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/14.png" width="100%" class="center">

### TC002 Performance Uplink UDP Data

#### Test Results
UE sends uplink UDP data packets to the FTP server, the peak rate is about 13&nbsp;Mbps, and the average packet loss rate is about 0.01%.

#### Test Captures

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/15.png" width="100%" class="center">

### TC003 Performance Downlink TCP Data

#### Test Results
FTP server sends downlink TCP data packages to UE. The peak rate is 102&nbsp;Mbps.

#### Test Captures

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/16.png" width="100%" class="center">

### TC004 Performance Downlink UDP Data

#### Test Results

FTP server sends downlink UDP data packages to UE. The peak rate is about 100&nbsp;Mbps, and the packet loss rate is about 0.01%.

#### Test Captures

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/17.png" width="100%" class="center">

### TC005 Performance Ping Average Latency

#### Test Results

The minimum latency is about 17&nbsp;ms, and the average latency is about 31&nbsp;ms.

#### Test Captures

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/18.png" width="60%" class="center">

### TC006 Performance Attach Average Latency

#### Statistical Method

Interval between UE sending ATTACH REQUEST message and sending ATTACH COMPLETE message.

#### Test Results

The average latency of the Attach process is about 800&nbsp;ms.

#### Test Captures

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/19.png" width="100%" class="center">

### TC007 Performance Max Online Users

This test case is designed to test the maximum number of online users for a single base station.

#### Test Results

   - Result: **32&nbsp;UE**

#### Test Captures

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/20.png" width="100%" class="center">

## CQT Tests
To test the LTE field test parameters, the laboratory and outside area adjacent to the laboratory were selected to be the test areas. The location of the test areas is shown in the floor plan below.

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/21.png" width="100%" class="center">

### CQT Test at Area A

The signal and SINR of Area A are both excellent. The signal strength and the SINR can be seen by testing the APP of UE.

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/22.png" width="40%" class="center">

#### TC001 Coverage Ftp Upload Area A

- Test result: 9&nbsp;Mbps
- Test capture:

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/23.png" width="40%" class="center">

#### TC002 Coverage Ftp Download Area A
- Test result: 88&nbsp;Mbps
- Test capture:

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/24.png" width="40%" class="center">

#### TC003 Coverage Ping Area A

- Test result:
  - Minimum latency: ∼ 20&nbsp;ms
  - Average latency: ∼ 32&nbsp;ms
- Test capture:

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/25.png" width="60%" class="center">

### CQT Test at Area B

The signal and SINR of Area B are good. The signal strength and the SINR can be seen by testing the APP of UE.

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/26.png" width="40%" class="center">

#### TC001 Coverage Ftp Upload Area B

- Test result: 6.5&nbsp;Mbps
- Test capture:

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/27.png" width="40%" class="center">

#### TC002 Coverage Ftp Download Area B

- Test result: 45&nbsp;Mbps
- Test capture:

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/28.png" width="40%" class="center">

#### TC003 Coverage Ping Area B

- Test result:
  - Minimum latency: ∼ 24&nbsp;ms
  - Average latency: ∼ 33&nbsp;ms
- Test capture:

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/29.png" width="60%" class="center">

### CQT Test at Area C

The signal and SINR of area C are moderate. The signal strength and the SINR can be seen by testing the APP of UE.
<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/30.png" width="40%" class="center">

#### TC001 Coverage Ftp Upload Area C

- Test result: 2&nbsp;Mbps
- Test capture:

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/31.png" width="40%" class="center">

#### TC002 Coverage Ftp Download Area C

- Test results: 25&nbsp;Mbps
- Test capture:

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/32.png" width="40%" class="center">

#### TC003 Coverage Ping Area C

- Test result:
  - Minimum latency: ∼ 18&nbsp;ms
  - Average latency: ∼ 54&nbsp;ms
- Test capture:

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/33.png" width="60%" class="center">

### CQT Test at Area D
Signal and SINR of area D are poor. The signal strength and the SINR can be seen by testing the APP of UE.

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/34.png" width="40%" class="center">

#### TC001 Coverage Ftp Upload Area D

- Test result: 320&nbsp;kbps
- Test capture:

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/35.png" width="40%" class="center">

#### TC002 Coverage Ftp Download Area D

- Test result: 2.5&nbsp;Mbps
- Test capture:

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/36.png" width="40%" class="center">

## Field Tests

We conducted coverage testing using the All-in-One 5G equipment in the laboratory, which provided complete coverage across all areas. We measured the RSRP, RSRQ, and SINR values, along with the FTP download speed. The test results are presented below.

### RSRP
<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/37.png" width="45%" class="center">

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/38.png" width="80%" class="center">

### RSRQ
<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/39.png" width="45%" class="center">

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/40.png" width="80%" class="center">

### SINR
<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/41.png" width="45%" class="center">

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/42.png" width="80%" class="center">

### FTP Download

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/43.png" width="45%" class="center">

<p align="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/44.png" width="80%" class="center">

## Stability Test

### Test Description

With 32 users downloading tests simultaneously, we conducted continuous testing for over 7 days to ensure normal operation. Below are the test results.

### Test Captures

<center>
<img src="/assets/images/5g/all-in-one-5g/test-report/45.png" width="85%" class="center">
<img src="/assets/images/5g/all-in-one-5g/test-report/46.png" width="50%" class="center">
</center>

