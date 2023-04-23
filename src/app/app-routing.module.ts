import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';

import { BlogComponent } from './blog/blog.component';
import { ViewerComponent } from './blog/viewer/viewer.component';
import { LoaderComponent } from './blog/loader/loader.component';

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
