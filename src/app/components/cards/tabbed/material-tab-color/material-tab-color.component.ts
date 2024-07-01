import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-material-tab-color',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './material-tab-color.component.html',
  styleUrls: ['./material-tab-color.component.scss']
})
export class MaterialTabColorComponent implements OnInit {

  @Input() color: any;

  constructor() { }

  ngOnInit(): void {
  }

}
