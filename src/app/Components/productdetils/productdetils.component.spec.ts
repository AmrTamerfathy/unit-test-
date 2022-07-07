import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetilsComponent } from './productdetils.component';

describe('ProductdetilsComponent', () => {
  let component: ProductdetilsComponent;
  let fixture: ComponentFixture<ProductdetilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductdetilsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductdetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
