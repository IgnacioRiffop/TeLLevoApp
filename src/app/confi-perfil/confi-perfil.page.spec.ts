import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiPerfilPage } from './confi-perfil.page';

describe('ConfiPerfilPage', () => {
  let component: ConfiPerfilPage;
  let fixture: ComponentFixture<ConfiPerfilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfiPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
