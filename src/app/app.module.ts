import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//ADDED IMPORTS
import { AboutPage } from '../pages/about/about';
import { PurposePage } from '../pages/purpose/purpose';
import { UtilitiesPage } from '../pages/utilities/utilities';
import { GamingUtilPage } from '../pages/gaming-util/gaming-util';
import { BaseBuildPage } from '../pages/base-build/base-build';
import { BudgetPage } from '../pages/budget/budget';
import { BldResultPage } from '../pages/bld-result/bld-result';

//custom imports
import { config } from './firebase.api';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { buildListService } from '../services/build-list/build-list.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    PurposePage,
    UtilitiesPage,
    GamingUtilPage,
    BaseBuildPage,
    BudgetPage,
    BldResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    PurposePage,
    UtilitiesPage,
    GamingUtilPage,
    BaseBuildPage,
    BudgetPage,
    BldResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    buildListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
