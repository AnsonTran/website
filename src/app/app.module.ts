import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


// Pages
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';

// Shared Components
import {
  NavbarComponent,
  SideNavbarComponent,
  CardComponent,
  HamburgerButtonComponent
} from './components';

// Components
import { HeaderComponent } from './home/header/header.component';
import { ViewerComponent } from './blog/viewer/viewer.component';
import { LoaderComponent } from './blog/loader/loader.component';

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
