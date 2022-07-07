import { Injectable } from '@angular/core';
import { Iproducts } from '../Models/iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private prdList: Iproducts[];
  img: string = "assets/angular.png";
  constructor() {
    this.prdList = [
      { Id: 1, name: "HP", price: 120000000, CateogryID: 1, Quantity: 3, productImage: this.img },
      { Id: 2, name: "dell", price: 1300000, CateogryID: 1, Quantity: 6, productImage: this.img },
      { Id: 3, name: "Redmi", price: 14000, CateogryID: 2, Quantity: 2, productImage: this.img },
      { Id: 4, name: "Iphone", price: 1500000, CateogryID: 2, Quantity: 1, productImage: this.img },
      { Id: 5, name: "LG", price: 164000, CateogryID: 3, Quantity: 4, productImage: this.img },
      { Id: 6, name: "Tornado", price: 170, CateogryID: 3, Quantity: 3, productImage: this.img }
    ];
  }
  //Get All products
  getAllproducts(): Iproducts[] {
    return this.prdList;
  }

  //Filter Products
  getProductsByCategoryId(catId: number): Iproducts[] {
    if (catId == 0) {
      return this.getAllproducts();
    } else {
      return this.prdList.filter(prd => prd.CateogryID == catId);
    }
    //day4------------------------------------------------------------------------------------
  }

  //product details---------------------------------------------------------------------------
  getProductById(prdID: number): Iproducts | undefined {

    return this.prdList.find(prd => prd.Id == prdID);

  }
  searchProductByName(prdName: string): Iproducts | undefined {
    return this.prdList.find(prd => prd.name == prdName);
  }


  getProductsIdlist(): number[] {
    return this.prdList.map(prd => prd.Id);
  }

}
