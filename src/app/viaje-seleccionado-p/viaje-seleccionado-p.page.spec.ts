import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajeSeleccionadoPPage } from './viaje-seleccionado-p.page';

describe('ViajeSeleccionadoPPage', () => {
  let component: ViajeSeleccionadoPPage;
  let fixture: ComponentFixture<ViajeSeleccionadoPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajeSeleccionadoPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
