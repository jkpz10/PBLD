import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { buildListService } from '../../services/build-list/build-list.service';
/**
 * Generated class for the BldResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bld-result',
  templateUrl: 'bld-result.html',
})
export class BldResultPage {

  //declared Observable
  itemPart: Observable<any[]>;
  totalCash: Observable<any[]>;

  // Sum Total Cash variable
  sum = 0;
  sumRes: any;

  // holds the data from last pages
  budget;
  buildType;
  purpose;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private build: buildListService,
    public alertCtrl: AlertController
  ) {

    this.budget = navParams.get('budget');
    this.buildType = navParams.get('buildType');
    this.purpose = navParams.get('purpose');

    console.log(this.budget, this.buildType);

    //Algorithm to get results from database
    //intel home builds
    if (this.buildType == "intel" && this.budget == "lowEnd" && this.purpose == "home") {
      this.itemPart = this.build
        .homeIntelLow()
        .valueChanges();

      this.totalCash = this.build.homeIntelLow()
        .valueChanges()
        .subscribe(data => {
          data.forEach(item => {
            console.log("item", item.price);

            this.calculateSum(item.price);

          })
        }, (err) => {
          console.log("probleme : ", err)
        });
      console.log(this.itemPart);
    } else if (this.buildType == "intel" && this.budget == "midEnd" && this.purpose == "home") {
      this.itemPart = this.build
        .homeIntelMid()
        .valueChanges();

      this.totalCash = this.build.homeIntelMid()
        .valueChanges()
        .subscribe(data => {
          data.forEach(item => {
            console.log("item", item.price);

            this.calculateSum(item.price);

          })
        }, (err) => {
          console.log("probleme : ", err)
        });
      console.log(this.itemPart);
    } else if (this.buildType == "intel" && this.budget == "highEnd" && this.purpose == "home") {
      this.itemPart = this.build
        .homeIntelHigh()
        .valueChanges();

      this.totalCash = this.build.homeIntelHigh()
        .valueChanges()
        .subscribe(data => {
          data.forEach(item => {
            console.log("item", item.price);

            this.calculateSum(item.price);

          })
        }, (err) => {
          console.log("probleme : ", err)
        });
      console.log(this.itemPart);
    }
    //amd home builds
    else if (this.buildType == "amd" && this.budget == "lowEnd" && this.purpose == "home") {
      this.itemPart = this.build
        .homeAmdLow()
        .valueChanges();

      this.totalCash = this.build.homeAmdLow()
        .valueChanges()
        .subscribe(data => {
          data.forEach(item => {
            console.log("item", item.price);

            this.calculateSum(item.price);

          })
        }, (err) => {
          console.log("probleme : ", err)
        });
      console.log(this.itemPart);
    } else if (this.buildType == "amd" && this.budget == "midEnd" && this.purpose == "home") {
      this.itemPart = this.build
        .homeAmdMid()
        .valueChanges();

      this.totalCash = this.build.homeAmdMid()
        .valueChanges()
        .subscribe(data => {
          data.forEach(item => {
            console.log("item", item.price);

            this.calculateSum(item.price);

          })
        }, (err) => {
          console.log("probleme : ", err)
        });
      console.log(this.itemPart);
    } else if (this.buildType == "amd" && this.budget == "highEnd" && this.purpose == "home") {
      this.itemPart = this.build
        .homeAmdHigh()
        .valueChanges();

      this.totalCash = this.build.homeAmdHigh()
        .valueChanges()
        .subscribe(data => {
          data.forEach(item => {
            console.log("item", item.price);

            this.calculateSum(item.price);

          })
        }, (err) => {
          console.log("probleme : ", err)
        });
      console.log(this.itemPart);
    }
    //intel gaming builds
    else if (this.buildType == "intel" && this.budget == "lowEnd" && this.purpose == "gaming") {
      this.itemPart = this.build
        .gamingIntelLow()
        .valueChanges();

      this.totalCash = this.build.gamingIntelLow()
        .valueChanges()
        .subscribe(data => {
          data.forEach(item => {
            console.log("item", item.price);

            this.calculateSum(item.price);

          })
        }, (err) => {
          console.log("probleme : ", err)
        });
      console.log(this.itemPart);
    } else if (this.buildType == "intel" && this.budget == "midEnd" && this.purpose == "gaming") {
      this.itemPart = this.build
        .gamingIntelMid()
        .valueChanges();

      this.totalCash = this.build.gamingIntelMid()
        .valueChanges()
        .subscribe(data => {
          data.forEach(item => {
            console.log("item", item.price);

            this.calculateSum(item.price);

          })
        }, (err) => {
          console.log("probleme : ", err)
        });
      console.log(this.itemPart);
    } else if (this.buildType == "intel" && this.budget == "highEnd" && this.purpose == "gaming") {
      this.itemPart = this.build
        .gamingIntelHigh()
        .valueChanges();

      this.totalCash = this.build.gamingIntelHigh()
        .valueChanges()
        .subscribe(data => {
          data.forEach(item => {
            console.log("item", item.price);

            this.calculateSum(item.price);

          })
        }, (err) => {
          console.log("probleme : ", err)
        });
      console.log(this.itemPart);
    }
    //gaming AMD build
    else if (this.buildType == "amd" && this.budget == "lowEnd" && this.purpose == "gaming") {
      this.itemPart = this.build
        .gamingAmdLow()
        .valueChanges();

      this.totalCash = this.build.gamingAmdLow()
        .valueChanges()
        .subscribe(data => {
          data.forEach(item => {
            console.log("item", item.price);

            this.calculateSum(item.price);

          })
        }, (err) => {
          console.log("probleme : ", err)
        });
      console.log(this.itemPart);
    } else if (this.buildType == "amd" && this.budget == "midEnd" && this.purpose == "gaming") {
      this.itemPart = this.build
        .gamingAmdMid()
        .valueChanges();

      this.totalCash = this.build.gamingAmdMid()
        .valueChanges()
        .subscribe(data => {
          data.forEach(item => {
            console.log("item", item.price);

            this.calculateSum(item.price);

          })
        }, (err) => {
          console.log("probleme : ", err)
        });
      console.log(this.itemPart);
    } else if (this.buildType == "amd" && this.budget == "highEnd" && this.purpose == "gaming") {
      this.itemPart = this.build
        .gamingAmdHigh()
        .valueChanges();

      this.totalCash = this.build.gamingAmdHigh()
        .valueChanges()
        .subscribe(data => {
          data.forEach(item => {
            console.log("item", item.price);

            this.calculateSum(item.price);

          })
        }, (err) => {
          console.log("probleme : ", err)
        });
      console.log(this.itemPart);
    }

    this.showAlert();

  }
  calculateSum(value) { //Method to calculate sum of Price
    this.sum = this.sum + parseFloat(value);
    this.sumRes = this.sum.toFixed(2);
    console.log(this.sum);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BldResultPage');
  }

  itemSelected(item) {
    item = {
      class: item.class,
      name: item.name,
      price: item.price,
      type: item.type   
    }
    const alert = this.alertCtrl.create({
      title: `${item.class.toUpperCase()}`,
      subTitle: `${item.name}<br> Price: $${item.price}`,
      buttons: ['OK']
    });
    alert.present()

    console.log("Selected Item", item);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'TIP',
      subTitle: 'Take a screenshot, to save a copy of your computer specs',
      buttons: ['OK']
    });
    alert.present()
  }


}

//uppercase first letter
// .toLowerCase()
// .split(' ')
// .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
// .join(' ')