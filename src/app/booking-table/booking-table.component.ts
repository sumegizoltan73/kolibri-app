import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../common/services/data-service.service';
import { TranslateComponent } from '../common/translate/translate.component';
import { ConfigComponent } from '../config/config.component';
import { MatSnackBar } from '@angular/material/snack-bar';

interface BookingItem {
  id: string; 
  label: string; 
  capacity: number;
  price: string; 
  selectable: number; 
  isVisible: Boolean;
}

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.css']
})
export class BookingTableComponent implements OnInit {

  @Input() isBookingEnabled: Boolean = true;
  items?: Array<BookingItem>;
  translate: TranslateComponent;
  data: any;
  isInProgress: Boolean = false;
  private config: ConfigComponent;

  constructor(private dataService: DataService, private snackBar: MatSnackBar) { 
    this.data = {
      "From": "",
      "Nights": "",
      "Name": "",
      "Phone": "",
      "Email": "",
      "Comment": "",
      "Lang": ""
    };

    this.config = new ConfigComponent(dataService);
    this.config.loaded?.subscribe((item: any) => this.initConfig(item));
    this.config.checkLoaded();

    this.translate = new TranslateComponent(dataService);
  }

  initConfig(loaded: any): void {
    this.items = this.config.data.booking.items;
    this.items?.forEach(element => {
      this.data[element.id] = '';
    });
  }

  getArray(length: number, start: number): Array<number> {
    const arr = [];
    for (var i = start; i <= length; i++) {
      arr.push(i);
    }
    return arr;
  }

  onBooking(isCancel: Boolean): void {
    const isValid: Boolean = !$('#bookingForm').hasClass('ng-invalid');

    if (!this.isInProgress && isValid) {
      this.data['Lang'] = this.translate.text('Langmenu.' + this.translate.langId);
      this.isInProgress = true;

      const fromSaved = this.data.From;
      this.data.From = (<Date>this.data.From).toLocaleString();

      const successLabel = isCancel ? 
        this.translate.text('Booking.CancelSended') : 
        this.translate.text('Booking.BookingSended');
      const serviceUrl = isCancel ?
        this.config.data.booking.serviceUrlBooking :
        this.config.data.booking.serviceUrlCancelBooking; 

      this.dataService.post(serviceUrl, JSON.stringify(this.data))
        .subscribe((data: any) => {
          this.snackBar.open(successLabel, undefined, {
            duration: 3000,
          });
          this.isInProgress = false;
          this.data.From = fromSaved;
        });
    }
  }

  openCustomTooltip(event: MouseEvent): void {
    const el: any = event.target;
    
    if (el && el.tagName === 'IMG') {
      const src: string = el.src;
      const alt: string = el.alt; 
      
      
    }
  }

  ngOnInit(): void {
  }

}
