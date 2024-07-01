import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinners.component.html',
  styleUrls: ['./spinners.component.scss']
})
export class SpinnersComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
