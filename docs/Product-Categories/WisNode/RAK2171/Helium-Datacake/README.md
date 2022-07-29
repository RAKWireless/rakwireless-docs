---
rak_desc: Learn how to register the TrackIt device in the Helium console and make integration to Datacake, where you can use the dashboard to view the data in a more user-friendly way.
rak_img:  /assets/images/wisnode/rak2171/overview/rak2171.png
prev: ../Quickstart/
next: ../Datasheet/
tags:
  - RAK2171
  - wisnode
---

# WisNode TrackIt Helium Integration

This guide shows how to register the TrackIt device in the Helium console and make integration to Datacake, where you can use the dashboard to view the data in a more user-friendly way. For example, create a map so you can see the location of the device. 

Before you dive into registering the device in the Helium console and creating the Datacake integration, you need to set the device to work in [Third-Party LoRaWAN Network Server (LNS) Mode.](https://docs.rakwireless.com/Product-Categories/WisNode/RAK2171/Quickstart/#third-party-lorawan-network-server-lns-mode)


## Register the TrackIt Node in the Helium Console

1. Login into your Helium console account. If you do not have one, head to the web page and create one. Once you are logged in, you will see the Welcome window. 

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/01.png"
  width="100%"
  caption="Helium console main page"
/>

2. In the menu on the left side of the console, select **Devices** and click on the **Add new device button** (<img src="/assets/images/wisnode/rak2171/helium-datacake/1.png"/>) to register your device. 

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/02.png"
  width="100%"
  caption="Helium console devices page"
/>

3. In the **Name** field, type in a name for your device. 

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/03.png"
  width="100%"
  caption="Add New Device page"
/>

4. You can see that the Helium console generates random **Dev EUI**, **App EUI**, and **App Key**. As the TrackIt keys cannot be changed, you need to type your keys in these fields. These keys can be found in the TrackIt application in the LoRaWAN Working Mode (**Third Party NS**).

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/04.png"
  width="100%"
  caption="TrackIt keys"
/>

5. Optionally, you can select a **Profile** and **Attach a Label**. For this tutorial, they will be skipped. Note that **Profiles** and **Labels** can be added after the device is registered.

6. After typing in the required keys, click on **Save Device**, and you will see the registered device. As mentioned by the console, the initial join process takes about 20 minutes for the device to join, so be patient. 

## Create Datacake Integration

1. While the device is joining, you can create the integration. Select **Integrations** from the menu in the left panel. 

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/05.png"
  width="100%"
  caption="Integration page"
/>

2. To create an integration, click on the **Add New Integration button** (<img src="/assets/images/wisnode/rak2171/helium-datacake/2.png"/>). A list of the available integrations will appear. As this example is about Datacake, click on it. Here you can find information about the other integrations. You can find information about the other integrations in the [link](https://docs.helium.com/use-the-network/console/integrations/).

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/06.png"
  width="100%"
  caption="List of available integrations"
/>

3. On the next page, you will need a **Datacake Token**. To generate one, you will need a Datacake account. In case you don't already have an account, you can create one on [Datacake's website](https://datacake.co/). 

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/07.png"
  width="100%"
  caption="Datacake endpoint token"
/>

4. After you log into your Datacake account, click on your profile and select **Edit Profile.**

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/08.png"
  width="100%"
  caption="Datacake console page"
/>

5. In the **API** tab, you will find your API token. Copy and paste it into the **Enter Datacake Token** field in the Helium console shown in **Figure 7**.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/09.png"
  width="100%"
  caption="Datacake endpoint"
/>

6. When you place the token, type a name of your choice for the integration and click **Add Integration** to continue.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/10.png"
  width="100%"
  caption="Adding integration name"
/>


### Connection Between Helium and Datacake

1. Now that the device is registered and the integration created, you will need to make the connection between Helium and Datacake. Click **Flows** from the left menu.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/11.png"
  width="100%"
  caption="Helium console flows"
/>

2. Click the **+** in the **Nodes area**. A window will pop up with four menus – **Labels, Devices, Functions**, and **Integrations**. Click **Devices**, and you will see your registered device. 

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/12.png"
  width="100%"
  caption="Nodes"
/>

3. Now, click the registered device and drag and drop it on the blank page below as shown in **Figure 13**.

4. Do the same with the created integration. Click the **Integrations** menu and drag and drop your created integration.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/15.png"
  width="100%"
  caption="Creating the connection between the device and the integration"
/>

### Datacake Device Registration

1. You need to add the device to the Datacake console. Head to the **Devices** tab and click the **+ Add Device** button.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/16.png"
  width="100%"
  caption="Datacake console"
/>

2. Datacake has ready-to-use templates for different devices. However, as TrackIt is a new device, it doesn’t have a ready-to-use template, so you need to make one on your own. To add the device, click **New Product** and type the name of your product in the **Product Name** field.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/17.png"
  width="50%"
  caption="Adding a new product in Datacake"
/>

3. Click **Next** to continue. On the next window, for Network Server select **Helium** and click **Next** again.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/18.png"
  width="50%"
  caption="Choosing network server"
/>

4. On the next page, type the **Dev EUI** and the **Name** of your device. You can add more than one device. You can also drag and drop a **.csv** file, and it automatically adds multiple devices at once. Then click **Next**. 

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/19.png"
  width="50%"
  caption="Adding the device"
/>

5. On the next page, you have to choose a plan. Choose the **Free** one for this example. Click the **Add 1 device** button to finish.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/20.png"
  width="50%"
  caption="Choosing a plan"
/>

Now, your device is registered in Datacake. 

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/21.png"
  width="100%"
  caption="Successfully registered device"
/>

6. Before you carry on with setting up the Datacake Dashboard of the device, make sure that the device has already joined in Helium Console.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/22.png"
  width="100%"
  caption="Joined device in Helium console"
/>

## Configure the Device in Datacake

1. You need to decode the raw data that the device sends to Datacake, so you can preview it in a more user-friendly way. On the device page of the Datacake console, you can find different tabs like **Dashboard**, **History**, and **Downlinks**. For now, head to the **Configuration tab**.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/23.png"
  width="100%"
  caption="Device’s Dashboard"
/>

2. Scroll down until you find the Payload Decoder field. 

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/24.png"
  width="100%"
  caption="Device’s Configuration Page"
/>

3. In the **Payload Decoder** field, copy and paste the code below. Then click the **Save** button below the decoder field.

```js
function Decoder(bytes, port) {
    var decoded = {};

    // adjust time zone, here Asia/Manila = +8H
    var my_time_zone = (8 * 60 * 60);

    decoded.num = bytes[1];
    decoded.app_id = (bytes[2] << 24) | (bytes[3] << 16) | (bytes[4] << 8) | bytes[5];
    decoded.dev_id = (bytes[6] << 24) | (bytes[7] << 16) | (bytes[8] << 8) | bytes[9];
    switch (bytes[0]) {
        case 0xCA: // No Location fix
            decoded.acc = 0;
            decoded.fix = 0;
            decoded.batt = bytes[10];
            decoded.time = ((bytes[11] << 24) | (bytes[12] << 16) | (bytes[13] << 8) | bytes[14]);
            // adjust time zone
            decoded.time = decoded.time + my_time_zone;
            var dev_date = new Date(decoded.time * 1000);
            decoded.time_stamp = dev_date.getHours() + ":" + dev_date.getMinutes();
            decoded.date_stamp = dev_date.getDate() + "." + (dev_date.getMonth() + 1) + "." + dev_date.getFullYear();
            decoded.stat = bytes[15] & 0x03;
            decoded.gps = bytes[15] & 0x0C;
            break;
        case 0xCB: // Location fix
            decoded.fix = 1;
            decoded.batt = bytes[20];
            decoded.time = ((bytes[21] << 24) | (bytes[22] << 16) | (bytes[23] << 8) | bytes[24]);
            // adjust time zone
            decoded.time = decoded.time + my_time_zone;
            var dev_date = new Date(decoded.time * 1000);
            decoded.time_stamp = dev_date.getHours() + ":" + dev_date.getMinutes();
            decoded.date_stamp = dev_date.getDate() + "." + (dev_date.getMonth() + 1) + "." + dev_date.getFullYear();
            decoded.stat = bytes[25] & 0x03;
            decoded.gps = bytes[25] & 0x0C;
            decoded.lng = (((bytes[10] << 24) | (bytes[11] << 16) | (bytes[12] << 8) | bytes[13]) * 0.000001).toFixed(4);
            decoded.lat = (((bytes[14] << 24) | (bytes[15] << 16) | (bytes[16] << 8) | bytes[17]) * 0.000001).toFixed(4);
            decoded.location = decoded.lat + "," + decoded.lng;
            decoded.acc = bytes[18];
            decoded.gps_start = bytes[19];
            break;
        case 0xCC: // SOS 
            decoded.sos = 1;
            decoded.lng = (((bytes[10] << 24) | (bytes[11] << 16) | (bytes[12] << 8) | bytes[13]) * 0.000001).toFixed(4);
            decoded.lat = (((bytes[14] << 24) | (bytes[15] << 16) | (bytes[16] << 8) | bytes[17]) * 0.000001).toFixed(4);
            if (bytes.length > 18) {
                var i;
                for (i = 18; i < 28; i++) {
                    decoded.name += bytes[i].toString();
                }
                for (i = 28; i < 40; i++) {
                    decoded.country += bytes[i].toString();
                }
                for (i = 39; i < 50; i++) {
                    decoded.phone += bytes[i].toString();
                }
            }
            break;
        case 0xCD:
            decoded.sos = 0;
            break;
        case 0xCE:
            decoded.alarm = 0x01;
            decoded.alarm_lvl = bytes[10];
            break;
    }
    return decoded;
}
```

4. Now you can see the decoded data you receive in the **Debug tab**.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/25.png"
  width="70%"
  caption="TrackIt Data"
/>

5. Create fields for the different data that the device sends. Below is a list of the fields you can create:

<table>
   <thead><tr><th>Type</th><th>Name</th><th>Identifier</th><th>Description</th></tr></thead>
   <tbody>
   <tr><td>Integer</td><td>Frame Counter</td><td>NUM</td><td>Packets Counter</td><tr>
   <tr><td>Integer</td><td>Application ID</td><td>APP_ID</td><td>The ID of the application</td><tr>
   <tr><td>Integer</td><td>Device ID</td><td>DEV_ID</td><td>The ID of the device</td><tr>
   <tr><td>Boolean</td><td>Fix</td><td>FIX</td><td>GPS fix</td><tr>
   <tr><td>Integer</td><td>Battery</td><td>BATT</td><td>Battery Level</td><tr>
   <tr><td>String</td><td>Time Stamp</td><td>TIME_STAMP</td><td>Time of the packet</td><tr>
   <tr><td>String</td><td>Date Stamp</td><td>DATE_STAMP</td><td>Date of the packet</td><tr>
   <tr><td>Integer</td><td>Status</td><td>STAT</td><td>1=sending</td>
   <tr><td> </td><td> </td><td> </td><td>3=sending</td>
   <tr><td>Integer</td><td>GPS</td><td>GPS</td><td>GPS Status</td>
   <tr><td> </td><td> </td><td> </td><td>0:open the GPS fix</td>
   <tr><td> </td><td> </td><td> </td><td>4:locating</td>
   <tr><td> </td><td> </td><td> </td><td>8:successful</td>
   <tr><td> </td><td> </td><td> </td><td>12:failed</td>
   <tr><td>Integer</td><td>Accuracy</td><td>ACC</td><td>Accuracy of GPS</td>
   <tr><td>Geolocation</td><td>Location</td><td>LOCATION</td><td>GPS coordinates</td><tr>
   <tr><td>String</td><td>Tracker ID</td><td>TRACKER_ID</td><td>The ID of the tracker</td><tr>
   <tr><td>Integer</td><td>Alarm Level</td><td>ALARM_LVL</td><td>The level of the alarm set in the application</td><tr>
   <tr><td>Integer</td><td>Alarm</td><td>ALARM</td><td>Shows if the alarm is triggered</td></tr>
   </tbody>
</table>

6. To create a field, in the **Configuration** tab for the device in the Datacake console, scroll down to the **Fields** field. Click on the **+ Add Field** button. In the **Add Field** window, fill in the following information based on the table above:
   
- **Type** – Type of the field.
- **Name** – Name of the field. Note that you can type a name of your choice. The above names are just a template.
- **Identifier** – The decoder decodes the data in fields (see **Figure 24**). The **Identifier** must be exactly the name of the field of the decoded data (e.g. **TIME_STAMP** for the Time Stamp field). Note that field names cannot be changed. 
- **Unit (optional)** – The unit of the value (e.g. V for battery (volts)).
- **Use formula** - Formulas can be used to perform calculations on values based on other fields. 

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/26.png"
  width="70%"
  caption="Adding a field"
/>

For example, to create a **LOCATION** field, choose **Geolocation** in the **Type** field. For the **Identifier** field, type the name of the decoded data field: **LOCATION**.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/27.png"
  width="70%"
  caption="Location field"
/>

7. When you enter the required information, click **Add Field**. You will see the created field in the Field tab. Once a packet is received, the field will take the value of the identifier.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/28.png"
  width="100%"
  caption="Successfully Created Field"
/>

Another example is if you want to create a field for the battery level. Click again **+ Add Field**, and select **Integer** in the **Type** field. Type **Battery** in the Name field and **BATT** in the Identifier field.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/29.png"
  width="70%"
  caption="Add battery field"
/>

8. Do the same with the other fields. It is up to you to decide on what fields are required for your project. Make sure you select the right **Type** and enter the correct **Identifier**.

9. Now that the fields are created, head to the **Dashboard** of the device. Activate the **Edit mode** using the switch (<img src="/assets/images/wisnode/rak2171/helium-datacake/4.png"/> ) and click **+ Add Widget**. You can create a widget to preview the data in the dashboard. Choose the correct widget for the desired field.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/30.png"
  width="80%"
  caption="Datacake Widgets"
/>

For example, when creating a map, click the **Map (Displays a map)** widget.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/31.png"
  width="70%"
  caption="Map Widget"
/>

10.  In the **Basics** tab, you can type a name for the widget. In the **Appearance** tab, you can set a design to your widget (color, style). The **Data** tab is most important. Here you need to select the location field you have created above. Click on the **+** **Add field** and select the **Location** field. In addition, in the **Timeframe** tab, you can enable whether the map will show historical data.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/32.png"
  width="70%"
  caption="Map field"
/>

1.  Once you have set the field, click **Save** and you will see the map in the Dashboard.


<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/33.png"
  width="100%"
  caption="Datacake map"
/>

In addition, if you want to add a widget to see the battery level of the device, click again **+ Add Widget** and select **Value**. In the **Data** tab, select **Battery** for **Field**. Then click **Save** to add the widget.

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/34.png"
  width="70%"
  caption="Add Battery Widget"
/>


12.  If you want, you can create other widgets. For example:

- **String/Integer** field - choose **Value** (Displays a measurement).
- **Boolean** field - choose **Boolean** (Displays a boolean state).

<rk-img
  src="/assets/images/wisnode/rak2171/helium-datacake/35.png"
  width="100%"
  caption="TrackIt Dashboard"
/>

13. Once you add your widgets, you can customize your Dashboard depending on your needs. Remember, when you finish customizing your Dashboard, deactivate the **Edit mode** by clicking the **yellow switch** to save your changes.
