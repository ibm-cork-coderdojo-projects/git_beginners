import {NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { MichaelComponent} from './michael/michael.component';


const routes: Routes = [
  {path: 'michael', component: MichaelComponent},
  {path: 'home', component: HomeComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule {}
