import { Routes } from '@angular/router';
import { EmailComponent } from './email.component';

export const email: Routes = [
    {
        path: '',
        component: EmailComponent,
        data: {
            title: "Email",
            breadcrumb: "Email"
        }
    }
]