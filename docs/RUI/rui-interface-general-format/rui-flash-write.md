## RUI Flash Write

```c
RUI_RETURN_STATUS rui_flash_write(RUI_FLASH_MODE mode, uint8_t *str, uint32_t len);
```

| **@brief**  | This API is used to write user data to flash                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **@return** | [RUI_RETURN_STATUS](../#rui-return-status)                                                                                           |
| **@param**  | uint8_t \*str<br><br> uint32_t len: For STM Series (RAK811/RAK4200/RAK4270) - Max 128 Bytes. For Nordic Series (RAK8212/RAK5010/RAK4600) - Max 64KB<br><br>[RUI_FLASH_MODE](#rui-flash-mode) mode: user data or origin data |
| **@module** | RAK811, RAK4200, RAK4400, RAK4600, RAK5010 and RAK8212-M.                                                                            |
