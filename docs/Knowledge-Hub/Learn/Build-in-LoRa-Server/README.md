---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: This document is a sample demonstration on how to interconnect the WisGate Edge Gateway with its Built-in LoRa Network Server and make an application for the RAK LPWAN Node.
tags:
  - Deployment-Guide
  - WisGate
  - WisDuino
  - RAK7249
  - RAK811
  - OTAA
header:
  title: Build-in LoRa Network Server Configuration
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/build-in-lora-network-server-configuration.jpg
posted: 29/02/2020 10:30 AM
---

#  Build-in LoRa Network Server Configuration

* [Gateway Built-in LoRa NS](#gateway-built-in-lora®-ns)
* [RAK LPWAN Node](#rak-lpwan-node)

This section is a sample demonstration on how to interconnect your **RAK7249 Macro Outdoor Gateway** with its **Built-in LoRa Network Server** and make an application for the **RAK LPWAN Node**. For this sample demonstration, we will be using the RAK811 LPWAN Node.

## Requirements
1. RAK811 LPWAN Node
2. RAK7249 Macro Outdoor Gateway (LoRa Server in use)


# Gateway Built-in LoRa NS

This document is the detailed discussion on how to set-up the built-in LoRa Server for your RAK7249 Marco Outdoor Gateway using the Web Management Platform.

We will first set-up the built-in LoRa  network server. Before going through the steps, access the Web Management Platform as discussed in the prior section.

## Packet Forwarder Set-up

:::tip 📝 NOTE
 For other settings and detailed documentation for this section, browse the [Packet Forwarder](/Knowledge-Hub/Learn/Resources/Web-Management-Platform/#lora®-network) section.
:::

1. By navigating through LoRa Gateway tab-> LoRa Packet Forwarder-> General Setup, set the Protocol in the drop-down list to **Build-in LoRa ® Server**.

2. You can leave the rest of the settings with their default values. Remember to "**Save & Apply**".

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/build-in-lora-server.png"
  width="100%"
  caption="Build-in LoRa Server Protocol in Gateway"
/>

## Configure the LoRa Server

:::tip 📝 NOTE
 For other settings and detailed documentation for this section, browse the [LoRa Network](/Knowledge-Hub/Learn/Resources/Web-Management-Platform/#lora®-network) section.
:::

1. Navigate through LoRa Network Server tab -> General and turn-on this feature using the Enable slider.

2. Select your Region (Frequency Band). For this demonstration, we are going to use **EU863-870 frequency band**.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/lora-network-server-general.png"
  width="100%"
  caption="LoRa Network Server General"
/>

## Register RAK7249 Gateway

1. Navigate through LoRa Network Server-> Gateway and enter the **Gateway EUI** in the field.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/adding-gateway-eui.png"
  width="100%"
  caption="Adding Gateway EUI"
/>

2. By pressing the "**Add**" button, you will be redirected into a new tab where you will need to fill the mandatory parameters: **Name** and **Description**.

:::tip 📝 NOTE
 The **Latitude**, **Longitude**, and **Altitude** parameters are not mandatory. You can leave them for later, or leave them empty if the gateway is not stationary.
:::

3. If everything is set-up correctly, you should see the same set-up with the image shown below:

:::tip 📝 NOTE
 In order to see the Last Seen status update you need to refresh the page. There should be a value of a couple of seconds, if so than everything went well. In case there is a message **Never Seen**, there is an issue and you best redo the configuration.
:::

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/gateway-successful-add.jpg"
  width="100%"
  caption="Gateway Successful Adding"
/>

# RAK LPWAN Node

This document discusses the steps on how to add your RAK811 LPWAN Node Application into the Built-in LoRa Network Server demonstration. For this demonstration, it is best advised to use our very own [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/).

## Register the Application

1. Connect your RAK811 to your computer by following the [Interfacing your RAK811 LPWAN Node](/Product-Categories/WisDuino/RAK811-Evaluation-Board/Quickstart/#product-configuration) section or the RAK811 LPWAN Node. Once connecting is successful, open the RAK Serial Port Tool and press the **RESET Button (RST)** to reboot your device to check the LoRa parameters same with the image shown below:

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/rak811-parameters.png"
  width="100%"
  caption="RAK811 LPWAN Node Parameters"
/>

- In case your device is already configured to work in OTAA same with the image above, it will attempt connecting to the gateway but does not get authenticated as it is not registered yet and needs to be configured first.

:::tip 📝 NOTE:
Open the [AT Commands for RAK811 LPWAN Node](/Product-Categories/WisDuino/RAK811-Evaluation-Board/Quickstart/#miscellaneous) section of the RAK811 LPWAN Node to check the complete list of AT Commands compatible.
:::

2. Set the Region/Band by plugging in the AT Command below in the RAK Serial Port Tool. For this demonstration, EU868 frequency band shall be used.

```sh
at+set_config=lora:region:EU868
```

3. Set the authentication mode to OTAA:

```sh
at+set_config=lora:join_mode:0
```

- Now that your RAK811 LPWAN Node is working in the correct region and mode, you need to fill in the application parameters in your Gateway. This will register the specific device and allow you to exchange data.

4. Navigate through `LoRa Network Server -> Application -> Devices`. Enter a name for your application and press the "**Add**" button.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/add-application.png"
  width="100%"
  caption="Adding Application"
/>

5. Refer back to the RAK Serial Port Tool shown in **Figure 5: RAK811 LPWAN Node Parameters** and take note the **Application EUI** and **Application Key**. Input those into the corresponding fields in the **Application Configuration** screen in the Gateway:

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/set-otaa-parameters.png"
  width="100%"
  caption="Adding Application EUI and Key"
/>

:::tip 📝 NOTE:
In case your RAK811 LPWAN Node is still not configured, you can manually input an Application EUI and Application Key here or have it randomly generated by clicking the green button at the right side of the input box. You will have these data configured to the RAK811 LPWAN Node using the RAK Serial Port Tool with the commands below. Make sure to change "XXXX" with your equivalent Application EUI and Key.
:::

- Setting the **Application EUI**:

```sh
at+set_config=lora:app_eui:XXXX
```

- Setting the **Application Key**:

```sh
at+set_config=lora:app_key:XXXX"
```

6. **Save & Apply** (Make sure the Auto Add Device Slider is in the off position).

## Adding the Device

1. Locate the application created in the previous section and press the "**Edit**" button.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/edit-applications.png"
  width="100%"
  caption="Editing the Application"
/>

2. Enter the **Device EUI** into the corresponding field and press "**Add**" button.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/add-device-in-application.png"
  width="100%"
  caption="Adding Device in the Application"
/>

3. Enter a **Device name**, make sure you are in **Class A**, **OTAA** mode. Leave the rest of the parameters with their default settings then **Save & Apply**.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/edit-device-parameters.png"
  width="100%"
  caption="Editing Device Parameters"
/>

## Data Transfer Monitoring

By following the steps in the previous sections, you should now have your Device registered and if you click on the **Device EUI**, you will open the corresponding Device window. Go to the **Live Device Data** tab. Here you can monitor data that the application is exchanging in real time.

:::tip 📝 NOTE:
Keep the Live Device Data tab opened as we want to monitor traffic.
:::

1. Using the RAK Serial Port Tool, execute the AT command provided below to reboot the RAK811. Alternatively, you could press the **RESET Button (RST)**.

```sh
at+set_config=device:restart
```

2. Upon reboot, your RAK811 should be able to join via OTAA if all the credentials are authenticated. You should see a **Join** request in the Live Data tab and the **Join Succeeded!** message in the Serial Tool.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/data-monitoring.png"
  width="100%"
  caption="Live Device Data Monitoring"
/>



