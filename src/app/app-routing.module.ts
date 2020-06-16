import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { MemberModule } from './member/member.module';
import { TeamModule } from './team/team.module';
import { SharedModule } from './shared/shared.module';

import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    UserModule,
    MemberModule,
    TeamModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
