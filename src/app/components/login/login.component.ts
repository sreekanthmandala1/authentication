import { Component, OnInit } from '@angular/core';
import {SocialAuthService} from 'angularx-social-login';
import {SocialUser, GoogleLoginProvider} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user : SocialUser;
  constructor(private socialAuthService : SocialAuthService) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user)=>{
      this.user = user;
    })
  }

  signinWithGoogle():any{
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut():any{
    this.socialAuthService.signOut();
  }
}
