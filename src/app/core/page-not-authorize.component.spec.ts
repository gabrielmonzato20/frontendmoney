import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotAuthorizeComponent } from './page-not-authorize.component';

describe('PageNotAuthorizeComponent', () => {
  let component: PageNotAuthorizeComponent;
  let fixture: ComponentFixture<PageNotAuthorizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotAuthorizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotAuthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
