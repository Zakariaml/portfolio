import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface SkillCategory {
  iconClass: string;
  name: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      iconClass: 'fas fa-code',
      name: 'Programming Languages',
      skills: ['C#', 'Java', 'C++', 'JavaScript']
    },
    {
      iconClass: 'fas fa-file-code',
      name: 'Markup Languages',
      skills: ['HTML', 'XML']
    },
    {
      iconClass: 'fas fa-palette',
      name: 'Styling',
      skills: ['CSS']
    },
    {
      iconClass: 'fas fa-database',
      name: 'Databases',
      skills: ['MySQL', 'Microsoft SQL Server']
    },
    {
      iconClass: 'fas fa-layer-group',
      name: 'Frameworks and Technologies',
      skills: ['Entity Framework', 'ASP.NET MVC', 'Angular', 'JEE', 'Spring Boot', 'Dynamics 365 CRM']
    },
    {
      iconClass: 'fas fa-laptop-code',
      name: 'Development Tools & IDEs',
      skills: ['IntelliJ IDEA', 'Visual Studio', 'VS Code']
    },
    {
      iconClass: 'fas fa-vial',
      name: 'Testing',
      skills: ['Unit Testing with XUnit']
    },
    {
      iconClass: 'fas fa-cloud',
      name: 'Cloud and DevOps',
      skills: ['Azure DevOps']
    },
    {
      iconClass: 'fas fa-certificate',
      name: 'Certifications',
      skills: ['Microsoft Certified: Azure Fundamentals']
    }
  ];
}
