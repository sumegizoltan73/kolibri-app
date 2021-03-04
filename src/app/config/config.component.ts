import { Component, EventEmitter } from '@angular/core';
import { DataService } from '../common/services/data-service.service';

@Component({
  selector: 'app-config',
  template: ''
})
export class ConfigComponent {

  static instance: ConfigComponent;
  data: any;
  loaded?: EventEmitter<Boolean>;
  private serviceUrl = 'assets/config.json';

  constructor(private service: DataService) { 
    if (!ConfigComponent.instance) {
      ConfigComponent.instance = this;
      ConfigComponent.instance.loaded = new EventEmitter<Boolean>();
    }

    if (!ConfigComponent.instance.data){
      ConfigComponent.instance.loadData();
    }

    return ConfigComponent.instance;
  }

  checkLoaded(): void{
    if (this.data){
      this.loaded?.emit(true);
    }
  }

  private loadData(): void {
    this.service.get(this.serviceUrl)
      .subscribe((data: any) => { this.data = data; this.loaded?.emit(true); });
  }

}
