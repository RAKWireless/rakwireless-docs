---
rak_desc: RAKwireless Unified Interface (RUI) is the standard interface defined to simplify the firmware development for the ecosystem of the hardware of RAK. RUI defines an API that abstracts the complexity of the hardware layer. Through the RUI API, users can control all the functionalities of the module without the need to deal with the complexity of low-level hardware protocols such as SPI, I2C, etc.
rak_img: /assets/rakwireless/RAK-favicon-blue.png
---

# RUI Interface General Format

This part support all module with BSP API.

## General Format

**rui\_"Interface Type"\_xxx()**

## General Definition

### RUI_UART_DEF

```c
typedef enum RUI_UART_DEF
{
	RUI_UART0 = 0,
	RUI_UART1 = 1,
	RUI_UART2 = 2,
	RUI_UART3 = 3
}RUI_UART_DEF;
```

### RUI_IF_READ_WRITE

```c
typedef enum RUI_IF_READ_WRITE
{
	RUI_IF_READ = 0,
	RUI_IF_WRITE = 1
}RUI_IF_READ_WRITE;
```

### RUI_I2C_ST

```c
typedef struct RUI_I2C_ST
{
	uint32_t INSTANCE_ID;
	uint32_t PIN_SDA;   // SDA pin num
	uint32_t PIN_SCL;   // SCL pin num
	uint32_t FREQUENCY;
	uint32_t REG_NULL; // if no reg , should be 0xAA
}RUI_I2C_ST;
```

### RUI_I2C_FREQ_ST

```c
typedef enum RUI_I2C_FREQ_ST
{
	RUI_I2C_FREQ_100K,
	RUI_I2C_FREQ_400K
}RUI_I2C_FREQ_ST;
```

### RUI_SPI_ST

```c
typedef struct
{
	uint32_t INSTANCE_ID;
	uint32_t PIN_CS;   //
	uint32_t PIN_SCL;   //
	uint32_t PIN_MISO;   //
	uint32_t PIN_MOSI;   //
	uint32_t FREQUENCY;
} RUI_SPI_ST;
```

### RUI_SPI_FREQ_ST

```c
typedef enum RUI_SPI_FREQ_ST
{
	RUI_I2C_FREQ_125K,
	RUI_I2C_FREQ_250K,
	RUI_I2C_FREQ_500K,
	RUI_I2C_FREQ_1M,
	RUI_I2C_FREQ_2M,
	RUI_I2C_FREQ_4M,
	RUI_I2C_FREQ_8M
}RUI_SPI_FREQ_ST;
```

### RUI_GPIO_PIN_DIR_ST

```c
typedef enum
{
	RUI_GPIO_PIN_DIR_INPUT, // Input.
	RUI_GPIO_PIN_DIR_OUTPUT // Output.
} RUI_GPIO_PIN_DIR_ST;
```

### RUI_GPIO_PIN_PULL_ST

```c
typedef enum
{
	RUI_GPIO_PIN_NOPULL,   //  Pin pull-up resistor disabled.
	RUI_GPIO_PIN_PULLDOWN, //  Pin pull-down resistor enabled.
	RUI_GPIO_PIN_PULLUP    //  Pin pull-up resistor enabled.
} RUI_GPIO_PIN_PULL_ST;
```

### RUI_GPIO_INTERRUPT_EDGE

```c
typedef enum
{
    RUI_GPIO_EDGE_RAISE,
    RUI_GPIO_EDGE_FALL,
    RUI_GPIO_EDGE_FALL_RAISE
} RUI_GPIO_INTERRUPT_EDGE;
```

### RUI_GPIO_INTERRUPT_PRIORITY

```c
typedef enum
{
    RUI_GPIO_IRQ_HIGH_PRIORITY,
    RUI_GPIO_IRQ_NORMAL_PRIORITY,
    RUI_GPIO_IRQ_LOW_PRIORITY,
} RUI_GPIO_INTERRUPT_PRIORITY;
```

