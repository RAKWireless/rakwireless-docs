---
sidebar: false
rak_img: /assets/images/knowledge-hub/tutorials/access-lorawan-using-solar-energy/overview.jpg
rak_desc: A demonstration on how to deploy your LoRaWAN using the RAKwireless' Solar Panel and Battery Kit.
tags:
  - Tutorial
  - Solar Energy
  - WisGate Edge
  - WisGate
  - RAK7249
  - MPPT
  - LoRaWAN
header:
  title: How To Access LoRaWAN using Solar Energy
  caption: by <b>Sam Domingo</b>
  img: /assets/images/knowledge-hub/banners/access-lorawan-using-solar-energy.jpg
posted: 05/02/2020 10:30 AM
author:
  name: Sam Domingo
  about: Sam is the technical and marketing content writer for RAKwireless. Her passion for writing that manifested in her playwriting and poetry now flows into her in-depth coverage of the IoT community.
  img: /assets/images/knowledge-hub/authors/sam-domingo.jpg
---

# How To Access LoRaWAN using Solar Energy


As the goal of IoT is to interconnect everything in the world, developers aim to extend the reach of LoRaWAN access even to things in remote areas. At present, a number of IoT users from these areas have already begun their own LoRa projects to improve their area’s agricultural and water systems. If you are one of them, difficulties in connecting are not new to you, most especially the challenge in having an intermittent power supply. With unexpected, frequent power outages, you absolutely cannot make the most of this promising new technology. Imagine this scenario: you are close to accessing a server from a faraway area but, your gateways suddenly shut down, making you start your whole data transfer from scratch. It is certainly a situation we do not want to find ourselves in.

Fortunately, IoT companies like RAKwireless are indeed making our access to IoT easy by already identifying this problem thus, releasing a LoRa set-up powered by solar energy. As long as there are no obstructions in the sky, we can now finally turn to the power of sun rays to freely source our connection set-up’s energy. With only 3 components namely,

* Solar Panel - the device that collects sunlight and converts it into electric current
* MPPT Charge Controllers - the converter that increases the efficiency of a battery charging state
* Batteries - the container of our converted electric current from sunlight

![Solar Panel Kit](/assets/images/knowledge-hub/tutorials/access-lorawan-using-solar-energy/Solar_Kit_757x.progressive.png)

