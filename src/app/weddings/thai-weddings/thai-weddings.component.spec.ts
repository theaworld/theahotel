import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaiWeddingsComponent } from './thai-weddings.component';

describe('ThaiWeddingsComponent', () => {
  let component: ThaiWeddingsComponent;
  let fixture: ComponentFixture<ThaiWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThaiWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThaiWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
