import { Routes } from '@angular/router';

import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';

export const blog: Routes = [
    {
        path: '',
        children: [
            {
                path: 'details',
                component: BlogDetailComponent,
                data: {
                    title: "Blog-Detail",
                    breadcrumb: "Blog-Detail"
                }
            },
            {
                path: 'single',
                component: BlogSingleComponent,
                data: {
                    title: "Blog-Single",
                    breadcrumb: "Blog-Single"
                }
            }]
    }
]