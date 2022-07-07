import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproducts } from 'src/app/Models/iproducts';
import { ProductService } from 'src/app/Services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-productdetils',
  templateUrl: './productdetils.component.html',
  styleUrls: ['./productdetils.component.scss']
})
export class ProductdetilsComponent implements OnInit {
  prd: Iproducts | undefined = undefined;
  currentPrdId: number = 0;
  prdIdListdetails: number[] = [];
  currentIndex: number = 0;
  constructor(private productService: ProductService, private router: Router, private activateRoute: ActivatedRoute, private location: Location) {

  }

  ngOnInit(): void {
    this.prdIdListdetails = this.productService.getProductsIdlist();
    this.activateRoute.paramMap.subscribe(
      paramMap => {
        this.currentPrdId = (paramMap.get('pid')) ? Number(paramMap.get('pid')) : 0;
        let catchProduct = this.productService.getProductById(this.currentPrdId);
        if (catchProduct) {
          this.prd = catchProduct;
        }
        else {
          alert("Not Found Product");
          this.location.back();
        }
      }
    )

  }
  Back() {
    this.location.back();
  }
  Next() {
    this.currentIndex = this.prdIdListdetails.findIndex((item) => item == this.currentPrdId);
    this.router.navigate(['/products', this.prdIdListdetails[++this.currentIndex]])

  }
  goprev() {
    this.currentIndex = this.prdIdListdetails.findIndex((item) => item == this.currentPrdId);
    this.router.navigate(['/products', this.prdIdListdetails[--this.currentIndex]])

  }
  search(prdName: string) {
    let found = this.productService.searchProductByName(prdName);
    if (found) {
      this.prd = found;
    }
    else {
      alert("Product not found");
    }
  }

}
