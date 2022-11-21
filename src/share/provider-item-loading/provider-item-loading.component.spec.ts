import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderItemLoadingComponent } from './provider-item-loading.component';

describe('ProviderItemLoadingComponent', () => {
  let component: ProviderItemLoadingComponent;
  let fixture: ComponentFixture<ProviderItemLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderItemLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderItemLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
