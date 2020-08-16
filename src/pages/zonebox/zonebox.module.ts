import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoneboxPage } from './zonebox';

@NgModule({
  declarations: [
    ZoneboxPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneboxPage),
  ],
})
export class ZoneboxPageModule {}
