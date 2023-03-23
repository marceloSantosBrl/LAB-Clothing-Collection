import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsListingComponent } from './models-listing.component';

describe('ModelsListingComponent', () => {
  let component: ModelsListingComponent;
  let fixture: ComponentFixture<ModelsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
