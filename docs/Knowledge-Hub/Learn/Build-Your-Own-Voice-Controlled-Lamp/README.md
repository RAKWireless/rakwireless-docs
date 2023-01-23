---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/voice-controlled-lamp/voice-controlled-lamp.png
rak_desc: This guide provides a step-by-step tutorial on how to create a voice-controlled lamp using Edge Impulse and Cyberon.
tags:
  - Tutorial
  - WisBlock Audio
  - WisBlock
  - RAK19001
  - RAK4631
  - RAK18000
  - RAK18031
  - RAK13001
  - RAK11200
  - Arduino
  - Edge Impulse
  - Cyberon
  - Arduino
  - Voice-Controlled Lamp
  - VS Code
  - PlatformIO
header:
  title: Build Your Own Voice-Controlled Lamp
  caption: by <b>Christopher Méndez</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 03/11/2022 07:00 PM
---

# Build Your Own Voice-Controlled Lamp

Normally, the smart devices in our homes are subject to internet availability and third-party services to work correctly. Data is everywhere in the cloud. We experience the effects of latency as our commands are processed, and the action required is performed.

This project tries to solve mentioned problem by making the most of the microcontrollers we commonly use, implementing a system capable of processing voice commands in real-time, and controlling a desk lamp, all locally, without the need for the internet.

For this application, two different tools are used - **Edge Impulse** and **Cyberon**.


## Hardware

To carry out this test, you need the following hardware components:

