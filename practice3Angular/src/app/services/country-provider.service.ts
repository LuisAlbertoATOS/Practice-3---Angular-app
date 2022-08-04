import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { countryFromUrl } from '../interfaces/countryFromUrl.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryProviderService {
  url:string = 'https://restcountries.com/v3.1/all';

  constructor(private readonly http:HttpClient) { }

  ngOnInit(): void {
  }  
  
  getCountries():Observable<countryFromUrl[]>{
    return this.http.get<countryFromUrl[]>(this.url);
  }


  
}
