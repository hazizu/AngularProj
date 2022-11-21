import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDetailLoadingComponent } from './provider-detail-loading.component';

describe('ProviderDetailLoadingComponent', () => {
  let component: ProviderDetailLoadingComponent;
  let fixture: ComponentFixture<ProviderDetailLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDetailLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDetailLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
