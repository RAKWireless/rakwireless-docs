## RUI GPIO Read/Write

```c
RUI_RETURN_STATUS rui_gpio_rw(RUI_IF_READ_WRITE rw_status,RUI_GPIO_ST *rui_gpio,uint8_t* status);
```

| **@brief**  | This API is used to read or set a certain GPIO's Status.                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@return** | [RUI_RETURN_STATUS](../#rui-return-status)                                                                                                                                                  |
| **@param**  | [RUI_IF_READ_WRITE](#rui-if-read-write) \*rui_gpio: the pin number of the GPIO which you want to read or set.<br>uint8_t\* status: the pointer of GPIO Value. 0 : low level, 1: high Level. |
| **@module** | RAK811, RAK4200, RAK4400, RAK4600, RAK5010 and RAK8212-M.                                                                                                                                   |
