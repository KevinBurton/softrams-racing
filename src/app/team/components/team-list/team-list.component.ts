import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/models/user';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamListComponent {
  @Input() teams: Team[];
  @Input() currentUser: User;
  @Input() isLoggedOn: boolean;
  @Input() error: string;
  @Output() removeTeam = new EventEmitter<number>();
  @Output() addTeam = new EventEmitter();

  removeTeamNotification(teamId: number): void {
    this.removeTeam.emit(teamId);
  }
  addTeamNotification(): void {
    this.addTeam.emit();
  }
}
