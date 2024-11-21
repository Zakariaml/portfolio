import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.less'
})
export class IntroComponent {
  imageUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WMKgR7u73KgyUS2JMY6LwL1gz9vWGR.png';

  downloadResume() {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Zakaria_MILOUDI_Resume.pdf'; // Name that will appear when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
