import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DataService } from '../common/services/data-service.service';
import { BookingTableComponent } from './booking-table.component';
import { FormsModule } from '@angular/forms';
import { HoverImageComponent } from '../hover-image/hover-image.component';

@NgModule({
  declarations: [
    BookingTableComponent,
    HoverImageComponent
  ],
  entryComponents: [
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTooltipModule,
    FormsModule
  ],
  exports: [
    BookingTableComponent,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTooltipModule,
    FormsModule
  ],
  providers: [
    DataService
  ]
})
export class BookingTableMaterialModule { }
