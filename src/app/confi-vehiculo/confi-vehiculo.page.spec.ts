import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiVehiculoPage } from './confi-vehiculo.page';

describe('ConfiVehiculoPage', () => {
  let component: ConfiVehiculoPage;
  let fixture: ComponentFixture<ConfiVehiculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfiVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
