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
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/resume.pdf');
    link.setAttribute('download', 'Zakaria_MILOUDI_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
