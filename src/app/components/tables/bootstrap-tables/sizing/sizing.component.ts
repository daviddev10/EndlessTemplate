import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sizing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sizing.component.html',
  styleUrls: ['./sizing.component.scss']
})
export class SizingComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
