::: tip 📝 NOTE    
NFC API calls are only available on the RAK4630 WisDuo module.    
:::


# Functions

* void [begin](#begin)()
* void [write](#write)(uint8_t const *code, uint32_t code_size, uint8_t const *payload, uint32_t payload_size)
* void [start](#start)()


## begin

```c
api.nfc.begin();
```

| **Function**   | `void begin()` |
| -------------- | -------------- |
| **Parameters** |                |
| **Return**     |                |

## write

```c
api.nfc.write(code, payload);
```

| **Function**   | `void write(uint8_t const * code, uint32_t code_size, uint8_t const * payload, uint32_t payload_size)` |
| -------------- | ------------------------------------------------------------------------------------------------------ |
| **Parameters** | &#x2022; code <br> &#x2022; payload                                                                                  |
| **Return**     |                                                                                                        |

## start

```c
api.nfc.start();	
```

| **Function**   | `void start()` |
| -------------- | -------------- |
| **Parameters** |                |
| **Return**     |                |
