import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignShiftPage } from './assign-shift';

@NgModule({
  declarations: [
    AssignShiftPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignShiftPage),
  ],
})
export class AssignShiftPageModule {}
