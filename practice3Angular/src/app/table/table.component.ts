import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { ICountry } from '../interfaces/country';
import { countryFromUrl } from '../interfaces/countryFromUrl.interface';
import { wikipediaInfo } from '../interfaces/wikipediaInfo.interface';
import { CountryProviderService } from '../services/country-provider.service';
import { Mapper } from '../utility/mapper';

export type paginationBtnDir = "prev" | "next";
export type sortDir = "ascending" | "descending";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public countryList!:Observable<ICountry[]>;
  public wikipediaInfo!:Observable<wikipediaInfo>;

  @Input() myCountryList: Array<ICountry> = [];

  public page:number = 0;
  private countriesPerPage:number = 25;

  public limits:[start:number, end:number] = [0,24];

  public order:sortDir = "ascending";

  constructor(private provider:CountryProviderService) { }

  ngOnInit(): void {
    this.countryList = this.provider.getCountries().pipe(
      map(
        (countryList) => countryList.map(
          country => Mapper.mapCountryFromUrlToCountry(country)
        )
      )
    );
  } 
  
  public getCountryInfo(name:string):void{
    this.wikipediaInfo = this.provider.getCountryInfo(name)
    console.log(name);
  }

  public paginate(direction:paginationBtnDir):void{
    this.page += (direction === 'next') ? 1 : -1;

    this.limits[0] = this.page * this.countriesPerPage;
    this.limits[1] = this.limits[0] + this.countriesPerPage - 1;

    this.ngOnInit();
  }

  public toggleOrder(){
    this.order = this.order==="ascending" ? "descending" : "ascending";
    this.ngOnInit();
  }
}

