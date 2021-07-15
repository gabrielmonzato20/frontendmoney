import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSeachComponent } from './person-seach.component';

describe('PersonSeachComponent', () => {
  let component: PersonSeachComponent;
  let fixture: ComponentFixture<PersonSeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonSeachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonSeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
