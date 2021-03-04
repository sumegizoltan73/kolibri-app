import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hover-image',
  templateUrl: './hover-image.component.html',
  styleUrls: ['./hover-image.component.css']
})
export class HoverImageComponent implements AfterViewInit {

  imageSrc: string = '';
  imageAlt: string = '';
  private hoverCard: any;

  constructor(private el: ElementRef) { 

  }

  ngAfterViewInit(): void {
    const badgeImage = this.el.nativeElement.childNodes[0].childNodes[0];
    this.hoverCard = this.el.nativeElement.childNodes[0].childNodes[1];

    badgeImage.style.width = '80px';
    badgeImage.style.height = '80px';
    this.imageSrc = badgeImage.src;
    this.imageAlt = badgeImage.alt;

    badgeImage.addEventListener('mouseover', this.onMouseOver.bind(this));
    badgeImage.addEventListener('mouseout', this.onMouseOut.bind(this));
  }

  onMouseOver(): void {
    this.hoverCard.style.display = 'block';
  }

  onMouseOut(): void {
    this.hoverCard.style.display = 'none';
  }

}
