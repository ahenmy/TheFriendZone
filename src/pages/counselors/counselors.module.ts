import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CounselorsPage } from './counselors';

@NgModule({
  declarations: [
    CounselorsPage,
  ],
  imports: [
    IonicPageModule.forChild(CounselorsPage),
  ],
})
export class CounselorsPageModule {}
