## RUI Device Sleep

```c
typedef void (*sensor_wakeup)(void);

typedef void (*sensor_sleep)(void);

RUI_RETURN_STATUS rui_sensor_register_callback(sensor_wakeup callback1,sensor_sleep callback2);

RUI_RETURN_STATUS rui_device_sleep(uint32_t on);
```

| **@brief**  | This API is used to set the device to sleep mode.                                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@return** | NULL                                                                                                                                               |
| **@param**  | uint32_t on/off: on/off<br><br> sensor_wakeup, sensor_sleep: app callback, user can add sensor operation here to finish function and power control |
| **@module** | RAK811, RAK4200, RAK8212-M, RAK5010, 4400 and RAK4600 core module                                                                                  |
