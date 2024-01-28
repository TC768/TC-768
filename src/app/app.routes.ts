import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResourceComponent } from './pages/resource/resource.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'aboutUs', component: AboutUsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'resources', component: ResourceComponent},
    {path: '**', component: PageNotFoundComponent}
];
