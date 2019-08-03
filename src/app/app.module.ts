import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarComponent } from '../components/car/car.component';
import { CarListComponent } from '../components/car-list/car-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CarComponent, CarListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
