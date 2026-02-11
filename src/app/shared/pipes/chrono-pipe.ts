import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chrono',
})
export class ChronoPipe implements PipeTransform {

  transform(value: number): string {
    let minutes = Math.floor(value / 60);
    let seconds = value % 60;

    let minFormat = minutes < 10 ? "0" + minutes : minutes;
    let secondsFormat = seconds < 10 ? "0" + seconds : seconds;

    return `${minFormat}:${secondsFormat}`;
  }

}
