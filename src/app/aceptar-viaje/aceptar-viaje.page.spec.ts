import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AceptarViajePage } from './aceptar-viaje.page';

describe('AceptarViajePage', () => {
  let component: AceptarViajePage;
  let fixture: ComponentFixture<AceptarViajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AceptarViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
