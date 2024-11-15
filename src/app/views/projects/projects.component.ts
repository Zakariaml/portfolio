import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Project {
  title: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  imports: [NgFor],
  standalone: true
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Project 1',
      description: 'A brief description of your first project goes here.'
    },
    {
      title: 'Project 2',
      description: 'A brief description of your second project goes here.'
    },
    {
      title: 'Project 3',
      description: 'A brief description of your third project goes here.'
    },
    {
      title: 'Project 4',
      description: 'A brief description of your fourth project goes here.'
    }
  ];
}
