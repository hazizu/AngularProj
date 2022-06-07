import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCommandeMobileComponent } from './resume-commande-mobile.component';

describe('ResumeCommandeMobileComponent', () => {
  let component: ResumeCommandeMobileComponent;
  let fixture: ComponentFixture<ResumeCommandeMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeCommandeMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeCommandeMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
