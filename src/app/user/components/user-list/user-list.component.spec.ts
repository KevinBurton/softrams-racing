import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from '../../../models/user';

import { UserListComponent } from './user-list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    component.users = [
      {
        name: {
          first: 'John',
          middle: 'Jay',
          last: 'Smith'
        },
        address: {
          street1: '1 Easy Street',
          street2: '',
          city: 'Los Angeles',
          state: 'California',
          zip: '12345'
        },
        email: 'john@nocantack.com',
        phone: '123 456-7890',
        isAdmin: false
      },
      {
        name: {
          first: 'Sam',
          middle: 'Jay',
          last: 'Jones'
        },
        address: {
          street1: '2 Easy Street',
          street2: '',
          city: 'Los Angeles',
          state: 'California',
          zip: '12345'
        },
        email: 'sam@nocantack.com',
        phone: '123 456-7890',
        isAdmin: false
      },
      {
        name: {
          first: 'Harry',
          middle: 'Jay',
          last: 'Johnson'
        },
        address: {
          street1: '3 Easy Street',
          street2: '',
          city: 'Los Angeles',
          state: 'California',
          zip: '12345'
        },
        email: 'harry@nocantack.com',
        phone: '123 456-7890',
        isAdmin: false
      }
    ];
    component.error = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('pass users (row)', () => {
    fixture.detectChanges();
    const tableCells = fixture.nativeElement.querySelectorAll('table tbody tr');
    expect(tableCells.length).toEqual(3);
  });
  it('pass users (cell)', () => {
    fixture.detectChanges();
    const tableCells = fixture.nativeElement.querySelectorAll('table tbody tr td');
    expect(tableCells.length).toEqual(15);
  });
  it('pass users (filter)', () => {
    fixture.detectChanges();
    const tableCells = [...fixture.nativeElement.querySelectorAll('table tbody tr td')];
    const filteredCells = tableCells.filter((c, i) => i % 5 === 0);
    expect(filteredCells.length).toEqual(3);
  });
});
