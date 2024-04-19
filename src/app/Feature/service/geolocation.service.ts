import { Injectable, signal } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  public locationSignal: any = signal([]);

  constructor(
    private http: HttpClient,
  ) { }

  getCurrentLocation(): Observable<any>{
    return new Observable((observer: Observer<any>) => {
      if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
          observer.next(position);
          observer.complete();
        }, (error)=> {
          observer.error(error);
        });
      } else {
        observer.error('Geolocation is not supported by this browser.');
      }
    });
  }

  getGeocode( lat:number, lng: number ): Observable<any>{
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBF_eDWTQpdzh-myCYmWOiafHnNRsuPBeY`;
    return this.http.get( geocodeUrl );
  }
}
