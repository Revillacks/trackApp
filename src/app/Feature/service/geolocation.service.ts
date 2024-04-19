import { Injectable, signal } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  public userSignal: any = signal([]);

  constructor() { }

  getCurrentLocation(): Observable<any>{
    return new Observable((observer: Observer<any>) => {
      if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
          this.userSignal.next(position);
          // observer.next(position);
          observer.complete();
        }, (error)=> {
          observer.error(error);
        });
      } else {
        observer.error('Geolocation is not supported by this browser.');
      }
    });
  }

}
