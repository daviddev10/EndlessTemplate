import { Routes } from "@angular/router";
import { BasicComponent } from './basic/basic.component'
import { BorderComponent } from './border/border.component'
import { SizingComponent } from './sizing/sizing.component'
import { StylingComponent } from './styling/styling.component'

export const bootstrapTables: Routes = [
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
                path: 'sizing',
                component: SizingComponent,
                data: {
                    title: "Sizing",
                    breadcrumb: "Sizing"
                }
            },
            {
                path: 'border',
                component: BorderComponent,
                data: {
                    title: "Border",
                    breadcrumb: "Border"
                }
            },
            {
                path: 'styling',
                component: StylingComponent,
                data: {
                    title: "BOOTSTRAP STYLING TABLES",
                    breadcrumb: "Styling"
                }
            },
            {
                path: 'filter-table',
                component: StylingComponent,
                data: {
                    title: "Styling",
                    breadcrumb: "Styling"
                }
            }
        ]
    }
]