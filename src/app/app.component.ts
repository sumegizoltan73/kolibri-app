import { Component, OnInit } from '@angular/core';
import { DataService } from './common/services/data-service.service';
import { TranslateComponent } from './common/translate/translate.component';
import { ConfigComponent } from './config/config.component';

export interface MenuItem {
  path: string;
  label: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menu: Array<MenuItem> = [];
  languages: Array<string> = [];
  firm: any = {};
  currentYear: number;
  items: Array<string> = [];
  options: any;
  translate: TranslateComponent;
  config: ConfigComponent;

  constructor(dataService: DataService) {
    this.config = new ConfigComponent(dataService);
    this.config.loaded?.subscribe((item: any) => this.initConfig(item));
    this.config.checkLoaded();

    this.translate = new TranslateComponent(dataService);
    this.currentYear = (new Date()).getFullYear();
  }

  initConfig(loaded: any): void {
    this.menu = this.config.data.menu;
    this.languages = this.config.data.languages;
    this.firm = this.config.data.firm;
  }

  ngOnInit() {
    
  }
}
