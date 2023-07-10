import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';

import { BlogComponent } from './pages/blog/blog.component';
import { ViewerComponent } from './pages/blog/viewer/viewer.component';
import { LoaderComponent } from './pages/blog/loader/loader.component';

const routes: Routes = [
  { path: '',
    title: 'Anson Tran',
    component: HomeComponent,
  },
  { path: 'about',
    title: 'Anson Tran | About',
    component: AboutComponent
  },
  { path: 'projects',
    title: 'Anson Tran | Projects',
    component: ProjectsComponent
  },
  { path: 'blog',
    title: 'Anson Tran | Blog',
    component: BlogComponent
  },
  { path: 'blog/:course',
    component: LoaderComponent
  },
  { path: 'blog/:course/:page',
    component: ViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
