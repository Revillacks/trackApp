import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GeolocationService } from '../../service/geolocation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './locationDetail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LocationDetailComponent {

  locationDetails: string = 'Cargando detalles...';

  constructor(
    private geolocationService: GeolocationService,
    private route: ActivatedRoute
  ){
    this.getLocationDetails();
  }

  private getLocationDetails() {
    this.route.params.subscribe(params => {
      const lat = params['lat'];
      const lng = params['lng'];
      this.geolocationService.getGeocode(lat, lng).subscribe({
        next: (response) => {
          if (response.results && response.results.length > 0) {
            this.locationDetails = response.results[0].formatted_address;
            console.log(this.locationDetails, 'Detalles de localizacion');
          } else {
            this.locationDetails = 'No se encontraron detalles de ubicación.';
          }
        },
        error: (error) => {
          console.error('Error fetching geocode', error);
          this.locationDetails = 'Error al buscar los detalles de ubicación.';
        }
      });
    });
  }

}
