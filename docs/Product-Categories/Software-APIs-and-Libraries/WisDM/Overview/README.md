---
rak_img: /assets/images/software-apis-and-library/wisdm/overview/wisdm.png
rak_desc: WisDM is RAKwireless cloud-based device management platform. It is designed to help you optimize the ways of controlling your gateways. This manual explains in detail the functionalities and configurations of WisDM.
rak_grp: [software-apis-and-libraries, wisdm]
prev: ../Software-APIs-and-Libraries/
next: false
tags:
    - wisdm
    - gateway
---

# WisDM

## Overview

WisDM is RAKwireless cloud-based device management platform. The WisDM platform is designed to help you optimize the ways of controlling your gateways. It allows you to access your gateways from a distance and configure them. 

WisDM device management software supports IoT networks of any scale built around commercial-grade LoRaWAN Edge gateways from RAKwireless.

RAKwireless WisDM platform offers you remote configuration, OTA updates, and scalable management. 

This manual will explain in detail the functionalities and configurations of WisDM.

### Terms and Definitions

- **Organization** – The organization in the context of WisDM is your account, where all your activities are tied under the same cap. You need to establish an organization to use the location and all its functionality. 
- **Location** – The location defines how the gateways are connected to the LoRaWAN Network Server (LNS).  
- **Assigned gateway** - The assigned gateway is one added to a location in WisDM.
- **Unassigned gateway** -  The unassigned gateway is an onboarded gateway that was removed from the location but remains in the organization.


### Minimum Requirements

To connect to WisDM, you need the RAKwireless Edge Gateways running WisGate OS version 1.2.2 or above. However, it is recommended to use the latest possible version. 

## Create an Account

Log in to WisDM using your RAK ID. If you don't have a RAK ID yet, refer to the [FAQ page](https://support.wisdm.rakwireless.com/hc/en-us/sections/4410156423319-Login-RAK-ID) and create one. 

<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/1.access-wisdm.png"
  width="100%"
  caption="Accessing WisDM"
/>

After entering the correct credentials, you can now start the configuration by first creating an **Organization**.

<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/2.sign-in.png"
  width="60%"
  caption="Signing in"
/>

## Create an Organization

