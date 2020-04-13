import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { FooterComponent } from './footer/footer.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      CarouselComponent,
      HomeComponent,
      AboutComponent,
      ContactComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      CarouselModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
