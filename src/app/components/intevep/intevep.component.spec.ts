import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntevepComponent } from './intevep.component';

describe('IntevepComponent', () => {
  let component: IntevepComponent;
  let fixture: ComponentFixture<IntevepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntevepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntevepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
