import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleModule } from './module/module.module';
import { AboutComponent } from './about/about.component';
import { IntevepComponent } from './components/intevep/intevep.component';
import { OasisComponent } from './components/oasis/oasis.component';
import { JmsComponent } from './components/jms/jms.component';
import { ConvertComponent } from './components/convert/convert.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IntevepComponent,
    OasisComponent,
    JmsComponent,
    ConvertComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
