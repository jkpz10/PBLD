import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//ADDED IMPORTS
import { PurposePage } from '../purpose/purpose';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  //METHODS
    //Navigate to about page when click

    goToFirstBld(){
      this.navCtrl.push(PurposePage);
    }
    
    goToAbout(){
      this.navCtrl.push(AboutPage);
    }

    
}
