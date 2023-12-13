import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  constructor(private _projectService: ProjectService,
              private _router: Router) { }

  ngOnInit() {
    this._projectService.getProjects().subscribe(
      projects => {
        this.projects = projects;
      }
    );
  }

  goToProject(projectName: string) {
    projectName = projectName.replace(/\s/g, '').toLowerCase();
    this._router.navigate(['/projects/' + projectName]);
  }
}
