import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import ('./Feature/home/home.component'),
    children: [
      {
        path: 'location',
        title: 'Localización',
        loadComponent: () => import ('./Feature/pages/location/location.component')
      },
      {
        path: 'locationDetail',
        title: 'DetalleLocalizacion',
        loadComponent: () => import ('./Feature/pages/locationDetail/locationDetail.component')
      }

    ]

  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo: 'home'
  }

];