- [RAK19001 Dual IO Base Board](https://store.rakwireless.com/products/rak19001-wisblock-dual-io-base-board?utm_source=RAK19001&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK4631 (nRF52840) Core Module](https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore) or a [RAK11200 WisBlock Core ESP32 Module](https://store.rakwireless.com/products/wiscore-esp32-module-rak11200?utm_source=WisBlockRAK11200&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK18000 PDM Stereo Microphone Module](https://store.rakwireless.com/products/wisblock-microphone-module-rak18000?utm_source=WisBlockRAK18000&utm_medium=Document&utm_campaign=BuyFromStore) or [RAK18031 WisBlock Audio PDM Microphone Module](https://store.rakwireless.com/products/pdm-microphone-sensor-20-10khz-stmicroelectronics-mp34dt06j-rak18031?utm_source=RAK18031&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK13001 WisBlock Relay IO Module](https://store.rakwireless.com/products/relay-io-rak13001?utm_source=RAK13001&utm_medium=Document&utm_campaign=BuyFromStore)
- Conventional Desk Lamp

:::tip 📝 NOTE
This is also compatible with the ESP32 and RP2040 cores.
:::

## Software

- Edge Impulse
- Visual Studio Code for PlatformIO
- Arduino IDE


:::tip 📝 NOTE
- To set up the program to the WisBlock boards, refer to the following guide:
- [PlatformIO via Visual Studio Code](https://docs.rakwireless.com/Knowledge-Hub/Learn/Board-Support-Package-Installation-in-PlatformIO/)
- [Arduino IDE](https://docs.rakwireless.com/Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/)
:::


## WisBlock Assembly

To put together the different modules, you need to connect them to the respective slots in the base board.



<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/1.mounting-sketch.png"
  width="70%"
  caption="Assembling the core to the base board"
/>


<br>

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/2.assembly-photo.png"
  width="80%"
  caption="Assembling the components"
/>


## Using Edge Impulse


**Edge Impulse** is an open and free Tiny Machine Learning development platform where you create your dataset, design your model, test it and deploy it back to your microcontroller.


<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/3.dataset.png"
  width="80%"
  caption="Dataset of the model"
/>

1. To start with, you need to create a dataset. For this guide, a 10-sec sound recordings are uploaded from the PC headset with a repeating keyword, then split them into 1-sec windows. The keywords used for the model are the following:
      - ***Hey RAKstar***
      - ***Lights On***
      - ***Lights Off***

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/4.create-dataset.png"
  width="100%"
  caption="Collecting data"
/>

2. The impulse was created to identify the voice by adding an audio (MFCC) processing block and a classification (Keras) learning block.
   - Set the Window size to 1000&nbsp;ms (the same length as our recordings).
   - Set the Window increase to 100&nbsp;ms.
   - Set the Frequency to 16&nbsp;kHz (model sampling frequency).

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/5.creaate-impulse.png"
  width="100%"
  caption="Creating the impulse"
/>

3. In the Audio Processing Block (MFCC), don’t change anything, and click **Save parameters**.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/6.save-parameters.png"
  width="100%"
  caption="Saving the parameters"
/>

4. In the Neural Network learning block, it is defined as follows:

   - The number of training cycles to 100;
   - The learning rate to 0.005;
   - And enables Data augmentation.


<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/7.neural-network.png"
  width="80%"
  caption="Setting up the Neural Network Classifier"
/>

5. After defining the Neural network architecture (used the default one for audio recognition), click **Start training**.


<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/8.start-training.png"
  width="80%"
  caption="Start training for audio recognition"
/>

6. In the window, you can see the model performance results with the set training parameters. they are pretty decent…, advice: “is not always good for our model to be 100% “accurate” this could mean that our model is overfitted and will perform badly on new data”.


<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/9.performance.png"
  width="70%"
  caption="Training performance"
/>


:::tip 📝 NOTE
This Edge Impulse project is public, so you can clone and modify it.
:::



### Code

1. Select **Arduino library** for your deployment.


<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/10.arduino-library.png"
  width="80%"
  caption="Selecting Arduino library"
/>


2. Depending on your model’s complexity, resource requirements, and the development board you are using, you should consider enabling the EON tuner and select between 8 bits or 32 bits optimization.

3. Click **Build** and save the ZIP file with your trained model and unzip it.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/11.optimization.png"
  width="80%"
  caption="Selecting model optimization"
/>


4. Download the code from the [GitHub repository](https://github.com/mcmchris/voice-controlled-lamp).

5. Open the folder called **Voice-lamp-Edge-Impulse** with Visual Studio Code.


<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/12.vscode.png"
  width="100%"
  caption="Opening Visual Studio Code"
/>


6. Drag and drop the library folder of your Edge Impulse model to the **lib** subfolder of the project.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/13.add-library.png"
  width="100%"
  caption="Adding the library to VS Code"
/>


:::tip 📝 NOTE
The library in the code is named correctly. In this case, it is **WisSound_inferencing.h** because the Edge Impulse project is called **WisSound**.
:::

7. Connect your WisBlock board to the computer through a USB cable.

8. Compile the code and flash your board.


### Testing

1. To control the AC lamp, the relay module is used to simply interrupt the line of the AC source to the lamp. This way, the project is repurposed to control any appliance that is in the power range of the relay.


<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/14.wiring-reference.png"
  width="80%"
  caption="Wiring reference"
/>

2. After powering our board, we have ready and running our voice-controlled lamp, I’ve created a custom 3D enclosure for this project, but you can buy yours in our store.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/15.power-source.png"
  width="80%"
  caption="Powering the board using a battery or USB"
/>


<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/16.lamp-setup.png"
  width="80%"
  caption="Use case setup using Edge Impulse"
/>

:::tip 📝 NOTE
The WisBlock board will turn on the blue LED when hears the trigger word “Hey RAKstar”, and will turn it off and turn on the green LED when it hears ***Lights On***, the opposite will occur when it hears ***Lights Off***.
:::


## Using Cyberon

Cyberon is a pro tool, and no need to create the model because RAK supplies it with better quality and robustness. You can also request to create custom models for you for a fee.

To test the project using Cyberon, you only need to flash the core with a simple Arduino code with the trained model. Also, use a certified core to utilize Cyberon that you can find in RAK store (Voice processing variant):

- [RAK4631 Voice Processing](https://store.rakwireless.com/products/rak4631-lpwan-node?variant=42402017149126?utm_source=WisBlockRAK4631&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK11200-C](https://store.rakwireless.com/products/wiscore-esp32-module-rak11200?variant=42402030452934?utm_source=WisBlockRAK11200&utm_medium=Document&utm_campaign=BuyFromStore)


And the same hardware is used:
- A base board
- A microphone
- A relay module


### Code

1. First, install the [**RAKwireless Audio Library**](https://github.com/RAKWireless/RAKwireless-Audio-library).
2. Download the code from the [GitHub repository](https://github.com/mcmchris/voice-controlled-lamp).
3. Open the **Voice-lamp-Cyberon** folder with the Arduino IDE.


<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/17.open-folder.png"
  width="80%"
  caption="Opening the Voice-lamp-Cyberon folder"
/>

4. This example code is considering the **Trigger** word **Hey RAKstar** and the command words **Lights On** and **Lights Off**. Using these keywords was as easy as defining a simple logic in the code as shown below:


```c
if(nID == 2002){ // if the ID of the command corresponds to "Lights On"
  digitalWrite(LED_GREEN, HIGH);
  digitalWrite(RELAY_PIN, HIGH);
}else if(nID == 2003){ // if the ID of the command corresponds to "Lights Off"
  digitalWrite(LED_GREEN, LOW);
  digitalWrite(RELAY_PIN, LOW);
}
```


:::tip 📝 NOTE
- When the code starts running for the first time in the serial monitor, you can see the variety of commands you can use, take their IDs and modify the code as you like.
- The code of this tutorial is based on an example from our Audio Library called **VoiceRecognitionL1**.
:::


5. Connect your WisBlock board to your PC through USB, select the right board and COM port in the Arduino IDE, and click **Upload**.


<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/18.connect.png"
  width="80%"
  caption="Connecting WisBlock to PC thru USB"
/>

### Testing

No need to change anything in the wiring or hardware setup. After the code is uploaded, the project is ready to be tested, in this case, using Cyberon.


<rk-img
  src="/assets/images/knowledge-hub/learn/voice-controlled-lamp/19.use-case.png"
  width="80%"
  caption="Use case setup using Cyberon"
/>

:::tip 📝 NOTE
The WisBlock board will turn on the blue LED when hears the trigger word **Hey RAKstar**. It will keep it on and turn on the green LED when it hears **Lights On**. To be able to say the trigger word again, you need to wait for the blue LED to turn off after +-3 seconds.
:::


As you can see, everything works accurately, with no false triggers and without having to get deep into Machine learning algorithms.

Thus, it is a great option for creating stable and reliable voice-controlled applications.
