import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsCreatingComponent } from './collections-creating.component';

describe('CollectionsCreatingComponent', () => {
  let component: CollectionsCreatingComponent;
  let fixture: ComponentFixture<CollectionsCreatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectionsCreatingComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CollectionsCreatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
