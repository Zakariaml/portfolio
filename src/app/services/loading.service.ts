import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingComplete = new BehaviorSubject<boolean>(false);
  loadingComplete$ = this.loadingComplete.asObservable();

  constructor() {
    this.loadingComplete.next(false);
  }

  setLoadingComplete(isComplete: boolean) {
    this.loadingComplete.next(isComplete);
  }
}