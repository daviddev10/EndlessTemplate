import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Products, ProductTags, TagFilter } from '../../../../../shared/model/e-commerce/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BrandComponent implements OnInit {
  @Input() tagsFilters: ProductTags[] | any = [];
  @Output() tagFilters: EventEmitter<ProductTags[]> = new EventEmitter<ProductTags[]>();

  // Array
  public checkedTagsArray: any[] = [];

  constructor() { }

  // value checked call this function
  checkedFilter(event:any) {
    let index = this.checkedTagsArray.indexOf(event.target.value);  // checked and unchecked value
    if (event.target.checked)
      this.checkedTagsArray.push(event.target.value); // push in array cheked value
    else
      this.checkedTagsArray.splice(index, 1);  // removed in array unchecked value           
  }
  ngOnInit() {
    this.tagFilters.emit(this.checkedTagsArray);   // Pass value Using emit 
  }
}
