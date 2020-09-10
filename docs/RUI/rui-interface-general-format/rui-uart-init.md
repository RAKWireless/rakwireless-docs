## RUI UART Initialize

```c
RUI_RETURN_STATUS rui_uart_init(RUI_UART_DEF uart_def,RUI_UART_BAUDRATE baudrate);
```

| **@brief**  | This API is used to configure the parameters for UART.                                                               |
| ----------- | -------------------------------------------------------------------------------------------------------------------- |
| **@return** | [RUI_RETURN_STATUS](../#rui-return-status)                                                                           |
| **@param**  | [RUI_UART_DEF](#rui-uart-def) uart_def:the instance of UART.<br><br> RUI_UART_BAUDRATE baudrate: UART baudrate value |
| **@module** | RAK811, RAK4200, RAK4400, RAK4600, and RAK5010.                                                                      |
