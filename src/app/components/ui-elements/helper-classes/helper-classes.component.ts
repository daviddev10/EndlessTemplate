import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helper-classes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './helper-classes.component.html',
  styleUrls: ['./helper-classes.component.scss']
})
export class HelperClassesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
