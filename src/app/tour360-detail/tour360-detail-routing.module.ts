import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tour360DetailComponent } from './tour360-detail.component';

const routes: Routes = [{ path: '', component: Tour360DetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tour360DetailRoutingModule { }
