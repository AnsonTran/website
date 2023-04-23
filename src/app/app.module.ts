import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './home/header/header.component';

// Pages
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';

// Shared components
import { NavbarComponent } from 'src/shared/components/navbar/navbar.component';
import { CardComponent } from 'src/shared/components/card/card.component';
import { ViewerComponent } from './blog/viewer/viewer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
    CardComponent,
    ViewerComponent,
    LoaderComponent,
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
