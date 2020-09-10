---
static_root: /assets/images/rui/getting-started
---

# Getting Started

Welcome to the Official Rakwireless Unified Interface (RUI) API. Our API for easy platform integration for your business. You can easily build an IoT Software for your custom hardware IoT blocks in just few minutes!
<!-- 
<rk-img
  :src="`${$frontmatter.static_root}/piopsq3luadbo6ysug2v.jpg`"
  width="100%"
  figure-number="1"
  caption="System Architecture"
/> -->

### Document Guide

In each API, there are 4 sections under it namely:

1. **@brief** - Description on what is the function of that specific API.
2. **@return** - Expected Return Value.
3. **@param** - Accepted Parameters of that API.
4. **@support** - Supported Hardware.

## Global Definition

### RUI_RETURN_STATUS

```c
/* RUI API return value*/

typedef enum{
	RUI_STATUS_OK=0,
 	RUI_STATUS_PARAMETER_INVALID,
 	RUI_STATUS_RW_FLASH_ERROR
 	RUI_STATUS_GPIO_IRQ_DISABLE,
 	RUI_STATUS_BUS_INIT_FAIL,
	RUI_STATUS_TIMER_FAIL,
	RUI_STATUS_IIC_RW_ERROR,
 	RUI_STATUS_UART_SEND_ERROR,
 	RUI_SENSOR_STATUS_OK=20,
 	RUI_BLE_STATUS_OK=40,
 	RUI_BLE_ERROR_INVALID_STATE=41,
	RUI_CELLULAR_STATUS_OK=60,
 	RUI_LORA_STATUS_BUSY=80,
 	RUI_LORA_STATUS_SERVICE_UNKNOWN,
 	RUI_LORA_STATUS_PARAMETER_INVALID,
 	RUI_LORA_STATUS_FREQUENCY_INVALID,
 	RUI_LORA_STATUS_DATARATE_INVALID,
 	RUI_LORA_STATUS_FREQ_AND_DR_INVALID,
 	RUI_LORA_STATUS_NO_NETWORK_JOINED,
 	RUI_LORA_STATUS_LENGTH_ERROR,
 	RUI_LORA_STATUS_DEVICE_OFF,
 	RUI_LORA_STATUS_REGION_NOT_SUPPORTED,
 	RUI_LORA_STATUS_DUTYCYCLE_RESTRICTED,
 	RUI_LORA_STATUS_NO_CHANNEL_FOUND,
 	RUI_LORA_STATUS_NO_FREE_CHANNEL_FOUND
}RUI_RETURN_STATUS;
```

### DRIVER_MODE

```c
typedef enum DRIVER_MODE {
	RUI_NORMAL_MODE = 0,
	RUI_POWER_ON_MODE,
	RUI_POWER_OFF_MODE,
	RUI_SLEEP_MODE,
	RUI_STANDBY_MODE
}DRIVER_MODE;
```
