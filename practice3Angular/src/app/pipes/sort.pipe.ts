import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from '../interfaces/country';
import { countryFromUrl } from '../interfaces/countryFromUrl.interface';

export type sortDir = "ascending" | "descending";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(countries: ICountry[], order:sortDir): ICountry[] {
    const asc = (a:ICountry, b:ICountry) => a.name.localeCompare(b.name);
    const desc = (a:ICountry, b:ICountry) => b.name.localeCompare(a.name);
    return [...countries].sort(order==="ascending" ? asc:desc);
  }

}
