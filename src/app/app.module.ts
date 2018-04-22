import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatProgressSpinnerModule, MatToolbarModule, MatListModule, MatGridListModule, MatIconModule, MatCardModule } from '@angular/material';
import {AppRoutingModule} from './app.routing.module';
import { FormsModule } from '@angular/forms';
import {MichaelComponent } from './michael/michael.component';


import { HomeComponent } from './home/home.component';
import { AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, MichaelComponent
  ],
  imports: [ AppRoutingModule, FormsModule, BrowserModule, MatProgressSpinnerModule , MatButtonModule, MatListModule, MatGridListModule, MatToolbarModule, MatIconModule, MatCardModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
