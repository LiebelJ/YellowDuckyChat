import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LangComponent } from './lang/lang.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lang',
    component: LangComponent
  },
  {
    path: 'chatroom',
    component: ChatroomComponent
  },
  // {
  //   path: 'about',
  //   loadChildren: './about/about.module#AboutModule'
  // },
  { path: 'search', component: SearchComponent },
  { path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
