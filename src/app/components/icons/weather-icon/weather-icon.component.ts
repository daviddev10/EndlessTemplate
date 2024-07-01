import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})
export class WeatherIconComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
