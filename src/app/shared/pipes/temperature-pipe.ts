import { Pipe, PipeTransform } from '@angular/core';

export type TemperatureType = "celsius" | "fahrenheit" | "kelvin";

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {

  transform(temperature: number, source: TemperatureType, destination: TemperatureType): string {

    const unitFormat = destination === "celsius" 
      ? " °C" : destination === "fahrenheit" 
      ? " °F" : " K";

    let result = 0;

    if (source === destination) return temperature + unitFormat;

    switch (source) {

      case "celsius":

        switch (destination) {
          case 'fahrenheit':
            result = (temperature * (9 / 5)) + 32;
            break;
          case 'kelvin':
            result = temperature + 273.15;
            break;

        }
        break;

      case "fahrenheit":

        switch (destination) {
          case 'celsius':
            result = (temperature - 32) * 5 / 9;
            break;
          case 'kelvin':
            result = (temperature - 32) * 5 / 9 + 273.15;
            break;
        }
        break;

      case 'kelvin':
        switch (destination) {
          case 'celsius':
            result = temperature - 273.15;
            break;
          case 'fahrenheit':
            result = (temperature - 273.15) * (9/5) + 32;
            break;
        }
        break;
    }

    return result.toFixed(2) + unitFormat;
  }

}
