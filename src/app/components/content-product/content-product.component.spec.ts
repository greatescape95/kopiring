import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProductComponent } from './content-product.component';

describe('ContentProductComponent', () => {
  let component: ContentProductComponent;
  let fixture: ComponentFixture<ContentProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
