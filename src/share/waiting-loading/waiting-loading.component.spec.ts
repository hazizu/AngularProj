import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingLoadingComponent } from './waiting-loading.component';

describe('WaitingLoadingComponent', () => {
  let component: WaitingLoadingComponent;
  let fixture: ComponentFixture<WaitingLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
