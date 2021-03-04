import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceDetailComponent } from './price-detail.component';

const routes: Routes = [{ path: '', component: PriceDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceDetailRoutingModule { }
