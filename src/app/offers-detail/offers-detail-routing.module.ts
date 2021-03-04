import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersDetailComponent } from './offers-detail.component';

const routes: Routes = [{ path: '', component: OffersDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersDetailRoutingModule { }
