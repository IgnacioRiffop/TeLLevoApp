import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscogerViajePage } from './escoger-viaje.page';

describe('EscogerViajePage', () => {
  let component: EscogerViajePage;
  let fixture: ComponentFixture<EscogerViajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscogerViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
