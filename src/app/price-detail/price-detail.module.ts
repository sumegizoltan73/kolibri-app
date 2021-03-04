import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceDetailRoutingModule } from './price-detail-routing.module';
import { PriceDetailComponent } from './price-detail.component';
import { BookingTableMaterialModule } from '../booking-table/booking-table-material.module';


@NgModule({
  declarations: [
    PriceDetailComponent
  ],
  imports: [
    CommonModule,
    PriceDetailRoutingModule,
    BookingTableMaterialModule
  ]
})
export class PriceDetailModule { }
