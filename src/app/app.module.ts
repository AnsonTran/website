import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


// Pages
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';

// Shared Components
import {
  NavbarComponent,
  SideNavbarComponent,
  CardComponent,
  HamburgerButtonComponent
} from './components';

// Components
import { HeaderComponent } from './pages/home/header/header.component';
import { ViewerComponent } from './pages/blog/viewer/viewer.component';
import { LoaderComponent } from './pages/blog/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    BlogComponent,
    AboutComponent,
    NavbarComponent,
    SideNavbarComponent,
    CardComponent,
    ViewerComponent,
    LoaderComponent,
    HamburgerButtonComponent,
  ],
  imports: [
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
