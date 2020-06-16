import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from '../../../models/user';
import { UserModule } from '../../../user/user.module'
import { UserListComponent } from './user-list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { clear } from 'console';

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
          last: 'Smith'
        }
      },
      {
        name: {
          first: 'Sam',
          last: 'Jones'
        }
      },
      {
        name: {
          first: 'Harry',
          last: 'Johnson'
        }
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
