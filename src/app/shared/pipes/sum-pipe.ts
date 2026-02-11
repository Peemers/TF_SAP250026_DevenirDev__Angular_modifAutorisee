import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
})
export class SumPipe implements PipeTransform {

  transform(values: number[], initialValue: number): number {
    return values.reduce((value, acc) => acc + value, initialValue);
  }

}
