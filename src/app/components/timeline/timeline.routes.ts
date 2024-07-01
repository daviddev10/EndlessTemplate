import { Routes } from "@angular/router";
import { Timeline1Component } from './timeline1/timeline1.component'

export const Timeline: Routes = [
    {
        path: '',
        component: Timeline1Component,
        data: {
            title: "Timeline1",
            breadcrumb: "Timeline1"
        }
    }
]