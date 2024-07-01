import { Routes } from '@angular/router';
import { SocialAppComponent } from './social-app.component';

export const socialapp: Routes = [
    {
        path: '',
        component: SocialAppComponent,
        data: {
          title: "Social App",
          breadcrumb: ""
        }
      }
]