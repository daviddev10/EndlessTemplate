import { Routes } from "@angular/router";
import { BasicComponent } from './basic/basic.component';
import { CreativeComponent } from './creative/creative.component';
import { TabbedComponent } from './tabbed/tabbed.component';

export const cards: Routes = [
    {
        path: '',
        children: [
            {
                path: 'basic',
                component: BasicComponent,
                data: {
                    title: "Basic",
                    breadcrumb: "Basic"
                }
            },
            {
                path: 'creative',
                component: CreativeComponent,
                data: {
                    title: "Creative",
                    breadcrumb: "Creative"
                }
            },
            {
                path: 'tabbed',
                component: TabbedComponent,
                data: {
                    title: "Tabbed",
                    breadcrumb: "Tabbed"
                }
            },
        ]
    }
]