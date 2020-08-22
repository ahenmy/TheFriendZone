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
import { MessageDetail } from '../pages/message-detail/message-detail';
import { NewMessage } from '../pages/new-message/new-message';

import { Userprofile1Page } from '../pages/userprofile1/userprofile1';
import { Userprofile2Page } from '../pages/userprofile2/userprofile2';

import { Counselorprofile1Page } from '../pages/counselorprofile1/counselorprofile1';
import { Counselorprofile2Page } from '../pages/counselorprofile2/counselorprofile2';
import { CounselorprofilePage } from '../pages/counselorprofile/counselorprofile';
import { CounselordirectoryPage } from '../pages/counselordirectory/counselordirectory';
import { GenericcounselorPage } from '../pages/genericcounselor/genericcounselor';



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
    Story1Page,
    MessageDetail,
    NewMessage,
    Userprofile1Page,
    Userprofile2Page,
    CounselorprofilePage,
    Counselorprofile1Page,
    Counselorprofile2Page,
    CounselordirectoryPage,
    GenericcounselorPage
    
    
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
    Story1Page,
    NewMessage,
    MessageDetail,
    Userprofile1Page,
    Userprofile2Page,
    CounselorprofilePage,
    Counselorprofile1Page,
    Counselorprofile2Page,
    CounselordirectoryPage,
    GenericcounselorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
