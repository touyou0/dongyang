import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationListPageComponent } from './information-list-page.component';

describe('InformationListPageComponent', () => {
  let component: InformationListPageComponent;
  let fixture: ComponentFixture<InformationListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});