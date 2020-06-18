import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, Validators } from '@angular/forms';

import { AddMemberDisplayComponent } from './add-member-display.component';
import { MemberComponent } from '../../../member/containers/member/member.component'
import { MemberListComponent } from '../../../member/components/member-list/member-list.component'
import { Status } from 'src/app/models/status';';'

describe('AddMemberDisplayComponent', () => {
  let component: AddMemberDisplayComponent;
  let fixture: ComponentFixture<AddMemberDisplayComponent>;
  const initialState = {
    member: {
      list: [],
      error: ''
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberComponent, MemberListComponent, AddMemberDisplayComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'members',
            component: MemberComponent
          }
        ]),
        ReactiveFormsModule
      ],
      providers: [ 
        provideMockStore({ initialState }) ]
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
  it('should submit', () => {
    let fb:FormBuilder = new FormBuilder();
    component.addMemberForm = fb.group({
      firstName: ['Kevin',
                  [Validators.required,
                   Validators.minLength(3)]],
      lastName: ['Burton',
                 [Validators.required,
                  Validators.minLength(3)]],
      jobTitle:  ['Software Engineer',
                  [Validators.required,
                   Validators.minLength(3)]],
      team: 'Angular',
      status: 'Inactive'
    });

    component.members = [
      {
        id: '0',
        firstName: 'ABC',
        lastName: 'DEF',
        jobTitle: 'A',
        team: 'B',
        status: Status.Active
      },
      {
        id: '1',
        firstName: 'GHI',
        lastName: 'JKL',
        jobTitle: 'G',
        team: 'H',
        status: Status.Active
      }
    ];

    component.submit();

    expect(component).toBeTruthy();
    
  });
});
