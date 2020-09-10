## RUI I2C Read/Write

```c
RUI_RETURN_STATUS rui_i2c_rw(RUI_I2C_ST *rui_i2c, uint8_t devAddr, uint16_t regAddr, uint8_t* data, uint16_t len)
```

| **@brief**  | This API is used to Read/Write Through I2C.                                                                                                                                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@return** | [RUI_RETURN_STATUS](../#rui-return-status)                                                                                                                                                                                                                             |
| **@param**  | RUI_I2C_ST \*rui_i2c: init parameters struct. uint8_t devAddr: device address in HEX Format. uint16_t regAddr: the sensor's register address in HEX Format. uint8_t \*data: the data output or data to be written through I2C. uint16_t len : the data length in byte. |
| **@module** | RAK811, RAK4200, RAK4400, RAK4600, and RAK5010.                                                                                                                                                                                                                        |
