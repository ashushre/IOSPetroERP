import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TdriverEditPage } from './tdriver-edit';
import { PipesModule } from './../../../pipes/pipes.module';

@NgModule({
  declarations: [
    TdriverEditPage,
  ],
  imports: [
    IonicPageModule.forChild(TdriverEditPage),PipesModule
  ],
})
export class TdriverEditPageModule {}
