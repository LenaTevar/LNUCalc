import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontCalcComponent } from './front-calc.component';

describe('FrontCalcComponent', () => {
  let component: FrontCalcComponent;
  let fixture: ComponentFixture<FrontCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
