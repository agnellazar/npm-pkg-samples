import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionComponent } from 'src/components/description/description.component';
import { DemoComponent } from 'src/components/demo/demo.component';
import { FooterBarComponent } from 'src/components/footer-bar/footer-bar.component';
import { HeaderBarComponent } from 'src/components/header-bar/header-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    DemoComponent,
    FooterBarComponent,
    HeaderBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
