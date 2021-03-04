import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/services/data-service.service';
import { TranslateComponent } from '../common/translate/translate.component';
import { ConfigComponent } from '../config/config.component';

@Component({
  selector: 'app-offers-detail',
  templateUrl: './offers-detail.component.html',
  styleUrls: ['./offers-detail.component.css']
})
export class OffersDetailComponent implements OnInit {
  
  firm: any = {};
  translate: TranslateComponent;
  
  constructor(dataService: DataService) { 
    const config: ConfigComponent = new ConfigComponent(dataService);
    this.translate = new TranslateComponent(dataService);
    
    this.firm = config.data.firm;
  }

  ngOnInit(): void {
  }

}
