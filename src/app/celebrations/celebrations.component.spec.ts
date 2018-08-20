import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrationsComponent } from './celebrations.component';

describe('CelebrationsComponent', () => {
  let component: CelebrationsComponent;
  let fixture: ComponentFixture<CelebrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
