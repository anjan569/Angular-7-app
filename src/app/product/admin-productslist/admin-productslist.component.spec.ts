import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductslistComponent } from './admin-productslist.component';

describe('AdminProductslistComponent', () => {
  let component: AdminProductslistComponent;
  let fixture: ComponentFixture<AdminProductslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
