import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChucknorrisLogoComponent } from './chucknorris-logo.component';

describe('ChucknorrisLogoComponent', () => {
  let component: ChucknorrisLogoComponent;
  let fixture: ComponentFixture<ChucknorrisLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChucknorrisLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChucknorrisLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
