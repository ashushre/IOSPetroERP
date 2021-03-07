import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, App, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TDriver } from '../../../app/tdriver';
import { TransDataProvider } from '../../../providers/trans-data/trans-data';
import { BasicDataProvider } from '../../../providers/basic-data/basic-data';
import { POwnerHomePage } from '../../POwnerContent/p-owner-home/p-owner-home';
import { PManagerHomePage } from '../../PMAnagerContent/p-manager-home/p-manager-home';
import { DsmHomePage } from '../../DSMContent/dsm-home/dsm-home';
import { TransporterPage } from '../../TransportersContent/transporter/transporter';
import { LoginPage } from '../../ALLContent/login/login';
import { Network } from '@ionic-native/network';
import { CreditDataProvider } from '../../../providers/credit-data/credit-data';

@IonicPage()
@Component({
  selector: 'page-tdriver-edit',
  templateUrl: 'tdriver-edit.html',
})
export class TdriverEditPage {
  userType:string;
  alertTime: any;
  flag: any;
  hourDiff: number;
  minDiff: number;
  constructor(public navCtrl: NavController,
    public appCtrl:App,
    public storage:Storage,
    public platform:Platform,
    public creditdata:CreditDataProvider,
    public network:Network, 
    public navParams: NavParams) {
   this.platform.registerBackButtonAction(() => {
     this.navCtrl.setRoot("TdriverEditPage");
    });
  
  }

  ionViewDidLoad() {
    this.storage.get('userType').then((val) => {
      this.userType = val;
      this. checkAlertDown()
    },err=>{
      console.log(err);
    });
    
  }
  checkAlertDown() {
    this.creditdata.checkAlertDown().subscribe((res:any) => {
   console.log(res)
      if(res.data!=null)
      {
        this.alertTime = res.data;
        this.flag=res.flag
      }
      var inputDate = new Date(this.alertTime.datetime);

// Get today's date
var todaysDate = new Date();
var todaysDate1 = new Date();
var inputDate1 = new Date(this.alertTime.datetime);
var outputDate1 = new Date(this.alertTime.endDateTime);

var startTime = new Date(this.alertTime.datetime); 
var endTime = new Date(this.alertTime.endDateTime);
var difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds
this.minDiff = Math.round(difference / 60000);
if(this.hourDiff>60)
{
  this.hourDiff=endTime.getHours()-startTime.getHours();
}
else{
  this.hourDiff=0;
}


if(inputDate1.setHours(0,0,0,0) == todaysDate1.setHours(0,0,0,0)) {
    // Date equals today's date
    console.log("yes its",inputDate,todaysDate)
}
var today = new Date().getTime(); // 1501653935994
var from = new Date(inputDate).getTime(); // gives 1486492200000
var to = new Date(outputDate1).getTime();
console.log(from,to)
if(today >= from && today <= to) {
   // your code goes here
   //this.navCtrl.setRoot("TdriverEditPage");

}
else{
  switch (this.userType) {
    case '11':
     this.navCtrl.setRoot(POwnerHomePage);
      break;
    case '12':
     this.navCtrl.setRoot(PManagerHomePage);
      break;
    case '13':
     this.navCtrl.setRoot(DsmHomePage);
      break;
    case '21':
     this.navCtrl.setRoot(TransporterPage);
      break;
    case '22':
     this.navCtrl.setRoot(TransporterPage);
      break;
  }
}
     
    });
  }
}
