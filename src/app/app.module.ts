import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutUsComponent } from './dashboard/about-us/about-us.component';
import { OurServicesComponent } from './dashboard/our-services/our-services.component';
import { OurProgramsComponent } from './dashboard/our-programs/our-programs.component';
import { ContactUsComponent } from './dashboard/contact-us/contact-us.component';

import { RouterModule,Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { PageNotFoundComponent } from './dashboard/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '',redirectTo: '/home' ,pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'our-services', component:OurServicesComponent},
  {path: 'our-programs', component:OurProgramsComponent},
  {path: 'contact-us', component:ContactUsComponent},
  {path: '**', component: PageNotFoundComponent}
 
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    OurServicesComponent,
    OurProgramsComponent,
    ContactUsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    
    {provide:APP_BASE_HREF,useValue:'/'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
