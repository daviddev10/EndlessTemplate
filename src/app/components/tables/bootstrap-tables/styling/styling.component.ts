import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss']
})
export class StylingComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
