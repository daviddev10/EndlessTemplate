import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-simple-tab',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './simple-tab.component.html',
  styleUrls: ['./simple-tab.component.scss']
})
export class SimpleTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
