import { Routes } from '@angular/router';
import { ContentLayoutComponent } from './shared/components/layout/content-layout/content-layout.component';
import { content } from './shared/routes/content-routes';
import { FullLayoutComponent } from './shared/components/layout/full-layout/full-layout.component';
import { fullRoutes } from './shared/routes/full.routes';
import { AdminGuard } from './shared/guard/admin.guard';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/dashboard/default",
        pathMatch: "full",
    },
    {
        path: "auth/login",
        component: LoginComponent,
    },
    {
        path: '',
        component: ContentLayoutComponent,
        canActivate: [AdminGuard],
        children: content,
    },
    {
        path: '',
        component: FullLayoutComponent,
        canActivate: [AdminGuard],
        children: fullRoutes,
    },
];
