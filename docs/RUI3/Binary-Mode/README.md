---
lineNumbers: true
---

# API Mode

## send()

This API is used to generate API mode packet.

```c
api.apiMode.send(port, flag, frame_type, payload, length, response_handler);
```

| **Function**   | `void send(RAK_SERIAL_PORT port, uint8_t flag,uint8_t frame_type, uint8_t * payload,uint16_t length,RAK_PROTO_HANDLER response_handler)`                                                                                                                                                                                                                                                             |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters** | **port**	The port this packet is sent to <br> **List:** <br> `RAK_SERIAL_UART0` `RAK_SERIAL_UART1` `RAK_SERIAL_UART2` `RAK_SERIAL_USB0` `RAK_SERIAL_BLE0` <br>**flag**	flag header of API mode protocol <br>**frame_type**	frame type header of API mode protocol <br> **payload**	packet payload <br> **length**	packet length <br> **response_handler**	one-time handler for this API mode request |

::: details Click to View Example
```c{12}
void setup()
{
  Serial2.begin(115200);
  Serial1.begin(115200, RAK_API_MODE);
}

void loop()
{
  //Payload length inside payload 0x0000; Flag 0x00; AT CMD ID 16
  uint8_t buff[] = {0x00, 0x00, 0x00, 0x10};

  api.apiMode.send(RAK_SERIAL_UART1, 0x00, 0x01, buff, 4, NULL);
  delay(1000);
}
```
:::

## registerHandler()

This API is used to register a new frame type for API mode stack.

```c
api.apiMode.registerHandler(frame_type, request_handler);
```

| **Function**   | `int32_t registerHandler	(uint8_t frame_type, RAK_PROTO_HANDLER request_handler)`                                  |
| -------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Parameters** | **frame_type**	frame type header of API mode protocol <br> **request_handler**	request handler for this frame type |


## deregisterHandler()

This API is used to deregister a frame type for API mode stack.

```c
api.apiMode.deregisterHandler(frame_type);
```

| **Function**   | `int32_t deregisterHandler(uint8_t frame_type)`       |
| -------------- | ----------------------------------------------------- |
| **Parameters** | **frame_type**	frame type header of API mode protocol |
