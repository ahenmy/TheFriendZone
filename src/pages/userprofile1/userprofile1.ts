import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ZoneboxPage } from '../zonebox/zonebox';

/**
 * Generated class for the Userprofile1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userprofile1',
  templateUrl: 'userprofile1.html',
})
export class Userprofile1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Userprofile1Page');
  }
  zonebox() {
    this.navCtrl.push(ZoneboxPage);
  }

}
