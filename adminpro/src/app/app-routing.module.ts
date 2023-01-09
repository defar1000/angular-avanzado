import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { NotpagesfoudComponent } from './notpagesfoud/notpagesfound.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  // '/dashboard' PagesRoutingModule
  // '/auth' AuthRoutingModule
  { path: '**', component:NotpagesfoudComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
