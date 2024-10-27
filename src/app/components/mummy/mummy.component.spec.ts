import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MummyComponent } from './mummy.component';

describe('MummyComponent', () => {
  let component: MummyComponent;
  let fixture: ComponentFixture<MummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MummyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
