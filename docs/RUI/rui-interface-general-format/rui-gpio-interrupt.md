## RUI GPIO Interrupt

```c
typedef void (*interrupt_callback)(void);
RUI_RETURN_STATUS rui_gpio_interrupt(bool control, RUI_GPIO_ST st, RUI_GPIO_INTERRUPT_EDGE edge, RUI_GPIO_INTERRUPT_PRIORITY pro,calback callback);
```

| **@brief**  | This API is used to register external GPIO, it may lead to power current increase. e.g 130 µA in Nordic platform.                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@return** | [RUI_RETURN_STATUS](../#rui-return-status)                                                                                                              |
| **@param**  | bool control: true or false, use it or not.<br><br>[RUI_GPIO_ST](#rui-gpio-st) pro: priority for interrupt<br><br>calback callback: interrupt callback. |
| **@module** | RAK811, RAK4200, RAK4400, RAK4600, RAK5010 and RAK8212-M.                                                                                               |
