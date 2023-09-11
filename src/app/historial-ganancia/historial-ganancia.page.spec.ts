import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialGananciaPage } from './historial-ganancia.page';

describe('HistorialGananciaPage', () => {
  let component: HistorialGananciaPage;
  let fixture: ComponentFixture<HistorialGananciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistorialGananciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
