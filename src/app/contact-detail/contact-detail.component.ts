import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/services/data-service.service';
import { TranslateComponent } from '../common/translate/translate.component';
import { ConfigComponent } from '../config/config.component';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  firm: any = {};
  partners: Array<any> = [];
  translate: TranslateComponent;

  constructor(dataService: DataService) { 
    const config: ConfigComponent = new ConfigComponent(dataService);
    this.translate = new TranslateComponent(dataService);
    
    this.firm = config.data.firm;
    this.partners = this.firm.partners;
  }

  ngOnInit(): void {
  }

}
