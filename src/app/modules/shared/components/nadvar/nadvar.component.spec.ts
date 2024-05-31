import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadvarComponent } from './nadvar.component';

describe('NadvarComponent', () => {
  let component: NadvarComponent;
  let fixture: ComponentFixture<NadvarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NadvarComponent]
    });
    fixture = TestBed.createComponent(NadvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
