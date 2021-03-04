import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { OffersDetailRoutingModule } from './offers-detail-routing.module';
import { OffersDetailComponent } from './offers-detail.component';
import { DataService } from '../common/services/data-service.service';


@NgModule({
  declarations: [OffersDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    OffersDetailRoutingModule
  ],
  providers: [
    DataService
  ]
})
export class OffersDetailModule { }
