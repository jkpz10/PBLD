import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BldResultPage } from '../bld-result/bld-result';

/**
 * Generated class for the BudgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html',
})
export class BudgetPage {

  //holds data of last selection of item
  purpose;
  buildType: string;

  //BUDGET RANGE VALUE
  budget: string;

  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {
    this.buildType = navParams.get('data');
    this.purpose = navParams.get('purpose');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BudgetPage');
  }

  goToFinalBld() {

    if( this.budget != "" ) {
      console.log(this.budget,this.buildType,this.purpose);
      this.navCtrl.push(BldResultPage, { budget: this.budget, buildType: this.buildType,purpose:this.purpose });
      
    } else {
      const toast = this.toastCtrl.create({
        message: 'select 1 item only',
        duration: 3000
      });
      toast.present();
      console.log('Select 1 item');
    }


    // console.log(budget, buildType);

  }

}
