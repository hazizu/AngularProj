import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProviderPageComponent } from './personal-provider-page.component';

describe('PersonalProviderPageComponent', () => {
  let component: PersonalProviderPageComponent;
  let fixture: ComponentFixture<PersonalProviderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalProviderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProviderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
