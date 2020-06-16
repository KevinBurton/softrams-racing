import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/models/user';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-nav-menu-display',
  templateUrl: './nav-menu-display.component.html',
  styleUrls: ['./nav-menu-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuDisplayComponent {

  @Input() error: string;
  @Input() currentUser: User;
  @Input() isLoggedOn: boolean;
  @Output() logout = new EventEmitter();
  isExpanded = true;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  get isLoggedIn(): boolean {
    return this.isLoggedOn;
  }
  onLogout() {
    this.logout.emit();
  }
}
