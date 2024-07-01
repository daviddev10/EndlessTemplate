import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule,FeatherIconsComponent],
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
