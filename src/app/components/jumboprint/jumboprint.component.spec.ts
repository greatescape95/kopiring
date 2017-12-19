import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboprintComponent } from './jumboprint.component';

describe('JumboprintComponent', () => {
  let component: JumboprintComponent;
  let fixture: ComponentFixture<JumboprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumboprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
