import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { BannerComponent } from '../banner/banner.component'
import { MemberComponent } from '../member/containers/member/member.component';
import { MemberListComponent } from '../member/components/member-list/member-list.component'
import { LoginComponent } from '../login/containers/login/login.component';
import { LoginDisplayComponent } from '../login/components/login-display/login-display.component'

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent, 
                      MemberComponent,
                      MemberListComponent,
                      LoginComponent,
                      LoginDisplayComponent,
                      HomeComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
