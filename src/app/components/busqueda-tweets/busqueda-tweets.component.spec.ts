import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaTweetsComponent } from './busqueda-tweets.component';

describe('BusquedaTweetsComponent', () => {
  let component: BusquedaTweetsComponent;
  let fixture: ComponentFixture<BusquedaTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaTweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
