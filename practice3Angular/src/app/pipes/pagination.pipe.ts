import { Pipe, PipeTransform } from '@angular/core';
import { ICountry } from '../interfaces/country';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(countryList: Array<ICountry>, limits:[start:number, end:number]): Array<ICountry> {
    const newCountries:Array<ICountry> = [];
    for(let i = limits[0]; i < limits[1] && i < countryList.length; i++){
      const currentcountry = countryList[i];
      newCountries.push(currentcountry);
    }
    return newCountries;
  }

}
