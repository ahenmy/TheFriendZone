import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { JoinPage } from '../pages/join/join';
import { UserPage } from '../pages/user/user';
import { ProfilePage } from '../pages/profile/profile';

import { ArticlesPage } from '../pages/articles/articles';
import { CounselorsPage } from '../pages/counselors/counselors';
import { BoardsPage } from '../pages/boards/boards';
import { ChatsPage } from '../pages/chats/chats';
import { ZoneboxPage } from '../pages/zonebox/zonebox';
import { Story1Page } from '../pages/story1/story1';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    JoinPage,
    UserPage,
    ProfilePage,
    ArticlesPage,
    CounselorsPage,
    BoardsPage, 
    ChatsPage,
    ZoneboxPage,
    Story1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    JoinPage,
    UserPage,
    ProfilePage,
    ArticlesPage,
    CounselorsPage,
    BoardsPage,
    ChatsPage,
    ZoneboxPage,
    Story1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
