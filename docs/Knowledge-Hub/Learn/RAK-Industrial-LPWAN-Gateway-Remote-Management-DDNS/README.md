---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: This tutorial describes on how to use the fast and simple Dynamic Domain Name System (DDNS) Service to access the RAK Industrial Gateways. 
tags:
  - Deployment-Guide
  - WisGate
header:
  title: RAK Industrial LPWAN Gateway Remote Management - DDNS
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/general_banner.jpg
posted: 2/29/2020 10:30 AM
---

# RAK Industrial LPWAN Gateway Remote Management - DDNS

* [Register a DDNS Service](#register-a-ddns-service)
* [Gateway DDNS Service Set-up](#gateway-ddns-service-set-up)

## Overview

This tutorial describes on how to use the fast and simple Dynamic Domain Name System (DDNS) Service to access the RAK Industrial Gateways. 

Several points must be taken into considerations:

* For accessing the Gateway behind a router, you have to consult with your router documentation in order to implement Port Forwarding or Demilitarized Zone (DMZ), so you can remotely access your Gateway.

* For accessing the Gateway, when connected through an LTE network, please contact your cellular service provider in order to implement Port Forwarding.

# Register a DDNS Service

In using Dynamic Domain Name System (DDNS), you can assign a Domain name that you link to your Gateway’s Real IP Address. This allows you to access your Gateway with a Domain name that is static and will not change even if a new IP address is assigned to the Gateway, making sure you don’t have to keep a lengthy list of address that needs to be constantly updated. The DDNS service takes care of this for you.

## Choosing your DDNS Provider

A list of providers supported by the RAK Industrial Gateway series can be found below.

::: tip 📝 NOTE
For this sample demonstration, the dyndnss.net DDNS service provider shall be used.
:::
|                                   |                            |                           |                               |
|-----------------------------------|----------------------------|---------------------------|-------------------------------|
|3322.org                           |afraid.org (6)              |changeip.com               |cloudflare.com (2) (5) (6)     |
|core-networks.de (6)               |ddnss.de (6)                |dhis.org (6)               |dnsdynamic.org                 |
|dnsexit.com                        |dnshome.de (6)              |dnsmax.com                 |dnsomatic.com                  |
|dnspark.com                        |do.de (6)                   |dtdns.com                  |duckdns.org (6)                |
|duiadns.net (6)                    |dy.fi                       |dyndns.org (6) (dyn.com)   |dyndnss.net                    |
|dyns.net                           |dynsip.org                  |dynu.com                   |dynv6.com (6)                  | 
|easydns.com                        |editdns.net                 |goip.de (6)                |google.com (5) (6)             |
|he.net (6)                         |joker.com                   |loopia.se (6) (loopia.com) |mydns.jp (6)                   |
|myonlineportal.net (6)             |mythic-beasts.com (6)       |namecheap.com              |nettica.com                    |
|no-ip.com (1) (noip.com)           |no-ip.pl (6)                |nsupdate.info (6)          |nubem.com                      |
|ovh.com                            |regfish.de (6)              |schokokeks.org             |selfhost.de                    |
|sitelutions.com                    |spdyn.de (6) (spdns.de)     |strato.com                 |system-ns.com                  |
|thatip.com                         |twodns.de                   |variomedia.de (6)          |zerigo.com (6)                 |
|zoneedit.com (5)                   |zzzz.io (5) (6)             |                           |BIND nsupdate (3) (4) (6)      |

::: tip 📝 NOTE
(1) - requires additional package ddns-scripts_no-ip_com to be installed.<br>
(2) - needs additional package ddns-scripts_cloudflare to be installed.<br>
(3) - directly updates a PowerDNS (or maybe bind server) via nsupdate.<br>
(4) - needs additional package ddns-scripts_nsupdate and bind-client to be installed.<br>
(5) - SSL support required.<br>
(6) - support IPv6
:::

::: tip 📝 NOTE
You may also visit the OpenWrt [DDNS Client Guide](https://openwrt.org/docs/guide-user/services/ddns/client) for more information.
:::

## Register your DYNDNS Account

1. Go to the [DYNDNS Service](https://dyndnss.net) website and click "**Register**" as shown in Figure 1.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-ddns/register-ddns-service/register.png"
  width="100%"
  caption="Register to DYNDNS Account"
/> 

2. Fill in the following details: **Name, E-mail Address, User Name** and **Password**. Agree with the terms and click "**Create a Free Account**".

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-ddns/register-ddns-service/sign-up.png"
  width="100%"
  caption="Create a Free Account"
/> 

::: tip 📝 NOTE
A confirmation link shall be sent into your e-mail address which will bring you to the log-in page.
:::

## Create a DynDNS URL

1. Once logged, click on the "**Creating a new DynDNS Url**" link shown in Figure 3.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-ddns/register-ddns-service/create-url.png"
  width="100%"
  caption="Create DynDNS URL"
/> 

2. Input a Sub-Name for the domain. This will be used for accessing the Gateway later after configuring the service. Leave the Port field empty. 
::: tip 📝 NOTE
For demonstration, "rakwireless.dyndnss.net" shall be used.
:::

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-ddns/register-ddns-service/rakwireless-url.png"
  width="100%"
  caption="Create Subdomain Name"
/> 

3. The DDNS URL is created. The Sumbdomain should now have a password which we will needed to setup the Gateway DDNS Service, full DDNS URL and “ENTER” button that will force the DynDNSS service to get the Gateway current IP.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-ddns/register-ddns-service/subdomain-details.png"
  width="100%"
  caption="DynDNS Url Information"
/> 

# Gateway DDNS Service Set-up

1. Log into the Web UI by following the steps in the [Accessin the Web Management Platform](/Knowledge-Hub/Learn/Resources/Web-Management-Platform/#accessing-the-web-management-platform) section.

2. In the Web UI, navigate to `Services>Dynamic DNS (Beta)` as shown in Figure 6. For further details, read the [Services](/Knowledge-Hub/Learn/Resources/Web-Management-Platform/#services) section of the Web Management Platform User Manual. 

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/dynamic-dns-beta.jpg"
  width="100%"
  caption="RAK Gateway Web UI"
/> 

3. In the Dynamic DNS (Beta) tab, input a name for the service in the text box and click the “**Add**” button as shown in Figure 7.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/create-ddns-service.jpg"
  width="100%"
  caption="Create a DDNS Service"
/> 

4. In the Dynamic DNS (Beta) configuration page, **Enable** the service. Next, fill in the necessary credentials:

* **Lookup Hostname**: dyndnss.net
* **DDNS Service provider**: dyndnss.net
* **Hostname/Domain**: The domain created in the [Create a DynDNS URL](#create-a-dyndns-url) (see Figure 4)
* **Username**: DynDNSS Username used.
* **Password**: DynDNSS Password [Create a DynDNS URL](#create-a-dyndns-url) (see Figure 5).

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/ddns-basic-config.jpg"
  width="100%"
  caption="DDNS Basic Settings Configuration"
/> 

5. Open the Advanced Settings tab. Next, fill in the necessary credentials and click "**Save & Apply**".

* **IP Address source**: Network (default)
* **Network**: WAN (default) 

::: tip 📝 NOTE
This mean that the DDNS Service of the Gateway will check and report to dyndnss.net the WAN IP of the Gateway. If you want to access your Gateway trough different backhaul you can choose it here. 
:::

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/ddns-advanced-config.jpg"
  width="100%"
  caption="DDNS Advanced Settings Configuration"
/> 

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/network-interface.jpg"
  width="75%"
  caption="Network Interface Options"
/>

* After the configuration is saved, you will be redirected to the main Dynamic DNS page.

6. To start the Dynamic DNS Service, click the “**Start**” button. 

::: tip 📝 NOTE
This is the page where you can see the dyndnss.net IP, which is the IP address that the Gateway reports any change in the IP address you chose in Figure 4.
:::

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/starting-the-ddns.jpg"
  width="100%"
  caption="Starting the DDNS Service in the Gateway"
/>

7. Go back to the dyndnss.net web page and click on the “**ENTER**” button.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/updating-ip-address.jpg"
  width="100%"
  caption="Updating the Real IP Address"
/>

* If the setup is correct, a confirmation message is seen with the real IP Address same as shown in Figure 8.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/successful-update.jpg"
  width="100%"
  caption="DynDNS Confirmation Screen"
/>

8. Click the “**To Account**” button to turn back to the DynDNS Url Information page. The assigned IP Address is now shown and the last time it was updated.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/dydns-updated-ip.jpg"
  width="100%"
  caption="DynDNS Updated IP"
/>

9. Open the URL in the Web Browser and the RAK Gateway Web UI Log-in should appear. You can access your Gateway from anywhere using this URL.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/web-ui-access.jpg"
  width="100%"
  caption="RAK Gateway Remote Access From URL"
/>
