---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: This document walks through the details on the steps on how to install Raspberry Pi, InfluxDB, Grafana, and Telegraf in Ubuntu. 
tags:
  - Ubuntu
  - Tutorial
header:
  title: How to Install Modules in Ubuntu
  caption:  by <b>Vladislav Yordanov</b>
  img: /assets/images/knowledge-hub/banners/general_banner.jpg
posted: 12/05/2021 4:15 PM
author:
  name: Vladislav Yordanov
  about: CCO of RAKwireless, Co-founder and CEO of IoT4Green. I believe technology can be the solution to most issues human kind is facing.
  img: /assets/images/knowledge-hub/authors/vladislav-yordanov.jpg
---

# How to Install Modules in Ubuntu

## Installing Ubuntu on a Raspberry Pi

1. Start by downloading the latest Ubuntu [image](https://ubuntu.com/download/raspberry-pi).

2. Using a flashing tool like [Balena Etcher](https://www.balena.io/etcher/) for example, flash your SD card with the Ubuntu image.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/how-to-install-modules-in-ubuntu/rpi-ubuntu/flashing-ubuntu-image.png"
  width="100%"
  caption="Flashing the Ubuntu Image"
/>

3. You are going to do a headless setup as this is the quickest and easiest way with a Raspberry Pi. After the flashing has been completed, unplug and plug the SD card again as it has been automatically ejected. A "system-boot" partition should be visible, which should contain a file named "network-config". Open it up for editing and append the following lines to the end of it, where you replace "SSID" with your network's SSID and "password" with that network's password:

```
wifis:
  wlan0:
    dhcp4: true
    optional: true
    access-points:
      "SSID":
        password: "password"
```

4. Save the file and eject the SD card. Insert it in the Raspberry Pi and power it. After a brief wait, it should connect to your Wi-Fi network and obtain an IP address via DHCP.

Now the Pi can be accessed via SSH using the assigned IP Address with a tool like [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) for example. The default user name and password are '**ubuntu**'.

You will be asked to change your password on the first boot, which will end with your session closing, so you need to open a new one. Now your Ubuntu is installed and ready to use.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/how-to-install-modules-in-ubuntu/rpi-ubuntu/ubuntu-screen.png"
  width="100%"
  caption="Ubuntu Welcome Screen"
/>

## Installing InfluxDB

Debian and Ubuntu users can install the latest stable version of InfluxDB using the `apt-get` package manager. 

1. First, you need root access to add the influxDB repository so start with the command:

```
sudo su
```

2. Next, add the InfluxData repository with the following commands:

```sh
wget -qO- https://repos.influxdata.com/influxdb.key | gpg --dearmor > /etc/apt/trusted.gpg.d/influxdb.gpg
export DISTRIB_ID=$(lsb_release -si); export DISTRIB_CODENAME=$(lsb_release -sc)
echo "deb [signed-by=/etc/apt/trusted.gpg.d/influxdb.gpg] https://repos.influxdata.com/${DISTRIB_ID,,} ${DISTRIB_CODENAME} stable" > /etc/apt/sources.list.d/influxdb.list
```

3. Exit the root user.

```
exit
```

4. Install and start the InfluxDB service.

```bash
sudo apt-get update && sudo apt-get install influxdb
sudo service influxdb start
```

5. If you want InfluxDB to automatically start at boot, use the command listed. You will be asked for authentication  via password.

```
systemctl enable --now influxdb
```

6. Finally, check the influxDB status.

```
sudo service influxdb status
```

The InfluxDB is now running and will start at boot, and it should show active, as shown in Figure 3. 

<rk-img
  src="/assets/images/knowledge-hub/tutorials/how-to-install-modules-in-ubuntu/ubuntu-influxdb/service-status.png"
  width="100%"
  caption="InfluxDB Service Status"
/>

## Installing Grafana

This guide will show how to install Grafana on a Debian/Ubuntu system via the official APT repository. The method is convenient as it allows one to automatically update Grafana every time the `apt-get update` command is run.

1. Install the enterprise edition. Start by executing the set of commands below:

```bash
sudo apt-get install -y apt-transport-https
sudo apt-get install -y software-properties-common wget
wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -
```

2. Next, add the stable release repository:

```bash
echo "deb https://packages.grafana.com/enterprise/deb stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list
```

<rk-img
  src="/assets/images/knowledge-hub/tutorials/how-to-install-modules-in-ubuntu/ubuntu-grafana/prerequisites.png"
  width="100%"
  caption="Installation Prerequisites"
/>


3. Update and install from the repository:

```bash
sudo apt-get update
sudo apt-get install grafana-enterprise
```

Once the procedure is complete, you should have output similar to the one in Figure 5.


<rk-img
  src="/assets/images/knowledge-hub/tutorials/how-to-install-modules-in-ubuntu/ubuntu-grafana/log.png"
  width="100%"
  caption="Installation Log"
/>

4. You need to start the `grafana-server` process as the `grafana` user, which is created during the package installation. Execute the following command:

```bash
sudo systemctl daemon-reload
sudo systemctl start grafana-server
sudo systemctl status grafana-server
```

If the service starts normally, the output should be as in Figure 6.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/how-to-install-modules-in-ubuntu/ubuntu-grafana/service-running.png"
  width="100%"
  caption="Grafana Service Running"
/>

5. Now, configure the Grafana server to start at boot.

```bash
sudo systemctl enable grafana-server.service
```
<rk-img
  src="/assets/images/knowledge-hub/tutorials/how-to-install-modules-in-ubuntu/ubuntu-grafana/server-at-boot.png"
  width="100%"
  caption="Grafana Server at Boot"
/>

## Installing Telegraf

1. Add the InfluxData repository with the following commands.

```bash
wget -qO- https://repos.influxdata.com/influxdb.key | sudo apt-key add -
source /etc/lsb-release
echo "deb https://repos.influxdata.com/${DISTRIB_ID,,} ${DISTRIB_CODENAME} stable" | sudo tee /etc/apt/sources.list.d/influxdb.list
```

2. Install and start the Telegraf service.

```bash
sudo apt-get update && sudo apt-get install telegraf
sudo systemctl start telegraf
```

3. Check if the service is active using the command below. 

```bash
sudo service telegraf status
```
 If all went well, you will see what is shown in Figure 8:


<rk-img
  src="/assets/images/knowledge-hub/tutorials/how-to-install-modules-in-ubuntu/ubuntu-telegraf/status.png"
  width="100%"
  caption="Telegraf service status running"
/>

<rk-author />