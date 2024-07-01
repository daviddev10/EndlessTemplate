import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

export const chat: Routes = [
    {
        path: '',
        component: ChatComponent,
        data: {
          title: "Chat",
          breadcrumb: ""
        }
      }
]