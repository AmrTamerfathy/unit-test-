import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Iproducts } from 'src/app/Models/iproducts';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {

  orderTotalPrice: number = 0;
  @Output() totalPriceChanged: EventEmitter<number>;
  @Input() sentCatId: number = 0;
  @Output() AddProduct: EventEmitter<any>; //cart
  date: Date;
  prdListOfCat: Iproducts[] = []; //filter out products
  constructor(private prdservices: ProductService, private router: Router) {
    this.totalPriceChanged = new EventEmitter<number>();
    this.AddProduct = new EventEmitter<any>();

    this.date = new Date();
  }
  ngOnChanges(): void {
    // this.filterProductsById();
    this.prdListOfCat = this.prdservices.getProductsByCategoryId(this.sentCatId);

  }

  ngOnInit(): void {
    this.prdListOfCat = this.prdservices.getProductsByCategoryId(this.sentCatId);
  }

  price(prdPrice: number, count: string) {
    this.orderTotalPrice += prdPrice * +count;
    this.totalPriceChanged.emit(this.orderTotalPrice); //fire event
  }
  trackbyfunc(index: number, prd: Iproducts): number {
    return prd.Id;
  }
  ////////////////////day4/////////////////////////////////////////
  //route products Details by id
  productDetails(prdid: number) {
    this.router.navigate(['products', prdid]);
  }

}
