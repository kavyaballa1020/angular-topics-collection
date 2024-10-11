import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewaybindingComponent } from './onewaybinding.component';

describe('OnewaybindingComponent', () => {
  let component: OnewaybindingComponent;
  let fixture: ComponentFixture<OnewaybindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnewaybindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnewaybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
