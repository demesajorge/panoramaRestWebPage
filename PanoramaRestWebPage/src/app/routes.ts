import {Routes, RouteConfigLoadEnd} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {
      path: '', // localhost:4200/''/members
      children: [
        {path: 'about', component: AboutComponent },
        {path: 'contact', component: ContactComponent},
      ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
