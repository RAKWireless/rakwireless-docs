## RUI UART Send

```c
RUI_RETURN_STATUS rui_uart_send(RUI_UART_DEF uart_def, uint8_t *pdata, uint16_t len)
```

| **@brief**  | This API is used to send data via UART.                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **@return** | [RUI_RETURN_STATUS](../#rui-return-status)                                                                                                                         |
| **@param**  | [RUI_UART_DEF](#rui-uart-def) uart_def : the instance of UART.<br>uint8t \*pdata : the pointer of data you want to send.<br>uint16_t len : the length of the data. |
| **@module** | RAK811, RAK4200, RAK4400, RAK4600, and RAK5010.                                                                                                                    |
