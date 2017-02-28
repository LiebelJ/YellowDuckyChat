import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { dashboardRouting } from './dashboard.routing';
import { DashboardUsersComponent } from './users/dashboard-users.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details.component';
import { UserService } from '../shared/services/user.service';

import {HttpModule, Http} from '@angular/http';
import {TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService} from 'ng2-translate';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    dashboardRouting,
    HttpModule,
    TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        })
    
  ],
  declarations: [
    DashboardComponent,
    DashboardUsersComponent,
    DashboardUsersHomeComponent,
    DashboardUserDetailsComponent,
    DashboardComponent
  ],
  providers: [
    UserService
  ]
})
export class DashboardModule {

}