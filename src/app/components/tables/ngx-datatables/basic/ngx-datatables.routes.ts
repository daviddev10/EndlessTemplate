import { Routes } from "@angular/router";
import { BasicNgxDatatableComponent } from "./basic.component";

export const ngxDataTable: Routes = [
    {
        path: '',
        component: BasicNgxDatatableComponent,
        data: {
            title: "Basic",
            breadcrumb: "Ngx-Datatables / Basic"
        }
    }
]