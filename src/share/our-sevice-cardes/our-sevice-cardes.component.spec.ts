import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSeviceCardesComponent } from './our-sevice-cardes.component';

describe('OurSeviceCardesComponent', () => {
  let component: OurSeviceCardesComponent;
  let fixture: ComponentFixture<OurSeviceCardesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurSeviceCardesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSeviceCardesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
