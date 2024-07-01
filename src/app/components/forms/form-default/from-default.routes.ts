import { Routes } from '@angular/router';
import { FormDefaultComponent } from './form-default.component'

export const FormDefault: Routes = [
    {
        path: '',
        component: FormDefaultComponent,
        data: {
            title: "Form-Default",
            breadcrumb: "Form-Default"
        }
    }
]