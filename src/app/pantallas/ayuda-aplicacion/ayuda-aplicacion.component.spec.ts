import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaAplicacionComponent } from './ayuda-aplicacion.component';

describe('AyudaAplicacionComponent', () => {
  let component: AyudaAplicacionComponent;
  let fixture: ComponentFixture<AyudaAplicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaAplicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaAplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
