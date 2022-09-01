import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strength',
})
export class StrengthPipe implements PipeTransform {
  transform(value: number) {
    if (value < 10) {
      return `${value} is Weak`;
    } else if (value >= 10 && value < 20) {
      return `${value} is Strong`;
    } else {
      return `${value} is Strongest`;
    }
  }
}
