import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BoardsPage } from '../boards/boards';
import { Counselorprofile1Page } from '../counselorprofile1/counselorprofile1';
import { Counselorprofile2Page } from '../counselorprofile2/counselorprofile2';
import { CounselorprofilePage } from '../counselorprofile/counselorprofile';
import { CounselordirectoryPage } from '../counselordirectory/counselordirectory';



/**
 * Generated class for the CounselorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-counselors',
  templateUrl: 'counselors.html',
})
export class CounselorsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CounselorsPage');
  }

  boards() {
    this.navCtrl.push(BoardsPage);
  }

  counselorprofile1() {
    this.navCtrl.push(Counselorprofile1Page);
  }

  counselorprofile2() {
    this.navCtrl.push(Counselorprofile2Page);
  }
  counselorprofile() {
    this.navCtrl.push(CounselorprofilePage);
  }

  counselordirectory() {
    this.navCtrl.push(CounselordirectoryPage)
  }
}
