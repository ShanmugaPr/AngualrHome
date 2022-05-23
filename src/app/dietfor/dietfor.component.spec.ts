import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietforComponent } from './dietfor.component';

describe('DietforComponent', () => {
  let component: DietforComponent;
  let fixture: ComponentFixture<DietforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
