import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomNum',
})
export class RandomNumPipe implements PipeTransform {
  transform(value: number = 7, args: [number] = [4]): number {
    if (args.length < 1) return Math.floor(Math.random() * value);
    if (args.length > 1) return 0;
    return Math.floor(Math.random() * (value - args[0])) + args[0];
  }
}
