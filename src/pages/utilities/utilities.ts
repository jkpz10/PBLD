import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseBuildPage } from '../base-build/base-build';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the UtilitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-utilities',
  templateUrl: 'utilities.html',
})
export class UtilitiesPage {

  //holds data from purpose page
  title: string; //title string 
  purpose; //home or gaming

  //checkbox check if true or false
  browser: boolean;
  office: boolean;
  adobe: boolean;
  media: boolean;
  security: boolean;
  ide: boolean;



  // selected = [
  //   this.browser
  // ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController
    ) {

    this.title = navParams.get('data');
    this.purpose = navParams.get('purpose');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UtilitiesPage');
  }

  goToThirdBld() {
    if (this.browser == true || this.office == true || this.adobe == true || this.media == true || this.security == true || this.ide == true) {

      this.purpose;
      console.log(this.purpose);
      this.navCtrl.push(BaseBuildPage, { purpose: this.purpose });
    }else {
      const toast = this.toastCtrl.create({
        message: 'Must select 1 or more item only',
        duration: 3000
      });
      toast.present();
    }
  }
}
