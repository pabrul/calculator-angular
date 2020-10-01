import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadorabiComponent } from './calculadorabi.component';

describe('CalculadorabiComponent', () => {
  let component: CalculadorabiComponent;
  let fixture: ComponentFixture<CalculadorabiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadorabiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadorabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
