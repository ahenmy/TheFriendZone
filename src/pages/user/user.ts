import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArticlesPage } from '../articles/articles';
import { CounselorsPage } from '../counselors/counselors';
import { BoardsPage } from '../boards/boards';
import { ChatsPage } from '../chats/chats';
import { ZoneboxPage } from '../zonebox/zonebox';
import { Story1Page } from '../story1/story1';





/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  articles() {
    this.navCtrl.push(ArticlesPage);
  }

  counselors() {
    this.navCtrl.push(CounselorsPage);
  }

  boards() {
    this.navCtrl.push(BoardsPage);
  }

  chats() {
    this.navCtrl.push(ChatsPage);
  }

  zonebox() {
    this.navCtrl.push(ZoneboxPage);
  }

  story1() {
    this.navCtrl.push(Story1Page);
  }

  
    
}
