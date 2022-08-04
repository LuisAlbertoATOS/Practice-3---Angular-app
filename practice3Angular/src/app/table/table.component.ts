import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Country } from '../interfaces/country';
import { countryFromUrl } from '../interfaces/countryFromUrl.interface';
import { wikipediaInfo } from '../interfaces/wikipediaInfo.interface';
import { CountryProviderService } from '../services/country-provider.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public countryList:Country[] = [];
  public rawCountries!:Observable<countryFromUrl[]>;
  
  public wikipediaInfo!:Observable<wikipediaInfo>;

  constructor(private provider:CountryProviderService) { }

  ngOnInit(): void {
    console.log("hey");

    this.rawCountries = this.provider.getCountries();
    // console.log(this.rawCountries);

    // this.rawContries.forEach((element) => {
    //   console.log("hey");
    // })
  } 
  
  public getCountryInfo(name:string):void{
    this.wikipediaInfo = this.provider.getCountryInfo(name)
    this.wikipediaInfo.subscribe(console.log);
    console.log(name);
  }
}

