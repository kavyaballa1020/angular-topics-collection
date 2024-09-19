import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdirectivesComponent } from './ngdirectives.component';

describe('NgdirectivesComponent', () => {
  let component: NgdirectivesComponent;
  let fixture: ComponentFixture<NgdirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
