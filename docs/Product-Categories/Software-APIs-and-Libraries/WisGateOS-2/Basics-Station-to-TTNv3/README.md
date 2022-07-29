---
rak_img: /assets/rakwireless/rak-blue-dark.png
rak_desc: This guide shows how to configure and connect the RAK Edge Gateway V2 with WisGateOS 2 to a LoRaWAN Network Server using the Basics Station protocol.
rak_grp: software-apis-and-libraries
prev: ../Overview/
next: false
tags:
    - wisgate
---

# WisGateOS 2 Basics Station to TTNv3 

This guide shows how to configure and connect the RAK Edge Gateway V2 with WisGateOS 2 to a LoRaWAN Network Server using the Basics Station protocol.

For this example, the gateway will be connected to TTNv3.


::: tip 📝 NOTE
LoRa Basics Station is an implementation of a LoRa packet forwarder. This protocol simplifies the management of large-scale LoRaWAN Networks. More information about Basics Station protocol can be found in the [explanatory document](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/) provided by Semtech.
:::

## Register the Gateway

1. To login into the TTNv3, head on to the [TTN website](https://id.thethingsnetwork.org/oidc/interaction/bPjKBBkmKPGX3uf6X4Kzw). If you already have a TTN account, you can use your **The Things ID** credentials to log in.
   
<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/1.home-page.png"
  width="100%"
  caption="The Things Stack Home Page"
/>

::: tip 📝 NOTE
This guide is for the EU868 frequency band.
:::

2. To register a commercial gateway, choose **Register a gateway** (for new users that do not already have a registered gateway). Or, go to **Gateways** > **+ Add gateway** (for users that have registered gateways before).

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/2.console.png"
  width="100%"
  caption="TTN console homepage"
/>

3. Fill in the needed information:
- **Owner**- Automatically filled by The Things Stack, based on the user's account or created Organization.
- **Gateway ID** - This will be the unique ID of the user's gateway in the Network. Note that the ID must contain only lowercase letters, numbers, and dashes (-).
- **Gateway EUI** - A 64 bit extended unique identifier for the gateway. The gateway's EUI can be found either on the sticker on the casing or by going to the Overview page in the Web UI. Instructions on how to access the gateway via Web UI can be found in the Quick Start Guide for each one.
- **Gateway name** - A name for the gateway.
- **Gateway description (optional)** - Optional description, can be used to save notes about the gateway. 
- **Gateway Server Address** - The address of the Gateway Server to connect to. 
- **Frequency plan** - The Frequency plan used by the gateway. 

::: tip 📝 NOTE
- This tutorial is based on using the EU868 Frequency band, so the server address is `eu1.cloud.thethings.network`.
- The Europe 863-870&nbsp;MHz (SF12 for RX2 - recommended) is used.
:::

- The other settings are optional and can be changed to satisfy the user's requirements. 
  

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/3.adding-gateway.png"
  width="100%"
  caption="Adding a gateway"
/>

4. To register the gateway, scroll down and click **Create gateway**. 


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/4.register-gateway.png"
  width="100%"
  caption="Registering the gateway"
/>

TTNv3 supports **TLS Server Authentication** and **Client token**, which require a trust file and a key file to configure the gateway to successfully connect it to the network. You can connect your gateway to TTNv3 by using either LNS or CUPS Server.

## Connect the Gateway via LNS Server

### Connecting the Gateway

1. To generate a key file, from the **Overview** page of the registered gateway, navigate to **API keys**.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/5.overview-page.png"
  width="100%"
  caption="Overview page"
/>

2. On the **API keys page**, choose **+ Add API key**. 


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/6.api.png"
  width="100%"
  caption="API key page"
/>

3. In the **Name field**, type the name of the key (for example - Ins_key). Choose **Grant individual rights** and select **Link as Gateway to a Gateway for traffic exchange, i.e. read uplink and write downlink.**

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/7.generate-api.png"
  width="100%"
  caption="Generating an API key"
/>

4. To generate the key, choose the **Create API key**. A window will pop up, prompting to copy the generated key. 

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/8.copy-api.png"
  width="70%"
  caption="Copying the generated key"
/>


:::warning ⚠️ WARNING
Copy the key and save it in a `.txt` file (or other) because you won't be able to view or copy your key afterward. 
:::

5. Click **I have copied the key** to proceed. 

### Configuring the Gateway

1. To configure the gateway, access it via the Web UI. To learn how to do it, refer to the Quick Start Guide for each gateway. 

2. Navigate to **LoRa** > **Configuration** > **Work mode** and select **Basics station**.


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/9.working-mode.png"
  width="100%"
  caption="Changing the working mode"
/>

3. Expand the Basics Station settings by clicking **Configure Basics Station server setup.**

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/9.working-mode.png"
  width="100%"
  caption="Expanded Basics Station settings"
/>

4. To connect the gateway to TTNv3, configure the following parameters:

- **Basics Station Server Type** – For server type, choose **LNS Server**.
- **Server URL** – This is the link to The Things Stack server. 

::: tip 📝 NOTE
For this tutorial, the gateway is connected to the European cluster. For Europe fill in the following: 

```
wss://eu1.cloud.thethings.network
```

:::

- **Server Port** – The LNS Server uses port 8887. Type in **8887**.
- **Authentication Mode** – Choose **TLS server authentication and Client token**. When selected, the **Trust (CA Certificate)** and **Client token** fields will show up.
- **Trust (CA Certificate)** – For trust, upload the **Let’s Encrypt ISRG ROOT X1 Trust** certificate by clicking **choose file**. The file with the certificate can be downloaded [directly](https://letsencrypt.org/certs/isrgrootx1.pem).
- **Client Token** - This is the generated API key. The key must start with **Authorization:**.

For example:

```
Authorization: YOUR_API_KEY
```

::: tip 📝 NOTE
- Replace `YOUR_API_KEY` with the key generated previously. Have in mind that there should be a **"space"** between **Authorization:** and **YOUR_API_KEY**, as shown in the example.
:::

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/11.basics-station-settings.png"
  width="100%"
  caption="Basics Station settings"
/>

4. To save the changes, click **Save Changes**.

Now, the gateway is connected to TTNv3 as Basics Station.


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/12.successful-connection.png"
  width="100%"
  caption="Successful connection"
/>


## Connect the Gateway via CUPS Server

### Connecting the Gateway

1. Since CUPS automatically configures LNS, you need to generate two API keys - one for **CUPS** and one for **LNS**. To generate the key files, from the **Overview page** (in the TTN console) of the registered gateway, navigate to **API keys**.


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/13.overview.png"
  width="100%"
  caption="Overview page"
/>

2. On the **API keys page**, choose **+ Add API key**. 

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/14.api-key-page.png"
  width="100%"
  caption="API key page"
/>

3. In the **Name field**, type the name for the LNS key (for example - lns_key). Choose **Grant individual rights** and select **Link as Gateway to a Gateway for traffic exchange, i.e. read uplink and write downlink.**

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/15.generating-api.png"
  width="100%"
  caption="Generating an API key"
/>

4. To generate the key, click **Create API key**. The following window will pop up, prompting to copy the generated key.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/16.copy-api.png"
  width="70%"
  caption="Copying the generated key"
/>

:::warning ⚠️ WARNING
Copy the key and save it in a `.txt` file (or other) because you won't be able to view or copy your key afterward. 
:::

5. Click **I have copied the key** to proceed to generate the LNS key.

6. Click again on the **+Add API key**. In the **Name field,** type the name for the CUPS key (for example - CUPS_key). Choose **Grant individual rights** and select the following rights:
   
   - **View gateway information**
   - **Retrieve secrets associated with a gateway**
   - **Edit basic gateway settings**


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/17.cups-key.png"
  width="100%"
  caption="Generating a CUPS key"
/>

7. Click on the **Create API key.**

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/18.copy-cups-key.png"
  width="70%"
  caption="Copying CUPS key"
/>

8. Click **I have copied the key** to proceed. 

9. Click on **General settings** and scroll down to **LoRa Basics Station LNS Authentication Key**. Paste the copied **LNS** key there.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/19.configure-keys.png"
  width="100%"
  caption="Configuring the LNS authentication keys"
/>

10.  Scroll down and click **Save changes** to save the settings. 

### Configuring the Gateway

1. To configure the gateway, access it via the Web UI. To learn how to do that, refer to the Quick Start Guide for each product.

2. Navigate to**LoRa** > **Configuration** > **Work mode** and select **Basics station**.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/20.change-work-mode.png"
  width="100%"
  caption="Changing the working mode"
/>

3. Expand the Basics Station settings by clicking on **Configure Basics Station server setup.**

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/21.expand-basics-station.png"
  width="100%"
  caption="Expand Basics Station settings"
/>

4. To connect the gateway to TTNv3 with CUPS Server, configure the following parameters:

- **Basics Station Server Type**– For server type, choose **CUPS Server**.
- **Server URL** – This is the link to The Things Stack server. 

::: tip 📝 NOTE
For this tutorial, the gateway is connected to the European cluster. For Europe fill in the following: 
  
  ```
  https://eu1.cloud.thethings.network
  ```
:::

- **Server Port** – The LNS Server uses port 443. Type in **443**.
- **Authentication Mode** – Choose **TLS server authentication and Client token**. When selected, the **Trust (CA Certificate) and Client token field** will show up.
- **Trust (CA Certificate)** – For trust upload the **Let’s Encrypt ISRG ROOT X1 Trust** certificate by clicking **choose file**. The file with the certificate can be downloaded [directly](https://letsencrypt.org/certs/isrgrootx1.pem).
- **Client Token** - This is the generated CUPS key. The key must start with **Authorization:**.

For example:
  
  ```
  Authorization: YOUR_API_KEY
  ```
  
::: tip 📝 NOTE
Replace `YOUR_API_KEY` with the key generated previously. Have in mind that there should be a **"space"** between **Authorization:** and **YOUR_API_KEY**, as shown in the example.
:::

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/22.basics-station-settings.png"
  width="100%"
  caption="Basic Station settings"
/>

5. To save the changes, click **Save Changes.**

Now, the gateway is connected to TTNv3 as Basics Station.


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2/subdocument1/23.successful-connection.png"
  width="100%"
  caption="Successful connection"
/>



