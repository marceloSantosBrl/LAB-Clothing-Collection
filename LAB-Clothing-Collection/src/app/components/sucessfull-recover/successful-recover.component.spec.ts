import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulRecoverComponent } from './successful-recover.component';

describe('SucefullRecoverComponent', () => {
  let component: SuccessfulRecoverComponent;
  let fixture: ComponentFixture<SuccessfulRecoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessfulRecoverComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(SuccessfulRecoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
