import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cuenta2Page } from './cuenta2.page';

describe('Cuenta2Page', () => {
  let component: Cuenta2Page;
  let fixture: ComponentFixture<Cuenta2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cuenta2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
