import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToDhms',
})
export class ConvertToDhmsPipe implements PipeTransform {

  transform(value: number): string {

    if (value < 0) return value.toString();

    let nbDays = Math.floor(value / 86400);
    value = value % 86400;

    let nbHours = Math.floor(value / 3600);
    value = value % 3600;

    let nbMinutes = Math.floor(value / 60);
    value = value % 60;

    let format = "";

    format += nbDays + " " + (nbDays > 1 ? "jours" : "jour") + ", ";
    format += nbHours + " " + (nbHours > 1 ? "heures" : "heure") + ", ";
    format += nbMinutes + " " + (nbMinutes > 1 ? "minutes" : "minute") + ", ";
    format += value + " " + (value > 1 ? "secondes" : "seconde");

    return format;
  }

}
