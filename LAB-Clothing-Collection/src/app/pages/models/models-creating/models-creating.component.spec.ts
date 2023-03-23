import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsCreatingComponent } from './models-creating.component';

describe('ModelsCreatingComponent', () => {
  let component: ModelsCreatingComponent;
  let fixture: ComponentFixture<ModelsCreatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelsCreatingComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ModelsCreatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
