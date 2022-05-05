import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectClothesFormComponent } from './select-clothes-form.component';

describe('SelectClothesFormComponent', () => {
  let component: SelectClothesFormComponent;
  let fixture: ComponentFixture<SelectClothesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectClothesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectClothesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
