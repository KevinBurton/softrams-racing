import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/models/user';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberListComponent {
  @Input() members: Member[];
  @Input() currentUser: User;
  @Input() isLoggedOn: boolean;
  @Input() error: string;
  @Output() deleteMember = new EventEmitter<Member>();
  @Output() addMember = new EventEmitter();

  removeMemberNotification(value: Member): void {
    this.deleteMember.emit(value);
  }
  addMemberNotification(): void {
    this.addMember.emit();
  }
}
