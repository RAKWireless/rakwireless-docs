---
rak_img: /assets/rakwireless/rak-blue-dark.png
rak_desc: This document describes in detail the functionality of the WisGateOS. The interface builds on top of OpenWRT and all gateway products of the RAK72xx line share it. It also functions as a reference for several products with similar functionality.
rak_grp: software-apis-and-libraries
prev: ../OpenVPN-Configuration/
next: ../Global-Integration/
---

# LNS and CUPS Configuration

This document shows how to connect the WisGate Edge Gateway with the WisGateOS to The Things Network via Basics Station, either using LNS or CUPS.

If you already have a TTN account, you can use your The Things ID credentials and log in to the [TTNv3](https://eu1.cloud.thethings.network/console).



<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.1.the-things.png"
  width="100%"
  caption="The Things Stack Home Page"
/>


## Register Gateway in TTNv3

1. If you haven't registered your commercial gateway, click **Register a gateway**. But if you have already registered your gateway before, go to **Gateways** and click **+ Add gateway**.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.2.console-page.png"
  width="100%"
  caption="Console Page After a Successful Login"
/>


2. Fill in the necessary information:

- **Owner** – Automatically filled by The Things Stack, based on user's account or created Organization.
- **Gateway ID** – This will be the unique ID of your gateway in the Network. ID must contain only lowercase letters, numbers, and dashes (-).
- **Gateway EUI** - A 64-bit extended unique identifier for your gateway. The gateway's EUI can be found either on the sticker on the casing or by going to the **LoRa Network Settings** page in the **LoRa Gateway** menu accessible via the Web UI.
- **Gateway name** – A name for the gateway.
- **Gateway description (optional)** - Optional gateway description; can also be used to save notes about the gateway.
- **Gateway Server address** - The address of the Gateway Server to connect to.
- **Frequency plan** - The frequency plan for your region used by the gateway.
  
The other settings are optional and can be changed to satisfy your requirements.


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.3.adding-gateway.png"
  width="100%"
  caption="Adding a Gateway"
/>


1. Scroll down and click **Create gateway**.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.4.register-gateway.png"
  width="100%"
  caption="Register the Gateway"
/>


TTNv3 supports TLS server authentication and Client token, which requires a trust file and a key file in configuring the gateway to successfully connect it to the network. You can connect also the gateway to TTN V3 by using LNS or CUPS Server.

## LNSS 

### Connect the Gateway via LNS Server

If you are going to use LNS server to connect to TTN V3, you need to generate a LNS key. 

1. To generate a key file, from the **Overview page** of the registered Gateway, you need to navigate to **API keys**.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.5.overview-page.png"
  width="100%"
  caption="Overview Page"
/>


2. In the **API keys page**, choose **+ Add API key**.


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.6.key-page.png"
  width="100%"
  caption="API Key Page"
/>


3. The **Name field** is the name of the key, and you can type a name of your taste (for example: LNS_key). Then choose **Grant individual rights** and select **Link as Gateway to a Gateway for traffic exchange, i.e. read uplink and write downlink**.


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.7.api-lns-key.png"
  width="100%"
  caption="Generating an API LNS Key"
/>


4. To generate the key, choose **Create API key**. A window will pop up, telling you to copy the generated key. 

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.8.generated-key.png"
  width="70%"
  caption="Generated API LNS Key"
/>


:::warning ⚠️ WARNING

The generated key must be copied and saved to a .txt file (or other), as it won’t be able to be viewed or copied after that.
:::

5. Click **I have copied the key** to proceed. 


### Configure the Gateway to Use LNS Server

1. To configure the gateway, access your gateway via the Web UI. 

2. By default, the gateway is configured to work as Network server. You need to set the gateway to work as Basics Station in the **Lora Network** menu: **LoRa Network** > **Network Settings** > **Mode** drop-down menu > **Basics Station**. 


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.9.working.mode.png"
  width="100%"
  caption="Changing the Working Mode"
/>


3. To set the changes, you need to select **Switch mode**. After that, the **Basics Station Configuration** pane settings will show up. 
   
4. To connect the gateway to TTNv3, the following parameters must be configured:

- **Server** – For server, you need to choose **LNS Server**.

- **URI** – This is the link to The Things Stack server. For this example, the gateway is connected to the European cluster. For Europe, fill in the following: `wss://eu1.cloud.thethings.network`.

- **Port** – The LNS Server uses port 8887.

- **Authentication Mode** – TTN v3 supports server authentication and Client token. Choose **TLS server authentication and Client token**. When selected, the trust and the token field will show up.
  - **trust** – For trust, it uses the **Let’s Encrypt ISRG ROOT X1 Trust** certificate. The file with the certificate can be found in the [Let's Encrypt site](https://letsencrypt.org/certs/isrgrootx1.pem).
  - **token** - This is the generated **API key**. The key must start with **Authorization:**. 

Example: 

```
Authorization: LNS_API_KEY
```

::: tip 📝 NOTE

You need to replace **LNS_API_KEY** with the key generated previously. There should be a “space” between **Authorization:** and **LNS_API_KEY**, as shown in the example.
:::

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.10.basic-station.png"
  width="100%"
  caption="LoRa Basics Station Settings"
/>


5. To save the changes, click **Save & Apply**.

If everything is configured right, the gateway should be connected to TTNv3 as Basics Station:

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.11.successful-connection.png"
  width="100%"
  caption="Successful Connection"
/>


## CUPS 

### Connect the Gateway via CUPS Server

1. Since CUPS automatically configures LNS, you need to generate two API keys: one for CUPS and one for LNS. The key can be generated from the TTN v3 **Overview page** > **API keys**.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.12.overview-page.png"
  width="100%"
  caption="Overview Page"
/>


2. On the **API keys page**, choose **+ Add API key**.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.13.api-key-page.png"
  width="100%"
  caption="API Key Page"
/>


3. In the **Name field**, type the name of their LNS key (for example - LNS_key). Choose **Grant individual rights**, then select **Link as Gateway to a Gateway for traffic exchange, i.e. read uplink and write downlink**.


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.14.lns-api-key.png"
  width="100%"
  caption="Generating a LNS API Key"
/>


4. To generate the key, choose **Create API key**. The following window will pop up, telling you to copy the generated key. 


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.15.generated-key.png"
  width="70%"
  caption="Copying the Generated Key"
/>


:::warning ⚠️ WARNING

The key must be copied and saved to a .txt file (or other), as it won’t be able to be viewed or copied after that.
:::


5. Click **I have copied the key** to proceed.

6. To generate the next key, click again on the **+Add API key**. In the **Name field**, type the name of their CUPS key (for example - CUPS_key) and choose **Grant individual rights** and select the following rights:

**·**     **View gateway information**

**·**     **Retrieve secrets associated with a gateway**

**·**     **Edit basic gateway settings**

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.16.generating-cups.png"
  width="100%"
  caption="Generating a CUPS Generated Key"
/>


:::warning ⚠️ WARNING

The generated key must be copied and saved to a .txt file (or other), as it won’t be able to be viewed or copied after that.
:::


7. Click **I have copied the key** to proceed.

8. Click on **General settings** and scroll down to **LoRa Basics Station LNS Authentication Key** and paste the copied **LNS** key there.


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.17.lns-authentication.png"
  width="100%"
  caption="Configuring the LNS Authentication Key"
/>


9. To save the changes, click **Save changes**.



### Configure the Gateway to Use CUPS Server

1. To configure the gateway, you need to access it via the Web UI. 

2. Configuring the gateway to work as Basics Station can be done in the LoRa Network menu: **LoRa Network** > **Network Settings** > **Mode** drop-down menu > **Basics Station**. 

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.18.working-mode.png"
  width="100%"
  caption="Changing the Working Mode"
/>


3. Select **Switch mode** to apply the change. After that, the **Basics Station Configuration** pane settings will show up. 

4. To connect the gateway to TTNv3, the following parameters must be configured:

- **Server** – For server, the user need to choose **CUPS Server**.
- **URI** – This is the link to The Things Stack server. For this example, the gateway is connected to the European cluster. For Europe, fill in the following: `https://eu1.cloud.thethings.network`.
- **Port** – The CUPS Server uses port 433.
- **Authentication Mode** – TTN v3 supports server authentication and Client token. Choose **TLS server authentication and Client token**. When selected, the trust and the token field will show up.
  - **trust** – For trust, it uses the **Let’s Encrypt ISRG ROOT X1 Trust** certificate. The file with the certificate can be found in the [Let's Encrypt site](https://letsencrypt.org/certs/isrgrootx1.pem).
  - **token** -  This is the generated **CUPS API key**. The key must start with **Authorization:**. 

Example: 

```
Authorization: CUPS_API_KEY
```


::: tip 📝 NOTE

You need to replace **CUPS_API_KEY** with the key generated previously. There should be a “space” between **Authorization:** and **CUPS_API_KEY**, as shown in the example.
:::

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.19.basic-station.png"
  width="100%"
  caption="LoRa Basics Station Settings"
/>


5. To save the changes, click **Save & Apply**.

If everything is configured right, the gateway should be connected to TTNv3 as Basics Station:

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument7/30.20.successful-connection.png"
  width="100%"
  caption="Successful Connection"
/>

