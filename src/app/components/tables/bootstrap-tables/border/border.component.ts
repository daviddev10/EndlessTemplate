import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-border',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.scss']
})
export class BorderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
