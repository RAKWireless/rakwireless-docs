# Watchdog

:::warning ⚠️ WARNING
With RUI3 version V4.1.1, the watchdog cannot be disabled. It will stay active until a power cycle of the device is performed.
:::

## enable

### enable()

Initialize the watchdog

```c
api.system.wdt.enable(reload_value);
```

| **Function**   | `void enable(int reload_value)`                                                                                                                                                                   |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Parameters** | Setting the reload value, only accept following values: 15&nbsp;ms, 30&nbsp;ms, 60&nbsp;ms, 120&nbsp;ms, 250&nbsp;ms, 500&nbsp;ms, 1&nbsp;s, 2&nbsp;s, 4&nbsp;s, and 8&nbsp;s, Units:milliseconds |
| **Returns**    | void                                                                                                                                                                                              |

::: details Click to View Example
```c{2,3}
void setup() {
  api.system.wdt.enable(8000); //8 seconds for watchdog to feed, otherwise reset occurs.
}

void loop() {
  api.system.wdt.reset();
  delay(5000);
}
```
:::

### reset()

Reset the watchdog Timer

```c
api.system.wdt.reset();
```

| **Function** | `void reset(void)` |
|--------------|--------------------|
| **Returns**  | void               |

::: details Click to View Example
```c{6}
void setup() {
  api.system.wdt.enable(8000); //8 seconds for watchdog to feed, otherwise reset occurs.
}

void loop() {
  api.system.wdt.reset();
  delay(5000);
}
```
:::
