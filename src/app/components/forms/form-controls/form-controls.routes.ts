import { Routes } from '@angular/router';
import{ FormValidationComponent} from './form-validation/form-validation.component'
import { BaseInputsComponent } from './base-inputs/base-inputs.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { MegaOptionsComponent } from './mega-options/mega-options.component';

export const FormContols: Routes = [
  {
    path: '',
    children: [
      {
        path: 'validation',
        component: FormValidationComponent,
        data: {
          title: "Validation",
          breadcrumb: "Validation"
        }
      },
      {
        path: 'inputs',
        component: BaseInputsComponent,
        data: {
          title: "Inputs",
          breadcrumb: "Inputs"
        }
      },
      {
        path: 'checkbox-radio',
        component: CheckboxRadioComponent,
        data: {
          title: "Checkbox-Radio",
          breadcrumb: "Checkbox-Radio"
        }
      },
      {
        path: 'input-groups',
        component: InputGroupsComponent,
        data: {
          title: "Input-Groups",
          breadcrumb: "Input-Groups"
        }
      },
      {
        path: 'mega-options',
        component: MegaOptionsComponent,
        data: {
          title: "Mega-Options",
          breadcrumb: "Mega-Options"
        }
      }
    ]
  }
]