import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HogarComponent } from './hogar/hogar.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [AppComponent, HogarComponent, SobreComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
