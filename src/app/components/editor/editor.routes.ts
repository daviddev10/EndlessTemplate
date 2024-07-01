import { Routes } from "@angular/router";
import { EditorComponent } from './editor.component';

export const editor: Routes = [
    {
        path: '',
        component: EditorComponent,
        data: {
          title: "Editors",
          breadcrumb: "Editors"
        }
      }
]