import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrDonarComponent } from './ir-donar.component';

describe('IrDonarComponent', () => {
  let component: IrDonarComponent;
  let fixture: ComponentFixture<IrDonarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrDonarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrDonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
