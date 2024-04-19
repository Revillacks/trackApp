import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GeolocationService } from '../../service/geolocation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './location.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LocationComponent {
  locations: Array<{ lat: number, lng: number, details?: string | null }> = [];


  constructor(
    private geolocationService: GeolocationService,
    private router: Router
  ){
  }

  public getLocation(){
    this.geolocationService.getCurrentLocation().subscribe({
      next: (position) => {
        const newLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.locations.push(newLocation);
        console.log(newLocation, 'Localizacion en Lat y Lon');
      },
    });
  }

  public getDetail( locationIndex: number ){
    const selectedLocation = this.locations[locationIndex];
    this.router.navigate(['home/locationDetail', { lat: selectedLocation.lat, lng: selectedLocation.lng }]);
  }


}
