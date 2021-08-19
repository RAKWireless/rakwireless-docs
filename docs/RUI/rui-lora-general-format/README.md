---
rak_desc: RAKwireless Unified Interface (RUI) is the standard interface defined to simplify the firmware development for the ecosystem of the hardware of RAK. RUI defines an API that abstracts the complexity of the hardware layer. Through the RUI API, users can control all the functionalities of the module without the need to deal with the complexity of low-level hardware protocols such as SPI, I2C, etc.
rak_img: /assets/rakwireless/RAK-favicon-blue.png
---

# RUI LoRa General Format

## General Format

```c
rui_lora_xxx()
```
---

## General Definition

### LORA_JOIN_MODE

```c
typedef enum LORA_JOIN_MODE
{
    RUI_OTAA = 0,
    RUI_ABP
}LORA_JOIN_MODE;
```
### LORA_CLASS_MODE

```c
typedef enum LORA_CLASS_MODE
{
    CLASS_A = 0,
    CLASS_B,
    CLASS_C
}LORA_CLASS_MODE;
```

### LORA_WORK_MODE

```c
typedef enum LORA_WORK_MODE
{
    RUI_LORAWAN = 0,
    RUI_P2P,
    RUI_TESTMODE
}LORA_WORK_MODE;
```

### LORA_REGION

```c
typedef enum LORA_REGION
{
    AS923,
    AU915,
    CN470,
    CN779,
    EU433,
    EU868,
    KR920,
    IN865,
    US915,
    US915_Hybrid
}LORA_REGION;
```

### RUI_LORA_STATUS

```c
typedef struct RUI_LORA_STATUS
{
    uint32_t dev_addr;
    uint8_t dev_eui[8];
    uint8_t app_eui[8];
    uint8_t app_key[16];
    uint8_t nwks_key[16];
    uint8_t apps_key[16];
    RUI_LORA_WORK_MODE work_mode;
    RUI_LORA_CLASS_MODE class_status;
    RUI_LORA_JOIN_MODE join_mode;
    uint8_t lora_dr;
    uint8_t confirm;
    uint16_t lorasend_interval;
    uint8_t autosend_status;
    bool IsJoined;
    bool AdrEnable;
    uint8_t region[5]; //region string e.g:"EU868"
}RUI_LORA_STATUS_T;
```

### RUI_LORA_AUTO_SEND_MODE

```c
typedef enum RUI_LORA_AUTO_SEND_MODE
{
    RUI_AUTO_DISABLE=0,     // Disable lora auto send.    RUI_AUTO_ENABLE_SLEEP,  // Enable lora auto send, sleep when the system is idle.
    RUI_AUTO_ENABLE_NORMAL  // Enable lora auto send, runs normally when the system is idle.
}RUI_LORA_AUTO_SEND_MODE;
```
---

## RUI LoRa Join

```c
RUI_RETURN_STATUS rui_lora_join(void);
```

| @brief | rui_lora_join       join to server | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | void | 
| **@module** | RAK811, RAK4200, and RAK4600 core module | 

---

## RUI LoRa Send

```c
RUI_RETURN_STATUS rui_lora_send(uint8_t port,uint8_t* data,uint8_t len)
```

| @brief | rui_lora send | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | __uint8_t port__: send data port <br> __uint8_t* data__: send data string <br> __uint8_t len__: send data length | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. | 

---

## RUI LoRa Register Receive Callback

```c
typdef void (*lora_receive)(uint8_t *data);
RUI_RETURN_STATUS rui_lora_register_recv_callback(lora_receive callback)
```

| @brief | This API is used to register a callback function for LoRa in application, so that application can receive the LoRa data automatically. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | **lora_receive callback**: the callback function for receiving LoRa data | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. |

---

## RUI LoRa Set Device Mode

```c
RUI_RETURN_STATUS rui_lora_set_device_mode(DRIVER_MODE mode)
```

| @brief | This API is used to set the work mode of LoRa module. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a>| 
| **@param** | <a href="/RUI/#driver-mode.html" target="blank">DRIVER_MODE</a> mode: lora peripheral work mode | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. |

---

## RUI LoRa Set Device EUI

```c
RUI_RETURN_STATUS rui_lora_set_dev_eui(uint8_t *dev_eui)
```

| @brief | This API is used to set the device EUI for LoRaWAN OTAA mode | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | __uint8_t* dev eui__: the device EUI. | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. |

---

## RUI LoRa Set Application EUI

```c
RUI_RETURN_STATUS rui_lora_set_app_eui(uint8_t *app_eui)
```

| @brief | This API is used to set the application EUI for LoRaWAN OTAA mode. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | __uint8_t *app eui__: the application EUI. | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. | 


