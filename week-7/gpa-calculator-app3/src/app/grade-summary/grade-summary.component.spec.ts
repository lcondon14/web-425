import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaSummaryComponent } from './grade-summary.component';

describe('GpaSummaryComponent', () => {
  let component: GpaSummaryComponent;
  let fixture: ComponentFixture<GpaSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpaSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
