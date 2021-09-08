import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpListPageComponent } from './help-list-page.component';

describe('HelpListPageComponent', () => {
  let component: HelpListPageComponent;
  let fixture: ComponentFixture<HelpListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
