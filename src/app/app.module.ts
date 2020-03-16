import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainContainerComponent } from './components/app-main-container/app-main-container.component';
import { AppGridComponent } from './components/app-grid/app-grid.component';
import { AppDropdownComponent } from './components/app-dropdown/app-dropdown.component';
import { HttpClientModule } from '@angular/common/http';

import { DevExtremeModule } from 'devextreme-angular';
import { GobServices } from './services/gob.services';

@NgModule({
  declarations: [
    AppComponent,
    AppMainContainerComponent,
    AppGridComponent,
    AppDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    HttpClientModule
  ],
  providers: [GobServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
