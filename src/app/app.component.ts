import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Project } from './projects/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projects: Project[] = [];
  @ViewChild('navbarToggler') navbarToggler: ElementRef

  constructor(private _service: HttpClient) {
    this._service.get('../assets/data/projects.json').subscribe(
      data => {
        this.projects = data as Project[];
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }


  formatProjectRoute(projectName: string) {
    return projectName.replace(/\s/g, '').toLowerCase();
  }
}
