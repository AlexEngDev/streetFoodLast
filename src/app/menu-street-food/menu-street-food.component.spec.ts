import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStreetFoodComponent } from './menu-street-food.component';

describe('MenuStreetFoodComponent', () => {
  let component: MenuStreetFoodComponent;
  let fixture: ComponentFixture<MenuStreetFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuStreetFoodComponent]
    });
    fixture = TestBed.createComponent(MenuStreetFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
