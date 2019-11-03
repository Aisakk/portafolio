import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
/*Componentes */
import { MenuComponent } from '../components/menu/menu.component';
import { HomeComponent } from '../components/home/home.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';

import { AboutComponent } from '../about/about.component';
import {FooterComponent} from '../components/footer/footer.component';
import { JmsComponent } from '../components/jms/jms.component';
import { IntevepComponent } from '../components/intevep/intevep.component';
import { OasisComponent } from '../components/oasis/oasis.component';
import { ConvertComponent} from '../components/convert/convert.component';

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    PortfolioComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule,
    MatDialogModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  exports:[  
    RouterModule,
    CommonModule,
    MatListModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    HomeComponent,
    PortfolioComponent,
    MenuComponent,
    MatDialogModule,
    FooterComponent,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  entryComponents:[
    AboutComponent,
    FooterComponent,
    IntevepComponent,
    OasisComponent,
    JmsComponent,
    ConvertComponent
  ]
  
})
export class ModuleModule { }
