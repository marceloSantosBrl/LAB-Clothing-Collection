import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsEditingComponent } from './collections-editing.component';

describe('CollectionsEditingComponent', () => {
  let component: CollectionsEditingComponent;
  let fixture: ComponentFixture<CollectionsEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectionsEditingComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CollectionsEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
