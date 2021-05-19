import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminContentDashboardAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-content-dashboard-admin',
  templateUrl: 'admin-content-dashboard-admin.html',
})
export class AdminContentDashboardAdminPage {
  shownGroup = null;
  FuelDetail=[];
  Employees=[];
  Credits=[];
  loyalty=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.FuelDetail=[{
      Pump:"OmPetro",
      Oil:"BPCL",
      State:"HARYANA"
    },{
      Pump:"Shree Rohtash",
      Oil:"BPCL",
      State:"HARYANA"
    },{
      Pump:"RVKM",
      Oil:"IOCL",
      State:"HARYANA"
    },{
      Pump:"Jankinath",
      Oil:"BPCL",
      State:"U.P"
    },
  ]
  this.Employees=[{
    Pump:"BPCL",
    Oil:"OM Petro",
    State:"45"
  },{
    Pump:"BPCL",
    Oil:"RVKM",
    State:"19"
  },{
    Pump:"IOCL",
    Oil:"NAVUDAY",
    State:"25"
  },{
    Pump:"HP",
    Oil:"HP BEST FUEL",
    State:"26"
  },
]
this.Credits=[{
  Pump:"ABC Typt",
  Oil:"6",
  State:"321",
  allot:"5,65,00,000",
  used:"3,00,55,000",
  percen:"53"
},{
  Pump:"RCM",
  Oil:"41",
  State:"680",
  allot:"2,75,00,000",
  used:"1,95,00,000",
  percen:"71"
},{
  Pump:"Camions",
  Oil:"65",
  State:"2150",
  allot:"6,90,000",
  used:"6,84,000",
  percen:"99"
},{
  Pump:"express TPT",
  Oil:"2",
  State:"300",
  allot:"95,00,000",
  used:"21,53,000",
  percen:"23"
},
{
  Pump:"bowser",
  Oil:"35",
  State:"349",
  allot:"35,55,000",
  used:"21,97,000",
  percen:"62"
},
]

this.loyalty=[{
  Pump:"express Typt",
  Test:"express9",
  Oil:"8989898989",
  State:"321",
  allot:"5,65,00,000",
  used:"3,00,55,000",
  percen:"53"
},{
  Pump:"RCM",
  Test:"rcm20",
  Oil:"9898989898",
  State:"680",
  allot:"2,75,00,000",
  used:"1,95,00,000",
  percen:"71"
},{
  Pump:"Camions",
  Test:"camp9",
  Oil:"98659865",
  State:"2150",
  allot:"6,90,000",
  used:"6,84,000",
  percen:"99"
},{
  Pump:"ABC TPT",
  Test:"abc35",
  Oil:"999995555",
  State:"300",
  allot:"95,00,000",
  used:"21,53,000",
  percen:"23"
},
{
  Pump:"bowser jaibharat",
  Test:"bowser2",
  Oil:"9879898798",
  State:"349",
  allot:"35,55,000",
  used:"21,97,000",
  percen:"62"
},
]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminContentDashboardAdminPage');
    console.log(this.FuelDetail)
  }
  toggleGroup(group) {

    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  }

  isGroupShown(group) {
    return this.shownGroup === group;
  }
}
