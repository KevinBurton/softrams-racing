import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemberDisplayComponent } from './add-member-display.component';

describe('AddMemberDisplayComponent', () => {
  let component: AddMemberDisplayComponent;
  let fixture: ComponentFixture<AddMemberDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMemberDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemberDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});