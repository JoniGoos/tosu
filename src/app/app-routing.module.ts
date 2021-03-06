import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankaccountComponent } from './bankaccounts/components/bankaccount/bankaccount.component';
import { PlayerDetailComponent } from './players/components/player-detail/player-detail.component';
import { ProductListComponent } from './shop/components/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: PlayerDetailComponent, pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'fries', component: ProductListComponent },
  { path: 'bankaccount', component: BankaccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