---

## RUI LoRa Set Application Key

```c
RUI_RETURN_STATUS rui_lora_set_app_key(uint8_t *app_key)
```

| @brief | This API is used to set the application key for LoRaWAN OTAA mode. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | __uint8_t *app key__: the application key. | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. |

---

## RUI LoRa Set Device Address

```c
RUI_RETURN_STATUS rui_lora_set_dev_addr(uint8_t *dev_addr)
```

| @brief | This API is used to set the device address for LoRaWAN ABP mode. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | __uint8_t *dev addr__: the device address. | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. |

---

## RUI LoRa Set Application Session Key

```c
RUI_RETURN_STATUS rui_lora_set_apps_key(uint8_t *apps_key)
```

| @brief | This API is used to set the application session key for LoRaWAN ABP mode. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | __uint8_t *apps key__: the application session key. | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. |

---

## RUI LoRa Set Network Session Key

```c
RUI_RETURN_STATUS rui_lora_set_nwks_key(uint8_t *nwks_key)
```

| @brief | This API is used to set the network session key for LoRaWAN ABP mode. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | __uint8_t *nwks key__: the network session key. | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. | 

---

## RUI LoRa Set Channel Mask

```c
RUI_RETURN_STATUS rui_lora_set_channel_mask(uint8_t channel, uint8_t on_off)
```

| @brief | This API is used to turn a certain channel on or off. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | **uint8_t channel**: the channel number you want to set. <br> **uint8_t on_off**: turn on or turn off. | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. |

---

## RUI LoRa Class

```c
RUI_RETURN_STATUS rui_lora_set_class(LORA_CLASS_MODE class)
```

| @brief | This API is used to set the LoRaWAN Class | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | <a href="/RUI/rui-lora-general-format/#lora-class-mode.html" target="blank">LORA_CLASS_MODE</a> class: Class A, Class B, or Class C. | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. | 

---

## RUI LoRa Set Confirm

```c
RUI_RETURN_STATUS rui_lora_set_confirm(bool is_confirm);
```

| **@brief** | This API is used to set the send confirm. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | **bool is_confirm**: true-confirm, false-unconfirm. | 
| **@module** | RAK811, RAK4200, and RAK4600 core module | 

---

## RUI LoRa Set ADR

```c
RUI_RETURN_STATUS rui_lora_set_adr(bool is_enable)
```

| **@brief** | This API is used to set the ADR for LoRa Node | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | **bool is_enable**: true-enable, false, disable | 
| **@module** | RAK811, RAK4200, and RAK4600 core module | 

---

## RUI LoRa Set DR

```c
RUI_RETURN_STATUS rui_lora_set_dr(uint8_t dr);
```

| @brief | This API is used to set the DR for LoRa node. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | **uint8_t dr**: the value of DR | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. |

---

## RUI LoRa Set Join Mode

```c
RUI_RETURN_STATUS rui_lora_set_join_mode(LORA_JOIN_MODE mode)
```

| @brief | This API is used to set the join mode of LoRaWAN. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | <a href="/RUI/rui-lora-general-format/#lora-join-mode.html" target="blank">LORA_JOIN_MODE</a> mode: OTAA or ABP | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. | 

---

## RUI LoRa Set Work Mode

```c
RUI_RETURN_STATUS rui_lora_set_work_mode(LORA_WORK_MODE mode)
```

| @brief | This API is used to set the work mode of LoRa module. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | <a href="/RUI/rui-lora-general-format/#lora-work-mode.html" target="blank">LORA_WORK_MODE</a> mode: LaRaWAN, P2P, or Test mode. | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. |

---

## RUI LoRa Set Send Interval

```c
RUI_RETURN_STATUS
rui_lora_set_send_interval(RUI_LORA_AUTO_SEND_MODE mode,uint16_t interval_time);
```

| @brief | This API is used to set the interval time of sending data. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | <a href="/RUI/rui-lora-general-format/#rui-lora-auto-send-mode.html" target="blank">RUI_LORA_AUTO_SEND_MODE</a> mode: lora auto send mode, refer to RUI. <br> **uint16_t app_interval**:  the interval time of sending data. (unit: **s**) | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. | 

---

## RUI LoRa Region Convert

```c
LORA_REGION rui_lora_region_convert(uint8_t *p_buf);
```

| @brief | This API is used to convert region from string to LORA_REGION enum. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/rui-lora-general-format/#lora-region.html" target="blank">LORA_REGION</a> value | 
| **@param** | __uint8_t *p_buf__: the pointer of region string. | 
| **@module** | RAK811, RAK4200, and RAK4600 core module | 

---

## RUI LoRa Set Region

