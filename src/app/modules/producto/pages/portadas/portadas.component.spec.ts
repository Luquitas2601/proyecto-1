import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadasComponent } from './portadas.component';

describe('PortadasComponent', () => {
  let component: PortadasComponent;
  let fixture: ComponentFixture<PortadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortadasComponent]
    });
    fixture = TestBed.createComponent(PortadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
