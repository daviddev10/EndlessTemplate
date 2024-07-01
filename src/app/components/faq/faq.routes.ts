import { Routes } from '@angular/router';
import { FaqComponent } from './faq.component';

export const Faq: Routes = [
    {
        path: '',
        component: FaqComponent,
        data: {
            title: 'FAQ',
            breadcrumb: 'FAQ'
        }
    }
]