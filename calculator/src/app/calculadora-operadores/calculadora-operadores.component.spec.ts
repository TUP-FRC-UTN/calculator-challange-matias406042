import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraOperadoresComponent } from './calculadora-operadores.component';

describe('CalculadoraOperadoresComponent', () => {
  let component: CalculadoraOperadoresComponent;
  let fixture: ComponentFixture<CalculadoraOperadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraOperadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraOperadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
