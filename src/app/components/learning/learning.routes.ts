import { Routes } from '@angular/router';
import { LearningDetailComponent } from './learning-detail/learning-detail.component';
import { LearningListComponent } from './learning-list/learning-list.component';

export const learning: Routes = [
    {
        path: '',
        children: [
          {
            path: 'learninglist',
            component: LearningListComponent,
            data: {
              title: "Learning List",
              breadcrumb: "learning"
            }
          },
          {
            path: 'learning-detail/:id',
            component: LearningDetailComponent,
            data: {
              title: "Detail Course",
              breadcrumb: "Detail Course"
            }
          }]
      }
]