---
rak_img: /assets/images/software-apis-and-library/rakpios.png
rak_desc: This document describes in detail the functionality of RAKPiOS, a custom OS for CM4-based products based on Raspberry Pi OS, including Docker and rakpios-cli for network and service management.
rak_grp: [software-apis-and-libraries, rakpios]
prev: ../Quickstart/
next: ../Command-Line/
tags:
    - rakpios
    - wisgate connect
---

# Service Management with Portainer

Docker is an open-source platform for developing, deploying, and managing containerized applications. Docker CE is pre-installed in RAKPiOS version 20.10.17, build 100c701. The user `rak` is added to the `docker` group, allowing the user to run any `docker` command from his or her account.

RAKPiOS includes a Portainer script to assist users in launching Portainer services. Portainer CE is a lightweight service delivery platform for containerized applications that allows users to manage orchestrator resources (containers, images, volumes, networks, etc.). Users can use the app template in Portainer to deploy services in minutes.

## Deploy

Using the Portainer script, users can specify a specific Portainer version and app template. To view the help message, run the following command:

```
rak@rakpios:~ $ portainer -h

Usage: portainer [OPTION] COMMAND

Options:
  -h,--help  Print this Help
  -v <portainer image version> Define a specific version of the portainer you want to deploy
  -t <portainer app template url> Define a specific portainer app template to start with

Commands:
  up    Start portainer service
  down  Stop portainer service
```

Use the following command to launch Portainer with the default version (Portainer CE 2.16.0), default password (admin/changeme), and app template provided by RAKwireless:

```bash
rak@rakpios:~ $ portainer up
portainer
Start the portainer container f0ce639b3d7f
Portainer server address is https://10.2.13.29:9443
```

If there is no local copy of the Portainer image, it will take some time to pull the Portainer image from Dockerhub (internet access is required). After successfully pulling the image, navigate to the Portainer server address shown in the message above to access the web UI. Remember to change the default password after logging in.

## Basic Usage

This Portainer service uses an app template provided by RAKwireless, but you are free to modify or replace it with your own. You can also create custom templates manually or from an existing stack. Once logged in to Portainer's web UI, click the "App Template" tab to see a curated list of Docker container templates. Select any template, make any necessary changes to the environment variables, and launch the services.

<rk-img
  src="/assets/images/software-apis-and-library/rakpios/portainer/portainer-app-template.png"
  width="70%"
  caption="Portainer Application Templates"
/>

## Services Available

The supported services and app templates are provided in this [repository](https://github.com/RAKWireless/portainer-templates). Currently, over 30 services are supported, and this number will grow in the future. Because RAKwireless is well-known for its LoRaWAN gateways and modules, this section will explain some of the popular Docker services that can assist in the deployment of a LoRaWAN network. However, you can use the same method to deploy any other service.

### LoRaWAN Packet Forwarder

A Packet Forwarder is a program running on a LoRa gateway that forwards RF packets received by the concentrator (LoRa transceiver) to a server through an IP link and emits RF packets that are sent by the server.

Templates are provided for the two main existing LoRaWAN packet forwarder services: **LoRa Basics™ Station** and **UDP Packet Forwarder**.

#### LoRa Basics™ Station

In a docker container, this service deploys a LoRaWAN gateway that runs Semtech's BasicsTM Station Packet Forward protocol. The Basics™ Station protocol enables LoRa gateways to communicate with the cloud in a reliable and secure manner, and it is quickly becoming the standard Packet Forward protocol used by most LoRaWAN operators.

This service supports all RAKwireless LoRa concentrators except the RAK2247 USB version and RAK5148 2.4&nbsp;GHz LoRaWAN concentrator (Use UDP Packet Forwarder service for those).

To check the service documentation, visit the [Basics™ Station Packet Forward protocol using Docker repository](https://github.com/xoseperez/basicstation).

#### UDP Packet Forwarder

The [Semtech's UDP Packet Forwarder](https://github.com/lora-net/packet_forwarder) is the original LoRaWAN packet forwarder, connecting to servers via the Semtech protocol over UDP. It deploys a LoRaWAN gateway running the UDP Packet Forwarder protocol in a docker container, and this service has been tested with The Things Stack Community Edition (TTSCE or TTNv3).

This service supports all RAKwireless LoRa concentrators, both USB and SPI versions, sub-GHz or 2.4&nbsp;GHz LoRaWAN concentrators.

To check the service documentation, visit the [UDP Packet Forwarder for Docker repository](https://github.com/RAKWireless/udp-packet-forwarder).


### LoRaWAN Network Server

A LoRaWAN network server connects sensors, gateways, and end-user applications to the LoRaWAN network and ensures reliable and secure data routing throughout the network.

There are already templates for two LoRaWAN network servers: **ChirpStack Network Server** and **The Things Stack LNS**.

#### ChirpStack Network Server

The ChirpStack open-source LoRaWAN Network Server stack offers open-source components for LoRaWAN networks. They form a ready-to-use solution that includes a user-friendly web interface for device management as well as APIs for integration.

This service is provided in Portainer's app template and is adapted from the `docker-compose.yml` file provided by ChirpStack. Check out the official repository [ChirpStack Docker example](https://github.com/brocaar/chirpstack-docker) for more information on environmental variables and configuration.

#### The Things Stack LNS

The Things Stack is a robust yet flexible LoRaWAN Network Server that meets the requirements of demanding LoRaWAN deployments, from basic functionality to advanced security configurations and device life cycle management.

The service deploys The Things Stack LoRaWAN Network Server (Open Source Edition) using Docker.

To check the service documentation, visit the [The Things Stack LoRaWAN Network Server (Open Source Edition) using Docker repository](https://github.com/xoseperez/the-things-stack-docker).

### Node-RED

Node-RED is a programming tool for wiring together hardware devices, APIs, and online services in new and interesting ways. It includes a browser-based editor that allows you to easily wire together flows using the palette's wide range of nodes, which can be deployed to its runtime with a single click.

A customized Node-RED Docker image with some pre-installed nodes is already provided and can be deployed using the Portainer app template. There is also a set of sensor/IO nodes available:

- [ads7830 ADC node](https://flows.nodered.org/node/@rakwireless/ads7830)
- [LIN bus node](https://flows.nodered.org/node/@rakwireless/linbus)
- [lps2x barometer sensor node](https://flows.nodered.org/node/@rakwireless/lps2x)
- [ltr-390uv UV sensor node](https://flows.nodered.org/node/@rakwireless/ltr-390uv)
- [opt3001 ambient light sensor node](https://flows.nodered.org/node/@rakwireless/opt3001)
- [pi4ioe5v GPIO expander node node](https://flows.nodered.org/node/@rakwireless/pi4ioe5v)
- [pn532 RFID node](https://flows.nodered.org/node/@rakwireless/pn532)
- [mcp23017 GPIO expander node](https://flows.nodered.org/node/@rakwireless/mcp-pcf-aio)
- [shtc3 temperature and humidity sensor node](https://flows.nodered.org/node/@rakwireless/shtc3)
- [adc121c021 ADC node](https://flows.nodered.org/node/@rakwireless/adc121c021)

In addition, there are some example flows for you to play with. The source code for these nodes is available in the [Rakwireless' Node-RED node repository](https://github.com/RAKWireless/node-red-nodes).