import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsEditingComponent } from './models-editing.component';

describe('ModelsEditingComponent', () => {
  let component: ModelsEditingComponent;
  let fixture: ComponentFixture<ModelsEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelsEditingComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ModelsEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
