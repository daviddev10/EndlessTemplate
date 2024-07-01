import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox-radio.component.html',
  styleUrls: ['./checkbox-radio.component.scss']
})
export class CheckboxRadioComponent implements OnInit {

  constructor() { }

  ngOnInit() {  }

}
