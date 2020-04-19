import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencymasterComponent } from './currencymaster/currencymaster.component';


const routes: Routes = [
  {
    path: 'currency',
    component: CurrencymasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
