import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-inputs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-inputs.component.html',
  styleUrls: ['./base-inputs.component.scss']
})
export class BaseInputsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
