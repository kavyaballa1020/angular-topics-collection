import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KavComponent } from './kav.component';

describe('KavComponent', () => {
  let component: KavComponent;
  let fixture: ComponentFixture<KavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
