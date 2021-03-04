import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingDetailRoutingModule } from './booking-detail-routing.module';
import { BookingDetailComponent } from './booking-detail.component';
import { BookingTableMaterialModule } from '../booking-table/booking-table-material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    BookingDetailComponent
  ],
  imports: [
    CommonModule,
    BookingDetailRoutingModule,
    MatDatepickerModule,
    BookingTableMaterialModule
  ]
})
export class BookingDetailModule { }
