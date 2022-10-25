---
sidebar: false
rak_img: /assets/images/knowledge-hub/tutorials/the-mighty-mqtt-what-you-should-know-about-it/overview.jpg
rak_desc: A brief discussion about the Message Queuing Telemetry Transport (MQTT) connectivity protocol.
tags:
  - Tutorial
header:
  title: The Mighty MQTT! What You Should Know About It
  caption: by <b>Sam Domingo</b>
  img: /assets/images/knowledge-hub/banners/what-you-should-know-about-mqtt.jpg
posted: 02/19/2020 10:30 AM
author:
  name: Sam Domingo
  about: Sam is the technical and marketing content writer for RAKwireless. Her passion for writing that manifested in her playwriting and poetry now flows into her in-depth coverage of the IoT community.
  img: /assets/images/knowledge-hub/authors/sam-domingo.jpg
---

# The Mighty MQTT! What You Should Know About It

As a player in the IoT world, we know you want fast messaging with your devices. You want to be always updated. You want real-time information at the tip of your fingers. However, we also know how difficult it is to find the right technology to make your aspirations real. Fortunately, [MQTT](http://mqtt.org/) is here and it can be your next big project!

**MQTT stands for Message Queuing Telemetry Transport** and is a machine-to-machine (M2M) connectivity protocol for the Internet of Things. MQTT is used as a lightweight publish-and-subscribe protocol, through which you can send and receive messages in for machine-to-machine telemetry in low bandwidth environments. For example, if you need to communicate to a broker via satellite link or in the context of home automation and small device scenarios, MQTT is quite suited for your needs. MQTT is also ideal for mobile applications because of its small size, low-power usage, minimized data packets, and efficient distribution of information to one or many of its receivers.

MQTT was initially designed by Andy Stanford-Clark (IBM) and Arlen Nipper (Arcom) in 1999 to connect Oil Pipeline telemetry systems over satellites. Although it was created quite some time ago and was intended for limited use in a particular scenario, MQTT is fast becoming one of the main protocols for IoT (Internet of Things), which encompasses great range of applications. Even if it started as a proprietary protocol, the demand for it has grown bigger throughout the years that it was released royalty-free in 2010 and became an OASIS standard in 2014.

Ever since its standardization, the protocol has been easy to adapt for a wide variety of IoT devices, platforms, and operating systems. Enterprise cloud platforms such as Microsoft Azure expose their IoT PaaS through MQTT. Certainly, any IoT application developer who has not used MQTT is not getting any closer to their next breakthrough.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/the-mighty-mqtt-what-you-should-know-about-it/mqtt-founders.jpg"
  figure-number="1"
  caption="Arlen Nipper and Andy Stanford-Clark, the fathers of MQTT, during MQTT's 10th year anniversary. Photo credits to Tony Whitmore"
/>

_**At present, MQTT has different variants and versions that you can explore and use for your new IoT project**_:

* <b>MQTT v3.1.0</b> - This is the original MQTT that was designed in 1999 and has been in use for many years. It is created for TCP/IP networks.
* <b>MQTT v3.1.1</b> - This is the most commonly used by developers at the moment. There is very little difference between v3.1.0 and 3.1.1.
* <b>MQTT v5</b> - This is the latest version of the protocol (Jan 2018) and has seen limited use. As of release 1.6, the mosquito broker supports MQTT v6 in addition to MQTT v3.1.1, so you can continue to use the older version client with the latest broker.
* <b>MQTT-SN</b> – This was specified around 2013, and designed to work over UDP, ZigBee, and other transport protocols. MQTT-SN doesn’t currently appear to be very popular and the specification hasn’t changed for several years. This may change as IoT deployments start to greatly increase.

_<b>Below are the definitions of some basic concepts in order to better understand how MQTT functions</b>_:

The first concept is the <u><b>publish-and-subscribe</b></u> mechanic. In a publish-and-subscribe system, a device can publish a message on a topic, or it can be subscribed to a particular topic to receive messages. Messages are automatically pushed to subscribers to the corresponding topic when there is an update.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/the-mighty-mqtt-what-you-should-know-about-it/mqtt-flow.png"
  figure-number="2"
  caption="MQTT Flow"
/>

<u><b>Messages</b></u> are the information that you want to exchange between your devices - whether it’s a command or a set of data.

Another important concept is the <u><b>topics</b></u>. Topics are the way you register interest for incoming messages or how you specify where you want to publish the message.

Topics are represented with strings separated by a forward slash. Each forward slash indicates a topic level.

<u><b>MQTT clients</b></u> are what we call the devices that are subscribed to one or more topics (if you don’t choose a specific topic, you will see them all). When something is published in these topics by other clients, they are going to receive the packet as a message. For MQTT version 3.1.1, there is client software available in almost all programming languages and for the main operating systems Linux, Windows, Mac from the Eclipse Paho project.

The MQTT client has its counterpart - the <u><b>MQTT broker</b></u>. The broker is at the heart of any publish-and-subscribe protocol. Depending on the implementation, a broker can handle up to thousands of concurrently connected MQTT clients. The broker is responsible for receiving all messages, filtering the messages, determining who is subscribed to each message, and sending the message to these subscribed clients. The broker also holds the sessions of all persisted clients, including subscriptions and missed messages.

<u><b>MQTT Security</b></u> is its ability to support various authentications and data security mechanisms. It is important to note that these security mechanisms are configured on the MQTT broker, and it is up to the client to comply with the mechanisms in place.

MQTT uses the publish-and-subscribe pattern to connect interested parties with each other. It practices that by decoupling that pattern with the receive-and-subscribe pattern. The publisher sends a message to a central topic that has multiple subscribers waiting to receive the message. The publishers and subscribers are autonomous, which means that they do not need to know the presence of each other.

_<b>However, much like other technologies, MQTT protocol has some disadvantages as well</b>_:

* MQTT is not RESTful so, it does not take advantage of existing protocols.
* MQTT works on flexible topic subscriptions, so it doesn't have a stable resource discovery mechanism.
* MQTT is not encrypted unless you use TLS/SSL for security.

Despite of its shortcomings MQTT is still one of the most preferred protocols in IoT projects as the benefits of using it far outweigh the negatives. For example, [RAKwireless has enhanced the capability of their LoRaWAN Gateways with the use of a built-in MQTT bridge](https://medium.com/@rakwireless/rakwireless-enhance-their-gatway-capability-with-mqtt-bridge-70aaf43ad7be) The Commercial Gateways such as [RAK7249](https://www.rakwireless.com/en-us/products/lpwan-gateways-and-concentrators/rak7249) and [RAK7258](https://www.rakwireless.com/en-us/products/lpwan-gateways-and-concentrators/rak7258) have an embedded LoRa Network and Application Server with a MQTT Bridge. This abstracts the Semtech Packet-forwarder UDP protocol into JSON over MQTT, transmitting your data to your application directly and securely. This is becoming a practice with other manufacturers and is not limited to LoRaWAN, but other IoT technologies as well.

_<b>In summary MQTT has some unique features that can’t be easily found in other protocols, such as</b>_:

* It’s a lightweight protocol. It is ultimately efficient at fast-data transmission. Furthermore, using MQTT puts less computational burden or your system.
* The small size of the data packets minimizes overhead and reduces traffic.
* It is a very power-efficient mechanic. This makes it very suitable for projects that use LoRaWAN because it can save battery life, which is the primary power source for a lot of LoRa-end nodes.
* It’s real-time, so it is perfect for IoT applications.
* It’s open-source and free to use in addition to being easy to implement and configure. Again, setting up your MQTT bridge in the RAKwireless Commercial Gateway line is quick and easy. You can refer to this documentation to get an understanding on how to do so in case you want an example of a good implementation in a LoRaWAN Gateway.

In the end, MQTT has a ton of advantages, thus it is here to stay. We believe that it will become even more mainstream and will naturally see a lot more adoption and improvements in the years to come.

<rk-author />