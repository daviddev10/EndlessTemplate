import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collapse',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {
  
  public isCollapsed = false;

  constructor() { }

  ngOnInit() { }

}
