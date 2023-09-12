import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajeEnCursoPPage } from './viaje-en-curso-p.page';

describe('ViajeEnCursoPPage', () => {
  let component: ViajeEnCursoPPage;
  let fixture: ComponentFixture<ViajeEnCursoPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajeEnCursoPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
