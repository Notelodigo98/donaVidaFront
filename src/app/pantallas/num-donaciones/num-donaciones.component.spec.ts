import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumDonacionesComponent } from './num-donaciones.component';

describe('NumDonacionesComponent', () => {
  let component: NumDonacionesComponent;
  let fixture: ComponentFixture<NumDonacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumDonacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumDonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
