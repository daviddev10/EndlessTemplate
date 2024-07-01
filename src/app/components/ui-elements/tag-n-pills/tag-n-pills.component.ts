import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-tag-n-pills',
  standalone: true,
  imports: [CommonModule,FeatherIconsComponent],
  templateUrl: './tag-n-pills.component.html',
  styleUrls: ['./tag-n-pills.component.scss']
})
export class TagNPillsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
