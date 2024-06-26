import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionComponent } from 'src/components/description/description.component';
import { DemoComponent } from 'src/components/demo/demo.component';
import { FooterBarComponent } from 'src/components/footer-bar/footer-bar.component';
import { HeaderBarComponent } from 'src/components/header-bar/header-bar.component';
import { FormsModule } from '@angular/forms';
import { TourComponent } from 'src/components/tour/tour.component';
import { BackgroundComponent } from 'src/components/background/background.component';
@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    DemoComponent,
    FooterBarComponent,
    HeaderBarComponent,
    TourComponent,
    BackgroundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
