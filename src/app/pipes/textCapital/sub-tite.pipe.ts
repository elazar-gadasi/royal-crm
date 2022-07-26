import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCapital',
})
export class textCapitalPipe implements PipeTransform {
  transform(value: string): string {
    const text = value.trim();
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
}
