import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PRODUCT } from '../../../shared/data/tables/product-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

  public products = PRODUCT;

  constructor() {
    // this.products = productDB.product;
  }

  ngOnInit() { }

}
