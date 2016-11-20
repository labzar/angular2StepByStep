import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// CREATE OUR COMPONENT
@Component({
  selector: 'my-app',
  template: '<h1>Hellooo World :) !!</h1>'
})
export class AppComponent { }

// CREATE OUR MODULE
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

// BOOTSTRAP OUR APPLICATION
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
