import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-key-concept',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './key-concept.component.html',
  styleUrl: './key-concept.component.less'
})
export class KeyConceptComponent {
  concepts = [
    { 
      title: 'Bug Fixer and Feature Tinkerer', 
      description: 'I spend my days building features and fixing bugs (often the same ones I created last week). My code eventually works… after a few attempts and a lot of coffee.'
    },
    { 
      title: '.NET and Angular Dabbler', 
      description: 'I work with .NET and Angular, creating features that hopefully won\'t crash. Not a wizard here—just doing my best to make things function without too much smoke coming from the code.'
    },
    { 
      title: 'Testing (Yes, That\'s a Thing)', 
      description: 'I write unit tests that sometimes even catch mistakes. Mostly, they confirm that my code does something. What exactly? We\'ll figure it out as we go.'
    },
    { 
      title: 'API Connector', 
      description: 'I get APIs talking to each other, whether they want to or not. From Google to internal systems, I make the connections that keep the data flowing… somewhere.'
    },
    { 
      title: 'Azure Fundamentals Holder', 
      description: 'Yes, I\'ve got a certification saying I know my way around Azure, which mostly means I can log in, deploy a few things, and find the right settings (eventually).'
    }
  ];
}
