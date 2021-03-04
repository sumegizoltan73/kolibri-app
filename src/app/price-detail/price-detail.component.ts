import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/services/data-service.service';
import { TranslateComponent } from '../common/translate/translate.component';
import { ConfigComponent } from '../config/config.component';

@Component({
  selector: 'app-price-detail',
  templateUrl: './price-detail.component.html',
  styleUrls: ['./price-detail.component.css']
})
export class PriceDetailComponent implements OnInit {

  firm: any = {};
  items: Array<string> = [];
  translate: TranslateComponent;

  constructor(dataService: DataService) { 
    const config: ConfigComponent = new ConfigComponent(dataService);
    this.translate = new TranslateComponent(dataService);

    this.firm = config.data.firm;
  }

  ngOnInit(): void {
  }

}
