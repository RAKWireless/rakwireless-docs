---
sidebar: false
rak_img: /assets/images/knowledge-hub/user-manual/magma-box/overview/magma-box.png
rak_desc: This guide provides a step-by-step tutorial on Dockerized Magma AGW 1.8.0 Configuration.
tags:
  - User Manual
  - Magma Box
  - Docker
  - Installation Guide
  - Ubuntu
  - AGW
header:
  title: Dockerized Magma AGW 1.8.0 Installation Guide
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 11/01/2023 8:00 PM
prev: ../../Magma-Orchestrator-and-NMS/
next: ../Dockerized-Magma-AGW-Configuration-Guide/
---

# Dockerized Magma AGW 1.8.0 Installation Guide

## Content

- [Dockerized Magma AGW 1.8.0 Installation Guide](#dockerized-magma-agw-180-installation-guide)
  - [Content](#content)
  - [Ubuntu Server 20.04 LTS (64-BIT) Installation](#ubuntu-server-2004-lts-64-bit-installation)
  - [IP Address Configuration](#ip-address-configuration)
  - [Power Up the Magma Box](#power-up-the-magma-box)
  - [Dockerized Magma AGW 1.8.0. Installation](#dockerized-magma-agw-180-installation)
  - [Installation Errors and Solution](#installation-errors-and-solution)

RAKwireless shipped the MagmaBox with Ubuntu 20.04.5 LTS(64-BIT) installed for our customers. It is an unmodified originally official Ubuntu image for Raspberry Pi 4.

For those who want to replace the SD card or just want to re-install the Ubuntu OS themselves, feel free to re-install and follow the steps in the [Ubuntu Server 20.04 LTS (64-BIT) Installation](#ubuntu-server-2004-lts-64-bit-installation) and [IP Address Configuration](#ip-address-configuration) sections.

For those who want to install dockerized Magma AGW directly, execute the following steps described in [Power Up Magma Box](#power-up-the-magma-box) and [Dockerized Magma AGW 1.8.0 Installation](#dockerized-magma-agw-180-installation).

:::tip 📝 NOTE
The operations on the PC described are based on MacBook Pro.
:::

## Ubuntu Server 20.04 LTS (64-BIT) Installation

1. Take out the SD card from Magma Box.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/1.remove-sd-card.png" width="80%">
</p>


2. Plug the SD card into your PC via an adapter.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/2.plug-sd-card.png" width="80%">
</p>


3. Download and install the **Raspberry Pi Imager**.
4. Open the Imager and click the **CHOOSE OS** button.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/3.pi-imager.png" width="80%">
</p>


5. Select **Other general-purpose OS**.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/4.gen-purpose.png" width="80%">
</p>


6. Then choose the **Ubuntu** item to list the available Ubuntu OS images. Make sure you choose the Ubuntu Server 20.04.5 LTS (64-bit).

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/5.ubuntu.png" width="80%">
</p>


<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/6.ubuntu-server.png" width="80%">
</p>


7. Back to the main page of Raspberry Pi Imager, click the **CHOOSE STORAGE** button to choose the SD card just plugged in.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/7.choose-storage.png" width="80%">
</p>


<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/8.reader.png" width="80%">
</p>


8. Click **WRITE** to flush the Ubuntu OS into the SD card.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/9.write.png" width="80%">
</p>


<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/10.erase.png" width="80%">
</p>


<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/11.write.png" width="80%">
</p>


<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/12.write-success.png" width="80%">
</p>


The Ubuntu Server 20.04.5 LTS (64-bit) is now flashed to the SD card.

## IP Address Configuration

Before anything else, configure first the IP addresses before powering up the Magma Box.

1. Plug the SD card back into the Magma Box. Make sure it has an IP address configured so it can SSH or connect the 4G radio to the box.

Here shows the traditional network architecture for Magma Box developments.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/13.ip-config.png" width="80%">
</p>


2. Usually, configuring a static IP address for the Magma Box's **eth1** port is needed, and a dynamic IP address is allocated from the home router for Magma Box's **eth0** port.

Follow the steps below to setup the IP addresses:

 - Take out the SD card from the PC and re-plug it again.
 - Edit the `network-config` file under the SD card's root directory.
 - Add the eth port's configuration. Configure **eth1** static IP address to `10.0.2.1/24`.

    ```
    # vim /Volumes/system-boot/network-config
    eth1:
    dhcp4: false
    optional: true
    addresses: [10.0.2.1/24]
    ```

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/14.port-config.png" width="80%">
</p>


   - Save the changes and quit, then push the SD card out of the PC.

## Power Up the Magma Box

After the installation and configuration, connect and power up the Magma Box. This guide assumes that your PC's **eth0** port has been configured with a static IP address that's in the same subnet as Magma Box's **eth1** port. For example, `10.0.2.2/24`.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/15.power-up.png" width="80%">
</p>


1. Plug the SD card into the Magma Box.
2. Connect the Magma Box **eth0**, the native ethernet port, to the home router with the ethernet cable.
3. Plug the USB-to-Ethernet adapter into the blue-colored USB port on the Magma Box.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/16.usb-ethernet.png" width="80%">
</p>


4. Connect your PC to the USB-to-Ethernet adapter with the ethernet cable.
5. Plug the power supply into the Magma Box.
6. Now the Magma Box is powered up. The Magma Box's status can be verified via ping 10.0.2.1 from the PC.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/17.verify.png" width="80%">
</p>


## Dockerized Magma AGW 1.8.0. Installation

After powering up the Magma Box, connect it with SSH with the initial Ubuntu password to install the latest dockerized Magma AGW 1.8.0.

1. Ubuntu will ask you to change the password the first time SSH to the Magma Box.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/18.install-docker.png" width="80%">
</p>


2. Then, SSH to Magma Box again after the password is changed.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/19.ssh-magma.png" width="80%">
</p>


3. Create an empty `rootCA.pem` before the installation.

```
# sudo mkdir -p /var/opt/magma/certs
# sudo touch /var/opt/magma/certs/rootCA.pem
```

<br>

4. Download the installation bash script from Magma's GitHub repository and execute.

```bash
# wget https://github.com/magma/magma/raw/v1.8/lte/gateway/deploy
/agw_install_docker.sh
# sudo bash agw_install_docker.sh
```

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/20.script.png" width="80%">
</p>


:::tip 📝 NOTE
- If anything wrong happens in this stage, refer directly to [Installation Errors and Solution](#installation-errors-and-solution). (Optional)
- If all goes well, just wait until the installation is finished. It may take half an hour, depending on your home router's internet speed.
:::

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/21.reboot.png" width="80%">
</p>


After that, the dockerized Magma AGW 1.8.0 is now successfully installed on the Magma Box. You can verify the docker container's status using the command:

```
sudo
docker ps
```

:::tip 📝 NOTE
Normally, the `control_proxy` is restarting all the time because of an empty `rootCA.pem` that is unavailable.
:::

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/22.installation-success.png" width="80%">
</p>


## Installation Errors and Solution

Things may go wrong when executing Magma's official bash script `agw_install_docker.sh`.

**Error 1**: Waiting for cache lock: Could not get `lock/var/lib/dpkg/lock-frontend`. It is held by process `xxx`.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/23.error.png" width="80%">
</p>


- This error is caused by Ubuntu's self-update process which held the lock before the execution of the bash script `agw_install_docker.sh`.
- **Solution**: Reboot to terminate or wait for Ubuntu's self-update progress done, and then re-execute the bash script again.

**Error 2**: Failed to download key.

<p align="center">
<img src="/assets/images/knowledge-hub/user-manual/magma-box/installation-guide/24.error2.png" width="80%">
</p>

- This error may be caused by the network.
- **Solution**: Manually download and apply the key as the commands shown below, and then re-execute the bash script again.

```
# cat << EOF > /etc/apt/apt.conf.d/99insecurehttpsrepo
Acquire::https::artifactory.magmacore.org/artifactory/debian {
Verify-Peer "false";
Verify-Host "false";
};
EOF
# wget -qO - https://artifactory.magmacore.org:443/artifactory/api/gpg
/key/public | sudo apt-key add -
# sudo bash agw_install_docker.sh
```

:::tip 📝 NOTE
If you have experienced errors not listed above, feel free to contact us.
:::
