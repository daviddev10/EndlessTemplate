import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ribbions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ribbions.component.html',
  styleUrls: ['./ribbions.component.scss']
})
export class RibbionsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
