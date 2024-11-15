import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExperienceDialogComponent } from './experience-dialog.component';
import { NgFor } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  imports: [NgFor]
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Application Developer',
      company: 'Sopra Banking Software',
      period: 'May 2023 – Present',
      description: 'Crafting features and debugging in .NET and Angular, collaborating with teams, and connecting external APIs to keep projects running smoothly.',
      responsibilities: [
        'Develop and design technical features using .NET and Angular',
        'Track project progress with the development and QA teams',
        'Identify and fix bugs, and continuously improve features',
        'Write unit tests to ensure functionality',
        'Participate in code reviews to maintain best practices and code quality',
        'Integrate with external APIs, including client-specific APIs and Google API'
      ]
    },
    {
      title: '.NET Design Engineer and Developer',
      company: 'Sopra Banking Software',
      period: 'September 2021 – May 2023',
      description: 'Collaborated on backend and frontend tasks in .NET and Angular, worked on CRM extensions, improved code architecture, and adapted projects to newer .NET versions within an Agile environment.',
      responsibilities: [
        'Collaborated on project tasks as part of a team',
        'Developed and deployed new extensions for a CRM Dynamics 365 project',
        'Worked as a backend .NET developer, analyzing and refactoring code to improve architecture',
        'Migrated solutions to newer .NET versions',
        'Implemented unit tests to maintain feature quality',
        'Developed and maintained front-end components in Angular',
        'Worked in an Agile Scrum environment'
      ]
    },
    {
      title: 'Intern',
      company: 'Sopra Banking Software',
      period: 'March 2021 – August 2021',
      description: 'Created an interactive Serious Game to help banks engage customers and promote services.',
      responsibilities: [
        'Designed and developed a Serious Game to engage bank clients and promote various services'
      ]
    },
    {
      title: 'Intern',
      company: 'ALTEN Morocco',
      period: 'April 2019 – June 2019',
      description: 'Developed a web app for managing consultants skills, streamlining internal tracking.',
      responsibilities: [
        'Designed and developed a web application to manage consultants skillsets'
      ]
    }
  ];

  constructor(private dialog: MatDialog) {}

  openExperienceDialog(experience: Experience): void {
    this.dialog.open(ExperienceDialogComponent, {
      data: experience,
      width: '800px',
      maxWidth: '90vw',
      panelClass: 'experience-dialog'
    });
  }
}
