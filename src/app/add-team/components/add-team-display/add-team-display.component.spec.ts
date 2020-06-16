import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamDisplayComponent } from './add-team-display.component';

describe('AddTeamDisplayComponent', () => {
  let component: AddTeamDisplayComponent;
  let fixture: ComponentFixture<AddTeamDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeamDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
