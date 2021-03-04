import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tour360DetailComponent } from './tour360-detail.component';

describe('Tour360DetailComponent', () => {
  let component: Tour360DetailComponent;
  let fixture: ComponentFixture<Tour360DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tour360DetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tour360DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
