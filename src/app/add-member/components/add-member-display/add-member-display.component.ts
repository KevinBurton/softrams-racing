import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

import * as fromMember from '../../../member/state/member.reducer';
import * as memberActions from '../../../member/state/member.actions';

import { Store } from '@ngrx/store';
import { Member } from 'src/app/models/member';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-add-member-display',
  templateUrl: './add-member-display.component.html',
  styleUrls: ['./add-member-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddMemberDisplayComponent  implements OnInit {

  constructor(private fb: FormBuilder,
              private memberStore: Store<fromMember.MemberState>,
              private router: Router) { }

  private addMemberValidationMessages = {
    required: 'Please enter a value.',
    minLength: 'Input is too short.'
  };

  errorMessage: string;
  addMemberMessage: string;

  @Input() members: Member[];
  @Input() teams: Team[];
  @Input() isLoggedOn: boolean;

  addMemberForm: FormGroup;

  ngOnInit() {
    this.addMemberForm = this.fb.group({
      firstName: ['',
                  [Validators.required,
                   Validators.minLength(3)]],
      lastName: ['',
                 [Validators.required,
                  Validators.minLength(3)]],
      jobTitle:  ['',
                  [Validators.required,
                   Validators.minLength(3)]],
      team: '',
      status: 'Inactive'
    });
    const firstNameControl = this.addMemberForm.get('firstName');
    firstNameControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.setUserMessage(firstNameControl)
    );
    const lastNameControl = this.addMemberForm.get('lastName');
    lastNameControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.setUserMessage(lastNameControl)
    );
    const jobTitleControl = this.addMemberForm.get('jobTitle');
    jobTitleControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.setUserMessage(jobTitleControl)
    );
  }
  setUserMessage(c: AbstractControl): void {
    this.addMemberMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.addMemberMessage = Object.keys(c.errors).map(
        key => this.addMemberValidationMessages[key]).join(' ');
    }
  }
  submit() {
      const maxId = this.members.map(member => parseInt(member.id)).reduce((acc, cur)  => {
          return (cur > acc) ? cur : acc;
      });
  const firstName = this.addMemberForm.get('firstName').value;
    const lastName = this.addMemberForm.get('lastName').value;
    const jobTitle = this.addMemberForm.get('jobTitle').value;
    const team = this.addMemberForm.get('team').value;
    const status = this.addMemberForm.get('status').value;
    const member: Member = {
      id: (maxId+1).toString(),
      firstName: firstName,
      lastName: lastName,
      jobTitle: jobTitle,
      team: team,
      status: status
    };
    console.log(`Max => ${maxId}`);
    this.memberStore.dispatch(new memberActions.AddMember(member));
    this.router.navigate(['/members']);
  }
}
