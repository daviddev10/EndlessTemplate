import { Injectable } from '@angular/core';
import { Products, ColorFilter } from '../../../shared/model/e-commerce/product.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public currency: string = 'USD';
  private _http: any = null;

  constructor(private http: HttpClient) {
    this._http = http;
  }

  private products(): Observable<Products[]> {
    return this.http.get('assets/data/ecommerce/products.json').pipe(map((res: any) => {
      return res;
    }));
  }

  public getProducts(): Observable<Products[]> {
    return this.products();
  }

  public getProduct(id: number): Observable<Products> {

    return this.products().pipe(map((items: any) => {
      return items.find((item: Products) => {
        return item.id === id;
      });
    }));
  }


  public getProductByColor(color: ColorFilter[] | any): Observable<Products[]> {
    return this.products().pipe(map(items =>
      items.filter((item: Products) => {
        if (color == item.colors) {
          return item.colors
        }
        else {
          return item;
        }
      })
    ));
  }

  public checkDuplicateInObject(tag: any, Products: any) {
    var seenDuplicate = false,
      testObject = {};

    Products.map(function (item: any) {
      let itemPropertyName: any = item[tag];
      let testObject: { [key: string]: any } = {};
      if (itemPropertyName in testObject) {
        testObject[itemPropertyName].duplicate = true;
        item.duplicate = true;
        seenDuplicate = true;
      }
      else {
        testObject[itemPropertyName] = item;
        delete item.duplicate;
      }
    });

    return seenDuplicate;
  }

  public getProductByCategory(category: string): Observable<Products[]> {
    return this.products().pipe(map(items =>
      items.filter((item: Products) => {
        if (category == 'all') {
          return item
        }
        else {
          return item.category === category;
        }
      })
    ));
  }
  private tag(): Observable<Products[]> {
    return this.http.get('assets/data/products.json').pipe(map((res: any) => {
      return res;
    }));
  }

  public getTags(): Observable<Products[]> {
    return this.products();
  }
}