import { Routes } from '@angular/router';
import { GoogleMapComponent } from './google-map/google-map.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';

export const map: Routes = [
    {
        path: '',
        children: [
            {
                path: 'google',
                component: GoogleMapComponent,
                data: {
                    title: "Google-Map",
                    breadcrumb: "Google-Map"
                }
            },
            {
                path: 'leaflet',
                component: LeafletMapComponent,
                data: {
                    title: "Leaflet-Map",
                    breadcrumb: "Leaflet-Map"
                }
            }
        ]
    }
]