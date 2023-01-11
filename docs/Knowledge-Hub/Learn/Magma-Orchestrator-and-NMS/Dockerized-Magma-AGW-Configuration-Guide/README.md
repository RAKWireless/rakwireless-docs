---
sidebar: false
rak_img: /assets/images/knowledge-hub/user-manual/magma-box/overview/magma-box.png
rak_desc: This guide provides a step-by-step tutorial on Dockerized Magma AGW 1.8.0 Configuration.
tags:
  - User Manual
  - Magma Box
  - Configuration Guide
  - Orc8r
  - Docker
  - 5G Standalone
  - Ubuntu
  - AGW
header:
  title: Dockerized Magma AGW Configuration Guide
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 11/01/2023 8:00 PM
prev: ../Dockerized-Magma-AGW-Installation-Guide/
next: false
---

# Dockerized Magma AGW 1.8.0 Configuration Guide

## Content

- [Dockerized Magma AGW 1.8.0 Configuration Guide](#dockerized-magma-agw-180-configuration-guide)
  - [Content](#content)
  - [Orc8r Configuration](#orc8r-configuration)
  - [Radio Spectrum Provision](#radio-spectrum-provision)
  - [Radio Connection to AGW](#radio-connection-to-agw)
  - [Edge Computing Support](#edge-computing-support)
  - [Integrated 5G Standalone](#integrated-5g-standalone)
  - [Subscriber Configuration](#subscriber-configuration)
  - [Adding New Subscriber](#adding-new-subscriber)
  - [Showing Subscriber Details](#showing-subscriber-details)
  - [Updating Subscriber](#updating-subscriber)
  - [Deleting Subscriber](#deleting-subscriber)

## Orc8r Configuration

AGW provides network services and policy enforcement. In an LTE network, the AGW implements an evolved packet core (EPC), and a combination of an AAA and a PGW. It works with existing, unmodified commercial radio hardware.

After the installation of Magma AGW on Magma Box, customers can run their local LTE network directly, or connect it to the Magma Orc8r, depending on the usage scenario.

Orc8r is a cloud service that provides a simple and consistent way to configure and monitor the wireless network securely. The Orc8r can be hosted on a public/private cloud or local server/PC. The metrics acquired through the platform allows you to see the analytics and traffic flows of the wireless users through the Magma web UI.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/configuration-guide/1.magma-box-running-with-agw.png" width="100%">
</p>

When the user decides to connect the AGW to an installed Orc8r, the AGW running on Magma Box needs some configuration:

Upload the Orc8r's `rootCA.pem` to Magma Box's `/var/opt/magma/certs/`. An empty `rootCA.pem` was initially created so when installing the AGW, delete it first.

Update the Orc8r's address in `/etc/magma/control_proxy.yml`, includes `cloud_address`, `cloud_port`, `bootstrap_address`, `bootstrap_port`, `fluentd_address` and `fluentd_port`.

For example:

```cpp
# Cloud address for reaching out to the cloud.
cloud_address: controller.magma.rakwireless.com
cloud_port: 7443

bootstrap_address: bootstrapper-controller.magma.rakwireless.com
bootstrap_port: 7444

fluentd_address: fluentd.magma.rakwireless.com
fluentd_port: 24224
```

Then, restart AGW services or reboot Magma Box to make it work.

```cpp
# cd /var/opt/magma/docker && sudo docker-compose restart
```

or

```cpp
# sudo reboot
```

The Magma AGW is now configured for connecting to Orc8r. But, to accept the AGW’s connecting request, some work has to be done to the Orc8r. Refer to Magma’s NMs document [Adding a New Gateway](https://docs.magmacore.org/docs/nms/equipment#adding-a-new-gateway)

## Radio Spectrum Provision

The customers should comply with the local laws and regulations for radio spectrum setting of their 4G or 5G radio.

For USA customers, Magma AGW supports CBRS SAS procedures to help radios set up spectrum automatically. Refer to the following Magma documents for details: [Enodebd CBRS Support](https://magma.github.io/magma/docs/proposals/p019_enodeb_cbrs_support#proposal-enodebd-cbrs-support), [Domain Proxy Debug](https://magma.github.io/magma/docs/next/dp/debug_logs#debugging), and [Google SAS Quick start guide](https://support.google.com/sas/answer/9539169?hl=en&ref_topic=9455755), etc.

## Radio Connection to AGW

The Magma AGW running on Magma Box’s default PLMN is `00101`, and its binding SCTP IP address is exactly Magma Box `eth1` port's address, `1 0.0.2.1/24` if the customers install Magma AGW according to [IP Address Configuration](/Knowledge-Hub/Learn/Magma-Orchestrator-and-NMS/Dockerized-Magma-AGW-Installation-Guide/#ip-address-configuration).


A 4G eNodeB or 5G gNodeB, at least, needs to set its PLMN and MME/AMF IP to connect to the EPC/5GC. This can be done by configuring the eNodeB/gNodeB via its local Web Manager or GUI. Take Baicells Neutrino 430 as an example, Chapter **3.5.6 Configure Quick Settings** in [Baicells Neutrino430 Installation Guide](https://img.baicells.com//Upload/20220416/FILE/802142f3-d816-4f94-9985-2b513ef8569a.pdf) describes how to configure the PLMN and MME IP.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/configuration-guide/2.quick-setting.png" width="80%">
</p>

## Edge Computing Support

RAKwireless' Magma Box was developed based on a Raspberry Pi 4, running with a Quad core Cortex-A72 (ARM v8), and also 4&nbsp;GB LPDDR4 for Black, 8&nbsp;GB LPDDR4 for Gold. This means that the Magma Box have enough computing resource to run the customers' edge computing application along with Magma AGW services, such as a simple FTP server. In this case, customers can simply run an FTP download test with a UE, a radio, and Magma Box. No need to run an FTP server on a single server.

:::tip 📝 NOTE:
Magma Box allows customers to run their application on it, still the application can also run on somewhere else as you wish.
:::

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/configuration-guide/3.edge-computing.png" width="100%">
</p>

There are two key points of running an Edge Computing application:

1. Deploy the application to the Magma Box via docker or binary.
For example, running a simple FTP server docker container on Magma Box:

```cpp
# sudo docker run -d -p 60021:21 -p 60020:20 -p 21100-21110:21100-21110
\
-v /home/ubuntu:/home/vsftpd/ftp \
-e FTP_USER=ftp \
-e FTP_PASS=123456 \
-e PASV_ADDRESS=0.0.0.0 \
-e PASV_MIN_PORT=21100 \
-e PASV_MAX_PORT=21110 \
--name vsftpd \
--restart=always dotkevinwong/vsftpd-arm
```

2. Enable the local network access on Magma Box for the UEs. The feature is off by default. Change pipelined's `block_agw_local_ips` item from `true` to `false` to enable this feature.

```cpp
# sudo vim /etc/magma/pipelined.yml
```

```cpp
...
# Pipeline application level configs
access_control:
# Blocks access to all AGW local IPs from UEs.
block_agw_local_ips: false
...
```

Now the UE can `ping` to the Magma Box's internal IP address, and download or upload files to the FTP server running on Magma Box.

## Integrated 5G Standalone

With Magma's v1.8.0 released, the 5G Standalone (SA) feature have been good enough for your 5G network developments, but this feature is off by default. In reference to Magma's document [Integrated 5G SA](https://docs.magmacore.org/docs/lte/integrated_5g_sa#configuration-5g-sa-featurehttps://magma.github.io/magma/docs/lte/integrated_5g_sa#configuration-5g-sa-feature), the 5G feature can be disabled or enabled using swagger API after AGW connected to Orc8r, but this can also be done without Orc8r when the AGW deployed is a standalone.

The root cause is that the changes via swagger API will generate a new `gateway.mconfig` file under Magma Box's directory  `/var/opt /magma/`, but the file is not mandatory to running an AGW. The AGW will take configuration files under `/etc/magma/` as first priority.
<br>

**Enabling 5G SA Feature Manually Without Orc8r**

1. SSH login to Magma Box.
<br> For example:

```cpp
# ssh ubuntu@10.0.2.1
```

2. Add or modify `enable5g_features` item to `true` in `mme.yml`, `pipelined.yml`, `sessiond.yml`, `subscriberdb.yml` under `/etc/magma/` directory.
<br> For example:

```cpp
# sudo bash -c 'echo "enable5g_features: true" >> /etc/magma/mme.yml'
# sudo bash -c 'echo "enable5g_features: true" >> /etc/magma/pipelined.
yml'
# sudo bash -c 'echo "enable5g_features: true" >> /etc/magma/sessiond.
yml'
# sudo bash -c 'echo "enable5g_features: true" >> /etc/magma
/subscriberdb.yml'
```

3. Restart AGW services or reboot Magma Box to make it work.

```cpp
# cd /var/opt/magma/docker && sudo docker-compose restart
```

or

```cpp
# sudo reboot
```

## Subscriber Configuration

It is easy to create, update, or delete subscribers via NMs. After connecting the AGW to Orc8r, refer to Magma's document [Subscriber Configuration](https://magma.github.io/magma/docs/nms/subscriber#subscriber-configuration). This can also be done without Orc8r when the AGW deployed is a standalone.

Each AGW running on Magma Box have its own database, actually, it's sqlite3, to store the subcriber data, and Magma offers a python script `subscriber_cli.py` to manage them. Here are the commands it offers:

```cpp
# sudo docker exec subscriberdb /usr/local/bin/subscriber_cli.py --help
```
<br>

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/configuration-guide/4.subscriber-configuration.png" width="80%">

## Adding New Subscriber

This shows how to add a new subscriber to the Magma Box:

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/configuration-guide/5.adding-new-subscriber.png" width="80%">
</p>

For example:
<br> Adding a New Subscriber with IMSI 001010000000022:
```cpp
# sudo docker exec subscriberdb /usr/local/bin/subscriber_cli.py add --
lte-auth-key 46006050000000191946006050000000 --lte-auth-opc
75C161CAAE5C323E551BF0341F03A2CA IMSI001010000000022
```

## Showing Subscriber Details

After adding a new subscriber, the subscription details can be shown via the command below:

```cpp
# sudo docker exec subscriberdb /usr/local/bin/subscriber_cli.py get
IMSI001010000000022
```
<br>

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/configuration-guide/6.show-subscriber.png" width="80%">
</p>

## Updating Subscriber

As seen above, after adding a new subscriber, there's no APN configured. The subscriber's data has to be updated to make it complete.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/configuration-guide/7.updating-subscriber.png" width="80%">
</p>

Here takes APN `internet` and `ims` as an example:

```cpp
# sudo docker exec subscriberdb /usr/local/bin/subscriber_cli.py update
--apn-config ims,5,15,1,1,2000000000,2000000000,0,,,, --apn-config
internet,9,15,1,1,2000000000,2000000000,0,,,, IMSI001010000000022
```
<br>

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/configuration-guide/8.update-subscriber-data.png" width="80%">
</p>

## Deleting Subscriber

A subscriber can be deleted via this python script:

```cpp
# sudo docker exec subscriberdb /usr/local/bin/subscriber_cli.py delete
$SID
```
<br>

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/configuration-guide/9.deleting-subscriber.png" width="80%">
</p>
