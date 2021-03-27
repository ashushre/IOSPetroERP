import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoyaltyDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-loyalty-dashboard',
  templateUrl: 'loyalty-dashboard.html',
})
export class LoyaltyDashboardPage {
  public my_Class = 'style1';
  name: any;
  username: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
  }

  ionViewDidLoad() {
    this.my_Class = 'col6';

    console.log('ionViewDidLoad LoyaltyDashboardPage');
    this.storage.get('username').then((val) => {
      this.username = val;
    }, err => {
      console.log(err);
    });
    this.storage.get('name').then((val) => {
      this.name = val;
    }, err => {
      console.log(err);
    });
  }
  pumpsPage()
{
  this.navCtrl.setRoot('LoyaltyPumpsPage');
}
}