In the context of WisDM structure, Organization is your account, and it ties all your activity under one cap. Learn more about the Organization on the [FAQ](https://support.wisdm.rakwireless.com/hc/en-us/articles/4410169165591-What-is-an-Organization-and-why-do-I-need-to-create-one-) page.


<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/3.create-organization.png"
  width="100%"
  caption="Create an organization"
/>

Fill in some basic information for the organization. The page consists of the following elements:

<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/4.organization-information.png"
  width="100%"
  caption="Organization information"
/>

- **Company Name** – a name of your choice, up to 50 characters.
- **Subdomain** – it is automatically filled in correspondence with the company name. It can be changed to be different from the company name. 
- **Address (optional)** – you can add an address for the organization either by typing in the search box or by choosing an address on the map on the right. 
- **Phone (optional)** – optionally, you can add a phone number.

After filling in the required information, choose the subscription plan. Choosing the pricing plan is the last step in creating an Organization. More information can be found in the [support page](https://support.wisdm.rakwireless.com/hc/en-us/sections/4410156421399-Subscription). 


<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/5.subscription-plan.png"
  width="100%"
  caption="Subscription Plan"
/>

WisDM offers a free subscription plan that allows you to manage up to three (3) gateways. The different paid subscription plans allow to manage a various number of gateways. More about the subscription plans and what they provide can be found on the [FAQ](https://support.wisdm.rakwireless.com/hc/en-us/sections/4410156421399-Subscription) page.

<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/6.subscription-plan.png"
  width="100%"
  caption="Successfully creating an organization"
/>

## Location

In the context of WisDM’s structure, location is a logical entity that defines how the gateways are connected to the LoRaWAN Network Server (LNS). It groups the gateways utilizing their LoRaWAN connectivity.

### Adding a Location

You can add a location by clicking the **New Location** button.

<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/7.subscription-plan.png"
  width="100%"
  caption="General information"
/>

Then fill in the following information needed:

- **Location name** – a name of your choice, up to 50 characters.
- **Location address** – you can copy the organization address or set a new one, either by typing the address in the search bar or by choosing it from the map on the right.
- **Location email settings** – you will be notified when there is any change in the gateway’s activity.
  <rk-img
    src="/assets/images/software-apis-and-library/wisdm/overview/8.email-notif.png"
    width="80%"
    caption="Email notifications"
  />
- **Enable/disable** – enable or disable the email notifications.
- **Instantly** – when choosing this option, you will be notified immediately for any activity.
- **Hourly** – you will be notified once an hour.
- **Daily** – you will be notified once a day.

The next step is to do the network configuration. You can choose an existing template if there is such. 

The location can be set to work in three modes, depending on the user’s needs. The modes are **Packet forwarder**, **Basics station**, and **Built-In network server**. 

### Network Configuration

After choosing the work mode and the band that the location will operate on, configure the following settings:

<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/9.network-configuration.png"
  width="100%"
  caption="Network configuration"
/>

- **Work Mode** – choose the work mode in which they want the location to operate. 
- **Frequency Plan** – choose the band that is suitable for the gateways and the country of residence. 
- **Supported channel number** –  choose the number of the channels according to how many channels the gateway that will be added to that location supports.
  :::tip 📝 NOTE
  The 16-channel gateways can be added to any location, but an 8-channel gateway can be added only to 8-channel locations.
  :::
- **UDP protocol parameters**
- **Templates** – can save the network configuration as a template to use it when adding locations in the future.

The further configurations for the three possible work modes differ in the following way:

#### Location in Packet Forwarder Work Mode

If you opt for advanced frequency options, you will see the following options:

<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/10.frequency-settings.png"
  width="70%"
  caption="Advanced frequency settings"
/>

By choosing the channel plan, the fields related to the frequency configuration of the location and the gateways registered are automatically configured based on the LoRaWAN specification.

#### Basics Station Work Mode

When creating a new location in Basics Station work mode, you need to set up the following configurations:

<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/11.basics-station.png"
  width="100%"
  caption="Location in Basics Station work mode"
/>

- **Basics station server setup** –  in this part, you need to input the **Server URL** and the **server port number** of the LoRa Network Server (LNS) to which the gateways will forward the LoRaWAN messages. You have the option to input the LNS server's address directly or choose **CUPS** mode that will update the LNS address and parameters dynamically. 
- **Authentication mode** -  to strengthen the connection security to the LNS, you can choose from different authentication methods - TLS server authentication, TLS server and Client authentication, TLS server authentication, and client token. 


#### Location in Built-In Network Server Work Mode

When creating a new location in built-in network server work mode, you need to set up the following configurations:

<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/12.network-server.png"
  width="100%"
  caption="Location in built-in network server work mode"
/>

**Network Server** - By default, the settings are pre-filled. For more details, you can check the guide for setting the WisDM location in built-in work mode.

<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/13.drop-down.png"
  width="100%"
  caption="Network server drop-down menu"
/>

**Disable frame-counter validate** - The frame-counting provides an additional layer of security between the end devices and the LoRa network server. Disabling the frame-counter validation should be done only in specific cases and on user's own responsibility. 

<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/14.gateway-backend.png"
  width="100%"
  caption="Gateway backend drop-down menu"
/>

**Gateway backend** - By default, the gateway backend is set to use the embedded in the gateway MQTT broker. If needed, the user can set up an external MQTT  broker or use the provided topics to share the network server data with external clients.


<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/15.integration-interface.png"
  width="100%"
  caption="Integration interface drop-down menu"
/>

**Integration interface** – The Built-in network server provides integration to share the data of registered end devices for post-processing to third-party services. 

<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/16.integration-enabled.png"
  width="100%"
  caption="Integration interface enabled"
/>

#### Adding a Gateway to a Location

To start the process of adding a gateway to a location in a packet forwarder work mode, click the **Add gateway** button.

<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/17.integration-enabled.png"
  width="100%"
  caption="Adding a gateway to a location"
/>

On the next page, you can see the following required information to add a gateway:

<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/18.gateway-information.png"
  width="100%"
  caption="Adding gateway information"
/>

- **Unassigned gateways** – Unassigned gateways are gateways that you remove from the location. Read more on the [FAQ](https://support.wisdm.rakwireless.com/hc/en-us/articles/4414740675607-What-are-assigned-and-unassigned-gateways-) page.
- **Upload CSV** –  use a comma-separated value document to import the required information for several gateways simultaneously.
- **Add a gateway** – add gateways to the location.
- **Serial Number** – can be found on the back of the gateway
- **Gateway EUI** – can be found on the WisGate OS web page. **Status>overview>system>gateway EUI**

<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/19.gateway-availability.png"
  width="80%"
  caption="Available and unavailable gateways"
/>

<br> Status of the onboarding gateway: <br>

If the gateway is connected to the internet, with turned on WisDM agent, and the UI and the serial number are correct, the gateway will appear in the **Available gateways**. 

If any of the mentioned requirements are not completed, the gateway will appear as **Unavailable gateways**. The tooltip next to the unavailable gateway's line will suggest the possible reason why the gateway is not successfully onboarded. 

The steps to add a gateway to a location in Packet forwarder or Basics Station work modes are the same. 

To add a gateway to a location in built-in network server work mode, you need to follow the steps and also choose if the gateway will be added as a central and work as a network server. 


<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/20.gateway-location.png"
  width="100%"
  caption="Adding a gateway to a location in built-in network server mode"
/>

### Members

You can add and manage the members of the **Organization** after creating and setting up the organization. In WisDM, there are four types of roles. Each one of them has different rights variety. 

- **Organization admin** – a role with full access to all organization assets. The organization admin has all the rights and can make changes.
- **Organization supervisor** – a role with access to all organization assets but can’t make changes.
- **Location admin** – a role that has full access to several Locations stated by the organization admin. 
- **Location supervisor** – a role that has access to several Locations stated by the organization admin but can’t make changes. 


### Menu Structure


<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/21.structure-menu.png"
  width="100%"
  caption="Main structure menu"
/>


- **Dashboard** – view the gateway and its locations summary.
- **Locations** – see their locations.
- **Gateways** – view the information of the gateways and add new ones.
- **Member** – see the members of the organizations and to invite new members.
- **Settings** – change the organization’s settings and information.  


## WisDM Plans

More about payment security can be found on the [FAQ](https://support.wisdm.rakwireless.com/hc/en-us/articles/4414719686807-WisDM-payment-security) page. 


### Subscription Plans and Pricing

<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/22.pricing.png"
  width="100%"
  caption="Pricing plans"
/>

WisDM offers various subscription plans. The plans are designed to meet your needs, whether you are just getting started with RAK gateways deployment or managing IoT devices at scale. 

WisDM offers a free subscription plan that allows you to manage up to three (3) gateways. With the paid subscription plans, you can manage more gateways, depending on the plan you choose. 

More about the subscription plans and what they provide can be found on the [FAQ](https://support.wisdm.rakwireless.com/hc/en-us/sections/4410156421399-Subscription) page.

<rk-img
  src="/assets/images/software-apis-and-library/wisdm/overview/23.additional-selector.png"
  width="40%"
  caption="Additional selector"
/>

For more information about the subscription plan management, refer to the [FAQ](https://support.wisdm.rakwireless.com/hc/en-us/sections/4410156421399-Subscription) page. 

