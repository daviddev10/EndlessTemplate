import { Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { UniversityComponent } from './university/university.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { ServerComponent } from './server/server.component';
import { ProjectComponent } from './project/project.component';

export const dashboard: Routes = [
    {
        path: '',
        children: [
          {
            path: 'default',
            component: DefaultComponent,
            data: {
              title: "Default",
              breadcrumb: "Default"
            }
          },
          {
            path: 'e-commerce',
            component: ECommerceComponent,
            data: {
              title: "E-commerce",
              breadcrumb: "E-commerce"
            }
          },
          {
            path: 'university',
            component: UniversityComponent,
            data: {
              title: "University",
              breadcrumb: "University"
            }
          },
          {
            path: 'bitcoin',
            component: BitcoinComponent,
            data: {
              title: "Crypto",
              breadcrumb: "Crypto"
            }
          },
          {
            path: 'server',
            component: ServerComponent,
            data: {
              title: "Server",
              breadcrumb: "Server"
            }
          },
          {
            path: 'project',
            component: ProjectComponent,
            data: {
              title: "Project",
              breadcrumb: "Project"
            }
          }
        ]
      }
];