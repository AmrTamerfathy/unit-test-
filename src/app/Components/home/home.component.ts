import { Component, OnInit } from '@angular/core';
import { Icateogry } from 'src/app/Models/icateogry';
import { Iproducts } from 'src/app/Models/iproducts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Iproducts = {
    name: 'Food',
    Id: 1,
    Quantity: 1,
    price: 50,
    productImage: 'https://media.istockphoto.com/photos/delicious-meal-on-a-black-plate-top-view-copy-space-picture-id1165399909?k=20&m=1165399909&s=612x612&w=0&h=5g5C4BDoxaejlIr4r_8cV6jDYXzN8n1-JkIW3LgPUuA=',
    CateogryID: 1
  }
  Cateogry: Icateogry = {
    ID: 9,
    name: 'men wear',
  }

  showImg: boolean = true;
  ToggleImg() {
    this.showImg = !this.showImg;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
