---
rak_img: /assets/images/software-apis-and-library/rakpios.png
rak_desc: This document describes in detail the functionality of RAKPiOS, a custom OS for CM4-based products based on Raspberry Pi OS, including Docker and rakpios-cli for network and service management.
rak_grp: [software-apis-and-libraries, rakpios]
prev: ../Command-Line/
next: false
tags:
    - rakpios
    - wisgate connect
---

# RAKPiOS Tools

## Raspberry Pi raspi-config Tool

RAKPiOS is pre-installed with the official command-line utility tool for the Raspberry Pi OS, called `raspi-config`. This tool is used to configure various Raspberry Pi settings and options, such as system settings, interface settings, performance settings, and more.

<rk-img
  src="/assets/images/software-apis-and-library/rakpios/tools/raspi-config.png"
  width="70%"
  caption="raspi-config tool"
/>

:::tip 📝 NOTE
- `raspi-config` uses dhcpcd to manage network connections, while RAKPiOS uses NetworkManager to manage WiFi and 4G connections. If both of these tools are used to manage the same network interface, they may cause issues with IP address assignment and network connectivity.
- To prevent these conflicts, dhcpcd is disabled by default in RAKPiOS, ensuring that NetworkManager is the sole tool used to manage network connections. This approach ensures that RAKPiOS users have stable and reliable network connectivity.
- Avoid managing your network with `raspi-config` and use `rakpios-cli` tool instead.
:::

## OLED Script

RAKPiOS includes a script that displays information messages on an OLED screen if one is available (as in the WisGate Connect). This script is designed to work with monochrome OLED screens based on SSD1306 drivers, and the source code is available on [GitHub](https://github.com/RAKWireless/rakpios/blob/arm64/stage2-rak/03-sys-update/files/oled).

The OLED script generates multiple pages that display critical system information such as the system name and version ID, network status, system hardware status, running containers, and power failure notifications. By displaying this information on the OLED screen, you can quickly and easily monitor the status of their system and take appropriate action.

The OLED script is designed to be easy to use and highly customizable. You can modify the script to display additional information or customize the layout of the display pages to meet their specific needs.

If you need to disable the OLED script, edit the `/etc/rc.local` file and comment out the line that calls the script:

```bash
# Display basic info on oled screen
#/bin/oled &

exit 0
```

## Miromico's Mioty Edge Card Management

The Miromico's Mioty Edge Card is the Swiss company solution for a Mioty base station. It's a MiniPCIe card with USB interface that hosts a complete Linux system with the base station software already built-in. From the host point of view, it's necessary to route the traffic from and to the Ethernet interface the card exposes (Ethernet over USB). Since the RAKPiOS 0.9.0, the Miromico's Mioty Edge Card Management is included by default, allowing to configure the host and the Edge Card to use Mioty on compatible devices like the RAK7391 WisGate Connect.

Miromico provides a comprehensive documentation, but the `mioty` CLI utility included in RAKPiOS handles all the required steps for you. This includes configuring the host and also the base station inside the card. Given that Miromico preprovisions, the cards on Loriot the minimal steps to get it running and get the station information are:

```
rak@rakpios:~ $ mioty install

Installing connection and firewall rules

[sudo] password for rak: 
Connection 'mioty' (c4a06b8c-f222-4918-a0e3-f68d70536dc2) successfully added.
Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/468)

rak@rakpios:~ $ mioty restart

Restarting packet forwarder

k@rakpios:~ $ mioty getall

Packet forwarder parameters

uniqueBaseStationId : 9D-45-D9-FF-FE-5D-C8-C1
baseStationName     : miro Edge mioty
baseStationVendor   : Miromico
baseStationModel    : EDGE-GW-MY-868
serviceCenterAddr   : eu3.loriot.io
serviceCenterPort   : 727
tlsAuthRequired     : true
profile             : eu1
```

Now head to Loriot Backend (https://eu3.loriot.io/login) and login with the credentials Miromico provides with the card. Under `Networks`, you should see an existing network and inside your new base station connected. The EUI of the base station is the `uniqueBaseStationId` above without the dashes.

For more information on what the `mioty` script can do, just call it without arguments:

```
rak@rakpios:~ $ mioty 

Host configuration:

  /usr/local/bin/mioty install              --> setups connection and firewall rules
  /usr/local/bin/mioty uninstall            --> deletes connection
  /usr/local/bin/mioty up                   --> brings up connection to edge card
  /usr/local/bin/mioty down                 --> brings down connection to edge card

Edge card configuration:

  /usr/local/bin/mioty start                --> starts packet forwarder
  /usr/local/bin/mioty stop                 --> stops packet forwarder
  /usr/local/bin/mioty restart              --> restarts packet forwarder
  /usr/local/bin/mioty enable               --> enables packet forwarder on boot by default
  /usr/local/bin/mioty disable              --> disables packet forwarder on boot by default
  /usr/local/bin/mioty getall               --> gets params from builtin packer forwarder
  /usr/local/bin/mioty set <param> <value>  --> sets a param of the builtin packer forwarder
  /usr/local/bin/mioty cert <file>          --> pushes a certificate file to card
  /usr/local/bin/mioty reset                --> resets packet forwarder params to factory values
```

## Deploy on Boot Folder

RAKPiOS is built on the official Raspberry Pi OS image, with all changes made defined in the [stage2-rak](https://github.com/RAKWireless/rakpios/tree/arm64/stage2-rak) repo. This stage contains an **on boot** folder that allows users to create an image that can deploy Docker services on the first boot. The scripts required to implement this feature are included in the `.04-pre-install-containers` folder.

By default, this stage is hidden, and users can use a command such as `ls -a` to view it. The stage is optional and serves the purpose of having Docker containers installed by default on boot and running a set of commands on the device's first boot to install Docker-related services or tools.

1. Remove the dot at the beginning of the directory to activate this stage when building a new image. This will download the compressed images for the UDP packet forwarder, Basic station packet forwarder, Portainer, and The Things Stack, then save them to `/usr/local/etc/images` (see `stage2-rak/.04-pre-install-containers/00-run.sh`).
2. To start with customized services during the first boot, a simple script called `runonce` is created (check `stage2-rak/.04-pre-install-containers/files/runonce`). This script can be used to start the customized services defined in the directory `stage2-rak/.04-pre-install-containers/files/run-once-services`.

Some example scripts are also provided:
- To load the compressed image for Portainer and start the Portainer service during the first boot:
    -  `stage2-rak/.04-pre-install-containers/files/run-once-services/portainer.sh.sample`
- To load the required images defined in the `.YML` file:
    -  `stage2-rak/.04-pre-install-containers/files/docker-compose-file`
- To start the services:
    - `stage2-rak/.04-pre-install-containers/files/run-once-services/docker-compose.sh.sample`

3. Once a script stored in `stage2-rak/.04-pre-install-containers/files/run-once-services` is completed, it will be moved to the host's directory `/etc/local/runonce.d/ran`, with the date and time appended to its name. There will also be an entry in your syslog.
4. To add customized compressed Docker images to the customized RAKPiOS image, use the `docker save` command to create the compressed images first. For example, `docker save -o container-tar-portainer.tar portainer/portainer-ce:2.16.0` will save the image `portainer/portainer-ce:2.16.0` as a compressed file called `container-tar-portainer.tar`.
5. Move the compressed images to the RAKPiOS build directory. You can also download the images provided - refer to `stage2-rak/.04-pre-install-containers/00-run.sh` for example.
6. Use `docker load` to load the compressed images. Check `stage2-rak/.04-pre-install-containers/files/run-once-services/portainer.sh.sample`.
