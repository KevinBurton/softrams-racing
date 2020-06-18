import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {
  @Input() members: Member[];
  @Input() currentUser: User;
  @Input() isLoggedOn: boolean;
  @Input() error: string;
  @Output() deleteMember = new EventEmitter<number>();
  @Output() addMember = new EventEmitter();

  removeMemberNotification(memberId: number): void {
    this.deleteMember.emit(memberId);
  }
  addMemberNotification(): void {
    this.addMember.emit();
  }
}
