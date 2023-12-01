import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionarViajePage } from './seleccionar-viaje.page';

describe('SeleccionarViajePage', () => {
  let component: SeleccionarViajePage;
  let fixture: ComponentFixture<SeleccionarViajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleccionarViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
