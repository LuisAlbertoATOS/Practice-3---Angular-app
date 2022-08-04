import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryInfoComponent } from 'src/app/country-info/country-info.component';
import { TableComponent } from 'src/app/table/table.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', component: TableComponent},
  {path:'country/:name', component: CountryInfoComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
