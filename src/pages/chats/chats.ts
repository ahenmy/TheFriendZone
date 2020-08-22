import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Userprofile1Page} from '../userprofile1/userprofile1'
import {Userprofile2Page} from '../userprofile2/userprofile2'
import {Userprofile3Page} from '../userprofile3/userprofile3'
import {UserprofilepagePage} from '../userprofilepage/userprofilepage'

/**import {AutosizeModule} from 'ngx-autosize';**/


@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }
  userprofile1() {
    this.navCtrl.push(Userprofile1Page);
  }
  userprofile2() {
    this.navCtrl.push(Userprofile2Page);
  }
  userprofile3() {
    this.navCtrl.push(Userprofile3Page);
  }
  userprofilepage() {
    this.navCtrl.push(UserprofilepagePage);
  }
  


}
