import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelMapComponent } from './travel-map.component';

describe('TravelMapComponent', () => {
  let component: TravelMapComponent;
  let fixture: ComponentFixture<TravelMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