### RUI_GPIO_ST

```c
typedef struct
{
	uint32_t pin_num;
	RUI_GPIO_PIN_DIR_ST dir;
	RUI_GPIO_PIN_PULL_ST pull;
}RUI_GPIO_ST;
```

### RUI_TIMER_MODE_ST

```c
typedef enum
{
	RUI_TIMER_MODE_SINGLE_SHOT,     /**< The timer will expire only once. */
	RUI_TIMER_MODE_REPEATED        /**< The timer will restart each time it expires. */
} RUI_TIMER_MODE_ST;
```

### RUI_TIMER_ST

```c
typedef void (* TIMER_CALLBACK) (void);

typedef struct{
	uint32_t timeout_ms;
	RUI_TIMER_MODE_ST timer_mode;
	TIMER_CALLBACK timer_callback;
}RUI_TIMER_ST;
```

### RUI_FLASH_MOD

```c
typedef enum
{
    RUI_FLASH_USER = 0,                  // a region for user , less than 128 bytes
    RUI_FLASH_ORIGIN              //inner struct region , advise not modify it
}RUI_FLASH_MODE;
```

!!!include(RUI/rui-interface-general-format/rui-uart-init.md)!!!
!!!include(RUI/rui-interface-general-format/rui-uart-uninit.md)!!!
!!!include(RUI/rui-interface-general-format/rui-uart-send.md)!!!
!!!include(RUI/rui-interface-general-format/rui-uart-receive.md)!!!
!!!include(RUI/rui-interface-general-format/rui-uart-config-mode.md)!!!

!!!include(RUI/rui-interface-general-format/rui-gpio-init.md)!!!
!!!include(RUI/rui-interface-general-format/rui-gpio-uninit.md)!!!
!!!include(RUI/rui-interface-general-format/rui-gpio-rw.md)!!!
!!!include(RUI/rui-interface-general-format/rui-gpio-interrupt.md)!!!

!!!include(RUI/rui-interface-general-format/rui-timer-init.md)!!!
!!!include(RUI/rui-interface-general-format/rui-timer-uninit.md)!!!
!!!include(RUI/rui-interface-general-format/rui-timer-setval.md)!!!
!!!include(RUI/rui-interface-general-format/rui-timer-start.md)!!!
!!!include(RUI/rui-interface-general-format/rui-timer-stop.md)!!!

!!!include(RUI/rui-interface-general-format/rui-adc-init.md)!!!
!!!include(RUI/rui-interface-general-format/rui-adc-uninit.md)!!!
!!!include(RUI/rui-interface-general-format/rui-adc-read.md)!!!

!!!include(RUI/rui-interface-general-format/rui-i2c-init.md)!!!
!!!include(RUI/rui-interface-general-format/rui-i2c-rw.md)!!!

!!!include(RUI/rui-interface-general-format/rui-spi-init.md)!!!
!!!include(RUI/rui-interface-general-format/rui-spi-rw.md)!!!

!!!include(RUI/rui-interface-general-format/rui-pwm-init.md)!!!
!!!include(RUI/rui-interface-general-format/rui-pwm-start.md)!!!
!!!include(RUI/rui-interface-general-format/rui-pwm-stop.md)!!!

!!!include(RUI/rui-interface-general-format/rui-delay-ms.md)!!!
!!!include(RUI/rui-interface-general-format/rui-delay-us.md)!!!

!!!include(RUI/rui-interface-general-format/rui-init-system.md)!!!
!!!include(RUI/rui-interface-general-format/rui-running.md)!!!
!!!include(RUI/rui-interface-general-format/rui-print-log.md)!!!

!!!include(RUI/rui-interface-general-format/rui-flash-write.md)!!!
!!!include(RUI/rui-interface-general-format/rui-flash-read.md)!!!

!!!include(RUI/rui-interface-general-format/rui-at-response.md)!!!
