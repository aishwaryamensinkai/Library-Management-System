import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbooksinstudentsComponent } from './viewbooksinstudents.component';

describe('ViewbooksinstudentsComponent', () => {
  let component: ViewbooksinstudentsComponent;
  let fixture: ComponentFixture<ViewbooksinstudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbooksinstudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbooksinstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