```c
RUI_RETURN_STATUS rui_lora_set_region(LORA_REGION region)
```

| @brief | This API is used to set the region of LoRaWAN you want it to work in. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | <a href="/RUI/rui-lora-general-format/#lora-region.html" target="blank">LORA_REGION</a> region: the region of LoRaWAN. | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. | 

---

## RUI LoRa Get Status

```c
RUI_RETURN_STATUS rui_lora_get_status(bool IsPrint,RUI_LORA_STATUS_T *status);
```

| @brief | This API is used to get all status about LoRa. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | **bool IsPrint**: whether print parameters through serial <br> <a href="/RUI/rui-lora-general-format/#rui-lora-status.html" target="blank">RUI_LORA_STATUS_T</a> *status: the status about LoRa | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. | 

---

## RUI LoRa Channel List

```c
RUI_RETURN_STATUS rui_get_channel_list(void);
```

| @brief | This API is used to print all channel list about LoRa. | 
| ---- | ---- | 
| **@return**     | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | NULL | 
| **@module** | RAK811, RAK4200, and RAK4600 core module | 


---

## RUI LoRa Autosend Callback

```c
void rui_lora_autosend_callback(void);
```

| @brief | This API is auto send data timeout callback by LoRa. | 
| ---- | ---- | 
| **@return** | none | 
| **@param** | none | 
| **@module** | RAK811, RAK4200, RAK7200, and RAK4600 core module. |

---

## RUI LoRa P2P Config

```c
RUI_RETURN_STATUS rui_lorap2p_config(uint32_t Frequency,uint8_t  Spreadfact,uint8_t  Bandwidth,uint8_t  Codingrate,uint16_t  Preamlen,uint8_t  Powerdbm);
```

| @brief | This API is used to config LoRaP2P parameters. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | **Frequency**: Frequency in Hz <br> **Spreadfact**:  Spreadfactare limited to the 6-12 range <br> **Bandwidth**: Bandwidth limited to the 0-2 range <br> **Codingrate**: Codingrate limited to the 1-4 range <br> **Preamlen**: Preamlen limited to the 2-66535 range <br> **Powerdbm**: Powerdbm limited to the 0-20 range. | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. | 

---

## RUI LoRa P2P Send

```c
RUI_RETURN_STATUS rui_lorap2p_send(uint8_t* data,uint16_t len);
```

| @brief | This API is used to send data by LoRaP2P mode. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | **data**: data package <br> **len**: data size | 
| **@module** | RAK811, RAK4200, and RAK4600 core module | 

---

## RUI LoRa P2P Register Receive Callback

```c
typedef void (*lorap2p_receive)(RUI_LORAP2P_RECEIVE_T *data);
RUI_RETURN_STATUS rui_lorap2p_register_recv_callback(lorap2p_receive callback);
```

| @brief | This API is used to register a callback function for LoRaP2P, so that applicationcan receive the LoRap2p data automatically | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | **lora_receive callback**:  the callback function for receiving LoRaP2P data | 
| **@module** | RAK811, RAK4200, and RAK4600 core module | 

---

## RUI LoRajoin Register Callback

```c
typedef void (*lorajoin)(uint32_t status);
RUI_RETURN_STATUS rui_lorajoin_register_callback(lorajoin callback);
```

| @brief | This API is used to register a callback function for LoRaWAN join, so that application can start LoRaWAN function. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | **lorajoin callback**: the callback function for LoRaWAN join successed. <br> **status**: 1 -> join succeed, 0 -> join fail. | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. | 

---

## RUI LoRasend Complete Register Callback

```c
typedef void (*lorasend)(RUI_MCPS_T type);
RUI_RETURN_STATUS rui_lorasend_complete_register_callback(lorasend callback);
```

| @brief | This API is used to register a callback function for LoRaWAN send complete,so that application can start LoRaWAN function. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | **lorasend callback**: the callback function. <br> **RUI_MCPS_T type**: the packet type | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. | 

---

## RUI LoRa Set TX Power

```c
RUI_RETURN_STATUS rui_lora_set_tx_power(uint8_t power_value);
```

| @brief | This API is used to set  lora sending power | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | **uint8_t power_value** <range:0~15 according thr region> | 
| **@module** | RAK811, RAK4200, and RAK4600 core module. | 

---

## RUI LoRa Get DR

```c
RUI_RETURN_STATUS rui_lora_get_dr(uint8_t* dr, uint16_t* lengthM)
```

| **@brief** | This API is used to get current Data rate and Payload Size | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | __uint8_t* dr__: current DR <br> __uint16_t* lengthM__: Maximum Acceptable size | 
| **@module** | RAK811, RAK4200, and RAK4600 core module | 

