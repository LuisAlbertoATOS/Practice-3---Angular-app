import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryProviderService } from './services/country-provider.service';
import { TableComponent } from './table/table.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { RoutingModule } from './modules/routing/routing.module';
import { LanguagesPipe } from './pipes/languages.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CountryInfoComponent,
    LanguagesPipe,
    SortPipe,
    PaginationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [CountryProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
