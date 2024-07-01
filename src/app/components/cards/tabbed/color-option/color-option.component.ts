import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-color-option',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './color-option.component.html',
  styleUrls: ['./color-option.component.scss']
})
export class ColorOptionComponent implements OnInit {

  @Input() color: any
  constructor() { }

  ngOnInit(): void {
  }

}
