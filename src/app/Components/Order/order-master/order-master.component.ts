import { Component, OnInit } from '@angular/core';
import { Icateogry } from 'src/app/Models/icateogry';
import { Iproducts } from 'src/app/Models/iproducts';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit {
  catlist: Icateogry[];
  cartList: any[] = [];
  selectCatId: number = 0;
  TotalPriceCart: number = 0;
  //property that recieved the totalPrice
  // recievedOrderTotalPrice: number = 0;

  constructor() {
    this.catlist = [
      { ID: 0, name: 'All' },
      { ID: 1, name: 'Pc' },
      { ID: 2, name: 'Mobiles' },
      { ID: 3, name: 'Tv' }
    ];
  }

  ngOnInit(): void {
  }
  onTotalPriceChanged(totalPrice: number) {

    // this.recievedOrderTotalPrice = totalPrice;

  }
  cart(recievProduct: any) {
    if (this.cartList.find(x => x == recievProduct) == recievProduct) {

    } else {
      this.cartList.push(recievProduct);

    }
    console.log(recievProduct);
  }
  price(prdPrice: number, count: string) {
    this.TotalPriceCart += prdPrice * +count;
  }
}
