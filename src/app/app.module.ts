import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PricesComponent } from './components/prices/prices.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { NgxMasonryModule } from 'ngx-masonry';
import { ServicesComponent } from './components/services/services.component';
import { ServiceItemComponent } from './components/service-item/service-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    GalleryComponent,
    FooterComponent,
    AboutComponent,
    PricesComponent,
    ServicesComponent,
    ServiceItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollCoreModule,
    FontAwesomeModule,
    GalleryModule.forRoot(),
    NgxMasonryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
