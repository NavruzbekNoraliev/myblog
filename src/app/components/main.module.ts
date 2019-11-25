import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { MainRoutes } from './main.routing';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FirstpageComponent } from './firstpage/firstpage.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainRoutes),
  ],
  declarations: [
    MainComponent,
    FirstpageComponent,

  ],
})
export class MainModule {
}
