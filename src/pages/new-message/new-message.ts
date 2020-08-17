import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-message',
  templateUrl: 'new-message.html',
})
export class NewMessage {

  public user_checked:boolean = false;
  public input_visible:boolean = false;

  public friends = [
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
      username: 'George',
      
    },
    {
      id: 5,
      profile_img: "assets/imgs/Ashley.jpg",
      username: 'Ashley',
      
    },
    {
      id: 6,
      profile_img: "assets/imgs/mindfulbanner1.PNG",
      username: 'Ur Bestie',
      
    },
    {
      id: 7,
      profile_img: "assets/imgs/marty-avatar.png",
      username: 'Juss Browsin',
      
    },
    {
      id: 7,
      profile_img: "assets/imgs/logosnip.JPG",
      username: 'CEO AJ',
      
    },
    
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  checkBox(username:string) {
    console.log('Username: ' + username);
    this.input_visible = true;
  }

}
