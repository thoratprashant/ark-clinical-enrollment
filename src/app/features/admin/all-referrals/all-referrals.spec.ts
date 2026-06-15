import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReferrals } from './all-referrals';

describe('AllReferrals', () => {
  let component: AllReferrals;
  let fixture: ComponentFixture<AllReferrals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllReferrals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllReferrals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
