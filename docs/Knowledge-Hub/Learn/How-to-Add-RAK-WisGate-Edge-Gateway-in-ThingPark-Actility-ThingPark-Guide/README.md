---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: This guide provides a step-by-step tutorial on how to connect a RAK WisGate Edge Gateway to ThingPark, an Actility platform, via Basics Station.
tags:
  - User-Manual
  - Actility
  - ThingPark
  - WisGate
  - WisGate Edge
  - Gateway
  - Basics Station
header:
  title: How to Add RAK WisGate Edge Gateway in ThingPark - Actility ThingPark Guide
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 11/01/2023 8:00 PM
---

# How to Add RAK WisGate Edge Gateway in ThingPark - Actility ThingPark Guide

**ThingPark** is Actility’s platform, in which you can register your LoRaWAN gateway and end devices. ThingPark offers a user-friendly dashboard, in which you can monitor different information about the gateway/end device like status, radio traffic, statistics, and more. Together with HTTPS integration, you can send the data received from the end nodes to an Application server for post-processing and visualizing.

In this guide, you will learn how to connect a RAK WisGate Edge Gateway to the ThingPark Enterprise platform via **Basics Station**.

:::tip 📝 NOTE:
To connect the gateway to the ThingPark Admin console, the gateway must be updated to the latest version of WisGateOS. If the WisGateOS version is previous to 1.3.6, update to the [latest firmware](https://downloads.rakwireless.com/#LoRa/WisGateOS/). To update the gateway, refer to the [Flash Firmware section of the WisGateOS User Manual](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS/Overview/#backup-flash-firmware).
:::

## Register the Gateway in ThingPark

1. Log in to the [ThingPark Admin console](https://community.thingpark.io/auth/realms/tpw-users-actility-tpe-ope/protocol/openid-connect/auth?client_id=tpe&redirect_uri=https%3A%2F%2Fcommunity.thingpark.io%2Ftpe%2F&state=4999dc8c-95bb-447c-a79a-6822f2e2b70a&response_mode=query&response_type=code&scope=openid&nonce=df760c4c-38ab-49d5-8272-6cd18497fb21&code_challenge=S-rk1eSjmqGmKGxlt0mhnVOdYm-2_ww5oQnqyfi96KQ&code_challenge_method=S256). If you do not have an account, you need to [create one](https://community.thingpark.org/index.php/account/).

2. On the Admin console, navigate to the **Base Stations** drop-down menu and choose **Create**.

<rk-img
src="/assets/images/knowledge-hub/learn/actility-thingpark-guide/1.thingpark-admin-console.png"
  width="100%"
  caption="ThingPark Admin Console"
/>

3. On the **CREATING A BASE STATION** menu, choose **View More Manufacturers**.

<rk-img
src="/assets/images/knowledge-hub/learn/actility-thingpark-guide/2.creating-base-station.png"
  width="100%"
  caption="Creating Base Station"
/>

4. On the **Select Your Base Station Manufacturer** window, find and choose **RAK Wireless**. You can either scroll down manually or type **RAK** in the **Type to search manufacturers in the list** search field.

<rk-img
src="/assets/images/knowledge-hub/learn/actility-thingpark-guide/3.select-rakwireless-manufacturer.png"
  width="50%"
  caption="Select RAKwireless Manufacturer"
/>

5. You will be redirected to the **CREATING A BASE STATION** page.

<rk-img
src="/assets/images/knowledge-hub/learn/actility-thingpark-guide/4.register-a-gateway.png"
  width="100%"
  caption="Register a Gateway"
/>

6. On the **CREATING A BASE STATION**, fill in the following information:

* **Model** – From the drop-down menu, choose the model of your gateway.

<rk-img
src="/assets/images/knowledge-hub/learn/actility-thingpark-guide/5.choose-the-model-of-your-gateway.png"
  width="70%"
  caption="Choose the Model of Your Gateway"
/>

* **Name** – Fill in a name for your gateway.
* **LLR-UUID** – This is the base station universal unique identifier. It must be in the following format: **0016C0-XXXXXXXXXXXXXXXX**, where the **XXXXXXXXXXXXXXXX** is the EUI of the gateway. You can find the EUI on the label of the gateway, or the **Overview page** in the webUI of the gateway field.
* **RF Region** – Choose the band of the gateway from the drop-down menu.
* **Additional Information** – Optionally, you can type any useful information for the gateway.
* **Position** – Set the location of the gateway. You can either type the address in the **Search** field, manually select the location on the map below the Search field, or type the coordinates below the map.

7. Once everything is set, click **Create** to register the gateway in ThingPark.
8. A confirmation window will pop up. Click **VIEW THE BASE STATION**.

<rk-img
src="/assets/images/knowledge-hub/learn/actility-thingpark-guide/6.confirmation-window.png"
  width="50%"
  caption="Confirmation Window"
/>

9. You will be redirected to the Dashboard of the registered gateway.

<rk-img
src="/assets/images/knowledge-hub/learn/actility-thingpark-guide/7.dashboard.png"
  width="100%"
  caption="Dashboard"
/>

10. Now, configure the gateway to connect to ThingPark. Access the gateway webUI. Refer to the [documentation](https://docs.rakwireless.com/Product-Categories/WisGate/#wisgate-edge) of your gateway to see how to access the webUI.

<rk-img
src="/assets/images/knowledge-hub/learn/actility-thingpark-guide/8.webui-overview.png"
  width="100%"
  caption="WebUI Overview"
/>

11. Navigate to the **LoRa Network**. By default, the gateway works in Built-in network server mode.

<rk-img
src="/assets/images/knowledge-hub/learn/actility-thingpark-guide/9.lora-network-settings.png"
  width="100%"
  caption="LoRa Network Settings"
/>

12. From the **Mode** drop-down menu, choose **Basics Station** and click **Switch mode** to change the mode.

<rk-img
src="/assets/images/knowledge-hub/learn/actility-thingpark-guide/10.basics-station-change-mode.png"
  width="100%"
  caption="Basics Station Change Mode"
/>

13. Once the mode is changed, fill in the following settings:

* **Server** – ThingPark uses CUPS protocol. Select **CUPS Server**.
* **URI** – For the URI, copy and paste this address: https://community.thingpark.io
* **Port** – CUPS uses port 443.
* **Authentication Mode** – ThingPark uses TLS Server Authentication. From the drop-down menu, choose **TLS Server Authentication**. A trust field will pop up. Fill it with the [AmazonRootCA1.cer](https://www.amazontrust.com/repository/AmazonRootCA1.pem) certificate.

<rk-img
src="/assets/images/knowledge-hub/learn/actility-thingpark-guide/11.basics-station-settings.png"
  width="100%"
  caption="Basics Station Settings"
/>

14. Once all the fields are filled in, click **Save & Apply** to save the changes.
15. If everything is set up correctly, you can see that the gateway is connected to ThingPark in the **STATUS** area in ThingPark.

<rk-img
src="/assets/images/knowledge-hub/learn/actility-thingpark-guide/12.successfully-connected-gateway.png"
  width="100%"
  caption="Successfully Connected the Gateway"
/>
