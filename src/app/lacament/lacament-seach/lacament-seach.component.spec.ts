import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LacamentSeachComponent } from './lacament-seach.component';

describe('LacamentSeachComponent', () => {
  let component: LacamentSeachComponent;
  let fixture: ComponentFixture<LacamentSeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LacamentSeachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LacamentSeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
