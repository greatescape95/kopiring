import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenetMainComponent } from './contenet-main.component';

describe('ContenetMainComponent', () => {
  let component: ContenetMainComponent;
  let fixture: ComponentFixture<ContenetMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenetMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
