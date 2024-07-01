import { Routes } from '@angular/router';
import { KnowledgeBaseComponent } from './knowledge-base.component';

export const knowledgebase: Routes = [
    {
        path: '',
        component: KnowledgeBaseComponent,
        data: {
            title: "Knowledge Base",
            breadcrumb: ""
        }
    },
]