import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNZThailandSelectorComponent } from './ngx-nzthailand-selector.component';

describe('NgxNZThailandSelectorComponent', () => {
  let component: NgxNZThailandSelectorComponent;
  let fixture: ComponentFixture<NgxNZThailandSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxNZThailandSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNZThailandSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
