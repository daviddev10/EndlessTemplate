import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
