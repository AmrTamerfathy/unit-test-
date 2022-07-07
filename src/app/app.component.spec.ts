import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module'
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { Location } from '@angular/common';
import { ProductComponent } from './Components/Order/product/product.component';


describe('AppComponent', () => {
  let location: Location;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        HomeComponent,
        OrderMasterComponent,
        ProductComponent,
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.get(Router);
    router.initialNavigation();
    location = TestBed.get(Location);

  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("navigate to /home", fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/');
  }))
  it("navigate to /order", fakeAsync(() => {
    router.navigate(['order']);
    tick();
    expect(location.path()).toBe('/order');
  }))




  it(`should have as title 'First-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('First-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // expect(compiled.querySelector('.content span')?.textContent).toContain('First-angular app is running!');
  });

});
