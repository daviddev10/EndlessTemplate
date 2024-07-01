import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from '../../../shared/model/e-commerce/cart.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WishListService } from '../../../shared/services/e-commerce/wish-list.service';
import { ProductsService } from '../../../shared/services/e-commerce/products.service';
import { CommonModule } from '@angular/common';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FeatherIconsComponent],
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  public cartItems: Observable<CartItem[]> = of([]);
  public selectCartItems: CartItem[] = [];

  constructor(private route: ActivatedRoute, private wishService: WishListService, public productsService: ProductsService) {
  }

  remove(item:any) {
    this.wishService.removeWishItem(item);
  }

  ngOnInit() {
    this.cartItems = this.wishService.getAll();
    this.cartItems.subscribe(selectCartItems => this.selectCartItems = selectCartItems)
  }
}
