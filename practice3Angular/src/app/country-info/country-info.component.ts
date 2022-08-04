import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { wikipediaInfo } from '../interfaces/wikipediaInfo.interface';
import { CountryProviderService } from '../services/country-provider.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {
  public countryInfo!:Observable<wikipediaInfo>;

  constructor(
    private readonly provider:CountryProviderService,
    private readonly currRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.countryInfo =
      this.currRoute.params.pipe(
        map((params) => params['name'] as string),
        switchMap((name:string) => this.provider.getCountryInfo(name)),
        // map((params) => params['extract_html']),
      );

      console.log(this.countryInfo);
      // this.provider.getCountryInfo(params
    
      // next
      // country = params['name'];
    // })
    // )
  }

}
