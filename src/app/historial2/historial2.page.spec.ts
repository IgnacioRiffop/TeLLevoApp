import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Historial2Page } from './historial2.page';

describe('Historial2Page', () => {
  let component: Historial2Page;
  let fixture: ComponentFixture<Historial2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Historial2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
