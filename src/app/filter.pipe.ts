import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string, propName: string): any[] {
    const result: any = [];

    if (!value || filterString === '' || propName === '') {
      return value;
    }
    value.forEach((a: any) => {
      if (
        a[propName].trim().toLowerCase().includes(filterString.toLowerCase())
      ) {
        result.push(a);
      }
    });
    // if (!args) return value;

    // args = args.toLowerCase();
    // return value.Filter(function (Product: any) {
    //   return JSON.stringify(Product).toLowerCase().includes(args);
    // });
    return result;
  }
}
