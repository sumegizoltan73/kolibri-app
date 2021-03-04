import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: 'div[appFotorama]'
})
export class FotoramaDirective implements OnInit {

  @Input() items!: Array<string>;
  @Input() options: any;

  constructor(private el: ElementRef) { 
    $(el.nativeElement).addClass('fotorama');
  }

  ngOnInit(){
    let element = this.el;

    this.items.forEach(function (item) {
      $('<img src="' + item + '">').appendTo($(element.nativeElement));
    });
    
    const jQuery = (<any>window).$;
    jQuery('.fotorama').fotorama(this.options);
  }
}
