import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByEmployeeComponent } from './by-employee.component';

describe('ByEmployeeComponent', () => {
  let component: ByEmployeeComponent;
  let fixture: ComponentFixture<ByEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
