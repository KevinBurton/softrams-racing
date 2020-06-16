import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Member } from 'src/app/models/member';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-add-team-display',
  templateUrl: './add-team-display.component.html',
  styleUrls: ['./add-team-display.component.css']
})
export class AddTeamDisplayComponent {
  @Input() members: Member[];
  @Input() teams: Team[];
  @Input() isLoggedOn: boolean;
}
