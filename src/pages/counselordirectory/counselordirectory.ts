import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenericcounselorPage } from '../genericcounselor/genericcounselor';

/**
 * Generated class for the CounselordirectoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-counselordirectory',
  templateUrl: 'counselordirectory.html',
})
export class CounselordirectoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CounselordirectoryPage');
  }
  genericcounselor() {
    this.navCtrl.push(GenericcounselorPage);
  }


}
