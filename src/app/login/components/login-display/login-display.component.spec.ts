import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { LoginDisplayComponent } from './login-display.component';
import { LoginCredentials } from 'src/app/models/loginCredentials';
import * as fromUser from '../../../user/state/user.reducer';

describe('LoginDisplayComponent', () => {
  let mockStore: MockStore<fromUser.UserState>;
  let mockUsernameSelector: MemoizedSelector<fromUser.UserState, string>;
  let component: LoginDisplayComponent;
  let fixture: ComponentFixture<LoginDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDisplayComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit on submit', () => {
     // spy on event emitter
    spyOn(component.login, 'emit');
 
    const fb: FormBuilder = new FormBuilder();
    component.loginForm = fb.group({
      userName: ['AAAA',[Validators.required,Validators.minLength(3)]],
      password: ['BBBB',[Validators.required]]});

    component.submitForm();  

    fixture.detectChanges();
 
    expect(component.login.emit).toHaveBeenCalledWith({user: 'AAAA', password: 'BBBB'});
 });
 it('should create', () => {
    expect(component).toBeTruthy();
  });
});
