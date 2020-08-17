import { Component } from '@angular/core';
import { IonicPage,App, NavController, NavParams } from 'ionic-angular';
import { MessageDetail } from '../message-detail/message-detail';
import { NewMessage } from '../new-message/new-message';



@IonicPage()
@Component({
  selector: 'page-zonebox',
  templateUrl: 'zonebox.html',
})
export class ZoneboxPage {

  public messages = [
    {
      id: 1,
      profile_img: "assets/imgs/Karen.jpg",
      sender: 'Karen',
      last_message: 'How is your day going?',
      time: '6h'
    },
    {
      id: 2,
      profile_img: "assets/imgs/James.jpg",
      sender: 'James',
      last_message: 'LOL. Thanks for the information...',
      time: '11h'
    },
    {
      id: 3,
      profile_img: "assets/imgs/Karen.jpg",
      sender: 'Karen',
      last_message: 'Did you see the new Avengers movie?',
      time: '1d'
    },
    {
      id: 4,
      profile_img: "assets/imgs/George.jpg",
      sender: 'George',
      last_message: 'Would you like to talk about it?',
      time: '3d'
    },
    {
      id: 5,
      profile_img: "assets/imgs/Ashley.jpg",
      sender: 'Ashley',
      last_message: 'Hi, how are you liking the app',
      time: '4d'
    },
    {
      id: 6,
      profile_img: "assets/imgs/mindfulbanner1.PNG",
      sender: 'Ur Bestie',
      last_message: 'Hey, funny finding you on here',
      time: '6d'
    },
    {
      id: 7,
      profile_img: "assets/imgs/marty-avatar.png",
      sender: 'Juss Browsin',
      last_message: "Hi, I'm new too. Doc left me 1985",
      time: '5d'
    },
    {
      id: 7,
      profile_img: "assets/imgs/logosnip.JPG",
      sender: 'CEO AJ',
      last_message: "Welcome to TheFriendZone...",
      time: '7d'
    },
    
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZoneboxPage');
  }

  goNewMessage() {
    this.app.getRootNav().push(NewMessage);
  }

  goMessageDetail(sender:string, profile_img:string, last_message:string) {
    this.app.getRootNav().push(MessageDetail, { sender: sender, profile_img: profile_img, last_message: last_message});
  }

}
