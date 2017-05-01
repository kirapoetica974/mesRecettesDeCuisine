import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdCardModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdButtonToggleModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdTabsModule,
  MdTooltipModule,
  OverlayModule,
  PortalModule,
  RtlModule,
  MdRippleModule
} from '@angular/material';

import { AppComponent } from './app.component';

const MATERIAL_MODULES = [
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  OverlayModule,
  PortalModule,
  RtlModule,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MATERIAL_MODULES,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
