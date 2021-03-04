import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeDetailRoutingModule } from './home-detail-routing.module';
import { HomeDetailComponent } from './home-detail.component';
import { DirectiveModule } from '../directive/directives.module';
import { DataService } from '../common/services/data-service.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeDetailRoutingModule,
    DirectiveModule,
    MatIconModule
  ],
  providers: [
    DataService
  ]
})
export class HomeDetailModule { }
