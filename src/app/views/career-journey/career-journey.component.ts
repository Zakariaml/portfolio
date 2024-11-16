import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface CareerStep {
  number: number;
  year: string;
  company: string;
  description: string;
}

@Component({
  selector: 'app-career-journey',
  templateUrl: './career-journey.component.html',
})
export class CareerJourneyComponent {
  careerSteps: CareerStep[] = [
    {
      number: 1,
      year: '2016 - 2021',
      company: 'Building the Foundation',
      description: 'Completed studies in software engineering, gaining a solid grounding in programming, software design, and database management with languages like C#, Java, and JavaScript.'
    },
    {
      number: 2,
      year: 'April 2019 - June 2019',
      company: 'ALTEN Morocco Internship',
      description: 'Developed a web app for managing consultants\' skills, streamlining internal processes and gaining firsthand experience in real-world software development.'
    },
    {
      number: 3,
      year: 'March 2021 - August 2021',
      company: 'Sopra Banking Software Internship',
      description: 'Created a Serious Game for banks to engage clients and promote services, enhancing my skills in software design and user interaction.'
    },
    {
      number: 4,
      year: 'September 2021 - May 2023',
      company: '.NET Design Engineer and Developer',
      description: 'Worked on backend and frontend tasks with .NET and Angular, developed CRM Dynamics 365 extensions, improved code architecture, and gained experience in an Agile environment.'
    },
    {
      number: 5,
      year: 'May 2023 - Present',
      company: 'Application Developer',
      description: 'Currently developing features in .NET and Angular, integrating APIs, and improving feature quality through unit testing. Recently earned Azure Fundamentals certification to support cloud-related tasks.'
    }
  ];
} 