import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentComponent } from './lancament.component';

describe('LancamentComponent', () => {
  let component: LancamentComponent;
  let fixture: ComponentFixture<LancamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
