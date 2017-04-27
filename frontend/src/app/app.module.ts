import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { LangComponent } from './lang/lang.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';
import { ChatroomComponent } from './chatroom/chatroom.component';

import { ChatroomService } from './shared/services/chatroom.service';
import { UserService } from './shared/services/user.service';
import { LangService } from './shared/services/lang.service';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import 'hammerjs';

import {HttpModule, Http} from '@angular/http';
import {TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService} from 'ng2-translate';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    appRouting,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NotFoundComponent,
    ChatroomComponent,
    LangComponent,
  ],
  providers: [
    AuthGuard,
    CanDeactivateGuard,
    ChatroomService,
    UserService,
    LangService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
   
   constructor(translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
 
         // the lang to use, if the lang isn't available, it will use the current loader to get them
         translate.use('fr');        
  }
}
