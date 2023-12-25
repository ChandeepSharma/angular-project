import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisgterComponent } from './regisgter.component';

describe('RegisgterComponent', () => {
  let component: RegisgterComponent;
  let fixture: ComponentFixture<RegisgterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisgterComponent]
    });
    fixture = TestBed.createComponent(RegisgterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
