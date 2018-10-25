import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BaseBuildPage } from './base-build';

@NgModule({
  declarations: [
    BaseBuildPage,
  ],
  imports: [
    IonicPageModule.forChild(BaseBuildPage),
  ],
})
export class BaseBuildPageModule {}
