import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  private storageSub$ = new Subject();

  public watchStorage(): Observable<any> {
    return this.storageSub$.asObservable();
  }

  public setInfo(key: string, data: any) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
    this.storageSub$.next(data);
  }

  public clearInfo() {
    localStorage.removeItem('myData');
    this.storageSub$.next(null);
  }

  public clearAllLocalStorage() {
    localStorage.clear();
    this.storageSub$.next(null);
  }
}
