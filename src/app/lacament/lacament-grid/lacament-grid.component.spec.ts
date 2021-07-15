import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LacamentGridComponent } from './lacament-grid.component';

describe('LacamentGridComponent', () => {
  let component: LacamentGridComponent;
  let fixture: ComponentFixture<LacamentGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LacamentGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LacamentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
