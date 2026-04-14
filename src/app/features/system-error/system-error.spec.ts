import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemError } from './system-error';

describe('SystemError', () => {
  let component: SystemError;
  let fixture: ComponentFixture<SystemError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemError]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemError);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
