## RUI SPI Read/Write

```c
RUI_RETURN_STATUS rui_spi_rw(RUI_IF_READ_WRITE rw, uint8_t *tx, uint16_t tx_len, uint8_t *rx, uint16_t rx_len);
```

| **@brief**  | This API is used to read/write through SPI.                                                                                                                                                                           |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@return** | [RUI_RETURN_STATUS](../#rui-return-status)                                                                                                                                                                            |
| **@param**  | [RUI_IF_READ_WRITE](#rui-if-read-write) rw: read or write through SPI.<br><br>uint8_t \*tx: write through SPI.<br><br>uint16_t tx_len: TX length<br><br>uint8_t \*rx: read buffer.<br><br>uint16_t rx_len: RX length. |
| **@module** | RAK4400, RAK4600 and RAK5010.                                                                                                                                                                                         |
