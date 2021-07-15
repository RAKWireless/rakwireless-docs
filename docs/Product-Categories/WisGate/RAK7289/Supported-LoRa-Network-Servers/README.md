---
rak_desc: Contains a comprehensive guide in setting up your RAK7289 with the supported LoRa network server. It includes instructions in connecting and configuring your LoRaWAN Gateway to LORIOT.
tags:
  - AWS
  - TTN
  - wisgate
  - RAK7289
prev: ../Overview/
next: ../Datasheet/
---

# Supported LoRa Network Servers

## LORIOT

In this tutorial, you will learn how to connect RAK7289 WisGate Edge Pro to LORIOT. 

LORIOT provides an easy-to-use software platform that enables you to build, operate, and scale a secure IoT network suitable for long-range IoT solution deployments in every part of the world.

### Prerequisites

#### Hardware

- RAK7268 WisGate Edge Lite 2

#### Software

- SSH Client (This tutorial will be done using [PuTTY](https://www.putty.org/).)

- [LORIOT Account](https://www.loriot.io/register.html)

### Registering the Gateway

1. Log into your LORIOT account.

<rk-img
  src="/assets/images/wisgate/RAK7289/supported-lora-network-servers/loriot/1.homepage.png"
  width="100%"
  caption="LORIOT Homepage"
/> 

2. Go to the **Networks** tab of the main menu on the left. You have the option to select **Simple network**, which is automatically generated when you create your account, or you can create a new one to use. For a beginner, it will be easier to use the **Simple network**.

<rk-img
  src="/assets/images/wisgate/RAK7289/supported-lora-network-servers/loriot/2.networks.png"
  width="100%"
  caption="Networks List"
/>

3. Open the network by clicking once on its name. Then, click the **+ Add Gateway** button.

<rk-img
  src="/assets/images/wisgate/RAK7289/supported-lora-network-servers/loriot/3.adding-gateway.png"
  width="100%"
  caption="Adding a gateway to the network"
/>

4. In the list of gateways, find and select RAK7249.

::: tip 📝 NOTE
If you are using another model gateway from the WisGate Edge series, you still need to select RAK7249 in this list. This won't affect the performance in any way.
:::

<rk-img
  src="/assets/images/wisgate/RAK7289/supported-lora-network-servers/loriot/4.selecting-rak7249.png"
  width="100%"
  caption="Selecting RAK7249"
/>

5. Now, you need to connect to your gateway via SSH. As mentioned, this tutorial will be done with the PuTTY SSH client. Open PuTTY and enter the IP address of your gateway. If your gateway is in AP mode, the address will be **192.168.230.1**.

<rk-img
  src="/assets/images/wisgate/RAK7289/supported-lora-network-servers/loriot/5.putty.png"
  width="60%"
  caption="PuTTY Configuration"
/>

6. Log in with your root credentials.

  - Default username: **root**
  - Password: **root**

To get the MAC address of your gateway, run the command:

```
ifconfig eth0 | grep HWaddr 
```

The output should be similar to the following:

```
eth0      Link encap:Ethernet  HWaddr 60:C5:A8:XX:XX:XX
```

<rk-img
  src="/assets/images/wisgate/RAK7289/supported-lora-network-servers/loriot/6.mac-address.png"
  width="60%"
  caption="Getting the MAC address of the gateway"
/>

7. Copy the MAC address and fill it out in the registration form for the gateway in LORIOT. Scroll down and press the **Register RAK7249 gateway** button. 

<rk-img
  src="/assets/images/wisgate/RAK7289/supported-lora-network-servers/loriot/7.filling-out.png"
  width="100%"
  caption="Filling out the MAC address"
/>

8. The gateway is now registered and you need to add a security layer to the connection. It is provided by LORIOT's Gateway Software. To get it installed, run the following set of commands in the PuTTY.


```
cd /tmp
```

```
wget http://eu1.loriot.io/home/gwsw/loriot-rak-7249-SPI-0-latest.sh -O loriot-install.sh
```

```
chmod +x loriot-install.sh
```

```
./loriot-install.sh -f -s eu1.loriot.io
```

```
/etc/init.d/packet_forwarder disable ; /etc/init.d/loriot-gw enable ; reboot now
```

<rk-img
  src="/assets/images/wisgate/RAK7289/supported-lora-network-servers/loriot/8.installing.png"
  width="80%"
  caption="Installing LORIOT software"
/>

Your gateway is now registered and connected to LORIOT. 

<rk-img
  src="/assets/images/wisgate/RAK7289/supported-lora-network-servers/loriot/9.successful-connection.png"
  width="100%"
  caption="Successful Connection"
/>
