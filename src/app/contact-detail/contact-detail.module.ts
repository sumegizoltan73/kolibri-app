import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ContactDetailRoutingModule } from './contact-detail-routing.module';
import { ContactDetailComponent } from './contact-detail.component';
import { DataService } from '../common/services/data-service.service';


@NgModule({
  declarations: [ContactDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ContactDetailRoutingModule
  ],
  providers: [
    DataService
  ]
})
export class ContactDetailModule { }
