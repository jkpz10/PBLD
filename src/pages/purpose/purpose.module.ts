import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurposePage } from './purpose';

@NgModule({
  declarations: [
    PurposePage,
  ],
  imports: [
    IonicPageModule.forChild(PurposePage),
  ],
})
export class PurposePageModule {}
