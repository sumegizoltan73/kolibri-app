import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../app.component';
import { DataService } from '../common/services/data-service.service';
import { TranslateComponent } from '../common/translate/translate.component';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.css']
})
export class PageMenuComponent implements OnInit {

  @Input() menulist: Array<MenuItem>;
  private _selectedItem: string = '';
  translate: TranslateComponent;

  constructor(dataService: DataService) { 
    this.menulist = [];
    this.translate = new TranslateComponent(dataService);
  }

  get selectedItem(): string {
    if (!this._selectedItem) {
      this._selectedItem = location.pathname.replace('/', '');
    }
    return this._selectedItem;
  }
  set selectedItem(value: string) {
    if (value !== this._selectedItem) {
      this._selectedItem = value;
    }
  }

  ngOnInit(): void {
  }
}
