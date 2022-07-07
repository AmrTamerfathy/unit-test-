import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './Components/Order/product/product.component';
import { ShadowDirective } from './Directives/shadow.directive';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { NationalIdPipe } from './pipes/national-id.pipe';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductdetilsComponent } from './Components/productdetils/productdetils.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavigationComponent,
    HomeComponent,
    ProductComponent,
    ShadowDirective,
    CustomPipePipe,
    OrderMasterComponent,
    NationalIdPipe,
    MainLayoutComponent,
    NotFoundPageComponent,
    ProductdetilsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
