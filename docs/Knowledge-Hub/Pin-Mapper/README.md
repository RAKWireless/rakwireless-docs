---
sidebar: false
header:
    title: WisBlock IO Pin Mapping Tool
    caption: This tool helps in properly mapping your WisBlock modules by identifying the compatible pins and their possible conflicts.
rak_desc: RAKwireless presents the WisBlock Pin Mapper—a tool that will aid you in identifying both compatible pins and not with the other WisBlock modules. Choose the WisBlock you have, and the Pin Mapper generates an IO mapping table for you.
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
---

# How to Use the Pin Mapper

---

<br>

1. Download and save the Pin Mapper in **`.xlsx`** format, and then open it in **Microsoft Excel**.


<rk-btn
  src="https://downloads.rakwireless.com/LoRa/WisBlock/Pin-Mapper/WisBlock-IO-Pin-Mapper.xlsx"
  label="Download Pin Mapper"
  size="1.5rem"
  _blank
/>

:::tip 📝 NOTE
Using other spreadsheet applications such as Libre Office and Open Office might not be able to export the cell format and equations correctly.
:::


<br>


2. Select the WisBlock module/s from the dropdown list. The WisBase and WisCore are required fields.

<rk-img
  src="/assets/images/knowledge-hub/pin-mapper/1.select-wisbase.png"
  width="100%"
  caption="Select WisBase"
/>

<rk-img
  src="/assets/images/knowledge-hub/pin-mapper/2.select-wiscore.png"
  width="100%"
  caption="Select WisCore"
/>

3. Choose **NA** for those slots that are not applicable or for those slots that you will not use.

<rk-img
  src="/assets/images/knowledge-hub/pin-mapper/3.not-available.png"
  width="100%"
  caption="NA for unused slots"
/>


The mapper will only reflect pin compatibility data of slots available with the chosen WisBase.

:::tip 📝 NOTE

Pinouts highlighted in yellow might cause conflicts.

:::

- **Example 1**: Board options were selected for both WisIO slots 1 and 2, but the tool didn’t show pin mapping compatibility info because RAK5005-O has one WisIO slot only.

<rk-img
  src="/assets/images/knowledge-hub/pin-mapper/4.example-1.png"
  width="100%"
  caption="One WisIO slot"
/>

- **Example 2**: Options were selected for both WisIO slots 1 and 2, and the tool showed pin mapping compatibility info for both WisIO Board 1 and 2 because RAK19001/19011 has two WisIO slots.

<rk-img
  src="/assets/images/knowledge-hub/pin-mapper/5.example-2.png"
  width="100%"
  caption="Two WisIO slots"
/>
