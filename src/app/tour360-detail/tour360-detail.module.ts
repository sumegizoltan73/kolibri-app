import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tour360DetailRoutingModule } from './tour360-detail-routing.module';
import { Tour360DetailComponent } from './tour360-detail.component';


@NgModule({
  declarations: [Tour360DetailComponent],
  imports: [
    CommonModule,
    Tour360DetailRoutingModule
  ]
})
export class Tour360DetailModule { }
