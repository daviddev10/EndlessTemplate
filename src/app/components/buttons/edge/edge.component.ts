import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edge.component.html',
  styleUrls: ['./edge.component.scss']
})
export class EdgeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
