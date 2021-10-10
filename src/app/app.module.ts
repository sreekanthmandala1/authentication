import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {SocialAuthServiceConfig,SocialLoginModule} from 'angularx-social-login';
import { GoogleLoginProvider} from 'angularx-social-login';

// const config = new SocialAuthServiceConfig([
//   {
//     id : GoogleLoginProvider.PROVIDER_ID,
//     provider : new GoogleLoginProvider('473385596140-rlu9e6lgbpmcgob4p6iv7agbr5uebs2b.apps.googleusercontent.com')
//   }
// ]);

// export function provideConfig({
//   return config;
// })

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
  //   {provide:SocialAuthServiceConfig,
  //   useFactory:provideConfig
  // }
  {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '473385596140-rlu9e6lgbpmcgob4p6iv7agbr5uebs2b.apps.googleusercontent.com'
          )
        },
      ]
    } as SocialAuthServiceConfig,
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
