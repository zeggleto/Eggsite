import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  project: Project = {
    name: '',
    shortDesc: '',
    longDesc: '',
    technologies: [],
    imageUrl: [],
    gitLink: '',
    projLink: ''
  };
  name = '';

  constructor(private route: ActivatedRoute, private _router: Router, public pService: ProjectService) {
    this.getProject();
  }

  getProject() {
    this.name = this.route.snapshot.paramMap.get('name')!;
    this.pService.getProject(this.name).subscribe(
      project => {
        if (!project) { this._router.navigate(['/error']); return; }
        this.project = project;
      }
    );
    this.route.url.subscribe(url => {
      this.pService.getProject(url[0].path).subscribe(
        project => {
          this.project = project;
        }
      );
    });
  }

  goToGithub(url: string) {
    window.open(url);
  }

  goToProject(url: string) {
    window.open(url);
  }
}
