import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CounselorsPage } from '../counselors/counselors';
import { BoardsPage } from '../boards/boards';

/**
 * Generated class for the ArticlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlesPage');
  }

  counselors() {
    this.navCtrl.push(CounselorsPage);
  }

  boards() {
    this.navCtrl.push(BoardsPage);
  }



}
