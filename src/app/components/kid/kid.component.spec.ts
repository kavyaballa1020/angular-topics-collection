import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidComponent } from './kid.component';

describe('KidComponent', () => {
  let component: KidComponent;
  let fixture: ComponentFixture<KidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
