import { Component } from '@angular/core';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-Translate',
  template: ''
})
export class TranslateComponent {

  static instance: TranslateComponent;
  data: any;
  langId: string = '';
  private serviceUrl = 'assets/translate.json';

  constructor(private service: DataService) { 
    if (!TranslateComponent.instance) {
        TranslateComponent.instance = this;
    }

    if (!TranslateComponent.instance.data){
        TranslateComponent.instance.loadData();
    }

    return TranslateComponent.instance;
  }

  text(id: string): string {
      let _returnValue = id;
      
      if (this.data && this.langId) {
        const translate = this.data[this.langId];
        
        if (id in translate) {
            _returnValue = translate[id];
        }
        else {
            const idParts = id.split('.');
            let obj = translate;
            for (let i = 0; i < idParts.length; i++) {
                const element = idParts[i];
                if (i < idParts.length - 1){
                    if (element in obj){
                        obj = obj[element];
                    }
                    else {
                        break;
                    }
                }
                else {
                    if (element in obj){
                        _returnValue = obj[element];
                    }
                }
            }
        }
      }

      return _returnValue;
  }

  setLanguage(langId: string): void {
      this.langId = langId;
  }

  getLangId(): string {
      return this.langId;
  }

  private initLang(): void {
    const defaultLanguage: string = this.data && 'defaultLanguage' in this.data ? this.data['defaultLanguage'] : 'hu';
    
    this.setLanguage(defaultLanguage);
  }

  private loadData(): void {
    this.service.get(this.serviceUrl)
      .subscribe((data: any) => {this.data = data; this.initLang(); });
  }

}