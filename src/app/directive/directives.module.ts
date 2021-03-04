import { NgModule } from '@angular/core';
import { FotoramaDirective } from './fotorama.directive';

@NgModule({
  declarations: [
    FotoramaDirective
  ],
  exports: [
    FotoramaDirective
  ]
})

export class DirectiveModule { }
