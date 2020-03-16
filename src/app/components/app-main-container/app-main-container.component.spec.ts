import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainContainerComponent } from './app-main-container.component';

describe('AppMainContainerComponent', () => {
  let component: AppMainContainerComponent;
  let fixture: ComponentFixture<AppMainContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
