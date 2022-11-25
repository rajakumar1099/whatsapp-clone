import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private subject = new Subject<any>();

  constructor() {}

  sendData(message: string) {
    this.subject.next(message);
  }

  clearData() {
    this.subject.next(null);
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }
}
