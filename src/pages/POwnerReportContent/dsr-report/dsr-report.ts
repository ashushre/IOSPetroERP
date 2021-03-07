import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, App } from 'ionic-angular';
import { BasicDataProvider } from '../../../providers/basic-data/basic-data';
import { ReportsProvider } from '../../../providers/reports/reports';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-dsr-report',
  templateUrl: 'dsr-report.html',
})
export class DsrReportPage {
  pumpId: number;
  productList: any;
  startDate: any;
  productId: number;
  currentDate: any;
  pageno:any;
  tDate: any;
  eDate: any;
  sDate: any;
  DSRReport:any[];
  //FuelSoldList = new Reports;
  start: Date;
  endDate: any;
  show: boolean = false;
  view: boolean = false;
  showRecord: boolean = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public loadingCtrl:LoadingController,
    public storage: Storage,
    public datePipe: DatePipe,
    public reportData: ReportsProvider,
    public basicData: BasicDataProvider,
    public appCtrl:App) {
    this.productId = 0;
    this.pageno = 1;
    let backAction = this.platform.registerBackButtonAction(() => {
     this.navCtrl.setRoot("PumpRelatedReportsPage");
      backAction();
    }, 1)
    this.currentDate = new Date().toLocaleDateString();
   // this.currentDate = this.datePipe.transform(this.currentDate, "yyyy-MM-dd");
  }

  ionViewDidLoad() {
    this.storage.get("pumpId").then(val => {
      this.pumpId = val;
      this.showProduct();
      this.endDate = new Date().toISOString();
      var currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - 6);
      this.start = currentDate;
      this.startDate = this.start;
     this.getDSRReport();
      // for (let i = 0; i < 5; i++) {
      //   this.FuelDetail.push( this.FuelDetail.length );
      // }
    },err=>{
      console.log(err);
    });
  }

  home() {
   this.navCtrl.setRoot("PumpRelatedReportsPage");
  }
  
  showProduct() {
    this.reportData.getProductList(this.pumpId).subscribe(
      res => {
        this.productList = res;
      },
      err => {
        this.basicData.sendErrorNotification(
          "There is some issue. Please TRY again!!!"
        );
      });
  }

  ProductSelect(productID) {
    this.productId = productID;
    this.getDSRReport();
    // this.pumpSummaryFilter = this.pumpSummary.filter(v => v.productId === productID);
    // console.log(this.pumpSummaryFilter);
  }

  onChange(value) {
    switch (value) {
      case '1':
        this.startDate = new Date().toISOString();
        this.endDate = new Date().toISOString();
        this.getDSRReport();
        this.show = false;
        break;

      case '2':
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 1);
        this.start = currentDate;
        this.startDate = this.start.toISOString();
        this.endDate = this.startDate;
        this.getDSRReport();
        this.show = false;
        break;
      case '3':
        currentDate = new Date();
        this.endDate = new Date().toISOString();
        currentDate.setDate(currentDate.getDate() - 2);
        this.start = currentDate;
        this.startDate = this.start.toISOString();
        this.getDSRReport();
        this.show = false;
        break;
      case '4':
        currentDate = new Date();
        this.endDate = new Date().toISOString();
        currentDate.setDate(currentDate.getDate() - 6);
        this.start = currentDate;
        this.startDate = this.start.toISOString();
        this.getDSRReport();
        this.show = false;
        break;
      case '5':
        currentDate = new Date();
        this.endDate = new Date().toISOString();
        currentDate.setDate(currentDate.getDate() - 14);
        this.start = currentDate;
        this.startDate = this.start.toISOString();
        this.getDSRReport();
        this.show = false;
        break;
      case '6':
        currentDate = new Date();
        this.endDate = new Date().toISOString();
        currentDate.setDate(1);
        this.start = currentDate;
        this.startDate = this.start.toISOString();
        this.getDSRReport();
        this.show = false;
        break;
      case '7':
        currentDate = new Date();

        currentDate.setDate(1);
        var currentMonth = currentDate.getMonth() - 1;
        currentDate.setMonth(currentMonth);
        this.start = currentDate;
        this.startDate = this.start.toISOString();
        // var currentDate = new Date();
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var lastDay = new Date(y, m, 0);
        this.start = lastDay;
        this.endDate = this.start.toISOString();
        this.getDSRReport();
        break;
      case '8':
        this.show = true;
        break;
    }
  }

  dateChanged(item) {
    if (this.sDate == undefined || this.eDate == undefined) {
    }
    else {
      this.startDate = this.sDate;
      this.endDate = this.eDate;
      this.getDSRReport();
    }

  }
   
  getDSRReport() {
    let loading = this.loadingCtrl.create({
        content: 'Please wait...',         enableBackdropDismiss: true,
    });

    loading.present();
    this.endDate = this.datePipe.transform(this.endDate, "yyyy-MM-dd");
    this.startDate = this.datePipe.transform(this.startDate, "yyyy-MM-dd");
    this.tDate = this.startDate + ',' + this.endDate;
    this.reportData.getDSRReport(this.pumpId,this.productId,this.tDate).subscribe(res=>{
     loading.dismiss();
          this.DSRReport=res;
            console.log(this.DSRReport);
      if (this.DSRReport.length == 0) {
        this.showRecord = true;
        this.view = false;
      }
      else {
        this.showRecord = false;
        this.view = true;
      }
    }, err => {

      this.basicData.sendErrorNotification("There is some issue. Please TRY again!!!");
      loading.dismiss();
    })
  }

  // menuClick() {
  //   this.basicData.checkPumpCount(); 
  // }

}
