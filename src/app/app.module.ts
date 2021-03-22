import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { CardSupComponent } from './card-sup/card-sup.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { CardBottomComponent } from './card-bottom/card-bottom.component';
import { ToggleSidebarComponent } from './toggle-sidebar/toggle-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GraphicsComponent,
    CardSupComponent,
    ChartBarComponent,
    CardBottomComponent,
    ToggleSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
