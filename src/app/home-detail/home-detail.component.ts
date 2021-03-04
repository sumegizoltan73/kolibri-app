import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/services/data-service.service';
import { TranslateComponent } from '../common/translate/translate.component';
import { ConfigComponent } from '../config/config.component';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  firm: any = {};
  items: Array<string> = [];
  options: any;
  translate: TranslateComponent;
  
  constructor(dataService: DataService) { 
    const config: ConfigComponent = new ConfigComponent(dataService);
    this.translate = new TranslateComponent(dataService);

    this.firm = config.data.firm;

    for (var i = 1; i <= 32; i++) {
      this.items.push('assets/img/albums/panzio/' + i + ".jpg");
    }
    
    this.options = {
      width: '100%',
      ratio: '1200/800',
      loop: true,
      autoplay: true,
      keyboard: true,
      nav: 'thumbs',
      allowfullscreen: 'native',
      fit: 'cover'
      // add other parameters here, see http://fotorama.io/customize/options/
    };
  }

  ngOnInit(): void {
  }

}
