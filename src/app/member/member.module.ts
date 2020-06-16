import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MemberEffects } from './state/member.effects';

import { memberReducer } from './state/member.reducer';

import { MemberComponent } from './containers/member/member.component';
import { AddMemberComponent } from '../add-member/containers/add-member/add-member.component';

import { SharedModule } from '../shared/shared.module';
import { MemberListComponent } from './components/member-list/member-list.component';
import { AddMemberDisplayComponent } from '../add-member/components/add-member-display/add-member-display.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'members', component: MemberComponent},
      {path: 'addMember', component: AddMemberComponent}
    ]),
    StoreModule.forFeature('member', memberReducer),
    EffectsModule.forFeature(
      [ MemberEffects ]
    ),
  ],
  declarations: [
    MemberComponent,
    MemberListComponent,
    AddMemberComponent,
    AddMemberDisplayComponent
  ],
  exports: [
    MemberComponent,
    MemberListComponent,
    AddMemberComponent,
    AddMemberDisplayComponent
  ]
})
export class MemberModule { }
