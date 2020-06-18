import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import * as fromTeam from '../../../team/state/team.reducer';
import * as teamActions from '../../../team/state/team.actions';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Member } from 'src/app/models/member';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-add-team-display',
  templateUrl: './add-team-display.component.html',
  styleUrls: ['./add-team-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTeamDisplayComponent implements OnInit {
  private addTeamValidationMessages = {
    required: 'Please enter a value.',
    minLength: 'Input is too short.'
  };
  addTeamMessage: string;
  @Input() members: Member[];
  @Input() teams: Team[];
  @Input() isLoggedOn: boolean;
  addTeamForm: FormGroup;

  constructor(private fb: FormBuilder,
              private teamStore: Store<fromTeam.TeamState>,
              private router: Router) {}
  ngOnInit() {
    this.addTeamForm = this.fb.group({
      teamName: ''
    });
    const teamNameControl = this.addTeamForm.get('teamtName');
    teamNameControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.setUserMessage(teamNameControl)
    ); 
  }
  setUserMessage(c: AbstractControl): void {
    this.addTeamMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.addTeamMessage = Object.keys(c.errors).map(
        key => this.addTeamValidationMessages[key]).join(' ');
    }
  }
  submit() {
    const maxId = this.teams.map(team => parseInt(team.id)).reduce((acc, cur)  => {
      return (cur > acc) ? cur : acc;
    });
    const teamName = this.addTeamForm.get('teamName').value;
    const team: Team = {
      id: (maxId+1).toString(),
      teamName: teamName
      }
      this.teamStore.dispatch(new teamActions.AddTeam(team));
      this.router.navigate(['/members']);  }
}
