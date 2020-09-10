## RUI Timer Initialize

```c
RUI_RETURN_STATUS rui_timer_init(void *obj, void ( *callback )( void ));
```

| **@brief**  | This API is used to create/initialize a timer.                                        |
| ----------- | ------------------------------------------------------------------------------------- |
| **@return** | [RUI_RETURN_STATUS](../#rui-return-status)                                            |
| **@param**  | void \*obj : timer instance<br>void (\*callback)(void): timer event callback function |
| **@module** | RAK811, RAK4200, RAK4400, RAK4600, RAK5010 and RAK8212-M.                             |
