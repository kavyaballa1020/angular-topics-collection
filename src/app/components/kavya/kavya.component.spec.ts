import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KavyaComponent } from './kavya.component';

describe('KavyaComponent', () => {
  let component: KavyaComponent;
  let fixture: ComponentFixture<KavyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KavyaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KavyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
