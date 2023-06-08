---
rak_img: /assets/images/software-apis-and-library/rakpios.png
rak_desc: This document describes in detail the functionality of RAKPiOS, a custom OS for CM4-based products based on Raspberry Pi OS, including Docker and rakpios-cli for network and service management.
rak_grp: [software-apis-and-libraries, rakpios]
prev: ../Portainer/
next: ../Tools/
tags:
    - rakpios
    - wisgate connect
---

# RAKPiOS Command Line Utility

RAKPiOS Command Line Utility `rakpios-cli` is an interactive dialog box tool designed specifically for RAKPiOS. You can use `rakpios-cli` to manage network connections and deploy various IoT services from a curated list of Docker containers.

## Install and Update

RAKPIoS (versions 0.7 and higher) comes pre-installed with the `rakpios-cli` tool. However, you can easily install/upgrade rakpios-cli on any other machine by using a remote bash execution script.

To install:

```bash
curl https://raw.githubusercontent.com/RAKWireless/rakpios-cli/main/rakpios-cli -sSf | bash -s -- --install --silent && source ~/.profile
```

To update:

```bash
curl https://raw.githubusercontent.com/RAKWireless/rakpios-cli/main/rakpios-cli -sSf | bash -s -- --upgrade --silent && source ~/.profile
```

## Basic Usage

After the installation/upgrade is finished, you can use the command `rakpios-cli` to launch this tool.

<rk-img
  src="/assets/images/software-apis-and-library/rakpios/rakpios-cli/rakpios-cli-main-menu.png"
  width="70%"
  caption="rakpios-cli main menu"
/>

The tool has a main menu with three options: **Manage Networks**, **Deploy Services**, and **List Services**. To make changes to your network connections, you will require specific privileges. Additionally, ensure that the current user has access to **Docker**.

To display help information, add the flag `--help` or `-h`

```
rak@rakpios:~ $ rakpios-cli --help
rakpios-cli
The command line tool for RAKPiOS
USAGE:
    rakpios-cli [FLAGS]
FLAGS:
    -d, --debug             Prints debug message
    -h, --help              Prints help information
    -i, --install           Install rakpios-cli
    -u, --upgrade           Upgrade rakpios-cli
    -s, --silent            Perform install/update silently (no user interaction)
    -v, --version           Prints version information
```

By using different flags, you can set the log level, upgrade the tool, and also check the versions of the tool and the service template installed.

## Network Management

RAKPiOS uses [**NetworkManager**](https://networkmanager.dev/) to manage network connections. For specific network requirements, you can manually create or modify connection files as shown in the [WisGate Connect Quick Start](/Product-Categories/WisGate/RAK7391/Quickstart/) section. However, for general and simple network connections, you can use `rakpios-cli` to manage Ethernet, WiFi, and LTE connections.

<rk-img
  src="/assets/images/software-apis-and-library/rakpios/rakpios-cli/rakpios-cli-network-main-menu.png"
  width="70%"
  caption="rakpios-cli network menu"
/>

The `rakpios-cli` tool manages network connections through an interactive user interface. The main menu includes options for Ethernet, WiFi, and LTE connections.

- For **Ethernet connections**: You can use either DHCP or a static IP address.
- For **WiFi connections**: Yu can either create an Access Point (AP) or connect to an existing one.

The tool also assists you in setting up an LTE connection by entering the SIM card's **APN** (Access Point Name) and **PIN** (Personal Identification Number).

:::tip 📝 NOTE:
- APN defines the network path for all cellular data connectivity, and each SIM card network provider has a unique one that can be obtained through their online portals.
- APN settings entered incorrectly can result in a loss of cellular data connectivity.
:::


For safety concerns, you will need root privileges or enter the password to manage your network.

## Service Management

The `rakpios-cli` tool is a user-friendly tool designed to simplify the deployment process of various IoT services by leveraging a curated list of docker containers. The main menu provides two options—**Deploy service** and **List services**—that can either deploy a new service or manage an existing one.

### Deploy Service

You can choose from a wide range of services when you choose the **Deploy service** option, and this feature provides flexibility and convenience. The `rakpios-cli` supports the same services as Portainer because they share the same service template source.

<rk-img
  src="/assets/images/software-apis-and-library/rakpios/rakpios-cli/rakpios-cli-deploy-services.png"
  width="70%"
  caption="rakpios-cli deploy services"
/>

### List Service

To check or manage existing services, you can select the **List services** option, which displays a sorted list of all container names, both running and stopped.

<rk-img
  src="/assets/images/software-apis-and-library/rakpios/rakpios-cli/rakpios-cli-list-service.png"
  width="70%"
  caption="rakpios-cli list services"
/>


Once you have chosen the service you want, you can manage or check it using the following options:

* **Start the service**: Initiates the service if it is not running
* **Stop the service**: terminates the service if it is currently running.
* **Remove the service**: First stop the service, then remove it.
* **Check the logs**: Displays a continuous stream of logs generated by the specified service, with timestamps and limited to entries generated within the last 10 seconds. This option is useful for troubleshooting and debugging issues in running container(s).

<rk-img
  src="/assets/images/software-apis-and-library/rakpios/rakpios-cli/rakpios-cli-service-details.png"
  width="70%"
  caption="rakpios-cli service details"
/>
