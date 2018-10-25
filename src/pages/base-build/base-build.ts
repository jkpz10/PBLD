import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BudgetPage } from '../budget/budget';

/**
 * Generated class for the BaseBuildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-base-build',
  templateUrl: 'base-build.html',
})
export class BaseBuildPage {

  //holds data of last selection of item
  purpose;

  amd: boolean = false;
  intel: boolean = false;
  buildType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.purpose = navParams.get('purpose');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaseBuildPage');
  }

  goToFouthBld() {

    if (this.amd == true && this.intel == true) {
      console.log('Select 1 item only')
    }
    else if (this.amd == true) {
      this.buildType = 'amd';
      console.log(this.buildType, this.purpose);
      this.navCtrl.push(BudgetPage, { data: this.buildType, purpose: this.purpose });
    } else if (this.intel == true) {
      this.buildType = 'intel';
      console.log(this.buildType, this.purpose);
      this.navCtrl.push(BudgetPage, { data: this.buildType, purpose: this.purpose });
    } else {
      console.log('no item selected');
    }
  }
}
