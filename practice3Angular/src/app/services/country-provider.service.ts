import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { countryFromUrl } from '../interfaces/countryFromUrl.interface';
import { wikipediaInfo } from '../interfaces/wikipediaInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryProviderService {
  url:string = 'https://restcountries.com/v3.1/all';
  wikipediaUrl:string = "https://en.wikipedia.org/api/rest_v1/page/summary/";

  constructor(private readonly http:HttpClient) { }

  ngOnInit(): void {
  }  
  
  getCountries():Observable<countryFromUrl[]>{
    return this.http.get<countryFromUrl[]>(this.url);
  }

  getCountryInfo(countryName:string):Observable<wikipediaInfo>{
    console.log("service accessed");
    return this.http.get<wikipediaInfo>(this.wikipediaUrl + countryName);
  }



}
