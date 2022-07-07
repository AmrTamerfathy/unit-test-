import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { ProductComponent } from './Components/Order/product/product.component';
import { ProductdetilsComponent } from './Components/productdetils/productdetils.component';

export const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, //default page
  { path: 'Home', component: HomeComponent },
  { path: 'order', component: OrderMasterComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
