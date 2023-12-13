import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  {path: '', component: IntroComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'projects', loadChildren: () => import('src/app/projects/projects.module').then(p => p.ProjectsModule)},
  {path: 'experience', component: ExperienceComponent},

  {path: '**', redirectTo: 'error'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
