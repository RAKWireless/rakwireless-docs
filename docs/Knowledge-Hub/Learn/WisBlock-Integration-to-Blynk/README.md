---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: This tutorial shows the basics to start creating your custom firmware with RUI3 API.
tags:
  - Tutorial
  - WisBlock
  - Blynk
header:
  title: LoRa, E-paper, and QR Codes - Making Low-Power, Long-Range Connected Badges
  caption: by <b>Rommel Jay Gadil</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 19/05/2022 3:30 PM
---

# WisBlock Integration to Blynk


With RAKwireless' wide range of sensors and modules, you can imagine an infinite number of project possibilities, one of which could be integrating your project into a web or mobile dashboard for monitoring and control.

And this is where the Blynk platform comes in handy: you can create your own IoT dashboard with little to no experience in web development.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/blynk-iot-dashboard.png" width="100%">
</p>

You can edit the widget by clicking the **Edit** button.

This platform offers two (2) dashboards for your project:

- Mobile
- Web

To help you start, you will need the following devices and follow the steps outlined below:

- [RAK5005-O WisBlock Base Board](https://store.rakwireless.com/products/rak5005-o-base-board?utm_source=RAK5005-OWisBlockBaseBoard&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK11200 ESP32 Module for WiFi](https://store.rakwireless.com/products/wiscore-esp32-module-rak11200?utm_source=WisBlockRAK11200&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK12003 WisBlock IR Thermometer Module](https://store.rakwireless.com/products/infrared-temperature-sensor-rak12003?utm_source=WisBlockRAK12003&utm_medium=Document&utm_campaign=BuyFromStore)


<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/baseboard-and-core.png" width="70%">
</p>

<b> Create a Blynk account </b>

The first step is to create a [Blynk account](https://blynk.cloud/dashboard/register). Enter your email address and check your email for confirmation. Then you can create your password.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/create-account.png" width="100%">
</p>


<b> Follow the Quickstart Guide by Blynk </b>

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/quickstart.png" width="80%">
</p>

In selecting the hardware, choose ESP32 since RAK11200 is based on the Espressif ESP32-WROVER.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/hardware.png" width="80%">
</p>

Choose your preferred IDE. In this example, you will be using the official Arduino IDE.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/ide-used.png" width="80%">
</p>

Install the Blynk library for Arduino.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/ide-used.png" width="80%">
</p>

You can now enter your WiFi credentials and then copy the code.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/wifi-credentials.png" width="80%">
</p>

:::tip 📝 NOTE
They will be unable to connect if they do not enter the SSID or password and copy the code.
:::

Before uploading your code, make sure that you are connected to the Blynk Cloud Server.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/upload-code.png" width="80%">
</p>

Ensure that the **BOOT0** and **GND** pins are shorted before uploading the code to the RAK11200. After a successful upload, you must press the reset button once more.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/shorted-pins.png" width="80%">
</p>

RAK11200 requires the BOOT0 pin to be configured properly before uploading. If not done properly, uploading the source code to RAK11200 will fail. See the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock) for more information.

Upon successful upload you can open your serial monitor and see this message:

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/serial-monitor.png" width="80%">
</p>

In the Blynk Console, you can also see the status of your device.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/device-status.png" width="80%">
</p>

<b> Adding sensors or other modules to the platform </b>

Attach your **RAK12003** to the Wisblock Base Board.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/add-sensor.png" width="80%">
</p>


The complete code is available on the [GitHub repository](https://github.com/RAKWireless/WisBlock/tree/master/tutorials/RAK11200_Blynk_Sample).

Add functions for the RAK12003 and mixed it with the Blynk-generated code earlier.

- `tempSetup()` function for setting up the RAK12003

```c
void tempSetup() {
  TwoWire &wirePort = Wire;
  MLX90632::status returnError;
  Serial.println("MLX90632 Read Example");

  Wire.begin(); //I2C init

  if (RAK_TempSensor.begin(MLX90632_ADDRESS, wirePort, returnError) == true) //MLX90632 init
  {
    Serial.println("MLX90632 Init Succeed");
  }
  else
  {
    Serial.println("MLX90632 Init Failed");
  }
}
```

- `objectTemp()` and `internalTemp()` functions return

```c
double objectTemp() {
  double object_temp = RAK_TempSensor.getObjectTempF(); //Get the temperature of the object we're looking at in Farenheit
  return object_temp;
}

double internalTemp() {
  double sensor_temp = RAK_TempSensor.getSensorTemp(); //Get the temperature of the sensor in Celcius
  return sensor_temp;
}
```

- Attaching the `objectTemp()` value to the V5 Virtual pin

```c
void myTimerEvent()
{
  // You can send any value at any time.
  // Please don't send more that 10 values per second.
  Blynk.virtualWrite(V2, millis() / 1000);
  Blynk.virtualWrite(V5, objectTemp()); // this is from RAK12003
}
```

Virtual pins are used to send sensors’ data to the Blynk Platform. The Wisblock RAK12003 Infrared Temperature Sensor is used in this example. However, you could use any sensor of your choice; simply add the variable where your sensor data is stored to the `Blynk.virtualWrite` function's parameter.


**Double-check the credentials**:

- **Blynk Authentication Token** - this is automatically generated on the template. You can also check **My Devices** > **Your Device Name** > **Device Info**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/device-info.png" width="80%">
</p>

- WiFi SSID and Password

Then you can proceed with uploading your code. Before uploading, remember to short the BOOT0 and GND pins and press the reset button, and then press the reset button again after a successful upload to run your newly uploaded code.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/virtual-pin.png" width="80%">
</p>

To integrate sensor data, go to the Datastreams settings in your console and create a new data stream.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/quickstart-template.png" width="80%">
</p>

You can use virtual pins to attach the sensor’s data.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/virtual-pin-datastreams.png" width="80%">
</p>

The following code will write the data into the V5 and can be later used in your dashboard.

```c
Blynk.virtualWrite(V5, sensor_data);
```

<b> Create dashboard widgets from your datastream </b>

A dashboard widget can be anything from a label to a chart. See the list of widgets at [Blynk Documentation](https://docs.blynk.io/en/getting-started/template-quick-setup/set-up-web-dashboard).

To create a web dashboard widget, go to web dashboard and click edit. Then drag and drop your desired widget.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/dashboard-widget.gif" width="80%">
</p>

You can edit the widget by clicking the following icon:

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/edit-icon.png" width="35%">
</p>

Set your desired settings for your widget, and don't forget to include the Datastream as well.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-blynk/label-settings.png" width="35%">
</p>

## Final Thoughts

The Blynk platform greatly enhances the interactivity of a project without the need to learn or perform actual web and mobile development. This is really a great tool to create awesome projects such as:

  - Weather Monitoring Station
  - Greenhouse Monitoring and Control
  - Hydroponics and Aquaponics Projects

This platform is available for free. Although an upgraded version is available for larger organizations and map integration features, the free version is more than adequate for the projects mentioned above.

