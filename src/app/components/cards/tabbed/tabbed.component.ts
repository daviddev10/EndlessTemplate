import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SimpleTabComponent } from './simple-tab/simple-tab.component';
import { MaterialTabColorComponent } from './material-tab-color/material-tab-color.component';
import { ColorTabComponent } from './color-tab/color-tab.component';
import { ColorOptionComponent } from './color-option/color-option.component';

@Component({
  selector: 'app-tabbed',
  standalone: true,
  imports: [CommonModule,SimpleTabComponent,MaterialTabColorComponent ,ColorTabComponent,ColorOptionComponent ],
  templateUrl: './tabbed.component.html',
  styleUrls: ['./tabbed.component.scss']
})
export class TabbedComponent {
  
  public active = 1;
  public materialSuccess = "success"
  public materialSecondary = "secondary"

  constructor() { }

}
