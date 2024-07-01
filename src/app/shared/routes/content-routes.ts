import { Routes } from '@angular/router';

export const content: Routes = [
    {
        path: 'dashboard',
        data: {
            breadcrumb: "Dashboard"
        },
        loadChildren: () => import('../../../app/components/dashboard/dashboard.routes').then(r => r.dashboard)
    },
    {
        path: 'widgets',
        data: {
            breadcrumb: "Widgets",

        },
        loadChildren: () => import('../../../app/components/widgets/widgets.routes').then(r => r.widgets)
    },
    {
        path: 'ui-elements',
        data: {
            breadcrumb: "UI-Elements"
        },
        loadChildren: () => import('../../../app/components/ui-elements/ui-elements.routes').then(r => r.UiKits),
    },
    {
        path: 'base',
        data: {
            breadcrumb: "Base"
        },
        loadChildren: () => import('../../../app/components/base/base.routes').then(r => r.base),
    },
    {
        path: 'advance',
        data: {
            breadcrumb: "Advance"
        },
        loadChildren: () => import('../../../app/components/advance/advance.routes').then(r => r.advance),
    },
    {
        path: 'icons',
        data: {
            breadcrumb: "Icons"
        },
        loadChildren: () => import('../../../app/components/icons/icons.routes').then(r => r.Icons),
    },
    {
        path: 'buttons',
        data: {
            breadcrumb: "Buttons"
        },
        loadChildren: () => import('../../../app/components/buttons/buttons.routes').then(r => r.Buttons),
    },
    {
        path: 'gallery',
        data: {
            breadcrumb: "Gallery"
        },
        loadChildren: () => import('../../../app/components/gallery/gallery.routes').then(r => r.Gallery),
    },
    {
        path: 'form',
        data: {
            breadcrumb: "Form"
        },
        loadChildren: () => import('../../../app/components/forms/form-controls/form-controls.routes').then(r => r.FormContols),
    },
    {
        path: 'form/form-default',
        data: {
            breadcrumb: "Form Default"
        },
        loadChildren: () => import('../../../app/components/forms/form-default/from-default.routes').then(r => r.FormDefault),
    },
    {
        path: 'table',
        data: {
            breadcrumb: "Table"
        },
        loadChildren: () => import('../../../app/components/tables/bootstrap-tables/bootstrap-table.routes').then(r => r.bootstrapTables),
    },
    {
        path: 'table/ngx-datatables/basic',
        data: {
            breadcrumb: "Table"
        },
        loadChildren: () => import('../../../app/components/tables/ngx-datatables/basic/ngx-datatables.routes').then(r => r.ngxDataTable),
    },
    {
        path: 'cards',
        data: {
            breadcrumb: "Cards"
        },
        loadChildren: () => import('../../../app/components/cards/cards.routes').then(r => r.cards),
    },
    {
        path: 'timeline/timeline1',
        data: {
            breadcrumb: "Timeline"
        },
        loadChildren: () => import('../../../app/components/timeline/timeline.routes').then(r => r.Timeline),
    },
    {
        path: 'editor',
        data: {
            breadcrumb: "Editor"
        },
        loadChildren: () => import('../../../app/components/editor/editor.routes').then(r => r.editor),
    },
    {
        path: 'map',
        data: {
            breadcrumb: "Map"
        },
        loadChildren: () => import('../../../app/components/map/map.routes').then(r => r.map),
    },
    {
        path: 'users',
        data: {
            breadcrumb: "Users"
        },
        loadChildren: () => import('../../../app/components/users/user.routes').then(r => r.User),
    },
    {
        path: 'chart',
        data: {
            breadcrumb: "Chart"
        },
        loadChildren: () => import('../../../app/components/charts/charts.routes').then(r => r.charts),
    },
    {
        path: 'calender',
        data: {
            breadcrumb: "calender"
        },
        loadChildren: () => import('../../../app/components/calender/calender.routes').then(r => r.calendar),
    },
    {
        path: 'blog',
        data: {
            breadcrumb: "Blog"
        },
        loadChildren: () => import('../../../app/components/blog/blog.routes').then(r => r.blog),
    },
    {
        path: 'email',
        data: {
            breadcrumb: "Email"
        },
        loadChildren: () => import('../../../app/components/email/email.routes').then(r => r.email),
    },
    {
        path: 'contact',
        data: {
            breadcrumb: "Contact"
        },
        loadChildren: () => import('../../../app/components/contact/contact.routes').then(r => r.contact),
    },
    {
        path: 'chat',
        data: {
            breadcrumb: "Chat"
        },
        loadChildren: () => import('../../../app/components/chat/chat.routes').then(r => r.chat),
    },
    {
        path: 'job-search',
        data: {
            breadcrumb: "Job-Search"
        },
        loadChildren: () => import('../../../app/components/job-search/job-search.routes').then(r => r.jobsearch),
    },
    {
        path: 'knowledgebase',
        data: {
            breadcrumb: "Knowledge-Base"
        },
        loadChildren: () => import('../../../app/components/knowledge-base/knowledgebase.routes').then(r => r.knowledgebase),
    },
    {
        path: 'learning',
        data: {
            breadcrumb: "Learning"
        },
        loadChildren: () => import('../../../app/components/learning/learning.routes').then(r => r.learning),
    },
    {
        path: 'faq',
        data: {
            breadcrumb: "Faq"
        },
        loadChildren: () => import('../../../app/components/faq/faq.routes').then(r => r.Faq),
    },
    {
        path: 'social-app',
        data: {
            breadcrumb: "Social-app"
        },
        loadChildren: () => import('../../../app/components/social-app/social-app.routes').then(r => r.socialapp),
    },
    {
        path: 'search-result',
        data: {
            breadcrumb: "Search-Result"
        },
        loadChildren: () => import('../../../app/components/search-result/search-result.routes').then(r => r.searchResult),
    },
    {
        path: 'to-do',
        data: {
            breadcrumb: "To-do"
        },
        loadChildren: () => import('../../../app/components/to-do/to-do.routes').then(r => r.todo),
    }, {
        path: 'ecommerce',
        data: {
            breadcrumb: "Ecommerce"
        },
        loadChildren: () => import('../../../app/components/e-commerce/e-commerce.routes').then(r => r.ecommerce),
    },
    {
        path: 'support-ticket',
        data: {
            breadcrumb: "Support-Ticket"
        },
        loadChildren: () => import('../../../app/components/support-ticket/support.routes').then(r => r.supportTicket),
    },
    {
        path: 'sample-page',
        data: {
            breadcrumb: "Sample-Page"
        },
        loadChildren: () => import('../../../app/components/sample-page/sample-page.routes').then(r => r.samplePage),
    },
    {
        path: 'pricing',
        data: {
            breadcrumb: "Pricing"
        },
        loadChildren: () => import('../../../app/components/pricing/pricing.routes').then(r => r.pricing),
    },

]