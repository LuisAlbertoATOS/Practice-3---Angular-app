import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryInfoComponent } from './country-info/country-info.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', component: TableComponent},
  {path:'country/:name', component: CountryInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
