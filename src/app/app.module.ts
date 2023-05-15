import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    OfertasComponent,
    FooterComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
