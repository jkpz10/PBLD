import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//ADDED IMPORTS
import { UtilitiesPage } from '../utilities/utilities';
import { GamingUtilPage } from '../gaming-util/gaming-util';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the PurposePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-purpose',
  templateUrl: 'purpose.html',
})
export class PurposePage {

  home:boolean = false;
  gaming:boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurposePage');
  }

  goToSecondBld(title){
     if (this.home == true && this.gaming == true ){
      const toast = this.toastCtrl.create({
        message: 'Must select 1 item only',
        duration: 3000
      });
      toast.present();
      console.log("Must select 1 item only");
    } else if (this.home == true) {
      title = 'Commonly Used Apps';
      let purpose = 'home';
      this.navCtrl.push(UtilitiesPage,{data: title, purpose:purpose});
      console.log(purpose);
    } else if (this.gaming == true) {
      title = 'Commonly Played Games';
      let purpose = 'gaming';
      this.navCtrl.push(GamingUtilPage,{data: title,purpose:purpose});
      console.log(purpose);
    }else {
      console.log("Must select 1 item only");
    }
  }

}
