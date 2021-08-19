---
rak_desc: RAKwireless Unified Interface (RUI) is the standard interface defined to simplify the firmware development for the ecosystem of the hardware of RAK. RUI defines an API that abstracts the complexity of the hardware layer. Through the RUI API, users can control all the functionalities of the module without the need to deal with the complexity of low-level hardware protocols such as SPI, I2C, etc.
rak_img: /assets/rakwireless/RAK-favicon-blue.png
---

# RUI Sensor General Format

## General Format

### GGAData

```c
typedef struct GGAData
{
	uint8_t UTC[4];
	uint8_t Date[3];
	bool LatitudeNS;      		//0:N1:S
	uint8_t LatitudeDegree;
	uint32_t LatitudeMinute;
	double Latitude;
	bool LongitudaEW;			//0:E1:W
	uint8_t LongitudaDegree;
	double Longitude;
	uint32_t LongitudaMinute;
	int Quality;
	int NumSatellities;
	int16_t HDOP;
	int16_t Altitude;
	int16_t GeoidHeight;
}RUI_GGA_Data;
```

!!!include(RUI/rui-sensor-general-format/rui-gps-get.md)!!!
!!!include(RUI/rui-sensor-general-format/rui-gps-set-mode.md)!!!
