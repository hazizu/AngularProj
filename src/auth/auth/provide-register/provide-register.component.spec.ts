import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideRegisterComponent } from './provide-register.component';

describe('ProvideRegisterComponent', () => {
  let component: ProvideRegisterComponent;
  let fixture: ComponentFixture<ProvideRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvideRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
