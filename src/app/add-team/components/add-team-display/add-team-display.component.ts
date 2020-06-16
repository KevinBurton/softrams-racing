import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Member } from 'src/app/models/member';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-add-team-display',
  templateUrl: './add-team-display.component.html',
  styleUrls: ['./add-team-display.component.css']
})
export class AddTeamDisplayComponent implements OnInit {
  @Input() members: Member[];
  @Input() teams: Team[];
  @Input() isLoggedOn: boolean;
  addTeamForm: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.addTeamForm = this.fb.group({
      teamName: ''
    });
  }
}
