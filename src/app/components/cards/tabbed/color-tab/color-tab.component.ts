import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-color-tab',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './color-tab.component.html',
  styleUrls: ['./color-tab.component.scss']
})
export class ColorTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
