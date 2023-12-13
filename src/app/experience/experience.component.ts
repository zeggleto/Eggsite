import { Component } from '@angular/core';
import { ExperienceService } from './experience.service';

import { Experience } from './experience';
import { Skill } from './skill';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experience: Experience[] = [];
  skills: Skill[] = [];
  readonly levelDesc: string[] = [
    'Beginner', 'Capable', 'Proficient', 'Advanced', 'Expert'
  ];

  constructor(public eService: ExperienceService) {
    this.eService.getExperience().subscribe(
      experience => {
        this.experience = experience;
      }
    );
    this.eService.getSkills().subscribe(
      skills => {
        this.skills = skills;
      }
    );
  }

  getArray(level: number) {
    return new Array(level);
  }
}
