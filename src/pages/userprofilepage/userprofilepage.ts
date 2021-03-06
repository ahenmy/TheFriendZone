import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ZoneboxPage } from '../zonebox/zonebox';

/**
 * Generated class for the UserprofilepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userprofilepage',
  templateUrl: 'userprofilepage.html',
})
export class UserprofilepagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserprofilepagePage');
  }
  zonebox() {
    this.navCtrl.push(ZoneboxPage);
  }

}
