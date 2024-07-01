import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raised',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './raised.component.html',
  styleUrls: ['./raised.component.scss']
})
export class RaisedComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
