import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private behaviorSubject = new BehaviorSubject<any>(null);

  constructor() {}

  sendData(message: string) {
    this.behaviorSubject.next(message);
  }

  clearData() {
    this.behaviorSubject.next(null);
  }

  getData(): Observable<any> {
    return this.behaviorSubject.asObservable();
  }
}
