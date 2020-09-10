## RUI UART Receive

```c
void rui_uart_recv(RUI_UART_DEF uart_def, uint8_t *pdata, uint16_t len)
```

| **@brief**  | This API is used to receive data from UART.                                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@return** | NULL                                                                                                                                                                   |
| **@param**  | [RUI_UART_DEF](#rui-uart-def) uart_def : the instance of UART.<br>uint8_t \*pdata : the pointer of data.<br>uint16_t len : the length of data. This value is always 1. |
| **@module** | RAK811, RAK4200, RAK4400, RAK4600, and RAK5010.                                                                                                                        |
