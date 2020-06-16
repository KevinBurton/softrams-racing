import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/models/user';
import { Member } from 'src/app/models/member';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-add-member-display',
  templateUrl: './add-member-display.component.html',
  styleUrls: ['./add-member-display.component.css']
})
export class AddMemberDisplayComponent {
  @Input() members: Member[];
  @Input() teams: Team[];
  @Input() isLoggedOn: boolean;
}