👉[Solar Panel and Battery Kit Installation](/Product-Categories/WisGate/RAK7249/Quickstart/#solar-panel-and-battery-kit-installation)

you can now enjoy your disruption-free access from a LoRaWAN kit. If you want to have a try on this sustainable set-up, you will have to first learn how to calculate a battery’s capacity.

## Calculating Battery Capacity

To calculate the minimum required battery capacity, we will need to first set the number of days of autonomy. This simply means the number of days that the gateway can be powered without sunshine and just from the battery capacity alone. For most locations, the maximum number of continuous raining days is three so it is a good rule of thumb to set the days of autonomy to three.

Another specification that needs to be determined is the Depth of Discharge (DoD). It is not recommended to discharge 100% of the batteries’ total capacity as it drastically reduces its lifetime. This is why battery manufacturers recommend a certain DoD for their batteries. For example, a 100Ah battery with 80% recommended DoD can only use 80Ah or 80% of its total capacity on one cycle. Choosing a lower depth of discharge will allow the battery to last longer, but it will require you to have a larger battery capacity. For example, a battery bank may have 10,000 cycles at 20% DoD but only 800 cycles at 90% DoD. Unless otherwise specified by the battery manufacturer, it has been shown that using 80% DoD is the best in terms of maximizing the battery capacity and prolonging the battery’s lifetime.

* The **LoRaWAN gateway** for this example consumes **500mA at 12V**. This means that its energy consumption is:

```sh
0.5Ah at 12V per hour
```
* For one full day, it will need:
```sh
24hrs x 0.5Ah = 12Ah at 12V
```
* Since we will need 3 days of autonomy, the required energy becomes:
```sh
12Ah at 12V x 3 days = 36Ah at 12V
```
* Taking into account the depth of discharge, the minimum required battery capacity becomes:
```sh
36Ah/0.8 = 45Ah at 12V = 540Wh
```

## Calculating Solar Panel Rating

Since this set-up makes use of a solar panel, it is a good practice to also know the rating of the solar panel you are going to use.

The amount of energy that a solar panel can produce depends on the irradiance (energy from the sun per unit area) on your specific location. To know this value for your location, you can go to the [NASA POWER](https://power.larc.nasa.gov/) (Prediction of Worldwide Energy Resources) website. Click on the “POWER Data Access Viewer.” It will take you to a map. On the window on the right, click on “Climatology” and then enter your location’s latitude and longitude. On the “Select Parameters” part on the bottom, double click on the “Tilted Solar Panels” folder. The parameter that we are interested in is “Solar Irradiance for Equator Facing Tilted Surfaces (Set of Surfaces)”. Click on “Submit.”

To maximize the energy produced by the solar panel, it must be pointed to the Equator (South for locations in the Northern Hemisphere and vice versa) at a tilt angle that is equal to your location’s latitude. The NASA Power website shows the different irradiance levels for different tilt angles of your solar panels. For this example, let us assume that we have an irradiance of 5.0 based on our tilt angle.

We will need to set the worst-case scenario where we have the minimum number of sunshine days per our maximum number of continuous rainy days. To maximize our system’s reliability, we can set 2 sunshine days per 3 continuous rainy days. This means that in these 2 sunshine days, our solar panel must be able to produce energy for our gateway and fully charge the batteries. The total of this energy is equal to:

```sh
432Wh (36Ah at 12V) + 288Wh (0.5Ah at 12V for 2 days) = 720Wh

720Wh/5 (irradiance)/0.8 (correction for efficiency) = 180W
```
* Since this is for 2 days:
```sh
180W/2 = 90W ≈ 100W
```

## Assembly of LoRa Gateway Kit

After learning about those computations, you may now proceed in assembling your [RAK7249 Macro Outdoor Gateway](https://www.rakwireless.com/en-us/products/lpwan-gateways-and-concentrators/rak7249) powered by a solar panel.

1. Assemble the LoRa gateway kit.

    Fix the support plate of the gateway and install the mainboard with screws. Once done, install the LoRa cards, RF cables, ethernet cables, and reserved hole plugs. Connect these cables appropriate to their connectors.

2. Attach the solar panel and battery kit.

    The solar panel included in the kit is 665 x 815 millimeters in size and has a maximum power of 80 watts. On the other hand, the lithium battery has a size of 140 x 90 x 350 millimeters with a capacity of 50 Ah (ampere-hour). Carefully, connect the battery and solar panel to the gateway kit’s motherboard. Close the top cover of the gateway with screws.

3. Mount the whole kit.

    Since the operational temperature of the battery is between -20˚C ~ 60˚C, find first a conducive place for your gateway set-up that caters to such a range of temperatures. Assure also that the place has no obstructions in the sky so that the solar panel can effectively gather sunlight. Afterward, fix the device bracket to the backside of the enclosure and tighten the pole clamp. Using screws, bolts, and nuts, connect the clamp and the bracket on the backside of the gateway’s case.

4. Access the gateway.

    If you are trying to access via wifi, the WEB management platform can be used through the IP address 192.168.230.1 of the gateway LAN interface through the use of a browser. Otherwise, you may access the gateway by connecting to a WAN Port DHCP IP only when a DHCP Server is in the network. After inquiring the IP address of the gateway through that server, you can access the same management platform through that IP address. For more information about this instruction, you may access this [document](/Product-Categories/WisGate/RAK7249/Overview/).

With the help of a renewable source of energy like sunlight, we can make IoT happen and connect everything in the world. Users like you will now face no inconvenience in connecting from anywhere in the world with the production of solar panels from IoT solution providers like RAKwireless. Certainly, you can enjoy your connectivity with the power of the sun.


<rk-author />