import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseBuildPage } from '../base-build/base-build';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the GamingUtilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gaming-util',
  templateUrl: 'gaming-util.html',
})
export class GamingUtilPage {

  //holds data from purpose page
  title: string; //title string 
  purpose; //home or gaming

  csgo: boolean;
  pubg: boolean;
  overwatch: Boolean;
  fortnite: boolean;
  gta: boolean;
  nba: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController
    ) {
    this.title = navParams.get('data');
    this.purpose = navParams.get('purpose');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamingUtilPage');
  }


  goToThirdBld() {
    if (this.csgo == true || this.pubg == true || this.fortnite == true || this.overwatch == true || this.gta == true || this.nba == true) {

      this.purpose;
      console.log(this.purpose);
      this.navCtrl.push(BaseBuildPage, { purpose: this.purpose });
    } else {
      const toast = this.toastCtrl.create({
        message: 'Must select 1 or more item only',
        duration: 3000
      });
      toast.present();
    }
  }
}
