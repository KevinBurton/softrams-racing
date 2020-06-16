import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { LoginCredentials } from 'src/app/models/loginCredentials';

@Component({
  selector: 'app-login-display',
  templateUrl: './login-display.component.html',
  styleUrls: ['./login-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginDisplayComponent implements OnInit {

  @Output() login = new EventEmitter<LoginCredentials>();
  @Output() cancel = new EventEmitter();

  private userValidationMessages = {
    required: 'Please enter your user name.',
    minlength: 'User name is too short.'
  };

  pageTitle = 'Log In';
  errorMessage: string;
  userMessage: string;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['',[Validators.required,Validators.minLength(3)]],
      password: ['',[Validators.required]]});
    const userNameControl = this.loginForm.get('userName');
    userNameControl.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(
      value => this.setMessage(userNameControl)
    );
  }
  setMessage(c: AbstractControl): void {
    this.userMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.userMessage = Object.keys(c.errors).map(
        key => {
          return (this.userValidationMessages[key]);
        }).join(' ');
      console.log(this.userMessage);
    }
  }

  submitForm() {
    if (this.loginForm && this.loginForm.valid) {
      this.login.emit({user: this.loginForm.get('userName').value,
                       password: this.loginForm.get('password').value});
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }   
  }
  cancelForm() {
    this.cancel.emit();
  }
}
