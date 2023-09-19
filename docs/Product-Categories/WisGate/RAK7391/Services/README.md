---
rak_desc: Contains different platforms and programs used for building, deploying, and managing your RAK7391. This service includes Docker, LoRaWAN server, Node-RED, Grafana, and InfluxDB. 
rak_img: /assets/images/wisgate/rak7391/RAK7391.png
prev: ../Compatible-Hardware/
next: ../Connecting-To-WisBlock/
tags:
  - RAK7391
  - Services
  - WisGate
---

# RAK7391 WisGate Connect Services

## Docker

Docker is an open-source platform for building, deploying, and managing containerized applications. Everything you need to run an application, such as the application source code, the operating system libraries, and the dependencies, are all packed into one container. The best part of using docker is that it can simplify the development and delivery of distributed applications. Whether you are a developer or a user, you can deploy and use the application in any environment in just a few minutes.

Since Docker makes application containerizations run easier, faster, and safer, docker-ce is pre-installed in the RAKPiOS, and the version is 20.10.17, build 100c701. The user `RAK` is added to the `docker` group, thus, the user won't need to preface the `docker` command with `sudo`.


In this section, you will find a few services for users to get started with. These services can be classified into several categories: LoRaWAN, Zigbee, home automation, VPN, etc.

### Portainer

Portainer CE is a lightweight service delivery platform for containerized applications that can be used to manage Docker, Swarm, Kubernetes, and ACI environments. The application allows users to manage orchestrator resources (containers, images, volumes, networks, etc). Check the [official web page ](https://hub.docker.com/r/portainer/portainer-ce)for more information.

The default user name for Portainer is `admin`, and the password is `changeme`. A Portainer deployment script is created to ease the usage of Portainer. You can set a specific Portainer version and also the app template to use. Run the command below to check it:

```
rak@rakpios:~ $ portainer -h

Usage: portainer [OPTION] COMMAND

Options:
  -h,--help  Print this Help
  -v <portainer image version> define a specific version of portainer you want to deploy
  -t <portainer app template url>  define a specific portainer app template to start with

Commands:
  up    Start portainer service
  down  Stop portainer service
```

Portainer provides a pre-built set of app templates, but you are free to modify or replace these with your own. You can also create your own custom templates, either manually or from an existing stack.


<rk-img
  src="/assets/images/wisgate/rak7391/services/1.portainer.png"
  width="70%"
  caption="Portainer"
/>



## LoRaWAN Packet Forwarder

A Packet Forwarder is a program running on a gateway that interacts with the following:

-  **LoRa chip** - to receive and transmit LoRa packets;
- **network** - to transmit them for applications.

Templates are provided for the two LoRaWAN packet forwarder services: **LoRa Basics™ Station** and **UDP Packet Forwarder**.

### LoRa Basics™ Station

This service deploys a LoRaWAN gateway running the Basics™ Station Semtech Packet Forward protocol in a docker container or as a http://balena.io application. The Basics™ Station protocol enables the LoRa gateways with reliable and secure communication between the gateways and the cloud, and it is becoming the standard Packet Forward protocol used by most of the LoRaWAN operators.

To check the Dockfile, the environmental variables, and docker-compose file, and other details, please visit the [Git-hub repository](https://github.com/xoseperez/basicstation) of this project.

### UDP Packet Forwarder

The [Semtech UDP Packet Forwarder](https://github.com/lora-net/packet_forwarder) is the original LoRaWAN packet forwarder, connecting to servers through the Semtech UDP protocol. This service deploys a LoRaWAN gateway running the UDP Packet Forwarder protocol in a docker container in your computer, Raspberry Pi, or compatible SBC. This service has been tested with The Things Stack Community Edition (TTSCE or TTNv3).

To check the Dockfile, the environmental variables, and docker-compose file, and other details, please visit the [Git-hub repository](https://github.com/RAKWireless/udp-packet-forwarder) of this project.

## LoRaWAN Network Server

A LoRaWAN network server connects sensors, gateways, and end-user applications and ensures reliable and secure data routing all along with the LoRaWAN network.

The templates for two LoRaWAN network servers are already provided: **ChirpStack Network Server** and **The Things Stack LNS**.

### ChirpStack Network Server

The ChirpStack open-source LoRaWAN Network Server stack provides open-source components for LoRaWAN networks. Together they form a ready-to-use solution, including a user-friendly web interface for device management and APIs for integration.

This service is provided in Portainer's app template and is modified based on the docker-compose.yml provided by Chirpstack. Check the official repository [ChirpStack Docker example](https://github.com/brocaar/chirpstack-docker) for more details about environmental variables and configuration.

### The Things Stack LNS

The Things Stack is a robust yet flexible LoRaWAN Network Server that caters to the needs of demanding LoRaWAN deployments, from covering the essentials to advanced security configurations and device life cycle management.

The service deploys The Things Stack LoRaWAN Network Server (Open Source Edition) on a PC, a Raspberry Pi, or an equivalent SBC using docker. To check the Dockfile, dock-compose.yml file, environmental variables, and other details, please visit the [Git-hub repository](https://github.com/xoseperez/the-things-stack-docker) of this project.

## Node-RED

Node-RED is a programming tool for wiring together hardware devices, APIs, and online services in new and interesting ways. It provides a browser-based editor that makes it easy to wire together flows using the wide range of nodes in the palette that can be deployed to its runtime in a single click.

A customized Node-RED docker image with some pre-installed nodes is already provided. It can be deployed in the Portainer app template. There is also a series of sensor/IO nodes published:

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

In addition, there are some example flows for you to play with. The source code for these nodes is stored in the [Rakwireless' Node-RED node repository](https://github.com/RAKWireless/node-red-nodes), feel free to contact us for more details.

## Grafana

Grafana is an open-source analytics & monitoring solution for every database. Grafana allows you to query, visualize, alert on, and understand your metrics no matter where they are stored. Users can create, explore, and share beautiful dashboards with their teams and foster a data-driven culture.

For references on running the Grafana Docker image, please check the [official documentation](https://grafana.com/docs/grafana/next/setup-grafana/installation/docker/).

<rk-img
  src="/assets/images/wisgate/rak7391/services/2.grafana.png"
  width="70%"
  caption="Grafana"
/>


## InfluxDB

InfluxDB is an open-source time-series platform. It includes APIs for storing and querying data, processing it in the background for ETL or monitoring and alerting purposes, user dashboards, visualizing and exploring the data, and more.

If you need more details on the service's configurations, environmental variables, and references, please check influxDB's Docker-hub [official page](https://hub.docker.com/_/influxdb) for more details.

