import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-groups',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-groups.component.html',
  styleUrls: ['./input-groups.component.scss']
})
export class InputGroupsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
