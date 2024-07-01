import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTimeStruct, NgbTimeAdapter, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timepicker',
  standalone: true,
  imports: [CommonModule,NgbModule,FormsModule,ReactiveFormsModule],
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent implements OnInit  {
  
  time = {hour: 13, minute: 30};
  meridian = true;

  timeSeccond: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;

  timeSpinners = {hour: 13, minute: 30};
  spinners = true;

  timeCustom: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;

  constructor() { }

  ngOnInit() { }

  toggleMeridian() {
      this.meridian = !this.meridian;
  }

  toggleSeconds() {
    this.seconds = !this.seconds;
  }

  toggleSpinners() {
      this.spinners = !this.spinners;
  }

  ctrl = new FormControl('', (control: FormControl | any) => {
    const value = control.value;
    if (!value) {
      return null;
    }
    if (value.hour < 12) {
      return {tooEarly: true};
    }
    if (value.hour > 13) {
      return {tooLate: true};
    }
    return null;
  });

}
