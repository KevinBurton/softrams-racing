import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { MemberModule } from './member/member.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginModule } from './login/login.module';
import { EnvServiceProvider } from './env.service.provider';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BannerComponent } from './banner/banner.component';
import { NavMenuComponent } from './nav-menu/containers/nav-menu/nav-menu.component';
import { NavMenuDisplayComponent } from './nav-menu/components/nav-menu-display/nav-menu-display.component';
import { userReducer } from './user/state/user.reducer';
@NgModule({
  declarations: [AppComponent,
                 HomeComponent,
                 BannerComponent,
                 NavMenuComponent,
                 NavMenuDisplayComponent],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    MemberModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: false,
      }
    }),
    StoreDevtoolsModule.instrument({
       name: 'SoftRams-Racing',
       maxAge: 25,
       logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  providers: [EnvServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
