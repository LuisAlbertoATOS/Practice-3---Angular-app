import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { countryFromUrl } from '../interfaces/countryFromUrl.interface';

export type sortDir = "asc" | "desc";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(countries: countryFromUrl[]): countryFromUrl[] {
    console.log(countries);
    return countries;
    // return [...countries].sort((a,b) => a.name.official.localeCompare(b.name.official));
  }

}
