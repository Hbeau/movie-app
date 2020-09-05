import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: object[], key: string, order: 'ASC' | 'DESC' = 'ASC'): object[] {
    return value.sort((a, b) => {
      if (order === 'ASC') {
        return a[key] < b[key] ? -1 : 1;
      } else if (order === 'DESC') {
        return a[key] > b[key] ? -1 : 1;
      } else {
        throw Error('No valid order');
      }
    })
  }

}
