import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GeolocationService } from '../../service/geolocation.service';

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
  locations: string[] = [];

  constructor( private geolocationService: GeolocationService ){

  }

  getLocation(){
    this.geolocationService.getCurrentLocation().subscribe({
      next: (position) => {
        this.locations.push(`Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}`);
      },
      error: (error) => {
        console.error('Error obtaining location', error);
      }
    })
  }

 }
