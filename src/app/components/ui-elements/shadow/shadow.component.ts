import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shadow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.scss']
})
export class ShadowComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
