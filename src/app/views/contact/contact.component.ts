import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactLink {
  href: string;
  icon: string;
  text: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [CommonModule],
  standalone: true
})
export class ContactComponent {
  contacts: ContactLink[] = [
    {
      href: 'mailto:zakaria.miloudi@outlook.com',
      icon: '✉️',
      text: 'zakaria.miloudi@outlook.com'
    },
    {
      href: 'https://www.linkedin.com/in/zakaria-miloudi',
      icon: '🔗',
      text: 'linkedin.com/in/zakaria-miloudi'
    }
  ];
}
