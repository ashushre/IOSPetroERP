import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminContentDashboardAdminPage } from './admin-content-dashboard-admin';

@NgModule({
  declarations: [
    AdminContentDashboardAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminContentDashboardAdminPage),
  ],
})
export class AdminContentDashboardAdminPageModule {}
