import { Routes } from '@angular/router';
import { CalenderComponent } from './calender.component'

export const calendar: Routes = [
    {
        path: '',
        component: CalenderComponent,
        data: {
            title: 'Calender',
            breadcrumb: 'Calender'
        }
    }
]