import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../services/loading.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-loading-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-animation.component.html',
  styleUrl: './loading-animation.component.less',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ]),
    trigger('progressBar', [
      state('void', style({ width: '0' })),
      state('full', style({ width: '200px' })),
      transition('void => full', [
        animate('3500ms ease-in-out')
      ])
    ])
  ]
})
export class LoadingAnimationComponent implements OnInit, OnDestroy {
  isLoading = true;
  progressState = 'void';

  constructor(
    private loadingService: LoadingService,
    private storageService: StorageService
  ) {
    this.loadingService.setLoadingComplete(false);
  }

  ngOnInit() {
    this.storageService.removeItem('welcomeDialogShown');
    
    setTimeout(() => {
      this.progressState = 'full';
    }, 200);

    setTimeout(() => {
      this.isLoading = false;
      this.loadingService.setLoadingComplete(true);
    }, 3700);
  }

  ngOnDestroy() {
    if (this.isLoading) {
      this.loadingService.setLoadingComplete(false);
    }
  }
}
