---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK7394. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/wisgate/rak7394/rak7394.png
prev: ../Overview/
next: ../Supported-LoRa-Network-Servers/
tags:
  - RAK7394
  - RAK7394P
  - RAK7394C
  - wisgate
  - quickstart
---

# RAK7394 WisGate Developer CM4 Quick Start Guide

## Prerequisites

### What Do You Need?

- RAK7394/RAK7394C/RAK7394P WisGate Developer CM4 gateway
- 5&nbsp;V at least 2.5&nbsp;A Micro USB power supply
- A Windows/Mac OS/Linux Computer
- Latest Firmware

### What Is Included in the Package?

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/1.rak7394p.png"
  width="90%"
  caption="RAK7394P package inclusion"
/>

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/2.rak7394c.png"
  width="90%"
  caption="RAK7394C package inclusion"
/>

## Product Configuration

### Powering the Gateway

:::warning ⚠️ WARNING
Before powering the device, connect the LoRa, LTE (only in the Cellular variant), and GPS antennas. Not doing so, might damage the boards. After the antennas are attached, you can safely power the gateway on.
:::

Power the gateway using the provided power adapter by inserting it into the USB-C Power Supply slot. If you are unsure which one of the two USB-C slots is for powering the gateway and which one is for booting, consult the [Interfaces](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7394/Datasheet/#hardware) section of the gateway's datasheet

:::tip 📝 NOTE:
RAK7394P WisGate Developer CM4 gateway supports Power-over-Ethernet. You can supply yourself with a PoE injector and power up the gateway via an Ethernet cable using a PoE injector.
:::

### Accessing the Gateway

In this section, several ways of accessing the gateway are provided to have different alternatives for you to choose from, depending on the availability of the requirements needed.

#### Wi-Fi AP Mode

By default, when you power on RAK7394 and no other connection is established with the device (eg. Ethernet connection) the gateway will work in Wi-Fi AP mode, which means you can find an SSID named RAK_XXXX on your PC Wi-Fi Network List.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/3.access-point.png"
  width="70%"
  caption="RAKwireless access point"
/>

:::tip 📝 NOTE:
**XXXX** is the last 2 bytes of your RAK7394’s Wi-Fi MAC address. Connect to this Wi-Fi SSID using the password provided below. Take note of the default IP address of the gateway provided below as this will be needed in connecting via SSH.

- **Wi-Fi Password**: rakwireless
- **Default IP Address**: 192.168.230.1
:::

#### Ethernet Port

Power up the RAK7394 and connect it to your router via an Ethernet cable. By default, the OS operates in DHCP client mode. Then, look up the IP address your gateway gets assigned from the router. It will be listed as **rakpios**. Use your favorite SSH tool to log in and get started.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/4.network.png"
  width="100%"
  caption="Gateway-assigned IP address"
/>

### Log into the Gateway

#### Windows OS

1. SSH (Secure Shell) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there namely [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [BitVise SSH Client](https://www.bitvise.com/ssh-client-download), [MobaXterm](https://mobaxterm.mobatek.net/), and many more. Feel free to choose one that fits your needs. But for this guide, you will be using Putty.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/7.putty.png"
  width="45%"
  caption="Putty Software for SSH in Windows"
/>

2. The default RAKPiOS user name is **rak**, and the password is **changeme**. At first login, you will need to change the default password for security. So, if you log in via SSH for the first time, you need to set a new password by entering the default one and a new one after.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/8.command_win.png"
  width="100%"
  caption="First login password change"
/>

3. When you change the default password (required), the terminal and the SSH session will be closed. Reopen it using the new password for login.

#### Mac OS

1. Open the Terminal of Mac OS. Launch the Terminal application found in the **/Applications/Utilities/** directory. You can also launch it from Spotlight by hitting **Command + Spacebar** and typing **Terminal**.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/9.mac.png"
  width="60%"
  caption="Mac OS terminal search"
/>

2. After opening the terminal of macOS, enter **root mode** by typing the following command:

```
sudo -i
```
3. Then, you need to run the following command:
```
ssh user@IP-Address
```
4. You will be asked to provide a password for login.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/8.command_mac.png"
  width="100%"
  caption="Login prompt"
/>

#### Linux OS

If the OS of your PC is Linux, you should do the same as the macOS, except for the root mode (step 2).

### Accessing the Internet
#### Connect Through Wi-Fi

1. To connect the RAK7394 to a Wi-Fi network, execute the following command:
```
sudo raspi-config
```
<rk-img
src="/assets/images/wisgate/rak7394/quickstart/10_config.png"
  width="100%"
  caption="Entering config mode"
/>

2. When you issue the command, you will be prompted to enter the sudo password. Do so.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/11_password.png"
  width="100%"
  caption="Entering the password"
/>

3. The Raspberry Pi configuration tool will open. Select **System options**.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/12_config_tool.png"
  width="100%"
  caption="Raspberry Pi configuration Tool"
/>

4. Select **Wireless LAN**.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/13_wireless.png"
  width="100%"
  caption="Wireless LAN"
/>

5. You will be asked to select the country in which the Pi is to be used. Select the corresponding country.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/14_wireless_country.png"
  width="100%"
  caption="Selecting country of operation"
/>

6. Confirm the selection.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/15_wireless_confirmation.png"
  width="100%"
  caption="Selection confirmation"
/>

7. You will be prompted to provide the SSID of the wireless network you want to connect to. After entering it, click **OK**.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/16_wireless_ssid.png"
  width="100%"
  caption="Entering the SSID"
/>

8. Next, you will be asked for the passphrase. If your Wi-Fi doesn’t have one leave this box empty. Once you have set all of the above, the configuration tool will return you to the main menu, select **Finish** to close this window.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/17_wireless_finish.png"
  width="100%"
  caption="Raspberry Pi configuration tool"
/>

9. Your RAK7394 should be connected to the Wi-Fi by now. To check if the connection is established use the **ifconfig** command. The console should indicate an established connection.

```
ifconfig
```

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/18_wireless_connected.png"
  width="100%"
  caption="RAK7394 connected to Wi-Fi"
/>

#### Connect Through Ethernet

If you are accessing the gateway through the RAKR314 Carrier Board Ethernet Port, you are automatically connected to the internet via the Ethernet connection.

### Reboot

Lastly, reboot the gateway using the command shown below and put it in the command line.
```
sudo reboot
```
## Optional Configuration
### Reflashing Procedure

To reflash the RAK7394 you would need to disassemble the enclosure to get to the RAK314 inside.

When you have access to the RAK314, you need to follow this [guide.](https://docs.rakwireless.com/Product-Categories/WisGate/RAKR314/Flashing-the-OS/)

### Changing the Password

1. To change the password you will have to use the following command to open the configuration tool:
```
sudo raspi-config
```

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/19.config_tool_pwd.png"
  width="100%"
  caption="Opening the configuration tool"
/>

2. From the menu, select **System Options**.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/20.config_tool.png"
  width="100%"
  caption="Configuration tool"
/>

3. Select **Password**.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/21.system_options.png"
  width="100%"
  caption="System options"
/>

4. You will see a message informing you that you will enter a new password.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/22.password.png"
  width="100%"
  caption="Password"
/>

5. After clicking **OK**, you will see a line that will ask you to enter a new password and then confirm it one more time.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/23.password_confirm.png"
  width="100%"
  caption="Entering and confirming the new password"
/>


6. After confirming the password, the configuration tool will indicate that the password is changed successfully.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/24.password_changed.png"
  width="100%"
  caption="Password changed"
/>

### Switching Network Interfaces

1. To manage your network interfaces, you need to execute the following command:

```
rakpios-cli
```
<rk-img
src="/assets/images/wisgate/rak7394/quickstart/25.network_switch.png"
  width="100%"
  caption="Executing the command"
/>

2. You will see a menu with the available configuration options, select **Manage networks**.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/26.network_configuration.png"
  width="100%"
  caption="Configuration options"
/>

3. This will open a list of the available interfaces. Configure as preferred by selecting the desired one and making the needed changes.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/27.interfaces.png"
  width="100%"
  caption="Available network interfaces"
/>

