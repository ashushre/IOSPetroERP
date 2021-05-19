import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events, Platform, AlertController, App, LoadingController } from 'ionic-angular';
import { TDriver } from '../../../app/tdriver';
import { TransDataProvider } from '../../../providers/trans-data/trans-data';
import { BasicDataProvider } from '../../../providers/basic-data/basic-data';
import { LoginPage } from './../../ALLContent/login/login';
import { TransporterPage } from './../../TransportersContent/transporter/transporter';
import { PManagerHomePage } from './../../PMAnagerContent/p-manager-home/p-manager-home';
import { POwnerHomePage } from './../../POwnerContent/p-owner-home/p-owner-home';
import { DsmHomePage } from './../../DSMContent/dsm-home/dsm-home';
// import { FCM } from '@ionic-native/fcm';
/**
 * Generated class for the TdriverDeactivatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tdriver-deactivate',
  templateUrl: 'tdriver-deactivate.html',
})
export class TdriverDeactivatePage {
  id: any;
  error1:any;
  public rootPage: any;
  public activate: Boolean;
  public deactivate: Boolean;
  driverCount: number;
  public tdriver = new TDriver;
  public errorMsg: any
  recievedData: any;
  userType: any;
  constructor(public navCtrl: NavController,
    public platform: Platform,
    public appCtrl: App,
    // public  fcm:FCM,
    public events: Events,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController,
    public storage: Storage,
    public storage2:Storage,
    public transData: TransDataProvider,
    public basicData: BasicDataProvider,
    public navParams: NavParams) {
    let backAction = this.platform.registerBackButtonAction(() => {
      this.storage.get('userType').then((val) => {
        this.userType = val;
        if (this.userType == undefined || this.userType == null) {
          this.navCtrl.setRoot( LoginPage);
        }
        else {
          switch (this.userType) {

            case '11':
              this.navCtrl.setRoot( POwnerHomePage);
              break;
            case '12':
              this.navCtrl.setRoot( PManagerHomePage)
              break;
            case '13':
              this.navCtrl.setRoot( DsmHomePage);
              break;
            case '21':
            this.navCtrl.setRoot( TransporterPage)
           //this.navCtrl.setRoot(TransporterPage, { data: data });
              break;
            case '22':
              this.navCtrl.setRoot( TransporterPage);
             // this.navCtrl.setRoot(TransporterPage, { data: data });
              break;
          }
    }
     });
      backAction();
    }, 1)
   
      this.recievedData=this.storage.get('notdata').then((val) => {
     // this.basicData.sendSuccessNotification(this.recievedData)
     this.recievedData=val;
      let alert = this.alertCtrl.create({
       message: this.recievedData,
         enableBackdropDismiss: false,
       buttons: [
         {
           text: 'Ok',
           role: 'Ok',
           handler: () => {
           //  this.storage2.clear();
             this.storage.get('userType').then((val) => {
              this.userType = val;
              if (this.userType == undefined || this.userType == null) {
                this.navCtrl.setRoot( LoginPage);
              }
              else {
                switch (this.userType) {
      
                  case '11':
                    this.navCtrl.setRoot( POwnerHomePage);
                    break;
                  case '12':
                    this.navCtrl.setRoot( PManagerHomePage)
                    break;
                  case '13':
                    this.navCtrl.setRoot( DsmHomePage);
                    break;
                  case '21':
                  this.navCtrl.setRoot( TransporterPage)
                 //this.navCtrl.setRoot(TransporterPage, { data: data });
                    break;
                  case '22':
                    this.navCtrl.setRoot( TransporterPage);
                   // this.navCtrl.setRoot(TransporterPage, { data: data });
                    break;
                }
          }
           });
           }
         },
       ]
     });
     alert.present();
       });

  }

//   ionViewDidLoad() {
//     //this.basicData.Loader();
//     this.id = this.navParams.get('param1');
//     this.storage.get('driverCount').then((val) => {
//       this.driverCount = val;
//     },err=>{
//       console.log(err);
//     });
//     let loading = this.loadingCtrl.create({
//         content: 'Please wait...',         enableBackdropDismiss: true,
//     });
//     loading.present();
//     this.transData.getTDriver(this.id).subscribe(res => {
//       this.tdriver = res;
//       loading.dismiss();
//       var Suc = JSON.stringify(res);
//   this.error1 = JSON.parse(Suc).error;
//   this.tdriver= JSON.parse(Suc).tdriver;
//       if (this.tdriver.active == 0) {
//         this.activate = true;
//         this.deactivate = false;
//       }
//       else {
//         this.deactivate = true;
//         this.activate = false;
//       }
//     }, err => {
//       this.errorMsg = err;
//       loading.dismiss();
//       this.basicData.sendErrorNotification("There is some issue. Please TRY again!!!");
//     });
//   }
//   deactDriver(id) {
//     if(this.error1==1)
//     {
//       this.basicData.sendErrorNotification("There is pending request for this driver you cannot deactivate it");
//     }
//     else
//     {
//     let alert = this.alertCtrl.create({
//       message: 'Do you really want to Deactivate?',
//         enableBackdropDismiss: true,
//       buttons: [
//         {
//           text: 'Cancel',
//           role: 'cancel',
//           handler: () => {
//           }
//         },
//         {
//           text: 'Ok',
//           handler: () => {
//             this.transData.getTDriverDeactivate(this.id)
//               .subscribe(res => {
//                 var Sucess = JSON.stringify(res);
//                 var error = JSON.parse(Sucess).error;
//                   if (error == undefined || error == null) {
//                     this.basicData.sendSuccessNotification("Driver Deactivated Successfully");
//                    this.navCtrl.setRoot('TDriverListPage', {
//                       id: 'deact'
//                     });
//                   }
//                   else {
//                  this.basicData.sendErrorNotification(error);
//                   }
//               }, err => {
//                 this.errorMsg = err;
//                 this.basicData.sendErrorNotification("There is some issue. Please TRY again!!!");
//               })
//           }
//         }
//       ]
//     });
  
//     alert.present();
//   }
//   }
//   actDriver(id) {
//     let alert = this.alertCtrl.create({
//       // title: 'Confirm purchase',
//       message: 'Do you really want to Activate?',
//         enableBackdropDismiss: true,
//       buttons: [
//         {
//           text: 'Cancel',
//           role: 'cancel',
//           handler: () => {
//           }
//         },
//         {
//           text: 'Ok',
//           handler: () => {
//             this.transData.getTDriverActivate(this.id)
//               .subscribe(res => {
//               var Sucess = JSON.stringify(res);
//               var error = JSON.parse(Sucess).error;
//                 if (error == undefined || error == null) {
//                   this.basicData.sendSuccessNotification("Driver Activated Successfully");
//                  this.navCtrl.setRoot('TDriverListPage');
//                 }
//                 else {
//                this.basicData.sendErrorNotification(error);
//                 }
//             }, err => {
//               this.errorMsg = err;
//               this.basicData.sendErrorNotification("There is some issue. Please TRY again!!!");
//             })
//           }
//         }
//       ]
//     });
//     alert.present();

//   }
//   editPage(id) {
//     if (this.error1==0) {
//      this.navCtrl.setRoot('TdriverEditPage', {
//         param1: id
//       });
//     }
//     else
//     {
// this.basicData.sendErrorNotification("There is pending request for this driver you cannot edit it");
//     }
    
//   }
  
//   doRefresh(refresher) {
//     this.ionViewDidLoad();
//     setTimeout(() => {
//       refresher.complete();
//     }, 2000);
//   }
//   menuClick() {
//     this.basicData.checkTransCount();
//   }
//   home(){
//    this.navCtrl.setRoot('TDriverListPage');
//   }
}
