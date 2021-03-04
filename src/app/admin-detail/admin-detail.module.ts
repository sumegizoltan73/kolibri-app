import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDetailRoutingModule } from './admin-detail-routing.module';
import { AdminDetailComponent } from './admin-detail.component';


@NgModule({
  declarations: [AdminDetailComponent],
  imports: [
    CommonModule,
    AdminDetailRoutingModule
  ]
})
export class AdminDetailModule { }
