---
sidebar: false
rak_img: /assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/overview.png
rak_desc: A brief guide on how to connect your RAK811 LPWAN Module to the Actility IoT Platform.
tags:
  - Tutorial
header:
  title: How To Connect LoRa Module RAK811 To Actility?
  caption: by <b>Ken Yu</b>
  img: /assets/images/knowledge-hub/banners/how-to-connect-lora-module-rak811-to-actility.jpg
posted: 3/23/2017 10:30 AM
author:
  name: Ken Yu
  about: "Founder and CEO of RAKwireless. Making Things at #Rakwireless with The #RAKstars"
  img: /assets/images/knowledge-hub/authors/ken-yu.jpg
---

# How To Connect LoRa Module RAK811 To Actility?

RAK811 Low-Power Long Range LoRa Technology Transceiver module, provides an easy to use, small size, low-power solution for long range wireless data transmission.

![RAK811 Module](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/rak811-module.jpg)

First, The [RAK811 module](https://store.rakwireless.com/products/rak811-lpwan-module) complies with the latest [LoRaWAN Gateway](https://store.rakwireless.com/collections/lora-modules) Class A&C protocol specifications, it is simple to access LWPA IOT platforms, such Actility etc. Second, it also support Lora Point to Point communications, this function can help customers implement their own private long range Lora network fast.

Module integrates [Semtech SX1276](https://www.semtech.com/products/wireless-rf/lora-transceivers/sx1276) and stm32L, offer user an serials At commands with UART Interface .It is easy to accomplish their applications, such as simple long range sensor data applications with external host MCU, low-power feature is suitable for battery applications.

## Registered Account

If you wanted connect the RAK811 to Actility, you need to register an account on ThingPark. Its website is [https://www.actility.com](https://www.actility.com/). Now, please follow the step below to register.

Please click the URL mentioned above, or copy and paste this URL and open with browser.

1. Open this website.

2. Click "**PARTNERS**".

![ThingPark](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/thingpark-iot.jpg)

3. Click "**Try**",you will see a registration form.

![Register](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/thingpark-register.jpg)

4. Fill in the form as required.

![Register Details](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/thingpark-form.jpg)

5. After filling, click "**Create new account**"and complete registration.

![Create new account](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/thingpark-create.jpg)

6. Waiting a moment you will received a email from ThingPark, it shown that you register account successfully.and now, you can use yourself account log in ThingPark.

## Prepare the Gateway

To connect our gateway to ThingPark, we need to download the **Actility LRR** (Long-Range Relay) firmware and flash the gateway. But how to set our gateway?

1. Open this website [https://partners.thingpark.com/en/](https://partners.thingpark.com/en/) in the browser.

2. Click on "**FAQ**"

![FAQ](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/thingpark-faq.jpg)

3. Click on "**YOUR GATEWAY**".

4. Click on "**how to connect your gateway?**".

![Connect to Gateway](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/thingpark-connect-gateway.jpg)

5. We can see it introduce three gateway products to download the Actility LRR (Long-Range Relay) firmware and flash the gateway. Select the corresponding steps according to the product module, Operate according to steps.

![Gateway Requisites](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/gateway-requisites.jpg)

## Add Gateway to Actility

Please log in to your account and follow the steps below, Here I used MultiTECH gateway device to demonstrate:

1. Log in your account.

![Log in](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/thingpark-login.png)

![Credentials](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/info.png)

2. You will enter a page called “Dashboard”, it shown in following picture, from the picture we can see that: Registered Device(s) is 0,Active Device(s) is 0:

![Dashboard](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/dashboard.png)

3. Click on "**ThingPark Application**", then click the "**Network Manager**", start to add gateway device.

![ThingPark Application](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/thingpark-app.png)

4. Click "**Create**".

![Create Application](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/thingpark-create2.png)

5. According to requirements, fill in your gateway device information.

6. Click "**Create**".

![Create Details](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/create-details.png)

7. Click "**List**", we can see the RAK811-Node device that we created in the Step 6 it shown we add base device successfully.

8. The "**Software restart**" not displayed. Now we need send e-mail to the official of Ability, tell them our base device MAC address and get our device "**approved**" by them;

![List](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/list.png)

9. After send the e-mail, we will get back soon;Then refresh this web page, if the "**Software restart**" displayed like the picture as the following,This means that our gateway is activated by Actility. Now, we can add our RAK811 module on this gateway.

![Software Restart](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/software-restart.png)

## Add RAK811 to Our Gateway

In this part, I will use WisNode-Lora EVB to demonstrate how to add our LoRa RAK811 module to gateway.

![RAK811 Evaluation Board](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/rak811-eval.png)

1. Click on "**ThingPark Application**", then click the "**Device Manager**", start to add RAK811 module.

![Device Manager](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/device-manager.png)

2. Click on "**List**", we can see no module on our gateway.

3. Click on "**Create**", start our steps.

![Create List](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/create-list.png)

4. Fill in the following form as required. 

![Node Requirements](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/node-requirements.png)

* **Device activation**: You can choose a way to activation the device ,here we choose OTAA as the example.
* **Device EUI**: Enter the DevEUI for your device. This ID should come with the information included with your device, or can be found in the device use **at+get_config=dev_eui**.
* **Device Address**: Skip – When selecting OTAA activation, the device address will automatically be generated based on the DevEUI.
* **Application EUI**: Enter the AppEUI. The AppEUI is a global application ID that uniquely identifies the application provider (i.e., owner) of the device.

:::tip 📝 NOTE
If you do not have an Application EUI, you can create one yourself. It must be a unique string composed of 16 alphanumeric characters.
:::

* **Application key**: Enter the Appkey. The AppKey is a key specific for the end-device that is assigned by the application owner to the end-device and most likely derived from an application-specific root key exclusively known to and under the control of the application provider.

:::tip 📝 NOTE
If you do not have an Application key, you can create one yourself. It must be a unique string composed of 32 alphanumeric characters.
:::

* **Device Profile**: Actility uses this profile to correctly decode the payload, based on the device type, and display it on our dashboard. Be sure to select the correct profile for your device and which network it will be using.

5. Click on "**Create**".

6. Use Micro USB interface to supply the module power. One end of the serial line is connected to the module, and one end is connected to the computer. Then open the UART AssistTool, send AT command to operate the module.

7. Send the AT command to the module in the following order, make the RAK811 module join the Otaa.

Boot information : Welcome to RAK811

**Send**: 
```sh
at+mode=0 /* SET LoraWAN work mode */
```
**Return**:
```sh
 OK
```

**Send**:
``` sh
at+set_config=dev_eui:60C5A8FFFE000001   /* GET Dev_EUI check if NULL ,set the enter before information */
```
**Return**: 
```sh
OK
```

**Send**:  
```sh
at+set_config=app_eui:1122334455667788&app_key:11223344556677881122334455667788 /* SET LoraGateway app_eui and app_key , big endian, you set at Step 4*/
```
**Return**: 
```sh
OK
```

**Send**:  
```sh
at+join=otaa  /* Join OTAA type*/
```
**Return**: 
```sh
OK
```

**Return**: 
```sh
at+recv=3,0,0  /* Join status success*/
```

![Serial Comm](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/at-command1.png)

8. After join gateway success, refresh dashboard page. We can see Registered Device(s) is 1.

![Registered Device](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/registered-devices.png)

9. After join gateway success, then can send and receive data, refresh dashboard page, we can see Active Device(s) is 1 , it means our module connect with server。

**Send**:  
```sh
at+send=0,2,000000000000007F0000000000000000 /*APP port:2, battery level 50%, unconfirmed message*/
```
**Return**: 
```sh
at+recv=2,0,0  /*unconfirmed mean tx success*/
```

**Send**:  
```sh
at+send=1,2,000000000000007F0000000000000000 /*APP port :2, battery level 50%, confirmed message*/
```
**Return**: 
```sh
at+recv=1,0,0  /*confirmed mean receive ack from gateway*/
```
![Active Devices](/assets/images/knowledge-hub/tutorials/how-to-connect-lora-module-rak811-to-actility/active-devices.png)


<rk-author />
