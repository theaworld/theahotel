import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingsComponent } from './weddings.component';

describe('WeddingsComponent', () => {
  let component: WeddingsComponent;
  let fixture: ComponentFixture<WeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
