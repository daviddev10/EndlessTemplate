import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-timeline1',
  standalone: true,
  imports: [CommonModule, FeatherIconsComponent],
  templateUrl: './timeline1.component.html',
  styleUrls: ['./timeline1.component.scss']
})
export class Timeline1Component implements OnInit {

  constructor() { }

  ngOnInit() { }

}
